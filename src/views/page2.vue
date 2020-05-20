<template>
  <div class="content">
    <v-commonTitle title="客流数据驾驶舱"></v-commonTitle>
    <div class="box_u">
      <div
        class="box_flex1"
        style="margin: 0 0.4rem;background-color: rgba(1, 104, 185, 0.2);"
      >
        <div class="item">
          <div class="mapNumber">
            <div class="up">
              <span>当前实时游客总量:</span>
            </div>
            <div class="down">
              <span>-</span>
              <span>-</span>
              <span>-</span>
              <span>2</span>
              <span>3</span>
              <span>5</span>
              <span>4</span>
              <span>2</span>
              <span>9</span>
            </div>
            <div class="per">
              <div class="per_left">
                <span> 同比:</span> -0.2%<img
                  src="../assets/img/downsmall.png"
                />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>本月游客总量:</span>
            </div>
            <div class="down">
              <span>-</span>
              <span>-</span>
              <span>4</span>
              <span>9</span>
              <span>5</span>
              <span>5</span>
              <span>3</span>
              <span>4</span>
              <span>2</span>
            </div>
            <div class="per">
              <div class="per_left">
                <span> 同比:</span> +125%<img
                  src="../assets/img/downsmall.png"
                />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>本年游客总量:</span>
            </div>
            <div class="down">
              <span>-</span>
              <span>5</span>
              <span>4</span>
              <span>9</span>
              <span>5</span>
              <span>5</span>
              <span>3</span>
              <span>4</span>
              <span>2</span>
            </div>
            <div class="per">
              <div class="per_left">
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box_flex2">
        <div class="flex2_left">
          <div class="up">
            <div class="up_left">
              <div class="box">
                <div class="box-head">
                  <span class="dot"></span>本市市民和外地游客占比
                </div>
                <div class="box-body">
                  <v-chartPie :bindData="bindData6"></v-chartPie>
                </div>
              </div>
            </div>
            <div class="up_right">
              <div class="box">
                <div class="box-head"><span class="dot"></span>团散比</div>
                <div class="box-body">
                  <v-chartPie :bindData="bindData7"></v-chartPie>
                </div>
              </div>
            </div>
          </div>
          <div class="down">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>外地游客来源地数据
                <div class="time" style="width:70%; float:right">
                  <div class="time">
                    <span>今日</span>
                    <span>本月</span>
                    <span>本年</span>
                  </div>
                  <div class="picker" style="float:right">
                    <div>自定义 :</div>
                    <el-date-picker
                      v-model="value1"
                      type="daterange"
                      style="width:70%;"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                    >
                    </el-date-picker>
                  </div>
                </div>
              </div>
              <chart-bar :styleColor="chartBarColor" :barWidth="20" />
            </div>
          </div>
        </div>
        <div class="flex2_right">
          <div class="box">
            <div class="box-head">
              <span class="dot"></span>外地游客来源地分析
            </div>
            <v-chartPieRadius0Column
              :bindData="bindData8"
              type="人"
            ></v-chartPieRadius0Column>
          </div>
        </div>
      </div>
      <div class="box_flex3" style="margin-left: 0.4rem">
        <div class="box">
          <div class="box-head">
            <span class="dot"></span> 场馆监控分布图
            <div class="floor">
              <div class="img">
                <img src="../assets/img/安保数据/切换.png" alt="" />
              </div>
              <div class="text">当前楼层: 1F</div>
            </div>
          </div>
          <div class="box-body" style="padding: 0.4rem">
            <!-- <v-mapJk :bindData="jkData"></v-mapJk> -->
            <bg-jk></bg-jk>
          </div>
        </div>
      </div>
    </div>
    <div class="box_d">
      <div class="box_flex4" style="flex:2.5;margin: 0 0.4rem">
        <div class="item">
          <div class="box">
            <div class="box-head"><span class="dot"></span>游客图像数据</div>
            <div class="box-body">
              <div class="item_detail">
                <v-indexMap
                  v-if="shengShi"
                  :map="mapShow"
                  :bindData="shengShi"
                  :showNum="false"
                  title="归属地"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box_flex5">
        <div class="item">
          <div class="box">
            <div class="box-body">
              <div class="body_left">
                <div class="left_one">
                  <div class="item_title">游客年龄</div>

                  <chart-pie :bindData="bindData9" type="人"></chart-pie>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="down">
          <div class="box">
            <div class="box-body">
              <div class="down_item">
                <div class="item_title">是否有车</div>
                <div class="item_detail">
                  <v-chartCar :bindData="bindData5"></v-chartCar>
                </div>
              </div>
              <div class="down_item" style="margin-left: 0.4rem">
                <div class="item_title">人员性别</div>
                <div class="item_detail">
                  <v-chartGender></v-chartGender>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box_flex6" style="margin-left: 0.4rem">
        <div class="down" style="margin-top: 0">
          <div class="down_item">
            <div class="box">
              <div class="box-head"><span class="dot"></span>入馆游客统计</div>
              <div class="box-body">
                <v-chartArea yTitle="人次"></v-chartArea>
              </div>
            </div>
          </div>
          <div class="down_item">
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
</template>

