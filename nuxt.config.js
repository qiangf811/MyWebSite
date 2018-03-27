module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'website',
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
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#c12582',
    height: '4px'
  },
  // plugins: [
  //   {
  //     src: './node_modules/jquery/dist/jquery.min.js',
  //     ssr: false
  //   }
  // ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/})
        // config.module.rules.push({loader: 'stylus-loader'})
      }
    }
  }
}
