<template>
  <div class="content">
    <v-commonTitle title="酒店数据驾驶舱"></v-commonTitle>
    <div class="box_u">
      <div class="box_flex1" style="margin-right:0.4rem;">
        <div class="item">
          <div class="mapNumber">
            <div class="up">
              <span>辖区内注册登记酒店总数(个):</span>
              <span>时间:2018年11月3日 12:56</span>
            </div>
            <div class="down">
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
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
              <div class="per_left">
                <span> 同比:</span> - 0.2%<img
                  src="../assets/img/downsmall.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="box-head"><span class="dot"></span>酒店空置率</div>
          <v-chartPie2 :bindData="bindData" type="间房"></v-chartPie2>
        </div>
      </div>
      <div class="box_flex2">
        <div class="flex2_left">
          <div class="item">
            <div class="box">
              <div class="box-head picker_item">
                <span class="dot"></span>酒店房型占比
              </div>
              <v-chartPie2
                :bindData="bindData1"
                :colors="colorArr"
                type="间房"
              ></v-chartPie2>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="box-head"><span class="dot"></span>酒店类型占比</div>
              <v-chartPie2
                :bindData="bindData2"
                :colors="colorArr"
                type="间房"
              ></v-chartPie2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box_d">
      <div class="box_flex4" style="flex:2.5">
        <div class="item">
          <div class="box">
            <div class="box-head hasTab">
              <span class="dot"></span>
              <span>房型均价走势</span>
              <div class="tabs">
                <span
                  @click="sleType(index)"
                  :class="activeIndex == index ? 'active' : ''"
                  v-for="(item, index) in tabsArr"
                  :key="index"
                  >{{ item }}</span
                >
              </div>
            </div>
            <v-chartLines
              :bindData="bindData3"
              :showLine="showLine"
              :paramY="paramY"
              :position="position"
            ></v-chartLines>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartPie2 from "../components/element/chartPie2";
import chartLines from "../components/element/chartLines";

