<template>
  <div class="content">
    <div class="content_left">
      <div class="left_up">
        <div class="up_left">
          <div class="left_item">
            <div class="box" style="background: none;border: none">
              <v-indexMap v-if="shengShi" :map="mapShow" :bindData="shengShi" />
            </div>
          </div>
        </div>
      </div>
      <div class="left_down">
        <div class="down_left">
          <v-commonTitle title="客流数据"></v-commonTitle>
          <div class="down_detail">
            <div class="left_up">
              <div class="up">
                <div class="box">
                  <div class="box-head">
                    <span class="dot"></span>入馆游客统计
                  </div>
                  <div class="box-body">
                    <div class="item">
                      <div class="mapNumber">
                        <div class="up22">
                          <span>旅游评价数量:</span>
                        </div>
                        <chart-trend :bindData="bindData14" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="left_down">
              <div class="box">
                <div class="box-head">
                  <span class="dot"></span>场馆承载量趋势
                </div>
                <div class="box-body">
                  <v-chartPage3Right></v-chartPage3Right>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_right">
      <v-commonTitle title="车流数据"></v-commonTitle>
      <div class="right_item">
        <div class="box">
          <div class="box-head"><span class="dot"></span>停车场车辆统计</div>
          <chart-trend describe="车次" :bindData="bindData14" />
        </div>
      </div>
      <v-commonTitle title="环境监测数据"></v-commonTitle>
      <div class="right_item1">
        <div class="box">
          <div class="box-body" style="padding: 0.4rem">
            <div class="box_item">
              <div class="body_item">
                <div class="img">
                  <img src="../assets/img/home/温度计.png" alt="" />
                </div>
                当前温度25℃
              </div>
              <div class="body_item">
                <div class="img">
                  <img src="../assets/img/home/二氧化碳.png" alt="" />
                </div>
                当前二氧化碳***
              </div>
              <div class="body_item">
                <div class="img">
                  <img src="../assets/img/home/湿度.png" alt="" />
                </div>
                当前湿度30%——80%
              </div>
            </div>
            <div class="box_item">
              <div class="body_item">
                <div class="img">
                  <img src="../assets/img/home/甲醛.png" alt="" />
                </div>
                当前甲醛***
              </div>
              <div class="body_item">
                <div class="img">
                  <img src="../assets/img/home/pm2.5.png" alt="" />
                </div>
                当前PM2.5***
              </div>
              <div class="body_item">
                <div class="img">
                  <img src="../assets/img/home/pm10.png" alt="" />
                </div>
                当前PM10***
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-commonTitle title="安保数据"></v-commonTitle>
      <div class="right_item2">
        <div class="item1">
          <div class="item1_item">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>场馆安保人员统计
              </div>
              <div class="box-body">
                <v-chartPie
                  :bindData="bindData4"
                  :showPer="false"
                  type="人"
                ></v-chartPie>
              </div>
            </div>
          </div>
          <div class="item1_item" style="margin-left: 0.4rem">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>场馆安保设备统计
              </div>
              <div class="box-body">
                <v-chartPie
                  :bindData="bindData5"
                  :showPer="false"
                  type=""
                ></v-chartPie>
              </div>
            </div>
          </div>
        </div>

        <div class="item2">
          <div class="box">
            <div class="box-head"><span class="dot"></span>场馆游客统计</div>
            <div class="box-body">
              <v-chartLines :bindData="bindData15"></v-chartLines>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartTrend from "../components/myEcharts/chartTrend";

import indexMap from "../components/element/indexMap";
import mapRoad from "../components/map/mapRoad";
import chartPie from "../components/element/chartPie";

import consumerTotal from "../components/element/consumerTotal";
import chartPage3Right from "../components/element/chartPage3Right";
import chartLines from "../components/element/chartLines";

