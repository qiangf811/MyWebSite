<template>
<div id="">
  <baseGrid :filter="filter" :fields="fields" :newMethod="newMethod" :dataProvider="dataProvider" :rowdbClick="rowdbClick" :rowClick="rowClick"
  :confrimAction="confrimAction" :rowItem="rowItem" :confirmMsg="confirmMsg"/>
</div>
</template>
<script>
import axios from 'axios'
import baseGrid from '~/components/grid/baseGrid'
export default {
  data: () => ({
    filter: null,
    rowItem:{},
    confirmMsg:'',
    fields: [
      'index',
      {
        key: 'name'
      },
      {
        key: 'href'
      },
      'tools'
    ],
    newMethod() {

    },
    async dataProvider(ctx) {
      try {
        let {
          data
        } = await axios.get('/api/skills')
        console.log(data)
        return data
      } catch (e) {
        return []
      }
    },
    rowdbClick(item, index, e) {
      console.log(item)
    },
    rowClick(item, index, e) {
      console.log(item)
    },
    confrimAction(){

    },

  }),
  components: {
    baseGrid
  }
}
</script>
<style lang="stylus" scoped>
</style>
