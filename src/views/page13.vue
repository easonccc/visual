<template>
  <div class="content">
    <v-commonTitle title="投诉数据驾驶舱"></v-commonTitle>
    <div class="box_u">
      <div
        class="box_flex1"
        style="margin-right:0.4rem;background-color: rgba(1, 104, 185, 0.2);"
      >
        <div class="item">
          <div class="mapNumber">
            <div class="up">
              <span>本月投诉总量</span>
              <span>时间：2020年04月15日</span>
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
              <span>受理总量</span>
              <span>受理率：92%</span>
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
              <span>结案时长</span>
              <span>时间：2020年04月15日</span>
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
              <span>结案总量</span>
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
                <span class="dot"></span>结案结果分析
              </div>
              <v-chartPieColumn
                type="条"
                :bindData="bindData"
              ></v-chartPieColumn>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="box-head"><span class="dot"></span>投诉来源</div>
              <v-chartPieRadius0Column
                :bindData="bindData2"
                type="条"
              ></v-chartPieRadius0Column>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="box-head"><span class="dot"></span>投诉分类</div>
              <v-chartPieColumn
                type="条"
                :bindData="bindData1"
              ></v-chartPieColumn>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box_d">
      <div class="box_flex4" style="flex:2.5">
        <div class="item">
          <div class="box">
            <div class="box-head">
              <span class="dot"></span>
              各项旅游服务及商户投诉
            </div>
            <div class="box-body">
              <div class="item" v-for="(item, index) in bindDataT" :key="index">
                <div class="item_up">
                  <img :src="'/img/type' + index + '.png'" />{{
                    item.name
                  }}类投诉排名
                </div>
                <table-diy2 :bindData="item.bindData"></table-diy2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartPieColumn from "../components/element/chartPieColumn";
