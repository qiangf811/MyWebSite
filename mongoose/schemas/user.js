const mongoose = require('mongoose')
const JSEncrypt = require('node-jsencrypt')
const md5 = require('blueimp-md5')
global.privateKey = ''
let UserSchema = new mongoose.Schema({
  username: {
    unique: true,
    type: String
  },
  password: String,
  phoneNumber: {
    type: Number
  },
  // 0: nomal user
  // 1: professonal user
  // 2: admin
  // 3: super admin
  role: {
    type: Number,
    default: 0
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UserSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  next()
})

UserSchema.methods = {
  comparePassword: function (_password, cb) {
    // 公钥加密 私钥解密
    // 1.首先用户输入的密码我先公钥加密
    // 2.传入后台后使用私钥解密获取密码
    // 3.查询数据库获取当前用户的密码私钥密码
    let decrypt = new JSEncrypt()
    decrypt.setPrivateKey(global.privateKey)
    // 解出的明文密码
    let password = decrypt.decrypt(_password)
    let passwordMD5 = md5(password)
    if (passwordMD5 === this.password) {
      console.log('*****************匹配成功********************')
      return cb(null, true)
    }
    console.log('*****************匹配失败了********************')
    return cb(null, false)
  }
}

UserSchema.statics = {
  fetch: function (cb) {
    return this.find({}).sort('meta.updateAt').exec(cb)
  },
  findById: function (id, cb) {
    return this.findOne({_id: id}).exec(cb)
  }
}

module.exports = UserSchema
