const mongoose = require('mongoose')
const CardInfoSchema = require('../schemas/cardInfo')
const CardInfo = mongoose.model('CardInfo', CardInfoSchema)

module.exports = CardInfo
