<template>
  <div class="content">
    <v-commonTitle title="车流数据驾驶舱"></v-commonTitle>
    <div class="box_u">
      <div class="box_flex1" style="background-color: rgba(1, 104, 185, 0.2);">
        <div class="item">
          <div class="mapNumber">
            <div class="up">
              <span>当前实时车辆总量:</span>
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
              <div class="per_right">
                同比: <span> -0.2%</span
                ><img src="../assets/img/downsmall.png" />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>本月车辆总量:</span>
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
              <div class="per_right">
                同比: <span> -0.2%</span
                ><img src="../assets/img/downsmall.png" />
              </div>
            </div>
          </div>
          <div class="mapNumber">
            <div class="up">
              <span>本年车辆总量:</span>
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
                环比: <span>+125%</span><img src="../assets/img/upsmall.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box_flex2" style="margin-left: 0.4rem">
        <div class="up">
          <div class="up_right">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>车辆轨迹追踪
                <el-input
                  v-model="value2"
                  style="width: 26%;float: right"
                  placeholder="请输入车牌号"
                ></el-input>
              </div>
              <div class="box-body">
                <v-mapPath></v-mapPath>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box_flex2" style="margin-left: 0.4rem">
        <div class="up">
          <div class="up_right">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>主要道路实时路况
              </div>
              <div class="box-body">
                <v-mapRoad></v-mapRoad>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box_d">
      <div class="box_flex3">
        <div class="up">
          <div class="box">
            <div class="box-head"><span class="dot"></span>停车场车辆统计</div>
            <div class="box-body" style="padding: 0.4rem">
              <v-chartArea></v-chartArea>
            </div>
          </div>
        </div>
        <div class="down">
          <div class="box">
            <div class="box-head">
              <span class="dot"></span>停车场承载量趋势
            </div>
            <div class="box-body" style="padding: 0.4rem">
              <v-chartPage3Right></v-chartPage3Right>
            </div>
          </div>
        </div>
      </div>
      <div class="box_flex4" style="margin-left: 0.4rem">
        <div class="item">
          <div class="box">
            <div class="box-head">
              <span class="dot"></span>停车场车辆走势
              <div class="time" style="width:55%; float:right">
                <div class="time">
                  <span>今日</span>
                  <span>本月</span>
                  <span>本年</span>
                </div>
                <div class="picker" style="float:right">
                  自定义 :
                  <el-date-picker
                    v-model="value1"
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

            <v-chartArea
              :areaStyle="areaColor"
              yTitle="车次"
              gridTop="20%"
            ></v-chartArea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chartPage3Right from "../components/element/chartPage3Right";
import chartArea from "../components/element/chartArea";
import mapPath from "../components/map/mapPath";
import mapRoad from "../components/map/mapRoad";
import mapJk from "../components/map/mapJk";
export default {
  name: "page1",
  data() {
    return {
      deviceActive: 0,
      deviceActive1: 0,
      value2: "",
      value: "1",
      value1: "1",
      areaColor: ["#FFE05833", "#ffe058"],
    };
  },
  created() {},
  methods: {
    selType(item, index) {
      this.deviceActive = index;
    },
    selType1(item, index) {
      this.deviceActive1 = index;
    },
  },
  components: {
    "v-chartPage3Right": chartPage3Right,
    "v-chartArea": chartArea,
    "v-mapPath": mapPath,
    "v-mapRoad": mapRoad,
    "v-mapJk": mapJk,
  },
};
</script>

<style lang="less" scoped>
.box_u {
  height: 40%;
  margin-top: 0.4rem;
  display: flex;
  .box_flex1 {
    flex: 1;
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
        font-family: lcd;
        .up {
          display: flex;
          justify-content: space-between;
          > span {
            height: 0.45rem;
            font-size: 0.32rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 0.45rem;
          }
        }
        .down {
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
            height: 1.2rem;
            line-height: 1.2rem;
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
  .box_flex2 {
    flex: 2;
    display: flex;
    flex-direction: column;
    .up {
      height: 100%;
      flex: 1;
      display: flex;
      .up_left {
        width: 30%;
        margin-right: 0.4rem;
      }
      .up_right {
        flex: 1;
      }
    }
  }
}
.box_d {
  flex: 1;
  margin-top: 0.4rem;
  display: flex;
  .box_flex3 {
    flex: 3.03;
    display: flex;
    flex-direction: column;
    .up {
      height: 50%;
    }
    .down {
      flex: 1;
      margin-top: 0.4rem;
    }
  }
  .box_flex4 {
    flex: 2;
    display: flex;
    .item {
      flex: 1;
      .box {
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
}
</style>
