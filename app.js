var express = require('express')

var port = process.env.PORT || 8080

var app = express()
var mongoose = require('mongoose')
// var Movie = require('./models/movie');
mongoose.connect('mongodb://127.0.0.1:27017/qiangf', {useMongoClient: true})
mongoose.Promise = global.Promise
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Mongodb connect error !'))

db.once('open', function () {
  console.log('Mongodb started !')
})
var router = express.Router()

router.get('/', function (req, res, next) {
  req.url = '/index.html'
  next()
})

router.get('/mobile', function (req, res, next) {
  req.url = '/200.html'
  next()
})

// Movie.fetch((err, movies) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(movies)
// });

app.use(router)

app.use(express.static('./dist'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
