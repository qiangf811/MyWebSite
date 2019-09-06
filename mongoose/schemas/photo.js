// 模式的编写
const mongoose = require('mongoose')
const PhotoSchema = new mongoose.Schema({
  src: String,
  type: Number,
  uploadAt: {
    type: Date,
    default: Date.now()
  }
})

PhotoSchema.statics = {
  fetch: function (cb) {
    return this.find({}).sort('uploadAt').exec(cb)
  },
  findById: function (id, cb) {
    return this.findOne({ _id: id }).exec(cb)
  }
}

module.exports = PhotoSchema
