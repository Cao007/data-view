<template>
  <div class="chart-charge-container">
    <DataContent>
      <template #title>
        <span class="title">收费图表</span>
      </template>
      <template #chart>
        <div class="chargeChart">收费图表</div>
      </template>
    </DataContent>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import DataContent from '../dataContent/index.vue'
import * as echarts from 'echarts';

const props = defineProps(['chargeData'])
watch(props.chargeData, (newVal) => {
  props.chargeData.forEach((item) => {
    item.type = 'bar'
    item.stack = 'total'
  })

  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.querySelector('.chargeChart')!);

  // 绘制图表
  const option = {
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['门诊人数', '住院人数', '人均费用']
    },
    series: props.chargeData
  };
  myChart.setOption(option);
})

</script>

<style lang="scss" scoped>
.chart-charge-container {
  .chargeChart {
    width: 100%;
    height: 100%;
  }
}
</style>