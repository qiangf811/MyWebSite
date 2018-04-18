<template>
<b-modal id="skill" centered hide-footer :title="isNew ? 'New' : 'Edit'" ref="skill">
  <b-form @submit.prevent="onSubmit">
    <b-form-group id="exampleInputGroup1" label="name:" label-for="name">
      <b-form-input id="name" type="text" :disabled="isNew ? false : true" v-model="form.name" required placeholder="Enter name">
      </b-form-input>
      <span class="errMsg" v-show="errMsg">{{errMsg}}</span>
    </b-form-group>
    <b-form-group id="exampleInputGroup4" label="value:" label-for="value">
      <b-form-input id="value" type="text" v-model="form.value" required placeholder="Enter value">
      </b-form-input>
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
  name: "",
  data: () => ({
    isNew: false,
    errMsg: '',
    form: {
      name: '',
      value: ''
    }
  }),
  methods: {
    onSubmit(evt) {
      this.$http.post('/api/saveSkill', this.form).then((response) => {
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
    showModal(isNew) {
      this.errMsg = ''
      this.isNew = isNew ? true : false
      if (isNew) {
        delete this.form._id
        this.form.name = ''
        this.form.value = ''
      }
      this.$refs.skill.show()
    },
    hideMoadl() {
      this.$refs.skill.hide()
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
