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
    // Y轴的单位
    paramY: {
      type: Object,
      default: function() {
        return {
          unitY: "",
          titleY: "",
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
          namePadding: 0,
        };
      },
    },
    // 设置图的位置
    position: {
      type: Object,
      default: function() {
        return {
          gridBottom: "3%",
          bottom: "77%",
          left: "70%",
        };
      },
    },
  },
  data() {
    return {
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
  computed: {
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
  methods: {
    initChart() {
      let that = this;
      this.chart = echarts.init(this.$refs.myEchart);
      // 把配置和数据放这里
      var legendlist = [];
      var d = [];
      this.bindData[1].forEach((v) => {
        legendlist.push(v.name);
        d.push({
          name: v.name,
          type: "line",
          data: v.value,
          symbol: "none",
          markLine: {
            symbol: ["none", "none"], //去掉箭头
            itemStyle: {
              normal: {
                lineStyle: { type: "dashed", color: that.showLine.color },
                label: { show: false, position: "right" },
              },
            },
            data: that.isShowLine,
          },
        });
      });

      this.chart.setOption({
        color: [
          "#0168B9FF",
          "#EC991FFF",
          "#E158FF",
          "#58FFFF",
          "#4A5FDF",
          "#F5BD93",
          "#58BBFF",
          "#F4F386",
          "#77FF58",
          "#397B97",
        ],
        legend: {
          icon: "circle",
          /*  formatter: ["{a|{name}}", "{b|{name}}"].join("\n"),
          rich: {
            a: {
              width: 100,
              color: "red",
              lineHeight: 10,
            },
            b: {
              backgroundColor: {
                image: "xxx/xxx.jpg",
              },
              height: 40,
            },
          }, */

          data: legendlist,
          orient: "horizontal",
          // top: "-3%",
          // right: "5%",
          // right: that.showLine.right,
          // right: 6,
          bottom: this.position.bottom,
          left: this.position.left,
          // top: -10,
          textStyle: {
            color: function(color) {
              return color;
            },
          },
        },
        tooltip: {
          trigger: "axis",
          top: "10%",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "2%",
          right: "5%",
          bottom: this.position.gridBottom,
          top: "20%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            axisLine: {
              show: false,
            },
            //data: this.xData,
            data: this.bindData[0],
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                // color: '#2ed7fb'
                color: "#FFFFFF",
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: this.paramY.titleY,
            nameTextStyle: {
              //y轴上方单位的颜色
              color: "#fff",
              padding: this.showLine.namePadding,
            },
            /*   position: "top", //位置靠左
            nameLocation: "center", //位置居中
            nameGap: 60, //与y轴距离
            nameRotate: 0, //角 */
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(1, 104, 185, 0.5)",
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(255,255,255,0.5)",
              },
            },

            color: ["rgba(1, 104, 185, 0.5)"],
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              formatter: "{value}" + this.paramY.unitY,
              textStyle: {
                color: "#fff",
              },
            },
          },
        ],
        series: d,
      });
    },
  },
};
</script>
<style scoped lang="less"></style>
