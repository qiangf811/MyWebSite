const Experience = require('../../mongoose/models/experience')
const _data = require('../data.json')
const url = require('url')

const fetchExperience = (req, res) => {
  Experience.fetch(function (err, experiences) {
    if (err) { return res.status(500) }
    if (!experiences.length) {
      return res.json(_data.experiences)
    }
    res.json(experiences)
  })
}
const saveExperience = (req, res) => {
  let _experience = req.body
  if (Object.keys(_experience).length) {
    if (_experience._id) {
      Experience.findByIdAndUpdate(_experience._id, _experience, function (err, experience) {
        if (err) return res.status(500).json(err)
        res.json({status: 200, message: '更新成功'})
      })
    } else {
      let experience = new Experience(_experience)
      experience.save(function (err, experience) {
        if (err) return res.status(500)
        res.json({status: 200, message: '保存成功'})
      })
    }
  } else {
    res.status(400).json({message: '参数错误'})
  }
}

const deleteExperience = (req, res) => {
  req.query = url.parse(req.url, true).query
  let id = req.query.id
  if (id) {
    Experience.findOneAndRemove({
      _id: id
    }, function (err) {
      if (err) {
        res.json({status: 500, message: '删除失败'})
      }
      res.json({status: 200, message: '删除成功'})
    })
  } else {
    res.json({status: 500, message: '参数不正确'})
  }
}
module.exports = {
  fetchExperience, saveExperience, deleteExperience
}
