<template>
  <div class="chart-HospitalPostion-container">
    <DataContent>
      <template #title>
        <span class="title">医院地图</span>
      </template>
      <template #chart>
        <div id="hospitalPostionChart">医院地图</div>
      </template>
    </DataContent>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import DataContent from '../dataContent/index.vue'
import AMapLoader from '@amap/amap-jsapi-loader';

const props = defineProps(['hospitalPostionData'])
console.log('props.hospitalPostionData', props.hospitalPostionData);

window._AMapSecurityConfig = {
  securityJsCode: "0f49b6909a6c8e4c992c9d7c7f49b9ed",
};

onMounted(() => {
  AMapLoader.load({
    key: "d9ba137a6be0ecf32ece3687d27bf8a6",
    version: "2.0",
  })
    .then((AMap) => {
      const map = new AMap.Map("hospitalPostionChart", {
        zoom: 13,
        center: props.hospitalPostionData[0]?.position
      });

      //多个点实例组成的数组
      const markerList = [];
      props.hospitalPostionData.forEach((item) => {
        //创建一个 Marker 实例：
        const marker = new AMap.Marker({
          position: new AMap.LngLat(item.position[0], item.position[1]), //经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
          title: item.hospitalName,
        });
        markerList.push(marker);
      })
      //将创建的点标记添加到已有的地图实例：
      map.add(markerList);
    })
    .catch((e) => {
      console.error(e); //加载错误提示
    });
})

</script>

<style lang="scss" scoped>
.chart-HospitalPostion-container {
  display: flex;
  height: 100%;

  .data-content-container {
    flex: 1;
    height: 100%;

    #hospitalPostionChart {
      width: 100%;
      height: 100%;
    }
  }
}
</style>