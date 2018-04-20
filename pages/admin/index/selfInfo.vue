<template>
<div class="infoContainer">
  <b-form @submit.prevent="onSubmit">
    <b-form-group id="exampleInputGroup1" label="Email address:" label-for="exampleInput1">
      <b-form-input id="exampleInput1" type="email" v-model="form.emailAddress" required placeholder="Enter email">
      </b-form-input>
    </b-form-group>
    <b-form-group id="exampleInputGroup2" label="Your phoneNumber:" label-for="exampleInput2">
      <b-form-input id="exampleInput2" type="text" v-model="form.phoneNumber" required placeholder="Enter phoneNumber">
      </b-form-input>
    </b-form-group>
    <b-form-group id="exampleInputGroup3" label="address:" label-for="exampleInput3">
      <b-form-input id="exampleInput3" type="text" v-model="form.address" required placeholder="Enter address">
      </b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</div>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData () {
    try {
      let {data} = await axios.get('http://localhost:8080/api/cardInfo')
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
      form: {
        emailAddress: '',
        phoneNumber: '',
        address: ''
      },
      show: true
    }
  },
  methods: {
    async onSubmit (evt) {
      try {
        await axios.post('/api/cardInfo', this.form)
        console.log('成功')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
<style lang="css" scoped>
.infoContainer{
  width: 400px;
}
</style>
