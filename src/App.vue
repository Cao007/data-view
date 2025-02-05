<template>
  <div class="app-container">
    <Header></Header>
    <div class="main">
      <TopShowData :topData="topData"></TopShowData>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import Header from './components/header/index.vue'
import TopShowData from './components/topShowData/index.vue'
import { gather, charge, outPatient, hospitalization, hospitalPostion } from '@/api/index'

// 一次性获取所有数据
const getAllData = async () => {
  const gatherData = await gather()
  const chargeData = await charge()
  const outPatientData = await outPatient()
  const hospitalizationData = await hospitalization()
  const hospitalPostionData = await hospitalPostion()

  return {
    gatherData: gatherData.data.data,
    chargeData: chargeData.data.data,
    outPatientData: outPatientData.data.data,
    hospitalizationData: hospitalizationData.data.data,
    hospitalPostionData: hospitalPostionData.data.data
  }
}

// 获取顶部数据
const topData = reactive([])

getAllData().then(res => {
  console.log(res)
  topData.push(
    {
      total: res.gatherData.allgather,
      month: res.gatherData.monthegather
    },
    {
      total: res.hospitalizationData.allHospitalization,
      month: res.hospitalizationData.montHospitalization
    },
    {
      total: res.outPatientData.allOutpatient,
      month: res.outPatientData.monthOutpatient
    }
  )

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