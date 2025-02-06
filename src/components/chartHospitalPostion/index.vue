<template>
  <div class="chart-HospitalPostion-container">
    <DataContent>
      <template #title>
        <span class="title">医院地图</span>
      </template>
      <template #chart>
        <span>医院地图</span>
      </template>
    </DataContent>
  </div>
</template>

<script lang="ts" setup>
import DataContent from '../dataContent/index.vue'

</script>

<style lang="scss" scoped>
.chart-HospitalPostion-container {
  display: flex;
  height: 100%;

  .data-content-container {
    flex: 1;
    height: 100%;
  }
}
</style>