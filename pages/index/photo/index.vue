<template>
<!-- <b-container>
    <h1 class="module-title">PHOTOES</h1>
    <h6 class="sub-title">this is my beatiful photoes by my beatiful girlfrend haha</h6>
    <b-row>
        <b-col sm="3" class="photo-sidebar">
          <ul>
            <li><nuxt-link to="/photo/1">关于</nuxt-link></li>
            <li><nuxt-link to="/photo/2">关于</nuxt-link></li>
            <li><nuxt-link to="/photo/3">关于</nuxt-link></li>
          </ul>
        </b-col>
        <b-col sm="9" class="content">
        <nuxt-child :key="$route.params.id"/>
        </b-col>
    </b-row>
</b-container> -->
<Photo :photoes="basedata.photoes" />
</template>
<script>
import data from '~/api/data.json'
import Photo from '~/components/photo/photo'
export default {
  name: "",
  data: () => ({
    basedata: data
  }),
  components: {
    Photo
  }
}
</script>
<style lang="stylus" scoped>
</style>
