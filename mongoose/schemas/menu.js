const mongoose = require('mongoose')
let MenuSchema = new mongoose.Schema({
  name: String,
  href: String,
  sort: Number,
  role: {
    type: Number,
    default: 0 // 0 不必登录即可显示 1 注册的会员用户可以看见的权限 2管理员权限 3超级管理员权限
  }
})

MenuSchema.statics = {
  fetch: function (cb) {
    return this.find({}).sort('sort').exec(cb)
  },
  findById: function (id, cb) {
    return this.findOne({_id: id}).exec(cb)
  },
  findBySortDesc: function (cb) {
    return this.find({}).sort({'sort': 'desc'}).exec(cb)
  }
}

module.exports = MenuSchema
