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
      default: "200px"
    },
    bindData: {
      type: Object,
      default: function(value) {
        return {
          xData: ["2019-09-01", "2019-09-10", "2019-09-17", "2019-09-30"],
          legendData: [
            "巫山小三峡",
            "酉阳桃花源",
            "万州大瀑布",
       
          ],
          lines: [[220, 310, 256, 326], [80, 186, 186, 200],[120, 210, 156, 226]]
        };
      }
    }
  },
  data() {
    return {
      chart: null,
      colors: [
        "#7B4B96",
        "#A26991",
        "#504765",
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
      let color = ["rgba(125,77,152", "rgba(162,105,147", "rgba(80,71,101"];
      let lineType = ["dashed", "solid"];

      let series = [];

      this.bindData.lines.forEach((v, i) => {
        let seriesOne = {
          name: this.bindData.legendData[i] || "数量",
          type: "line",
          smooth: true,
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
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //     offset: 0,
              //     color: this.colors[i] + ', 0.9)'
              // }, {
              //     offset: 0.8,
              //     color: this.colors[i] + ', 0.2)'
              // }], false),
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
          left: '2%',
          textStyle: {
            color: "#8a939a"
          },
          data: this.bindData.legendData || ["数量"]
        },
        // 区域缩放控制器
        dataZoom: {
          orient: "horizontal", // 布局方式，默认为水平布局，可选为：
          // 'horizontal' ¦ 'vertical'
          // x: {number},              // 水平安放位置，默认为根据grid参数适配，可选为：
          // {number}（x坐标，单位px）
        //   y: { bottom: "5px"},              // 垂直安放位置，默认为根据grid参数适配，可选为：
          // {number}（y坐标，单位px）
          // width: {number},           // 指定宽度，横向布局时默认为根据grid参数适配
          // height: {number},          // 指定高度，纵向布局时默认为根据grid参数适配
          backgroundColor: "rgba(0,0,0,0)", // 背景颜色
          dataBackgroundColor: "#5990FF", // 数据背景颜色
          fillerColor: "rgba(144,197,237,0.2)", // 填充颜色
          handleColor: "#58CF66" // 手柄颜色   
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
