<template>
<b-modal id="confirmbox" centered hide-footer title="Tips" ref="confirmbox">
  <p>{{confirmMsg}}</p>
  <div class="c-btns">
    <b-button type="submit" v-show="isConfirm" variant="primary" @click.prevent="hideModal">Cancel</b-button>
    <b-button variant="danger" @click.prevent="doSureAction">Sure</b-button>
  </div>
</b-modal>
</template>
<script>
export default {
  props: {
    confrimAction: {
      type: Function,
      default: () => {
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    },
    confirmMsg: {
      type: String,
      default: '你确定删除此项数据吗？'
    },
    confirmData: {
      type: Object
    },
    isConfirm: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    showModal () {
      this.$refs.confirmbox.show()
    },
    hideModal () {
      this.$refs.confirmbox.hide()
    },
    doSureAction () {
      this.confrimAction(this.confirmData).then(() => {
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
