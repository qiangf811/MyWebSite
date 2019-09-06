const axios = require('axios')
const { WECHAT_MENU, URL_PREFIX } = require('./constant')
exports.createMenu = async (app) => {
  try {
    axios.post(URL_PREFIX + `/menu/create?access_token=${app.wechatToken}`, WECHAT_MENU)
  } catch (error) {

  }
}
