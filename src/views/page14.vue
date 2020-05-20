<template>
  <div class="content">
    <v-commonTitle title="电商OTA数据驾驶舱"></v-commonTitle>
    <div class="box_u">
      <div
        class="box_flex1"
        style="margin-right:0.4rem;background-color: rgba(1, 104, 185, 0.2);"
      >
        <div class="item">
          <div class="mapNumber">
            <div class="up">
              <span>本月电商OTA景区门票销售金额(元):</span>
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
              <span>冬季电商OTA景区门票销售金额(元):</span>
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
              <span>2020年电商OTA景区门票销售金额(万元):</span>
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
                <span class="dot"></span>年度热销品牌TOP10
              </div>
              <chart-bar2 :bindData="bindData" />
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
            <div class="itemBox">
              <div class="item" v-for="(v, i) in infoArr" :key="i">
                <div class="title">
                  <div class="img">
                    <img :src="'/img/OTA' + i + '.png'" alt="" />
                  </div>
                  <div>{{ v }}</div>
                </div>
                <chart-bar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartBar2 from "../components/myEcharts/chartBarH";
import ChartBar from "../components/myEcharts/chartBar2";
export default {
  name: "page1",
  data() {
    return {
      infoArr: [
        "官网电商",
        "微信电商",
        "同程",
        "携程",
        "驴妈妈",
        "美团",
        "飞猪",
      ],
      bindData: [
        [
          "巫山小三峡三日游",
          "武隆喀斯特旅游区三日游",
          "云阳龙缸景区三日游",
          "大足石刻景区三日游",
          "西阳桃花源三日游",
          "忠县石宝寨一日游",
          "缙云山国家级自然保护...",
          "大足石刻景区三日游",
          "江津四面山",
          "统景温泉风景区二日游",
        ],
        [
          "88.30",
          "83.92",
          "83.61",
          "78.32",
          "69.99",
          "64.98",
          "62.99",
          "54.69",
          "47.96",
          "41.08",
        ],
        [
          "88.30",
          "83.92",
          "83.61",
          "78.32",
          "69.99",
          "64.98",
          "62.99",
          "54.69",
          "47.96",
          "41.08",
        ],
      ],
    };
  },
  components: {
    ChartBar2,
    ChartBar,
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
        margin: 1rem;
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
      .itemBox {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        flex: 1;
        .item {
          display: flex;
          flex-direction: column;
          flex: 1;
          .title {
            display: flex;
            align-items: center;
            color: #ffffff;
            font-size: 0.6rem;
            .img {
              margin: 0 0.4rem;
            }
          }
        }
      }
    }
  }
}
</style>
