<template>
  <div class="bannerContainer">
    <Banner/>
  </div>
</template>
<script>
import Banner from '~/components/banner/banner'
export default {
  name: "",
  data: () => ({

  }),
  components: {
    Banner
  }
}
</script>
<style lang="stylus" scoped>
.bannerContainer
  width: 100%
</style>
