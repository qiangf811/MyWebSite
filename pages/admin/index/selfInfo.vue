<template>
<div class="infoContainer">
  <b-form @submit.prevent="onSubmit">
    <div>
      <b-row>
        <b-col>
          <label for="name">Name: </label>
          <b-input id="name" placeholder="Name" v-model="form.name" />
        </b-col>
        <b-col>
          <label for="JobName">JobName: </label>
          <b-input id="JobName" placeholder="JobName" v-model="form.jobName" />
        </b-col>
        <b-col>
          <label for="inlineFormInputGroupUsername2">PhoneNumber: </label>
          <b-input id="inlineFormInputGroupUsername2" placeholder="PhoneNumber" v-model="form.phoneNumber" />
        </b-col>
      </b-row>
      <b-row class="mtop10">
        <b-col>
          <label for="inlineFormInputName2">Email: </label>
          <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Jane Doe" v-model="form.emailAddress" />
        </b-col>
        <b-col>
          <label for="inlineFormInputGroupUsername3">Address: </label>
          <b-input id="inlineFormInputGroupUsername3" placeholder="Address" v-model="form.address" />
        </b-col>
          <b-col>
            <label for="WorkYears">WorkYears: </label>
            <b-input id="WorkYears" placeholder="WorkYears" v-model="form.workYears" />
          </b-col>
      </b-row>
      <b-row class="mtop10">
        <label for="textarea" style="float:left;margin-left: 24px;">Description: </label>
        <b-form-textarea id="textarea" v-model="form.description" placeholder="Enter something" :rows="8" :max-rows="8" style="float:left;max-width: 864px;">
        </b-form-textarea>
      </b-row>
      <b-row class="mtop10">
        <b-col></b-col>
        <b-col></b-col>
        <b-col class="btnsContainer"><b-button type="submit" variant="success" class="btn"> EditInfo </b-button></b-col>
      </b-row>
    </div>
  </b-form>
  <confirmbox ref="confirm" :confirmMsg="successMessage" :isConfirm="isConfirm"/>
</div>
</template>
<script>
import axios from 'axios'
import confirmbox from '~/components/confirm/confirm'
export default {
  async asyncData () {
    try {
      let {
        data
      } = await axios.get('http://localhost:8080/api/cardInfo')
      if (data) {
        return {
          form: data
        }
      }
    } catch (e) {
      console.error(e)
    }
  },
  data () {
    return {
      successMessage: '保存成功',
      isConfirm: false,
      form: {
        name: '',
        jobName: '',
        emailAddress: '',
        phoneNumber: '',
        address: '',
        workYears: '',
        description: ''
      },
      show: true
    }
  },
  methods: {
    async onSubmit (evt) {
      try {
        await axios.post('/api/cardInfo', this.form)
        this.$refs.confirm.showModal()
      } catch (e) {
        console.error(e)
      }
    }
  },
  components: {
    confirmbox
  }
}
</script>
<style lang="css" scoped>
.infoContainer{
  max-width: 1000px;
}
label{
  width: 110px;
  margin: 0 10px;
  text-align: right;
}
.btn{
  margin-left: 10px;
}
.infoContainer input{
  width:175px !important;
  display: inline-block !important;
}
.mtop10{
  margin-top: 10px;
}
.btnsContainer{
  text-align: right;
  margin-right: 8px;
}
</style>
