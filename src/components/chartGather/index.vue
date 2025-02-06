<template>
  <div class="chart-gather-container">
    <DataContent>
      <template #title>
        <span class="title">采集图表</span>
      </template>
      <template #chart>
        <div class="gatherChart">采集图表</div>
      </template>
    </DataContent>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import DataContent from '../dataContent/index.vue'
import * as echarts from 'echarts';

const props = defineProps(['gatherData'])
watch(props.gatherData, (newVal) => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.querySelector('.gatherChart'));

  // 绘制图表
  const option = {
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        data: newVal,
        label: {
          show: false
        },
        bottom: 30
      }
    ],
    color: ['#87CEFA', '#FF7F50', '#32CD32', '#DA70D6'],
    legend: {
      bottom: 20,
      textStyle: {
        color: '#fff'
      }
    }
  };
  myChart.setOption(option);
})

</script>

<style lang="scss" scoped>
.chart-gather-container {
  .gatherChart {
    width: 100%;
    height: 100%;
  }
}
</style>