import { Twilio } from 'twilio';

const accountSid = 'TWILIO_ACCOUNT_SID: ACfc4e6e08a26e74bea4425caed7a4dcb6';
const authToken = '57e1c8de5063f87035a097b71a732ff9';

const twilioClient = new Twilio(accountSid, authToken);

export async function sendMessage(to: string, body: string) {
  try {
    await twilioClient.messages.create({
      body,
      from: '+18454980965',
      to,
    });
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

export async function receiveMessage(messageSid: string) {
  try {
    const message = await twilioClient.messages(messageSid).fetch();
    console.log('Received message:', message.body);
    return message;
  } catch (error) {
    console.error('Error receiving message:', error);
    throw error;
  }
}
