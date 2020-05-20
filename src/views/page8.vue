<template>
  <div class="content">
    <v-commonTitle title="关注度数据驾驶舱"></v-commonTitle>
    <div class="box_r">
      <div class="box_flex1" style="margin: 0 0.4rem">
        <div class="up">
          <div class="item1">
            <div class="box">
              <Word-cloud-chart
                id="echarts05"
                :title="title"
                :data="echarts05Data"
                :width="width"
                :height="height"
              ></Word-cloud-chart>
            </div>
          </div>
          <div class="item2">
            <div class="box">
              <div class="box-head"><span class="dot"></span>关注度排行榜</div>
              <table class="sort">
                <tr>
                  <th>排名</th>
                  <th>城市</th>
                  <th>省份</th>
                  <th>所属大区</th>
                  <th>城市分级</th>
                  <th>热度指数</th>
                </tr>
                <tr
                  v-for="(v, i) in tableData1"
                  :key="i"
                  :class="v.city == '宜昌市博物馆' ? 'bgcolor' : ''"
                >
                  <td>{{ i + 1 < 10 ? "0" + (i + 1) : i + 1 }}</td>
                  <td>{{ v.city }}</td>
                  <td>{{ v.pro }}</td>
                  <td>{{ v.area }}</td>
                  <td>{{ v.rank }}</td>
                  <td>{{ v.ex }}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="down">
          <div class="box">
            <div class="box-head">
              <span class="dot"></span>搜索引擎使用排名
            </div>
            <chart-bar :styleColor="barColor" :bindData="bindData1" />
          </div>
        </div>
      </div>
      <div class="box_flex2">
        <div class="box">
          <div class="box-head">
            <span class="dot"></span>热度关键字搜索趋势
          </div>

          <div class="itemBox trendTable">
            <!-- <div class="item" v-for="(v,i) in infoArr" :key="i">

        </div>-->

            <div class="item" v-for="(v, i) in trendArr" :key="i">
              <div class="title">
                <span>搜索指数:</span>
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
              <div class="hotWord">
                <div class="wordBox">
                  <span>关键词:</span>
                  <div>宜昌市博物馆</div>
                  <div>博物馆</div>
                  <div>宜昌市</div>
                </div>
                <div class="paly">
                  模拟播放
                </div>
              </div>
              <Chart-line></Chart-line>

              <div class="searchBox">
                <div class="title2">搜索指数概览:</div>
              </div>
              <el-table :data="hotData">
                <el-table-column prop="name" label="关键词">
                  <template slot-scope="scope">
                    <div id="box"></div>
                    {{ scope.row.name }}</template
                  >
                </el-table-column>
                <el-table-column
                  prop="rate1"
                  label="整体日均值"
                ></el-table-column>
                <el-table-column
                  prop="rate2"
                  label="移动日均值"
                ></el-table-column>
                <el-table-column prop="rate3" label="整体同比">
                  <template slot-scope="scope">
                    <div v-if="scope.row.rate3 < 0" class="info">
                      {{ scope.row.rate3 + "%" }}
                      <img src="../assets/img/down.png" />
                    </div>
                    <div v-else class="info">
                      {{ scope.row.rate3 + "%" }}
                      <img src="../assets/img/up.png" />
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="rate4" label="整体环比">
                  <template slot-scope="scope">
                    <div v-if="scope.row.rate4 < 0" class="info">
                      {{ scope.row.rate4 + "%" }}
                      <img src="../assets/img/down.png" />
                    </div>
                    <div v-else="scope.row.rate4 < 0" class="info">
                      {{ scope.row.rate4 + "%" }}
                      <img src="../assets/img/up.png" />
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="rate5" label="移动同比">
                  <template slot-scope="scope">
                    <div v-if="scope.row.rate5 < 0" class="info">
                      {{ scope.row.rate5 + "%" }}
                      <img src="../assets/img/down.png" />
                    </div>
                    <div v-else="scope.row.rate5 < 0" class="info">
                      {{ scope.row.rate5 + "%" }}
                      <img src="../assets/img/up.png" />
                    </div>
                  </template>
                </el-table-column>
                <el-table-column prop="rate6" label="移动环比">
                  <template slot-scope="scope">
                    <div v-if="scope.row.rate6 < 0" class="info">
                      {{ scope.row.rate6 + "%" }}
                      <img src="../assets/img/down.png" />
                    </div>
                    <div v-else="scope.row.rate6 < 0" class="info">
                      {{ scope.row.rate6 + "%" }}
                      <img src="../assets/img/up.png" />
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordCloudChart from "../components/myEcharts/WordCloudChart";
import ChartBar from "../components/myEcharts/chartBar";
import ChartLine from "../components/myEcharts/chartLineM";
export default {
  name: "page1",
  data() {
    return {
      title: "",
      width: "100%",
      height: "100%",
      trendArr: [1, 2, 3],
      echarts05Data: [
        {
          name: "宜昌市博物馆",
          value: 15000,
        },
        {
          name: "神农洞",
          value: 10081,
        },
        {
          name: "生命之光",
          value: 9386,
        },
        {
          name: "岩石矿物",
          value: 7500,
        },
        {
          name: "中华鲟",
          value: 7500,
        },
        {
          name: "长江大保护",
          value: 6500,
        },
        {
          name: "天燕",
          value: 6500,
        },
        {
          name: "大溪文化",
          value: 6000,
        },
        {
          name: "大足石刻",
          value: 4500,
        },
        {
          name: "文化强国",
          value: 3800,
        },
        {
          name: "国家主权",
          value: 3000,
        },
        {
          name: "武装颠覆",
          value: 2500,
        },
        {
          name: "领土完整",
          value: 2300,
        },
        {
          name: "安全",
          value: 2000,
        },
        {
          name: "从严治党",
          value: 1900,
        },
        {
          name: "现代化经济体系",
          value: 1800,
        },
        {
          name: "国防动员",
          value: 1700,
        },
        {
          name: "信息化战争",
          value: 1600,
        },
        {
          name: "局部战争",
          value: 1500,
        },
        {
          name: "教育",
          value: 1200,
        },
        {
          name: "职业教育",
          value: 1100,
        },
        {
          name: "兵法",
          value: 900,
        },
        {
          name: "一国两制",
          value: 800,
        },
        {
          name: "特色社会思想",
          value: 700,
        },
        {
          name: "巫山小三峡",
          value: 15000,
        },
        {
          name: "巫山神女景区",
          value: 10081,
        },
        {
          name: "万州大瀑布",
          value: 9386,
        },
        {
          name: "缙云山",
          value: 7500,
        },
        {
          name: "洪崖洞",
          value: 7500,
        },
        {
          name: "愚王祠",
          value: 6500,
        },
        {
          name: "巫溪红池坝",
          value: 6500,
        },
        {
          name: "酉阳桃花源",
          value: 6000,
        },
        {
          name: "大足石刻",
          value: 4500,
        },
        {
          name: "文化强国",
          value: 3800,
        },
        {
          name: "国家主权",
          value: 3000,
        },
        {
          name: "武装颠覆",
          value: 2500,
        },
        {
          name: "领土完整",
          value: 2300,
        },
        {
          name: "安全",
          value: 2000,
        },
        {
          name: "从严治党",
          value: 1900,
        },
        {
          name: "现代化经济体系",
          value: 1800,
        },
        {
          name: "国防动员",
          value: 1700,
        },
        {
          name: "信息化战争",
          value: 1600,
        },
        {
          name: "局部战争",
          value: 1500,
        },
        {
          name: "教育",
          value: 1200,
        },
        {
          name: "职业教育",
          value: 1100,
        },
        {
          name: "兵法",
          value: 900,
        },
        {
          name: "一国两制",
          value: 800,
        },
        {
          name: "特色社会思想",
          value: 700,
        },
      ],
      tableData1: [
        {
          city: "成都",
          pro: "四川省",
          area: "西南",
          rank: "新一线城市",
          ex: "84.3",
        },
        {
          city: "深圳",
          pro: "广东省",
          area: "华南",
          rank: "一线城市",
          ex: "83.2",
        },
        {
          city: "西安",
          pro: "陕西省",
          area: "西北",
          rank: "新一线城市",
          ex: "82.5",
        },
        {
          city: "杭州",
          pro: "浙江省",
          area: "华东",
          rank: "新一线城市",
          ex: "81.3",
        },
        {
          city: "宜昌市博物馆",
          pro: "湖北省",
          area: "华中",
          rank: "二线城市",
          ex: "81.3",
        },
        {
          city: "武汉",
          pro: "湖北省",
          area: "华中",
          rank: "新一线城市",
          ex: "81.6",
        },
        {
          city: "成都",
          pro: "四川省",
          area: "西南",
          rank: "新一线城市",
          ex: "84.3",
        },
        {
          city: "成都",
          pro: "四川省",
          area: "西南",
          rank: "新一线城市",
          ex: "84.3",
        },
        {
          city: "成都",
          pro: "四川省",
          area: "西南",
          rank: "新一线城市",
          ex: "84.3",
        },
        {
          city: "成都",
          pro: "四川省",
          area: "西南",
          rank: "新一线城市",
          ex: "84.3",
        },
        {
          city: "成都",
          pro: "四川省",
          area: "西南",
          rank: "新一线城市",
          ex: "84.3",
        },
        {
          city: "成都",
          pro: "四川省",
          area: "西南",
          rank: "新一线城市",
          ex: "84.3",
        },
      ],
      barColor: [
        ["#FF5858", "#FF5858"],
        ["#FFE058", "#FFE058"],
        ["#E158FF", "#E158FF"],
        ["#19E2E6", "#19E2E6"],
        ["#19E2E6", "#19E2E6"],
        ["#19E2E6", "#19E2E6"],
        ["#19E2E6", "#19E2E6"],
        ["#19E2E6", "#19E2E6"],
        ["#19E2E6", "#19E2E6"],
        ["#19E2E6", "#19E2E6"],
        ["#19E2E6", "#19E2E6"],
        ["#19E2E6", "#19E2E6"],
        ["#19E2E6", "#19E2E6"],
      ],
      hotData: [
        {
          rate1: "7073",
          rate2: "4930",
          rate3: -1,
          rate4: -15,
          rate5: 3,
          rate6: 21,
          name: "宜昌市博物馆",
        },
        {
          rate1: "7073",
          rate2: "4930",
          rate3: -1,
          rate4: -15,
          rate5: 3,
          rate6: 21,
          name: "博物馆",
        },
        {
          rate1: "7073",
          rate2: "4930",
          rate3: -1,
          rate4: -15,
          rate5: 3,
          rate6: 21,
          name: "宜昌市",
        },
      ],
      bindData1: [
        [
          "百度",
          "搜狗",
          "360搜索",
          "必应",
          "有道",
          "搜狐",
          "谷歌",
          "知乎",
          "途牛",
          "马蜂窝",
          "穷游",
          "去哪儿",
        ],
        [
          "3800",
          "3600",
          "2700",
          "1541",
          "1200",
          "1184",
          "1113",
          "1222",
          "1500",
          "1313",
          "1300",
          "1000",
          "800",
        ],
      ],
    };
  },
  created() {},
  methods: {},
  components: {
    ChartBar,
    ChartLine,
    WordCloudChart,
  },
};
</script>

