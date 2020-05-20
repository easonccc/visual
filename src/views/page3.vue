<template>
  <div class="content">
    <v-commonTitle title="游客画像数据驾驶舱"></v-commonTitle>

    <div class="box">
      <div class="box-head picker_item">
        <span class="dot"></span>
        <span>游客画像</span>
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
              style="width:60%;"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </div>
        </div>
      </div>
      <div class="box-body">
        <div class="up-box">
          <div class="box_flex1 item">
            <span class="title">运营商</span>
            <v-chartPieRadius0Column
              :bindData="bindData"
              tipStyle="one_line"
              type="人"
            ></v-chartPieRadius0Column>
          </div>
          <div class="box_flex1 item">
            <span class="title">游客年龄</span>
            <chart-bar :paramY="paramY" barWidth="20" :bindData="bindData1" />
          </div>
          <div class="box_flex1 item">
            <span class="title">消费水平</span>
            <chart-pie :bindData="bindData2" :showRatio="false"></chart-pie>
          </div>
          <div
            class="box_flex2 item"
            style="flex-direction:column;padding-bottom:1rem"
          >
            <span class="title">手机品牌</span>
            <v-chartPie :bindData="bindData3" type="人"></v-chartPie>
          </div>
        </div>
        <div class="down-box">
          <div class="box_flex3 item1">
            <div class="item">
              <span class="title">兴趣爱好</span>
              <chart-bar
                :styleColor="barColor"
                :paramY="paramY"
                barWidth="18"
                :bindData="bindData4"
              />
            </div>
            <div class="item">
              <span class="title">归属地</span>
              <chart-bar
                :styleColor="barColor"
                :paramY="paramY"
                barWidth="18"
                :bindData="bindData5"
              />
            </div>
          </div>
          <div class="box_flex1 item1">
            <div class="item">
              <span class="title">游客性别</span>
              <div class="item_body">
                <v-chartGender></v-chartGender>
              </div>
            </div>
            <div class="item">
              <span class="title">是否有车</span>
              <div class="item_body">
                <v-chartCar :bindData="bindData6"></v-chartCar>
              </div>
            </div>
          </div>
          <div class="box_flex2 item1">
            <div class="item">
              <span class="title">游客来源地</span>
              <v-chartPieColumn :bindData="bindData7"></v-chartPieColumn>
            </div>
            <div class="item">
              <span class="title">游客类型比例</span>
              <v-chartPieColumn :bindData="bindData8"></v-chartPieColumn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chartPieRadius0Column from "../components/element/chartPieRadius0Column";
import ChartBar from "../components/myEcharts/chartBar";
import ChartPie from "../components/myEcharts/chartPie";
import chartPie from "../components/element/chartPie";
import chartGender from "../components/element/chartGender";
import chartCar from "../components/element/chartCar";
import chartPieColumn from "../components/element/chartPieColumn";

