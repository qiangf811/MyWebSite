const express = require('express')
const mongoose = require('mongoose')
const data = require('./data.json')
// config file
const {devConfig, envConfig} = require('../config')
const nuxtConfig = require('../nuxt.config')
const config = nuxtConfig.dev ? devConfig : envConfig

// connect to mongodb
mongoose.connect(`mongodb://${config.mongodb.url}`, {useMongoClient: true})
mongoose.Promise = global.Promise
let db = mongoose.connection
db.on('error', console.error.bind(console, 'Mongodb connect error !'))

db.once('open', function () {
  console.log('Mongodb started !')
})

const Movie = require('./models/movie')

// fetch data from mongodb
Movie.fetch((err, movies) => {
  if (err) {
    console.log(err)
  }
  console.log(movies)
})

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.get('/skills', (req, res) => {
  console.log('111111')
  res.json(data)
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ok: true})
})

module.exports = {
  path: '/api',
  handler: router
}
