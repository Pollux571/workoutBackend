require("dotenv").config();
const express = require("express");

const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method, req.hostname);
  next();
});

app.get("/", (req, res) => {
  res.json({ mssg: "hello world i here" });
});

app.listen(process.env.PORT, (req, res) => {
  console.log("u re server started");
});
