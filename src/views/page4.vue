<template>
  <div class="content">
    <v-commonTitle title="承载量数据驾驶舱"></v-commonTitle>
    <div class="body">
      <div class="flex_left">
        <div class="item up">
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
        <div class="item down">
          <div class="box down_item">
            <div class="box-head">
              <span class="dot"></span>出境旅游停留时长
            </div>
            <chart-bar
              :styleColor="barColor"
              :paramY="paramY"
              barWidth="18"
              :bindData="bindData"
              :showLine="showLine"
            />
          </div>
          <div class="box down_item">
            <div class="box-head"><span class="dot"></span>出境游国家占比</div>
            <v-chartPieRadius0
              :bindData="bindData1"
              type="人"
            ></v-chartPieRadius0>
          </div>
        </div>
      </div>
      <div class="flex_right">
        <div class="box right_item">
          <div class="box-head"><span class="dot"></span>游客分布热力图</div>
          <v-mapHeat></v-mapHeat>
        </div>
        <div class="box right_item">
          <div class="box-head"><span class="dot"></span>景区监控分布图</div>
          <v-mapJk :bindData="jk"></v-mapJk>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartPage3Right from "../components/element/chartPage3Right";
import chartPieRadius0 from "../components/element/chartPieRadius0";
import mapHeat from "../components/map/mapHeat";
import mapJk from "../components/map/mapJk";
import ChartBar from "../components/myEcharts/chartBar";

export default {
  name: "page1",
  data() {
    return {
      activeIndex: 3,
      tabsArr: ["木兰天池", "三峡人家", "三峡大坝", "屈原故里", "柴埠溪"],
      paramY: {
        unit: "小时",
        max: "20",
      },
      showLine: {
        hasLine: true,
        color: "red",
        y: 72,
      },
      bindData: [
        [
          "美国",
          "英国",
          "日本",
          "澳洲",
          "德国",
          "俄罗斯",
          "韩国",
          "法国",
          "意大利",
          "加拿大",
          "其他国家",
        ],
        ["145", "133", "121", "108", "99", "88", "75", "69", "70", "59", "50"],
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
          name: "澳洲",
          value: 5890,
          value2: 5890,
        },
        {
          name: "俄罗斯",
          value: 6880,
          value2: 6880,
        },
        {
          name: "韩国",
          value: 7868,
          value2: 7868,
        },
        {
          name: "法国",
          value: 5890,
          value2: 5890,
        },
        {
          name: "意大利",
          value: 6880,
          value2: 6880,
        },
        {
          name: "加拿大",
          value: 7868,
          value2: 7868,
        },
        {
          name: "其他国家",
          value: 5890,
          value2: 5890,
        },
      ],
      barColor: [
        ["rgba(255,88,88,1)", "rgba(255,88,88,0.3)"],
        ["rgba(255,224,88,1)", "rgba(255,224,88,0.3)"],
        ["rgba(225,88,255,1)", "rgba(225,88,255,0.3)"],
        ["rgba(88,255,255,1)", "rgba(88,255,255,0.3)"],
        ["rgba(119,255,88,1)", "rgba(119,255,88,0.3)"],
        ["rgba(88,112,255,1)", "rgba(88,112,255,0.3)"],
        ["rgba(255,159,88,1)", "rgba(255,159,88,0.3)"],
        ["rgba(88,187,255,1)", "rgba(88,187,255,0.3)"],
        ["rgba(220,234,200,1)", "rgba(220,234,200,1)"],
        ["rgba(245,195,245,1)", "rgba(245,195,245,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
        ["rgba(183,221,244,1)", "rgba(183,221,244,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
        ["rgba(46,217,253,1)", "rgba(46,217,253,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
        ["rgba(46,217,253,1)", "rgba(46,217,253,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
        ["rgba(46,217,253,1)", "rgba(46,217,253,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
        ["rgba(46,217,253,1)", "rgba(46,217,253,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
        ["rgba(46,217,253,1)", "rgba(46,217,253,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
      ],
      jk: null,
    };
  },
  created() {
    this.getJkData();
  },
  methods: {
    async getJkData() {
      const data = await http.get("./data/dataVisitor.json");
      this.jk = data;
    },
    sleType(index) {
      this.activeIndex = index;
    },
  },
  components: {
    "v-chartPage3Right": chartPage3Right,
    ChartBar,
    "v-chartPieRadius0": chartPieRadius0,
    "v-mapHeat": mapHeat,
    "v-mapJk": mapJk,
  },
};
</script>

<style lang="less" scoped>
.body {
  margin-top: 0.2rem;
  flex: 1;
  display: flex;
  .flex_left {
    margin-right: 0.4rem;
    flex: 5;
    display: flex;
    flex-direction: column;
    .up {
      height: 50%;
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
    }
    .down {
      display: flex;
      margin-top: 0.4rem;
      .down_item {
        width: 50%;
        flex: 0.7;
        &:first-child {
          margin-right: 0.4rem;
          flex: 1;
        }
      }
    }
    .item {
      flex: 1;
    }
  }
  .flex_right {
    flex: 3;
    display: flex;
    flex-direction: column;
    .right_item {
      &:first-child {
        height: 40%;
        margin-bottom: 0.4rem;
      }
      &:last-child {
        flex: 1;
      }
    }
  }
}
</style>
