require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");

const app = express();

// middleware
// ! nod olarak yazmistim
// app.use(express.json());  req.body icin lazim veri almak icin sonraki ders icin hazirlik amacli

app.use((req, res, next) => {
  console.log(req.path, req.method, req.hostname);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

app.listen(process.env.PORT, (req, res) => {
  console.log("u re server started");
});
