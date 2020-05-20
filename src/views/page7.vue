<template>
  <div class="content">
    <v-commonTitle title="旅行社数据驾驶舱"></v-commonTitle>
    <div class="box_u">
      <div
        class="box_flex1"
        style="margin-right: 0.4rem;background-color: rgba(1, 104, 185, 0.2);"
      >
        <div class="item">
          <div class="mapNumber">
            <div class="up">
              <span>辖区内注册登记旅行社数量:</span>
            </div>
            <div class="down">
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
              <div class="per_left">
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>注册登记的旅行社大巴数量:</span>
            </div>
            <div class="down">
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
              <div class="per_left">
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>注册登记的大巴司机数量:</span>
            </div>
            <div class="down">
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
                <span> 同比:</span> - 25%<img
                  src="../assets/img/downsmall.png"
                />
              </div>
              <div class="per_left">
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="mapNumber">
            <div class="up">
              <span>注册登记的导游数据:</span>
            </div>
            <div class="down">
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
              <div class="per_left">
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>2020年累计接待团队游客数量:</span>
            </div>
            <div class="down">
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
              <div class="per_left">
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>正在销售的团队游产品数量:</span>
            </div>
            <div class="down">
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
                <span> 同比:</span> - 25%<img
                  src="../assets/img/downsmall.png"
                />
              </div>
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
              <div class="box-head count_head">
                <span class="dot"></span>
                <span>各旅行社大巴车数量排行TOP10</span>
                <div class="count">总数：{{ carSum }} 辆</div>
              </div>
              <v-chartPie :bindData="bindData1" type="辆"></v-chartPie>
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
              各旅行社产品均价走势
            </div>
            <v-chartLines
              :bindData="bindData2"
              :showLine="showLine"
              :paramY="paramY"
            ></v-chartLines>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartPie from "../components/element/chartPie";
import chartLines from "../components/element/chartLines";

