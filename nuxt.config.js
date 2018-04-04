module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fengqang web',
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
    }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#c12582',
    height: '4px'
  },
  /**
   * 使用bootstrapvue
   */
  modules: ['bootstrap-vue/nuxt'],

  serverMiddleware: ['~/api'],
  plugins: [
    {
      src: '~plugins/element-ui',
      ssr: false
    }, {
      src: '~/plugins/i18n.js'
    }, {
      src: '~/plugins/vue-resource.js'
    }
  ],
  /*
  ** Build configuration
  */
  build: {
    // vendor: ['element-ui'],
    vendor: ['axios'],
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
