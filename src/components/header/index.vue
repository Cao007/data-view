<template>
  <div class="header-container">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('大屏可视化--自适应满屏')

</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 6.48vh;
  background: #030829;
  color: #fff;
}
</style>