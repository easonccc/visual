<template>
  <div class="trend" ref="chartLine"></div>
</template>
<script>
export default {
  name: "indexTrend",
  props: {
    bindData: {
      type: Array,
      default: function(value) {
        return [
          [
            "20181106",
            "20181107",
            "20181108",
            "20181109",
            "20181110",
            "20181111",
            "20181112",
          ],
          [365, 236, 422, 356, 568, 398, 577, 399, 422, 900],
        ];
      },
    },
    describe: {
      type: String,
      default: "人次",
    },
  },
  mounted() {
    this.initChartLine();
  },
  watch: {
    bindData: function() {
      this.initChartLine();
    },
  },
  methods: {
    initChartLine() {
      this.chart = echarts.init(this.$refs.chartLine);
      let option = {
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: "3%",
          right: "5%",
          top: "22%",
          bottom: "3%",
          containLabel: true,
        },
        calculable: true,
        xAxis: {
          type: "category",
          // 折线图从X轴0刻度开始
          boundaryGap: false,
          axisLine: {
            show: true,
            // x轴坐标的字体颜色
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
            alignWithLabel: true,
            color: "#fff",
          },
          data: this.bindData[0],
        },

        yAxis: [
          {
            name: this.describe,
            type: "value",
            // 设置y轴的最大刻度
            // max: 500,
            splitLine: {
              show: true,
              //   横线颜色及类型
              lineStyle: {
                type: "solid",
                color: "rgba(255,255,255,0.5)",
              },
            },
            color: ["#fff"],
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              //   y轴上的字体颜色
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              show: false,
              // y轴主轴颜色
              lineStyle: {
                color: "#fff",
              },
            },
          },
        ],
        series: [
          {
            name: this.describe,
            type: "line",
            smooth: true,
            // 去掉线上的小圆点
            symbol: "none",
            lineStyle: {
              normal: {
                color: "#08a2e0", // 线条颜色
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "#034874",
                    },
                    {
                      offset: 1,
                      color: "#034874",
                    },
                  ],
                  false
                ),
                shadowColor: "#034874",
                shadowBlur: 10,
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
<style scoped lang="less">
.trend {
  width: 100%;
  height: 100%;
}
</style>
