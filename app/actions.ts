'use server'

import { calculateEstimate } from '../lib/pricing';
import sgMail from '@sendgrid/mail';
import Twilio from 'twilio';

// --- CONFIGURATION ---
// IMPORTANT: Replace these with environment variables in a real application
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || 'YOUR_SENDGRID_API_KEY';
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID || 'YOUR_TWILIO_ACCOUNT_SID';
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN || 'YOUR_TWILIO_AUTH_TOKEN';
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER || 'YOUR_TWILIO_PHONE_NUMBER';

const ADMIN_EMAIL = 'admin@example.com'; // The email address that receives a copy
const OWNER_PHONE_NUMBER = '+15551234567'; // The phone number that receives the SMS

sgMail.setApiKey(SENDGRID_API_KEY);
const twilioClient = Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

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
    [key: string]: unknown; // Allow for other dynamic form fields
}

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

// --- SERVER ACTIONS ---

export async function submitEstimate(prevState: FormState, formData: FormData): Promise<FormState> {
    const estimateFormData: EstimateFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        address: formData.get('address') as string,
        service: formData.get('service') as string,
        island: formData.get('island') as string,
    };

    try {
        // 1. Recalculate estimate on the server to ensure accuracy
        // @ts-expect-error -- formData is structurally compatible with the expected type, but not explicitly typed as such.
        const [lowEstimate, highEstimate] = calculateEstimate(estimateFormData);

        // 2. Format a summary of the project details
        const projectDetails = `Service: ${estimateFormData.service}\nIsland: ${estimateFormData.island}\n`;
        const estimateRange = `$${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`;

        // 3. Send Email to Client
        const clientMsg = {
            to: estimateFormData.email,
            from: ADMIN_EMAIL, // Must be a verified sender in SendGrid
            subject: 'Your Project Estimate from Dumore Construction',
            text: `Hi ${estimateFormData.name},\n\nThank you for your interest! Here is your estimated cost:\n\n${projectDetails}\nEstimated Range: ${estimateRange}\n\nPlease note: this is a preliminary estimate. A formal quote will be provided after a detailed consultation.\n\nBest,\nThe Dumore Construction Team`,
        };
        await sgMail.send(clientMsg);

        // 4. Send Email to Admin
        const adminMsg = {
            to: ADMIN_EMAIL,
            from: ADMIN_EMAIL,
            subject: `New Estimate Request from ${estimateFormData.name}`,
            text: `A new estimate request has been submitted.\n\nClient Details:\nName: ${estimateFormData.name}\nEmail: ${estimateFormData.email}\nPhone: ${estimateFormData.phone}\nAddress: ${estimateFormData.address}\n\nProject Details:\n${projectDetails}\nEstimated Range: ${estimateRange}`,
        };
        await sgMail.send(adminMsg);

        // 5. Send SMS to Owner via Twilio
        const smsMessage = `New estimate from ${estimateFormData.name} for ${estimateFormData.service}. Range: ${estimateRange}. Email: ${estimateFormData.email}`;
        await twilioClient.messages.create({
            body: smsMessage,
            from: TWILIO_PHONE_NUMBER,
            to: OWNER_PHONE_NUMBER,
        });

        return { success: true, message: 'Estimate submitted successfully!' };

    } catch (error) {
        console.error("Error in submitEstimate action:", error);
        return { success: false, message: 'There was an error submitting your estimate. Please try again later.' };
    }
}

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
    const contactFormData: ContactFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
    };

    try {
        // 1. Send Email to Admin
        const adminMsg = {
            to: ADMIN_EMAIL,
            from: ADMIN_EMAIL,
            subject: `New Contact Form Submission from ${contactFormData.name}`,
            text: `A new contact form submission has been received.\n\nClient Details:\nName: ${contactFormData.name}\nEmail: ${contactFormData.email}\nMessage: ${contactFormData.message}`,
        };
        await sgMail.send(adminMsg);

        // 2. Send Confirmation Email to Client
        const clientMsg = {
            to: contactFormData.email,
            from: ADMIN_EMAIL, // Must be a verified sender in SendGrid
            subject: 'Thank you for contacting Dumore Construction',
            text: `Hi ${contactFormData.name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nBest,\nThe Dumore Construction Team`,
        };
        await sgMail.send(clientMsg);

        return { success: true, message: 'Your message has been submitted successfully!' };

    } catch (error) {
        console.error("Error in submitContactForm action:", error);
        return { success: false, message: 'There was an error submitting your message. Please try again later.' };
    }
}
