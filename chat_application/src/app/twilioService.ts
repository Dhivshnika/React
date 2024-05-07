import Twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const client = Twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

export const sendSMS = async (to: string, message: string) => {
    try {
        await client.messages.create({
            body: message,
            from: process.env.TWILIO_PHONE_NUMBER,
            to
        });
        console.log('Message sent successfully.');
    } catch (error) {
        console.error('Error sending message:', error);
    }
};
