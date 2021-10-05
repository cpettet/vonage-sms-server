const express = require("express");
const apiRouter = require("./api");

const router = express.Router();

router.use("/api", apiRouter);

router.get("/test", (req, res) => {
  res.send("Hello, world");
});

module.exports = router;