<script>
import myChartBar from "../components/myEcharts/chartBar";
import chartArea from "../components/element/chartArea";

import chartPie from "../components/element/chartPie";
import chartPie2Radius from "../components/element/chartPie2Radius";
import mapJk from "../components/map/mapJk";
import chartGender from "../components/element/chartGender";
import chartCar from "../components/element/chartCar";
import chartPieRadius0Column from "../components/element/chartPieRadius0Column";
import indexMap from "../components/element/indexMap";
import ChartPie from "../components/myEcharts/chartPieH";
import chartPage3Right from "../components/element/chartPage3Right";
import bgJk from "../components/indoor/bg_jk";
export default {
  name: "page1",
  data() {
    return {
      shengShi: null, //省份来源数据,省内市来源数
      value: "1",
      value1: "1",
      value2: "1",
      value3: "1",
      value4: "1",
      value5: "1",
      value6: "1",
      value7: "1",
      value8: "1",
      deviceActive: 0,
      deviceActive1: 0,
      typelist: ["大足石", "南川金佛山"],
      cars: [
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
      country: [
        [
          "美国",
          "英国",
          "日本",
          "韩国",
          "加拿大",
          "德国",
          "澳洲",
          "俄罗斯",
          "法国",
          "意大利",
          "巴西",
          "其他",
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
      from: [
        [
          "湖北",
          "湖南",
          "河南",
          "四川",
          "重庆",
          "河北",
          "浙江",
          "江西",
          "广东",
          "广西",
          "云南",
          "福建",
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
      like: [
        [
          "聊天软件",
          "购物",
          "影音",
          "生活实用",
          "新闻阅读",
          "效率办公",
          "金融理财",
          "图像",
          "丽人母婴",
          "生活服务",
          "汽车",
          "教育",
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
      ages: [
        ["0-18岁", "18-30岁", "30-40岁", "40-50岁", "50-60岁", ">=60岁"],
        [23480, 22058, 23891, 18096, 15580, 16884],
      ],
      bindData: [
        [
          {
            name: "国际游客",
            value: 8620,
            value2: 8620,
          },
          {
            name: "国内游客",
            value: 9809,
            value2: 9809,
          },
        ],
        [
          {
            name: "公路",
            value: 8620,
            value2: 8620,
          },
          {
            name: "铁路",
            value: 9809,
            value2: 9809,
          },
          {
            name: "水路",
            value: 7868,
            value2: 7868,
          },
          {
            name: "航空",
            value: 5890,
            value2: 5890,
          },
        ],
      ],
      bindData1: [
        {
          name: "美国",
          value: 8620,
          value2: 8620,
        },
        {
          name: "英国",
          value: 9809,
          value2: 9809,
        },
        {
          name: "日本",
          value: 7868,
          value2: 7868,
        },
        {
          name: "韩国",
          value: 5890,
          value2: 5890,
        },
        {
          name: "其他",
          value: 6880,
          value2: 6880,
        },
      ],

      bindData2: [
        {
          name: "渝中旅行社",
          value: 8620,
          value2: 8620,
        },
        {
          name: "万州旅行社",
          value: 9809,
          value2: 9809,
        },
        {
          name: "涪陵旅行社",
          value: 7868,
          value2: 7868,
        },
        {
          name: "大渡口旅行社",
          value: 5890,
          value2: 5890,
        },
        {
          name: "江北旅行社",
          value: 6880,
          value2: 6880,
        },
        {
          name: "其他",
          value: 9809,
          value2: 9809,
        },
      ],

      bindData3: [
        {
          name: "中国移动",
          value: 8620,
          value2: 8620,
        },
        {
          name: "中国联通",
          value: 9809,
          value2: 9809,
        },
        {
          name: "中国电信",
          value: 7868,
          value2: 7868,
        },
      ],
      bindData4: [
        {
          name: "OPPO",
          value: 8620,
          value2: 8620,
        },
        {
          name: "华为",
          value: 9809,
          value2: 9809,
        },
        {
          name: "vivo",
          value: 7868,
          value2: 7868,
        },
        {
          name: "苹果",
          value: 8620,
          value2: 8620,
        },
        {
          name: "小米",
          value: 9809,
          value2: 9809,
        },
        {
          name: "魅族",
          value: 7868,
          value2: 7868,
        },
      ],
      bindData5: [
        { name: "无车", value: 435000, percent: 65.5 },
        { name: "有车", value: 665000, percent: 43.5 },
      ],
      bindData6: [
        {
          name: "本地市民",
          value: 35,
        },
        {
          name: "外地游客",
          value: 65,
        },
      ],
      bindData7: [
        {
          name: "团队游客",
          value: 65,
        },
        {
          name: "散客",
          value: 35,
        },
      ],
      bindData8: [
        {
          name: "湖北",
          value: 18,
          value2: 1800,
        },
        {
          name: "湖南",
          value: 17,
          value2: 1700,
        },
        {
          name: "江苏",
          value: 16,
          value2: 1600,
        },
        {
          name: "福建",
          value: 15,
          value2: 1500,
        },
        {
          name: "广州",
          value: 12,
          value2: 1200,
        },
        {
          name: "四川",
          value: 8,
          value2: 800,
        },
        {
          name: "河南",
          value: 8,
          value2: 800,
        },
        {
          name: "北京",
          value: 2,
          value2: 200,
        },
        {
          name: "重庆",
          value: 1,
          value2: 100,
        },
        {
          name: "国内其他",
          value: 1,
          value2: 100,
        },
        {
          name: "国外",
          value: 2,
          value2: 200,
        },
      ],
      bindData9: [
        {
          name: "0-18岁",
          value: 24,
          value2: 1800,
        },
        {
          name: "18-30岁",
          value: 22,
          value2: 1700,
        },
        {
          name: "30-40岁",
          value: 18,
          value2: 1800,
        },
        {
          name: "40-50岁",
          value: 16,
          value2: 1600,
        },
        {
          name: "50-60岁",
          value: 14,
          value2: 1200,
        },
        {
          name: "≥60岁",
          value: 6,
          value2: 800,
        },
      ],
      chartBarColor: [
        ["#51DE83", "#9FDE68"],
        ["#51DE83", "#9FDE68"],
        ["#51DE83", "#9FDE68"],
        ["#51DE83", "#9FDE68"],
        ["#51DE83", "#9FDE68"],
        ["#51DE83", "#9FDE68"],
        ["#51DE83", "#9FDE68"],
        ["#51DE83", "#9FDE68"],
      ],
      jkData: null,
    };
  },
  created() {
    this.getShengNW();
    this.getJkData();
  },
  methods: {
    selType(item, index) {
      this.deviceActive = index;
    },
    selType1(item, index) {
      this.deviceActive1 = index;
    },
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
          let target = "江永";
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
    async getJkData() {
      const data = await http.get("./data/jkData.json");
      this.jkData = data;
    },
  },
  components: {
    "v-chartArea": chartArea,
    chartBar: myChartBar,
    "v-chartPie2Radius": chartPie2Radius,
    "v-chartPie": chartPie,
    "v-mapJk": mapJk,
    "v-indexMap": indexMap,
    "v-chartGender": chartGender,
    "v-chartCar": chartCar,
    "v-chartPage3Right": chartPage3Right,
    "v-chartPieRadius0Column": chartPieRadius0Column,
    ChartPie,
    bgJk,
  },
};
</script>

<style lang="less" scoped>
.box_u {
  flex: 1;
  margin-top: 0.4rem;
  display: flex;
  .box_flex1 {
    flex: 2;
    display: flex;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      .mapNumber {
        flex: 1;
        margin: 0.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: lcd;
        .up {
          display: flex;
          justify-content: space-between;
          > span {
            height: 0.45rem;
            font-size: 0.32rem;
            font-weight: 400;
            color: rgba(46, 217, 253, 1);
            line-height: 0.45rem;
          }
        }
        .down {
          height: 1.05rem;
          line-height: 1.05rem;
          display: flex;
          justify-content: space-between;
          > span {
            display: inline-block;
            font-size: 1.2rem;
            font-weight: 400;
            flex: 1;
            color: rgba(255, 255, 255, 1);
            background: rgba(24, 62, 95, 0.6);
            box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
              0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
            margin: 0 0.4rem 0 0;
            height: 1.6rem;
            line-height: 1.6rem;
            width: 0.8rem;
            text-align: center;
          }
        }
        .per {
          display: flex;
          height: 0.56rem;
          font-size: 0.4rem;
          font-weight: 400;
          color: rgba(230, 111, 146, 1);
          line-height: 0.56rem;
          justify-content: space-between;
          margin-top: 0.4rem;
          .per_left {
            display: flex;
            align-items: center;
            color: rgba(71, 181, 108, 1);
            .upNum {
              color: rgba(230, 111, 146, 1);
            }
            > span:first-child {
              color: #fff;
              margin-right: 0.6rem;
            }
            img {
              width: 0.3rem;
              height: 0.3rem;
              margin-left: 0.4rem;
            }
          }
        }
      }
    }
  }
  .box_flex2 {
    flex: 4;
    display: flex;
    .flex2_left {
      width: 66%;
      margin-right: 0.4rem;
      display: flex;
      flex-direction: column;
      .up {
        height: 44%;
        display: flex;
        .up_left {
          flex: 1;
          margin-right: 0.4rem;
        }
        .up_right {
          flex: 1;
        }
      }
      .down {
        // height: 55%;
        width: 100%;
        flex: 1;
        margin-top: 0.4rem;
        display: flex;
        .box {
          .box-head {
            .time {
              display: flex;
              span {
                cursor: pointer;
                line-height: 0.6rem;
                height: 0.6rem;
                width: 1.2rem;
                border: 1px solid #29c7ec;
                color: #fff;
                text-align: center;
                font-size: 0.4rem;
                margin-right: 0.4rem;
                &:first-child {
                  background-color: #23add1;
                }
              }
              .picker {
                display: flex;
                align-items: center;
                /deep/.el-range-editor.el-input__inner {
                  padding: 2px 10px;
                }
                div {
                  margin-right: 0.2rem;
                }
              }
            }
          }

          height: 100%;
          flex: 1;
        }
      }
    }
    .flex2_right {
      width: 34%;
    }
  }
  .box_flex3 {
    flex: 3;
    display: flex;
    flex-direction: column;
    .box {
      .box-head {
        margin-top: 0.2rem;
        .floor {
          float: right;
          width: 21%;
          .img {
            width: 0.7rem;
            cursor: pointer;
            float: left;
            margin-right: 0.5rem;
            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
.box_d {
  flex: 1;
  display: flex;
  margin-top: 0.4rem;
  .box_flex4 {
    flex: 3 !important;
    width: 66%;
    .item {
      height: 100%;
      .box-body {
        flex: 1;
        background: rgba(3, 65, 109, 1);
        border: 0.01rem solid rgba(255, 255, 255, 0.2);
        display: flex;
        flex-direction: column;
        .item_title {
          margin-left: 0.2rem;
          height: 0.56rem;
          font-size: 0.4rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 0.56rem;
        }
        .item_detail {
          flex: 1;
        }
      }
    }
  }
  .box_flex5 {
    flex: 3;
    display: flex;
    flex-direction: column;
    .item {
      flex: 1;
      width: 100%;
      height: 50%;
      display: flex;
      margin-bottom: 0.4rem;
      .box {
        width: 100%;
        .box-body {
          display: flex;
          width: 100%;
          .body_left {
            width: 100%;
            display: flex;
            .left_one {
              margin-top: 0.5rem;
              width: 100%;
              background: rgba(3, 65, 109, 1);
              border: 0.01rem solid rgba(255, 255, 255, 0.2);
              display: flex;
              flex-direction: column;
              .item_title {
                margin-top: 0.2rem;
                width: 50%;
                margin-left: 0.2rem;
                height: 0.56rem;
                font-size: 0.4rem;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 0.56rem;
              }
              .item_detail {
                flex: 1;
              }
            }
          }
        }
      }
    }
    .down {
      height: 50%;
      .box {
        height: 100%;
        .box-body {
          display: flex;
          .down_item {
            flex: 1;
            background: rgba(3, 65, 109, 1);
            border: 0.01rem solid rgba(255, 255, 255, 0.2);
            display: flex;
            flex-direction: column;
            .item_title {
              margin-top: 0.2rem;
              margin-left: 0.2rem;
              height: 0.56rem;
              font-size: 0.4rem;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 0.56rem;
            }
            .item_detail {
              flex: 1;
              padding: 0 1rem;
            }
          }
        }
      }
    }
  }
  .box_flex6 {
    flex: 3;
    display: flex;
    flex-direction: column;
    .down {
      height: 100%;
      display: flex;
      flex-direction: column;
      flex: 1;
      .down_item {
        &:first-child {
          margin-bottom: 0.2rem;
        }
        flex: 1;
        height: 50%;
        background: rgba(3, 65, 109, 1);
        border: 0.01rem solid rgba(255, 255, 255, 0.2);
        display: flex;
        flex-direction: column;
        .item_title {
          margin-top: 0.2rem;
          margin-left: 0.2rem;
          height: 0.56rem;
          font-size: 0.4rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 0.56rem;
        }
        .item_detail {
          flex: 1;
          padding: 0 1rem;
        }
      }
    }
  }
}
</style>
