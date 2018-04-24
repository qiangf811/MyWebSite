<template>
<b-modal centered hide-footer :title="isNew ? 'New' : 'Edit'" ref="menu">
  <b-form @submit.prevent="onSubmit">
    <b-form-group label="title:" label-for="title">
      <b-form-input id="title" type="text" v-model="form.title" required placeholder="Enter title">
      </b-form-input>
    </b-form-group>
    <b-form-group label="beginTime:" label-for="beginTime">
      <b-form-input id="beginTime" type="date" v-model="form.beginTime" required placeholder="Enter beginTime">
      </b-form-input>
      <span class="errMsg" v-show="errMsg">{{errMsg}}</span>
    </b-form-group>
    <b-form-group label="endTime:" label-for="endTime">
      <b-form-input id="endTime" type="date" v-model="form.endTime" required placeholder="Enter endTime">
      </b-form-input>
    </b-form-group>
    <b-form-group label="textarea:" label-for="textarea">
      <b-form-textarea id="textarea" v-model="form.content" placeholder="Enter content" :rows="4" :max-rows="4">
      </b-form-textarea>
    </b-form-group>
    <b-form-group class="btns">
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button variant="danger" @click.prevent="hideMoadl">Cancle</b-button>
    </b-form-group>
  </b-form>
</b-modal>
</template>
<script>
import moment from 'moment'
export default {
  data: () => ({
    isNew: false,
    errMsg: '',
    form: {
      title: '',
      beginTime: '',
      endTime: '',
      content: ''
    }
  }),
  methods: {
    onSubmit () {
      if (moment(this.form.beginTime).diff(moment(this.form.endTime)) > 0) {
        this.errMsg = '结束时间不能大于开始时间'
        return
      }
      this.$http.post('/api/saveExperience', this.form).then((response) => {
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
        this.form.title = ''
        this.form.beginTime = ''
        this.form.endTime = ''
        this.form.content = ''
      } else {
        this.form.beginTime = moment(this.form.beginTime).format('YYYY-MM-DD')
        this.form.endTime = moment(this.form.endTime).format('YYYY-MM-DD')
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
