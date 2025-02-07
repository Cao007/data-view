<template>
  <div class="chart-hospitalization-container">
    <DataContent>
      <template #title>
        <span class="title">住院图表</span>
      </template>
      <template #chart>
        <div class="hospitalizationChart">住院图表</div>
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
  const myChart = echarts.init(document.querySelector('.hospitalizationChart'));

  // 绘制图表
  const option = {
    xAxis: {
      type: 'category',
      data: ['8:00', '12:00', '16:00', '20:00']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934],
        type: 'line',
        smooth: true
      }
    ]
  };
  myChart.setOption(option);
})

</script>

<style lang="scss" scoped>
.chart-hospitalization-container {
  .hospitalizationChart {
    width: 100%;
    height: 100%;
  }
}
</style>