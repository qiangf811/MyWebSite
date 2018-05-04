const mongoose = require('mongoose')
const PushTokenSchema = require('../schemas/pushToken')
const PushToken = mongoose.model('PushToken', PushTokenSchema)

module.exports = PushToken
