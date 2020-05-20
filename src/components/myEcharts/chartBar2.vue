<template>
  <div class="chartPage">
    <div :style="{'height':height,'width':width,}" class="pie" ref="chartPie"></div>
  </div>
</template>


<script>
// require('echarts/theme/macarons');
export default {
  name: "chartBar",
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
        "#c14089"
      ],
      chart: null,
      date: new Date()
    };
  },
  props: {
    type: {
      type: String,
      default: "all"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    bindData: {
      type: Array,
      default: function() {
        return [
          ["18年1月", "18年2月", "18年3月", "18年4月", "18年5月", "18年6月"],
          ["126", "1708", "2349", "1741", "2727", "1184"],
          ["162", "1208", "2349", "1741", "2727", "1184"],
          ["142", "1108", "1349", "2741", "3727", "2184"]
        ];
      }
    }
  },
  mounted() {
    this.initChartPie(this.bindData);
  },
  watch: {
    bindData: function(newValue) {
      this.initChartPie(newValue);
    }
  },
  methods: {
    initChartPie(data) {
      // let that=this;
      this.chart = echarts.init(this.$refs.chartPie);
      // 把配置和数据放这里
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["环比数据", "当前数据", "同比数据"],
          // padding: 0,
          right: 0,
          // left: '50%',
          itemWidth: 5,
          itemHeight: 5,
          textStyle: {
            color: "white",
            fontSize: 10
          }
        },
        grid: {
          top: "10%",
          left: "2%",
          right: "2%",
          bottom: "14%",
          containLabel: true
        },
        yAxis: {
          type: "value",
          axisLabel: {
            textStyle: {
              fontSize: 10,
              color: "#fff"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "solid",
              color: "#0e598d"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#0e598d"
            }
          }
        },
        xAxis: {
          type: "category",
          data: this.bindData[0],
          axisLabel: {
            interval: 0,
            rotate: 0,
            textStyle: {
              fontSize: 10,
              color: "#fff"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "solid",
              color: "#0e598d"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#0e598d"
            }
          }
        },
        series: [
          {
            name: "环比数据",
            type: "bar",
            // stack: '总量',
            data: this.bindData[1],
            itemStyle: {
              normal: {
                color: "#FF5858"
              }
            }
          },
          {
            name: "当前数据",
            type: "bar",
            // stack: '总量',
            data: this.bindData[2],
            itemStyle: {
              normal: {
                color: "#E158FF"
              }
            }
          },
          {
            name: "同比数据",
            type: "bar",
            // stack: '总量',
            data: this.bindData[3],
            itemStyle: {
              normal: {
                color: "#FFE058"
              }
            }
          }
        ]
      };
      this.chart.setOption(option);
      //   window.onresize = this.chart.resize;
      window.addEventListener("resize", () => {
        this.chart.resize();
      });
    }
  }
};
</script>

<style scoped lang='less'>
.chartPage {
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  .pie {
    flex: 1;
  }
}
</style>