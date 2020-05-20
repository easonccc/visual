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
      // import echarts from 'echarts'
      var charts = {
        // 按顺序排列从大到小
        cityList: [
          "巫山小三峡三日游",
          "武隆喀斯特旅游区三日…",
          "云阳龙缸景区三日游",
          "大足石刻景区三日游",
          "酉阳桃花源三日游"
        ],
        cityData: [7500, 6200, 5700, 4200, 3500]
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
        "rgba(25,226,230"
      ];

      let lineY = [];
      for (var i = 0; i < charts.cityList.length; i++) {
        var x = i;
        if (x > color.length - 1) {
          x = color.length - 1;
        }
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
                    color: color[x] + ", 0.3)"
                  },
                  {
                    offset: 1,
                    color: color[x] + ", 1)"
                  }
                ],
                false
              ),
              barBorderRadius: 4
            },
            emphasis: {
              shadowBlur: 15,
              shadowColor: "rgba(0, 0, 0, 0.1)"
            }
          }
        };
        lineY.push(data);
      }

      console.log(lineY);
      var option = {
        backgroundColor: "transparent",
        title: {
          show: false
        },
        tooltip: {
          trigger: "item"
        },
        color: color,
        grid: {
          top: "2%",
          left: "2%",
          right: "2%",
          bottom: "4%",
          borderWidth: 2,
          containLabel: true
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: true,
              inside: false,
              textStyle: {
                color: "#fff",
                fontSize: "12",
                fontFamily: "PingFangSC-Regular"
              },
              formatter: function(val) {
                return `${val}`;
              }
            },
            data: top10CityList
          },
          {
            type: "category",
            axisLine: {
              show: true
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              inside: false,
              textStyle: {
                color: "#fff",
                fontSize: "12",
                fontFamily: "PingFangSC-Regular"
              },
              formatter: function(val) {
                return `${val}k`;
              }
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: top10CityData
          }
        ],
        xAxis: {
          type: "value",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
              fontSize: "14",
              fontFamily: "PingFangSC-Regular"
            }
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
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
                position: "insideBottomRight",
                formatter: "{c}%",
                distance: 0,
                offset: [50, 8],
                color: "#fff",
                fontSize: 12,
                // padding: [5, 15, 10, 15],
                formatter: function(a, b,c) {
                    // console.log(a,b,c)
                  return `${a.data.value / 100}%`;
                }
              }
            }
          }
        ],
        animationEasing: "cubicOut"
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