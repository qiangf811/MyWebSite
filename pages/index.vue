<template>
<section>
  <div>
    <Head :menu="menu" />
  </div>
  <div class="content">
    <nuxt-child/>
  </div>
</section>
</template>

<script>
import data from '~/api/data.json'
import Head from '~/components/head/head'
import axios from 'axios'
import _ from 'lodash'
export default {
  components: {
    Head
  },
  data() {
    return {
      menu: []
    }
  },
  async asyncData({store,error}) {
    try {
      let {data} = await axios.get('http://127.0.0.1:8080/api/menu')
      if(!store.state.authUser){
        menu = _.take(data,6)
      }
      return {
        menu: data
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  beforeCreate() {
    if (process.browser) {
      if ((window.navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
        // window.location = '/mobile'
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~static/stylus/base.styl'
</style>
