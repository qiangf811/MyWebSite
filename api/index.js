const mongodb = require('../mongoose/mongodb')
const express = require('express')
const multer = require('multer')
const routerApi = require('./home')
const userApi = require('./user')
const securityApi = require('./security')
const noticeApi = require('./notice')
const menuApi = require('./menu')
const experienceApi = require('./experience')
const uploadApi = require('./upload')
const upload = multer({ dest: 'uploads/' })
const tokenApi = require('./token')

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

// menu api
router.get('/menu', menuApi.fetchMenu)
router.post('/saveMenu', menuApi.saveMenu)
router.delete('/deleteMenu', menuApi.deleteMenu)
router.post('/sortMenu', menuApi.sortMenu)

// experiences api
router.get('/experiences', experienceApi.fetchExperience)
router.post('/saveExperience', experienceApi.saveExperience)
router.delete('/deleteExperience', experienceApi.deleteExperience)

router.get('/services', routerApi.fetchServices)
router.get('/photoes', routerApi.fetchPhotoes)
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

// notice api
router.get('/notice', noticeApi.fetchNotice)
router.post('/notice', noticeApi.savehNotice)
router.post('/readNotice', noticeApi.setState)

// skills api
router.get('/skills', routerApi.fetchSkills)
router.post('/saveSkill', routerApi.saveSkill)
router.delete('/deleteSkill', routerApi.deleteSkill)

// cardInfo api
router.get('/cardInfo', routerApi.fetchCardInfo)
router.post('/cardInfo', routerApi.updateCardInfo)
// upload api
router.post('/uploadPhotoes', upload.single('photo'), uploadApi.uploadFiles)

router.get('/push-token', tokenApi.fetchToken)
router.post('/push-token', tokenApi.saveToken)

module.exports = {
  path: '/api',
  handler: router
}
