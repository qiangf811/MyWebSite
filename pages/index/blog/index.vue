<template>
  <div id="">
   <Blog :blogs="basedata.blogs" />
  </div>
</template>
<script>
import data from '~/api/data.json'
import Blog from '~/components/blog/blog'
export default {
  name: "",
  data: () => ({
    basedata: data
  }),
  components: {
    Blog
  }
}
</script>
<style lang="stylus" scoped>
</style>
