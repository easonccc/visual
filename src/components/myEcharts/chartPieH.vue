<template>
  <div class="chart">
    <div class="pie" ref="chartPie"></div>
    <div class="tips">
      <div class="tips_one" v-for="(item, index) in bindData" :key="index">
        <div class="one" :style="{ 'background-color': colors[index] }"></div>
        <div class="two">{{ item.name }}</div>
        <div class="three">
          {{ item.value == 0 ? "0" : ((item.value / total) * 100).toFixed(2) }}%
        </div>
        <div class="three" v-if="item.value2">
          {{ item.value2 }} {{ type ? type : "万元" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// require('echarts/theme/macarons');
export default {
  name: "VChartPie",
  data() {
    return {
      colors: [
        "#FF106E",
        "#03AEEF",
        "#FFAB61",
        "#35E998",
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
      chart: null
    };
  },
  props: {
    type: {
      type: String,
      default: "all"
    },
    bindData: {
      type: Array,
      default: function(value) {
        return [
          {
            name: "正面",
            value: 36000
          },
          {
            name: "中性",
            value: 48000
          },
          {
            name: "负面",
            value: 16000
          }
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
  computed: {
    total() {
      let total = 0;
      this.bindData.forEach(v => {
        total += parseInt(v.value);
      });
      return total;
    }
  },
  methods: {
    initChartPie(data) {
      // let that=this;
      this.chart = echarts.init(this.$refs.chartPie);

      // 把配置和数据放这里
      let option = {
        // backgroundColor: "#2c343c",
        title: {
          //   text: "南丁格尔玫瑰图",
          left: "center",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            //colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "80%",
            center: ["50%", "50%"],
            color: ["#EC991F", "#9132E6", "#F06260"], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: [
              { value: 24, name: "0-18岁" },
              { value: 22, name: "18-30岁" },
              { value: 18, name: "30-40岁" },
              { value: 16, name: "40-50岁" },
              { value: 14, name: "50-60岁" },
              { value: 6, name: "≥60岁" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",

            label: {
              // show: true,
              color: "red",
              normal: {
                formatter: ["{c|{c}%}"].join("\n"),
                rich: {
                  c: {
                    fontSize: 10,
                    fontWeight: 300,
                    lineHeight: 3
                  }
                  /*  b: {
                    color: "rgb(98,137,169)",
                    fontSize: 12,
                    height: 40
                  } */
                }
              }
            },
            labelLine: {
              show: false,
              color: "red",

              lineStyle: {
                color: "rgb(98,137,169)"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              normal: {
                // shadowColor: "rgba(0, 0, 0, 0.8)",
                // shadowBlur: 50,
                // 标签的显示与否
                label: {
                  show: true
                },
                labelLine: {
                  show: true,
                  length: 3
                },
                textStyle: {
                  fontWeight: 200,
                  fontSize: 7 //文字的字体大小
                }
              }
            }
          }
        ]
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

<style scoped lang="less">
.chart {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;

  .pie {
    flex: 1;
    width: 100%;
    height: 100%;
  }
}
.tips {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-left: 0.4rem;
  .total {
    width: 100%;
    text-align: left;
    height: 0.45rem;
    font-size: 0.32rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 0.45rem;
  }
  .tips_one {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .one {
      width: 0.34rem;
      height: 0.34rem;
      border-radius: 50%;
      margin-right: 0.2rem;
    }
    .two {
      flex: 1;
      text-align: left;
      height: 0.56rem;
      font-size: 0.4rem;
      font-weight: 400;
      color: rgba(247, 248, 250, 1);
      line-height: 0.56rem;
    }
    .three {
      flex: 1;
      text-align: left;
      height: 0.56rem;
      font-size: 0.4rem;
      font-weight: 400;
      color: rgba(247, 248, 250, 1);
      line-height: 0.56rem;
    }
  }
}
</style>
