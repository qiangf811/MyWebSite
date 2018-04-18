<template>
  <chart :options="bar" @click="doClick"></chart>
</template>

<script>
  export default {
    props: {
    },
    data: () => ({
      bar: {
        title: {
          text: 'ECharts Hello World'
        },
        tooltip: {},
        xAxis: {
          data: ['Shirt', 'Sweater', 'Chiffon Shirt', 'Pants', 'High Heels', 'Socks']
        },
        yAxis: {},
        series: [{
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }),
    methods: {
      doClick(a,b,c,d){
        console.log('s')
      }
    }
  };
</script>

<style scoped>
.echarts {
  width: 500px;
}
</style>
