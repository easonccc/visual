<template>
  <div :style="{ height: height, width: width }" ref="myEchart"></div>
</template>
<script>
export default {
  name: "visitorsStatic",
  props: {
    type: {
      type: String,
      default: "数量",
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
      default: function(value) {
        return value;
      },
    },
    // y轴的参数
    paramY: {
      type: Object,
      default: function() {
        return {
          name: "人次",
          text: ["舒适", "拥堵", "非常拥堵"],
        };
      },
    },
  },
  data() {
    return {
      colors: [
        "#FF5858",
        "#FFE058",
        "#FF5858",
        "#FFE058",
        "#FF5858",
        "#FFE058",
        "#FF5858",
        "#FFE058",
        "#FF5858",
        "#FFE058",
        "#FF5858",
        "#FFE058",
        "#FF5858",
        "#FFE058",
        "#FF5858",
        "#FFE058",
        "#FF5858",
        "#FFE058",
      ],
      chart: null,
      xData: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
      ],
      yData: [
        103215,
        103233,
        103234,
        103252,
        132101,
        132115,
        132200,
        103220,
        103330,
        103334,
        103390,
        103215,
        90654,
        103215,
        103215,
        103215,
        103215,
        103215,
        103332,
        133215,
        93215,
        103215,
        123215,
        103215,
      ],
    };
  },
  mounted() {
    this.initChart();
  },
  watch: {
    bindData: function() {
      this.initChart();
    },
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      let that = this;
      this.chart = echarts.init(this.$refs.myEchart);
      // 把配置和数据放这里
      var fontColor = "#30eee9";
      var option = {
        grid: {
          left: "2%",
          right: "0%",
          bottom: "3%",
          top: "20%",
          containLabel: true,
        },
        tooltip: {
          show: true,
          trigger: "item",
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: "#fff",
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#397cbc",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#195384",
              },
            },
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: this.paramY.name,
            nameTextStyle: {
              color: "#fff",
              /*  fontSize: 16,
            padding: 10, */
            },
            axisLabel: {
              interval: 0,
            },
            minInterval: 1,
            // interval: 1,
            axisLabel: {
              formatter: "{value}万",
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              /*   lineStyle: {
                color: "#fff",
              }, */
            },
            /*   splitArea: {
              show: true,
              areaStyle: {
                color: [
                  "rgba(119,255,88,0.3)",
                  "rgba(255,224,88,0.3",
                  "rgba(255,88,88,0.3)",
                ],
              },
            }, */
          },
          {
            type: "value",
            name: "占比",
            min: 0,
            max: 10,
            // max: 1000,
            axisLabel: {
              formatter: function(value, item) {
                console.log(value, item);

                if (value == "0") {
                  return that.paramY.text[0];
                } else if (value == "8") {
                  return that.paramY.text[1];
                } else if (value == "10") {
                  return that.paramY.text[2];
                }
              },
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              lineStyle: {
                show: false,
                color: "#fff",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#11366e",
              },
            },
          },
        ],
        series: [
          {
            name: "舒适",
            type: "line",
            stack: "总量",
            symbol: "circle",
            // smooth: true,
            symbol: "none",
            symbolSize: 8,
            zlevel: 10,
            itemStyle: {
              normal: {
                color: "rgba(119,255,88,0.7)",
                lineStyle: {
                  color: "#aecb56",
                  width: 1,
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#6EE6FF",
                    },
                    {
                      offset: 1,
                      color: "#00CAFF",
                    },
                  ]),
                },
              },
            },
            markArea: {
              data: [
                [
                  {
                    yAxis: "0",
                  },
                  {
                    yAxis: "5",
                  },
                ],
              ],
            },
            lineStyle: {
              normal: {
                width: 1,
              },
            },
          },
          {
            name: "拥堵",
            type: "line",
            animation: false,
            itemStyle: {
              normal: {
                color: "rgba(255,224,88,0.8)",
                lineStyle: {
                  color: "#aecb56",
                  width: 1,
                },
              },
            },

            markArea: {
              data: [
                [
                  {
                    yAxis: "5",
                  },
                  {
                    yAxis: "8",
                  },
                ],
              ],
            },
            lineStyle: {
              normal: {
                width: 1,
              },
            },
          },
          {
            name: "非常拥堵",
            type: "line",
            animation: false,
            areaStyle: {
              normal: {},
            },
            itemStyle: {
              normal: {
                color: "rgba(255,88,88,0.8)",
                lineStyle: {
                  color: "#aecb56",
                  width: 1,
                },
              },
            },
            markArea: {
              data: [
                [
                  {
                    yAxis: "8",
                  },
                  {
                    yAxis: "10",
                  },
                ],
              ],
            },
            lineStyle: {
              normal: {
                width: 1,
              },
            },
          },
          {
            name: "",
            type: "line",
            stack: "总量",
            symbol: "circle",
            // smooth: true,
            symbol: "none",
            symbolSize: 8,
            zlevel: 10,
            itemStyle: {
              normal: {
                color: "#00CAFF",
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(46,215,252,0.4)",
                    },
                    {
                      offset: 1,
                      color: "rgba(46,215,252,0.9)",
                    },
                  ]),
                },
              },
            },
            data: [5, 3, 2, 7, 8.5, 6.5, 4, 4.5, 3.5, 5, 9, 7],
          },

          /*   {
            name: "",
            type: "line",
            stack: "",
            symbol: "circle",
            symbolSize: 0,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1,
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(119,255,88,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(119,255,88,0.9)",
                    },
                  ]),
                },
              },
            },
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          },
          {
            name: "",
            type: "line",
            stack: "",
            symbol: "circle",
            symbolSize: 0,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1,
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(255,224,88,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(255,224,88,0.9)",
                    },
                  ]),
                },
              },
            },
            data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
          },
          {
            name: "",
            type: "line",
            stack: "",
            symbol: "circle",
            symbolSize: 0,
            itemStyle: {
              normal: {
                color: "#aecb56",
                lineStyle: {
                  color: "#aecb56",
                  width: 1,
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(255,88,88,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(255,88,88,0.9)",
                    },
                  ]),
                },
              },
            },
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
          }, */
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>
<style scoped lang="less"></style>
