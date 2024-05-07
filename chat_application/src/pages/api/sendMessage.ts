import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const sendSMS = async (to: string, message: string) => {
    const accountSid = 'ACfc4e6e08a26e74bea4425caed7a4dcb6';
    const authToken = '57e1c8de5063f87035a097b71a732ff9';
    
    try {
        const response = await axios.post(
            `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
            new URLSearchParams({
                To: to,
                Body: message,
                From: '+18454980965'
            }),
            {
                auth: {
                    username: accountSid,
                    password: authToken
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        return response.data;
    } catch (error:any) {
        throw new Error('Failed to send message: ' + error.message);
    }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { to, message } = req.body;
        
        try {
            const response = await sendSMS(to, message);
            console.log('Message sent:', response.sid);
            res.status(200).json({ success: true, message: 'Message sent successfully.', messageId: response.sid });
        } catch (error) {
            console.error('Error sending message:', error);
            res.status(500).json({ success: false, error: 'Failed to send message.' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method not allowed' });
    }
}
