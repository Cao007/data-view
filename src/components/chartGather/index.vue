<template>
  <div class="chart-gather-container">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('采集图表')

</script>

<style lang="scss" scoped>
.chart-gather-container {
  width: 22.6vw;
  height: 33.3vh;
  background-color: #081832;
  color: #fff;
}
</style>