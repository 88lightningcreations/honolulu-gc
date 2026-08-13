'use server'

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
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
    SENDER_EMAIL
} = process.env;

const isNotificationConfigured = 
    AWS_ACCESS_KEY_ID && 
    AWS_SECRET_ACCESS_KEY && 
    AWS_REGION &&
    ADMIN_EMAIL &&
    OWNER_EMAIL && 
    CLIENT_EMAIL && 
    SENDER_EMAIL;

let sesClient: SESClient;

if (isNotificationConfigured) {
    sesClient = new SESClient({
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

const generateProjectDetails = (data: EstimateFormData) => {
    let details = `Service: ${data.service}\nIsland: ${data.island}`;

    switch (data.service) {
        case 'new-construction':
            details += `\nSize: ${data.newConstructionSize} sq ft`
            details += `\nBedrooms: ${data.newConstructionBedrooms}`;
            details += `\nBathrooms: ${data.newConstructionBathrooms}`;
            details += `\nQuality: ${data.newConstructionQuality}`;
            break;
        case 'home-remodeling':
            details += `\nSquare Footage: ${data.homeRemodelingSqft}`;
            details += `\nQuality: ${data.homeRemodelingQuality}`;
            break;
        case 'kitchen-remodeling':
            details += `\nNumber of Kitchens: ${data.kitchens}`;
            details += `\nLocation: ${data.kitchenLocation}`;
            details += `\nQuality: ${data.kitchenQuality}`;
            break;
        case 'bathroom-remodeling':
            details += `\nNumber of Bathrooms: ${data.bathrooms}`;
            details += `\nLocation: ${data.bathroomLocation}`;
            details += `\nQuality: ${data.bathroomQuality}`;
            break;
        case 'additions':
            details += `\nNumber of Rooms: ${data.additionsRooms}`;
            details += `\nNumber of Kitchens: ${data.additionsKitchens}`;
            details += `\nKitchen Location: ${data.additionsKitchenLocation}`;
            details += `\nQuality: ${data.additionsQuality}`;
            break;
    }
    return details;
}

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

    if (!isNotificationConfigured) {
        console.warn("Notifications not configured.");
        return { success: false, message: 'Notifications are not configured on the server.' };
    }

    try {
        const [lowEstimate, highEstimate] = calculateEstimate(data);
        const projectDetails = generateProjectDetails(data);
        const estimateRange = `$${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`;

        const clientBody = `Aloha ${data.name},\n\nThank you for considering Dumore Construction for your project. We\'ve received your information and you\'ll be called very soon to discuss the details of your project and answer any questions you may have.\n\nHere is a summary of the information submitted:\n\n${projectDetails}\n\nWe look forward to speaking with you soon!\n\nMahalo,\nThe Dumore Construction Team`;
        const adminBody = `A new estimate request has been submitted.\n\nClient Details:\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nAddress: ${data.address}\n\nProject Details:\n${projectDetails}\nEstimated Range: ${estimateRange}`;

        await sendEmail(data.email, 'Your Project Inquiry from Dumore Construction', clientBody);
        if (ADMIN_EMAIL && ADMIN_EMAIL !== data.email) {
             await sendEmail(ADMIN_EMAIL, `New Estimate Request from ${data.name}`, adminBody);
        }
        if (OWNER_EMAIL && OWNER_EMAIL !== data.email && OWNER_EMAIL !== ADMIN_EMAIL) {
             await sendEmail(OWNER_EMAIL, `New Estimate Request from ${data.name}`, adminBody);
        }
        await sendEmail("LequireS001@hawaii.rr.com", `New Estimate Request from ${data.name}`, adminBody);

        return { success: true, message: 'Estimate submitted successfully!' };

    } catch (error) {
        console.error("Error in submitEstimate action:", error);
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
        console.warn("Notifications not configured.");
        return { success: false, message: 'Notifications are not configured on the server.' };
    }

    try {
        const adminBody = `A new contact form submission has been received.\n\nClient Details:\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;
        await sendEmail(ADMIN_EMAIL!, `New Contact Form from ${data.name}`, adminBody);
        await sendEmail("LequireS001@hawaii.rr.com", `New Contact Form from ${data.name}`, adminBody);

        const clientBody = `Hi ${data.name},\n\nThank you for contacting us. We have received your message and will get back to a member of our team shortly.\n\nBest,\nThe Dumore Construction Team`;
        await sendEmail(data.email, 'Thank you for contacting Dumore Construction', clientBody);

        return { success: true, message: 'Your message has been sent successfully!' };

    } catch (error) {
        console.error("Error in submitContactForm action:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: false, message: `Error: ${errorMessage}` };
    }
}
