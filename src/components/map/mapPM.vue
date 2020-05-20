<template>
  <div :style="{ height: height, width: width }" id="mapBoxPM"></div>
</template>
<script>
import pm from "../../assets/img/icon/pm25.png";

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
      type: Object,
      default: function(value) {
        return value;
      },
    },
  },
  data() {
    return {
      input: null,
      typeList: [
        {
          name: "PM2.5",
          type: "pm",
        },
      ],
      title: "智慧小镇管控平台-管控地图",
      pmPng: pm,
      deviceActive: 0,
      toShow: false,
      modalShow: false, //modal显示隐藏
      modalIndex: null, //设备序号
      modalType: "t", //设备类型
      device: {
        vedio: null, //视频设备
        wifi: null, //wifi设备
        broad: null, //广播设备
      },
      deviceWifi: null, //wifi设备
      deviceNow: null, //当前选择的设备

      map: null, //地图实例
      markers: [], //地图点标注
      typeName: {
        pm: "PM2.5",
      },
      deviceList: null,
      thisTypeList: null,
    };
  },
  mounted() {
    //this.initMap();
    // this.getAll();
  },
  created() {},
  watch: {
    bindData: {
      deep: true,
      handler() {
        this.getAll();
      },
    },
  },
  methods: {
    selType(item, index) {
      // let item = {
      //   name: "停车场",
      //   type: "tcc"
      // };
      this.deviceActive = index;
      // this.thisTypeList = this.deviceList.filter((v, i) => {
      //   console.log(v.type);
      //   return v.type == item.type;
      // });
      this.drawPoint(this.thisTypeList);
    },
    /*   getMarker(v, j) {
      console.log(v);
      console.log(j);
      this.map.setCenter(this.deviceNow[j].location);
      this.markers.forEach(v => {
        v.setAnimation("AMAP_ANIMATION_NONE");
      });
      this.markers[j].setAnimation("AMAP_ANIMATION_BOUNCE");
      this.markers[j].setMap(this.map);
      this.map.setZoom(20);
      this.modalIndex = j;
      this.modalType = v.type;
      this.modalShow = true;
    },
 */
    getAll() {
      let that = this;
      let data = that.bindData.data;
      console.log(data);

      data.forEach((v) => {
        v.location = [v.coordx, v.coordy];
      });
      let arr = [];
      // console.log(data);
      data.forEach((v) => {
        //   if (v.type == this.propType) {
        arr.push({
          // type: that.typeName[v.type],
          type: v.type,
          address: "伊川西山植物园植园二路G62号",
          location: v.location,
          id: "2c83786jdj89987",
          // path: "./navIcon/" + that.typeName[v.type] + ".png"
          path: that[v.type + "Png"],
        });
        //   }
      });
      console.log("arr", arr);
      console.log(this);

      this.deviceList = arr;
      this.deviceNow = data;
      that.drawPoint(arr);
    },
    drawPoint(device) {
      console.log("device", device);
      var that = this;
      that.map = new AMap.Map("mapBoxPM", {
        resizeEnable: true,
        center: [111.380447, 30.633675],
        zoom: 17,
        // mapStyle: "amap://styles/darkblue"
      });
      /*    var indoor = new AMap.IndoorMap({
        zIndex: 18
      }); */

      var jsonData = [];
      for (let i = 0; i < device.length; i++) {
        jsonData.push(device[i].location);
      }

      var myIcon;
      var markers = [];
      for (var i = 0; i < jsonData.length; i++) {
        switch (device[i].type) {
          case "pm":
            myIcon = new AMap.Icon({
              image: that.pmPng,
              size: new AMap.Size(90, 90),
            });
            break;
        }
        console.log(myIcon);
        console.log(device[i]);
        var marker = new AMap.Marker({
          icon: myIcon,
          position: [jsonData[i][0], jsonData[i][1]],
          // bubble:true,
          extData: {
            index: i,
            type: device[i].type,
          },
          map: that.map,
        });
        console.log(marker);
        markers.push(marker);
        AMap.event.addListener(marker, "click", _onClick);
      }
      this.markers = markers;
      this.map.setCenter([device[0].location[0], device[0].location[1]]);
      /*  if (this.deviceActive != "vedio") {
        this.map.setFitView(markers);
      } */

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
        // p.setAnimation('AMAP_ANIMATION_BOUNCE')\
        var content = `
          <div class="pmBox tipsBox"><ul><li>当前PM2.5含量:***</li>
        </ul>
          </div>
        `;
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
