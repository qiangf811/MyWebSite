const mongoose = require('mongoose')
let NoticeSchema = new mongoose.Schema({
  from: String,
  phoneNumber: String,
  email: String,
  message: String,
  hasRead: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
})

NoticeSchema.pre('save', function (nuxt) {
  this.createAt = Date.now()
  nuxt()
})

NoticeSchema.statics = {
  fetch: function (cb) {
    return this.find({hasRead: false}).sort({createAt: 'desc'}).exec(cb)
  },
  findById: function (id, cb) {
    return this.findOne({_id: id}).exec(cb)
  }
}

module.exports = NoticeSchema
