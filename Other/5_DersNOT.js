// 1 routesdeki metodlari  controller dosyasina attik .
// 2 metodlarin her birini bir degiskene yazdik

// ! ornek
// create workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 3 routesde bu degiskenleri kullandik
// bu halden =>>>
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// bu hale geldi
router.post("/", createWorkout);
// ve export ettik.
// ! export boyle yapilir
module.exports = {
  createWorkout,
};

// kullanilan yerdede boyle import ediliyor
const { createWorkout } = require("../controllers/workoutController");

// 4 adim eger biz olmayan id get metodu yaptigimizda hata veriyorudu onu gidermek icinde object.types yazdik tabi once mongoose require yapiyoruz
if (!mongoose.Types.ObjectId.isValid(id)) {
  return res.status(404).json({ error: "no such workout" });
}

// ders bitti bu kadar
