<template>
  <div class="content">
    <v-commonTitle title="舆情数据驾驶舱"></v-commonTitle>
    <div class="top">
      <div class="left box">
        <div class="infoBox box">
          <div class="title box-head">
            <span class="dot"></span>
            <span> 舆情总量(条):</span> <span>时间:2018年11月3日</span>
          </div>
          <div class="numBox">
            <div v-for="(v, i) in numArr1" :key="i">{{ v }}</div>
          </div>
        </div>
        <div class="box item">
          <div class="box-head">
            <span class="dot"></span>
            <span> 舆情占比</span>
          </div>
          <chart-pie></chart-pie>
        </div>
        <div class="box item" style="margin-top:0.4rem;">
          <div class="box-head">
            <span class="dot"></span>
            <span> 舆情渠道占比</span>
          </div>
          <chart-circle :bindData="bindData" type="percent"></chart-circle>
        </div>
      </div>
      <div class="right box">
        <div class="box-head">
          <span class="dot"></span>
          <span> 舆情列表</span>
          <div class="yqBox">
            <div class="box2">
              <div class="title">正面舆情</div>
              <table-diy :bindData="tableData1"></table-diy>
            </div>
            <div class="box2">
              <div class="title">中性舆情</div>
              <table-diy :bindData="tableData2"></table-diy>
            </div>
            <div class="box2">
              <div class="title">负面舆情</div>
              <table-diy :bindData="tableData3"></table-diy>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartBar from "../components/myEcharts/chartBar2";
import ChartTrend from "../components/myEcharts/chartTrend";
import ChartBar2 from "../components/myEcharts/chartBarH";
import ChartPie from "../components/myEcharts/chartPie";
import ChartCircle from "../components/myEcharts/chartCircle";
import TableDiy from "../components/table/tableDiy";
export default {
  name: "page1",
  data() {
    return {
      numArr1: ["-", "-", "-", "5", "4", "2", "9", "9", "9"],
      bindData: [
        {
          name: "论坛",
          value: 10,
          value2: 10000
        },
        {
          name: "评论",
          value: 30,
          value2: 30000
        },
        {
          name: "微博",
          value: 38,
          value2: 38000
        },
        {
          name: "微信平台",
          value: 16,
          value2: 16000
        },
        {
          name: "新闻网站",
          value: 6,
          value2: 6000
        }
      ],
      tableData1: {
        showIndex: false,
        headData: ["发表时间", "舆情类别", "平台", "内容"],
        tableData: [
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微博",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微信公众号",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微博",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微信公众号",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: true
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          }
        ],
        thbg: "rgba(240,98,96,0.3)",
        tdbg: "rgba(46,217,253,0.2)",
        tdbor: "0.02rem solid rgba(240,98,96,1)"
      },
      tableData2: {
        showIndex: false,
        headData: ["发表时间", "舆情类别", "平台", "内容"],
        tableData: [
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微博",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微信公众号",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微博",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微信公众号",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: true
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          }
        ],
        thbg: "rgba(236,153,31,0.3)",
        tdbg: "rgba(236,153,31,0.2)",
        tdbor: "0.02rem solid rgba(236,153,31,1)"
      },
      tableData3: {
        showIndex: false,
        headData: ["发表时间", "舆情类别", "平台", "内容"],
        tableData: [
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微博",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微信公众号",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微博",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "微信公众号",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: true
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          },
          {
            city: "2018.11.10 12:56",
            pro: "正面",
            area: "评论",
            level:
              "显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题显示内容标题...",
            active: false
          }
        ],
        thbg: "rgba(31,108,255,0.3)",
        tdbg: "rgba(31,108,255,0.2)",
        tdbor: "0.02rem solid rgba(31,108,255,1)"
      }
    };
  },
  components: {
    ChartBar,
    ChartTrend,
    ChartPie,
    ChartCircle,
    TableDiy,
    ChartBar2
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
    flex: 1;
    color: #fff;
    display: flex;
    flex-direction: column;
    .infoBox {
      height: 16%;
      margin-bottom: 0.4rem;
    }
    .title {
      font-size: 0.32rem;
      margin-bottom: 0.4rem;
      span {
        &:last-child {
          float: right;
        }
      }
    }
    .trendBox {
      font-size: 0.4rem;
      margin-top: 0.4rem;
      display: flex;
      justify-content: space-between;
    }
    .numBox {
      font-family: "lcd";
      font-size: 1.5rem;
      display: flex;
      justify-content: space-between;
      margin: 0.6rem 0.3rem;
      > div {
        height: 1.2rem;
        padding: 0.15rem;
        padding-right: 0.2rem;
        background: rgba(24, 62, 95, 0.6);
        box-shadow: 0rem 0.01rem 0.05rem 0rem rgba(1, 104, 185, 1),
          0rem -0.01rem 0.05rem 0rem rgba(1, 104, 185, 1);
        display: flex;
        align-items: center;
      }
    }
    .item {
      flex: 1;
    }
  }
  .right {
    flex: 2.6;
    .yqBox {
      .box2 {
        &:nth-child(1) .title {
          color: #f06260;
        }

        &:nth-child(2) .title {
          color: #ec991f;
        }

        &:nth-child(3) .title {
          color: #1f6cff;
        }

        .title {
          text-align: center;
          font-size: 0.3rem;
          padding: 0.2rem 0;
        }

        background: rgba(3, 65, 109, 1);
        border: 0.01rem solid rgba(255, 255, 255, 0.2);
      }
    }
  }
}
</style>
