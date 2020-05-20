<template>
  <div class="box-body">
    <div class="pie" ref="chartPie"></div>
    <div class="tips">
      <table>
        <tr
          v-for="(item, index) in bindData"
          :key="index"
          :style="{ height: lineHeight }"
          v-if="item.show != false"
        >
          <td>
            <span
              class="dot"
              :style="{ 'background-color': colors[index] }"
            ></span>
          </td>
          <td>
            <span class="name">{{ item.name }}</span>
          </td>
          <td>
            <span class="data" v-if="type == 'value' || type == 'all'">{{
              item.value > 10000
                ? (parseInt(item.value) / 10000).toFixed(2) + "条"
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
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexPercent",
  data() {
    return {
      colors: [
        "#03A5E4",
        "#FFAB61",
        "#9B04F9",
        "#45F0EA",
        "#d87a80",
        "#8d98b3",
        "#e5cf0d",
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
      chartPie: null
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
        return value;
      }
    }
  },
  mounted() {
    this.initChartPie(this.bindData);
  },
  computed: {
    total() {
      let total = 0;
      this.bindData.forEach(v => {
        total += parseInt(v.value);
      });
      return total;
    },
    lineHeight() {
      let l = this.bindData.length;
      if (l < 3) {
        return "70px";
      } else if (l >= 3 && l < 7) {
        return "40px";
      } else {
        return "20px";
      }
    }
  },
  methods: {
    initChartPie(data) {
      this.chartPie = echarts.init(this.$refs.chartPie, "macarons");
      // 把配置和数据放这里
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{b}:{c}({d}%)",
          position: ["2%", "50%"]
        },
        series: [
          {
            name: "游客数量",
            type: "pie",
            radius: ["65%", "80%"],
            itemStyle: {
              normal: {
                label: {
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
      this.chartPie.setOption(option);
    }
  }
};
</script>

<style scoped lang="less">
.box-body {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
}

.pie {
  width: 40%;
  height: 100%;
  margin-left: 20px;
  background-color: #fff;
}

.tips {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .dot {
    width: 4px;
    height: 12px;
    margin-right: 10px;
    display: inline-block;
    background-color: #fff;
    position: relative;
    top: 2px;
  }

  table {
    width: 100%;

    tr {
      td {
        vertical-align: middle;
        // height: 30px;
        color: #fff;
        font-size: 0.4rem;
      }
    }
  }
}

/*对宽度小于1800的屏幕进行适配*/
@media (max-width: 1800px) {
  .tips {
    .pull-right {
      margin-top: 5px;
    }
  }
}

@media (max-width: 1050px) {
  .pie {
    display: none;
  }

  .tips {
    margin-left: 10px;
  }
}
</style>
