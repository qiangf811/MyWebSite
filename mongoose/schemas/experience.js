const mongoose = require('mongoose')
const moment = require('moment')
let ExperienceSchema = new mongoose.Schema({
  title: String,
  beginTime: Date,
  endTime: Date,
  content: String
})

ExperienceSchema.virtual('time').get(function () {
  return moment(this.beginTime).format('YYYY.MM.DD') + '-' + moment(this.endTime).format('YYYY.MM.DD')
})

ExperienceSchema.statics = {
  fetch: function (cb) {
    return this.find({}).sort({startTime: 'desc'}).exec(cb)
  },
  findById: function (id, cb) {
    return this.findOne({_id: id}).exec(cb)
  }
}

ExperienceSchema.set('toJSON', { virtuals: true })

module.exports = ExperienceSchema
