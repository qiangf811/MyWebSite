<template>
<div class="">
  <b-container>
    <h1 class="module-title">PHOTOES</h1>
    <h6 class="sub-title">this is my beatiful photoes by my beatiful girlfrend haha</h6>
    <b-row>
      <b-col sm="2" class="photo-sidebar">
        <ul>
          <li v-for="(type,index) in photoeTypes" :key="index" :class="{active:type===currentType}" @click="changePhoto(type)">{{phototype[type]}}</li>
        </ul>
      </b-col>
      <b-col sm="10" class="content" v-loading="loading" element-loading-text="loading..." element-loading-background="#eeeeee">
        <b-card-group columns>
          <b-card v-for="(photo,index) in photoGroup" :key="index" :img-src="photo.src"  img-alt="image" overlay>
          </b-card>
        </b-card-group>
        <!-- <b-img-lazy v-for="(photo,index) in photoGroup" class="lazy-img" :key="index" width="290" height="290" :src="photo.src" thumbnail/> -->
        <!-- <div class="mask" v-show="showMask"></div> -->
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    phototype: {
      0: "ALL",
      1: "CITY",
      2: "CONTRY",
      3: "ANIMALS",
      4: "PEPOLE",
      5: "LOVES"
    },
    currentType: 0,
    loading: true
  }),
  props: ['photoes'],
  mounted() {
    let count = 0
    for (let phhoto of this.photoes) {
      let img = new Image()
      img.src = phhoto.src
      img.onload = () => {
        if (count >= this.photoes.length - 1) {
          this.loading = false
        }
        count++
      }
    }
  },
  computed: {
    photoeTypes() {
      const types = new Set()
      for (let photo of this.photoes) {
        types.add(photo.type)
      }
      return [0, ...Array.from(types)]
    },
    photoGroup() {
      if (this.currentType === 0) return this.photoes
      return this.photoes.filter(photo => photo.type == this.currentType)
    }
  },
  methods: {
    changePhoto(type) {
      if (type === this.currentType) return
      // this.loading = true
      this.currentType = type
    }
  }
}
</script>
<style lang="stylus" scoped>
.photo-sidebar
  li
    margin-bottom: 10px
    cursor: pointer
    font-weight:500
    color:#212529
    &.active
      color:#a21af0
    &:hover
      color:#a21af0
.content
  height: 610px
  overflow: auto
  .lazy-img
    margin: 8px
</style>
