<template>
  <div class="content">
    <v-commonTitle title="景区数据驾驶舱"></v-commonTitle>
    <div class="body">
      <div class="flex_left">
        <div class="item up">
          <div class="box up_item">
            <div class="box-head">
              <span class="dot"></span>景区票务均价走势
            </div>
            <v-chartLines
              :bindData="bindData"
              :showLine="showLine"
              :paramY="paramY"
              :position="position"
            ></v-chartLines>
          </div>
          <div class="box up_item">
            <div class="box-head">
              <span class="dot"></span>景区自由行、自驾游、团队游占比
            </div>
            <chart-pie :bindData="bindData1" :showRatio="false"></chart-pie>
          </div>
        </div>
        <div class="item down">
          <div class="box">
            <div class="box-head"><span class="dot"></span>景区舒适度</div>
            <v-chartPage3Right></v-chartPage3Right>
          </div>
        </div>
      </div>
      <div class="flex_right">
        <div class="box right_item">
          <div class="box-head"><span class="dot"></span>景区道路拥堵情况</div>
          <v-mapRoad></v-mapRoad>
        </div>
        <div class="box right_item">
          <div class="box-head"><span class="dot"></span>景区客流热力图</div>
          <v-mapHeat></v-mapHeat>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartPage3Right from "../components/element/chartPage3Right";
import mapHeat from "../components/map/mapHeat";
import chartLines from "../components/element/chartLines";
import ChartPie from "../components/myEcharts/chartPie";
import mapRoad from "../components/map/mapRoad";
export default {
  name: "page1",
  data() {
    return {
      paramY: {
        unitY: "元",
        titleY: "",
      },
      showLine: {
        hasLine: true,
        color: "#FFF",
        // 中位线的坐标
        y: 180,
        namePadding: [0, 0, 0, 0],
      },
      position: {
        gridBottom: "3%",
        bottom: "93%",
        left: "50%",
      },
      bindData: [
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
            name: "成人票",
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
            name: "儿童票",
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
            name: "学生票",
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
            name: "网折票",
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
        ],
      ],
      bindData1: [
        {
          name: "团队游",
          value: 2680,
        },
        {
          name: "自由行",
          value: 3400,
        },
        {
          name: "自驾游",
          value: 3500,
        },
      ],
    };
  },
  created() {},
  methods: {},
  components: {
    "v-chartPage3Right": chartPage3Right,
    "v-chartLines": chartLines,
    "v-mapHeat": mapHeat,
    ChartPie,
    "v-mapRoad": mapRoad,
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
    .down {
      height: 50%;
    }
    .up {
      display: flex;
      margin-bottom: 0.4rem;
      .up_item {
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
      flex: 1;
      &:first-child {
        margin-bottom: 0.4rem;
      }
    }
  }
}
</style>
