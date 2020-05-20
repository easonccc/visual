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
          type: "spline",
          backgroundColor: "transparent",
          marginRight: 60 //右边间距
        },
        title: {
          text: ""
        },
        // subtitle: {
        //   text: "2009年10月6日和7日两地风速情况"
        // },
        xAxis: {
          type: "datetime",
          labels: {
            overflow: "justify",
            style: {
              color: "#fff",
              fontSize: "10px",
              fontFamily: "微软雅黑"
            }
          }
        },
        yAxis: {
             labels: {
            overflow: "justify",
            style: {
              color: "#fff",
              fontSize: "10px",
              fontFamily: "微软雅黑"
            }
          },
          //   title: {
          //     text: "风 速 (m/s)"
          //   },
          min: 0,
          minorGridLineWidth: 0,
          gridLineWidth: 0,
          alternateGridColor: null,
          plotBands: [
            {
              // Light air
              from: 0,
              to: 3500,
              color: "rgba(88,207,102,0.5)",
              label: {
                text: "车位充足",
                align: "right",
                x: 50,
                style: {
                  color: "#fff"
                }
              }
            },
            {
              // Light breeze
              from: 3500,
              to: 7200,
              color: "rgba(252,143,43,0.5)",
              label: {
                text: "橙色预警",
                align: "right",
                x: 50,
                style: {
                  color: "#fff"
                }
              }
            },
            {
              // Gentle breeze
              from: 7200,
              to: 10000,
              color: "rgba(246,12,32,0.5)",
              label: {
                text: "红色预警",
                align: "right",
                x: 50,
                style: {
                  color: "#fff"
                }
              }
            }
          ]
        },
        // tooltip: {
        //   valueSuffix: " 停车辆"
        // },
        plotOptions: {
          spline: {
            lineWidth: 4,
            states: {
              hover: {
                lineWidth: 5
              }
            },
            marker: {
              //   enabled: false
              //   radius: 2
            },
            pointInterval: 3600000, // one hour
            pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
          },
          areaspline: {
            color: "#rgba(255, 186, 0, 0.2)",
            lineColor: "#fff",
            fillOpacity: 0.2
          }
        },
        series: [
          {
            name: "Hestavollane",
            data: [
              4003,
              5001,
              4003,
              5002,
              5004,
              4007,
              3005,
              4001,
              5006,
              7004,
              6009,
              7001,
              7009,
              7009,
              7005,
              6007,
              7007,
              7007,
              7004,
              7000,
              7001,
              5008,
              5009,
              7004,
              8002,
              8005,
              9004,
              8001,
              1009,
              1004,
              1009,
              1004,
              1201,
              9005,
              7005,
              7001,
              7005,
              8001,
              6008,
              3004,
              2001,
              1009,
              2008,
              2009,
              1003,
              4004,
              4002,
              3000,
              3000
            ]
          }
        ],
        navigation: {
          menuItemStyle: {
            fontSize: "10px"
          }
        }
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