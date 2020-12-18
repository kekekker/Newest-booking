const mongoose = require('mongoose')

let room = new mongoose.Schema({
    name: String,
    about: String,
    sleepingAreas: String,
    bathrooms: String,
    space: String,
    defaultPrice: String,
    fridge:  String,
    conditioner: String,
    view:String,
    bar:String,
    safe:String,
    kitchen:String,
    plazma:String,
    threeTimes:String,
    delievery:String,
    remoteControl:String,
})
module.exports = mongoose.model('room', room)