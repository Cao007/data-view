<template>
  <div class="data-content-container">
    <slot name="title">
      <span class="title">默认title</span>
    </slot>
    <slot name="chart">默认chart</slot>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.data-content-container {
  position: relative;
  width: 22.6vw;
  height: 33.3vh;
  background-color: #081832;
  box-shadow: 0 0 0.5vw 0.5vw rgba(4, 64, 93, .6);

  ::v-deep(.title) {
    position: absolute;
    z-index: 99;
    left: 50%;
    transform: translateX(-50%);
    top: -1.5vh;
    color: #fff;
    width: 14.5vw;
    text-align: center;
    border-radius: 0.5vh;
    background-color: #034C6A;
    box-shadow: 0 0 0.5vh 0.5vh rgba(4, 64, 93, .6);
  }
}
</style>