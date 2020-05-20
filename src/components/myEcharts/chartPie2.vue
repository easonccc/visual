<template>
  <div class="chart">
    <div class="pie" ref="chartPie"></div>
    <div class="tips">
      <table>
        <tr
          v-for="(item, index) in bindData"
          :key="index"
          v-show="item.show != false"
        >
          <td>
            <span
              class="round"
              :style="{ 'background-color': colors[index] }"
            ></span>
          </td>
          <td style="text-align:left">
            <span class="name" :style="{ color: colors[index] }">{{
              item.name
            }}</span>
          </td>
          <td>
            <span class="data" v-if="type == 'value' || type == 'all'">{{
              item.value > 10000
                ? (parseInt(item.value) / 10000).toFixed(2) + "万"
                : item.value
            }}</span>
          </td>
          <td>
            <span class="percent" v-if="type == 'percent' || type == 'all'"
              >{{
                item.value == 0 ? "0" : ((item.value / total) * 100).toFixed(2)
              }}%</span
            >
          </td>
          <td>条</td>
        </tr>
      </table>
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
        "#BA4BF7",
        "#2783F0",
        "#FE7F0F",
        "#12E3DB",
        "#FF5858",
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
            name: "论坛",
            value: 390
          },
          {
            name: "评论",
            value: 180
          },
          {
            name: "微博",
            value: 110
          },
          {
            name: "微信平台",
            value: 240
          },
          {
            name: "新闻网站",
            value: 240
          }
        ];
      }
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
  mounted() {
    this.initChartPie(this.bindData);
  },
  watch: {
    bindData: function(newValue) {
      this.initChartPie(newValue);
    }
  },
  methods: {
    initChartPie(data) {
      // let that=this;
      this.chart = echarts.init(this.$refs.chartPie);

      // 把配置和数据放这里
      let option = {
        // legend: {
        //   // orient: 'vertical',
        //   x: "center",
        //   // left:'70%',
        //   y: "bottom",
        //   data: this.bindData,
        //   textStyle: {
        //     color: "#fff"
        //   },
        //   formatter: function(a) {
        //     return a;
        //   }
        // },
        graphic: [
          {
            //环形图中间添加文字
            type: "text", //通过不同top值可以设置上下显示
            left: "center",
            top: "45%",
            style: {
              // text: "经营比例",
              textAlign: "center",
              fill: "white", //文字的颜色
              width: 30,
              height: 30,
              fontSize: 26,
              fontFamily: "Microsoft YaHei"
            }
          }
        ],

        // tooltip: {
        //   trigger: "item",
        //   formatter: "{b}:{c}({d}%)"
        // },

        series: [
          {
            name: "数量",
            type: "pie",
            radius: ["65%", "85%"],
            center: ["50%", "45%"],
            avoidLabelOverlap: false,
            /*   label: {
              // normal: {
              //   show: true,
              //   position: "outside",
              //   formatter: "{d}%"
              // },
              // emphasis: {
              //   show: true,
              //   textStyle: {
              //     fontSize: "15",
              //     color: "#fff"
              //   }
              // }
            }, */
            itemStyle: {
              normal: {
                label: {
                  // 不显示标签
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: params => {
                  // console.log(params)
                  return this.colors[params.dataIndex];
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            data: data
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
  flex-direction: column;
  .pie {
    flex: 1;
    width: 100%;
    height: 100%;
  }
}
.tips {
  .round {
    border-radius: 50%;
    width: 0.36rem;
    height: 0.36rem;
    display: block;
  }
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  td {
    font-size: 0.38rem;
    padding: 0.4rem;
    color: #fff;
  }
}
</style>
