'use server'

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { calculateEstimate } from '../lib/pricing';

// --- CONFIGURATION ---
// Check for all required environment variables for notifications
const { 
    AWS_ACCESS_KEY_ID, 
    AWS_SECRET_ACCESS_KEY, 
    AWS_REGION, 
    ADMIN_EMAIL, 
    OWNER_EMAIL, 
    CLIENT_EMAIL, 
    OWNER_PHONE_NUMBER, 
    SENDER_EMAIL
} = process.env;

const isNotificationConfigured = 
    AWS_ACCESS_KEY_ID && 
    AWS_SECRET_ACCESS_KEY && 
    AWS_REGION &&
    ADMIN_EMAIL &&
    OWNER_EMAIL && 
    CLIENT_EMAIL && 
    OWNER_PHONE_NUMBER &&
    SENDER_EMAIL;

let sesClient: SESClient;
let snsClient: SNSClient;

if (isNotificationConfigured) {
    sesClient = new SESClient({
        region: AWS_REGION,
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID!,
            secretAccessKey: AWS_SECRET_ACCESS_KEY!,
        },
    });
    snsClient = new SNSClient({ 
        region: AWS_REGION,
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID!,
            secretAccessKey: AWS_SECRET_ACCESS_KEY!,
        },
    });
}

// --- TYPE DEFINITIONS ---

interface FormState {
    success: boolean;
    message: string;
}

// This interface now mirrors FormDataState from the frontend
interface EstimateFormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    service: string;
    island: string;
    kitchens: number | string; 
    kitchenLocation: string;
    kitchenQuality: string;
    bathrooms: number | string;
    bathroomLocation: string;
    bathroomQuality: string;
    additionsRooms: number | string;
    additionsKitchens: number | string;
    additionsKitchenLocation: string;
    additionsQuality: string;
    newConstructionSize: number | string;
    newConstructionBedrooms: number | string;
    newConstructionBathrooms: number | string;
    newConstructionQuality: string;
    homeRemodelingSqft: number | string;
    homeRemodelingQuality: string;
}


interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

// --- HELPER FUNCTIONS ---
// Modified to use SENDER_EMAIL as the source
const sendEmail = async (to: string, subject: string, body: string) => {
    if (!isNotificationConfigured) {
        console.warn("sendEmail called but notifications are not configured.");
        return; // Exit if not configured
    }
    const command = new SendEmailCommand({
        Source: SENDER_EMAIL!, // Use SENDER_EMAIL as the verified source
        Destination: { ToAddresses: [to] },
        Message: {
            Subject: { Data: subject },
            Body: { Text: { Data: body } },
        },
    });
    return sesClient.send(command);
};

// SMS helper remains the same, assuming snsClient is configured
const sendSms = async (phoneNumber: string, message: string) => {
     if (!isNotificationConfigured) {
        console.warn("sendSms called but notifications are not configured.");
        return; // Exit if not configured
    }
    const command = new PublishCommand({
        PhoneNumber: phoneNumber,
        Message: message,
    });
    return snsClient.send(command);
};

// --- SERVER ACTIONS ---

