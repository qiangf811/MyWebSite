<template>
<section>
  <div>
    <Head :menu="menu"/>
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
export default {
  components: {
    Head
  },
  data() {
    return {
      menu: []
    }
  },
  // asyncData() {
  //   return {
  //     menu: data.menu
  //   }
  // },
  asyncData() {
    // We can return a Promise instead of calling the callback
    return axios.get('http://localhost:8080/api/skills')
      .then((res) => {
        console.log(res.data)
        return { menu: res.data.menu }
      })
  },
  beforeCreate() {
    if (process.browser) {
      if ((window.navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
        // window.location = '/mobile'
      }
    }
  },
}
</script>

<style lang="stylus">
@import '~static/stylus/base.styl'
</style>
