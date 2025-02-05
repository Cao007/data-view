<template>
  <div class="app-container">
    <Header></Header>
    <div class="main">
      123
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Header from './components/header/index.vue'
import { gather, charge, outPatient, hospitalization, hospitalPostion } from '@/api/index'
const getAllData = async () => {
  const gatherData = await gather()
  const chargeData = await charge()
  const outPatientData = await outPatient()
  const hospitalizationData = await hospitalization()
  const hospitalPostionData = await hospitalPostion()

  return {
    gatherData,
    chargeData,
    outPatientData,
    hospitalizationData,
    hospitalPostionData
  }
}

getAllData().then(res => {
  console.log(res)
})
</script>

<style scoped lang="scss">
.app-container {
  height: 100vh;
  background-color: pink;

  .main {
    width: 100vw;
    padding: 1.85vh 1.04vw;
    box-sizing: border-box;
    background-color: green;
  }
}
</style>