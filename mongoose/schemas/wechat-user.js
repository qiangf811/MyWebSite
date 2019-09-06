const mongoose = require('mongoose')
// ok0iz0e1ZPkz0NWj1nlJcnr3YIy0
let WechatUserSchema = new mongoose.Schema({
  subscribe: Number,
  openid: {
    unique: true,
    type: String
  },
  nickname: String,
  sex: Number,
  language: String,
  city: String,
  province: String,
  country: String,
  headimgurl: String,
  subscribe_time: Number,
  remark: String,
  groupid: Number,
  tagid_list: Array,
  subscribe_scene: String,
  qr_scene: Number,
  qr_scene_str: String
})

WechatUserSchema.statics = {
  fetch: function (cb) {
    return this.find({}).exec(cb)
  },
  findById: function (id, cb) {
    return this.findOne({ _id: id }).exec(cb)
  },
  findByOpenId: function (openid, cb) {
    return this.findOne({ openid }).exec(cb)
  }
}

module.exports = WechatUserSchema
