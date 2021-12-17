var express = require("express");
var app = express();
require("dotenv").config();
app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  process.env.MESSAGE_STYLE === "uppercase"
    ? res.json({ message: "Hello json".toUpperCase() })
    : res.json({ message: "Hello json" });
});

app.use("/public", express.static(__dirname + "/public"));
module.exports = app;
