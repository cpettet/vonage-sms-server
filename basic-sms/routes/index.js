const express = require("express");
const smsRouter = require("./api/sms");

const router = express.Router();

router.use("/api", smsRouter);

router.get("/test", (req, res) => {
  res.send("Hello, world");
});

module.exports = router;
