<template>
  <div>
    <PhotoUpload/>

  </div>
</template>
<script>
import PhotoUpload from '~/components/upload/uploadPhotoes'
export default {
  middleware: 'auth',
  components: {
    PhotoUpload
  },
  data: () => ({

  })
}
</script>
<style lang="stylus" scoped>
</style>
