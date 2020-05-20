<template>
  <div class="content">
    <v-commonTitle title="环境监测数据驾驶舱"></v-commonTitle>
    <div class="r">
      <div class="box_r">
        <div
          class="box_flex1"
          style="margin: 0 0.4rem;background-color:#03416d;"
        >
          <div class="item">
            <div class="box">
              <div class="box-head"><span class="dot"></span>环境监测数据</div>
              <div class="box-body">
                <div class="map"><v-chartGauge></v-chartGauge></div>
                <div class="item">
                  <div class="box_item">
                    <div class="body_item">
                      <div class="img">
                        <img src="../assets/img/home/温度计.png" alt="" />
                      </div>
                      当前温度25℃
                    </div>
                    <div class="body_item">
                      <div class="img">
                        <img src="../assets/img/home/二氧化碳.png" alt="" />
                      </div>
                      当前二氧化碳***
                    </div>
                    <div class="body_item">
                      <div class="img">
                        <img src="../assets/img/home/湿度.png" alt="" />
                      </div>
                      当前湿度30%——80%
                    </div>
                  </div>
                  <div class="box_item">
                    <div class="body_item">
                      <div class="img">
                        <img src="../assets/img/home/甲醛.png" alt="" />
                      </div>
                      当前甲醛***
                    </div>
                    <div class="body_item">
                      <div class="img">
                        <img src="../assets/img/home/pm2.5.png" alt="" />
                      </div>
                      当前PM2.5***
                    </div>
                    <div class="body_item">
                      <div class="img">
                        <img src="../assets/img/home/pm10.png" alt="" />
                      </div>
                      当前PM10***
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box_l">
        <div class="flex_box">
          <div class="item">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>温度传感器分布图
              </div>
              <!-- <v-mapT :bindData="TData"></v-mapT> -->
              <bj-jk imgType="t"></bj-jk>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>二氧化碳传感器分布图
              </div>
              <!-- <v-mapC :bindData="CData"></v-mapC> -->
              <bj-jk imgType="c" :imgData="coData"></bj-jk>
            </div>
          </div>
        </div>
        <div class="flex_box">
          <div class="item">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>甲醛传感器分布图
              </div>
              <!-- <v-mapJQ :bindData="jqData"></v-mapJQ> -->
              <bj-jk imgType="jq" :imgData="jqData"></bj-jk>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>PM2.5传感器分布图
              </div>
              <!-- <v-mapPM :bindData="pmData"></v-mapPM> -->
              <bj-jk imgType="pm" :imgData="pmData"></bj-jk>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartPie from "../components/element/chartPie";
import chartLines from "../components/element/chartLines";
import chartGauge from "../components/element/chartGauge";
import mapPM from "../components/map/mapPM";
import mapT from "../components/map/mapT";
import mapC from "../components/map/mapCO2";
import mapJQ from "../components/map/mapJQ";
import bjJk from "../components/indoor/bg_jk";

