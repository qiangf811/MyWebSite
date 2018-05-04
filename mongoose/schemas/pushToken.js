const mongoose = require('mongoose')
let PushTokenSchema = new mongoose.Schema({
  name: String
})

PushTokenSchema.statics = {
  fetch: function (cb) {
    return this.find({}).exec(cb)
  },
  findByName: function (name, cb) {
    return this.findOne({name: name}).exec(cb)
  }
}

module.exports = PushTokenSchema
