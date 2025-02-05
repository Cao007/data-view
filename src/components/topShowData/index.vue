<template>
  <div class="show-data-container">
    {{ name }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const name = ref('顶部数据展示')

</script>

<style lang="scss" scoped>
.show-data-container {
  color: pink;
}
</style>