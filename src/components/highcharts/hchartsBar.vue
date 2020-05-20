<template>
  <div :style="{'height':height,'width':width,}" ref="myEchart"></div>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: "100%"
      },
      height: {
        type: String,
        default: "100%"
      }
    },
    data() {
      return {
        chart: null,
        colors: ["#58CF66", "#FE8F29", "#5990FF"]
      };
    },
    beforeDestroy() {
      if (!this.chart) {
        return;
      }
      // this.chart.destory();
      this.chart = null;
    },
    mounted() {
      this.initChart();
    },
    methods: {
      initChart() {
        var options = {
          chart: {
            type: "column",
            backgroundColor: "transparent"
          },
          legend: {
            itemStyle: {
              cursor: 'pointer',
              color: '#fff'
            },
            itemHoverStyle: {
              color: '#fff'
            }
          },
          title: {
            text: ""
          },
          xAxis: {
            categories: ["苹果", "橘子", "梨", "葡萄", "香蕉"],
            labels: {
              style: {
                color: "#fff",
                fontSize: "10px",
                fontFamily: "微软雅黑"
              }
            }
          },
          yAxis: {
            labels: {
              style: {
                color: "#fff",
                fontSize: "10px",
                fontFamily: "微软雅黑"
              }
            }
          },
          series: [{
              name: "环比数据",
              data: [5, 3, 4, 7, 2]
            },
            {
              name: "当下数据",
              data: [2, -2, -3, 2, 1]
            },
            {
              name: "同比数据",
              data: [3, 4, 4, -2, 5]
            }
          ]
        };
        // 图表初始化函数
        //   var chart = Highcharts.chart(this.$refs.myEchart, options);
        this.chart = new Highcharts.Chart(this.$refs.myEchart, options);
      }
    }
  };
</script>

<style lang="less" scoped>
</style>