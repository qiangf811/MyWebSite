<template>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <div class="self-info info-item">
        <h1>{{$t('skills.name')}}</h1>
        <h2 class="job-name">{{$t('skills.job')}}</h2>
        <p>{{$t('skills.description')}}</p>
      </div>
    </div>
    <div class="col-sm">
      <div class="person"></div>
    </div>
    <div class="col-sm">
      <div class="prograss info-item">
        <div class="progress-item" v-for="skill in skills" :key="skill.id">
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
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  props: ['skills'],
  mounted() {
    this.timer = setInterval(() => {
      this.skills.forEach(skill => skill.value = parseInt(25 + (Math.random() * 75)))
    }, 2000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
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
</style>
