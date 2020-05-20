<template>
  <div class="chartPage">
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
      /*  showLine: [
        {
          name: "Y 轴值为 100 的水平线",
          yAxis: 1400,
        },
      ],
      hiddenLine: [
        {
          name: "Y 轴值为 100 的水平线",
          yAxis: 0,
        },
      ], */
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
          [
            "湖南",
            "江苏",
            "福建",
            "广州",
            "四川",
            "河南",
            "北京",
            "重庆",
            "国际其他",
            "国外",
          ],
          [
            "1622",
            "1708",
            "2349",
            "1741",
            "2727",
            "1184",
            "1113",
            "1222",
            "3123",
            "1313",
          ],
        ];
      },
    },
    lineColor: {
      type: String,
      default: "#0e598d",
    },
    // y轴坐标的单位
    paramY: {
      type: Object,
      default: function() {
        return {
          unit: "",
          max: 0,
        };
      },
    },
    // 是否显示中线 及中线颜色
    showLine: {
      type: Object,
      default: function() {
        return {
          hasLine: false,
          color: "#0e598d",
          // 中位线的坐标
          y: 1400,
        };
      },
    },
    // 柱体的颜色
    styleColor: {
      type: Array,
      default: function() {
        return [
          ["#51DE83AD", "#9FDE68FF"],
          ["#FAD20C", "#E7D931"],
          ["#51DE83AD", "#9FDE68FF"],
          ["#FAD20C", "#E7D931"],
          ["#51DE83AD", "#9FDE68FF"],
          ["#FAD20C", "#E7D931"],
          ["#51DE83AD", "#9FDE68FF"],
          ["#FAD20C", "#E7D931"],
        ];
      },
    },
    // 柱子宽度
    barWidth: {
      type: Number,
      default: 30,
    },
    // 是否在柱子上方显示数值
    showNum: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    // 根据参数决定显示与隐藏
    isShowLine() {
      if (this.showLine.hasLine) {
        return [
          {
            name: "Y 轴值为" + this.showLine.y + "的水平线",
            yAxis: this.showLine.y,
          },
        ];
      } else {
        return [
          {
            name: "Y 轴值为 0 的水平线",
            yAxis: 0,
          },
        ];
      }
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
      let that = this;
      this.chart = echarts.init(this.$refs.chartPie);
      // 把配置和数据放这里
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        // legend: {
        //     data: ['进', '出'],
        //     // padding: 0,
        //     // itemGap: 3,
        //     // left: '50%',
        //     // itemWidth: 5,
        //     // itemHeight: 5,
        //     textStyle: {
        //         color: '#485673'
        //     }

        // },
        grid: {
          top: "22%",
          left: "2%",
          right: "2%",
          bottom: "4%",
          containLabel: true,
        },
        yAxis: {
          type: "value",
          name: "人次",
          minInterval: 1,
          nameTextStyle: {
            color: "#fff",
            /*  fontSize: 16,
            padding: 10, */
          },
          axisLabel: {
            interval: 0,
            formatter: "{value}" + this.paramY.unit,
            textStyle: {
              fontSize: 12,
              color: "#fff",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "solid",
              color: "#0e598d",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
            lineStyle: {},
          },
        },
        xAxis: {
          type: "category",
          data: this.bindData[0],

          axisLabel: {
            interval: 0,
            rotate: 0,
            textStyle: {
              fontSize: 12,
              color: "rgba(46,215,251,1)",
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              type: "solid",
              color: "#0e598d",
            },
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#485673",
            },
          },
        },
        series: [
          {
            name: "人次",
            type: "bar",
            // stack: '总量',
            barWidth: that.barWidth, //柱图宽度
            data: this.bindData[1],
            markLine: {
              symbol: ["none", "none"], //去掉箭头
              itemStyle: {
                normal: {
                  lineStyle: { type: "solid", color: this.showLine.color },
                  label: { show: false, position: "right" },
                },
              },
              data: this.isShowLine,
            },
            itemStyle: {
              normal: {
                label: {
                  show: this.showNum, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 8,
                  },
                },
                color: function(params) {
                  var index = params.dataIndex;
                  if (params.dataIndex >= that.styleColor.length) {
                    index = params.dataIndex - that.styleColor.length;
                  }
                  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: that.styleColor[index][0],
                    },
                    {
                      offset: 1,
                      color: that.styleColor[index][1],
                    },
                  ]);
                },
              },
            },
          },

          // {
          //     name: '出',
          //     type: 'bar',
          //     // stack: '总量',
          //     data: this.bindData[2],
          //     itemStyle: {
          //         normal: {
          //             color: new echarts.graphic.LinearGradient(
          //                 0, 0, 0, 1,
          //                 [{
          //                         offset: 0,
          //                         color: '#98FFC8'
          //                     },
          //                     {
          //                         offset: 0.2,
          //                         color: '#79FFCA'
          //                     },
          //                     {
          //                         offset: 0.4,
          //                         color: '#03EF81'
          //                     },
          //                     {
          //                         offset: 0.6,
          //                         color: '#019D59'
          //                     },
          //                     {
          //                         offset: 0.8,
          //                         color: '#01893B'
          //                     },
          //                     {
          //                         offset: 1,
          //                         color: '#044F1B'
          //                     }
          //                 ]
          //             )
          //         }
          //     }
          // },
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
