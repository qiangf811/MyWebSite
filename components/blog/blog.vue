<template>
<div class="">
  <b-container>
    <h1 class="module-title">BLOG</h1>
    <h6 class="sub-title">this is my beatiful blog by my beatiful girlfrend haha</h6>
    <b-row>
      <b-col sm="4" v-for="(blog,index) in latelyBlogS" :key="index">
        <b-card :title="blog.title" :img-src="blog.image" img-fluid img-top>
          <p class="card-text">{{blog.content}}</p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
import _ from 'lodash'
export default {
  name: '',
  props: ['blogs'],
  data () {
    return {
      latelyBlogS: _.take(this.blogs, 3)
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
