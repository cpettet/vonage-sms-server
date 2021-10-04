const express = require("express");
const Vonage = require("@vonage/server-sdk");
require("dotenv").config();

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

const router = express.Router();

router.post("/", (req, res) => {
  const { text } = req.body;
  const from = "18663118874";
  const to = process.env.VONAGE_NUMBER;

  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Response data:", responseData.messages[0])
      if (responseData.messages[0]["status"] === "0") {
        return res.status(200).json({ message: "Message sent" });
      } else {
        console.log("Response data:", responseData)
        const err = new Error("Message failed");
        err.title = "Message Failed";
        err.errors = [responseData.messages[0]["error-text"]];
        err.status = 500;
        return res.json({ error: err });
      }
    }
  });
});

module.exports = router;