export async function submitEstimate(prevState: FormState, formData: FormData): Promise<FormState> {
    
    const rawData = Object.fromEntries(formData.entries());
    
    const data: EstimateFormData = {
        name: String(rawData.name ?? ''),
        email: String(rawData.email ?? ''),
        phone: String(rawData.phone ?? ''),
        address: String(rawData.address ?? ''),
        service: String(rawData.service ?? ''),
        island: String(rawData.island ?? ''),
        kitchens: Number(rawData.kitchens ?? 0),
        kitchenLocation: String(rawData.kitchenLocation ?? ''),
        kitchenQuality: String(rawData.kitchenQuality ?? ''),
        bathrooms: Number(rawData.bathrooms ?? 0),
        bathroomLocation: String(rawData.bathroomLocation ?? ''),
        bathroomQuality: String(rawData.bathroomQuality ?? ''),
        additionsRooms: Number(rawData.additionsRooms ?? 0),
        additionsKitchens: Number(rawData.additionsKitchens ?? 0),
        additionsKitchenLocation: String(rawData.additionsKitchenLocation ?? ''),
        additionsQuality: String(rawData.additionsQuality ?? ''),
        newConstructionSize: Number(rawData.newConstructionSize ?? 0),
        newConstructionBedrooms: Number(rawData.newConstructionBedrooms ?? 0),
        newConstructionBathrooms: Number(rawData.newConstructionBathrooms ?? 0),
        newConstructionQuality: String(rawData.newConstructionQuality ?? ''),
        homeRemodelingSqft: Number(rawData.homeRemodelingSqft ?? 0),
        homeRemodelingQuality: String(rawData.homeRemodelingQuality ?? ''),
    };

    // If notifications are not configured, log a warning and return success.
    if (!isNotificationConfigured) {
        console.warn("\n### NOTIFICATION SERVICES INACTIVE ###");
        console.warn("AWS environment variables or application-specific details (like ADMIN_EMAIL, SENDER_EMAIL) are not fully set. Skipping Email/SMS notifications.");
        console.warn("Form submission will succeed without sending notifications.");
        // Simulate success for the user, but indicate notifications are off.
        return { success: true, message: 'Estimate submitted successfully! (Notifications disabled due to missing configuration)' };
    }

    try {
        // Calculate estimate using the data object
        const [lowEstimate, highEstimate] = calculateEstimate(data);
        const projectDetails = `Service: ${data.service}\nIsland: ${data.island}`;
        const estimateRange = `$${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`;

        // --- Email Notifications ---
        // Define recipient list dynamically
        const toAddresses: string[] = [];
        if (data.email) toAddresses.push(data.email); // Client email
        if (ADMIN_EMAIL) toAddresses.push(ADMIN_EMAIL); // Admin email
        // Use OWNER_EMAIL if available, otherwise fall back to ADMIN_EMAIL
        const ownerRecipient = OWNER_EMAIL || ADMIN_EMAIL; 
        if (ownerRecipient && !toAddresses.includes(ownerRecipient)) {
            toAddresses.push(ownerRecipient);
        }
        
        // Ensure SENDER_EMAIL is available for SES
        if (!SENDER_EMAIL) {
            throw new Error("SENDER_EMAIL environment variable is not set. Cannot send emails.");
        }

        // Email to Client and Admin/Owner
        const clientBody = `Hi ${data.name},\n\nThank you for your interest! Here is your estimated cost:\n\n${projectDetails}\nEstimated Range: ${estimateRange}\n\nPlease note: this is a preliminary estimate. A formal quote will be provided after a detailed consultation.\n\nBest,\nThe Dumore Construction Team`;
        const adminBody = `A new estimate request has been submitted.\n\nClient Details:\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nAddress: ${data.address}\n\nProject Details:\n${projectDetails}\nEstimated Range: ${estimateRange}`;

        // Send to client's email and admin/owner emails
        await sendEmail(data.email, 'Your Project Estimate from Dumore Construction', clientBody);
        if (ADMIN_EMAIL && ADMIN_EMAIL !== data.email) { // Avoid sending duplicate email if admin is also the client
             await sendEmail(ADMIN_EMAIL, `New Estimate Request from ${data.name}`, adminBody);
        }
        // Send to owner if different from client and admin
        if (ownerRecipient && ownerRecipient !== data.email && ownerRecipient !== ADMIN_EMAIL) {
             await sendEmail(ownerRecipient, `New Estimate Request from ${data.name}`, adminBody);
        }


        // --- SMS Notification ---
        const smsMessage = `New estimate from ${data.name} for ${data.service}. Range: ${estimateRange}. Email: ${data.email}`;
        
        // Use OWNER_PHONE_NUMBER from environment, or fallback to a hardcoded number for development if not set.
        const smsTargetNumber = process.env.NODE_ENV === 'development' ? 
            (OWNER_PHONE_NUMBER || '+15551234567') // Replace with your dev phone number if OWNER_PHONE_NUMBER is missing
            : OWNER_PHONE_NUMBER; 

        if (smsTargetNumber) {
            await sendSms(smsTargetNumber, smsMessage);
        } else {
            console.warn("OWNER_PHONE_NUMBER not set. Skipping SMS notification.");
        }

        return { success: true, message: 'Estimate submitted successfully!' };

    } catch (error) {
        console.error("Error in submitEstimate action:", error);
        // Log the detailed error for backend debugging
        console.error("AWS Error Details:", JSON.stringify(error, null, 2)); 
        
        // Return success to the user, but indicate a notification issue.
        return { success: true, message: 'Estimate submitted, but there was an issue sending notifications. Please check your configuration.' };
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
        console.warn("AWS environment variables or application-specific details are not fully set. Skipping Email notifications.");
        console.warn("Form submission will succeed without sending notifications.");
        return { success: true, message: 'Your message has been submitted successfully! (Notifications disabled due to missing configuration)' };
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
        console.error("AWS Error Details:", JSON.stringify(error, null, 2)); 
        return { success: true, message: 'Your message was submitted, but an error occurred sending notifications. Please check your configuration.' };
    }
}
