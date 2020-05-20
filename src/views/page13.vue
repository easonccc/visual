<template>
  <div class="content">
    <v-commonTitle title="旅游服务满意度数据驾驶舱"></v-commonTitle>
    <div class="lr">
      <div class="left">
        <div class="left_t box calendar">
          <div class="box-head">
            <span class="dot"></span>
            <span>节庆日历</span>
          </div>
          <lunar-full-calendar :events="events" :config="config" style='height:100%'></lunar-full-calendar>
        </div>
        <div class="left_m box">
          <div class="box-head">
            <span class="dot"></span>
            <span>节日期间客流情况</span>
          </div>
          <chart-linec :colorArr="colorArr2" />
        </div>
        <div class="left_b box">
          <div class="box-head">
            <span class="dot"></span>
            <span>节日期间消费情况</span>
          </div>
          <div class="itemBox">
            <div v-for="(v,i) in itemArr" :key="i">
              <div class="item_l">{{v.name}}</div>
              <div class="item_r">
                <div class="t">
                  <div>总额:</div>
                  <div class="numBox">
                    <div v-for="(v,i) in numArr1" :key="i">{{v}}</div>
                  </div>
                  <div>元</div>
                </div>
                <div class="m">
                  <img src="../assets/img/up.png" />
                  <div>21.04%</div>
                </div>
                <div class="b">
                  <div>人均:</div>
                  <div class="numBox">
                    <div v-for="(v,i) in numArr1" :key="i">{{v}}</div>
                  </div>
                  <div>元</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right_l">
          <div class="right_l_t box">
            <div class="box-head">
              <span class="dot"></span>
              <span>节庆活动列表</span>
            </div>
            <table-diy></table-diy>
          </div>
          <div class="right_l_m box">
            <div class="box-head">
              <span class="dot"></span>
              <span>节日期间车流情况</span>
            </div>
            <chart-line2 />
          </div>
          <div class="right_l_b box">
            <div class="box-head">
              <span class="dot"></span>
              <span>节日期间酒店销售情况</span>
            </div>
            <chart-linec :colorArr="colorArr1" />
          </div>
        </div>
        <div class="right_r">
          <div class="right_r_t">
            <div class="right_r_t_t box">
              <div class="box-head">
                <span class="dot"></span>
                <span>节日期间搜索引擎情况</span>
              </div>
              <div class="hotWord">
                <span>关键词:</span>
                <div class="wordBox">
                  <div>巫山小三峡</div>
                  <div>酉阳桃花源</div>
                  <div>万州大瀑布</div>
                </div>
                <el-button size="medium" icon="el-icon-plus" style="height: 0.84rem;
    border: 0.01rem solid rgb(27, 178, 210);
    display: flex;
    align-items: center;
    padding: 0;
    border-radius: 0;
    color: #1BB2D2;
    background: transparent;
    font-size: 0.26rem;
    padding: 0 .34rem;">添加对比</el-button>
                <el-button size="medium" icon="el-icon-check" style="height: 0.84rem;
    border: 0.01rem solid rgb(27, 178, 210);
    display: flex;
    align-items: center;
    padding: 0;
    border-radius: 0;
    color: #1BB2D2;
    background: transparent;
    font-size: 0.26rem;
    padding: 0 .34rem;">确定查询</el-button>
              </div>
              <div class="itemBox trendTable" v-show="true">
                <!-- <div class="item" v-for="(v,i) in infoArr" :key="i">

                </div>-->
                <div class="item" v-for="(v,i) in trendArr" :key="i">
                  <Chart-line></Chart-line>
                  <div class="searchBox">
                    <div class="title2">搜索指数概览:</div>
                  </div>
                  <el-table :data="hotData" style="width:50px;max-height:50px;display: none;">
                    <el-table-column prop="name" label="关键词">
                      <template slot-scope="scope">{{scope.row.name}}</template>
                    </el-table-column>
                    <el-table-column prop="rate1" label="整体日均值"></el-table-column>
                    <el-table-column prop="rate2" label="移动日均值"></el-table-column>
                    <el-table-column prop="rate3" label="整体同比">
                      <template slot-scope="scope">
                        <div v-if="scope.row.rate3<0" class="info">
                          {{scope.row.rate3+'%'}}
                          <img src="../assets/img/down.png" />
                        </div>
                        <div v-else="scope.row.rate3<0" class="info">
                          {{scope.row.rate3+'%'}}
                          <img src="../assets/img/up.png" />
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="rate4" label="整体环比">
                      <template slot-scope="scope">
                        <div v-if="scope.row.rate4<0" class="info">
                          {{scope.row.rate4+'%'}}
                          <img src="../assets/img/down.png" />
                        </div>
                        <div v-else="scope.row.rate4<0" class="info">
                          {{scope.row.rate4+'%'}}
                          <img src="../assets/img/up.png" />
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="rate5" label="移动同比">
                      <template slot-scope="scope">
                        <div v-if="scope.row.rate5<0" class="info">
                          {{scope.row.rate5+'%'}}
                          <img src="../assets/img/down.png" />
                        </div>
                        <div v-else="scope.row.rate5<0" class="info">
                          {{scope.row.rate5+'%'}}
                          <img src="../assets/img/up.png" />
                        </div>
                      </template>
                    </el-table-column>
                    <el-table-column prop="rate6" label="移动环比">
                      <template slot-scope="scope">
                        <div v-if="scope.row.rate6<0" class="info">
                          {{scope.row.rate6+'%'}}
                          <img src="../assets/img/down.png" />
                        </div>
                        <div v-else="scope.row.rate6<0" class="info">
                          {{scope.row.rate6+'%'}}
                          <img src="../assets/img/up.png" />
                        </div>
                      </template>
                    </el-table-column>
                  </el-table>
                </div>
              </div>
            </div>
            <div class="right_r_t_b box">
              <div class="box-head">
                <span class="dot"></span>
                <span>节日期间舆情列表</span>
              </div>
              <div class="tableBox">
                <table-diy :bindData="tableData1"></table-diy>
                <table-diy :bindData="tableData2"></table-diy>
                <table-diy :bindData="tableData3"></table-diy>
              </div>
            </div>
          </div>

          <div class="right_r_b">
            <div class="right_r_b_l">
              <div class="right_r_b_l_t box">
                <div class="box-head">
                  <span class="dot"></span>
                  <span>节日期间电商OTA销售情况</span>
                </div>
                <chart-linec :colorArr="colorArr3" />
              </div>
              <div class="right_r_b_l_b box">
                <div class="box-head">
                  <span class="dot"></span>
                  <span>节日期间团队游销售情况</span>
                </div>
                <chart-bar></chart-bar>
              </div>
            </div>
            <div class="right_r_b_r box">
              <div class="box-head">
                <span class="dot"></span>
                <span>节日期间满意度情况</span>
              </div>
              <div class="radarBox">
                <radar v-for="(v,i) in 6" :key="i" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Radar from "../components/myEcharts/radar";
  import ChartLine2 from "../components/highcharts/hchartsLine";
  import ChartBar from "../components/highcharts/hchartsBar";
  import ChartLine from "../components/myEcharts/chartLineS";
  import ChartLinec from "../components/myEcharts/charLineC";
  import TableDiy from "../components/table/tableDiy";
  import {
    LunarFullCalendar
  } from "vue-lunar-full-calendar";

  export default {
    name: "page1",
    data() {
      return {
        trendArr: [1, 2, 3],
        numArr1: ["-", "-", "-", "2", "3", "5", "4", "2", "9"],
        itemArr: [{
            name: "吃"
          },
          {
            name: "游"
          },
          {
            name: "住"
          },
          {
            name: "购"
          },
          {
            name: "行"
          },
          {
            name: "娱"
          }
        ],
        colorArr1: ["rgba(225,88,255", "rgba(225,88,255"],
        colorArr2: ["rgba(255,224,88", "rgba(255,224,88"],
        colorArr3: ["rgba(28,219,154", "rgba(28,219,154"],
        hotData: [{
            rate1: "7073",
            rate2: "4930",
            rate3: -1,
            rate4: -15,
            rate5: 3,
            rate6: 21,
            name: "巫山小三峡"
          },
          {
            rate1: "7073",
            rate2: "4930",
            rate3: -1,
            rate4: -15,
            rate5: 3,
            rate6: 21,
            name: "酉阳桃花源"
          },
          {
            rate1: "7073",
            rate2: "4930",
            rate3: -1,
            rate4: -15,
            rate5: 3,
            rate6: 21,
            name: "万州大瀑布"
          }
        ],
        events: [{
          color: "rgba(9, 9, 9, 0.2)"
        }],
        //   config: {
        //     lunarCalendar: true // 控制是否显示中国农历、显示的为true，
        //     //隐藏为flase，默认为true
        //     //(Control whether the Chinese calendar shows true, unrealistic flase, default true.)                           },
        //   },
        config: {
          lunarCalendar: true,
          buttonText: {
            today: "今天",
            month: "月",
            week: "周",
            day: "日"
          },
          locale: "zh-cn",
          editable: false, //是否允许修改事件
          // selectable: false,
          // eventLimit: 4, //事件个数
          allDaySlot: false, //是否显示allDay
          defaultView: "month" //显示默认视图
          // eventClick: this.eventClick, //点击事件
          // dayClick: this.dayClick //点击日程表上面某一天
        },
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
              city: "重庆",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: true
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
              city: "重庆",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: true
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
              city: "重庆",
              pro: "广东省",
              area: "华南",
              level: "一线城市",
              active: true
            }
          ],
          thbg: "rgba(31,108,255,0.3)",
          tdbg: "rgba(31,108,255,0.2)",
          tdbor: ":0.02rem solid rgba(31,108,255,1)"
        }
      };
    },
    components: {
      Radar,
      ChartLine2,
      ChartLine,
      TableDiy,
      ChartLinec,
      ChartBar,
      LunarFullCalendar
    },
    created() {
      window.lunar("2020-2-27"); // Date is the date.
    },
    methods: {
      // 点击事件
      eventClick(event, jsEvent, pos) {
        console.log("eventClick", event, jsEvent, pos);
      },
      // 点击当天
      dayClick(day, jsEvent) {
        console.log("dayClick", day, jsEvent);
      }
    }
  };
