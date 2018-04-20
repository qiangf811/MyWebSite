const Notice = require('../../mongoose/models/notice')
const fetchNotice = (req, res) => {
  Notice.fetch(function (err, users) {
    if (err) { return res.status(500) }
    res.json(users)
  })
}
const savehNotice = (req, res) => {
  let _notice = req.body
  if (Object.keys(_notice).length) {
    let notice = new Notice(_notice)
    notice.save(function (err, notice) {
      if (err) return res.status(500)
      res.json({status: 200, message: '发送成功'})
    })
  } else {
    res.json({status: 500, message: '参数错误'})
  }
}

const setState = (req, res) => {
  let id = req.body.id
  if (id) {
    Notice.findByIdAndUpdate(id, {hasRead: true}, function (err, notice) {
      if (err) return res.status(500).json(err)
      res.json({status: 200, message: '更新状态成功'})
    })
  } else {
    res.json({status: 500, message: '参数错误'})
  }
}
module.exports = {
  fetchNotice, savehNotice, setState
}
