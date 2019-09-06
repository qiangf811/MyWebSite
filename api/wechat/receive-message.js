const XMLJS = require('xml2js')
const axios = require('axios')
const parser = new XMLJS.Parser()
const builder = new XMLJS.Builder()
const { API_URL } = require('./constant')
const WechatUser = require('../../mongoose/models/wechat-user')

const messageHandler = {
  // 文本消息
  text (body, res) {
    var xml = {
      xml: {
        ToUserName: body.FromUserName,
        FromUserName: body.ToUserName,
        CreateTime: +new Date(),
        MsgType: 'text',
        Content: '编辑@+您想说的话，我们可以收到'
      }
    }
    var reciviMessage = body.Content[0]
    if (/^\@.*/.test(reciviMessage)) {
      xml.xml.Content = '已经收到您的建议，会及时处理！'
    }
    xml = builder.buildObject(xml)
    res.send(xml)
  },
  // 图片消息
  image () {

  },
  // 声音消息
  voice () {

  },
  // 视频消息
  video () {

  },
  // 短视频消息
  shortvideo () {

  },
  // 地理消息
  location () {

  },
  // 连接消息
  link () {

  }
}

const eventHandler = {
  // 关注
  async subscribe ({ FromUserName = [] }, req, res) {
    try {
      const openId = FromUserName[0]
      const { wechatToken } = req.app
      // 根据关注的用户的openId和token获取用户信息
      const { data } = await axios.get(API_URL.GET_USER_INFO(wechatToken, openId))
      if (data && data.openid) {
        // 先查询数据库中是否已有该用户的信息，如果没有则新建
        WechatUser.findByOpenId(data.openid, (err, row) => {
          if (err) return res.send('success')
          if (!row) {
            let user = new WechatUser(data)
            user.save((err, row) => {
              if (err) {
                console.log(err)
                return res.send('success')
              }
              res.send('success')
            })
          }
        })
      }
    } catch (error) {
      console.error(error)
      res.send('success')
    }
  },
  // 取消关注
  unsubscribe ({ FromUserName }, req, res) {
    // 删除库中的数据
    const openid = FromUserName[0]
    if (openid) {
      WechatUser.findOneAndRemove({
        openid
      }, function (err) {
        if (err) {
          console.log('删除用户失败', err)
          return res.send('success')
        }
        return res.send('success')
      })
    } else {
      console.error('删除用户失败，没有获取到正确的openid')
      res.send('success')
    }
  },
  // 点击菜单拉取消息时的事件推送
  CLICK () {

  },
  // 点击菜单跳转链接时的事件推送
  VIEW () {
    // 根据需求，处理不同的业务
  }
}

exports.receiveMessage = (req, res) => {
  req.on('data', function (data) {
    parser.parseString(data.toString(), (err, result) => {
      if (err) return
      const body = result.xml
      const messageType = body.MsgType[0] // 获取消息类型
      if (messageType === 'event') { // 事件类消息处理
        const eventName = body.Event[0];
        (eventHandler[eventName] || function () { })(body, req, res)
        // 自动回复消息
      } else if (messageHandler[messageType]) { // 消息类型处理
        messageHandler[messageType](body, res)
      } else { // 异常发送任意响应
        res.send('success')
      }
    })
  })
}
