<template>
  <div class="content">
    <div class="content_left">
      <div class="left_up">
        <div class="up_left">
          <div class="left_item">
            <v-commonTitle title="湖北省全域旅游概况"></v-commonTitle>
            <div class="box" style="background: none;border: none">
              <v-indexMap v-if="shengShi" :map="mapShow" :bindData="shengShi" />
            </div>
          </div>
        </div>
      </div>
      <div class="down_left">
        <v-commonTitle title="旅游服务满意度概况"></v-commonTitle>
        <div class="down_detail">
          <div class="box">
            <div class="box-head"><span class="dot"></span>满意度统计</div>
            <div class="box-body">
              <div class="num_item">
                <div class="numBox">
                  <div class="numBox_l">旅游评价数量(条):</div>
                  <div class="numBox_r">时间:2018年11月3日 12:56</div>
                </div>
                <div class="itemBox">
                  <div v-for="(v, i) in numArr1" :key="i">{{ v }}</div>
                </div>
              </div>
              <div class="pie_item">
                <v-chartPie :bindData="bindData16" type="人"></v-chartPie>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content_right">
      <v-commonTitle title="客流数据概况"></v-commonTitle>
      <div class="right_item " style="flex:2.3">
        <div class="box">
          <div class="box-head"><span class="dot"></span>各市客流数据</div>
          <chart-bar :bindData="bindData1" :barWidth="20" />
        </div>
      </div>
      <v-commonTitle
        title="旅游团数据概况"
        style="margin-top:0.2rem"
      ></v-commonTitle>
      <div class="right_item down_detail">
        <div class="count_item">
          <div class="num_item">
            <div class="numBox">
              <div class="numBox_l">湖北省旅行社数量</div>
              <div class="numBox_r">时间:2018年11月3日 12:56</div>
            </div>
            <div class="itemBox">
              <div v-for="(v, i) in numArr1" :key="i">{{ v }}</div>
            </div>
          </div>
          <div class="num_item">
            <div class="numBox">
              <div class="numBox_l">湖北省旅行社正在进行</div>
              <div class="numBox_r">时间:2018年11月3日 12:56</div>
            </div>
            <div class="itemBox">
              <div v-for="(v, i) in numArr1" :key="i">{{ v }}</div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="box-head">
            <span class="dot"></span>湖北省各市旅行团比例
          </div>
          <v-chartPie :bindData="bindData2" type="个"></v-chartPie>
        </div>
      </div>

      <v-commonTitle
        title="承载量数据概况"
        style="margin-top:0.2rem"
      ></v-commonTitle>
      <div class="right_item2">
        <div class="item1">
          <div class="box">
            <div class="box-head hasTab">
              <span class="dot"></span><span>景区承载量趋势</span>
              <div class="tabs">
                <span
                  @click="sleType(index)"
                  v-for="(item, index) in tabsArr"
                  :key="index"
                  :class="activeIndex == index ? 'active' : ''"
                  >{{ item }}</span
                >
              </div>
            </div>
            <v-chartPage3Right></v-chartPage3Right>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import indexMap from "../components/element/indexMap";
import chartPie from "../components/element/chartPie";
import chartPage3Right from "../components/element/chartPage3Right";
import ChartBar from "../components/myEcharts/chartBar";

