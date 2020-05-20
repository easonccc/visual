<template>
  <div :style="{ height: height, width: width }" id="container"></div>
</template>
<script>
import p from "../../assets/img/icon/renyuandingwei.png";
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
      var marker,
        lineArr = [
          [111.380447, 30.633675],
          [111.3799578, 30.63251166],
          [111.3795501, 30.63279784],
          [111.38037622, 30.63461645],
        ];

      let that = this;

      this.map = new AMap.Map("container", {
        resizeEnable: true,
        center: [111.38034403, 30.6332825],
        zoom: 17,
      });
      var myIcon = (marker = new AMap.Marker({
        map: this.map,
        position: [111.380447, 30.633675],
        icon: this.myIcon,
        offset: new AMap.Pixel(-26, -13),
        autoRotation: true,
        angle: 0,
      }));

      var icons = [];
      for (let index = 0; index < lineArr.length; index++) {
        var icon = new AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: [lineArr[index][0], lineArr[index][1]],
          map: that.map,
        });

        icons.push(icon);
        // 当地图上的点 点击之后触发_onclick函数
        AMap.event.addListener(icons, "click", _onClick);
      }

      // 绘制轨迹
      var polyline = new AMap.Polyline({
        map: this.map,
        path: lineArr,
        showDir: true,
        strokeColor: "#FF0000", //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 4, //线宽
        // strokeStyle: "solid"  //线样式
      });

      var passedPolyline = new AMap.Polyline({
        map: this.map,
        // path: lineArr,
        strokeColor: "#FF0000", //线颜色
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
        marker.moveAlong(lineArr, 0);
      }

      AMap.event.addListener(marker, "click", _onClick);

      function _onClick(e) {
        var p = e.target;
        console.log(p);
        // alert(1)
        // that.markers.forEach(v => {
        //     v.setAnimation('AMAP_ANIMATION_NONE')
        // });
        that.map.setZoom(18);
        that.map.setCenter([p.getPosition().lng, p.getPosition().lat]);
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
        var content = `<div class="detailAlert peo">
                            <div class="title2 title3">实时巡查人员信息</div>
                            <div class="info">
                                <div class="item item1">
                                    <div>姓名</div>
                                    <div>张三</div>
                                </div>
                                <div class="item item1">
                                    <div>班次</div>
                                    <div>早班(7:00-15:00)</div>
                                </div>
                                <div class="item item1">
                                    <div>事件上报：</div>
                                    <div></div>
                                </div>
                                 <div class="item item1">
                                    <div>时间</div>
                                    <div>地址</div>
                                </div>
                                <div  class="item1 item2 item3">
                                  <div>3月18日12:56 <span>博物馆二楼</span></div>
                                  <div class="event"> 事件详情：有游客李四遗失手机一部，遗失手机电话1331241234，描述</div>
                                </div>
                                 <div  class="item1 item2">
                                  <div>3月18日12:56 <span>博物馆二楼</span></div>
                                  <div> 事件详情：有游客李四遗失手机一部，遗失手机电话1331241234，描述</div>
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
<style scoped lang="less">
#container {
  .detailAlert {
    background: rgba(34, 75, 142, 1);
  }
}
</style>
