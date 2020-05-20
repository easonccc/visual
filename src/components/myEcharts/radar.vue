<template>
  <div :style="{'height':height,'width':width,}" ref="myEchart" class="myEchart"></div>
</template>
<script>
export default {
  name: "chartLine",
  props: {
    width: {
      type: String,
      default: "40%"
    },
    height: {
      type: String,
      default: "105px"
    },
    indicator: {
      type: Array,
      default: function(value) {
        return [
          { name: "价格 ", max: 6500 },
          { name: "服务", max: 6500 },
          { name: "口味", max: 6500 },
          { name: "卫生", max: 6500 },
          { name: "环境", max: 6500 }
        ];
      }
    },
    bindData: {
      type: Object,
      default: function(value) {
        return {
          xData: ["2019-09-01", "2019-09-10", "2019-09-17", "2019-09-30"],
          legendData: ["巫山小三峡", "酉阳桃花源", "万州大瀑布"],
          lines: [
            [220, 310, 256, 326],
            [80, 186, 186, 200],
            [120, 210, 156, 226]
          ]
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
      this.chart = echarts.init(this.$refs.myEchart);
      // 配置和数据
      let color = ["rgba(104, 147, 255", "rgba(88, 207, 102"];

      let option = {
        title: {
          text: ""
        },
        tooltip: {},
        // legend: {
        //   data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"]
        // },
        radar: {
          // shape: 'circle',
          radius: 20,
          name: {
            textStyle: {
              color: "#fff",
              // backgroundColor: '#fff',
              borderRadius: 3,
              padding: [3, 5],
              fontSize: 10
            }
          },
          indicator: this.indicator,
          splitArea: {
            show: true,
            areaStyle: {
              color: ["rgba(219,231,255,0.8)"] // 图表背景网格的颜色
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            name: "",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [3000, 3000, 3000, 3000, 5000],
                name: "满意度",
                areaStyle: {
                  normal: {
                    // 单项区域填充样式
                    color: "rgba(89,144,255,0.5)",
                    opacity: 1 // 区域透明度
                  }
                },
                symbolSize: 5
              }
            ]
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
.myEchart {
  transform: rotateZ(-30deg);
}
</style>
