<template>
  <div class="data-content-container">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('图表插槽')

</script>

<style lang="scss" scoped>
.data-content-container {
  color: pink;
}
</style>