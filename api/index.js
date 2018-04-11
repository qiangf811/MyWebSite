const express = require('express')
const mongoose = require('mongoose')
const data = require('./data.json')
const Photo = require('../mongoose/models/photo')
const User = require('../mongoose/models/user')
const generateRSA = require('../plugins/rsa')
const fs = require('fs')
// config file
const {devConfig, envConfig} = require('../config')
const nuxtConfig = require('../nuxt.config')
const config = nuxtConfig.dev
  ? devConfig
  : envConfig

// connect to mongodb
mongoose.connect(`mongodb://${config.mongodb.url}`)
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongodb connect error !'))

db.once('open', function () {
  console.log('Mongodb started !')
})

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()

var multer = require('multer')
var upload = multer({dest: 'uploads/'})

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.get('/menu', (req, res) => {
  res.json(data.menu)
})

router.get('/rsa', (req, res) => {
  generateRSA().then(key => {
    global.privateKey = key.privatekey
    console.log('----------------公钥私钥出来了-------------------------')
    console.log(key.publickey)
    console.log('-----------------------------------------')
    res.json({status: 200, publickey: key.publickey})
  }).catch((err) => {
    console.log(err)
    res.json({status: 500, msg: '生成RSA失败，请联系管理员'})
  })
})

router.post('/signup', (req, res) => {
  let _user = req.body
  User.findOne({
    username: _user.username
  }, (err, user) => {
    if (err) {
      console.log(err)
    }
    if (user) {
      return res.redirect('/login')
    } else {
      user = new User(_user)
      user.save((err, user) => {
        if (err) {
          console.log(err)
        }
        res.redirect('/')
      })
    }
  })
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  let _user = req.body
  User.findOne({
    username: _user.username
  }, function (err, user) {
    if (err) {
      console.log(err)
    }
    if (!user) {
      console.log('用户名不存在')
      return res.status(404).json({message: '用户名不存在 '})
    }
    user.comparePassword(_user.password, function (err, isMatch) {
      if (err) {
        return res.status(500)
      }
      if (isMatch) {
        req.session.authUser = {
          username: _user.username
        }
        res.json({status: 200, message: '登录成功', user: user})
      } else {
        res.status(401).json({message: '用户名或者密码错误 '})
      }
    })
  })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.redirect('/login')
})

router.post('/uploadPhotoes', upload.single('photo'), function (req, res, next) {
  if (req.file) {
    let name = req.file.originalname
    fs.rename('uploads/' + req.file.filename, 'uploads/' + name)
    let photo = new Photo({
      type: req.body.type,
      src: 'uploads/' + name
    })
    photo.save((err, photo) => {
      if (err) {
        return res.status(500)
      }
      res.send('done')
    })
  }
})

router.get('/photoes', (req, res) => {
  Photo.fetch((err, photoes) => {
    if (err) {
      return res.status(500)
    }
    res.json(photoes)
  })
})

module.exports = {
  path: '/api',
  handler: router
}
