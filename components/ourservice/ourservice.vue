<template>
<div id="ourservice">
  <b-container>
    <h1 class="module-title">OUR SERVICE</h1>
    <h6 class="sub-title">our service bala bala to get more</h6>
    <b-row>
      <b-col sm="4" v-for="item in services" :key="item._id">
        <div class="service">
          <i :style="{background:'url('+item.image+')','background-repeat': 'no-repeat','background-size':'100%'}"></i>
          <h6 class="card-text">{{item.name}}</h6>
          <p class="card-text">
            {{item.description}}
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
  <!-- <img src="~/assets/images/banner-mountain.png" alt=""> -->
  <div class="service-footer">
    <div class="bg"></div>
    <div class="mask"></div>
    <div class="ser-content">
      <h1 class="sf-t">COME BODY</h1>
      <b-container>
        <b-row>
          <b-col sm="7">
            <p>Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores. Ipsa dolor sit ile magnam maores.Lorem ipm dolor amet, consecte adipiing lit Sunt sed ad possimus magm maiores. Ipsa dolor sit ile magnam maores.</p>
          </b-col>
          <b-col sm="5">
            <b-row>
              <b-col sm="4">
                <div class="avatar">
                  <img src="~assets/images/avatar.png" alt="">
                </div>
              </b-col>
              <b-col sm="8">
                <h3 class="famous-name">Miller Hemingway</h3>
                <h6 class="faomous-job">Graphic Designer</h6>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: '',
  props: ['services'],
  data: () => ({

  })
}
</script>
<style lang="stylus" scoped>
#ourservice
  .container
    .row
      .col-sm-4
        .service
          margin-bottom: 60px
          i
            display: block
            width: 90px
            height: 90px
            margin: 0 auto
          h6
            text-align:center
            font-weight: bold
            margin-top: 20px
  .service-footer
    height: 400px
    overflow: hidden
    position: relative
    .bg
      height: 400px
      background:url('~assets/images/banner-mountain.png')
      background-size: 100%
      background-repeat: no-repeat
      background-position:center
    .mask
      height: 400px
      width: 100%
      left: 0
      top: 0
      position: absolute
      background-color:#000
      opacity: 0.55
    .ser-content
      width: 100%
      position: absolute
      left: 0
      top: 0
      color:#fff
      .sf-t
        margin: 80px 0 80px 0
        text-align:center
      .container
        .avatar
          width: 100px
          height: 100px
          border-radius:50%
          background-color:#fff
          padding: 5px;
          img
            width: 100%
            height: 100%
            border-radius:50%
        .famous-name
          margin-top: 17px
        .faomous-job
          color:#b83dff
</style>
