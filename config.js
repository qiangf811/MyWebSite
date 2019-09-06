const devConfig = {
  mongodb: {
    url: 'fengqiang:QFyep090214@127.0.0.1:27017/qiangf',
    start: 'mongod --auth --port 27017 --dbpath /Users/qiangf/data'
  },
  port: 8080
}
const proConfig = {
  mongodb: {
    url: 'fengqiang:QFyep090214@127.0.0.1:27017/qiangf',
    start: 'mongod --dbpath /Users/qiangf/data'
  },
  port: 80
}

module.exports = {
  devConfig,
  proConfig
}
