<template>
  <div class="content">
    <v-commonTitle title="旅游服务满意度数据驾驶舱"></v-commonTitle>
    <div class="lr">
      <div class="left">
        <div class="up">
          <div class="up_l">
            <div class="item box">
              <div class="mapNumber">
                <div class="num_up">
                  <span>本月投诉总量:</span>
                  <span>时间:2020年4月1日</span>
                </div>
                <div class="num_down">
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                  <span>2</span>
                  <span>4</span>
                  <span>2</span>
                  <span>9</span>
                </div>
                <div class="per">
                  <div class="per_right">
                    同比: <span> -0.2%</span
                    ><img src="../assets/img/downsmall.png" />
                  </div>
                </div>
              </div>
              <div class="mapNumber">
                <div class="num_up">
                  <span>受理总量:</span>
                  <span>受理率:97%</span>
                </div>
                <div class="num_down">
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                  <span>2</span>
                  <span>4</span>
                  <span>2</span>
                  <span>9</span>
                </div>
                <div class="per">
                  <div class="per_right">
                    同比: <span> -0.2%</span
                    ><img src="../assets/img/downsmall.png" />
                  </div>
                </div>
              </div>
            </div>
            <div class="item box">
              <div class="mapNumber">
                <div class="num_up">
                  <span>结案时长:</span>
                  <span>时间:2020年4月1日</span>
                </div>
                <div class="num_down">
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                  <span>2</span>
                  <span>4</span>
                  <span>2</span>
                  <span>9</span>
                </div>
                <div class="per">
                  <div class="per_left">
                    同比: <span>+125%</span
                    ><img src="../assets/img/upsmall.png" />
                  </div>
                </div>
              </div>
              <div class="mapNumber">
                <div class="num_up">
                  <span>结案总量:</span>
                </div>
                <div class="num_down">
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                  <span>-</span>
                  <span>2</span>
                  <span>4</span>
                  <span>2</span>
                  <span>9</span>
                </div>
                <div class="per">
                  <div class="per_left">
                    同比: <span>+125%</span
                    ><img src="../assets/img/upsmall.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="up_r">
            <div class="box">
              <div class="box-head"><span class="dot"></span>投诉分类</div>
              <div class="box-body">
                <v-chartPieColumn
                  :bindData="bindData"
                  type="条"
                ></v-chartPieColumn>
              </div>
            </div>
          </div>
        </div>
        <div class="down">
          <div class="box">
            <div class="box-head">
              <span class="dot"></span>投诉数据
              <div class="time" style="width:55%; float:right">
                <div class="time">
                  <span>今日</span>
                  <span>本月</span>
                  <span>本年</span>
                </div>
                <div class="picker" style="float:right">
                  自定义 :
                  <el-date-picker
                    type="daterange"
                    style="width:75%;"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  >
                  </el-date-picker>
                </div>
              </div>
            </div>
            <chart-bar />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="up">
          <div class="box">
            <div class="box-head">
              <span class="dot"></span>
              <span>结案结果分析</span>
            </div>
            <div class="box-body">
              <v-chartPieRadius0Column
                :bindData="bindData8"
                type="人"
              ></v-chartPieRadius0Column>
            </div>
          </div>
          <div class="box">
            <div class="box-head">
              <span class="dot"></span>
              <span>投诉来源</span>
            </div>
            <chart-pie :bindData="data2" />
          </div>
        </div>
        <div class="down">
          <div class="box">
            <div class="box-head nobottom">
              <span class="dot"></span>安保设备状态数据
              <el-pagination
                small
                background
                layout="prev, pager, next"
                :total="1000"
              >
              </el-pagination>
            </div>
            <table class="sort">
              <tr>
                <th>序号</th>
                <th>投诉时间</th>
                <th>投诉分类</th>
                <th>投诉渠道</th>
                <th>受理时间</th>
                <th>结案结果</th>
                <th>结案时间</th>
              </tr>
              <tr
                v-for="(v, i) in tableData2"
                :key="i"
                :id="v.time3 == '已超时' ? 'alarm' : ''"
              >
                <td>{{ i + 1 < 10 ? "0" + (i + 1) : i + 1 }}</td>
                <td>{{ v.time }}</td>
                <td>{{ v.type }}</td>
                <td>{{ v.method }}</td>
                <td>{{ v.time2 }}</td>
                <td
                  :class="v.res == '未解决' ? 'active' : ''"
                  :id="v.res == '待解决' ? 'active' : ''"
                >
                  {{ v.res }}
                </td>
                <td>
                  {{ v.time3 }}
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartPie from "../components/myEcharts/chartPie2";
import TableDiy from "../components/table/tableDiy";
import TableDiy2 from "../components/table/tableDiy2";
import chartPieColumn from "../components/element/chartPieColumn";
import ChartBar from "../components/myEcharts/chartBar";
import chartPieRadius0Column from "../components/element/chartPieRadius0Column";

