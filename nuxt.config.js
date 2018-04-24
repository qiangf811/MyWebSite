const bodyParser = require('body-parser')
const session = require('express-session')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fengleaf',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1,minimum-scale=1.0,user-scalable=no'
      }, {
        hid: 'description',
        name: 'description',
        content: 'it&apos;s my website'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  css: [
    {
      src: 'element-ui/lib/theme-chalk/index.css'
    },
    {
      src: '~static/css/font.css'
    }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#28a745',
    height: '2px'
  },
  /**
   * 使用bootstrapvue
   */
  modules: ['bootstrap-vue/nuxt'],
  serverMiddleware: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    // session middleware
    session({
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60 * 60000 }
    }),
    '~/api'
  ],
  plugins: [
    {
      src: '~plugins/element-ui',
      ssr: false
    }, {
      src: '~/plugins/i18n.js'
    }, {
      src: '~/plugins/vue-resource.js'
    }, {
      src: '~/plugins/vue-echarts.js',
      ssr: false
    }
  ],
  env: {
    PORT: 8080,
    users: [
      { _id: 1, name: 'users', href: '/users' },
      { _id: 3, name: 'menus', href: '/menu' },
      { _id: 2, name: 'skills', href: '/skills' },
      { _id: 4, name: 'selfInfo', href: '/selfInfo' },
      { _id: 5, name: 'experiences', href: '/experiences' },
      { _id: 6, name: 'echarts', href: '/echarts' }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    // vendor: ['element-ui'],
    vendor: ['axios', 'moment', 'lodash'],
    /*
    ** Run ESLint on save
    */
    extend (config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/})
      }
    }
  }
}
