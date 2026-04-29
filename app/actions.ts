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

export async function submitEstimate(formData: any) {
    try {
        // 1. Recalculate estimate on the server to ensure accuracy
        const [lowEstimate, highEstimate] = calculateEstimate(formData);

        // 2. Format a summary of the project details
        let projectDetails = `Service: ${formData.service}\nIsland: ${formData.island}\n`;
        // Add more details based on the service
        // This part can be expanded to be more detailed

        const estimateRange = `$${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`;

        // 3. Send Email to Client
        const clientMsg = {
            to: formData.email,
            from: ADMIN_EMAIL, // Must be a verified sender in SendGrid
            subject: 'Your Project Estimate from Dumore Construction',
            text: `Hi ${formData.name},\n\nThank you for your interest! Here is your estimated cost:\n\n${projectDetails}\nEstimated Range: ${estimateRange}\n\nPlease note: this is a preliminary estimate. A formal quote will be provided after a detailed consultation.\n\nBest,\nThe Dumore Construction Team`,
            // You can also include an html version
        };
        await sgMail.send(clientMsg);

        // 4. Send Email to Admin
        const adminMsg = {
            to: ADMIN_EMAIL,
            from: ADMIN_EMAIL,
            subject: `New Estimate Request from ${formData.name}`,
            text: `A new estimate request has been submitted.\n\nClient Details:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\n\nProject Details:\n${projectDetails}\nEstimated Range: ${estimateRange}`,
        };
        await sgMail.send(adminMsg);

        // 5. Send SMS to Owner via Twilio
        const smsMessage = `New estimate from ${formData.name} for ${formData.service}. Range: ${estimateRange}. Email: ${formData.email}`;
        await twilioClient.messages.create({
            body: smsMessage,
            from: TWILIO_PHONE_NUMBER,
            to: OWNER_PHONE_NUMBER,
        });

        return { success: true, message: 'Estimate submitted successfully!' };

    } catch (error) {
        console.error("Error in submitEstimate action:", error);
        // It's good practice to check for specific error types from providers
        // For now, we'll return a generic error
        return { success: false, message: 'There was an error submitting your estimate. Please try again later.' };
    }
}
