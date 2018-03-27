<template>
<section class="container">
  <div id="header">
    <ul>
      <li v-for="item in menu" :key="item.id">
        <nuxt-link :to="item.href" active-class="router-link-active" class="nav">{{item.name}}</nuxt-link>
      </li>
    </ul>
  </div>
  <div class="content">
    <nuxt-child/>
  </div>
</section>
</template>

<script>
import data from '~/api/data.json'
export default {
  data() {
    return {
      menu: []
    }
  },
  asyncData() {
    return {
      menu: data.menu
    }
  },
  mounted() {
    //do something after mounting vue instance
  }
}
</script>

<style lang="stylus" scoped>
@import '~/static/css/reset.css';
// @import '~/node_modules/bootstrap/dist/css/bootstrap.min.css';
#header
  height: 110px
  width: 100%
  background: #15263e
  text-align: center
  ul
    list-style-type: none
    overflow: hidden
    display: inline-block
    li
      float: left
      width: 120px
      font-size: 16px
      text-align: center
      line-height: 110px
      .nav
        color: #fff
        &:hover
          cursor: pointer
          color:#cfcfcf
        &.router-link-active
          color:red
.content
  width: 100%
</style>
