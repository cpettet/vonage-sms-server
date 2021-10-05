require("dotenv").config();
const express = require("express");
const OpenTok = require("opentok");

const router = express.Router();
const openTok = new OpenTok(
  process.env.OPENTOK_API_KEY,
  process.env.OPENTOK_API_SECRET
);

// POST /api/open-tok/new
router.post("/new", (req, res) => {
    // creates a new OpenTok session
})

module.exports = router;
