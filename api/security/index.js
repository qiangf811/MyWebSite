const generateRSA = require('../../plugins/rsa')
class Security {
  newRSAkeys (req, res) {
    generateRSA().then(key => {
      global.privateKey = key.privatekey
      res.json({ status: 200, publickey: key.publickey })
    }).catch((err) => {
      console.log(err)
      res.json({ status: 500, msg: '生成RSA失败，请联系管理员' })
    })
  }
}

module.exports = new Security()
