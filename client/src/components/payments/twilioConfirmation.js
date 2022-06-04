import React from 'react'
const accountSid = 'ACbd5d9bebb38ff6e46ea9426ec80f0f6d'; 
const authToken = '[AuthToken]'; 
const client = require('twilio')(accountSid, authToken); 

export default function TwilioConfirmation({user}) {
  return (
    client.messages
      .create({
        body: 'Thank you for your payment to EdUp!',
        messagingServiceSid: 'MGdb35758bd8d2c959d3deebafe7d51cb1',
        to: `+${user.phoneNumber}`
      })
      .then(message => console.log(message.sid))
      .done()
  );
};

