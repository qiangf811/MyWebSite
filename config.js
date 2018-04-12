const devConfig = {
  mongodb: {
    url: '127.0.0.1:27017/qiangf',
    start: 'mongod --dbpath /Users/qiangf/data'
  },
  port: 8080
}
const proConfig = {
  mongodb: {
    url: '127.10.0.1:27017/qiangf',
    start: 'mongod --dbpath /Users/qiangf/data'
  },
  port: 80
}

module.exports = {
  devConfig,
  proConfig
}
