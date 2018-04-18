<template>
<b-modal id="confirmbox" centered hide-footer title="Tips" ref="confirmbox">
  <p>{{msg}}</p>
  <div class="c-btns">
    <b-button type="submit" variant="primary" @click.prevent="hideModal">Cancel</b-button>
    <b-button type="reset" variant="danger" @click.prevent="doSureAction">Sure</b-button>
  </div>
</b-modal>
</template>
<script>
export default {
  name: "",
  props: {
    confrimAction: {
      type: Function
    },
    msg: {
      type: String
    },
    data:{
      type: Object
    }
  },
  methods: {
    showModal() {
      this.$refs.confirmbox.show()
    },
    hideModal() {
      this.$refs.confirmbox.hide()
    },
    doSureAction(){
      this.confrimAction(this.data).then(()=>{
        this.hideModal()
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.c-btns
  width: 100%
  text-align:right
  display: inline-block
  button
    margin-right: 10px
</style>
