import Vue from 'vue'
import ECharts from 'vue-echarts/components/ECharts.vue'

// 手动引入 ECharts 各模块来减小打包体积
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/radar'
import 'echarts/lib/chart/map'
import 'echarts/lib/chart/treemap'
import 'echarts/lib/chart/graph'
import 'echarts/lib/chart/gauge'
import 'echarts/lib/chart/funnel'
import 'echarts/lib/chart/parallel'
import 'echarts/lib/chart/sankey'
import 'echarts/lib/chart/boxplot'
import 'echarts/lib/chart/candlestick'
import 'echarts/lib/chart/effectScatter'
import 'echarts/lib/chart/lines'
import 'echarts/lib/chart/heatmap'

import 'echarts/lib/component/graphic'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/geo'
import 'echarts/lib/component/parallel'
import 'echarts/lib/component/singleAxis'
import 'echarts/lib/component/brush'

import 'echarts/lib/component/title'

import 'echarts/lib/component/dataZoom'
import 'echarts/lib/component/visualMap'

import 'echarts/lib/component/markPoint'
import 'echarts/lib/component/markLine'
import 'echarts/lib/component/markArea'
import 'echarts/lib/component/tooltip'

// 注册组件后即可使用
Vue.component('chart', ECharts)
