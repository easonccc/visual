<template>
  <div class="content">
    <v-commonTitle title="旅行团数据驾驶舱"></v-commonTitle>
    <div class="box_r">
      <div class="box_flex1" style="margin: 0 0.4rem">
        <div class="box">
          <div class="box-head">
            <span class="dot"></span><span>2019年度热度跟团游排行TOP20</span>
            <div class="tab">
              <span
                @click="selType(index)"
                v-for="(item, index) in tabsArr"
                :key="index"
                :class="deviceActive == index ? 'active' : ''"
                >{{ item }}</span
              >
            </div>
          </div>
          <div class="box-body">
            <table class="sort">
              <tr
                v-for="(v, i) in tableData"
                :key="i"
                :class="v.event == 0 ? 'active' : ''"
              >
                <td>{{ i + 1 < 10 ? "0" + (i + 1) : i + 1 }}</td>
                <td>{{ v.name }}</td>
                <td>{{ v.level }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="box_flex2">
        <div class="box">
          <div class="box-head picker_item">
            <span class="dot"></span
            ><span>各旅行社接待 '团队游' 游客量和 '团队游' 产品数量</span>
            <div class="time">
              <div class="selector">
                <div>选择区域 :</div>
                <el-select v-model="value" placeholder="湖北省全域">
                  <el-option>1</el-option>
                </el-select>
              </div>
              <div class="picker">
                <div>选择时间 :</div>
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  style="width:70%;"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                >
                </el-date-picker>
              </div>
            </div>
          </div>
          <v-chartMultyBar :bindData="bindData"></v-chartMultyBar>
        </div>
        <div class="box" style="margin-top:0.4rem">
          <div class="box-head">
            <span class="dot"></span>旅游团运营情况
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
              <th>旅行团名称</th>
              <th>旅行社名称</th>
              <th>大巴车数量</th>
              <th>导游人数</th>
              <th>司机人数</th>
              <th>游客人数</th>
              <th>出发日期</th>
              <th>结束日期</th>
              <th>当前所在地</th>
            </tr>
            <tr v-for="(v, i) in tableData1" :key="i">
              <td>{{ i + 1 < 10 ? "0" + (i + 1) : i + 1 }}</td>
              <td>{{ v.type }}</td>
              <td>{{ v.name }}</td>
              <td>{{ v.floor }}</td>
              <td>{{ v.ting }}</td>
              <td>{{ v.num1 }}</td>
              <td>{{ v.num2 }}</td>
              <td>{{ v.data1 }}</td>
              <td>{{ v.data2 }}</td>
              <td>
                {{ v.active }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartMultyBar from "../components/element/chartMultyBar3.vue";
export default {
  name: "page1",
  data() {
    return {
      title: "",
      tabsArr: ["月度", "季度", "半年", "年度"],
      width: "100%",
      height: "100%",
      deviceActive: 1,
      tableData: [
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 0,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 0,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 0,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
        {
          name: "船进神农架、畅游新三峡、访美人昭君2日1晚跟团游",
          level: "鄂旅投旅行社",
          event: 1,
        },
      ],
      tableData1: [
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "2",
          ting: "2",
          active: "湖北武汉",
          num1: "4",
          num2: "120",
          data1: "2020-04-15",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "2",
          ting: "2",
          active: "湖北武汉",
          num1: "4",
          num2: "120",
          data1: "2020-04-15",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "2",
          ting: "2",
          active: "湖北武汉",
          num1: "4",
          num2: "120",
          data1: "2020-04-15",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "2",
          ting: "2",
          active: "湖北武汉",
          num1: "4",
          num2: "120",
          data1: "2020-04-15",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "2",
          ting: "2",
          active: "湖北武汉",
          num1: "4",
          num2: "120",
          data1: "2020-04-15",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "2",
          ting: "2",
          active: "湖北武汉",
          num1: "4",
          num2: "120",
          data1: "2020-04-15",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "2",
          ting: "2",
          active: "湖北武汉",
          num1: "4",
          num2: "120",
          data1: "2020-04-15",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "2",
          ting: "2",
          active: "湖北武汉",
          num1: "4",
          num2: "120",
          data1: "2020-04-15",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "2",
          ting: "2",
          active: "湖北武汉",
          num1: "4",
          num2: "120",
          data1: "2020-04-15",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "2",
          ting: "2",
          active: "湖北武汉",
          num1: "4",
          num2: "120",
          data1: "2020-04-15",
          data2: "2020-04-18",
        },
      ],
      bindData: {
        legend: ["环比数据", "当前数据", "同比数据"],
        xData: [
          "鄂旅社",
          "鄂旅社",
          "鄂旅社",
          "鄂旅社",
          "鄂旅社",
          "鄂旅社",
          "鄂旅社",
          "鄂旅社",
        ],
        yData: [
          [8625, 8265, 7220, 6841, 7413, 6800, 5900, 6500],
          [10895, 8896, 10333, 7798, 12000, 9500, 8800, 7900],
          [7625, 7265, 6220, 5841, 6413, 6200, 6500, 5900],
        ],
      },
    };
  },
  created() {},
  methods: {
    selType(i) {
      this.deviceActive = i;
    },
  },
  components: {
    "v-chartMultyBar": chartMultyBar,
  },
};
</script>

<style lang="less" scoped>
.content {
  overflow: hidden;
}
.box_r {
  overflow: hidden;
  flex: 1;
  display: flex;
  .box_flex1 {
    flex: 2;
    display: flex;
    .box {
      flex: 1;
      overflow: hidden;
      display: flex;
      .box-head {
        display: flex;
        .tab {
          margin-left: auto;
          color: rgba(255, 255, 255, 0.4);
          span {
            margin-right: 0.6rem;
            cursor: pointer;
          }
          .active {
            color: #fff;
          }
        }
      }
      .box-body {
        flex: 1;
        overflow-y: auto;
      }
      .sort {
        width: 100%;
        height: 100%;
        font-size: 0.32rem;
        color: #fff;

        th,
        td {
          padding: 0.5rem 0.32rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .active {
          color: #ff5858;
        }
        #active2 {
          color: #d0021b;
        }
        td {
          text-align: center;
        }
      }
    }
  }
  .box_flex2 {
    flex: 5;
    display: flex;
    flex-direction: column;
    .box {
      &:first-child {
        height: 52%;
      }
      &:last-child {
        flex: 1;
      }

      .box-head {
        margin-bottom: 0.1rem;
        width: 100%;
        .el-pagination {
          float: right;
        }
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
      .picker_item {
        display: flex;
        span {
          &:nth-child(2) {
            min-width: 8rem;
          }
        }
        .time {
          margin-left: auto;
          display: flex;
          justify-content: space-around;
          div {
            &:first-child {
              min-width: 2.4rem;
            }
          }
          .selector {
            display: flex;
            align-items: center;
            width: 40%;
            color: rgba(46, 217, 253, 1);
            font-size: 0.5rem;
            div {
              padding-right: 0.2rem;
            }
            .el-select {
              width: 70%;
              /deep/.el-input__inner {
                border-radius: 0;
                font-size: 12px;
                padding: 0;
              }
            }
          }
          .picker {
            font-size: 0.5rem;
            display: flex;
            align-items: center;
            /deep/.el-range-editor.el-input__inner {
              padding: 2px 10px;
              border-radius: 0;
              padding: 0;
            }
            div {
              margin-right: 0.2rem;
            }
          }
        }
      }
      .sort {
        font-size: 0.32rem;
        color: #fff;
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
