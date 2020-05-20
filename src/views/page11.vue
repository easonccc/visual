<template>
  <div class="content">
    <v-commonTitle title="搜索引擎驾驶舱"></v-commonTitle>
    <div class="top">
      <div class="left box">
        <Word-cloud-chart
          id="echarts05"
          :title="title"
          :data="echarts05Data"
          :width="width"
          :height="height"
        ></Word-cloud-chart>
      </div>
      <div class="middle box">
        <div class="box-head">
          <span class="dot"></span>
          <span>热搜排行榜</span>
        </div>
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
            v-for="(v, i) in tableData"
            :key="i"
            :class="v.active ? 'active' : ''"
          >
            <td>{{ i + 1 < 10 ? "0" + (i + 1) : i + 1 }}</td>
            <td>{{ v.city }}</td>
            <td>{{ v.pro }}</td>
            <td>{{ v.area }}</td>
            <td>{{ v.level }}</td>
            <td>{{ v.hot }}</td>
          </tr>
        </table>
      </div>
      <div class="right box">
        <div class="box-head">
          <span class="dot"></span>
          <span>搜索引擎使用排行</span>
        </div>
        <chart-bar />
      </div>
    </div>
    <div class="bottom box">
      <div class="box-head">
        <span class="dot"></span>
        <span>热度关键字搜索趋势</span>
      </div>
      <div class="hotWord">
        <span>关键词:</span>
        <div class="wordBox">
          <div>巫山小三峡</div>
          <div>酉阳桃花源</div>
          <div>万州大瀑布</div>
        </div>
        <el-button
          size="medium"
          icon="el-icon-plus"
          style="height: 0.84rem;
    border: 0.01rem solid rgb(27, 178, 210);
    display: flex;
    align-items: center;
    padding: 0;
    border-radius: 0;
    color: #1BB2D2;
    background: transparent;
    font-size: 0.26rem;
    padding: 0 .34rem;"
          >添加对比</el-button
        >
        <el-button
          size="medium"
          icon="el-icon-check"
          style="height: 0.84rem;
    border: 0.01rem solid rgb(27, 178, 210);
    display: flex;
    align-items: center;
    padding: 0;
    border-radius: 0;
    color: #1BB2D2;
    background: transparent;
    font-size: 0.26rem;
    padding: 0 .34rem;"
          >确定查询</el-button
        >
      </div>
      <div class="itemBox trendTable">
        <!-- <div class="item" v-for="(v,i) in infoArr" :key="i">

        </div>-->
        <div class="item" v-for="(v, i) in trendArr" :key="i">
          <Chart-line></Chart-line>
          <div class="searchBox">
            <div class="title2">搜索指数概览:</div>
          </div>
          <el-table :data="hotData" cell-style="padding:4px;background:#03416D">
            <el-table-column prop="name" label="关键词">
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column prop="rate1" label="整体日均值"></el-table-column>
            <el-table-column prop="rate2" label="移动日均值"></el-table-column>
            <el-table-column prop="rate3" label="整体同比">
              <template slot-scope="scope">
                <div v-if="scope.row.rate3 < 0" class="info">
                  {{ scope.row.rate3 + "%" }}
                  <img src="../assets/img/down.png" />
                </div>
                <div v-else="scope.row.rate3 < 0" class="info">
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
          name: "巫山小三峡",
          value: 15000
        },
        {
          name: "巫山神女景区",
          value: 10081
        },
        {
          name: "万州大瀑布",
          value: 9386
        },
        {
          name: "缙云山",
          value: 7500
        },
        {
          name: "洪崖洞",
          value: 7500
        },
        {
          name: "愚王祠",
          value: 6500
        },
        {
          name: "巫溪红池坝",
          value: 6500
        },
        {
          name: "酉阳桃花源",
          value: 6000
        },
        {
          name: "大足石刻",
          value: 4500
        },
        {
          name: "文化强国",
          value: 3800
        },
        {
          name: "国家主权",
          value: 3000
        },
        {
          name: "武装颠覆",
          value: 2500
        },
        {
          name: "领土完整",
          value: 2300
        },
        {
          name: "安全",
          value: 2000
        },
        {
          name: "从严治党",
          value: 1900
        },
        {
          name: "现代化经济体系",
          value: 1800
        },
        {
          name: "国防动员",
          value: 1700
        },
        {
          name: "信息化战争",
          value: 1600
        },
        {
          name: "局部战争",
          value: 1500
        },
        {
          name: "教育",
          value: 1200
        },
        {
          name: "职业教育",
          value: 1100
        },
        {
          name: "兵法",
          value: 900
        },
        {
          name: "一国两制",
          value: 800
        },
        {
          name: "特色社会思想",
          value: 700
        },
        {
          name: "巫山小三峡",
          value: 15000
        },
        {
          name: "巫山神女景区",
          value: 10081
        },
        {
          name: "万州大瀑布",
          value: 9386
        },
        {
          name: "缙云山",
          value: 7500
        },
        {
          name: "洪崖洞",
          value: 7500
        },
        {
          name: "愚王祠",
          value: 6500
        },
        {
          name: "巫溪红池坝",
          value: 6500
        },
        {
          name: "酉阳桃花源",
          value: 6000
        },
        {
          name: "大足石刻",
          value: 4500
        },
        {
          name: "文化强国",
          value: 3800
        },
        {
          name: "国家主权",
          value: 3000
        },
        {
          name: "武装颠覆",
          value: 2500
        },
        {
          name: "领土完整",
          value: 2300
        },
        {
          name: "安全",
          value: 2000
        },
        {
          name: "从严治党",
          value: 1900
        },
        {
          name: "现代化经济体系",
          value: 1800
        },
        {
          name: "国防动员",
          value: 1700
        },
        {
          name: "信息化战争",
          value: 1600
        },
        {
          name: "局部战争",
          value: 1500
        },
        {
          name: "教育",
          value: 1200
        },
        {
          name: "职业教育",
          value: 1100
        },
        {
          name: "兵法",
          value: 900
        },
        {
          name: "一国两制",
          value: 800
        },
        {
          name: "特色社会思想",
          value: 700
        }
      ],
      tableData: [
        {
          city: "成都",
          pro: "四川省",
          area: "西南",
          level: "新一线城市",
          hot: "84.3",
          active: false
        },
        {
          city: "深圳",
          pro: "广东省",
          area: "华南",
          level: "一线城市",
          hot: "83.2",
          active: false
        },
        {
          city: "西安",
          pro: "广东省",
          area: "华南",
          level: "一线城市",
          hot: "83.2",
          active: false
        },
        {
          city: "杭州",
          pro: "广东省",
          area: "华南",
          level: "一线城市",
          hot: "83.2",
          active: false
        },
        {
          city: "重庆",
          pro: "广东省",
          area: "华南",
          level: "一线城市",
          hot: "83.2",
          active: true
        },
        {
          city: "武汉",
          pro: "广东省",
          area: "华南",
          level: "一线城市",
          hot: "83.2",
          active: false
        },
        {
          city: "郑州",
          pro: "广东省",
          area: "华南",
          level: "一线城市",
          hot: "83.2",
          active: false
        },
        {
          city: "苏州",
          pro: "广东省",
          area: "华南",
          level: "一线城市",
          hot: "83.2",
          active: false
        },
        {
          city: "天津",
          pro: "广东省",
          area: "华南",
          level: "一线城市",
          hot: "83.2",
          active: false
        },
        {
          city: "南京",
          pro: "广东省",
          area: "华南",
          level: "一线城市",
          hot: "83.2",
          active: false
        }
      ],
      bindData: [
        [
          "12月1日",
          "12月6日",
          "12月11日",
          "12月16日",
          "12月21日",
          "12月26日",
          "12月31日"
        ],
        [365, 236, 422, 356, 568, 398, 577]
      ],
      hotData: [
        {
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
      ]
    };
  },
  components: {
    WordCloudChart,
    ChartBar,
    ChartLine
  }
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  flex: 1;
  > div {
    margin-right: 0.4rem;
    &:last-child {
      margin-right: 0;
    }
  }
  .left {
    width: 25%;

    color: #fff;

    .title {
      font-size: 0.32rem;
      margin-bottom: 0.4rem;
    }
  }
  .middle {
    width: 40%;
    display: flex;
    flex-direction: column;
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
      .active td {
        color: #ef6767;
      }
      td {
        text-align: center;
        background: rgba(46, 217, 253, 0.2);
        border: 0.02rem solid rgba(42, 204, 240, 1);
      }
    }
  }
  .right {
    flex: 1;
  }
}
.bottom {
  flex: 1;
  margin-top: 0.4rem;
  .hotWord {
    display: flex;
    //   justify-content: space-between;
    align-items: center;
    background: #03416d;
    padding: 0.25rem 1.35rem;
    margin-bottom: 0.2rem;
    > span {
      margin-right: 0.32rem;
      font-size: 0.32rem;
      color: #fff;
    }
    .wordBox {
      display: flex;
      justify-content: space-between;
      > div {
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
      > img {
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
      margin-right: 0.2rem;
      flex: 1;
      width: 33%;
      &:last-child {
        margin-right: 0;
      }

      .title {
        color: #ffffff;
        font-size: 0.32rem;
      }
    }
  }
}
</style>
<style lang="less">
.trendTable {
  th,
  td,
  .el-table {
    background: #03416d;
    color: #fff;
    font-size: 0.28rem;
    padding: 0.1rem;
  }
}
.el-table th > .cell {
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  vertical-align: middle;
  padding-left: 5px !important;
  padding-right: 5px !important;
  width: 100%;
}
</style>
