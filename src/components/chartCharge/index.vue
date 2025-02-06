<template>
  <div class="chart-charge-container">
    <DataContent>
      <template #title>
        <span class="title">收费图表</span>
      </template>
      <template #chart>
        <span>收费图表</span>
      </template>
    </DataContent>
  </div>
</template>

<script lang="ts" setup>
import DataContent from '../dataContent/index.vue'

</script>

<style lang="scss" scoped>
.chart-charge-container {
  .title {
    color: pink;
  }
}
</style>