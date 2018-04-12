const mongoose = require('mongoose')
const {devConfig, proConfig} = require('../config')
const nuxtConfig = require('../nuxt.config')
const config = nuxtConfig.dev ? devConfig : proConfig

exports.connection = function () {
  mongoose.connect(`mongodb://${config.mongodb.url}`)
  let db = mongoose.connection
  db.on('error', console.error.bind(console, 'Mongodb connect error !'))
  db.once('open', () => console.log('Mongodb started !'))
}
