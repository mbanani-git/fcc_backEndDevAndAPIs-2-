var express = require("express");
var app = express();
require("dotenv").config();
app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  let message;
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = "Hello json".toUpperCase();
  } else {
    message = "Hello json"; //ok
  }
  res.json({ "message": message });
});

app.use("/public", express.static(__dirname + "/public"));
module.exports = app;
