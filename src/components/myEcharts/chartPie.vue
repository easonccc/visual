<template>
  <div class="chart">
    <div class="pie" ref="chartPie"></div>
    <div class="tips">
      <div
        v-for="(item, index) in bindData"
        :key="index"
        v-show="item.show != false"
      >
        <div>
          <span
            class="round"
            :style="{ 'background-color': colors[index] }"
          ></span>
        </div>
        <div style="text-align:left">
          <span class="name" :style="{ color: colors[index] }">{{
            item.name
          }}</span>
        </div>
        <div>
          <span class="data" v-if="type == 'value' || type == 'all'"
            >{{
              item.value > 10000
                ? (parseInt(item.value) / 10000).toFixed(2) + ""
                : item.value
            }}人</span
          >
        </div>
        <div>
          <span class="percent" v-if="type == 'percent' || type == 'all'"
            >{{
              item.value == 0 ? "0" : ((item.value / total) * 100).toFixed(2)
            }}%</span
          >
        </div>
        <div class="compare" v-if="showRatio">
          <span>同比:-25%</span> <img src="../../assets/img/down.png" alt="" />
        </div>
        <div class="compare" v-if="showRatio">
          <span>环比:+25%</span> <img src="../../assets/img/up.png" alt="" />
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
        "#c14089",
      ],
      chart: null,
    };
  },
  props: {
    type: {
      type: String,
      default: "all",
    },
    bindData: {
      type: Array,
      default: function() {
        return [
          {
            name: "正面",
            value: 36000,
          },
          {
            name: "中性",
            value: 48000,
          },
          {
            name: "负面",
            value: 16000,
          },
        ];
      },
    },
    showRatio: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.initChartPie(this.bindData);
  },
  /*  watch: {
    bindData: function(newValue) {
      this.initChartPie(newValue);
    },
  }, */
  computed: {
    total() {
      let total = 0;
      this.bindData.forEach((v) => {
        total += parseInt(v.value);
      });
      return total;
    },
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
            color: "#ccc",
          },
        },

        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)",
        },

        visualMap: {
          show: false,
          min: 500,
          max: 600,
          inRange: {
            //colorLightness: [0, 1]
          },
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "90%",
            center: ["50%", "50%"],
            color: ["#EC991F", "#9132E6", "#F06260"], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: this.bindData.sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",

            label: {
              show: false,
              normal: {
                formatter: ["{c|{c}次}", "{b|{b}}"].join("\n"),
                rich: {
                  c: {
                    color: "rgb(241,246,104)",
                    fontSize: 20,
                    fontWeight: "bold",
                    lineHeight: 5,
                  },
                  b: {
                    color: "rgb(98,137,169)",
                    fontSize: 15,
                    height: 20,
                  },
                },
              },
            },
            labelLine: {
              show: false,
              normal: {
                lineStyle: {
                  color: "rgb(98,137,169)",
                },
                smooth: 0.2,
                length: 10,
                length2: 15,
              },
            },
            itemStyle: {
              normal: {
                // shadowColor: "rgba(0, 0, 0, 0.8)",
                // shadowBlur: 50,
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
          },
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
.chart {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  flex-direction: column;
  .pie {
    flex: 1;
    width: 100%;
    height: 100%;
  }
}
.compare {
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 0.25rem;
    height: 0.24rem;
    margin-left: 1rem;
  }
}
.tips {
  .round {
    width: 100%;
    height: 6px;
    display: block;
  }
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    font-size: 0.4rem;
    padding: 0.15rem;
    color: #fff;
  }
}
</style>
