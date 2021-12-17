var express = require("express");
var app = express();
require("dotenv").config();
app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  let message = "Hello json";
  process.env.MESSAGE_STYLE === "uppercasse" ? (message = message.toUpperCase()) : message;
  res.json({ message: message });
});

app.use("/public", express.static(__dirname + "/public"));
module.exports = app;
