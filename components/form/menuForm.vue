<template>
<b-modal centered hide-footer :title="isNew ? 'New' : 'Edit'" ref="menu">
  <b-form @submit.prevent="onSubmit">
    <b-form-group label="name:" label-for="name">
      <b-form-input id="name" type="text" :disabled="isNew ? false : true" v-model="form.name" required placeholder="Enter name">
      </b-form-input>
      <span class="errMsg" v-show="errMsg">{{errMsg}}</span>
    </b-form-group>
    <b-form-group label="href:" label-for="href">
      <b-form-input id="href" type="text" v-model="form.href" required placeholder="Enter href">
      </b-form-input>
    </b-form-group>
    <b-form-group label="roleName:" label-for="roleName">
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
export default {
  data: () => ({
    isNew: false,
    errMsg: '',
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
    }],
    form: {
      name: '',
      href: '',
      role: 0
    }
  }),
  methods: {
    onSubmit () {
      this.$http.post('/api/saveMenu', this.form).then((response) => {
        if (response.data.status === 200) {
          this.$emit('refresh')
          this.hideMoadl()
        } else {
          this.errMsg = response.data.message
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    showModal (isNew) {
      this.errMsg = ''
      this.isNew = isNew ? true : false
      if (isNew) {
        delete this.form._id
        this.form.name = ''
        this.form.href = ''
        this.form.role = ''
      }
      this.$refs.menu.show()
    },
    hideMoadl () {
      this.$refs.menu.hide()
    }
  }
}
</script>
<style lang="stylus" scoped>
.errMsg
  color: red
.btns
  text-align:center
  button
    margin: 0 10px
</style>
