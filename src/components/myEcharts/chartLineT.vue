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
    bindData: {
      type: Object,
      default: function(value) {
        return {
          xData: ["2019-09-01", "2019-09-10", "2019-09-17", "2019-09-30"],
          legendData: [""],
          lines: [[220, 310, 256, 326]]
        };
      }
    }
  },
  data() {
    return {
      chart: null,
      colors: [
        "#FF5858",
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
          }
          // areaStyle: {
          //   normal: {
          //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          //         offset: 0,
          //         color: "rgba(104, 147, 255" + ', 0.9)'
          //     }, {
          //         offset: 0.8,
          //         color: "rgba(104, 147, 255" + ', 0.2)'
          //     }], false),
          //     shadowColor: "rgba(0, 0, 0, 0.1)",
          //     shadowBlur: 10
          //   }
          // }
        };
        series.push(seriesOne);
      });
      let option = {
        // title: {
        //   text: "Step Line"
        // },
        // tooltip: {
        //   trigger: "axis"
        // },
        legend: {
          data: ["成人票", "儿童票", "学生票"],
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff" //字体颜色
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            name: "成人票",
            type: "line",
            step: "start",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "儿童票",
            type: "line",
            step: "middle",
            data: [220, 282, 201, 234, 290, 430, 410]
          },
          {
            name: "学生票",
            type: "line",
            step: "end",
            data: [450, 432, 401, 454, 590, 530, 510]
          }
        ]
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
