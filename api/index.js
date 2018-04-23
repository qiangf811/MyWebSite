const mongodb = require('../mongoose/mongodb')
const express = require('express')
const multer = require('multer')
const routerApi = require('./home')
const userApi = require('./user')
const securityApi = require('./security')
const noticeApi = require('./notice')
const menuApi = require('./menu')
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
router.get('/menu', menuApi.fetchMenu)
router.post('/saveMenu', menuApi.saveMenu)
router.delete('/deleteMenu', menuApi.deleteMenu)
router.post('/sortMenu', menuApi.sortMenu)

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
router.get('/users', userApi.fetchAll)
router.post('/findUser', userApi.fetchById)
router.post('/updateUser', userApi.update)
router.delete('/deleteUser', userApi.deleteUser)

// manner api
router.get('/notice', noticeApi.fetchNotice)
router.post('/notice', noticeApi.savehNotice)
router.post('/readNotice', noticeApi.setState)

router.get('/skills', routerApi.fetchSkills)
router.post('/saveSkill', routerApi.saveSkill)
router.delete('/deleteSkill', routerApi.deleteSkill)

router.get('/cardInfo', routerApi.fetchCardInfo)
router.post('/cardInfo', routerApi.updateCardInfo)
// upload api
router.post('/uploadPhotoes', upload.single('photo'), uploadApi.uploadFiles)

module.exports = {
  path: '/api',
  handler: router
}
