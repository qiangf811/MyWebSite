const mongoose = require('mongoose')
const { devConfig, proConfig } = require('../config')
const nuxtConfig = require('../nuxt.config')
const config = nuxtConfig.dev ? devConfig : proConfig

exports.connection = function () {
  return new Promise((resolve, reject) => {
    mongoose.connect(`mongodb://${config.mongodb.url}`, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    let db = mongoose.connection
    db.on('error', (err) => {
      console.error.bind(console, 'Mongodb connect error !')
      reject(err)
    })
    db.once('open', () => {
      console.log('Mongodb started !')
      resolve(true)
    })
  })
}
