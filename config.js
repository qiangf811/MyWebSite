const devConfig = {
  mongodb: {
    url: '127.0.0.1:27017/qiangf',
    start: 'mongod --dbpath /Users/qiangf/data'
  }
}
const envConfig = {
  mongodb: {
    url: '127.10.0.1:27017/qiangf',
    start: 'mongod --dbpath /Users/qiangf/data'
  }
}

module.exports = {
  devConfig,
  envConfig
}
