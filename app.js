const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/about.html");
});

app.get("/data", function (req, res) {
  res.sendFile(__dirname + "/data.html");
});

app.listen("3001", function () {
  console.log("port running on 3001");
});
