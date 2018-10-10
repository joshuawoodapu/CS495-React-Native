const twilio = require('twilio');

const accountSid = 'ACfbab559762329be879e84d7c5c8b5dac';
const authToken = 'a3bee3c841e104849458060bba38c913';

module.exports = new twilio.Twilio(accountSid, authToken);