export default {
  name: "page1",
  data() {
    return {
      bindData: [
        {
          name: "交通",
          value: 10,
          value2: 1000,
        },
        {
          name: "停车位",
          value: 50,
          value2: 5000,
        },
        {
          name: "服务",
          value: 2,
          value2: 300,
        },
        {
          name: "卫生",
          value: 20,
          value2: 2000,
        },
        {
          name: "秩序",
          value: 20,
          value2: 200,
        },
        {
          name: "购物",
          value: 8,
          value2: 800,
        },
        {
          name: "其他",
          value: 8,
          value2: 800,
        },
      ],
      data1: [
        {
          name: "自行和解",
          value: 2654,
        },
        {
          name: "调解成功",
          value: 2312,
        },
        {
          name: "调解失败",
          value: 1842,
        },
        {
          name: "不予受理",
          value: 1112,
        },
        {
          name: "已移交",
          value: 568,
        },
        {
          name: "质保金赔偿",
          value: 568,
        },
        {
          name: "已退回",
          value: 568,
        },
      ],
      data2: [
        {
          name: "自行和解",
          value: 10,
          value2: 1000,
        },
        {
          name: "调解成功",
          value: 50,
          value2: 5000,
        },
        {
          name: "调解失败",
          value: 2,
          value2: 300,
        },
        {
          name: "不予受理",
          value: 20,
          value2: 2000,
        },
        {
          name: "已移交",
          value: 8,
          value2: 800,
        },
        {
          name: "质保金赔偿",
          value: 2,
          value2: 200,
        },
        {
          name: "已退回",
          value: 8,
          value2: 800,
        },
      ],
      data3: [
        {
          name: "住宿设施",
          value: 2654,
        },
        {
          name: "景区服务",
          value: 2312,
        },
        {
          name: "旅行社",
          value: 1842,
        },
        {
          name: "在线旅游企业",
          value: 1112,
        },
        {
          name: "非法运营",
          value: 568,
        },
        {
          name: "购物",
          value: 568,
        },
        {
          name: "其他",
          value: 568,
        },
      ],
      tableData2: [
        {
          type: "卫生",
          time: "2018.11.10",
          method: "工商投诉平台",
          time2: "---",
          res: "待解决",
          time3: "已超时",
        },
        {
          type: "环境",
          time: "2018.11.10",
          method: "工商投诉平台",
          time2: "---",
          res: "待解决",
          time3: "已超时",
        },
        {
          type: "设施",
          time: "2018.11.10",
          method: "市长热线",
          time2: "---",
          res: "未解决",
          time3: "2018.11.10",
        },
        {
          type: "价格",
          time: "2018.11.10",
          method: "市长热线",
          time2: "2018.11.10",
          res: "未解决",
          time3: "2018.11.10",
        },
        {
          type: "服务",
          time: "2018.11.10",
          method: "市长热线",
          time2: "2018.11.10",
          res: "已解决",
          time3: "2018.11.10",
        },
        {
          type: "价格",
          time: "2018.11.10",
          method: "市长热线",
          time2: "2018.11.10",
          res: "已解决",
          time3: "2018.11.10",
        },
        {
          type: "服务",
          time: "2018.11.10",
          method: "市长热线",
          time2: "2018.11.10",
          res: "已解决",
          time3: "2018.11.10",
        },
        {
          type: "服务",
          time: "2018.11.10",
          method: "市长热线",
          time2: "2018.11.10",
          res: "已解决",
          time3: "2018.11.10",
        },
        {
          type: "服务",
          time: "2018.11.10",
          method: "市长热线",
          time2: "2018.11.10",
          res: "已解决",
          time3: "2018.11.10",
        },
      ],
      bindData8: [
        {
          name: "12301旅游投诉平台",
          value: 18,
          value2: 1800,
        },
        {
          name: "旅游投诉热线",
          value: 42,
          value2: 4200,
        },
        {
          name: "工商投诉平台",
          value: 10,
          value2: 1000,
        },
        {
          name: "12315质量投诉热线",
          value: 20,
          value2: 2000,
        },
        {
          name: "市长热线",
          value: 10,
          value2: 1000,
        },
      ],
    };
  },
  computed: {
    // 判断这一行是否警告
    isAlarm() {
      // 遍历表格数据
      // return this.tableData2.some(item => item.time3 == "已超时");
    },
  },
  components: {
    ChartPie,
    TableDiy,
    TableDiy2,
    ChartBar,
    "v-chartPieRadius0Column": chartPieRadius0Column,
    "v-chartPieColumn": chartPieColumn,
  },
};
</script>

<style lang="less" scoped>
.lr {
  flex: 1;
  display: flex;
}

