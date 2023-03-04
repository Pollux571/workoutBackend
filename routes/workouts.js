const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deletWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

router.get("/", getWorkouts);
router.get("/:id", getWorkout);
router.post("/", createWorkout);
router.delete("/:id", deletWorkout);
router.patch("/:id", updateWorkout);

module.exports = router;
