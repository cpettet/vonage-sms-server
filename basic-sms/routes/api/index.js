const express = require("express");

const smsRouter = require("./sms");
const openTokRouter = require("./openTok");

const router = express.Router();
router.use("/sms", smsRouter);
router.use("/open-tok", openTokRouter);

module.exports = router;