<style lang="less" scoped>
.box_r {
  flex: 1;
  display: flex;
  .box_flex1 {
    width: 58%;
    display: flex;
    flex-direction: column;
    .up {
      height: 56%;
      display: flex;
      margin-bottom: 0.4rem;
      .item1 {
        flex: 1;
        margin-right: 0.4rem;
        overflow: hidden;
      }
      .item2 {
        flex: 2;
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
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .active {
            color: #ec991f;
          }
          #active2 {
            color: #d0021b;
          }
          .bgcolor {
            color: #ec991f;
          }
          td {
            text-align: center;
            background: rgba(46, 217, 253, 0.2);
            border: 0.02rem solid rgba(42, 204, 240, 1);
          }
        }
      }
    }
    .down {
      flex: 1;
    }
  }
  .box_flex2 {
    max-width: 30rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    .box {
      flex: 1;
      width: 100%;
      .title {
        color: #fff;
        font-size: 0.3rem;
        border-bottom: 1px solid #13709c;
        padding-bottom: 0.2rem;
        .time {
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
      .hotWord {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #03416d;
        padding: 0 1.35rem;
        margin: 0.1rem 0;
        .wordBox {
          > span {
            margin-right: 0.32rem;
            font-size: 0.32rem;
            color: #fff;
            padding-top: 0.2rem;
          }
          display: flex;
          justify-content: space-between;
          > div {
            padding: 0 0.4rem;
            height: 0.8rem;
            padding-left: 0.57rem;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            position: relative;
            color: #fff;
            font-size: 0.22rem;
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
            &:nth-child(2) {
              border: 1px solid #ff5858ff;
              &::before {
                background: #ff5858ff;
              }
            }
            &:nth-child(3) {
              border: 1px solid #ffe058ff;
              &::before {
                background: #ffe058ff;
              }
            }
            &:nth-child(4) {
              border: 1px solid #e158ffff;
              &::before {
                background: #e158ffff;
              }
            }
          }
        }
        .paly {
          border: 0.01rem solid rgba(27, 178, 210, 1);
          height: 0.8rem;
          line-height: 0.8rem;
          color: #1bb2d2;
          font-size: 0.32rem;
          cursor: pointer;
        }
      }
      .itemBox {
        display: flex;
        flex-direction: column;
        .searchBox {
          .title2 {
            color: #fff;
            font-size: 0.32rem;
          }
        }
        .item {
          .picker {
            /deep/.el-range-editor.el-input__inner {
              padding: 2px 10px;
            }
          }
          &:nth-child(2) {
            margin: 0.2rem 0;
          }
          display: flex;
          flex-direction: column;
          background: rgba(3, 65, 109, 1);
          border: 0.01rem solid rgba(255, 255, 255, 0.2);
          padding: 0.28rem 0.54rem;
          margin-right: 0.2rem;
          flex: 1;
          height: 33.33%;
          img {
            width: 0.2rem;
          }
        }
      }

      /deep/.trendTable {
        th,
        td,
        .el-table {
          background: #03416d;
          color: #fff;
          font-size: 0.1rem;
          padding: 0.1rem;
          border-color: #134e76;
        }
      }
      /deep/ .el-table th > .cell {
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        vertical-align: middle;
        padding-left: 5px !important;
        padding-right: 5px !important;
        line-height: 0.7rem;
        width: 100%;
        font-size: 0.1rem !important;
        border-color: #134e76;
      }
      /deep/.el-table {
        padding: 0 !important;
      }
      /deep/.el-table::before {
        height: 0 !important;
      }
      /deep/ .trendTable th {
        padding: 0.01 !important;
      }
      /deep/.el-table .cell {
        line-height: 0.5rem;
        font-size: 0.1rem !important;
      }
    }
  }
}
</style>
