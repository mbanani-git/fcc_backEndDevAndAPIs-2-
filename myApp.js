var express = require("express");
var app = express();
require("dotenv").config();
app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  let response;
  if (process.env.MESSAGE_STYLE == "uppercase") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json"; //ok
  }
  res.json({ message: response });
});

app.use("/public", express.static(__dirname + "/public"));
module.exports = app;
