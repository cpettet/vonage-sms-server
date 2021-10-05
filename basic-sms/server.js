require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

const app = express();
app.use(morgan("dev"));
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);

app.listen(app.get("port"), () =>
  console.log(`Listening on port ${app.get("port")}....`)
);