</script>
<style lang="less">
  .el-table td,
  .el-table th {
    padding: 0 !important;
    font-size: 0.2rem;
  }

  .fc-day-grid-container {
    height: 235px !important;
  }

  .fc-basic-view .fc-body .fc-row {
    height: 55px !important;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.2rem;
    flex-direction: column;
    color: #fff;
  }

  .fc-day-grid-container {
    height: auto;
  }

  .fc-day-header span {
    color: #fff;
    font-size: 0.2rem;
  }

  .fc-day-cnDate {
    color: #fff;
  }
  .fc td.fc-today {
    color:#000;
  }
  .fc-ltr .fc-basic-view .fc-day-top .fc-day-number {
    position: absolute;
    top: 28px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.24rem;
    color: #fff;
  }

  .fc .fc-row .fc-content-skeleton td {
    position: relative;
    text-align: center;
  }

  .fc-toolbar.fc-header-toolbar {
    font-size: 0.3rem;
    color: #fff;
  }
</style>
<style lang="less" scoped>
  .tableBox {
    display: flex;

    >div {
      flex: 1;
      margin-right: 0.2rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .hotWord {
    display: flex;
    //   justify-content: space-between;
    align-items: center;
    background: #03416d;
    padding: 0.1rem;

    >span {
      margin-right: 0.32rem;
      font-size: 0.32rem;
      color: #fff;
    }

    .wordBox {
      display: flex;
      justify-content: space-between;

      >div {
        width: 4.05rem;
        height: 0.84rem;
        padding-left: 0.57rem;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        position: relative;
        color: #fff;
        font-size: 0.26rem;
        margin-right: 1.35rem;
        background: rgba(46, 217, 253, 0.2);

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 0.18rem;
        }

        &:nth-child(1) {
          border: 1px solid #58cf66;

          &::before {
            background: #58cf66;
          }
        }

        &:nth-child(2) {
          border: 1px solid #fe8f29;

          &::before {
            background: #fe8f29;
          }
        }

        &:nth-child(3) {
          border: 1px solid #5990ff;

          &::before {
            background: #5990ff;
          }
        }
      }
    }
  }

  .itemBox {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex: 1;
    width: 100%;

    .searchBox {

      //   padding: 20px 0;
      .title1 {
        color: #5990ff;
        font-size: 24px;
      }

      .title2 {
        color: #fff;
        font-size: 0.32rem;
      }
    }

    .info {
      display: flex;
      align-items: center;

      >img {
        width: 0.2rem;
        height: 0.18rem;
        margin-left: 0.1rem;
      }
    }

    .item {
      display: flex;
      flex-direction: column;
      background: rgba(3, 65, 109, 1);
      border: 0.01rem solid rgba(255, 255, 255, 0.2);
      padding: 0.33rem 0.54rem;
      margin-right: 1.38rem;

      &:last-child {
        margin-right: 0;
      }

      flex: 1;

      .title {
        color: #ffffff;
        font-size: 0.32rem;
      }
    }
  }

  .lr {
    flex: 1;
    display: flex;
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
      height: 46%;
    }

    &_b {
      .itemBox {
        display: flex;
        flex-wrap: wrap;

        >div {
          flex: 45%;
          width: 48%;
          margin-right: 0.4rem;
          display: flex;
          align-items: center;

          .m {
            display: flex;
            justify-content: center;

            img {
              width: 0.24rem;
              height: 0.24rem;
              margin-right: 0.2rem;
            }
          }

          >div:first-child {
            width: 1.54rem;
            height: 1.54rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.36rem;
            color: #fff;
          }

          >div:last-child {
            // padding: 0.2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-size: 0.2rem;
            color: #fff;

            >div {
              display: flex;
            }

            .numBox {
              font-family: "lcd";
              font-size: 0.24rem;
              display: flex;
              justify-content: space-between;
              margin: 0.1rem;
              color: #fff;

              >div {
                padding: 0.15rem;
                padding-right: 0.2rem;
                background: rgba(24, 62, 95, 0.6);
                box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
                  0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
                display: flex;
                align-items: center;
              }
            }
          }

          &:nth-child(2n) {
            margin-right: 0;
          }
        }
      }
    }
  }

  .right {
    flex: 1;
    display: flex;

    &_l {
      width: 45%;
      margin-right: 0.4rem;
      display: flex;
      flex-direction: column;

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
        height: 46%;
      }
    }

    &_r {
      flex: 1;
      display: flex;
      flex-direction: column;

      >div {
        margin-bottom: 0.4rem;

        &:last-child {
          margin-bottom: 0;
          flex: 1;
        }
      }

      &_t {
        height: 46%;
        display: flex;
        flex-direction: column;

        >div {
          flex: 1;
          margin-bottom: 0.4rem;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      &_b {
        display: flex;

        &_l {
          width: 60%;
          margin-right: 0.4rem;
          display: flex;
          flex-direction: column;

          >div {
            flex: 1;
            margin-bottom: 0.4rem;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }

        &_r {
          flex: 1;

          .radarBox {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            >div {
              margin-bottom: 0.4rem;
            }
          }
        }
      }
    }
  }
</style>
