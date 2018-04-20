<template>
<b-modal id="modal1" centered hide-footer :title="isNew ? 'New' : 'Edit'" ref="myModal">
  <b-form @submit.prevent="onSubmit">
    <b-form-group id="exampleInputGroup1" label="userName:" label-for="userName">
      <b-form-input id="userName" type="text" :disabled="isNew ? false : true" v-model="form.username" required placeholder="Enter username">
      </b-form-input>
      <span class="errMsg" v-show="errMsg">{{errMsg}}</span>
    </b-form-group>
    <b-form-group id="exampleInputGroup4" label="password:" label-for="password">
      <b-form-input id="password" type="text" v-model="form.password" required placeholder="Enter password">
      </b-form-input>
    </b-form-group>
    <b-form-group id="exampleInputGroup2" label="phoneNumber:" label-for="phoneNumber">
      <b-form-input id="phoneNumber" type="text" v-model="form.phoneNumber" required placeholder="Enter phoneNumber">
      </b-form-input>
    </b-form-group>
    <b-form-group id="exampleInputGroup3" label="roleName:" label-for="roleName">
      <b-form-select id="roleName" :options="role" required v-model="form.role">
      </b-form-select>
    </b-form-group>
    <b-form-group class="btns">
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button variant="danger" @click.prevent="hideMoadl">Cancle</b-button>
    </b-form-group>
  </b-form>
</b-modal>
</template>
<script>
import md5 from 'blueimp-md5'
export default {
  name: "",
  props: ['rowData'],
  data: () => ({
    isNew: false,
    errMsg: '',
    form: {
      username: '',
      phoneNumber: '',
      password: '',
      role: '',
    },
    role: [{
        text: '超级管理员',
        value: 3
      },
      {
        text: '管理员',
        value: 2
      },
      {
        text: '会员用户',
        value: 1
      },
      {
        text: '普通用户',
        value: 0
      }
    ],
  }),
  methods: {
    onSubmit(evt) {
      if (!this.isNew) {
        this.$http.post('/api/updateUser', this.form).then((response) => {
          if (response.data.status === 200) {
            this.$emit('refresh')
            this.hideMoadl()
          } else {
            console.log(err)
          }
        }).catch((err) => {
          console.log(err)
        })
      } else {
        this.form.password = md5(this.form.password)
        this.$http.post('/api/signup', this.form).then((response) => {
          if (response.data.status === 200) {
            this.$emit('refresh')
            this.hideMoadl()
          } else {
            this.errMsg = response.data.message
          }
        }).catch((err) => {
          console.log(err)
        })
      }

    },
    showModal(isNew) {
      if (isNew) {
        delete this.form._id
        this.form.username = ''
        this.form.password = ''
        this.form.phoneNumber = ''
        this.form.role = ''
      }
      this.errMsg = ''
      this.isNew = isNew ? true : false
      this.$refs.myModal.show()
    },
    hideMoadl() {
      this.$refs.myModal.hide()
    }
  }
}
</script>
<style lang="stylus" scoped>
.errMsg
  color:red
.btns
  text-align:center
  button
    margin: 0 10px
</style>
