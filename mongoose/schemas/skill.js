const mongoose = require('mongoose')
let SkillSchema = new mongoose.Schema({
  name: {
    unique: true,
    type: String
  },
  value: Number
})

SkillSchema.statics = {
  fetch: function (cb) {
    return this.find({}).exec(cb)
  },
  findById: function (id, cb) {
    return this.findOne({_id: id}).exec(cb)
  }
}

module.exports = SkillSchema
