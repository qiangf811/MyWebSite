<template>
  <div id="banner">
    <img src="~/assets/images/banner.jpg" alt="" width="100%" height="100%">
    <div class="description">
      <div class="text">
        <h1 class="hello">HELLO,I AM</h1>
        <h1 class="fistname">QIANG</h1>
        <h1 class="lastname">FENG</h1>
        <h6 class="exe">I HAVE MORE 5 YEARS OF EXPERIENCE</h6>
        <div class="button">
          GETMORE ABOUT ME
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="stylus" scoped>
#banner
  position: relative
  img
    text-align:center
  .description
    position: absolute
    width: 100%
    height: 100%
    left:0
    top:0
    color:#fff
    text-align : center
    .text
      margin-top: 100px
      display: inline-block
      h1
        font-weight: normal
      .hello
        font-size:30px
      .fistname
        font-size:140px
        background: linear-gradient(to right, purple , red)
        -webkit-background-clip: text
        color: transparent
      .lastname
        font-size:140px
      .exe
        font-size:20px
      .button
        width: 180px
        height: 60px
        line-height:60px
        margin: 0 auto
        margin-top: 40px
        background: linear-gradient(to right, purple , red)
        text-align:center
        &:hover
          font-weight:bold
          cursor: pointer
          font-size:16px
</style>
