const mongoose = require('mongoose')
const WechatUserSchema = require('../schemas/wechat-user')
const WechatUser = mongoose.model('WechatUser', WechatUserSchema)

module.exports = WechatUser
