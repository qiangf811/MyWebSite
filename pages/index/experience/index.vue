<template>
  <div>
    <Experience :experiences="basedata.experiences" />
  </div>
</template>
<script>
import data from '~/api/data.json'
import Experience from '~/components/experience/experience'
export default {
  name: "",
  data: () => ({
    basedata: data
  }),
  components: {
    Experience
  }
}
</script>
<style lang="stylus" scoped>
</style>
