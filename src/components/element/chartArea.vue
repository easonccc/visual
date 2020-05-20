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
        return [
          [
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
          [2660, 1802, 601, 870, 680, 1190, 2110, 1590, 1382, 2001, 1854, 1790],
        ];
      },
    },
    // 折线区域的颜色
    areaStyle: {
      type: Array,
      // 第一个为最开始的颜色 第二个为结束时的颜色
      default: ["#034874", "#034874"],
    },
    // 纵坐标的单位
    yTitle: {
      type: String,
      default: "车次",
    },
    // grid的top值
    gridTop: {
      type: String,
      default: "24%",
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
          right: "5%",
          bottom: "3%",
          top: this.gridTop,
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
              color: "rgba(46,217,253,1)",
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
            data: this.bindData[0],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: this.yTitle,
            // interval: 10, //间隔
            axisLabel: {
              formatter: "{value}万",
              show: true,
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
            color: ["#fff"],
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              //   横线颜色及类型
              lineStyle: {
                type: "solid",
                color: "rgba(255,255,255,0.5)",
              },
            },
          },
        ],
        series: [
          {
            name: "历城",
            type: "line",
            stack: "总量",
            smooth: true,
            symbol: "circle",
            symbolSize: 0,
            itemStyle: {
              normal: {
                color: this.areaStyle[0],
                /* lineStyle: {
                  color: "#08a2e0",
                  width: 1,
                }, */
                areaStyle: {
                  //color: '#94C9EC'
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: this.areaStyle[0],
                    },
                    {
                      offset: 1,
                      color: this.areaStyle[1],
                    },
                  ]),
                },
              },
            },
            data: this.bindData[1],
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>
<style scoped lang="less"></style>