export default {
  name: "page1",
  data() {
    return {
      bindData: [
        {
          name: "有客",
          value: 75000,
          per: "75%",
        },
        {
          name: "空置",
          value: 25000,
          per: "25%",
        },
      ],
      colorArr: [
        "#FF6F5C",
        "#68DE7B",
        "#FC5396",
        "#BA85F4",
        "#d3d91d",
        "#97b552",
        "#95706d",
        "#dc69aa",
        "#07a2a4",
      ],
      bindData1: [
        {
          name: "大床房",
          value: 45000,
          per: "45%",
        },
        {
          name: "双人间",
          value: 25000,
          per: "25%",
        },
        {
          name: "三人间",
          value: 20000,
          per: "20%",
        },
        {
          name: "标间",
          value: 10000,
          per: "10%",
        },
      ],
      tabsArr: ["大床房", "双人间", "三人间", "标间"],
      activeIndex: 1,
      bindData2: [
        {
          name: "星级酒店",
          value: 45000,
          per: "45%",
        },
        {
          name: "主题酒店",
          value: 25000,
          per: "25%",
        },
        {
          name: "快捷酒店",
          value: 20000,
          per: "20%",
        },
        {
          name: "民宿宾馆",
          value: 10000,
          per: "10%",
        },
      ],
      bindData3: [
        [
          "1月",
          "",
          "2月",
          "",
          "3月",
          "",
          "4月",
          "",
          "5月",
          "",
          "6月",
          "",
          "7月",
          "",
          "8月",
          "",
          "9月",
          "",
          "10月",
          "",
          "11月",
          "",
          "12月",
        ],
        [
          {
            name: "武汉大酒店",
            value: [
              150,
              150,
              150,
              175,
              175,
              160,
              160,
              160,
              160,
              150,
              165,
              165,
              150,
              150,
              150,
              150,
              150,
              150,
              130,
              130,
              150,
              150,
              150,
              150,
            ],
          },
          {
            name: "黄石大酒店",
            value: [
              200,
              200,
              200,
              230,
              230,
              220,
              220,
              220,
              220,
              200,
              220,
              220,
              200,
              200,
              200,
              200,
              200,
              200,
              150,
              150,
              200,
              200,
              200,
              200,
            ],
          },
          {
            name: "襄阳大酒店",
            value: [
              221,
              221,
              221,
              230,
              230,
              200,
              200,
              200,
              200,
              221,
              165,
              165,
              221,
              221,
              221,
              221,
              221,
              221,
              170,
              170,
              221,
              221,
              221,
              221,
            ],
          },
          {
            name: "荆州大酒店",
            value: [
              160,
              160,
              160,
              185,
              185,
              160,
              160,
              160,
              160,
              160,
              175,
              175,
              160,
              160,
              160,
              160,
              160,
              160,
              140,
              140,
              160,
              160,
              160,
              160,
            ],
          },
          {
            name: "宜昌大酒店",
            value: [
              155,
              155,
              155,
              180,
              180,
              165,
              165,
              165,
              165,
              155,
              165,
              165,
              155,
              155,
              155,
              155,
              155,
              155,
              135,
              135,
              155,
              155,
              155,
              155,
            ],
          },
          {
            name: "十堰宾馆",
            value: [
              200,
              200,
              200,
              300,
              300,
              300,
              160,
              180,
              180,
              150,
              165,
              165,
              150,
              220,
              200,
              150,
              220,
              150,
              260,
              260,
              250,
              150,
              150,
              150,
            ],
          },
          {
            name: "孝感宾馆",
            value: [
              130,
              130,
              130,
              169,
              169,
              160,
              160,
              160,
              160,
              130,
              150,
              150,
              130,
              130,
              130,
              130,
              130,
              130,
              110,
              110,
              130,
              130,
              130,
              130,
            ],
          },
          {
            name: "荆门大酒店",
            value: [
              185,
              185,
              185,
              160,
              160,
              146,
              146,
              146,
              146,
              185,
              165,
              165,
              185,
              185,
              185,
              185,
              185,
              185,
              130,
              130,
              185,
              185,
              185,
              185,
            ],
          },
          {
            name: "鄂州宾馆",
            value: [
              142,
              142,
              142,
              169,
              169,
              160,
              160,
              160,
              160,
              142,
              150,
              150,
              142,
              142,
              142,
              142,
              142,
              142,
              110,
              110,
              142,
              142,
              142,
              142,
            ],
          },
          {
            name: "荆门大酒店",
            value: [
              185,
              185,
              185,
              160,
              160,
              146,
              146,
              146,
              146,
              185,
              165,
              165,
              185,
              185,
              185,
              185,
              185,
              185,
              130,
              130,
              185,
              185,
              185,
              185,
            ],
          },
        ],
      ],
      paramY: {
        unitY: "元",
        titleY: "价格   ----    基准线   均价：215元",
      },
      showLine: {
        hasLine: true,
        color: "#FFF",
        // 中位线的坐标
        y: 215,
        namePadding: [0, 0, 0, 140],
      },
      position: {
        gridBottom: "14%",
        bottom: "3%",
        left: "30%",
      },
    };
  },
  methods: {
    sleType(index) {
      this.activeIndex = index;
    },
  },
  components: {
    "v-chartPie2": chartPie2,
    "v-chartLines": chartLines,
  },
};
</script>

<style lang="less" scoped>
.box {
  flex: 1;
}
.box_u {
  height: 53%;
  margin-top: 0.4rem;
  display: flex;
  .box_flex1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    .item {
      flex: 2;
      margin-bottom: 0.4rem;
      display: flex;
      background-color: rgba(1, 104, 185, 0.2);
      box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
        0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
      .mapNumber {
        flex: 1;
        margin: 0.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .up {
          display: flex;
          justify-content: space-between;
          > span {
            height: 0.45rem;
            font-size: 0.6rem;
            font-weight: 400;
            color: #fff;
            line-height: 0.45rem;
          }
        }
        .down {
          display: flex;
          justify-content: space-between;
          margin: 0.4rem;
          margin-top: 1rem;
          align-items: center;
          > span {
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
        .per {
          display: flex;
          height: 0.56rem;
          font-size: 0.6rem;
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
    .box {
      flex: 2.8;
    }
  }
  .box_flex2 {
    flex: 2;
    display: flex;
    .flex2_left {
      flex: 1;
      display: flex;
      flex-direction: column;
      .item {
        flex: 1;
        margin-bottom: 0.4rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
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
    flex: 8 !important;
    width: 66%;
    .item {
      height: 100%;
      display: flex;
      .hasTab {
        display: flex;
        .tabs {
          margin-top: 1rem;
          margin-left: auto;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.45rem;
          .active {
            color: #fff;
          }
          span {
            margin: 0.5rem;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
