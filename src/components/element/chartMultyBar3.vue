<template>
  <div :style="{ height: height, width: width }" ref="myEchart"></div>
</template>
<script>
export default {
  name: "chartBar",
  props: {
    type: {
      type: String,
      default: "visitors",
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
      type: Object,
      default: function(value) {
        return {
          legend: ["累计", "同期"],
          xData: ["湖北华斯瓦德聚氨酯有限公司"],
          yData: [[592], [752]],
        };
      },
    },
    barWidth: {
      type: String,
      default: "25px",
    },
  },
  data() {
    return {
      colors: ["rgb(239,95,95)", "rgb(226,87,255)", "rgb(255,223,89)"],
      chart: null,
      xData: ["18", "19", "20", "21", "22", "23", "24"],
      yData: [103215, 103332, 133215, 93215, 103215, 123215, 103215],
      ecConfig: null,
    };
  },
  mounted() {
    this.initChart(this.bindData);
  },
  watch: {
    bindData: function(newVal, oldVal) {
      this.bindData = newVal;
      this.initChart(this.bindData);
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
    initChart(data) {
      let that = this;
      this.chart = echarts.init(this.$refs.myEchart);
      // 配置和数据
      var option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          width: "15",
          axisPointer: {
            type: "line",
            lineStyle: { color: "rgba(255,255,255,0.1)" },
          },
          textStyle: {
            fontSize: "10",
          },
          formatter: function(params) {
            var respon = "";
            var num = 0;
            var nums = "";
            var date = [
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
            ];
            /*  for (var key in params) {
              num = option.series[key].data[date.indexOf(params[key].name)];
              respon = params[key].seriesName;
              if (num == undefined) {
                num = 0;
              } else {
                if (num + 100 < 100) {
                  num = -num;
                } else {
                  num = num;
                }
              }
              nums = nums + respon + "：" + String(num) + "万" + "<br/>";
            }
            return params[0].name + "<br/>" + nums; */
          },
        },
        legend: {
          // left:680,
          top: 15,
          itemWidth: 15,
          itemHeight: 10,
          textStyle: {
            color: "#ccc",
          },
          right: "2%",
          data: ["环比数据", "当下数据", "同比数据"],
        },
        grid: {
          left: "2%",
          right: "5%",
          bottom: "1%",
          top: "18%",
          containLabel: true,
        },
        //   grid: {
        //       top:'17%',
        //       left: '3%',
        //       right: '3%',
        //       bottom: '1%',
        //       height:'83.5%',
        //       containLabel: true
        //   },
        xAxis: [
          {
            type: "category",
            data: [
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
              "鄂旅投",
            ],
            axisLine: {
              lineStyle: {
                color: "#868fb3",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: "10",
                fontFamily: "Microsoft YaHei",
              },
            },
            axisTick: { length: 0 },
          },
          {
            show: false,
            type: "category",
            data: [
              "2019-01",
              "2019-02",
              "2019-03",
              "2019-04",
              "2019-05",
              "2019-06",
              "2019-07",
              "2019-08",
              "2019-09",
              "2019-10",
              "2019-11",
            ],
            axisLine: {
              lineStyle: {
                color: "#868fb3",
              },
            },
            axisLabel: {
              textStyle: {
                color: "#999999",
                fontSize: "10",
                fontFamily: "Microsoft YaHei",
              },
            },
            axisTick: { length: 0 },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "游客人数(个人)",
            // max: 1000,
            //   min:0,
            // interval: 10,
            // max: 50,
            axisTick: {
              show: false,
              length: 15,
              lineStyle: {
                color: "#e4e4e4",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "bolid",
                color: "#50556b",
              },
            },
            axisLine: {
              show: false,
              lineStyle: {
                type: "bolid",
                color: "#50556b",
              },
            },
            nameTextStyle: {
              color: "#fff",
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
                fontSize: "10",
                fontFamily: "Microsoft YaHei",
              },
              formatter: function(value, index) {
                var val = Math.abs(value);
                if (val < 50 && val > 0) {
                  return 50;
                } else {
                  return val;
                }
              },
            },
          },
        ],
        series: [
          {
            id: "topleftchart",
            name: "环比数据",
            type: "bar",
            // stack: "合并",
            itemStyle: {
              normal: {
                color: "rgb(239,95,95)",
              },
            },
            barGap: 0,
            xAxisIndex: 0,
            barWidth: 15,
            data: [120, 150, 115, 175, 145, 105, 123, 118, 80, 110, 155],
          },
          {
            id: "topmiddlechart",
            name: "当下数据",
            type: "bar",
            // stack: "合并",
            itemStyle: {
              normal: {
                color: "#e158ff",
              },
            },
            barGap: 0,
            xAxisIndex: 0,
            barWidth: 15,
            data: [157, 150, 120, 145, 110, 117, 99, 67, 102, 123, 149],
          },
          {
            id: "toprightchart",
            name: "同比数据",
            type: "bar",
            // stack: "合并",
            itemStyle: {
              normal: {
                color: "#ffe058",
              },
            },
            xAxisIndex: 0,
            barWidth: 15,
            data: [118, 170, 99, 175, 98, 80, 99, 118, 80, 150, 110],
          },
          {
            id: "leftchart",
            name: "电信",
            type: "bar",
            min: 0,
            max: 50,
            splitNumber: 10,
            interval: 10,
            stack: "合并",
            barGap: "-100%",
            itemStyle: {
              normal: {},
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0.4,
                  color: "#FF58E1",
                },
                {
                  offset: 1,
                  color: "#FF58E1",
                },
              ]),
            },
            xAxisIndex: 1,
            barWidth: 15,
            data: [-22, -18, -12, -11, -8, -6, -9, -12, -16, -22, -19],
          },
          {
            id: "rightchart",
            name: "移动",
            type: "bar",

            // barGap: "-100%",
            itemStyle: {
              normal: {
                color: "rgba(225,88,255,0.4)",
              },
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0.4,
                  color: "#e158ff",
                },
                {
                  offset: 1,
                  color: "red",
                },
              ]),
            },
            xAxisIndex: 1,
            barWidth: 15,
            data: [-31, -28, -25, -22, -20, -18, -19, -15, -16, -14, -22],
          },
          {
            id: "middlechart",
            name: "联通",
            type: "bar",
            barGap: 0,
            itemStyle: {
              normal: {
                color: "#FF9D58",
              },
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0.4,
                  color: "rgba(255,224,88,0.4)",
                },
                {
                  offset: 1,
                  color: "rgba(255,224,88,1)",
                },
              ]),
            },
            xAxisIndex: 1,
            barWidth: 15,
            data: [-18, -20, -26, -18, -15, -19, -22, -17, -23, -26, -28],
          },
        ],
      };
      /*   let series = [];
      options.xAxis[0].data = data.xData;
      options.legend.data = data.legend;
      data.legend.forEach((v, i) => {
        item.name = v;
        item.data = data.yData[i];
        item.itemStyle.normal.color = this.colors[i];
        series.push(JSON.parse(JSON.stringify(item)));
      });
      options.series = series; */
      this.chart.setOption(option);

      window.addEventListener("resize", () => {
        this.chart.resize();
      });
    },
  },
};
</script>
<style scoped lang="less"></style>
