<template>
  <div class="container mystyle">
    <div class="typeList">
      <div
        @click="selType(v,i)"
        v-for="(v,i) in typeList"
        :class="deviceActive == i?'active':''"
      >{{v.name}}</div>
    </div>

    <div id="parkdata">
      <div id="mapBox2" class="mapBox2"></div>
      <div class="device_list" v-show="toShow">
        <div class="list_title">设备列表</div>
        <div class="list_item" v-for="(v,j) in deviceList" @click="getMarker(v,j)">
          <div class="list_item_title">
            <span class="list_item_title_type">{{typeName[v.type]}}</span>
            <span class="list_item_title_address">伊川西山植物园植园二路G62号</span>
            <img :src="v.path" />
          </div>
          <div class="ip">坐标：{{v.location}}</div>
          <div class="ip">设备ID：2c83786jdj89987</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gb from "../../assets/img/gb.png";
import jk from "../../assets/img/jk.png";
import led from "../../assets/img/led.png";
import tcc from "../../assets/img/tcc.png";
import wifi from "../../assets/img/wifi.png";
import zj from "../../assets/img/zj.png";
export default {
  name: "yun",
  data() {
    return {
      toShow: false,
      typeList: [
        {
          name: "全部",
          type: "all"
        },
        {
          name: "监控",
          type: "jk"
        },
        {
          name: "WiFi",
          type: "wifi"
        },
        {
          name: "停车场",
          type: "tcc"
        },
        {
          name: "广播",
          type: "gb"
        },
        {
          name: "闸机",
          type: "zj"
        },
        {
          name: "大屏",
          type: "led"
        },
        {
          name: "异常设备",
          type: "error"
        }
      ],
      title: "智慧小镇管控平台-管控地图",
      gbPng: gb, //js图片地址
      jkPng: jk,
      ledPng: led,
      tccPng: tcc,
      wifiPng: wifi,
      zjPng: zj,

      deviceActive: 0,
      toShow: false,
      modalShow: false, //modal显示隐藏
      modalIndex: null, //设备序号
      modalType: "wifi", //设备类型
      device: {
        vedio: null, //视频设备
        wifi: null, //wifi设备
        broad: null //广播设备
      },
      deviceWifi: null, //wifi设备
      deviceNow: null, //当前选择的设备

      map: null, //地图实例
      markers: [], //地图点标注
      typeName: {
        wifi: "无线网",
        gb: "广播",
        jk: "监控",
        led: "LED大屏",
        tcc: "停车场",
        zj: "闸机"
      },
      deviceList: null,
      thisTypeList: null
    };
  },
  created() {
    this.getAll();
    // this.getDeviceType();
  },
  props: {
    propType: {
      type: String,
      default: "tcc"
    }
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
    getMarker(v, j) {
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

    getAll() {
      let that = this;
      this.$axios.get("./data/data.json").then(v => {
        let data = v.data;
        data.forEach(v => {
          v.location = [v.coordx, v.coordy];
        });
        let arr = [];
        // console.log(data);
        data.forEach(v => {
          //   if (v.type == this.propType) {
          arr.push({
            // type: that.typeName[v.type],
            type: v.type,
            address: "伊川西山植物园植园二路G62号",
            location: v.location,
            id: "2c83786jdj89987",
            // path: "./navIcon/" + that.typeName[v.type] + ".png"
            path: that[v.type + "Png"]
          });
          //   }
        });
        console.log("arr", arr);
        this.deviceList = arr;
        this.deviceNow = data;
        that.drawPoint(arr);
      });
    },
    drawPoint(device) {
      console.log("device", device);
      var that = this;
      that.map = new AMap.Map("mapBox2", {
        resizeEnable: true,
        center: [112.42567, 34.42135],
        zoom: 14
        // mapStyle: "amap://styles/darkblue"
      });
      var jsonData = [];
      for (let i = 0; i < device.length; i++) {
        jsonData.push(device[i].location);
      }
      var myIcon;
      var markers = [];
      for (var i = 0; i < jsonData.length; i++) {
        switch (device[i].type) {
          case "wifi":
            myIcon = new AMap.Icon({
              image: that.wifiPng
            });
            break;
          case "gb":
            myIcon = new AMap.Icon({
              image: that.gbPng
            });
            break;
          case "jk":
            myIcon = new AMap.Icon({
              image: that.jkPng
            });
            break;
          case "led":
            myIcon = new AMap.Icon({
              image: that.ledPng
            });
            break;
          case "tcc":
            myIcon = new AMap.Icon({
              image: that.tccPng
            });
            break;
          case "zj":
            myIcon = new AMap.Icon({
              image: that.zjPng
            });
            break;
        }
        var marker = new AMap.Marker({
          icon: myIcon,
          position: [jsonData[i][0], jsonData[i][1]],
          // bubble:true,
          extData: {
            index: i,
            type: device[i].type
          },
          map: that.map
        });
        markers.push(marker);
        AMap.event.addListener(marker, "click", _onClick);
      }
      this.markers = markers;
      this.map.setCenter([device[0].location[0], device[0].location[1]]);
      /*if(this.deviceActive != 'vedio'){
                    this.map.setFitView(markers);
                }*/

      function _onClick(e) {
        var p = e.target;
        console.log(p);
        // alert(1)
        // that.markers.forEach(v => {
        //     v.setAnimation('AMAP_ANIMATION_NONE')
        // });
        that.map.setZoom(20);
        that.map.setCenter([p.getPosition().lng, p.getPosition().lat]);
        console.log(p.Qe);
        let selected = that.deviceList[p.Qe.extData["index"]];
        // p.setAnimation('AMAP_ANIMATION_BOUNCE')
        let title = that.typeName[selected.type];
        let info = {
          name: "A005号视频监控设备",
          xh: "高清枪机",
          zb: p.getPosition().lng + "," + p.getPosition().lat,
          id: "53af158-c356-4093-8148",
          add: "滨河街道滨河路与海滨路交界滨河路红灯处",
          status: "正常",
          weather: "天气情况"
        };
        var content = `<div class="detail">
                            <div class="title2">${title}</div>
                            <div class="info">
                                <div class="item">
                                    <div>名称</div>
                                    <div>${info.name}</div>
                                </div>
                                <div class="item">
                                    <div>型号</div>
                                    <div>${info.xh}</div>
                                </div>
                                <div class="item">
                                    <div>坐标</div>
                                    <div>${info.zb}</div>
                                </div>
                                <div class="item">
                                    <div>设备ID</div>
                                    <div>${info.id}</div>
                                </div>
                                <div class="item">
                                    <div>设备地址</div>
                                    <div>${info.add}</div>
                                </div>
                                <div class="item">
                                    <div>设备状态</div>
                                    <div>${info.status}</div>
                                </div>
                                <div class="item">
                                    <div>天气情况</div>
                                    <div>${info.weather}</div>
                                </div>
                             </div>
                             <button class="into">确认修改<button>
                       </div>`;
        // 创建 infoWindow 实例
        var infoWindow = new AMap.InfoWindow({
          isCustom: true, //使用自定义窗体
          content: content, //传入 dom 对象，或者 html 字符串
          closeWhenClickMap: true
        });
        infoWindow.open(that.map, [p.getPosition().lng, p.getPosition().lat]);
        that.modalShow = true;
        that.modalIndex = p.getExtData().index;
        that.modalType = p.getExtData().type;
        //如果是wifi设备 调用子组件获取连接数的方法
        if (that.modalType == "wifi" && that.$refs.wifiModel) {
          that.$refs.wifiModel.getWifiPoint(that.deviceNow[that.modalIndex].id);
        }
      }
    }
  }
};
</script>

<style lang="less" >
.mystyle {
  display: flex;
  flex-direction: column;
  flex: 1;
  .typeList {
    display: flex;
    align-items: center;
    color: #a2b3a7;
    font-size: 0.24rem;
    padding: 0 40px;
    flex-wrap: wrap;
    height: 52px;
    // background: url('../assets/img/topbg.png') no-repeat;
    background-size: 100% 100%;
    margin-bottom: 20px;
    background: #fff;
    > div {
      width: 8%;
      padding: 3px 0;
      cursor: pointer;
    }

    .active {
      color: #5f94ff;
      // background: url('../assets/img/bgtopicon.png') no-repeat;
      background-size: 100% 100%;
    }
  }
}

.detail {
  background: #fff;
  color: #fff;
  border-radius: 4px;
  width: 20vw;

  .title {
    color: #1f9a73;
    font-size: 0.2rem;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid rgba(225, 225, 225, 1);
  }

  .info {
    padding: 20px 10px;

    .item {
      border: 1px solid rgba(36, 200, 117, 1);
      font-size: 0.14rem;
      display: flex;
      border-bottom: 0;

      &:last-child {
        border-bottom: 1px solid rgba(36, 200, 117, 1);
      }

      > div {
        padding: 10px 15px;
        text-align: left;
      }

      > div:first-child {
        color: #b4b4b4;
        border-right: 1px solid rgba(36, 200, 117, 1);
        flex: 0 0 5em;
      }

      > div:last-child {
        color: #666666;
      }
    }
  }
}

#parkdata {
  position: relative;
  flex: 1;
  .device_list {
    margin-top: 20px;
    width: 360px;
    height: 100%;
    background: white;
    position: absolute;
    overflow: auto;
    right: 0;
    top: 0;
    padding: 15px;
    box-sizing: border-box;
    .list_title {
      height: 40px;
      line-height: 40px;
      border: 1px solid rgba(226, 232, 234, 1);
      text-align: center;
      font-size: 0.14rem;
      color: rgba(72, 86, 115, 1);
      font-weight: 400;
    }

    .list_item {
      margin: 0 auto;
      border: 1px solid rgba(226, 232, 234, 1);
      margin-top: 10px;

      &_title {
        display: flex;
        align-items: center;
        margin: 10px;

        &_type {
          color: #8778ff;
          display: inline-block;
          margin-right: 20px;
        }

        &_address {
          display: inline-block;
          margin-right: 20px;
        }

        img {
          position: absolute;
          right: 20px;
          width: 18px;
          height: 18px;
        }
      }

      .ip {
        margin: 10px;
      }
    }
  }
}
#parkdata {
  width: 100%;
  height: 100%;

  .mapBox2 {
    width: 100%;
    height: 100%;
  }

  .detail {
    background: #fff;
    color: #fff;
    border-radius: 4px;

    .into {
      line-height: 40px;
      background: rgba(29, 150, 111, 1);
      border-radius: 4px;
      font-size: 0.14rem;
      color: #fff;
      width: 96%;
      margin: 20px auto;
    }

    .title2 {
      color: #237ae5;
      font-size: 0.24rem;
      padding: 10px;
      text-align: center;
      border-bottom: 1px solid rgba(225, 225, 225, 1);
    }

    .info {
      .item {
        font-size: 0.14rem;
        display: flex;

        > div {
          padding: 10px 15px;
          text-align: left;
          color: #666666;
        }

        > div:first-child {
          flex: 0 0 5em;
        }
      }
    }
  }

  @media (max-width: 1800px) {
    .mapBox2 {
      height: 700px;
    }

    .board_map {
      position: relative;

      .device_list {
        margin-top: 20px;
        width: 360px;
        background: white;
        height: 650px;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
}
</style>