var express = require("express");
var app = express();

app.get("/", (req, res) => {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

app.use("/public", express.static(__dirname + "/public"));
module.exports = app;