export default {
  name: "page1",
  data() {
    return {
      value: null,
      value1: "",
      bindData: [
        {
          name: "中国移动",
          value: 54.33,
          value2: 1800,
        },
        {
          name: "中国联通",
          value: 30.33,
          value2: 4200,
        },
        {
          name: "中国电信",
          value: 15.14,
          value2: 1000,
        },
      ],
      bindData1: [
        ["0-18岁", "18-30岁", "30-40岁", "40-50岁", "50-60岁", "≥60岁"],
        ["28", "59", "42", "30", "10", "5"],
      ],
      paramY: {
        unit: "%",
        max: "20",
      },
      bindData2: [
        {
          name: "低水平",
          value: 2680,
        },
        {
          name: "中水平",
          value: 3400,
        },
        {
          name: "高水平",
          value: 3500,
        },
      ],
      bindData3: [
        {
          name: "OPPO",
          value: 75,
          value2: 7800,
        },
        {
          name: "华为",
          value: 26,
          value2: 9809,
        },
        {
          name: "vivo",
          value: 28,
          value2: 9809,
        },
        {
          name: "苹果",
          value: 26,
          value2: 8620,
        },
        {
          name: "小米",
          value: 26,
          value2: 8620,
        },
        {
          name: "魅族",
          value: 26,
          value2: 8620,
        },
        {
          name: "三星",
          value: 26,
          value2: 8620,
        },
        {
          name: "金立",
          value: 26,
          value2: 8620,
        },
        {
          name: "乐视",
          value: 26,
          value2: 8620,
        },
        {
          name: "其他",
          value: 26,
          value2: 8620,
        },
      ],
      bindData4: [
        [
          "聊天软件",
          "购物",
          "影音",
          "生活实用",
          "新闻阅读",
          "效率办公",
          "金融理财",
          "图像",
          "旅游",
          "丽人母婴",
          "生活服务",
          "汽车",
          "教育",
          "运动健康",
        ],
        [
          "30",
          "20",
          "25",
          "10",
          "6",
          "5",
          "5",
          "5.4",
          "5.1",
          "4.7",
          "4.4",
          "3.5",
          "4",
          "3",
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
        ["rgba(46,217,253,1)", "rgba(46,217,253,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
        ["rgba(46,217,253,1)", "rgba(46,217,253,0.3)"],
        ["rgba(132,134,227,1)", "rgba(132,134,227,0.3)"],
      ],
      bindData5: [
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
          "30",
          "20",
          "25",
          "10",
          "6",
          "5",
          "5",
          "5.4",
          "5.1",
          "4.7",
          "4.4",
          "3.5",
          "4",
          "3",
          "4.4",
          "3.5",
          "4",
          "4.4",
          "3.5",
        ],
      ],
      bindData6: [
        { name: "无车", value: 435000, percent: 65.5 },
        { name: "有车", value: 665000, percent: 43.5 },
      ],
      bindData7: [
        {
          name: "国际游客",
          value: 26,
        },
        {
          name: "国内游客",
          value: 84,
        },
      ],
      bindData8: [
        {
          name: "自由行",
          value: 42,
        },
        {
          name: "自驾游",
          value: 27,
        },
        {
          name: "团队游",
          value: 31,
        },
      ],
    };
  },
  components: {
    ChartBar,
    "v-chartPieRadius0Column": chartPieRadius0Column,
    ChartPie,
    "v-chartPie": chartPie,
    "v-chartGender": chartGender,
    "v-chartCar": chartCar,
    "v-chartPieColumn": chartPieColumn,
  },
};
</script>

<style lang="less" scoped>
.box {
  flex: 1;
  display: flex;
  flex-direction: column;
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
  .box-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    .up-box {
      height: 48%;
      margin-top: 0.4rem;
      display: flex;
    }
    .down-box {
      flex: 1;
      display: flex;
      margin-top: 0.4rem;
    }
    .item {
      border: 1px solid rgba(255, 255, 255, 0.2);
      margin-right: 0.4rem;
      .title {
        color: #fff;
        height: 0.8rem;
        font-size: 0.6rem;
        padding: 0.4rem 0 0 0.4rem;
      }
      &:last-child {
        margin: 0;
      }
    }

    .item1 {
      display: flex;
      flex-direction: column;
      border: none;
      margin-right: 0.4rem;
      .item {
        flex: 1;
        margin-bottom: 0.4rem;
        margin-right: 0;
        display: flex;

        flex-direction: column;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .box_flex1 {
      flex: 1;
      display: flex;
      flex-direction: column;
      .item_body {
        flex: 1;
        padding: 0 1.1rem;
      }
    }
    .box_flex2 {
      flex: 1.1;
      display: flex;
      flex-direction: row;
      margin-right: 0;
      .item {
        flex: 1;
        margin-right: 0.4rem;
        margin-bottom: 0;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .box_flex3 {
      flex: 2.03;
    }
  }
}
</style>
