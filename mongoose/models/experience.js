const mongoose = require('mongoose')
const ExperienceSchema = require('../schemas/experience')
const Experience = mongoose.model('Experience', ExperienceSchema)

module.exports = Experience
