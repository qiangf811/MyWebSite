const axios = require('axios')
const { ACCESS_TOKEN_URL } = require('./constant')
exports.fetchAccessToken = () => new Promise(async (resolve, reject) => {
  try {
    const { data } = await axios.get(ACCESS_TOKEN_URL)
    resolve(data.access_token)
  } catch (error) {
    reject(error)
  }
})
