const mongodb = require('../mongoose/mongodb')
const express = require('express')
const multer = require('multer')
const routerApi = require('./home')
const userApi = require('./user')
const securityApi = require('./security')
const uploadApi = require('./upload')
const upload = multer({dest: 'uploads/'})

mongodb.connection()
const app = express()
const router = express.Router()

// Transform req & res to have the same API as express So we can use res.status() & res.json()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// index page  api
router.get('/menu', routerApi.fetchMenu)
router.get('/skills', routerApi.fetchSkills)
router.get('/cardInfo', routerApi.fetchCardInfo)
router.get('/services', routerApi.fetchServices)
router.get('/photoes', routerApi.fetchPhotoes)
router.get('/experiences', routerApi.fetchExperiences)
router.get('/blogs', routerApi.fetchBlogs)
router.get('/indexData', routerApi.fetchIndexData)

// user api
router.get('/rsa', securityApi.newRSAkeys)
router.post('/signup', userApi.signup)
router.post('/login', userApi.login)
router.post('/logout', userApi.logout)

// upload api
router.post('/uploadPhotoes', upload.single('photo'), uploadApi.uploadFiles)

module.exports = {
  path: '/api',
  handler: router
}
