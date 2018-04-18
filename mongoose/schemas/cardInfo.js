const mongoose = require('mongoose')
let CardInfoSchema = new mongoose.Schema({
  phoneNumber: Number,
  address: String,
  emailAddress: String
})

CardInfoSchema.statics = {
  fetch: function (cb) {
    return this.find({}).exec(cb)
  },
  findById: function (id, cb) {
    return this.findOne({_id: id}).exec(cb)
  }
}

module.exports = CardInfoSchema
