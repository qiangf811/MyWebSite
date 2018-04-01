<template>
<div class="contact">
  <b-container>
    <div class="title">
      <h1 class="module-title">CONTACT ME</h1>
      <h6 class="sub-title">these experiences are so good to me ha</h6>
    </div>
    <b-form @submit="onSubmit" class="index-form">
      <b-form-group id="exampleInputGroup1">
        <b-form-input id="exampleInput1" type="text" v-model="form.name" required placeholder="Name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup2">
        <b-form-input id="exampleInput2" type="text" v-model="form.phone" required placeholder="PhoneNumber">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup3" >
        <b-form-input id="exampleInput3" type="email" v-model="form.email" required placeholder="Email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="exampleInputGroup4" >
        <b-form-textarea id="textarea4" v-model="form.message" placeholder="Your Message" :rows="3" :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <button class="btn form-btn" type="submit">SENG MESSAGE</button>
    </b-form>
    <!-- <b-form @submit="onSubmit">
      <b-row>
        <b-col>
          <b-form-group id="exampleInputGroup1" label="Name:" label-for="exampleInput1">
            <b-form-input id="exampleInput1" type="text" v-model="form.name" required placeholder="Name">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="exampleInputGroup2" label="Your Name:" label-for="exampleInput2">
            <b-form-input id="exampleInput2" type="text" v-model="form.phone" required placeholder="PhoneNumber">
            </b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="exampleInputGroup3" label="Your Name:" label-for="exampleInput3">
            <b-form-input id="exampleInput3" type="email" v-model="form.email" required placeholder="Email">
            </b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="exampleInputGroup4" label="Your Name:" label-for="exampleInput4">
            <b-form-textarea id="textarea4" v-model="form.message" placeholder="Enter something" :rows="3" :max-rows="6">
            </b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <button class="btn form-btn" type="submit">SENG MESSAGE</button>
    </b-form> -->
  </b-container>
  <b-modal ref="myModalRef"  title="Message" class="model">
    <p class="my-4">Tank You For Your Message!</p>
    <!-- <b-btn class="mt-3" variant="success" @click="hideModal">Close Me</b-btn> -->
  </b-modal>
</div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$refs.myModalRef.show()
      // alert(JSON.stringify(this.form));
    },
    hideModal(){
      this.$refs.myModalRef.hide()
    }
  }
}
</script>
<style lang="stylus" scoped>
.contact
  height: 650px
  margin-top: 60px
  padding: 60px 0
  background: url('~/assets/images/contact.png')
  background-size: 100%
  background-repeat: no-repeat
  background-position:center
  .model
    .mt-3
      margin: 0 auto
      display: block
  .container
    color:#fff
    background-color: #15263e
    padding-bottom: 10px
    form
      padding-bottom: 20px
    .title
      padding-top: 1px
    .form-btn
      background: linear-gradient(to right, #a21af0 , #ff0072)
      height: 50px
      width: 158px
      margin: 0 auto
      display: block
      margin-top: 20px
      color:#fff
      border: 1px solid
</style>
