const url = require('url')
const _data = require('../data.json')
const Skill = require('../../mongoose/models/skill')
const CardInfo = require('../../mongoose/models/cardInfo')
const _axios = require('axios')
const PORT = 8080

const fetchSkills = (req, res) => {
  Skill.fetch(function (err, skills) {
    if (err) { return res.status(500) }
    return res.json(skills)
  })
}

const saveSkill = (req, res) => {
  let _skill = req.body
  if (Object.keys(_skill).length) {
    if (_skill._id) {
      Skill.findByIdAndUpdate(_skill._id, _skill, function (err, skill) {
        if (err) {
          return res.status(500)
        }
        return res.json({ status: 200, message: '保存成功' })
      })
    } else {
      Skill.findOne({
        name: _skill.name
      }, function (err, row) {
        if (err) {
          return res.status(400).json(err)
        }
        if (row) {
          return res.json({ status: 300, message: '名称已存在' })
        } else {
          let skill = new Skill(_skill)
          skill.save((err, row) => {
            if (err) {
              console.log(err)
              return res.status(400).json(err)
            }
            res.json({ status: 200, message: '保存成功' })
          })
        }
      })
    }
  } else {
    res.json({ status: 500, message: '参数不正确' })
  }
}

const deleteSkill = (req, res) => {
  req.query = url.parse(req.url, true).query
  let id = req.query.id
  if (id) {
    Skill.findOneAndRemove({
      _id: id
    }, function (err) {
      if (err) {
        res.json({ status: 500, message: '删除用户失败' })
      }
      res.json({ status: 200, message: '删除用户成功' })
    })
  } else {
    res.json({ status: 500, message: '参数不正确' })
  }
}

const fetchCardInfo = (req, res) => {
  CardInfo.fetch(function (err, cradInfo) {
    if (err) { return res.status(500) }
    return res.json(cradInfo[0])
  })
}

const updateCardInfo = (req, res) => {
  let _cardInfo = req.body
  if (Object.keys(_cardInfo).length) {
    if (_cardInfo._id) {
      CardInfo.findByIdAndUpdate(_cardInfo._id, _cardInfo, function (err, cardInfo) {
        if (err) {
          return res.status(500)
        }
        return res.json({ status: 200, message: '保存成功' })
      })
    } else {
      let cardInfo = new CardInfo(_cardInfo)
      cardInfo.save((err, row) => {
        if (err) {
          console.log(err)
          return res.status(400).json(err)
        }
        res.json({ status: 200, message: '保存成功' })
      })
    }
  } else {
    res.status(400).json({ status: 500, message: '参数不正确' })
  }
}

const fetchServices = (req, res) => res.json(_data.services)

const fetchPhotoes = (req, res) => res.json(_data.photoes)

const fetchExperiences = (req, res) => res.json(_data.experiences)

const fetchBlogs = (req, res) => res.json(_data.blogs)

const fetchIndexData = (req, res) => {
  const fetchData = async function () {
    try {
      // http://127.0.0.1:${PORT}
      let skills = await _axios.get(`http://127.0.0.1:${PORT}/api/skills`)
      let cardInfo = await _axios.get(`http://127.0.0.1:${PORT}/api/cardInfo`)
      let services = await _axios.get(`http://127.0.0.1:${PORT}/api/services`)
      let photoes = await _axios.get(`http://127.0.0.1:${PORT}/api/photoes`)
      let experiences = await _axios.get(`http://127.0.0.1:${PORT}/api/experiences`)
      let blogs = await _axios.get(`http://127.0.0.1:${PORT}/api/blogs`)
      return {
        skills: skills.data,
        cardInfo: cardInfo.data,
        services: services.data,
        photoes: photoes.data,
        experiences: experiences.data,
        blogs: blogs.data
      }
    } catch (err) {
      console.log(err)
      return { err }
    }
  }
  fetchData().then(data => {
    res.json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
}

module.exports = {
  fetchSkills,
  fetchCardInfo,
  fetchServices,
  fetchPhotoes,
  fetchExperiences,
  fetchBlogs,
  fetchIndexData,
  saveSkill,
  deleteSkill,
  updateCardInfo
}
