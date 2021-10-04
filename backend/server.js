require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const SmsProxy = require("./SmsProxy");

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(app.get("port"), function () {
  console.log("SMS Proxy App listening on port", app.get("port"));
});

const smsProxy = new SmsProxy();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/chat", (req, res) => {
  const userANumber = req.body.userANumber;
  const userBNumber = req.body.userBNumber;

  smsProxy.createChat(userANumber, userBNumber, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
  res.send("OK");
});

app.get("/webhooks/inbound-sms", (req, res) => {
  const from = req.query.msisdn;
  const to = req.query.to;
  const text = req.query.text;

  // Route virtual number to real number
  smsProxy.proxySms(from, text);

  res.sendStatus(204);
});

app.get("/test", (req, res) => {
  const from = "14086371198";
  const to = "17406078053";
  const text = "Hello, world. Sent from the Vonage SMS API.";

  smsProxy.createChat(from, to);

  smsProxy.sendSMS(from, to, text, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]["status"] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(
          `Message failed with error: ${responseData.messages[0]["error-text"]}`
        );
      }
    }
  });
});