export default {
  name: "page1",
  data() {
    return {
      mapShow: "china",
      tabsArr: ["木兰天池", "三峡人家", "三峡大坝", "屈原故里", "柴埠溪"],
      shengShi: null, //省份来源数据,省内市来源数据
      numArr1: ["5", "2", "3", "4", "9", "2", "3"],
      activeIndex: 2,
      bindData1: [
        [
          "武汉市",
          "黄石市",
          "襄阳市",
          "荆州市",
          "宜昌市",
          "十堰市",
          "孝感市",
          "荆门市",
          "鄂州市",
          "黄冈市",
          "咸宁市",
          "随州市",
        ],
        [
          "2800",
          "2500",
          "2700",
          "1741",
          "2727",
          "1184",
          "1113",
          "1222",
          "3123",
          "1313",
          "1313",
          "1313",
        ],
      ],
      bindData2: [
        {
          name: "武汉市",
          value: 26,
          value2: 8620,
        },
        {
          name: "宜昌市",
          value: 26,
          value2: 9809,
        },
        {
          name: "黄冈市",
          value: 28,
          value2: 9809,
        },
        {
          name: "荆州市",
          value: 26,
          value2: 8620,
        },
        {
          name: "襄阳市",
          value: 26,
          value2: 8620,
        },
        {
          name: "十堰市",
          value: 26,
          value2: 8620,
        },
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
      bindData16: [
        {
          name: "五星好评",
          value: 26,
          value2: 8620,
        },
        {
          name: "好评",
          value: 26,
          value2: 9809,
        },
        {
          name: "中评",
          value: 28,
          value2: 9809,
        },
        {
          name: "差评",
          value: 26,
          value2: 8620,
        },
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
    sleType(index) {
      this.activeIndex = index;
    },
  },
  components: {
    "v-indexMap": indexMap,
    "v-chartPie": chartPie,
    "v-chartPage3Right": chartPage3Right,
    ChartBar,
  },
};
</script>

<style lang="less" scoped>
.content {
  flex-direction: row !important;
  .content_left {
    width: 54%;
    .left_up {
      height: 70%;
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
    .down_left {
      flex: 1;
      display: flex;
      height: 30%;
      display: flex;
      flex-direction: column;
    }
  }
  .down_detail {
    margin-top: 0.2rem;
    flex: 1;
    display: flex;
    .box {
      flex: 1;
      .box-body {
        display: flex;
        .num_item {
          width: 55%;
          .numBox {
            margin-top: 0.5rem;
            display: flex;
            justify-content: space-between;
            color: #fff;
            &_l {
              font-size: 0.6rem;
            }
            &_r {
              font-size: 0.45rem;
            }
          }
          .itemBox {
            display: flex;
            justify-content: space-between;
            margin: 0.4rem;
            margin-top: 1rem;
            align-items: center;
            > div {
              font-family: "lcd";
              color: #fff;
              padding: 0.5rem;
              text-align: center;
              // padding-right: 0.rem;
              background: rgba(24, 62, 95, 0.6);
              box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
                0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
              display: flex;
              align-items: center;
              font-size: 2.6rem;
            }
          }
        }
        .pie_item {
          flex: 1;
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
      .count_item {
        display: flex;
        flex-direction: column;
        width: 50%;
        .num_item {
          height: 50%;
          display: flex;
          flex-direction: column;
          &:last-child {
            margin-top: 0.4rem;
            flex: 1;
          }
          .numBox {
            margin-bottom: 0.4rem;
            display: flex;
            justify-content: space-between;
            color: #fff;
            &_l {
              font-size: 0.6rem;
            }
            &_r {
              font-size: 0.45rem;
              margin-right: 0.4rem;
            }
          }
          .itemBox {
            display: flex;
            justify-content: space-between;
            margin: 0.4rem 0.4rem 0.4rem 0;
            align-items: center;
            > div {
              font-family: "lcd";
              color: #fff;
              padding: 0.2rem 0.45rem;
              text-align: center;
              // padding-right: 0.rem;
              background: rgba(24, 62, 95, 0.6);
              box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
                0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
              display: flex;
              align-items: center;
              font-size: 1.8rem;
            }
          }
        }
      }
      .box {
        flex: 1;
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
      .hasTab {
        display: flex;
        .tabs {
          margin-left: auto;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.45rem;
          .active {
            color: #fff;
          }
          span {
            margin-left: 0.3rem;
            cursor: pointer;
          }
        }
      }
      // margin-top: 0.4rem;
      .item1 {
        // margin-top: 0.4rem;
        height: 100%;
      }
    }
  }
}
</style>