export default {
  name: "page1",
  data() {
    return {
      paramY: {
        unitY: "元",
        titleY: "价格   ----    基准线   均价：215元",
      },
      showLine: {
        hasLine: true,
        color: "#FFF",
        // 中位线的坐标
        y: 215,
        namePadding: [0, 0, 0, 140],
      },
      bindData1: [
        {
          name: "鄂旅投旅行社",
          value: 8,
          value2: 168,
        },
        {
          name: "武汉旅行社",
          value: 26,
          value2: 156,
        },
        {
          name: "武昌旅行社",
          value: 28,
          value2: 140,
        },
        {
          name: "宜昌旅行社",
          value: 26,
          value2: 140,
        },
        {
          name: "孝感旅行社",
          value: 26,
          value2: 139,
        },
        {
          name: "鄂州旅行社",
          value: 26,
          value2: 128,
        },
        {
          name: "襄阳旅行社",
          value: 26,
          value2: 126,
        },
        {
          name: "黄冈旅行社",
          value: 26,
          value2: 120,
        },
        {
          name: "恩施旅行社",
          value: 26,
          value2: 118,
        },
        {
          name: "随州旅行社",
          value: 26,
          value2: 112,
        },
        {
          name: "其他",
          value: 36,
          value2: 870,
        },
      ],
      bindData2: [
        [
          "1月",
          "",
          "2月",
          "",
          "3月",
          "",
          "4月",
          "",
          "5月",
          "",
          "6月",
          "",
          "7月",
          "",
          "8月",
          "",
          "9月",
          "",
          "10月",
          "",
          "11月",
          "",
          "12月",
        ],
        [
          {
            name: "鄂旅投旅行社",
            value: [
              150,
              150,
              150,
              175,
              175,
              160,
              160,
              160,
              160,
              150,
              165,
              165,
              150,
              150,
              150,
              150,
              150,
              150,
              130,
              130,
              150,
              150,
              150,
              150,
            ],
          },
          {
            name: "武汉旅行社",
            value: [
              200,
              200,
              200,
              230,
              230,
              220,
              220,
              220,
              220,
              200,
              220,
              220,
              200,
              200,
              200,
              200,
              200,
              200,
              150,
              150,
              200,
              200,
              200,
              200,
            ],
          },
          {
            name: "武昌旅行社",
            value: [
              221,
              221,
              221,
              230,
              230,
              200,
              200,
              200,
              200,
              221,
              165,
              165,
              221,
              221,
              221,
              221,
              221,
              221,
              170,
              170,
              221,
              221,
              221,
              221,
            ],
          },
          {
            name: "宜昌旅行社",
            value: [
              160,
              160,
              160,
              185,
              185,
              160,
              160,
              160,
              160,
              160,
              175,
              175,
              160,
              160,
              160,
              160,
              160,
              160,
              140,
              140,
              160,
              160,
              160,
              160,
            ],
          },
          {
            name: "孝感旅行社",
            value: [
              155,
              155,
              155,
              180,
              180,
              165,
              165,
              165,
              165,
              155,
              165,
              165,
              155,
              155,
              155,
              155,
              155,
              155,
              135,
              135,
              155,
              155,
              155,
              155,
            ],
          },
          {
            name: "鄂州坝旅行社",
            value: [
              200,
              200,
              200,
              300,
              300,
              300,
              160,
              180,
              180,
              150,
              165,
              165,
              150,
              220,
              200,
              150,
              220,
              150,
              260,
              260,
              250,
              150,
              150,
              150,
            ],
          },
          {
            name: "襄阳旅行社",
            value: [
              130,
              130,
              130,
              169,
              169,
              160,
              160,
              160,
              160,
              130,
              150,
              150,
              130,
              130,
              130,
              130,
              130,
              130,
              110,
              110,
              130,
              130,
              130,
              130,
            ],
          },
          {
            name: "黄冈旅行社",
            value: [
              185,
              185,
              185,
              160,
              160,
              146,
              146,
              146,
              146,
              185,
              165,
              165,
              185,
              185,
              185,
              185,
              185,
              185,
              130,
              130,
              185,
              185,
              185,
              185,
            ],
          },
          {
            name: "恩施旅行社",
            value: [
              142,
              142,
              142,
              169,
              169,
              160,
              160,
              160,
              160,
              142,
              150,
              150,
              142,
              142,
              142,
              142,
              142,
              142,
              110,
              110,
              142,
              142,
              142,
              142,
            ],
          },
          {
            name: "随州旅行社",
            value: [
              185,
              185,
              185,
              160,
              160,
              146,
              146,
              146,
              146,
              185,
              165,
              165,
              185,
              185,
              185,
              185,
              185,
              185,
              130,
              130,
              185,
              185,
              185,
              185,
            ],
          },
        ],
      ],
    };
  },
  computed: {
    // 计算旅行社大巴的总数量
    carSum() {
      var sum = null;
      this.bindData1.forEach((item) => {
        sum += item.value2;
      });
      return sum;
    },
  },
  components: {
    "v-chartPie": chartPie,
    "v-chartLines": chartLines,
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
    flex: 8.3;
    display: flex;
    box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
      0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
    padding: 0 1rem 0 0;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-bottom: 1.2rem;
      margin-left: 1.2rem;
      .mapNumber {
        flex: 1;
        margin: 0.4rem;
        margin-top: 1.5rem;
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
            font-size: 1.4rem;
            font-weight: 400;
            flex: 1;
            color: rgba(255, 255, 255, 1);
            background: rgba(24, 62, 95, 0.6);
            box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
              0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
            margin: 0 0.4rem 0 0;
            height: 1.8rem;
            line-height: 1.8rem;
            width: 0.8rem;
            text-align: center;
          }
        }
        .per {
          display: flex;
          height: 0.56rem;
          font-size: 0.5rem;
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
          .count_head {
            display: flex;
            .count {
              color: #fff;
              margin-left: auto;
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
  .box_flex5 {
    flex: 8;
    display: flex;
    flex-direction: column;
    .item {
      flex: 1;
      width: 100%;
      height: 50%;
      display: flex;
    }
  }
  .box_flex6 {
    flex: 10;
  }
}
</style>
