<template>
<b-container fluid>
  <b-row class="rowLine">
    <b-col sm="4" class="chart">
      <barChart/>
    </b-col>
    <b-col sm="4" class="chart">
      <pieChart/>
    </b-col>
    <b-col sm="4" class="chart">
      <pieChart/>
    </b-col>
  </b-row>
  <b-row class="rowLine">
    <b-col sm="6" class="chart">
      <lineChart/>
    </b-col>
    <b-col sm="6" class="chart">
      <guageChart/>
    </b-col>
  </b-row>
</b-container>
</template>
<script>
import barChart from '~/components/echarts/barChart'
import pieChart from '~/components/echarts/pieChart'
import lineChart from '~/components/echarts/lineChart'
import guageChart from '~/components/echarts/guageChart'
export default {
  name: "",
  data: () => ({

  }),
  components: {
    barChart,
    pieChart,
    lineChart,
    guageChart
  }
}
</script>
<style lang="css" scoped>
.rowLine{
  margin-bottom: 20px;
}
.chart{
  border: 1px solid #000;
}
.echarts {
  /* height: 400px; */
}
</style>