export default {
  name: "page1",
  data() {
    return {
      rate: 4.7,
      mapShow: "china",
      shengShi: null, //省份来源数据,省内市来源数据
      bindData: [
        {
          name: "国内游客",
          value: 8620,
        },
        {
          name: "国际游客",
          value: 9809,
        },
      ],
      bindData1: [
        {
          name: "自由行",
          value: 8620,
        },
        {
          name: "自驾游",
          value: 9809,
        },
        {
          name: "团队游",
          value: 9809,
        },
      ],
      bindData2: [
        [
          "渝中区",
          "万州区",
          "涪陵区",
          "大渡口区",
          "江北区",
          "沙坪坝区",
          "九龙坡区",
          "南岸区",
          "北碚区",
          "綦江区",
          "大足区",
          "渝北区",
        ],
        [
          23480,
          22058,
          23891,
          18096,
          15580,
          16884,
          12568,
          15496,
          19871,
          13508,
          14058,
          12998,
        ],
      ],
      bindData3: [
        [
          "磁器口古镇",
          "乐山森林公园",
          "重庆抗战名居",
          "三峡广场",
          "平顶山公园",
        ],
        [23480, 22058, 23891, 18096, 15580],
      ],
      bindData4: [
        {
          name: "全部安保人员",
          value: 50,
          value2: 50,
        },
        {
          name: "在职安保人员",
          value: 30,
          value2: 30,
        },
      ],
      bindData5: [
        {
          name: "在线安保设备",
          value: 50,
          value2: 50,
        },
        {
          name: "离线安保设备",
          value: 30,
          value2: 30,
        },
        {
          name: "故障安保设备",
          value: 20,
          value2: 20,
        },
      ],
      bindData6: [
        {
          name: "星级酒店",
          value: 8620,
        },
        {
          name: "民宿旅馆",
          value: 9809,
        },
        {
          name: "快捷酒店",
          value: 9809,
        },
      ],
      bindData7: [
        {
          name: "大床房",
          value: 8620,
        },
        {
          name: "双人间",
          value: 9809,
        },
        {
          name: "三人间",
          value: 9809,
        },
        {
          name: "标间",
          value: 8620,
        },
      ],
      bindData8: [
        {
          name: "有客",
          value: 8620,
        },
        {
          name: "空置",
          value: 9809,
        },
      ],
      bindData9: [
        {
          name: "五星好评",
          value: 8620,
          value2: 8620,
        },
        {
          name: "好评",
          value: 9809,
          value2: 9809,
        },
        {
          name: "中评",
          value: 9809,
          value2: 9809,
        },
        {
          name: "差评",
          value: 8620,
          value2: 8620,
        },
      ],
      bindData10: [
        {
          name: "渝中区",
          value: "242542.00",
          width: "75%",
        },
        {
          name: "万州区",
          value: "242542.00",
          width: "70%",
        },
        {
          name: "涪陵区",
          value: "242542.00",
          width: "69%",
        },
        {
          name: "大渡口区",
          value: "242542.00",
          width: "68%",
        },
        {
          name: "江北区",
          value: "242542.00",
          width: "65%",
        },
        {
          name: "沙坪坝区",
          value: "242542.00",
          width: "60%",
        },
        {
          name: "九龙坡区",
          value: "242542.00",
          width: "57%",
        },
        {
          name: "南岸区",
          value: "242542.00",
          width: "53%",
        },
      ],
      bindData11: [
        { name: "南川金佛山", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "南川金佛山", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "南川金佛山", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "南川金佛山", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "南川金佛山", n1: "10.0", n2: "8.5", n3: "9.5" },
      ],
      bindData12: [
        { name: "重庆火锅", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "重庆火锅", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "重庆火锅", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "重庆火锅", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "重庆火锅", n1: "10.0", n2: "8.5", n3: "9.5" },
      ],
      bindData13: [
        { name: "重庆大酒店", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "重庆大酒店", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "重庆大酒店", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "重庆大酒店", n1: "10.0", n2: "8.5", n3: "9.5" },
        { name: "重庆大酒店", n1: "10.0", n2: "8.5", n3: "9.5" },
      ],
      bindData14: [
        ["27", "28", "1", "2", "3", "4", "5", "6", "7", "8"],
        [100, 120, 110, 130, 250, 135, 160, 230, 400, 263, 378],
      ],
      bindData15: [
        [
          "8:00",
          "9:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
        ],
        [
          {
            name: "在馆人数",
            value: [
              100,
              90,
              200,
              1950,
              2333,
              2451,
              3333,
              4513,
              2498,
              1065,
              3324,
              1354,
            ],
          },
          {
            name: "排队人数",
            value: [
              1100,
              1200,
              2700,
              3950,
              4567,
              2451,
              3755,
              5523,
              3412,
              4444,
              7534,
              1247,
            ],
          },
        ],
      ],
    };
  },
  created() {
    this.getShengNW();
  },
  methods: {
    getShengNW() {
      http.get("./data/source.json").then((res) => {
        //今天没有就取昨天的数据
        let data = res.data;
        let sheng = [];
        let shi = [];
        let sourceDic = {};
        let shengNW = [];
        for (let i = 0; i < data.length; i++) {
          let v = data[i];
          let target = "宜昌";
          if (v.ss == 0) {
            sheng.push([
              { name: v.name.trim(), value: parseInt(v.rs) },
              { name: target },
            ]);
          } else if (v.ss == 1) {
            shi.push([
              { name: v.name, value: parseInt(v.rs) },
              { name: target },
            ]);
          } else if (v.ss == 2) {
            shengNW.push({ name: v.name, value: v.rs });
          }
          sourceDic[v.name] = v.rs;
        }
        this.shengShi = [sheng, shi, sourceDic];
      });
    },
  },
  components: {
    "v-indexMap": indexMap,
    "v-mapRoad": mapRoad,
    "v-chartPie": chartPie,

    ChartTrend,
    "v-chartPage3Right": chartPage3Right,
    "v-chartLines": chartLines,
  },
};
</script>