.left {
  width: 48%;
  display: flex;
  flex-direction: column;
  margin-right: 0.4rem;
  .up {
    height: 56%;
    display: flex;
    .up_l {
      display: flex;
      width: 44%;
      flex-direction: column;
      margin-right: 0.4rem;
      .item {
        &:first-child {
          margin-bottom: 0.4rem;
        }
        .mapNumber {
          flex: 1;
          margin: 0.4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: lcd;
          .num_up {
            display: flex;
            justify-content: space-between;
            > span {
              &:last-child {
                color: #fff;
              }
              &:first-child {
                color: #2ed9fdff;
              }
              height: 0.45rem;
              font-size: 0.32rem;
              font-weight: 400;
              color: #2ed9fdff;
              line-height: 0.45rem;
            }
          }
          .num_down {
            height: 1.05rem;
            line-height: 1.05rem;
            display: flex;
            justify-content: space-between;
            > span {
              display: inline-block;
              font-size: 1.05rem;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              background: rgba(24, 62, 95, 0.6);
              box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
                0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
              margin: 0 0 0 0.2rem;
              width: 0.8rem;
              text-align: center;
              height: 1rem;
            }
          }
          .per {
            display: flex;
            height: 0.56rem;
            font-size: 0.4rem;
            font-weight: 400;
            color: #fff;
            line-height: 0.56rem;
            justify-content: space-between;
            margin-top: 0.4rem;
            .per_left {
              display: flex;
              align-items: center;
              span {
                color: #e76f93;
                padding-left: 0.4rem;
              }
              img {
                width: 0.3rem;
                height: 0.3rem;
                margin-left: 0.4rem;
              }
            }
            .per_right {
              display: flex;
              align-items: center;
              span {
                color: #47b56c;
                padding-left: 0.4rem;
              }
              img {
                width: 0.3rem;
                height: 0.3rem;
                margin-left: 0.4rem;
              }
            }
          }
        }
      }
    }
    .up_r {
      flex: 1;
    }
  }
  .down {
    flex: 1;
    margin-top: 0.4rem;
    .box {
      height: 100%;
      .box-head {
        .time {
          .picker {
            /deep/.el-range-editor.el-input__inner {
              padding: 2px 10px;
            }
          }
          display: flex;
          span {
            cursor: pointer;
            line-height: 0.6rem;
            height: 0.6rem;
            width: 1.2rem;
            border: 1px solid #29c7ec;
            color: #fff;
            text-align: center;
            font-size: 0.4rem;
            margin-right: 0.4rem;
            &:first-child {
              background-color: #23add1;
            }
          }
        }
      }
    }
  }
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  .up {
    display: flex;
    height: 56%;
    .box {
      flex: 1;

      &:first-child {
        margin-right: 0.4rem;
      }
    }
  }
  .down {
    flex: 1;
    margin-top: 0.4rem;
    .box {
      .box-head {
        .floor {
          float: right;
          width: 21%;
          .img {
            width: 0.7rem;
            cursor: pointer;
            float: left;
            margin-right: 0.5rem;
            img {
              width: 100%;
            }
          }
        }
        .cutlinee {
          ul {
            display: flex;
            margin: 0.4rem 0;
            li {
              display: flex;
              justify-content: center;
              font-size: 0.4rem;
              align-items: center;
              color: #fff;
              margin-right: 1rem;
              .img {
                width: 1rem;
                margin-right: 0.2rem;
                img {
                  width: 100%;
                }
              }
            }
          }
        }
        .el-pagination {
          float: right;
        }
      }
      .box-head.nobottom {
        margin-bottom: 0;
        /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
          background-color: #23add1; // 进行修改背景和字体
          color: #fff;
          font-weight: 300;
        }
        /deep/ .el-pagination.is-background .el-pager li:not(.disabled) {
          background-color: #0b5b84;
          color: #fff;
          font-weight: 300;
        }
        /deep/ .el-pagination.is-background.el-pagination--small .btn-prev {
          background-color: #0b5b84;
        }
        /deep/ .el-pagination.is-background.el-pagination--small .btn-next {
          background-color: #0b5b84;
        }
      }
      .sort {
        font-size: 0.32rem;
        color: #fff;
        tr#alarm {
          color: #ec991f;
        }
        th,
        tr:first-child td {
          background: rgba(46, 217, 253, 0.4);
          border: 0.02rem solid rgba(42, 204, 240, 1);
        }
        th,
        td {
          padding: 0.35rem 0.32rem;
        }
        .active {
          color: #ec991f;
        }
        #active {
          color: #ec991f;
        }
        #active2 {
          color: #d0021b;
        }
        td {
          text-align: center;
          background: rgba(46, 217, 253, 0.2);
          border: 0.02rem solid rgba(42, 204, 240, 1);
        }
      }
    }
  }
}
</style>
