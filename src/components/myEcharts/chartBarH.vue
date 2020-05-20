<template>
  <div class="chartPage">
    <div class="nums">
      <div class="num" v-for="i in 10" :key="i">{{ i }}</div>
    </div>
    <div
      :style="{ height: height, width: width }"
      class="pie"
      ref="chartPie"
    ></div>
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
        "#c14089",
      ],
      chart: null,
      date: new Date(),
    };
  },
  props: {
    type: {
      type: String,
      default: "all",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    bindData: {
      type: Array,
      default: function() {
        return [
          ["18年1月", "18年2月", "18年3月", "18年4月", "18年5月", "18年6月"],
          ["126", "1708", "2349", "1741", "2727", "1184"],
          ["162", "1208", "2349", "1741", "2727", "1184"],
          ["142", "1108", "1349", "2741", "3727", "2184"],
        ];
      },
    },
  },
  mounted() {
    this.initChartPie(this.bindData);
  },
  watch: {
    bindData: function(newValue) {
      this.initChartPie(newValue);
    },
  },
  methods: {
    initChartPie(data) {
      // let that=this;
      this.chart = echarts.init(this.$refs.chartPie);
      // 把配置和数据放这里
      // import echarts from 'echarts'
      var charts = {
        // 按顺序排列从大到小
        cityList: this.bindData[0],
        cityData: this.bindData[1],
      };
      var top10CityList = charts.cityList;
      var top10CityData = charts.cityData;
      var color = [
        "rgba(255,88,88",
        "rgba(255,224,88",
        "rgba(225,88,255",
        "rgba(25,226,230",
        "rgba(25,226,230",
        "rgba(25,226,230",
        "rgba(25,226,230",
        "rgba(25,226,230",
        "rgba(25,226,230",
        "rgba(25,226,230",
      ];
      var colorList = ["#f36c6c", "#e6cf4e", "#20d180", "red"];
      let lineY = [];
      for (var i = 0; i < charts.cityList.length; i++) {
        var x = i;
        /*  if (x > color.length - 1) {
          x = color.length - 1;
        } */
        var data = {
          name: charts.cityList[i],
          color: color[x] + ")",
          value: top10CityData[i],
          itemStyle: {
            normal: {
              show: true,
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                  {
                    offset: 0,
                    color: color[x] + ", 0.3)",
                  },
                  {
                    offset: 1,
                    color: color[x] + ", 1)",
                  },
                ],
                false
              ),
              barBorderRadius: 4,
            },
            emphasis: {
              shadowBlur: 15,
              shadowColor: "rgba(0, 0, 0, 0.1)",
            },
          },
        };
        lineY.push(data);
      }

      console.log(lineY + "......");
      console.log("x", x);
      console.log("index", data.value);
      var index = 0;
      var option = {
        backgroundColor: "transparent",
        title: {
          show: false,
        },
        tooltip: {
          trigger: "item",
        },
        color: color,
        grid: {
          top: "2%",
          left: "4%",
          right: "10%",
          bottom: "4%",
          borderWidth: 2,
          containLabel: true,
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            data: lineY[0],
            axisLabel: {
              show: true,
              // inside: false,
              interval: 0,

              x: 50,
              y: 100,
              textStyle: {
                color: "#fff",
                fontSize: "12",
                align: "right",
                // margin: "20",
                // baseline: "middle",
                fontFamily: "PingFangSC-Regular",
              },
              /*     rich: {
                a1: {
                  color: "#fff",
                  backgroundColor: "#ff5858",
                  width: 30,
                  height: 30,
                  align: "center",
                  borderRadius: 2,
                },
                a2: {
                  color: "#fff",
                  backgroundColor: "#ffe058",
                  width: 30,
                  height: 30,
                  align: "center",
                  borderRadius: 2,
                },
                a3: {
                  color: "#fff",
                  backgroundColor: "#e158ff",
                  width: 30,
                  height: 30,
                  align: "center",
                  borderRadius: 2,
                },
                b: {
                  color: "#fff",
                  backgroundColor: "#19e2e6",
                  width: 30,
                  height: 30,
                  // position: "center",
                  align: "center",
                  borderRadius: 2,
                },
              }, */
              /*  formatter: function(val) {
                if (index == 10) {
                  index = 0;
                }
                index++;
                if (index - 1 < 3) {
                  return ["{a" + index + "|" + index + "}" + "  " + val].join(
                    "\n"
                  );
                } else {
                  return ["{b|" + index + "}" + "  " + val].join("\n");
                }
              }, */
              formatter: function(val) {
                return `${val}`;
              },
            },
            data: top10CityList,
          },
          /*    {
            type: "category",
            axisLine: {
              show: true,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              inside: false,
              textStyle: {
                color: "#fff",
                fontSize: "12",
                fontFamily: "PingFangSC-Regular",
              },
              formatter: function(val) {
                return `${val}k`;
              },
            },
            splitArea: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            data: top10CityData,
          }, */
        ],
        xAxis: {
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: "14",
              fontFamily: "PingFangSC-Regular",
            },
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },

        series: [
          {
            name: "",
            type: "bar",
            zlevel: 2,
            barWidth: "10px",
            data: lineY,
            animationDuration: 1500,
            label: {
              normal: {
                show: true,
                position: "insideBottomLeft",
                formatter: "{c}",
                distance: 0,
                offset: [10, 0],
                position: "right",
                color: "#fff",
                fontSize: 12,
                // padding: [5, 15, 10, 15],
                formatter: function(a, b, c) {
                  // console.log(a,b,c)
                  return `${a.data.value}`;
                },
              },
            },
          },
        ],
        animationEasing: "cubicOut",
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
.chartPage {
  .nums {
    position: absolute;
    top: 0.4rem;
    .num {
      height: 1rem;
      width: 1rem;
      background: rgba(25, 226, 230, 1);
      text-align: center;
      line-height: 1rem;
      color: #fff;
      font-size: 0.4rem;
      margin: 0.4rem;
      &:first-child {
        background: rgba(255, 88, 88, 1);
      }
      &:nth-child(2) {
        background: rgba(255, 224, 88, 1);
      }
      &:nth-child(3) {
        background: rgba(225, 88, 255, 1);
      }
    }
  }
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
