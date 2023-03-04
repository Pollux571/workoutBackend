// delete workout
const deletWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }
  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "No such workout deleted" });
  }

  res.status(200).json(workout);
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "No such workout updated" });
  }

  res.status(200).json(workout);
};

module.exports = {
  deletWorkout,
  updateWorkout,
};


// routes/workout.js
const {
  deletWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
