<template>
<section class="container">
  <Head :menu="menu" />
</section>
</template>

<script>
import data from '~/api/data.json'
import Head from '~/components/head/head'
export default {
  components: {
    Head
  },
  data() {
    return {
      menu: []
    }
  },
  asyncData() {
    return {
      menu: data.menu
    }
  }
}
</script>

<style>
@import '~/static/css/reset.css';
</style>
