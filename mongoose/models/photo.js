const mongoose = require('mongoose')
const PhotoSchema = require('../schemas/photo')
const Photo = mongoose.model('Photo', PhotoSchema)

module.exports = Photo