export default {
  name: "page1",
  data() {
    return {
      value: true,
      deviceActive: 0,
      deviceActive1: 0,
      typeList: ["月度", "季度", "半年", "年度"],
      bindData: [
        {
          name: "渝中旅行社",
          value: 8620,
          value2: 8620,
        },
        {
          name: "万州旅行社",
          value: 9809,
          value2: 9809,
        },
        {
          name: "涪陵旅行社",
          value: 7868,
          value2: 7868,
        },
        {
          name: "大渡口旅行社",
          value: 5890,
          value2: 5890,
        },
        {
          name: "江北旅行社",
          value: 6880,
          value2: 6880,
        },
        {
          name: "沙坪坝旅行社",
          value: 7868,
          value2: 7868,
        },
        {
          name: "九龙坡旅行社",
          value: 7868,
          value2: 7868,
        },
        {
          name: "南岸旅行社",
          value: 5890,
          value2: 5890,
        },
        {
          name: "北碚旅行社",
          value: 6880,
          value2: 6880,
        },
        {
          name: "綦江旅行社",
          value: 7868,
          value2: 7868,
        },
        {
          name: "其他",
          value: 9809,
          value2: 9809,
        },
      ],
      bindData1: [
        [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        [
          {
            name: "渝中旅行社",
            value: [
              1600,
              1800,
              1700,
              1950,
              2333,
              2451,
              3333,
              4513,
              2498,
              1065,
              3324,
              1354,
            ],
          },
          {
            name: "万州旅行社",
            value: [
              1400,
              1000,
              1900,
              1350,
              3333,
              4451,
              2333,
              3513,
              4498,
              2065,
              5324,
              3354,
            ],
          },
          {
            name: "涪陵旅行社",
            value: [
              1100,
              1200,
              2700,
              3950,
              4567,
              2451,
              3755,
              4523,
              3412,
              4444,
              7534,
              1247,
            ],
          },
          {
            name: "大渡口旅行社",
            value: [
              5431,
              5438,
              4446,
              6475,
              7532,
              6723,
              5477,
              8888,
              7777,
              6666,
              4578,
              7845,
            ],
          },
          {
            name: "江北旅行社",
            value: [
              5786,
              6745,
              3786,
              9756,
              7865,
              6666,
              7563,
              4578,
              8753,
              7564,
              6886,
              7466,
            ],
          },
        ],
      ],
      bindData2: {
        legend: ["环比数据", "当前数据", "同比数据"],
        xData: ["畅游沙坪旅行社", "畅游沙坪旅行社", "畅游沙坪旅行社"],
        yData: [
          [8265, 7220, 7413],
          [10895, 10333, 7798],
          [7625, 7265, 5841],
        ],
      },
      bindData3: [
        {
          name1: "酉阳旅行社3日游1团",
          name2: "酉阳旅行社",
          n1: "152",
          n2: "200",
          n3: "130",
          n4: "50",
          time1: "2018.11.20 ",
          time2: "2018.11.22",
          where: "大足石刻景区",
        },
        {
          name1: "酉阳旅行社3日游1团",
          name2: "酉阳旅行社",
          n1: "152",
          n2: "200",
          n3: "130",
          n4: "50",
          time1: "2018.11.20 ",
          time2: "2018.11.22",
          where: "大足石刻景区",
        },
        {
          name1: "酉阳旅行社3日游1团",
          name2: "酉阳旅行社",
          n1: "152",
          n2: "200",
          n3: "130",
          n4: "50",
          time1: "2018.11.20 ",
          time2: "2018.11.22",
          where: "大足石刻景区",
        },
        {
          name1: "酉阳旅行社3日游1团",
          name2: "酉阳旅行社",
          n1: "152",
          n2: "200",
          n3: "130",
          n4: "50",
          time1: "2018.11.20 ",
          time2: "2018.11.22",
          where: "大足石刻景区",
        },
        {
          name1: "酉阳旅行社3日游1团",
          name2: "酉阳旅行社",
          n1: "152",
          n2: "200",
          n3: "130",
          n4: "50",
          time1: "2018.11.20 ",
          time2: "2018.11.22",
          where: "大足石刻景区",
        },
        {
          name1: "酉阳旅行社3日游1团",
          name2: "酉阳旅行社",
          n1: "152",
          n2: "200",
          n3: "130",
          n4: "50",
          time1: "2018.11.20 ",
          time2: "2018.11.22",
          where: "大足石刻景区",
        },
        {
          name1: "酉阳旅行社3日游1团",
          name2: "酉阳旅行社",
          n1: "152",
          n2: "200",
          n3: "130",
          n4: "50",
          time1: "2018.11.20 ",
          time2: "2018.11.22",
          where: "大足石刻景区",
        },
        {
          name1: "酉阳旅行社3日游1团",
          name2: "酉阳旅行社",
          n1: "152",
          n2: "200",
          n3: "130",
          n4: "50",
          time1: "2018.11.20 ",
          time2: "2018.11.22",
          where: "大足石刻景区",
        },
        {
          name1: "酉阳旅行社3日游1团",
          name2: "酉阳旅行社",
          n1: "152",
          n2: "200",
          n3: "130",
          n4: "50",
          time1: "2018.11.20 ",
          time2: "2018.11.22",
          where: "大足石刻景区",
        },
        {
          name1: "酉阳旅行社3日游1团",
          name2: "酉阳旅行社",
          n1: "152",
          n2: "200",
          n3: "130",
          n4: "50",
          time1: "2018.11.20 ",
          time2: "2018.11.22",
          where: "大足石刻景区",
        },
      ],
      bindData4: [
        {
          name1: "武隆喀斯特-江津四面山-万盛黑山谷",
          name2: "武隆喀斯特-江津四面山-万盛黑山谷",
          n1: "365254",
        },
        {
          name1: "武隆喀斯特-江津四面山-万盛黑山谷",
          name2: "武隆喀斯特-江津四面山-万盛黑山谷",
          n1: "365254",
        },
        {
          name1: "武隆喀斯特-江津四面山-万盛黑山谷",
          name2: "武隆喀斯特-江津四面山-万盛黑山谷",
          n1: "365254",
        },
        {
          name1: "武隆喀斯特-江津四面山-万盛黑山谷",
          name2: "武隆喀斯特-江津四面山-万盛黑山谷",
          n1: "365254",
        },
        {
          name1: "武隆喀斯特-江津四面山-万盛黑山谷",
          name2: "武隆喀斯特-江津四面山-万盛黑山谷",
          n1: "365254",
        },
        {
          name1: "武隆喀斯特-江津四面山-万盛黑山谷",
          name2: "武隆喀斯特-江津四面山-万盛黑山谷",
          n1: "365254",
        },
        {
          name1: "武隆喀斯特-江津四面山-万盛黑山谷",
          name2: "武隆喀斯特-江津四面山-万盛黑山谷",
          n1: "365254",
        },
        {
          name1: "武隆喀斯特-江津四面山-万盛黑山谷",
          name2: "武隆喀斯特-江津四面山-万盛黑山谷",
          n1: "365254",
        },
        {
          name1: "武隆喀斯特-江津四面山-万盛黑山谷",
          name2: "武隆喀斯特-江津四面山-万盛黑山谷",
          n1: "365254",
        },
        {
          name1: "武隆喀斯特-江津四面山-万盛黑山谷",
          name2: "武隆喀斯特-江津四面山-万盛黑山谷",
          n1: "365254",
        },
      ],
      TData: null,
      CData: null,
      // jqData: null,
      jqData: {
        name: "甲醛含量",
        data: "***",
        bgC: "violet",
      },
      pmData: {
        name: "PM2.5",
        data: "***",
        bgC: "red",
      },
      coData: {
        name: "二氧化碳",
        data: "***",
        bgC: "blue",
      },
    };
  },
  created() {
    this.getTData();
    this.getCData();
    // this.getJQData();
    // this.getPMData();
  },
  methods: {
    selType(item, index) {
      this.deviceActive = index;
    },
    selType1(item, index) {
      this.deviceActive1 = index;
    },
  },
  components: {
    "v-chartPie": chartPie,
    "v-chartLines": chartLines,
    "v-mapPM": mapPM,
    "v-mapT": mapT,
    "v-mapC": mapC,
    "v-mapJQ": mapJQ,
    "v-chartGauge": chartGauge,
    bjJk,
  },
  methods: {
    async getTData() {
      const data = await http.get("./data/TData.json");
      this.TData = data;
    },
    async getCData() {
      const data = await http.get("./data/CData.json");
      this.CData = data;
    },
    /*   async getJQData() {
      const data = await http.get("./data/jqData.json");
      this.jqData = data;
    }, */
    async getPMData() {
      const data = await http.get("./data/pmData.json");
      this.pmData = data;
    },
  },
};
</script>

<style lang="less" scoped>
.r {
  display: flex;
  height: 100%;
}
.box_r {
  flex: 1;
  display: flex;
  .box_flex1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      .box {
        float: 1;
        .box-body {
          display: flex;
          flex-direction: column;
          .map {
            height: 40%;
          }
          .item {
            display: flex;
            flex-direction: row;
            padding: 0 1rem;
            .box_item {
              width: 50%;
              display: flex;
              flex-direction: column;

              &:first-child {
                margin-right: 1rem;
              }
              .body_item {
                height: 33.33%;
                margin-bottom: 1rem;
                flex: 1;
                background-color: rgba(1, 104, 185, 0.2);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                color: rgba(255, 255, 255, 1);
                .img {
                  height: 1.5rem;
                  margin-bottom: 5px;
                  img {
                    height: 100%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.box_l {
  flex: 2;
  display: flex;
  flex-direction: column;
  .flex_box {
    height: 50%;
    display: flex;
    &:first-child {
      margin-bottom: 0.4rem;
    }
    .item {
      width: 50%;
      &:first-child {
        margin-right: 0.4rem;
      }
    }
  }
}
</style>
