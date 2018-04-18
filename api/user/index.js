const url = require('url')
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

const signup = (req, res) => {
  let _user = req.body
  console.log()
  User.findOne({
    username: _user.username
  }, (err, user) => {
    if (err) {
      console.log(err)
    }
    if (user) {
      return res.json({status: 500, message: '用户名已存在'})
    } else {
      user = new User({
        username: _user.username,
        password: _user.password,
        phoneNumber: _user.phoneNumber,
        role: _user.role
      })
      user.save((err, user) => {
        if (err) {
          console.log(err)
        }
        res.json({status: 200, message: '注册成功'})
      })
    }
  })
}

const logout = (req, res) => {
  delete req.session.authUser
  res.redirect('/login')
}

const fetchAll = (req, res) => {
  User.fetch(function (err, users) {
    if (err) { return res.status(500) }
    res.json(users)
  })
}
const fetchById = (req, res) => {
  let userId = req.body._id
  User.findById(userId, function (err, user) {
    if (err) {
      return res.status(500)
    }
    res.json(user)
  })
}
const update = (req, res) => {
  let _user = req.body
  if (_user) {
    _user.meta.updateAt = Date.now()
    User.findByIdAndUpdate(_user._id, _user, function (err, user) {
      if (err) {
        res.json({status: 500, message: '更新用户信息失败'})
      }
      res.json({status: 200, message: '更新用户信息成功'})
    })
  } else {
    res.json({status: 500, message: '参数不正确'})
  }
}
const deleteUser = (req, res) => {
  req.query = url.parse(req.url, true).query
  let id = req.query.id
  if (id) {
    User.findOneAndRemove({
      _id: id
    }, function (err) {
      if (err) {
        res.json({status: 500, message: '删除用户失败'})
      }
      User.update()
      res.json({status: 200, message: '删除用户成功'})
    })
  } else {
    res.json({status: 500, message: '参数不正确'})
  }
}
module.exports = {
  login,
  signup,
  logout,
  fetchAll,
  fetchById,
  update,
  deleteUser
}
