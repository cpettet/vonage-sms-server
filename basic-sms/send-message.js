const Vonage = require("@vonage/server-sdk");
require("dotenv").config();

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

const from = "18663118874";
const to = "17406078053";
const text = "Hello, babes! I love you! Sent from the Vonage SMS API";

vonage.message.sendSms(from, to, text, (err, responseData) => {
  if (err) {
    console.log(err);
  } else {
    if (responseData.messages[0]["status"] === 0) {
      console.log("Message sent");
    } else {
      console.log(
        `Message failed with error: ${responseData.messages[0]["error-text"]}`
      );
    }
  }
});
