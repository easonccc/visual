<template>
  <div class="content">
    <v-commonTitle title="旅游服务满意度数据驾驶舱"></v-commonTitle>
    <div class="lr">
      <div class="left">
        <div class="left_t box">
          <div class="numBox">
            <div class="numBox_l">舆情总量(条):</div>
            <div class="numBox_r">时间:2018年11月3日</div>
          </div>
          <div class="itemBox">
            <div v-for="(v,i) in numArr1" :key="i">{{v}}</div>
          </div>
        </div>
        <div class="left_m box">
          <div class="box-head">
            <span class="dot"></span>
            <span>团散比例</span>
          </div>
          <chart-pie></chart-pie>
        </div>
        <div class="left_b box">
          <chart-circle :bindData="phone" type="value"></chart-circle>
        </div>
      </div>
      <div class="right">
        <div class="right_l box">
          <div class="box-head">
            <span class="dot"></span>
            <span>舆情列表</span>
          </div>
          <div class="yqBox">
            <div class="box2">
              <div class="title">正面舆情</div>
              <table-diy :bindData="tableData1"></table-diy>
            </div>
            <div class="box2">
              <div class="title">中性舆情</div>
              <table-diy :bindData="tableData2"></table-diy>
            </div>
            <div class="box2">
              <div class="title">负面舆情</div>
              <table-diy :bindData="tableData3"></table-diy>
            </div>
          </div>
        </div>
        <div class="right_r box">
          <div class="right_r_t">
            <div class="title2">舆情扩散图</div>
            <div class="flexBox">
              <chart-force />
            </div>
          </div>
          <div class="right_r_b">
            <div class="title2">舆情扩散趋势</div>
            <chart-line />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ChartPie from "../components/myEcharts/chartPie";
  import ChartCircle from "../components/myEcharts/chartCircle";
  import ChartForce from "../components/myEcharts/chartForce";
  import ChartLine from "../components/myEcharts/chartLine2";
  import TableDiy from "../components/table/tableDiy";

  export default {
    name: "page1",
    data() {
      return {
        numArr1: ["-", "-", "-", "2", "3", "5", "4", "2", "9"],
        phone: [{
            name: "苹果",
            value: 2654
          },
          {
            name: "华为",
            value: 2312
          },
          {
            name: "小米",
            value: 1842
          },
          {
            name: "vivo",
            value: 1112
          },
          {
            name: "oppo",
            value: 568
          }
        ],
        tableData1: {
          showIndex: false,
          headData: ["发表时间", "舆情类别", "平台", "内容"],
          tableData: [{
              city: "成都",
              pro: "四川省",
              area: "西南",
              level: "新一线城市",
              active: false
            },
            {
              city: "深圳",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "西安",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "杭州",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "重庆",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: true
            },
            {
              city: "武汉",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "郑州",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "苏州",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            }
          ],
          thbg: "rgba(240,98,96,0.3)",
          tdbg: "rgba(46,217,253,0.2)",
          tdbor: "0.02rem solid rgba(240,98,96,1)"
        },
        tableData2: {
          showIndex: false,
          headData: ["发表时间", "舆情类别", "平台", "内容"],
          tableData: [{
              city: "成都",
              pro: "四川省",
              area: "西南",
              level: "新一线城市",
              active: false
            },
            {
              city: "深圳",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "西安",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "杭州",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "重庆",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: true
            },
            {
              city: "武汉",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "郑州",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "苏州",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            }
          ],
          thbg: "rgba(240,98,96,0.3)",
          tdbg: "rgba(236,153,31,0.2)",
          tdbor: "0.02rem solid rgba(236,153,31,1)"
        },
        tableData3: {
          showIndex: false,
          headData: ["发表时间", "舆情类别", "平台", "内容"],
          tableData: [{
              city: "成都",
              pro: "四川省",
              area: "西南",
              level: "新一线城市",
              active: false
            },
            {
              city: "深圳",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "西安",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "杭州",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "重庆",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: true
            },
            {
              city: "武汉",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "郑州",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            },
            {
              city: "苏州",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: false
            }
          ],
          thbg: "rgba(31,108,255,0.3)",
          tdbg: "rgba(31,108,255,0.2)",
          tdbor: ":0.02rem solid rgba(31,108,255,1)"
        }
      };
    },
    components: {
      ChartPie,
      ChartCircle,
      ChartForce,
      ChartLine,
      TableDiy
    }
  };
</script>

<style lang="less" scoped>
  .lr {
    flex: 1;
    display: flex;
    height: 100%;
  }

  .numBox {
    display: flex;
    justify-content: space-between;
    color: #fff;

    &_l {
      font-size: 0.4rem;
    }

    &_r {
      font-size: 0.32rem;
    }
  }

  .itemBox {
    display: flex;
    justify-content: space-between;
    margin: 0.4rem;

    >div {
      font-family: "lcd";
      color: #fff;
      padding: 0.2rem;
      padding-right: 0.3rem;
      background: rgba(24, 62, 95, 0.6);
      box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
        0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
      display: flex;
      align-items: center;
      font-size: 2rem;
    }
  }

  .left {
    width: 23%;
    display: flex;
    flex-direction: column;
    margin-right: 0.4rem;

    >div {
      margin-bottom: 0.4rem;

      &:nth-child(n + 2) {
        flex: 1;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &_t {
      height: 12.5%;
    }
  }

  .right {
    flex: 1;
    display: flex;

    &_l {
      width: 45%;
      margin-right: 0.4rem;

      .yqBox {
        .box2 {
          &:nth-child(1) .title {
            color: #f06260;
          }

          &:nth-child(2) .title {
            color: #ec991f;
          }

          &:nth-child(3) .title {
            color: #1f6cff;
          }

          .title {
            text-align: center;
            font-size: 0.32rem;
            padding: 0.2rem 0;
          }

          background: rgba(3, 65, 109, 1);
          border: 0.01rem solid rgba(255, 255, 255, 0.2);
          margin-bottom: 0.4rem;
        }
      }
    }

    &_r {
      flex: 1;
      display: flex;
      flex-direction: column;

      .title2 {
        color: #f06260;
        font-size: 0.32rem;
        padding: 0.2rem;
      }

      &_t {
        height: 80%;
        display: flex;
        flex-direction: column;
        .flexBox {
          flex:1;
        }
      }

      &_b {
        flex: 1;
        border-top: 1px solid #FF5858;
      }
    }
  }
</style>