<template>
<b-jumbotron :fluid="true">
  <h1 class="hello banner-item">{{$t('banner.hello')}}</h1>
  <div class="name">
    <h1 class="fistname banner-item">{{$t('banner.firstName')}}</h1>
    <h1 class="lastname banner-item">{{$t('banner.lastName')}}</h1>
  </div>
  <h6 class="exe banner-item">{{$t('banner.welcome')}}</h6>
  <span variant="success" class="btn banner-btn" :class="defaultClass" @click="gotoAbout">{{$t('banner.getMore')}}</span>
</b-jumbotron>
</template>
<script>
export default {
  name: '',
  data: () => ({
    defaultClass: 'defaultClass'
  }),
  methods: {
    gotoAbout () {
      console.log('do something')
    }
  }
}
</script>
<style lang="stylus" scoped>
.jumbotron
  height: 500px
  background:url('~assets/images/banner.jpg')
  background-size: 100%
  background-repeat: no-repeat
  .container
    text-align:center
    .banner-item
      color:#fff
      margin-bottom: 10px
    h1
      font-weight: normal
    .hello
      font-size:20px
    .fistname
      font-size:60px
      background: linear-gradient(to right, #a21af0 , #ff0072)
      -webkit-background-clip: text
      color: transparent
    .lastname
      font-size:60px
    .exe
      font-size:20px
    .btn
      width: 180px
      color:#fff
      height: 40px
      line-height:28px
      border:none
      margin: 0 auto
      margin-top: 20px
      background: linear-gradient(to right, #a21af0 , #ff0072)
      text-align:center
      &:hover
        font-weight:bold
        cursor: pointer
        font-size:16px
</style>
