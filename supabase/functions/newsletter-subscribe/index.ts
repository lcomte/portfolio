const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface SubscribeRequest {
  email: string;
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const { email }: SubscribeRequest = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    const { createClient } = await import("npm:@supabase/supabase-js@2");
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if email already exists
    const { data: existingSubscription, error: checkError } = await supabase
      .from("newsletter_subscriptions")
      .select("id, is_active")
      .eq("email", email)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Error checking existing subscription:", checkError);
      return new Response(
        JSON.stringify({ error: "Database error" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    if (existingSubscription) {
      if (existingSubscription.is_active) {
        return new Response(
          JSON.stringify({ message: "You are already subscribed to our newsletter!" }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      } else {
        // Reactivate subscription
        const { error: updateError } = await supabase
          .from("newsletter_subscriptions")
          .update({ is_active: true, updated_at: new Date().toISOString() })
          .eq("email", email);

        if (updateError) {
          console.error("Error reactivating subscription:", updateError);
          return new Response(
            JSON.stringify({ error: "Failed to reactivate subscription" }),
            {
              status: 500,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }
      }
    } else {
      // Create new subscription
      const { error: insertError } = await supabase
        .from("newsletter_subscriptions")
        .insert([{ email }]);

      if (insertError) {
        console.error("Error creating subscription:", insertError);
        return new Response(
          JSON.stringify({ error: "Failed to subscribe" }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
    }

    // Send confirmation email to subscriber
    const confirmationEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Lucas Comte's Newsletter</title>
      </head>
      <body style="font-family: system-ui, -apple-system, sans-serif; background-color: #f3f4f6; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; padding: 32px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #1e3a8a; font-size: 24px; margin-bottom: 16px;">Welcome to the Newsletter!</h1>
            <p style="color: #4b5563; font-size: 16px; line-height: 24px;">
              Thank you for subscribing to my newsletter. You'll receive updates about AI solutions, development insights, and my latest projects.
            </p>
          </div>
          
          <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px; margin: 24px 0;">
            <h2 style="color: #1e3a8a; font-size: 18px; margin-bottom: 12px;">What to expect:</h2>
            <ul style="color: #4b5563; margin: 0; padding-left: 20px;">
              <li>Latest updates on AI solutions and automation</li>
              <li>Behind-the-scenes insights from projects like Callavox</li>
              <li>Development tips and best practices</li>
              <li>Exclusive content and early access to new features</li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 32px;">
            <p style="color: #6b7280; font-size: 14px;">
              Visit my website: <a href="https://lucascomte.com" style="color: #1d4ed8;">lucascomte.com</a>
            </p>
          </div>

          <div style="margin-top: 32px; padding-top: 32px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #9ca3af; font-size: 14px;">
              © ${new Date().getFullYear()} Lucas Comte. All rights reserved.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send notification email to Lucas
    const notificationEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Newsletter Subscription</title>
      </head>
      <body style="font-family: system-ui, -apple-system, sans-serif; background-color: #f3f4f6; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; padding: 32px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #1e3a8a; font-size: 24px; margin-bottom: 16px;">🎉 New Newsletter Subscription!</h1>
            <p style="color: #4b5563; font-size: 16px; line-height: 24px;">
              Someone just subscribed to your newsletter.
            </p>
          </div>

          <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px; margin: 24px 0;">
            <h2 style="color: #1e3a8a; font-size: 18px; margin-bottom: 16px;">Subscriber Details</h2>
            <div style="margin-bottom: 12px;">
              <p style="color: #4b5563; margin: 0 0 4px 0;">Email:</p>
              <p style="color: #1e3a8a; font-weight: 500; margin: 0;">${email}</p>
            </div>
            <div>
              <p style="color: #4b5563; margin: 0 0 4px 0;">Subscribed at:</p>
              <p style="color: #1e3a8a; font-weight: 500; margin: 0;">${new Date().toLocaleString()}</p>
            </div>
          </div>

          <div style="margin-top: 32px; padding-top: 32px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #9ca3af; font-size: 14px;">
              This is an automated notification from your portfolio website.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // For now, we'll return success without actually sending emails
    // You can integrate with your preferred email service (Resend, SendGrid, etc.) here
    console.log("Newsletter subscription successful for:", email);
    console.log("Would send confirmation email to subscriber");
    console.log("Would send notification email to Lucas");

    return new Response(
      JSON.stringify({ 
        message: "Successfully subscribed to the newsletter! Check your email for confirmation." 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});