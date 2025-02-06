<template>
  <div class="top-show-data-container">
    <div class="box-item" v-for="(item, index) in topDataConf" :key="index">
      <!-- 总采集 -->
      <div class="total-box">
        <div class="left-icon">
          <img :src="item.totalIcon" alt="" />
        </div>
        <div class="right-desc">
          <h3>{{ item.totalTitle }}</h3>
          <h2 :style="{ color: item.color }">{{ props.topData[index]?.total }}</h2>
        </div>
      </div>

      <!-- 当月采集 -->
      <div class="month-box">
        <div class="left-icon">
          <img :src="item.monthIcon" alt="" />
        </div>
        <div class="right-desc">
          <h3>{{ item.monthTitle }}</h3>
          <h2 :style="{ color: item.color }">{{ props.topData[index]?.month }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const topDataConf = [
  {
    totalTitle: "总采集数据量",
    monthTitle: "当月采集量",
    totalIcon: "./info_1.png",
    monthIcon: "./info_2.png",
    color: "#ffff43"
  },
  {
    totalTitle: "总住院数据量",
    monthTitle: "当月住院集量",
    totalIcon: "./info_3.png",
    monthIcon: "./info_4.png",
    color: "#25ebca"
  },
  {
    totalTitle: "总门诊数据量",
    monthTitle: "当月门诊集量",
    totalIcon: "./info_5.png",
    monthIcon: "./info_6.png",
    color: "#ff4e4e"
  },
]

const props = defineProps(['topData'])

</script>

<style lang="scss" scoped>
.top-show-data-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .box-item {
    display: flex;
    align-items: center;
    padding: 1.3vw;
    width: 31.66vw;
    height: 11.48vh;
    background-color: #034c6a;

    .total-box,
    .month-box {
      display: flex;
      align-items: center;
      flex: 1;

      .left-icon {
        width: 2vw;
        height: 2vw;
        margin-right: 1vw;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .right-desc {
        h3 {
          margin: 0;
          font-size: 0.8vw;
          color: #fff;
        }

        h2 {
          margin: 0;
          font-size: 1.2vw;
          color: #fff;
        }
      }
    }
  }
}
</style>