const mongoose = require('mongoose')
const NoticeSchema = require('../schemas/notice')
const Notice = mongoose.model('Notice', NoticeSchema)

module.exports = Notice
