<template>
  <div class="chart">
    <div class="pie" ref="chartPie"></div>

    <div class="tips" v-if="bindData.length !== 6">
      <div class="total" v-if="count != 0">总金额:{{ count }}元</div>
      <div class="tips_one" v-for="(item, index) in bindData" :key="index">
        <div class="one" :style="{ 'background-color': colors[index] }"></div>
        <div class="two" :style="{ color: colors[index] }">{{ item.name }}</div>
        <div class="three" v-if="showPer">
          {{ item.value == 0 ? "0" : ((item.value / total) * 100).toFixed(2) }}%
        </div>
        <div class="three" v-if="item.value2">
          {{ item.value2 }} {{ type ? type : "" }}
        </div>
      </div>
    </div>
    <div class="tip" v-else>
      <div class="total" v-if="count != 0">总金额:{{ count }}元</div>
      <div class="tips_one" v-for="(item, index) in bindData" :key="index">
        <div class="one" :style="{ 'background-color': colors[index] }"></div>
        <div class="two" :style="{ color: colors[index] }">{{ item.name }}</div>
        <div class="three" v-if="showPer">
          {{ item.value == 0 ? "0" : ((item.value / total) * 100).toFixed(2) }}%
        </div>
        <div class="three" v-if="item.value2">
          {{ item.value2 }} {{ type ? type : "" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// require('echarts/theme/macarons');
export default {
  name: "chartPie",
  data() {
    return {
      colors: [
        "#17abff",
        "#ec7f12",
        "#7d66ff",
        "#20d271",
        "#d3d91d",
        "#97b552",
        "#95706d",
        "#dc69aa",
        "#07a2a4",
        "#9a7fd1",
        "#588dd5",
        "#f5994e",
        "#c05050",
        "#59678c",
        "#c9ab00",
        "#7eb00a",
        "#6f5553",
        "#c14089",
      ],
      chart: null,
    };
  },
  props: {
    type: {
      type: String,
      default: "",
    },
    bindData: {
      type: Array,
    },
    count: {
      type: Number,
      default: 0,
    },
    showPer: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.initChartPie(this.bindData);
  },
  watch: {
    bindData: function(newVal, oldVal) {
      this.bindData = newVal;
      this.initChartPie(this.bindData);
    },
  },
  computed: {
    total() {
      let total = 0;
      this.bindData.forEach((v) => {
        total += parseInt(v.value);
      });
      return total;
    },
    lineHeight() {
      let l = this.bindData.length;
      if (l < 3) {
        return "70px";
      } else if (l >= 3 && l < 7) {
        return "40px";
      } else {
        return "20px";
      }
    },
  },
  methods: {
    initChartPie(data) {
      this.chart = echarts.init(this.$refs.chartPie);
      // 把配置和数据放这里
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}:{c}({d}%)",
          position: ["25%", "0"],
        },
        series: [
          {
            name: "数量",
            type: "pie",
            radius: ["65%", "85%"],
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                color: (params) => {
                  // console.log(params)
                  return this.colors[params.dataIndex];
                },
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            data: data,
          },
        ],
      };
      this.chart.setOption(option);
      //   window.onresize = this.chart.resize;
      window.addEventListener("resize", () => {
        this.chart.resize();
      });
    },
  },
};
</script>

<style scoped lang="less">
.chart {
  flex: 1;
  width: 100%;
  height: 100%;
  // background-color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.pie {
  height: 40%;
  // margin-left: 20px;
}
.tips {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: 0.4rem;
  .total {
    width: 100%;
    text-align: left;
    height: 0.45rem;
    font-size: 0.32rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 0.45rem;
  }
  .tips_one {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 1rem;

    .one {
      width: 0.34rem;
      height: 0.34rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
    .two {
      flex: 1;
      text-align: left;
      height: 0.56rem;
      font-size: 0.4rem;
      font-weight: 400;
      color: rgba(247, 248, 250, 1);
      line-height: 0.56rem;
    }
    .three {
      flex: 1;
      text-align: left;
      height: 0.56rem;
      font-size: 0.4rem;
      font-weight: 400;
      color: rgba(247, 248, 250, 1);
      line-height: 0.56rem;
    }
  }
}
.tip {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(3, 33%);
  align-items: center;
  grid-auto-flow: column;
  padding: 2rem;
  .total {
    width: 100%;
    text-align: center;
    height: 0.45rem;
    font-size: 0.32rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 0.45rem;
  }
  .tips_one {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 1rem;

    .one {
      width: 0.34rem;
      height: 0.34rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
    .two {
      flex: 1;
      text-align: left;
      height: 0.56rem;
      font-size: 0.4rem;
      font-weight: 400;
      color: rgba(247, 248, 250, 1);
      line-height: 0.56rem;
    }
    .three {
      flex: 1;
      text-align: left;
      height: 0.56rem;
      font-size: 0.4rem;
      font-weight: 400;
      color: rgba(247, 248, 250, 1);
      line-height: 0.56rem;
    }
  }
}
</style>
