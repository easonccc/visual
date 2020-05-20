<template>
  <div :style="{'height':height,'width':width,}" ref="myEchart"></div>
</template>
<script>
export default {
  name: "chartLine",
  props: {
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    colorArr: {
      type: Array,
      default: function(value) {
        return ["rgba(104, 147, 255", "rgba(104, 147, 255"];
      }
    },
    bindData: {
      type: Object,
      default: function(value) {
        return {
          xData: ["2019-09-01", "2019-09-10", "2019-09-17", "2019-09-30"],
          legendData: ["巫山小三峡"],
          lines: [[220, 310, 256, 326]]
        };
      }
    }
  },
  data() {
    return {
      chart: null,
      colors: [
        "#58CF66",
        "#FE8F29",
        "#5990FF",
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
      ]
    };
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  watch: {
    bindData: function(newvalue) {
      //console.log('update')
      this.initChart();
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var that = this;
      console.log('11',this.colorArr)
      this.chart = echarts.init(this.$refs.myEchart);
      // 配置和数据
      let color = ["rgba(104, 147, 255", "rgba(88, 207, 102"];
      let lineType = ["dashed", "solid"];

      let series = [];

      this.bindData.lines.forEach((v, i) => {
        let seriesOne = {
          name: this.bindData.legendData[i] || "阅读量",
          type: "line",
          // smooth: true,
          symbolSize: 8, //拐点大小
          data: v,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "top",
                color: this.colors[i]
              },
              color: this.colors[i]
            }
          },
          lineStyle: {
            normal: {
              width: 2,
              type: "solid"
            }
          },
          areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: that.colorArr[0] + ', 0.9)'
              }, {
                  offset: 0.8,
                  color: that.colorArr[1] + ', 0.2)'
              }], false),
              shadowColor: "rgba(0, 0, 0, 0.1)",
              shadowBlur: 10
            }
          }
        };
        series.push(seriesOne);
      });
      let option = {
        backgroundColor: "", //背景颜色透明
        tooltip: {
          trigger: "axis"
        },
        grid: {
          top: "15%",
          left: "2%",
          right: "4%",
          bottom: "8%",
          containLabel: true
        },
        legend: {
          orient: "horizontal",
          left: "2%",
          textStyle: {
            color: "#8a939a"
          },
          data: this.bindData.legendData || ["数量"]
        },
        xAxis: {
          type: "category",
          data: this.bindData.xData,
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          },
          axisLabel: {
            textStyle: {
              fontSize: 12,
              color: "#8a939a"
            }
          }
        },
        yAxis: {
          name: this.ceil,
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: "#eee"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#999"
            }
          },
          axisLabel: {
            // margin: 10,
            textStyle: {
              fontSize: 12,
              color: "#8a939a"
            }
          }
        },
        series: series
      };
      this.chart.setOption(option);
      // window.onresize = this.chart.resize;
      window.addEventListener("resize", () => {
        this.chart.resize();
      });
    }
  }
};
</script>
<style scoped lang='less'>
</style>
