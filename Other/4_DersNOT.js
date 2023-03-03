// 1 databasede gelen giden silinen guncelenen verileri tutmak icin models klasor icinde bir tane schema yazicaz
// 2 once birtane models klasoru olusturuyoruz ve icinde bir tane schema yazicagimiz workoutModel.js dosyasini olusturduk
// 3 schema yazmak icin ilk once  mongoose requieri edioyruz. sonra schemayi tanimliyoruz ve sonrada schema yaziyoruz
// 4 sonrada schemadan yararlanmak icin onu disari aktarmamiz lazim yani export ile

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    reps: { type: Number, required: true },
    load: { type: Number, required: true },
  },
  { timestamps: true } // timestamps zamani gosteriyor     createdAt ve updatedAt       calismasi icin true olmasi lazim
);

module.exports = mongoose.model("Workout", workoutSchema);

// 5  sonra routes workout.js e import ettik schemammizi
const Workout = require('./models/Workout')

// 6 sonra biz post metodunun icinde once schemadaki veri tiplerine gore database bir seyler gondermek icin destruching yapiyoruz
const {title, reps, load } = req.body // diye

// 7 data basede bir veri olusmasi icinde
const workout = Workout.create()    // schemamizdan yararlanarak schema bize veri olusturuoyor fakat bu calismaz calismasi icinde

// 8 schemamiz bize veri olusturmasi icinde create() fonksiyonun icine elimizde olan destruching yaptigimiz verileri atiyoruz obje sekildin {title,reps,load}
const workout = Workout.create({title,reps,load})


// 9 butun sekli asagida asyn await akildan cikmasin
router.post("/", async (req, res) => {
    const { title, load, reps } = req.body;
    try {
      const workout = await Workout.create({ title, load, reps });
      res.status(200).json(workout);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });