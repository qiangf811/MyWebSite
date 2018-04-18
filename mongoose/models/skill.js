const mongoose = require('mongoose')
const SkillSchema = require('../schemas/skill')
const Skill = mongoose.model('Skill', SkillSchema)

module.exports = Skill
