const PushToken = require('../../mongoose/models/pushToken')
const fetchToken = (req, res) => {
  PushToken.fetch(function (err, pushTokens) {
    if (err) { return res.status(500) }
    res.json(pushTokens)
  })
}
const saveToken = (req, res) => {
  let params = req.body
  let token = params.token
  if (Object.keys(params).length) {
    PushToken.findByName(token.value, function (err, pushToken) {
      if (err) return res.status(500)
      if (!pushToken) {
        let pushToken = new PushToken({name: token.value})
        pushToken.save(function (err, pushToken) {
          if (err) return res.status(500)
          return res.json({status: 200, message: '保存成功'})
        })
      } else {
        return res.json({status: 200, message: 'pushToken已存在'})
      }
    })
  } else {
    res.json({status: 500, message: '参数错误'})
  }
}

module.exports = {
  saveToken, fetchToken
}
