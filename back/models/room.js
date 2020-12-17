const mongoose = require('mongoose')

let room = new mongoose.Schema({
    name: String,
    about: String,
    sleepingAreas: String,
    bathrooms: String,
    space: String,
    defaultPrice: String,
})
module.exports = mongoose.model('room', room)