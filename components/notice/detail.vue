<template>
<b-modal centered hide-footer title="Message" ref="notice">
  <b-form>
    <b-form-group id="from" label="from:" label-for="from">
      <b-form-input id="from" type="text" :value="notice.from" disabled>
      </b-form-input>
    </b-form-group>
    <b-form-group id="email" label="email:" label-for="email">
      <b-form-input id="email" type="text" :value="notice.email" disabled>
      </b-form-input>
    </b-form-group>
    <b-form-group id="phoneNumber" label="phoneNumber:" label-for="phoneNumber">
      <b-form-input id="phoneNumber" type="text" :value="notice.phoneNumber" disabled>
      </b-form-input>
    </b-form-group>
    <b-form-group id="textarea1" label="message:" label-for="message">
      <b-form-textarea id="message" :rows="3" :max-rows="6" :value="notice.message">
      </b-form-textarea>
    </b-form-group>
  </b-form>
</b-modal>
</template>
<script>
export default {
  data: () => ({
    notice: {}
  }),
  methods: {
    async show (item) {
      this.notice = item
      try {
        await this.$http.post('/api/readNotice', {
          id: this.notice._id
        })
        this.$refs.notice.show()
      } catch (e) {
        console.error(e)
      }
    },
    hide () {
      this.$refs.notice.hide()
    }
  }
}
</script>
<style lang="css" scoped>
</style>