import chartPieRadius0Column from "../components/element/chartPieRadius0Column";
import TableDiy2 from "../components/table/tableDiy2";
export default {
  name: "page1",
  data() {
    return {
      bindData: [
        {
          name: "自行和解",
          value: 10,
          value2: 1000,
        },
        {
          name: "调解成功",
          value: 50,
          value2: 5000,
        },
        {
          name: "调解失败",
          value: 2,
          value2: 300,
        },
        {
          name: "不予受理",
          value: 20,
          value2: 2000,
        },
        {
          name: "已移交",
          value: 8,
          value2: 800,
        },
        {
          name: "质保金赔偿",
          value: 2,
          value2: 200,
        },
        {
          name: "已退回",
          value: 8,
          value2: 800,
        },
      ],
      bindData1: [
        {
          name: "住宿设施",
          value: 10,
          value2: 1000,
        },
        {
          name: "景区服务",
          value: 50,
          value2: 5000,
        },
        {
          name: "旅行社",
          value: 2,
          value2: 300,
        },
        {
          name: "在线旅游企业",
          value: 20,
          value2: 2000,
        },
        {
          name: "非法运营",
          value: 8,
          value2: 800,
        },
        {
          name: "购物",
          value: 2,
          value2: 200,
        },
        {
          name: "其他",
          value: 8,
          value2: 800,
        },
      ],
      bindData2: [
        {
          name: "12301旅游投诉平台",
          value: 54.33,
          value2: 1800,
        },
        {
          name: "旅游投诉热线",
          value: 30.33,
          value2: 4200,
        },
        {
          name: "工商投诉平台",
          value: 15.14,
          value2: 1000,
        },
        {
          name: "12315质量投诉热线",
          value: 30.33,
          value2: 4200,
        },
        {
          name: "市长热线",
          value: 15.14,
          value2: 1000,
        },
      ],
      bindData3: [
        [
          { name: "武汉快乐自助火锅", rate: 4.8 },
          { name: "武汉小火锅大菜馆", rate: 4.7 },
          { name: "武汉自助火锅", rate: 4.6 },
          { name: "武汉私房菜", rate: 4.5 },
          { name: "武汉私房菜", rate: 4.4 },
          { name: "武汉私房菜", rate: 4.3 },
          { name: "武汉私房菜", rate: 4.2 },
          { name: "武汉私房菜", rate: 4.1 },
          { name: "武汉私房菜", rate: 4.0 },
          { name: "武汉私房菜", rate: 3.9 },
        ],
        [
          { name: "武汉万达酒店", rate: 4.8 },
          { name: "武汉城市快捷(万州店)", rate: 4.7 },
          { name: "武汉如家酒店(江北区)", rate: 4.6 },
          { name: "武汉苏宁宝嘉酒店", rate: 4.5 },
          { name: "宜昌万达酒店", rate: 4.4 },
          { name: "武汉富力万达嘉华酒店", rate: 4.3 },
          { name: "武汉富力万达嘉华酒店", rate: 4.2 },
          { name: "武汉富力万达嘉华酒店", rate: 4.1 },
          { name: "武汉富力万达嘉华酒店", rate: 4.0 },
          { name: "武汉富力万达嘉华酒店", rate: 3.9 },
        ],
        [
          { name: "滴滴打车", rate: 4.8 },
          { name: "百度智行", rate: 4.7 },
          { name: "高德易行", rate: 4.6 },
          { name: "湖北旅游大巴租赁", rate: 4.5 },
          { name: "湖北出租车公司", rate: 4.4 },
          { name: "湖北出租车公司", rate: 4.3 },
          { name: "湖北出租车公司", rate: 4.2 },
          { name: "湖北出租车公司", rate: 4.1 },
          { name: "湖北出租车公司", rate: 4.0 },
          { name: "湖北出租车公司", rate: 3.9 },
        ],
        [
          { name: "黄鹤楼", rate: 4.8 },
          { name: "木兰天地", rate: 4.7 },
          { name: "三峡大坝", rate: 4.6 },
          { name: "三峡人家", rate: 4.5 },
          { name: "三峡人家", rate: 4.4 },
          { name: "三峡人家", rate: 4.3 },
          { name: "三峡人家", rate: 4.2 },
          { name: "三峡人家", rate: 4.1 },
          { name: "三峡人家", rate: 4.0 },
          { name: "三峡人家", rate: 3.9 },
        ],
        [
          { name: "武汉热干面", rate: 4.8 },
          { name: "周黑鸭", rate: 4.7 },
          { name: "武昌鱼", rate: 4.6 },
          { name: "孝感米酒", rate: 4.5 },
          { name: "孝感米酒", rate: 4.4 },
          { name: "孝感米酒", rate: 4.3 },
          { name: "孝感米酒", rate: 4.2 },
          { name: "孝感米酒", rate: 4.1 },
          { name: "孝感米酒", rate: 4.0 },
          { name: "孝感米酒", rate: 3.9 },
        ],
        [
          { name: "武汉自助KTV", rate: 4.8 },
          { name: "武汉大咖酒吧", rate: 4.7 },
          { name: "武汉极乐世界游乐场", rate: 4.6 },
          { name: "武汉大世界儿童...", rate: 4.5 },
          { name: "武汉极乐世界游乐场", rate: 4.4 },
          { name: "武汉极乐世界游乐场", rate: 4.3 },
          { name: "武汉极乐世界游乐场", rate: 4.2 },
          { name: "武汉极乐世界游乐场", rate: 4.1 },
          { name: "武汉极乐世界游乐场", rate: 4.0 },
          { name: "武汉极乐世界游乐场", rate: 3.9 },
        ],
      ],
      bindDataT: [
        {
          name: "餐饮",
          bindData: {
            showIndex: true,
            headData: ["排名", "名称", "投诉数量"],
            tableData: [
              {
                city: "武汉快乐小火锅",
                pro: "265",
                active: false,
              },
              {
                city: "武汉小小锅大菜馆",
                pro: "256",
                active: false,
              },
              {
                city: "武汉自助火锅",
                pro: "256",
                active: false,
              },
              {
                city: "武汉私房菜",
                pro: "226",
                active: false,
              },
              {
                city: "武汉私房菜",
                pro: "226",
                active: false,
              },
              {
                city: "武汉私房菜",
                pro: "226",
                active: false,
              },
              {
                city: "武汉私房菜",
                pro: "226",
                active: false,
              },
              {
                city: "武汉私房菜",
                pro: "226",
                active: false,
              },
              {
                city: "武汉私房菜",
                pro: "226",
                active: false,
              },
              {
                city: "武汉私房菜",
                pro: "226",
                active: false,
              },
            ],
          },
        },
        {
          name: "住宿",
          bindData: {
            showIndex: true,
            headData: ["排名", "名称", "投诉数量"],
            tableData: [
              {
                city: "武汉万达酒店",
                pro: "268",
                active: false,
              },
              {
                city: "武汉城市便捷",
                pro: "265",
                active: false,
              },
              {
                city: "武汉如家酒店",
                pro: "252",
                active: false,
              },
              {
                city: "宜昌万达酒店",
                pro: "222",
                active: false,
              },
              {
                city: "宜昌万达酒店",
                pro: "222",
                active: false,
              },
              {
                city: "宜昌万达酒店",
                pro: "222",
                active: false,
              },
              {
                city: "宜昌万达酒店",
                pro: "222",
                active: false,
              },
              {
                city: "宜昌万达酒店",
                pro: "222",
                active: false,
              },
              {
                city: "宜昌万达酒店",
                pro: "222",
                active: false,
              },
              {
                city: "宜昌万达酒店",
                pro: "222",
                active: false,
              },
            ],
          },
        },
        {
          name: "交通",
          bindData: {
            showIndex: true,
            headData: ["排名", "名称", "投诉数量"],
            tableData: [
              {
                city: "滴滴打车",
                pro: "288",
                active: false,
              },
              {
                city: "百度智行",
                pro: "268",
                active: false,
              },
              {
                city: "高德易行",
                pro: "252",
                active: false,
              },
              {
                city: "湖北旅游大巴租赁公司",
                pro: "254",
                active: false,
              },
              {
                city: "湖北租赁公司",
                pro: "225",
                active: true,
              },
              {
                city: "湖北出租车公司",
                pro: "224",
                active: false,
              },
              {
                city: "湖北出租车公司",
                pro: "224",
                active: false,
              },
              {
                city: "湖北出租车公司",
                pro: "224",
                active: false,
              },
              {
                city: "湖北出租车公司",
                pro: "224",
                active: false,
              },
              {
                city: "湖北出租车公司",
                pro: "224",
                active: false,
              },
            ],
          },
        },
        {
          name: "景区",
          bindData: {
            showIndex: true,
            headData: ["排名", "名称", "投诉数量"],
            tableData: [
              {
                city: "黄鹤楼",
                pro: "268",
                active: false,
              },
              {
                city: "湖北省博物馆",
                pro: "255",
                active: false,
              },
              {
                city: "木兰天地",
                pro: "230",
                active: false,
              },
              {
                city: "三峡大坝",
                pro: "223",
                active: false,
              },
              {
                city: "三峡人家",
                pro: "221",
                active: true,
              },
              {
                city: "三峡人家",
                pro: "221",
                active: true,
              },
              {
                city: "三峡人家",
                pro: "221",
                active: true,
              },
              {
                city: "三峡人家",
                pro: "221",
                active: true,
              },
              {
                city: "三峡人家",
                pro: "221",
                active: true,
              },
              {
                city: "三峡人家",
                pro: "221",
                active: true,
              },
            ],
          },
        },
        {
          name: "购物",
          bindData: {
            showIndex: true,
            headData: ["排名", "名称", "投诉数量"],
            tableData: [
              {
                city: "黄鹤楼香烟",
                pro: "685",
                active: false,
              },
              {
                city: "劲酒",
                pro: "560",
                active: false,
              },
              {
                city: "周黑鸭",
                pro: "482",
                active: false,
              },
              {
                city: "武汉热干面",
                pro: "250",
                active: false,
              },
              {
                city: "武汉热干面",
                pro: "250",
                active: false,
              },
              {
                city: "武汉热干面",
                pro: "250",
                active: false,
              },
              {
                city: "武汉热干面",
                pro: "250",
                active: false,
              },
              {
                city: "武汉热干面",
                pro: "250",
                active: false,
              },
              {
                city: "武汉热干面",
                pro: "250",
                active: false,
              },
              {
                city: "武汉热干面",
                pro: "250",
                active: false,
              },
            ],
          },
        },
        {
          name: "娱乐",
          bindData: {
            showIndex: true,
            headData: ["排名", "名称", "投诉数量"],
            tableData: [
              {
                city: "武汉自助KTV",
                pro: "560",
                active: false,
              },
              {
                city: "武汉极乐世界",
                pro: "560",
                active: false,
              },
              {
                city: "武汉欢乐谷",
                pro: "420",
                active: false,
              },
              {
                city: "武汉欢乐谷",
                pro: "420",
                active: false,
              },
              {
                city: "武汉欢乐谷",
                pro: "420",
                active: false,
              },
              {
                city: "武汉欢乐谷",
                pro: "420",
                active: false,
              },
              {
                city: "武汉欢乐谷",
                pro: "420",
                active: false,
              },
              {
                city: "武汉欢乐谷",
                pro: "420",
                active: false,
              },
              {
                city: "武汉欢乐谷",
                pro: "420",
                active: false,
              },
              {
                city: "武汉欢乐谷",
                pro: "420",
                active: false,
              },
            ],
          },
        },
      ],
    };
  },
  components: {
    "v-chartPieColumn": chartPieColumn,
    "v-chartPieRadius0Column": chartPieRadius0Column,
    TableDiy2,
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
    display: flex;
    .item {
      flex: 1;
      .box {
        .box-head {
          margin-bottom: 0.2rem;
        }
        .box-body {
          display: flex;
          .item {
            display: flex;
            flex-direction: column;
            .item_up {
              display: flex;
              // justify-items: center;
              height: 0.6rem;
              font-size: 0.6rem;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 0.6rem;
              padding-left: 1rem;
              margin-bottom: 0.65rem;
              img {
                width: 0.7rem;
                height: 0.7rem;
                margin-right: 0.4rem;
                margin-bottom: 0.2rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
