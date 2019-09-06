const sha1 = require('sha1')
const url = require('url')
const { TOKEN } = require('./constant')

exports.wechatcheck = (req, res) => {
  const { signature, timestamp, nonce, echostr } = url.parse(req.url, true).query
  const string = [TOKEN, timestamp, nonce].sort().join('')
  if (sha1(string) === signature) {
    console.log('验证通过')
    res.send(echostr)
  } else {
    res.send('failed')
    console.log('验证不通过')
  }
}
