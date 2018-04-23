const Menu = require('../../mongoose/models/menu')
const _data = require('../data.json')
const url = require('url')

const fetchMenu = (req, res) => {
  Menu.fetch(function (err, menus) {
    if (err) { return res.status(500) }
    if (!menus.length) {
      return res.json(_data.menu)
    }
    res.json(menus)
  })
}
const saveMenu = (req, res) => {
  let _menu = req.body
  if (Object.keys(_menu).length) {
    if (_menu._id) {
      Menu.findByIdAndUpdate(_menu._id, _menu, function (err, menu) {
        if (err) return res.status(500).json(err)
        res.json({status: 200, message: '更新成功'})
      })
    } else {
      Menu.findOne({name: _menu.name}, function (err, menu) {
        if (err) return res.status(400)
        if (menu) {
          res.json({status: 300, message: '名称重复'})
        } else {
          Menu.findBySortDesc(function (err, rows) {
            if (!err) {
              _menu.sort = rows.length ? rows[0].sort + 1 : 0
              let menu = new Menu(_menu)
              menu.save(function (err, menu) {
                if (err) return res.status(500)
                res.json({status: 200, message: '保存成功'})
              })
            }
          })
        }
      })
    }
  } else {
    res.status(400).json({message: '参数错误'})
  }
}

const sortMenu = (req, res) => {
  req.query = url.parse(req.url, true).query
  let id = req.query.id
  let isUp = parseInt(req.query.isUp)
  Menu.fetch(function (err, menus) {
    if (err) { return res.status(500) }
    let row = menus.find((menu, index) => {
      if (menu.id === id) {
        menu.index = index
        return menu
      }
    })
    if (row) {
      let theSortNum = row.sort
      let nextIndex = isUp ? row.index - 1 : row.index + 1
      let netxRow = menus.find((menu, index) => index === nextIndex)
      if (netxRow) {
        netxRow.update({sort: theSortNum}, function (err) {
          if (err) return res.status(500)
          row.update({sort: netxRow.sort}, function (err) {
            console.log('我的排序号：' + netxRow.sort)
            if (err) return res.status(500)
            return res.json({status: 200, message: '排序成功'})
          })
        })
      } else {
        return res.status(500)
      }
    }
  })
}

const deleteMenu = (req, res) => {
  req.query = url.parse(req.url, true).query
  let id = req.query.id
  if (id) {
    Menu.findOneAndRemove({
      _id: id
    }, function (err) {
      if (err) {
        res.json({status: 500, message: '删除菜单失败'})
      }
      res.json({status: 200, message: '删除菜单成功'})
    })
  } else {
    res.json({status: 500, message: '参数不正确'})
  }
}
module.exports = {
  fetchMenu, saveMenu, deleteMenu, sortMenu
}
