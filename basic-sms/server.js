require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(app.get("port"), () =>
  console.log(`Listening on port ${app.get("port")}....`)
);
