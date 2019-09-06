const TOKEN = 'qiangfeng'
const APP_ID = 'wxfeab4479b74284bb'
const APP_SECRET = 'b561a4b0aa99fc6571df75dd93b627ad'
const URL_PREFIX = 'https://api.weixin.qq.com/cgi-bin'
const ACCESS_TOKEN_URL = `${URL_PREFIX}/token?grant_type=client_credential&appid=${APP_ID}&secret=${APP_SECRET}`
const API_URL = {
  GET_USER_INFO: (token, openId) => `${URL_PREFIX}/user/info?access_token=${token}&openid=${openId}&lang=zh_CN`,
  IMG_UPLOAD: token => `${URL_PREFIX}/media/uploadimg?access_token=${token}`,
  SEND_MESSAGE: token => `${URL_PREFIX}/message/mass/send?access_token=${token}`
}
const WECHAT_MENU = {
  'button': [
    {
      'type': 'click',
      'name': '今日歌曲',
      'key': 'V1001_TODAY_MUSIC'
    },
    {
      'name': '菜单',
      'key': '22222',
      'sub_button': [
        {
          'type': 'view',
          'name': '强峰的网站',
          'key': 'V1001_GOOD',
          'url': 'http://q23vwx.natappfree.cc/'
        },
        {
          'type': 'click',
          'name': '赞一们',
          'key': 'V1001_GOOD'
        }]
    }]
}
module.exports = {
  TOKEN,
  APP_ID,
  APP_SECRET,
  URL_PREFIX,
  ACCESS_TOKEN_URL,
  WECHAT_MENU,
  API_URL
}