<style lang="less" scoped>
.content {
  flex-direction: row !important;
  .content_left {
    width: 60%;
    .left_up {
      height: 65%;
      display: flex;
      .up_left {
        width: 100%;
        display: flex;
        flex-direction: column;
        .left_item {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
      }
    }
    .left_down {
      height: 35%;
      display: flex;
      .down_left {
        width: 100%;
        display: flex;
        flex-direction: column;
        .down_detail {
          margin-top: 0.2rem;
          flex: 1;
          display: flex;
          .left_up {
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .up {
              flex: 1;
              display: flex;
              flex-direction: column;
              .box .box-body {
                display: flex;
                .item {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  .t {
                    height: 0.45rem;
                    font-size: 0.32rem;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 1);
                    line-height: 0.45rem;
                  }
                  .e {
                    flex: 1;
                  }
                  .mapNumber {
                    flex: 1;
                    margin: 0.4rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    font-family: lcd;
                    .up22 {
                      display: flex;
                      justify-content: space-between;
                      > span {
                        height: 0.45rem;
                        font-size: 0.32rem;
                        font-weight: 400;
                        color: rgba(255, 255, 255, 1);
                        line-height: 0.45rem;
                      }
                    }
                    .down {
                      display: flex;
                      justify-content: space-between;
                      > span {
                        display: inline-block;
                        font-size: 1.05rem;
                        font-weight: 400;
                        color: rgba(255, 255, 255, 1);
                        background: rgba(24, 62, 95, 0.6);
                        box-shadow: 0rem 0.01rem 0.05rem 0rem
                            rgba(1, 104, 185, 1),
                          0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
                        margin: 0 0 0 0.2rem;
                      }
                    }
                  }
                }
              }
            }
          }
          .left_down {
            flex: 1;
            height: 100%;
            margin-left: 0.4rem;
            display: flex;
            flex-direction: column;
            display: flex;
            .items {
              flex: 1;
              .type {
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  .content_right {
    flex: 1;
    margin-left: 0.4rem;
    display: flex;
    flex-direction: column;
    .right_item {
      flex: 2;
      .box {
        .box-body {
          display: flex;
          flex-direction: column;
          .box_item {
            display: flex;
            height: 50%;
            .body_item {
              width: 33.33%;
              height: 100%;
              flex: 1;
              border: 1px solid #025493;
            }
          }
        }
      }
    }
    .right_item1 {
      flex: 2;
      // margin-top: 0.2rem;
      .box {
        .box-body {
          display: flex;
          flex-direction: column;
          .box_item {
            display: flex;
            height: 50%;
            margin-bottom: 10px;
            .body_item {
              margin-left: 10px;
              width: 33.33%;
              height: 100%;
              flex: 2;
              background-color: rgba(1, 104, 185, 0.2);
              border: 1px solid #034c84;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              font-size: 14px;
              color: rgba(255, 255, 255, 1);
              .img {
                height: 1.5rem;
                margin-bottom: 5px;
                img {
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }

    .right_item2 {
      flex: 3;
      // margin-top: 0.4rem;
      display: flex;
      flex-direction: column;
      .item1 {
        height: 40%;
        display: flex;
        .item1_item {
          flex: 1;
        }
      }
      .item2 {
        margin-top: 0.4rem;
        height: 60%;
      }
    }
  }
}
</style>
