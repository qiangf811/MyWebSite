const mongoose = require('mongoose')
let CardInfoSchema = new mongoose.Schema({
  name: String,
  jobName: String,
  phoneNumber: String,
  address: String,
  emailAddress: String,
  workYears: Number,
  description: String
})

CardInfoSchema.statics = {
  fetch: function (cb) {
    return this.find({}).exec(cb)
  },
  findById: function (id, cb) {
    return this.findOne({ _id: id }).exec(cb)
  }
}

module.exports = CardInfoSchema
