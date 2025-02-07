<template>
  <div class="chart-outpatient-container">
    <DataContent>
      <template #title>
        <span class="title">门诊图表</span>
      </template>
      <template #chart>
        <div class="outpatientChart">门诊图表</div>
      </template>
    </DataContent>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import DataContent from '../dataContent/index.vue'
import * as echarts from 'echarts';

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.querySelector('.outpatientChart'));

  // 绘制图表
  const option = {
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }
  myChart.setOption(option);
})

</script>

<style lang="scss" scoped>
.chart-outpatient-container {
  .outpatientChart {
    width: 100%;
    height: 100%;
  }
}
</style>