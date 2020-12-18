const express = require("express");
const mongoose = require('mongoose')
const Room = require("./models/room");
const cors = require('cors')

async function start() {
  try{
      await mongoose.connect('mongodb+srv://Yegor:sasuke@cluster0.5npuj.mongodb.net/app?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    })
      app.listen(4000, () => console.log(`App has been started on port ${PORT}...`))
  } catch(e){
      console.log('Server Error', e.message)
      process.exit()
  }
}

start()

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  Room.find((err, rooms) => {
    if (err) {
      console.log(err);
    } else {
      res.json(rooms);
    }
  });
});

app.post("/create", (req, res) => {
  const 
  {name, 
    space,
    about, 
    defaultPrice, 
    sleepingAreas,
    bathrooms,
    fridge,
    conditioner,
    view,
    bar,
    safe,
    kitchen,
    plazma,
    threeTimes,
    delievery,
    remoteControl,
  } = req.body
  const room = new Room({
    name: name, 
    sleepingAreas: sleepingAreas, 
    space: space,
    bathrooms: bathrooms, 
    about: about, 
    defaultPrice: defaultPrice,
    fridge:  fridge,
    conditioner: conditioner,
    view: view,
    bar: bar,
    safe: safe,
    kitchen: kitchen,
    plazma: plazma,
    threeTimes: threeTimes,
    delievery: delievery,
    remoteControl: remoteControl,
  });
  room
    .save()
    .then((room) => {
      res.json(room);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  Room.findById(id, (err, room) => {
    res.json(room);
  });
});

app.post("/:id", (req, res) => {
  const id = req.params.id;
  Room.findById(id, (err, room) => {
    if (!room) {
      res.status(404).send("Room not found");
    } else {
        room.name = req.body.name;
        room.space = req.body.space;
        room.about = req.body.about;
        room.defaultPrice = req.body.defaultPrice;
        room.sleepingAreas = req.body.sleepingAreas;
        room.bathrooms = req.body.bathrooms;
        room.value = "req.body.value";
        room
        .save()
        .then((room) => {
          res.json(room);
        })
        .catch((err) => res.status(500).send(err.message));
    }
  });
});
app.delete(`/api/:id`, (req, res) => {
  const id = req.params.id;
  Room.findByIdAndRemove(id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: ""
      })
    }
  })
})



