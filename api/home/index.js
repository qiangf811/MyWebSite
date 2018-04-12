const _data = require('../data.json')
const _axios = require('axios')
const PORT = 8080
const fetchMenu = (req, res) => res.json(_data.menu)

const fetchSkills = (req, res) => res.json(_data.skills)

const fetchCardInfo = (req, res) => res.json(_data.cardInfo)

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
      return {err}
    }
  }
  fetchData().then(data => {
    res.json(data)
  }).catch((err) => {
    res.status(500).json(err)
  })
}

module.exports = {
  fetchMenu,
  fetchSkills,
  fetchCardInfo,
  fetchServices,
  fetchPhotoes,
  fetchExperiences,
  fetchBlogs,
  fetchIndexData
}
