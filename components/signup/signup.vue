<template>
<div class="signin">
  <b-form @submit="onSubmit" @reset="onReset" class="right-form">
    <div class="item login-title">
      <h3 class="">用户注册</h3>
    </div>
    <b-form-input id="username" class="item" type="text" v-model="form.username" required placeholder="username">
    </b-form-input>
    <b-form-input id="password" class="item" type="password" v-model="form.password" required placeholder="password">
    </b-form-input>
    <b-form-input id="phoneNumber" class="item" type="text" v-model="form.phoneNumber" required placeholder="phoneNumber">
    </b-form-input>
    <div class="form-btns">
      <b-button type="submit" class="submit">注册</b-button>
    </div>
  </b-form>
</div>
</template>
<script>
import md5 from 'blueimp-md5'
export default {
  data: () => ({
    form: {
      username: '',
      password: '',
      phoneNumber: ''
    }
  }),
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.form.password = md5(this.form.password)
      this.$http.post('/api/signup', this.form).then((response) => {
        if(response.data.status===200){
          window.location = '/'
        } else {
          console.log(err)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    onReset () {
      console.log(1)
    }
  }
}
</script>
<style lang="stylus" scoped>
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
  .form-btns
    text-align:center
    .submit
      width: 100%
      display: inline-block
      background: linear-gradient(to right, #a21af0, #ff0072)
</style>
