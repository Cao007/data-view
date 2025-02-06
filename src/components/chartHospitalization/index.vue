<template>
  <div class="chart-hospitalization-container">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('住院图表')

</script>

<style lang="scss" scoped>
.chart-hospitalization-container {
  width: 22.6vw;
  height: 33.3vh;
  background-color: #081832;
}
</style>