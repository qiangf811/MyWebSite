<template>
<div class="numberInfobg">
  <div class="container">
    <div class="row">
      <div class="col-sm clearfix">
        <i class="ico-phone"></i>
        <div class="content">
          <h5>{{$t('cardInfo.phoneNumber')}}</h5>
          <span class="phone-number">{{cardInfo.phoneNumber}}</span>
        </div>
      </div>
      <div class="col-sm">
        <i class="ico-address"></i>
        <div class="content">
          <h5>{{$t('cardInfo.address')}}</h5>
          <span class="phone-number">{{cardInfo.address}}</span>
        </div>
      </div>
      <div class="col-sm">
        <i class="ico-email"></i>
        <div class="content">
          <h5>{{$t('cardInfo.emailAddress')}}</h5>
          <span class="phone-number">{{cardInfo.emailAddress}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  computed: {
    lang() {
      return this.$i18n.locale
    }
  },
  props: ['cardInfo']
}
</script>
<style lang="stylus" scoped>
.numberInfobg
  background:#dcdcde
  margin-top: 40px
  .container
    padding: 30px 0
    .row
      .col-sm
        .ico-phone
          width: 100px
          height: 100px
          display: block
          float:left
          border-radius: 50%
          background:url('~assets/images/icon_phone.png')
          background-repeat: no-repeat
          background-position:center
        .content
          float: left
          margin: 26px 26px 0 26px
          span
            display: block
            font-size:16px
          .phone-number
            margin-top: 10px
        .ico-address
          width: 100px
          height: 100px
          display: block
          float:left
          border-radius: 50%
          background:url('~assets/images/icon_address.png')
          background-repeat: no-repeat
          background-position:center
        .ico-email
          width: 100px
          height: 100px
          display: block
          float:left
          border-radius: 50%
          background:url('~assets/images/icon_email.png')
          background-repeat: no-repeat
          background-position:center
</style>
