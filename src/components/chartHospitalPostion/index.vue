<template>
  <div class="chart-HospitalPostion-container">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('医院位置地图')

</script>

<style lang="scss" scoped>
.chart-HospitalPostion-container {
  background-color: #081832;
  box-shadow: 0 0 0.5vw 0.5vw rgba(4, 64, 93, .6);
}
</style>