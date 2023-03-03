require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
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

// ! Connect
mongoose.set("strictQuery", false); // hata almamak icin deprecatlerde
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT, (req, res) => {
      console.log("u re server started");
    });
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });
