'use server'

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { calculateEstimate } from '../lib/pricing';

// --- CONFIGURATION ---
const { 
    AWS_ACCESS_KEY_ID, 
    AWS_SECRET_ACCESS_KEY, 
    AWS_REGION, 
    ADMIN_EMAIL, 
    OWNER_PHONE_NUMBER 
} = process.env;

const isNotificationConfigured = 
    AWS_ACCESS_KEY_ID && 
    AWS_SECRET_ACCESS_KEY && 
    AWS_REGION &&
    ADMIN_EMAIL &&
    OWNER_PHONE_NUMBER;

let sesClient: SESClient;
let snsClient: SNSClient;

if (isNotificationConfigured) {
    sesClient = new SESClient({
        region: AWS_REGION,
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
    });
    snsClient = new SNSClient({ 
        region: AWS_REGION,
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
    });
}

// --- TYPE DEFINITIONS ---

interface FormState {
    success: boolean;
    message: string;
}

interface EstimateFormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    service: string;
    island: string;
    [key: string]: any; // Allow for other dynamic form fields
}

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

// --- HELPER FUNCTIONS ---
const sendEmail = async (to: string, subject: string, body: string) => {
    const command = new SendEmailCommand({
        Source: ADMIN_EMAIL!, // SES must have this email address verified
        Destination: { ToAddresses: [to] },
        Message: {
            Subject: { Data: subject },
            Body: { Text: { Data: body } },
        },
    });
    return sesClient.send(command);
};

const sendSms = async (phoneNumber: string, message: string) => {
    const command = new PublishCommand({
        PhoneNumber: phoneNumber,
        Message: message,
    });
    return snsClient.send(command);
};

// --- SERVER ACTIONS ---

export async function submitEstimate(prevState: FormState, formData: FormData): Promise<FormState> {
    
    const data: EstimateFormData = Array.from(formData.keys()).reduce((acc, key) => {
        acc[key] = formData.get(key);
        return acc;
    }, {} as EstimateFormData);

    if (!isNotificationConfigured) {
        console.warn("\n### NOTIFICATION SERVICES INACTIVE ###");
        console.warn("AWS environment variables are not set. Skipping Email/SMS notifications.");
        console.warn("Form submission will succeed without sending notifications.");
        return { success: true, message: 'Estimate submitted successfully! (Notifications disabled)' };
    }

    try {
        const [lowEstimate, highEstimate] = calculateEstimate(data);
        const projectDetails = `Service: ${data.service}\nIsland: ${data.island}`;
        const estimateRange = `$${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`;

        // Email to Client
        const clientBody = `Hi ${data.name},\n\nThank you for your interest! Here is your estimated cost:\n\n${projectDetails}\nEstimated Range: ${estimateRange}\n\nPlease note: this is a preliminary estimate. A formal quote will be provided after a detailed consultation.\n\nBest,\nThe Dumore Construction Team`;
        await sendEmail(data.email, 'Your Project Estimate from Dumore Construction', clientBody);

        // Email to Admin
        const adminBody = `A new estimate request has been submitted.\n\nClient Details:\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nAddress: ${data.address}\n\nProject Details:\n${projectDetails}\nEstimated Range: ${estimateRange}`;
        await sendEmail(ADMIN_EMAIL!, `New Estimate Request from ${data.name}`, adminBody);
        
        // SMS to Owner
        const smsMessage = `New estimate from ${data.name} for ${data.service}. Range: ${estimateRange}. Email: ${data.email}`;
        await sendSms(OWNER_PHONE_NUMBER!, smsMessage);

        return { success: true, message: 'Estimate submitted successfully!' };

    } catch (error) {
        console.error("Error in submitEstimate action:", error);
        // Return success to the user, but log the backend error
        return { success: true, message: 'Your estimate was submitted, but an error occurred sending notifications.' };
    }
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
    const data: ContactFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
    };
    
    if (!isNotificationConfigured) {
        console.warn("\n### NOTIFICATION SERVICES INACTIVE ###");
        console.warn("AWS environment variables are not set. Skipping Email notifications.");
        console.warn("Form submission will succeed without sending notifications.");
        return { success: true, message: 'Your message has been submitted successfully! (Notifications disabled)' };
    }

    try {
        // Email to Admin
        const adminBody = `A new contact form submission has been received.\n\nClient Details:\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;
        await sendEmail(ADMIN_EMAIL!, `New Contact Form from ${data.name}`, adminBody);

        // Confirmation Email to Client
        const clientBody = `Hi ${data.name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nBest,\nThe Dumore Construction Team`;
        await sendEmail(data.email, 'Thank you for contacting Dumore Construction', clientBody);

        return { success: true, message: 'Your message has been sent successfully!' };

    } catch (error) {
        console.error("Error in submitContactForm action:", error);
        // Return success to the user, but log the backend error
        return { success: true, message: 'Your message was submitted, but an error occurred sending notifications.' };
    }
}
