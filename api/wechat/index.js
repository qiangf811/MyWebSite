const { fetchAccessToken } = require('./fetch-accesstoken')
const { wechatcheck } = require('./wechat-check')
const { createMenu } = require('./create-menu')
const { receiveMessage } = require('./receive-message')
const { pushImgMessage } = require('./push-message')
const initwechat = async app => {
  try {
    app.wechatToken = await fetchAccessToken()
    createMenu(app)
    setInterval(async () => {
      app.wechatToken = await fetchAccessToken()
    }, 1000 * 60 * 60 * 2)
  } catch (error) {
    console.error('获取token失败')
  }
}

module.exports = {
  initwechat,
  wechatcheck,
  receiveMessage,
  pushImgMessage
}
