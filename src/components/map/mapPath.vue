<template>
  <div :style="{ height: height, width: width }" id="container"></div>
</template>
<script>
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
    };
  },
  mounted() {
    this.initMap();
  },
  watch: {},
  methods: {
    initMap() {
      var marker,
        lineArr = [
          [111.37969598147582, 30.633638073798625],
          [111.38141259524535, 30.63729369937775],
          [111.38175591799926, 30.638290664198347],
          [111.38892278048705, 30.636481350075695],
          [111.39012441012572, 30.63603824758123],
          [111.38776406619262, 30.62920682730855],
          [111.389282, 30.62920682730855],
          [111.389658, 30.62920682730855],
          [111.390151, 30.62920682730855],
          [111.390784, 30.62920682730855],
          [111.390784, 30.62920682730855],
          [111.391149, 30.62920682730855],
          [111.391573, 30.62920682730855],
          [111.391863, 30.62920682730855],
          [111.392072, 30.62920682730855],
          [111.392362, 30.62920682730855],
          [111.393633, 30.62920682730855],
          [111.39367, 30.62920682730855],
          [111.394648, 30.62920682730855],
        ];

      let that = this;

      this.map = new AMap.Map("container", {
        resizeEnable: true,
        center: [111.37969598147582, 30.633638073798625],
        zoom: 16,
      });

      marker = new AMap.Marker({
        map: this.map,
        position: [111.37969598147582, 30.633638073798625],
        icon: "https://webapi.amap.com/images/car.png",
        offset: new AMap.Pixel(-26, -13),
        autoRotation: true,
        angle: -90,
      });

      // 绘制轨迹
      var polyline = new AMap.Polyline({
        map: this.map,
        path: lineArr,
        showDir: true,
        strokeColor: "#28F", //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6, //线宽
        // strokeStyle: "solid"  //线样式
      });

      var passedPolyline = new AMap.Polyline({
        map: this.map,
        // path: lineArr,
        strokeColor: "#AF5", //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6, //线宽
        // strokeStyle: "solid"  //线样式
      });

      marker.on("moving", function(e) {
        passedPolyline.setPath(e.passedPath);
      });

      this.map.setFitView();

      AMap.event.addListener(marker, "click", startAnimation);

      function startAnimation() {
        marker.moveAlong(lineArr, 800);
      }

      AMap.event.addListener(marker, "click", _onClick);

      function _onClick(e) {
        var p = e.target;
        console.log(p);
        // alert(1)
        // that.markers.forEach(v => {
        //     v.setAnimation('AMAP_ANIMATION_NONE')
        // });
        //   that.map.setZoom(20);
        //    that.map.setCenter([p.getPosition().lng, p.getPosition().lat]);
        console.log(p.Qe);
        //     let selected = that.deviceList[p.Qe.extData["index"]];
        // p.setAnimation('AMAP_ANIMATION_BOUNCE')
        // let title = that.typeName[selected.type];
        // let info = {
        //     name: "A005号视频监控设备",
        //     xh: "高清枪机",
        //     zb: p.getPosition().lng + "," + p.getPosition().lat,
        //     id: "53af158-c356-4093-8148",
        //     add: "滨河街道滨河路与海滨路交界滨河路红灯处",
        //     status: "正常",
        //     weather: "天气情况"
        // };
        var content = `<div class="detailAlert">
                            <div class="title2">车辆信息</div>
                            <div class="info">
                                <div class="item">
                                    <div>所在地</div>
                                    <div>宜昌博物馆</div>
                                </div>
                                <div class="item">
                                    <div>坐标</div>
                                    <div>120.775264，37823775</div>
                                </div>
                                <div class="item">
                                    <div>识别车牌</div>
                                    <div>鄂ET0815</div>
                                </div>
                                <div class="item">
                                    <div>方向</div>
                                    <div>出</div>
                                </div>
                                <div class="item">
                                    <div>时间</div>
                                    <div>2018.11.15 12:56:20</div>
                                </div>
                                <div class="item">
                                   <img src="./img/car.jpg" style="width:100%;height: 4rem">
                                </div>
                             </div>

                       </div>`;
        // 创建 infoWindow 实例
        var infoWindow = new AMap.InfoWindow({
          isCustom: true, //使用自定义窗体
          content: content, //传入 dom 对象，或者 html 字符串
          closeWhenClickMap: true,
        });
        infoWindow.open(that.map, [p.getPosition().lng, p.getPosition().lat]);
      }
    },
  },
};
</script>
<style scoped lang="less"></style>
