<template>
  <div :style="{ height: height, width: width }" id="container"></div>
</template>
<script>
import p from "../assets/img/icon/renyuandingwei.png";
export default {
  props: {
    type: {
      type: String,
      default: "数量",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    bindData: {
      type: Array,
      default: function(value) {
        return value;
      },
    },
  },
  data() {
    return {
      map: null,
      myIcon: p,
    };
  },
  mounted() {
    this.initMap();
  },
  watch: {},
  methods: {
    initMap() {
      let that = this;
      var lineArr = [
        [111.380447, 30.633675],
        [111.3799578, 30.63251166],
        [111.3795501, 30.63279784],
        [111.38037622, 30.63461645],
      ];
      this.map = new AMap.Map("container", {
        resizeEnable: true,
        center: ["111.3811326000", "30.6344179800"],
        zoom: 17,
      });
      // 构造点标记
      let markes = [];
      for (let index = 0; index < lineArr.length; index++) {
        var marker = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: [lineArr[index][0], lineArr[index][1]],
          map: that.map,
        });

        markes.push(marker);
        // 当地图上的点 点击之后触发_onclick函数
        AMap.event.addListener(marker, "click", _onclick);
      }
      // 绘制轨迹
      var polyline = new AMap.Polyline({
        map: that.map,
        path: lineArr,
        strokeColor: "#28F", //线的颜色
        strokeWeight: 6, // 线的宽度
      });

      function _onclick(e) {
        console.log(e);
        console.log(that);
        // 将地图放大
        that.map.setZoom(20);
        // 将地图的中心定到该点的位置
        that.map.setCenter([e.lnglat.lng, e.lnglat.lat]);
        // 构造矢量圆形
        var circle = new AMap.Circle({
          center: new AMap.LngLat(e.lnglat.lng, e.lnglat.lat), // 圆心位置
          radius: 100, //半径
          strokeColor: "#705697", //线颜色
          strokeOpacity: 0, //线透明度
          strokeWeight: 3, //线粗细度
          fillColor: "#c4b7d7", //填充颜色
          fillOpacity: 0.7, //填充透明度
        });
        // 绘制圆形区域
        that.map.add([marker, circle]);
      }

      that.map.add([polyline]);
      this.map.setFitView();
    },
  },
};
</script>
<style scoped lang="less">
#container {
  .detailAlert {
    background: rgba(34, 75, 142, 1);
  }
}
</style>
