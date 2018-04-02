<template>
  <div id="">
    <Ourservice :services="basedata.services" />
  </div>
</template>
<script>
import data from '~/api/data.json'
import Ourservice from '~/components/ourservice/ourservice'
export default {
  name: "",
  data: () => ({
    basedata: data
  }),
  components: {
    Ourservice
  }
}
</script>
<style lang="stylus" scoped>
</style>
