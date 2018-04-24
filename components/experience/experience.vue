<template>
<div class="experience">
  <b-container>
    <div class="title">
      <h1 class="module-title">EXPERIENCE</h1>
      <h6 class="sub-title">these experiences are so good to me ha</h6>
    </div>
    <div v-for="(experience,index) in experiences" :key="index">
      <b-row v-if="index%2===0" class="item">
        <b-col :sm="3" class="time-container">
          <h5>{{experience.title}}</h5>
          <h6 class="time">{{experience.time}}</h6>
        </b-col>
        <b-col :sm="9">
          <p class="description">{{experience.content}}</p>
          <i class="split-icon"></i>
        </b-col>
      </b-row>
      <b-row v-else class="item">
        <b-col sm="9">
          <p class="description reserve">{{experience.content}}</p>
          <i class="split-icon reserve"></i>
        </b-col>
        <b-col sm="3" class="time-container reserve">
          <h5>{{experience.title}}</h5>
          <h6 class="time">{{experience.time}}</h6>
        </b-col>
      </b-row>
    </div>
  </b-container>
</div>
</template>
<script>
export default {
  data: () => ({}),
  props: ['experiences']
}
</script>
<style lang="stylus" scoped>
.experience
  margin-top: 60px
  padding-bottom: 60px
  background: linear-gradient(to right, #a21af0 , #ff0072)
  .title
    padding-top: 1px
    .module-title
      color:#fff
    .sub-title
      color:#fff
  .item
    color:#fff
    margin-bottom: 40px
    .time-container
      text-align:right
      &.reserve
        text-align:left
      .time
        font-weight:bold
    .description
      height: 78px
      overflow: hidden
      padding: 0 30px
      position: relative
      text-align:left
      margin-top: -4px
      color: #eee
      &.reserve
        text-align:right
    .split-icon
      width: 10px
      height: 54px
      background-color: #ffffff
      display: block
      position: absolute
      left: 0
      top: 0
      &.reserve
        position: absolute
        right: 0
        top: 0
        left: auto
</style>
