<template>
  <div class="content">
    <v-commonTitle title="车流数据驾驶舱"></v-commonTitle>
    <div class="box_u">
      <div
        class="box_flex1"
        style="margin-right: 0.4rem;background-color: rgba(1, 104, 185, 0.2);"
      >
        <div class="item">
          <div class="mapNumber">
            <div class="up">
              <span>本月入境车辆总量:</span>
            </div>
            <div class="down">
              <span>-</span>
              <span>-</span>
              <span>-</span>
              <span>2</span>
              <span>3</span>
              <span>5</span>
              <span>4</span>
              <span>2</span>
              <span>9</span>
            </div>
            <div class="per">
              <div class="per_left">
                <span> 同比:</span> - 0.2%<img
                  src="../assets/img/downsmall.png"
                />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>冬季入境车辆总量:</span>
            </div>
            <div class="down">
              <span>-</span>
              <span>-</span>
              <span>4</span>
              <span>9</span>
              <span>5</span>
              <span>5</span>
              <span>3</span>
              <span>4</span>
              <span>2</span>
            </div>
            <div class="per">
              <div class="per_left">
                <span> 同比:</span> - 25%<img
                  src="../assets/img/downsmall.png"
                />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>2020入鄂大巴总量:</span>
            </div>
            <div class="down">
              <span>-</span>
              <span>5</span>
              <span>4</span>
              <span>9</span>
              <span>5</span>
              <span>5</span>
              <span>3</span>
              <span>4</span>
              <span>2</span>
            </div>
            <div class="per">
              <div class="per_left">
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>2020年出鄂车辆总量:</span>
            </div>
            <div class="down">
              <span>-</span>
              <span>5</span>
              <span>4</span>
              <span>9</span>
              <span>5</span>
              <span>5</span>
              <span>3</span>
              <span>4</span>
              <span>2</span>
            </div>
            <div class="per">
              <div class="per_left">
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box_flex2">
        <div class="flex2_left">
          <div class="up">
            <div class="box">
              <div class="box-head picker_item">
                <span class="dot"></span><span>各市车流数据</span>
                <div class="time" style="width:40%">
                  <div class="selector">
                    <div>选择区域 :</div>
                    <el-select v-model="value" placeholder="湖北省全域">
                      <el-option> </el-option>
                    </el-select>
                  </div>
                  <div class="picker" style="float:right">
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
              <chart-bar :bindData="bindData1" />
            </div>
          </div>
          <div class="down">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>自驾游归属地统计
              </div>
              <chart-bar
                :styleColor="barColor"
                :barWidth="22"
                :showNum="false"
                :bindData="bindData2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box_d">
      <div class="box_flex4" style="flex:2.5">
        <div class="item">
          <div class="box">
            <div class="box-head hasTab">
              <span class="dot"></span>
              <span>停车场承载趋势</span>
              <div class="tabs">
                <span
                  @click="sleType(index)"
                  v-for="(item, index) in tabsArr"
                  :key="index"
                  :class="activeIndex == index ? 'active' : ''"
                  >{{ item }}</span
                >
              </div>
            </div>
            <v-chartPage3Right :paramY="paramY"></v-chartPage3Right>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartBar from "../components/myEcharts/chartBar";
import chartPage3Right from "../components/element/chartPage3Right";

