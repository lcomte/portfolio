import AWS from 'aws-sdk';

// Configure AWS SES
AWS.config.update({
    region: process.env.AWS_REGION!,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
});

const ses = new AWS.SES();

interface EmailParams {
    to: string;
    subject: string;
    template: string;
    variables: Record<string, string>;
}


/**
 * Replace placeholders in the template with actual values.
 * @param template - The email template containing placeholders (e.g., {{variable}}).
 * @param variables - An object mapping placeholders to their values.
 * @returns The email content with placeholders replaced.
 */
const replaceTemplateVariables = (template: string, variables: Record<string, string>): string => {
    return template.replace(/{{(.*?)}}/g, (_, key) => variables[key.trim()] || '');
};


export const sendEmail = async ({ to, subject, template, variables }: EmailParams): Promise<void> => {
    const html = replaceTemplateVariables(template, variables);
    const params: AWS.SES.SendEmailRequest = {
        Destination: {
            ToAddresses: [to],
        },
        Message: {
            Body: {
                Html: { Charset: 'UTF-8', Data: html },
            },
            Subject: { Charset: 'UTF-8', Data: subject },
        },
        Source: process.env.FROM_EMAIL!,
    };

    try {
        await ses.sendEmail(params).promise();
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error(`Failed to send email to ${to}:`, error);
    }
};