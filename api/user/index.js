const User = require('../../mongoose/models/user')
const login = (req, res) => {
  let _user = req.body
  User.findOne({
    username: _user.username
  }, function (err, user) {
    if (err) {
      console.log(err)
    }
    if (!user) {
      console.log('用户名不存在')
      return res.status(404).json({message: '用户名不存在 '})
    }
    user.comparePassword(_user.password, function (err, isMatch) {
      if (err) {
        return res.status(500)
      }
      if (isMatch) {
        req.session.authUser = {
          username: _user.username
        }
        res.json({status: 200, message: '登录成功', user: user})
      } else {
        res.status(401).json({message: '用户名或者密码错误 '})
      }
    })
  })
}

const signup = (res, req) => {
  let _user = req.body
  User.findOne({
    username: _user.username
  }, (err, user) => {
    if (err) {
      console.log(err)
    }
    if (user) {
      return res.redirect('/login')
    } else {
      user = new User(_user)
      user.save((err, user) => {
        if (err) {
          console.log(err)
        }
        res.redirect('/')
      })
    }
  })
}

const logout = (req, res) => {
  delete req.session.authUser
  res.redirect('/login')
}
module.exports = {
  login, signup, logout
}
