<template>
<div class="login">
  <div class="nav-login clearfix">
    <i class="icon">我是图标</i>
    <ul class="nav-container clearfix">
      <li>
        <b-link href="/" class="nav-item">首页</b-link>
      </li>
    </ul>
  </div>
  <div class="login-bg">
    <div class="login-container clearfix">
      <div class="left-ad">
        <h1>我是广告哈</h1>
        <h3>我是广告子标题</h3>
        <h6>强峰的个人网站管理页面</h6>
      </div>
      <b-form @submit.prevent="login" class="right-form">
        <div class="item login-title">
          <h3 class="">用户登录</h3>
        </div>
        <b-form-input id="username" class="item" type="text" v-model="form.username" required placeholder="username">
        </b-form-input>
        <b-form-input id="password" class="" type="password" v-model="form.password" required placeholder="password">
        </b-form-input>
        <div class="errorMsgContainer">
          <div class="errorMsg" v-show="showErroMsgFlage">
            <span>{{errorMsg}}</span>
          </div>
        </div>
        <div class="item" clearfix>
          <b-form-checkbox value="me" id="autoSign">记住密码</b-form-checkbox>
          <b-link href="/findPassword" class="forgetpassword">忘记密码</b-link>
        </div>
        <div class="form-btns">
          <b-button type="submit" class="submit">登录</b-button>
        </div>
      </b-form>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
let JSEncrypt = null
if (process.browser) {
  JSEncrypt = require('jsencrypt').JSEncrypt
}
export default {
  asyncData () {
    return axios.get('http://localhost:8080/api/rsa').then((response) => {
      if (response.data.status === 200) {
        return {
          publickey: response.data.publickey
        }
      }
      return {
        showErroMsgFlage: true,
        errorMsg: response.data.message
      }
    })
  },
  data: () => ({
    form: {
      username: '',
      password: ''
    },
    publickey: '',
    showErroMsgFlage: false,
    errorMsg: '登录失败'
  }),
  methods: {
    async login () {
      try {
        let encrypt = new JSEncrypt()
        encrypt.setPublicKey(this.publickey)
        this.form.password = encrypt.encrypt(this.form.password)
        await this.$store.dispatch('login', this.form)
        this.showErroMsgFlage = false
        window.location = '/'
      } catch (e) {
        console.log(this)
        this.errorMsg = e.message
        this.showErroMsgFlage = true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.login
  .nav-login
    height: 60px
    background-color:#ffffff
    .icon
      width: 100px
      height: 24px
      display: block
      background-image: ('background.jpg')
      float: left
      line-height: 53px
    .nav-container
      list-style: none
      float:right
      width: 150px
      .nav-item
        width: 100px
        text-align:center
        line-height:60px
        float:left
        color:#a21af0
  .login-bg
    width: 100%
    height: 600px
    background:url('/images/login-bg.png') no-repeat center
    background-size: cover
    .login-container
      width: 990px
      margin: 0 auto
      padding-top: 100px
      .left-ad
        float:left
        color:#fff
      .right-form
        float:right
        width: 404px
        background-color: rgba(255,255,255,0.4)
        border-radius: 10px
        padding: 40px 40px 60px 40px
        .login-title
          text-align:center
          color: #fff
          border-bottom: 1px solid #ddd
          padding: 4px 0
        .item
          margin-bottom: 30px
          .forgetpassword
            float:right
          #autoSign
            float: left
        .errorMsgContainer
          height: 30px
          line-height:30px
          color:red
        .form-btns
          text-align:center
          .submit
            width: 100%
            display: inline-block
            background: linear-gradient(to right, #a21af0, #ff0072)
</style>
