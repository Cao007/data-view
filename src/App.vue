<template>
  <div class="app-container">
    <Header></Header>
    <main>
      <!-- 顶部数据展示 -->
      <TopShowData :topData="topData"></TopShowData>

      <!-- 主体图表数据展示 -->
      <div class="main-show-data">
        <div class="left-container">
          <ChartGather :gatherData="gatherData"></ChartGather>
          <ChartCharge :chargeData="chargeData"></ChartCharge>
        </div>
        <div class="middle-container">
          <ChartHospitalPostion :hospitalPostionData="hospitalPostionData"></ChartHospitalPostion>
        </div>
        <div class="right-container">
          <ChartHospitalization></ChartHospitalization>
          <ChartOutPatient></ChartOutPatient>
        </div>
      </div>

    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import Header from './components/header/index.vue'
import TopShowData from './components/topShowData/index.vue'
import ChartGather from './components/chartGather/index.vue'
import ChartCharge from './components/chartCharge/index.vue'
import ChartHospitalPostion from './components/chartHospitalPostion/index.vue'
import ChartHospitalization from './components/chartHospitalization/index.vue'
import ChartOutPatient from './components/chartOutPatient/index.vue'
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
// 获取采集数据
const gatherData = reactive([])
// 获取收费数据
const chargeData = reactive([])
// 获取医院位置数据
const hospitalPostionData = reactive([])

getAllData().then(res => {
  console.log(res)
  // 顶部数据
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

  // 采集数据
  res.gatherData.hospital.forEach(item => {
    gatherData.push({
      name: item.hospitalName,
      value: item.number
    })
  })

  // 收费数据
  res.hospitalizationData.hospital.forEach(item => {
    let name = item.hospitalName
    let dataArr = []

    res.chargeData.forEach(chargeItem => {
      if (chargeItem.hospitalName === name) {
        dataArr.push(chargeItem.perCapita)
      }
    })

    res.outPatientData.hospital.forEach(outPatientItem => {
      if (outPatientItem.hospitalName === name) {
        dataArr.push(outPatientItem.number)
      }
    })

    dataArr.push(item.number)

    chargeData.push({
      name: name,
      data: dataArr
    })
  })

  // 医院位置数据
  res.hospitalPostionData.forEach(item => {
    hospitalPostionData.push({
      hospitalName: item.hospitalName,
      position: item.position
    })
  })

})
</script>

<style scoped lang="scss">
.app-container {
  height: 100vh;
  background-color: pink;

  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 6.48vh);
    padding: 1.85vh 1.04vw;
    background-color: #000;

    .main-show-data {
      flex: 1;
      display: flex;
      justify-content: space-between;

      .left-container,
      .right-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 2.3vh;
      }

      .middle-container {
        flex: 1;
        margin: 2.3vh 4.25vw 0;

      }
    }
  }
}
</style>