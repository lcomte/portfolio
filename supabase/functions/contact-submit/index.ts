const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
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

    const { name, email, message }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
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

    // Save contact message to database
    const { error: insertError } = await supabase
      .from("contact_messages")
      .insert([{ name, email, message }]);

    if (insertError) {
      console.error("Error saving contact message:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to save message" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Prepare notification email for Lucas
    const notificationEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="font-family: system-ui, -apple-system, sans-serif; background-color: #f3f4f6; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; padding: 32px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #1e3a8a; font-size: 24px; margin-bottom: 16px;">📧 New Contact Form Submission</h1>
            <p style="color: #4b5563; font-size: 16px; line-height: 24px;">
              You have received a new message from your website's contact form.
            </p>
          </div>

          <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px; margin: 24px 0;">
            <h2 style="color: #1e3a8a; font-size: 18px; margin-bottom: 16px;">Contact Details</h2>

            <div style="margin-bottom: 16px;">
              <p style="color: #4b5563; margin: 0 0 4px 0;">Name:</p>
              <p style="color: #1e3a8a; font-weight: 500; margin: 0;">${name}</p>
            </div>

            <div style="margin-bottom: 16px;">
              <p style="color: #4b5563; margin: 0 0 4px 0;">Email:</p>
              <p style="color: #1e3a8a; font-weight: 500; margin: 0;">
                <a href="mailto:${email}" style="color: #1e3a8a; text-decoration: none;">${email}</a>
              </p>
            </div>

            <div>
              <p style="color: #4b5563; margin: 0 0 8px 0;">Message:</p>
              <div style="background-color: white; border: 1px solid #e5e7eb; border-radius: 4px; padding: 12px;">
                <p style="color: #1e3a8a; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a href="mailto:${email}?subject=Re: Your message on lucascomte.com" 
               style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500;">
              Reply to ${name}
            </a>
          </div>

          <div style="margin-top: 32px; padding-top: 32px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #9ca3af; font-size: 14px;">
              Submitted on ${new Date().toLocaleString()} via lucascomte.com
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Prepare auto-reply email for the sender
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for your message</title>
      </head>
      <body style="font-family: system-ui, -apple-system, sans-serif; background-color: #f3f4f6; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; padding: 32px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #1e3a8a; font-size: 24px; margin-bottom: 16px;">Thank you for reaching out!</h1>
            <p style="color: #4b5563; font-size: 16px; line-height: 24px;">
              Hi ${name}, I've received your message and will get back to you as soon as possible.
            </p>
          </div>

          <div style="background-color: #f8fafc; border-radius: 6px; padding: 20px; margin: 24px 0;">
            <h2 style="color: #1e3a8a; font-size: 18px; margin-bottom: 12px;">Your message:</h2>
            <div style="background-color: white; border: 1px solid #e5e7eb; border-radius: 4px; padding: 12px;">
              <p style="color: #4b5563; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="text-align: center; margin: 24px 0;">
            <p style="color: #4b5563;">
              In the meantime, feel free to check out my latest projects and AI solutions.
            </p>
            <a href="https://lucascomte.com" 
               style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 500; margin-top: 8px;">
              Visit My Portfolio
            </a>
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

    // For now, we'll log the emails instead of sending them
    // You can integrate with your preferred email service here
    console.log("Contact form submission successful");
    console.log("From:", name, "-", email);
    console.log("Message:", message);
    console.log("Would send notification email to Lucas");
    console.log("Would send auto-reply to sender");

    return new Response(
      JSON.stringify({ 
        message: "Thank you for your message! I'll get back to you soon." 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Contact form submission error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});