<template>
<div id="header">
  <ul>
    <li v-for="item in menu" :key="item.id"><nuxt-link :to="item.href" @click="dosomething" class="nav">{{item.name}}</nuxt-link></li>
  </ul>
</div>
</template>
<script>
export default {
  props: {
    menu: {
      type: Array
    }
  },
  methods: {
    dosomething(e) {
      console.log(e.target)
      e.target.class='currentClass'
    }
  }
}
</script>
<style lang="stylus" scoped>
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
        &.currentClass
          color:red
</style>
