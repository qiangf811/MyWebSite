<template>
<div class="">
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div class="self-info info-item">
          <h1>{{cardInfo.name}}</h1>
          <h2 class="job-name">{{cardInfo.jobName}}</h2>
          <p>{{cardInfo.description}}</p>
        </div>
      </div>
      <div class="col-sm">
        <div class="person"></div>
      </div>
      <div class="col-sm">
        <div class="prograss info-item">
          <div class="progress-item" v-for="skill in recentSkills" :key="skill.id">
            <h5>{{skill.name}} (<span>{{skill.value}}</span>%)</h5>
            <b-progress height="12px" :max=100 class="mb-3">
              <b-progress-bar class="purple" variant="success" :value="skill.value"></b-progress-bar>
              <b-progress-bar class="red" :value="100-skill.value"></b-progress-bar>
            </b-progress>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</div>
</template>
<script>
import _ from 'lodash'
export default {
  props: ['skills', 'cardInfo'],
  data () {
    return {
      recentSkills: _.take(this.skills, 5)
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.recentSkills.forEach(skill => { skill.value = parseInt(25 + (Math.random() * 75)) })
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  },
  computed: {
    lang () {
      return this.$i18n.locale
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  .row
    .col-sm
      .self-info
        text-align:right
        &.info-item
          padding-top: 35px;
          .job-name
            color:#a21af0
            font-size:20px
      .person
        background:url('~assets/images/person.png')
        background-size: 100%
        background-repeat: no-repeat
        height: 320px
      .prograss
        padding-top: 35px
        .progress-item
          margin-bottom: 20px
          h5
            text-align:center
            font-size: 16px
          .progress
            .purple
              background:#a21af0 !important
              border-radius:9px 0 0 9px
            .red
              background:#ff0072 !important
              border-radius:0 9px 9px 0
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