export default {
  name: "page1",
  data() {
    return {
      activeIndex: 2,
      tabsArr: ["木兰天池", "三峡人家", "三峡大坝", "屈原故里", "柴埠溪"],
      value: "",
      value1: "",
      paramY: {
        name: "车次",
        text: ["车位充足", "橙色预警", "红色预警"],
      },
      bindData1: [
        [
          "武汉市",
          "黄石市",
          "襄阳市",
          "荆州市",
          "宜昌市",
          "十堰市",
          "孝感市",
          "荆门市",
          "鄂州市",
          "黄冈市",
          "咸宁市",
          "随州市",
        ],
        [
          "2800",
          "2500",
          "2700",
          "1741",
          "2727",
          "1184",
          "1113",
          "1222",
          "3123",
          "1313",
          "1313",
          "1313",
        ],
      ],
      bindData2: [
        [
          "湖北",
          "湖南",
          "河南",
          "四川",
          "重庆",
          "河北",
          "浙江",
          "江西",
          "广东",
          "广西",
          "云南",
          "陕西",
          "辽宁",
          "黑龙江",
          "甘肃",
          "福建",
          "贵州",
          "新疆",
          "西藏",
        ],
        [
          "2800",
          "2500",
          "2700",
          "1741",
          "2727",
          "1184",
          "1113",
          "1222",
          "3123",
          "1313",
          "1313",
          "1313",
          "1300",
          "1213",
          "1200",
          "1200",
          "1313",
          "1288",
          "1288",
        ],
      ],
      barColor: [
        ["rgba(255,88,88,1)", "rgba(255,88,88,0.3)"],
        ["rgba(255,224,88,1)", "rgba(255,224,88,0.3)"],
        ["rgba(225,88,255,1)", "rgba(225,88,255,0.3)"],
        ["rgba(88,255,255,1)", "rgba(88,255,255,0.3)"],
        ["rgba(119,255,88,1)", "rgba(119,255,88,0.3)"],
        ["rgba(88,112,255,1)", "rgba(88,112,255,0.3)"],
        ["rgba(255,159,88,1)", "rgba(255,159,88,0.3)"],
        ["rgba(88,187,255,1)", "rgba(88,187,255,0.3)"],
        ["rgba(220,234,200,1)", "rgba(220,234,200,1)"],
        ["rgba(245,195,245,1)", "rgba(245,195,245,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
        ["rgba(183,221,244,1)", "rgba(183,221,244,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
        ["rgba(46,217,253,1)", "rgba(46,217,253,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
        ["rgba(46,217,253,1)", "rgba(46,217,253,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
        ["rgba(46,217,253,1)", "rgba(46,217,253,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
      ],
    };
  },
  methods: {
    sleType(index) {
      this.activeIndex = index;
    },
  },
  components: {
    ChartBar,
    "v-chartPage3Right": chartPage3Right,
  },
};
</script>

<style lang="less" scoped>
.box {
  flex: 1;
  .picker_item {
    width: 100%;
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
        width: 60%;
        color: rgba(46, 217, 253, 1);
        font-size: 0.5rem;
        div {
          padding-right: 0.2rem;
        }
        .el-select {
          width: 65%;
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
}
.box_u {
  height: 56%;
  margin-top: 0.4rem;
  display: flex;

  .box_flex1 {
    flex: 3;
    display: flex;
    box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
      0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      .mapNumber {
        flex: 1;
        margin: 0.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .up {
          display: flex;
          justify-content: space-between;
          > span {
            height: 0.45rem;
            font-size: 0.6rem;
            font-weight: 400;
            color: #fff;
            line-height: 0.45rem;
          }
        }
        .down {
          height: 1.05rem;
          line-height: 1.05rem;
          display: flex;
          justify-content: space-between;
          > span {
            font-family: lcd;
            display: inline-block;
            font-size: 1.2rem;
            font-weight: 400;
            flex: 1;
            color: rgba(255, 255, 255, 1);
            background: rgba(24, 62, 95, 0.6);
            box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
              0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
            margin: 0 0.4rem 0 0;
            height: 1.6rem;
            line-height: 1.6rem;
            width: 1rem;
            text-align: center;
          }
        }
        .per {
          display: flex;
          height: 0.56rem;
          font-size: 0.6rem;
          font-weight: 400;
          color: rgba(230, 111, 146, 1);
          line-height: 0.56rem;
          justify-content: space-between;
          margin-top: 0.4rem;
          .per_left {
            display: flex;
            align-items: center;
            color: rgba(71, 181, 108, 1);
            .upNum {
              color: rgba(230, 111, 146, 1);
            }
            > span:first-child {
              color: #fff;
              margin-right: 0.6rem;
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
  .box_flex2 {
    flex: 10;
    display: flex;
    .flex2_left {
      flex: 1;
      display: flex;
      flex-direction: column;
      .up {
        width: 100%;
        display: flex;
        flex: 1;
        .box {
          flex: 1;
        }
      }
      .down {
        // height: 55%;
        width: 100%;
        flex: 1;
        margin-top: 0.4rem;
        display: flex;
        .box {
          height: 100%;
          flex: 1;
        }
      }
    }
  }
}
.box_d {
  flex: 1;
  display: flex;
  margin-top: 0.4rem;
  .box_flex4 {
    flex: 8 !important;
    width: 66%;
    .item {
      height: 100%;
      display: flex;
      .hasTab {
        display: flex;
        .tabs {
          margin-left: auto;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.45rem;
          .active {
            color: #fff;
          }
          span {
            margin-left: 0.3rem;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
