<template>
  <div class="content">
    <v-commonTitle title="消费数据驾驶舱"></v-commonTitle>
    <div class="box_u">
      <div
        class="box_flex1"
        style="margin-right:0.4rem;background-color: rgba(1, 104, 185, 0.2);"
      >
        <div class="item">
          <div class="mapNumber">
            <div class="up">
              <span>本月旅行消费总金额(万元):</span>
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
              <span>冬季旅游消费总金额(万元):</span>
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
              <span>上半年旅游消费总金额(万元):</span>
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
              <span>2020年旅游消费总金额(万元):</span>
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
          <div class="item">
            <div class="box">
              <div class="box-head picker_item">
                <span class="dot"></span>各市游客总消费及排名
              </div>
              <v-chartPie :bindData="bindData3" type="元"></v-chartPie>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>特定省市来鄂消费水平占比
              </div>
              <v-chartPie :bindData="bindData3" type="元"></v-chartPie>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box_d">
      <div class="box_flex4" style="flex:2.5">
        <div class="item">
          <div class="box">
            <div class="box-head picker_item">
              <span class="dot"></span>
              各旅行行业销售占比
            </div>
            <v-chartList
              :bindData="bindData4"
              :showRatio="false"
              :show="false"
            ></v-chartList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartBar from "../components/myEcharts/chartBar";
import chartPie from "../components/element/chartPie";
import chartList from "../components/element/chartList";

export default {
  name: "page1",
  data() {
    return {
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
      bindData3: [
        {
          name: "武汉市",
          value: 26,
          value2: 8620,
        },
        {
          name: "宜昌市",
          value: 26,
          value2: 9809,
        },
        {
          name: "黄冈市",
          value: 28,
          value2: 9809,
        },
        {
          name: "荆州市",
          value: 26,
          value2: 8620,
        },
        {
          name: "襄阳市",
          value: 26,
          value2: 8620,
        },
        {
          name: "十堰市",
          value: 26,
          value2: 8620,
        },
        {
          name: "孝感市",
          value: 26,
          value2: 8620,
        },
        {
          name: "鄂州市",
          value: 26,
          value2: 8620,
        },
        {
          name: "黄冈市",
          value: 26,
          value2: 8620,
        },
        {
          name: "咸宁市",
          value: 26,
          value2: 8620,
        },
      ],
      bindData4: [
        {
          name: "蔡林记热干面",
          num1: "18.56",
          num2: "25425425.00",
          per: [26, 24, 32, 18, 6],
        },
        {
          name: "武汉特色菜",
          num1: "18.56",
          num2: "25425425.00",
          per: [26, 24, 32, 18, 6],
        },
        {
          name: "襄阳火锅店",
          num1: "18.56",
          num2: "25425425.00",
          per: [26, 24, 32, 18, 6],
        },
        {
          name: "宜昌美食店",
          num1: "18.56",
          num2: "25425425.00",
          per: [12, 28, 34, 20, 6],
        },
        {
          name: "孝感米酒",
          num1: "18.56",
          num2: "25425425.00",
          per: [26, 14, 32, 20, 8],
        },
      ],
    };
  },
  components: {
    ChartBar,
    "v-chartList": chartList,
    "v-chartPie": chartPie,
  },
};
</script>

<style lang="less" scoped>
.box {
  flex: 1;
}
.box_u {
  height: 56%;
  margin-top: 0.4rem;
  display: flex;
  .box_flex1 {
    flex: 3;
    display: flex;
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
      .item {
        flex: 1;
        margin-right: 0.4rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .box_flex3 {
    flex: 3;
    display: flex;
    flex-direction: column;
    .box {
      .box-head {
        margin-top: 0.2rem;
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
      .picker_item {
        .time {
          .selector {
            font-size: 0.3rem;
            div {
              &:first-child {
                min-width: 2.4rem;
              }
            }
            /deep/.el-input__inner {
              font-size: 12px;
              border-radius: 0;
            }
          }
          .picker {
            font-size: 0.3rem;
          }
        }
      }
    }
  }
}
</style>
