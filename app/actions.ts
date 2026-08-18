'use server'

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { calculateEstimate } from '../lib/pricing';

// --- CONFIGURATION ---
const { 
    AWS_ACCESS_KEY_ID, 
    AWS_SECRET_ACCESS_KEY, 
    AWS_REGION, 
    ADMIN_EMAIL, 
    OWNER_EMAIL, 
    SENDER_EMAIL
} = process.env;

const isNotificationConfigured = 
    AWS_ACCESS_KEY_ID && 
    AWS_SECRET_ACCESS_KEY && 
    AWS_REGION &&
    (ADMIN_EMAIL || OWNER_EMAIL) &&
    SENDER_EMAIL;

let sesClient: SESClient;

if (isNotificationConfigured) {
    sesClient = new SESClient({
        region: AWS_REGION!,
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
            details += `\nSize: ${data.newConstructionSize} sq ft`;
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

const sendEmail = async (to: string[], subject: string, body: string) => {
    if (!isNotificationConfigured) {
        console.warn("sendEmail called but notifications are not configured.");
        return;
    }
    const command = new SendEmailCommand({
        Source: SENDER_EMAIL!,
        Destination: { ToAddresses: to },
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
        return { success: true, message: 'Form submitted successfully, but notifications are not configured on the server.' };
    }

    try {
        const [lowEstimate, highEstimate] = calculateEstimate(data);
        const projectDetails = generateProjectDetails(data);
        const estimateRange = `$${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`;

        // Consolidated, actionable email for the owner/developer
        const notificationBody = `ACTION REQUIRED: New Project Estimate Request\n\nA new estimate request has been submitted by a potential client.\n\n== Client Information ==\nName: ${data.name}\nEmail: ${data.email}\nAddress: ${data.address}\n\nPhone: ${data.phone}\n(Formatted for easy copy-paste on mobile)\n\n== Project Details ==\n${projectDetails}\n\n== Estimated Cost Range ==\n${estimateRange}`;
        
        const recipients = new Set<string>();
        if (OWNER_EMAIL) recipients.add(OWNER_EMAIL);
        if (ADMIN_EMAIL) recipients.add(ADMIN_EMAIL);
        recipients.add("LequireS001@hawaii.rr.com"); // Hardcoded recipient

        // Ensure the person who submitted the form doesn't get the admin notification
        recipients.delete(data.email);

        if(recipients.size > 0) {
            await sendEmail([...recipients], `New Estimate Request from ${data.name}`, notificationBody);
        }

        return { success: true, message: 'Thank you! Your submission has been received.' };

    } catch (error) {
        console.error("Error in submitEstimate action:", error);
        return { success: true, message: 'Thank you for your submission! There was an issue with our notification system, but your request was received.' };
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
        return { success: true, message: 'Form submitted successfully, but notifications are not configured on the server.' };
    }

    try {
        // Consolidated, actionable email for the owner/developer
        const notificationBody = `ACTION REQUIRED: New Contact Form Submission\n\nA new message has been received through the website contact form. Please review and respond.\n\n== Sender Information ==\nName: ${data.name}\nEmail: ${data.email}\n\n== Message ==\n${data.message}`;

        const recipients = new Set<string>();
        if (OWNER_EMAIL) recipients.add(OWNER_EMAIL);
        if (ADMIN_EMAIL) recipients.add(ADMIN_EMAIL);
        recipients.add("LequireS001@hawaii.rr.com");

        recipients.delete(data.email);

        if(recipients.size > 0) {
            await sendEmail([...recipients], `New Contact Form Submission from ${data.name}`, notificationBody);
        }

        return { success: true, message: 'Thank you! Your message has been sent successfully!' };

    } catch (error) {
        console.error("Error in submitContactForm action:", error);
        const errorMessage = error instanceof Error ? error.message : String(error);
        return { success: true, message: 'Thank you for your submission! There was an issue with our notification system, but your request was received.' };
    }
}
