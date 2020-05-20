<template>
  <div class="content">
    <v-commonTitle title="涉旅企业数据驾驶舱"></v-commonTitle>
    <div class="box_u">
      <div
        class="box_flex1"
        style="margin-right:0.4rem;background-color: rgba(1, 104, 185, 0.2);"
      >
        <div class="item">
          <div class="mapNumber">
            <div class="up">
              <span>省内注册登记旅行社数量:</span>
            </div>
            <div class="down">
              <span>-</span>
              <span>-</span>
              <span>-</span>
              <span>-</span>
              <span>5</span>
              <span>4</span>
              <span>2</span>
              <span>9</span>
            </div>
            <div class="per">
              <div class="per_left">
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
              <div class="per_left">
                <span> 同比:</span> - 0.2%<img
                  src="../assets/img/downsmall.png"
                />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>涉旅行业就业人数总数量(个):</span>
            </div>
            <div class="down">
              <span>-</span>
              <span>-</span>
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
              <div class="per_left">
                <span> 同比:</span> - 0.2%<img
                  src="../assets/img/downsmall.png"
                />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>湖北省GDP金额(百万):</span>
            </div>
            <div class="down">
              <span>-</span>
              <span>2</span>
              <span>9</span>
              <span>2</span>
              <span>3</span>
              <span>5</span>
              <span>4</span>
              <span>2</span>
            </div>
            <div class="per">
              <div class="per_left">
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
              <div class="per_left">
                <span> 同比:</span> - 0.2%<img
                  src="../assets/img/downsmall.png"
                />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>涉旅企业GDB贡献率(百万):</span>
            </div>
            <div class="down">
              <span>-</span>
              <span>-</span>
              <span>-</span>
              <span>-</span>
              <span>5</span>
              <span>4</span>
              <span>4</span>
              <span>2</span>
            </div>
            <div class="per">
              <div class="per_left">
                <span>环比:</span> <span class="upNum">+125%</span
                ><img src="../assets/img/upsmall.png" />
              </div>
              <div class="per_left">
                <span> 同比:</span> - 0.2%<img
                  src="../assets/img/downsmall.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box_flex2">
        <div class="flex2_left">
          <div class="up">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>各市涉旅行业就业人员薪资统计
              </div>
              <v-chartMultyBar
                barWidth="12px"
                :bindData="bindData"
              ></v-chartMultyBar>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box_d">
      <div class="box_flex4" style="flex:2.5;margin-right:0.4rem">
        <div class="item">
          <div class="box">
            <div class="box-head">
              <span class="dot"></span>
              受专业培训比重
            </div>
            <v-chartRadar :bindData="bindData1"></v-chartRadar>
          </div>
        </div>
      </div>
      <div class="box_flex5">
        <div class="item">
          <div class="box">
            <div class="box-head"><span class="dot"></span>从业人员比重</div>
            <v-chartPieColumn :bindData="bindData2"></v-chartPieColumn>
          </div>
        </div>
      </div>
      <div class="box_flex6 box_flex4 " style="margin-left:0.4rem">
        <div class="box">
          <div class="box-head">
            <span class="dot"></span>
            涉旅企业在旅游分类中所占数量及比重
          </div>
          <v-chartRadar :bindData="bindData1"></v-chartRadar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartMultyBar from "../components/element/chartMultyBar";
import chartRadar from "../components/element/chartRadar";
import chartPieColumn from "../components/element/chartPieColumn";
export default {
  name: "page1",
  data() {
    return {
      bindData: {
        legend: ["环比数据", "当前数据", "同比数据"],
        xData: [
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
        yData: [
          [
            8625,
            8265,
            7220,
            6841,
            7413,
            6800,
            5900,
            6500,
            6220,
            5841,
            6413,
            6200,
          ],
          [
            10895,
            8896,
            10333,
            7798,
            12000,
            9500,
            8800,
            7900,
            6841,
            7413,
            6800,
            5900,
          ],
          [
            7625,
            7265,
            6220,
            5841,
            6413,
            6200,
            6500,
            5900,
            8265,
            7220,
            6841,
            7413,
          ],
        ],
      },
      bindData1: {
        name: "",
        value1: [
          { name: "吃", max: 6500, num: 4300 },
          { name: "住", max: 16000, num: 8000 },
          { name: "行", max: 30000, num: 21000 },
          { name: "游", max: 38000, num: 30000 },
          { name: "购", max: 52000, num: 40000 },
          { name: "娱", max: 52000, num: 35000 },
        ],
        value2: [4300, 8000, 21000, 30000, 40000, 35000],
      },
      bindData2: [
        {
          name: "吃",
          value: 26,
        },
        {
          name: "住",
          value: 84,
        },
        {
          name: "行",
          value: 84,
        },
        {
          name: "游",
          value: 84,
        },
        {
          name: "购",
          value: 84,
        },
        {
          name: "娱",
          value: 84,
        },
      ],
    };
  },
  components: {
    "v-chartMultyBar": chartMultyBar,
    "v-chartRadar": chartRadar,
    "v-chartPieColumn": chartPieColumn,
  },
};
</script>

<style lang="less" scoped>
.box_u {
  flex: 3.2;
  margin-top: 0.4rem;
  display: flex;
  .box_flex1 {
    flex: 1;
    display: flex;
    .item {
      flex: 1;
      display: grid;
      padding: 0.8rem;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(2, 50%);
      grid-auto-flow: column;
      .mapNumber {
        flex: 1;
        margin: 0.4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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
            font-size: 1.5rem;
            font-weight: 400;
            flex: 1;
            color: rgba(255, 255, 255, 1);
            background: rgba(24, 62, 95, 0.6);
            box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
              0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
            margin: 0 0.4rem 0 0;
            height: 1.8rem;
            line-height: 1.8rem;
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
    flex: 1.2;
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
  flex: 5;
  display: flex;
  margin-top: 0.4rem;
  .box {
    flex: 1;
  }
  .box_flex4 {
    flex: 8 !important;
    width: 66%;
    .item {
      height: 100%;
      display: flex;
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
