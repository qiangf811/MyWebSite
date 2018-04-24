<template>
  <div class="">
    <ul class="galleryContainer clearfix">
      <li v-for="(photo,index) in singelPageData" :key="index">
        <b-img-lazy :src="photo.src" center width="160" height="100" blank-color="#bbb" />
      </li>
    </ul>
    <b-pagination-nav align="right" :number-of-pages="allPagesNum" base-url="#" v-model="currentPage"/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      photoes: [],
      currentPage: 1,
      pageRows: 20
    }
  },
  async asyncData () {
    try {
      let {data} = await axios.get('http://localhost:8080/api/photoes')
      return {
        photoes: data
      }
    } catch (e) {
      console.error(e)
    }
  },
  computed: {
    allPagesNum () {
      return Math.ceil(this.photoes.length / this.pageRows)
    },
    singelPageData () {
      let startIndex = (this.currentPage - 1) * this.pageRows
      let endIndex = this.currentPage * this.pageRows - 1 >= this.photoes.length - 1 ? this.photoes.length - 1 : this.currentPage * this.pageRows - 1
      return this.photoes.filter((o, index) => (index >= startIndex && index <= endIndex))
    }
  }
}
</script>

<style scoped>
.galleryContainer {
  width: 100%;
  height: 500px;
  overflow: auto;
}
.galleryContainer li{
  float: left;
  height: 100px;
  width: 160px;
  margin: 10px;
  display: block;
  overflow: hidden;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #cecece;
}
</style>
