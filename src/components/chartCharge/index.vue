<template>
  <div class="chart-charge-container">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('收费图表')

</script>

<style lang="scss" scoped>
.chart-charge-container {
  width: 22.6vw;
  height: 33.3vh;
  background-color: #081832;
  box-shadow: 0 0 0.5vw 0.5vw rgba(4, 64, 93, .6);
}
</style>