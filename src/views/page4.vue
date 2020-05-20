<template>
  <div class="content">
    <v-commonTitle title="安保数据驾驶舱"></v-commonTitle>
    <div class="box_c">
      <div class="box_c">
        <div class="up">
          <div
            class="item1"
            style="flex: 0.8;background-color: rgba(1, 104, 185, 0.2);"
          >
            <div class="up">
              <div class="up_right">
                <div class="box">
                  <div class="box-head">
                    <span class="dot"></span>场馆安保人员统计
                  </div>
                  <div class="box-body">
                    <v-chartPieColumn
                      :bindData="bindData"
                      type="人"
                      :showPer="false"
                    ></v-chartPieColumn>
                  </div>
                </div>
              </div>
              <div class="up_right">
                <div class="box">
                  <div class="box-head">
                    <span class="dot"></span>场馆安保设备统计
                  </div>
                  <div class="box-body">
                    <v-chartPieColumn
                      :bindData="bindData1"
                      type=""
                      :showPer="false"
                    ></v-chartPieColumn>
                  </div>
                </div>
              </div>
            </div>
            <div class="down">
              <div class="box">
                <div class="box-head">
                  <span class="dot"></span>场馆游客统计
                </div>
                <div class="box-body">
                  <v-chartLines :bindData="bindData2"></v-chartLines>
                </div>
              </div>
            </div>
          </div>
          <div class="item" style="margin: 0 0.4rem">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>安保设备分布图
                <div class="floor">
                  <div class="img">
                    <img src="../assets/img/安保数据/切换.png" alt="" />
                  </div>
                  <div class="text">当前楼层: 2F</div>
                </div>
                <div class="cutlinee">
                  <ul>
                    <li>
                      <div class="img">
                        <img
                          src="../assets/img/安保数据/摄像头 (1).png"
                          alt=""
                        />
                      </div>
                      摄像头
                    </li>
                    <li>
                      <div class="img">
                        <img
                          src="../assets/img/安保数据/红外报警器.png"
                          alt=""
                        />
                      </div>
                      红外报警系统
                    </li>
                    <li>
                      <div class="img">
                        <img
                          src="../assets/img/安保数据/红外双鉴 (1).png"
                          alt=""
                        />
                      </div>
                      电子围栏
                    </li>
                  </ul>
                </div>
              </div>
              <div class="box-body">
                <!-- <v-mapJk :bindData="jkData"></v-mapJk> -->
                <bg-jk imgType="device"></bg-jk>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="box-head nobottom">
                <span class="dot"></span>展示状态预警
                <el-pagination
                  small
                  background
                  layout="prev, pager, next"
                  :total="1000"
                >
                </el-pagination>
              </div>
              <table class="sort">
                <tr>
                  <th>序号</th>
                  <th>展示</th>
                  <th>展品编码</th>
                  <th>所属楼层</th>
                  <th>所属展厅</th>
                  <th>展品状态</th>
                </tr>
                <tr v-for="(v, i) in tableData" :key="i">
                  <td>{{ i + 1 < 10 ? "0" + (i + 1) : i + 1 }}</td>
                  <td>{{ v.name }}</td>
                  <td>{{ v.level }}</td>
                  <td>{{ v.floor }}</td>
                  <td>{{ v.pos }}</td>
                  <td :class="v.active == '移动' ? 'active' : ''">
                    {{ v.active }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="down">
          <div
            class="item"
            style="flex: 0.8;background-color: rgba(1, 104, 185, 0.2);"
          >
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>人员流动热力图
                <div class="floor">
                  <div class="img">
                    <img src="../assets/img/安保数据/切换.png" alt="" />
                  </div>
                  <div class="text">当前楼层: 2F</div>
                </div>
              </div>
              <v-mapHeat></v-mapHeat>
            </div>
          </div>
          <div class="item" style="margin: 0 0.4rem">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>安保人员分布图
                <div class="floor">
                  <div class="img">
                    <img src="../assets/img/安保数据/切换.png" alt="" />
                  </div>
                  <div class="text">当前楼层: 2F</div>
                </div>
              </div>
              <div class="box-body">
                <!-- <v-mapPeople></v-mapPeople> -->
                <bg-jk imgType="person"></bg-jk>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="box">
              <div class="box-head nobottom">
                <span class="dot"></span>安保设备状态数据
                <el-pagination
                  small
                  background
                  layout="prev, pager, next"
                  :total="1000"
                >
                </el-pagination>
              </div>
              <table class="sort">
                <tr>
                  <th>序号</th>
                  <th>设备分类</th>
                  <th>设备名称</th>
                  <th>设备编码</th>
                  <th>所属楼层</th>
                  <th>所属展厅</th>
                  <th>设备状态</th>
                </tr>
                <tr v-for="(v, i) in tableData2" :key="i">
                  <td>{{ i + 1 < 10 ? "0" + (i + 1) : i + 1 }}</td>
                  <td>{{ v.type }}</td>
                  <td>{{ v.name }}</td>
                  <td>{{ v.num }}</td>
                  <td>{{ v.floor }}</td>
                  <td>{{ v.ting }}</td>
                  <td
                    :class="v.active == '设备预警' ? 'active' : ''"
                    :id="v.active == '设备故障' ? 'active2' : ''"
                  >
                    {{ v.active }}
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartPieColumn from "../components/element/chartPieColumn";
import chartList from "../components/element/chartList";
import chartPage4Right from "../components/element/chartPage4Right";
import chartLines from "../components/element/chartLines";
import mapJk from "../components/map/mapJk";
import mapPeople from "../components/map/mapPeople";
import mapHeat from "../components/map/mapHeat";
import map from "../components/mymap/map";
import bgJk from "../components/indoor/bg_jk";
export default {
  name: "page1",
  data() {
    return {
      bindData: [
        {
          name: "全部安保人员",
          value: 50,
          value2: 50,
        },
        {
          name: "在职安保人员",
          value: 30,
          value2: 30,
        },
      ],
      bindData1: [
        {
          name: "在线安保设备",
          value: 50,
          value2: 50,
        },
        {
          name: "离线安保设备",
          value: 30,
          value2: 30,
        },
        {
          name: "故障安保设备",
          value: 20,
          value2: 20,
        },
      ],
      bindData2: [
        [
          "8:00",
          "9:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
          "18:00",
          "19:00",
          "20:00",
        ],
        [
          {
            name: "在馆人数",
            value: [
              100,
              90,
              200,
              1950,
              2333,
              2451,
              3333,
              4513,
              2498,
              1065,
              3324,
              1354,
              300,
              900,
            ],
          },
          {
            name: "排队人数",
            value: [
              1100,
              1200,
              2700,
              3950,
              4567,
              2451,
              3755,
              5523,
              3412,
              4444,
              7534,
              1247,
              300,
              900,
            ],
          },
        ],
      ],
      tableData: [
        {
          name: "鱼龙",
          level: "1028",
          floor: "一层",
          pos: "开辟鸿蒙",
          active: "移动",
        },
        {
          name: "中生代",
          level: "1028",
          floor: "一层",
          pos: "开辟鸿蒙",
          active: "移动",
        },
        {
          name: "中生代",
          level: "1028",
          floor: "一层",
          pos: "开辟鸿蒙",
          active: "移动",
        },
        {
          name: "中生代",
          level: "1028",
          floor: "一层",
          pos: "开辟鸿蒙",
          active: "正常",
        },
        {
          name: "中生代",
          level: "1028",
          floor: "一层",
          pos: "开辟鸿蒙",
          active: "正常",
        },
        {
          name: "中生代",
          level: "1028",
          floor: "一层",
          pos: "开辟鸿蒙",
          active: "正常",
        },
        {
          name: "中生代",
          level: "1028",
          floor: "一层",
          pos: "开辟鸿蒙",
          active: "正常",
        },
        {
          name: "中生代",
          level: "1028",
          floor: "一层",
          pos: "开辟鸿蒙",
          active: "正常",
        },
        {
          name: "中生代",
          level: "1028",
          floor: "一层",
          pos: "开辟鸿蒙",
          active: "正常",
        },
        {
          name: "中生代",
          level: "1028",
          floor: "一层",
          pos: "开辟鸿蒙",
          active: "正常",
        },
      ],
      tableData2: [
        {
          type: "摄像头",
          name: "红外日夜两用摄像机",
          floor: "一层",
          ting: "开辟鸿蒙",
          active: "设备故障",
          num: "rd012",
        },
        {
          type: "摄像头",
          name: "红外日夜两用摄像机",
          floor: "一层",
          ting: "开辟鸿蒙",
          active: "设备预警",
          num: "rd012",
        },
        {
          type: "摄像头",
          name: "半球型摄像机",
          floor: "一层",
          ting: "开辟鸿蒙",
          active: "设备预警",
          num: "rd012",
        },
        {
          type: "摄像头",
          name: "高速球摄像机",
          floor: "一层",
          ting: "开辟鸿蒙",
          active: "正常",
          num: "rd012",
        },
        {
          type: "摄像头",
          name: "红外探测器",
          floor: "一层",
          ting: "开辟鸿蒙",
          active: "正常",
          num: "rd012",
        },
        {
          type: "摄像头",
          name: "红外探测器",
          floor: "一层",
          ting: "开辟鸿蒙",
          active: "正常",
          num: "rd012",
        },
        {
          type: "摄像头",
          name: "红外探测器",
          floor: "一层",
          ting: "开辟鸿蒙",
          active: "正常",
          num: "rd012",
        },
        {
          type: "摄像头",
          name: "热探测器",
          floor: "一层",
          ting: "开辟鸿蒙",
          active: "正常",
          num: "rd012",
        },
        {
          type: "摄像头",
          name: "热探测器",
          floor: "一层",
          ting: "开辟鸿蒙",
          active: "正常",
          num: "rd012",
        },
        {
          type: "摄像头",
          name: "热探测器",
          floor: "一层",
          ting: "开辟鸿蒙",
          active: "正常",
          num: "rd012",
        },
      ],
      jkData: null,
    };
  },
  computed: {},
  created() {
    this.getJkData();
  },
  methods: {
    async getJkData() {
      const data = await http.get("./data/dataVisitor1.json");
      this.jkData = data;
      console.log(this.jkData);
    },
  },
  components: {
    "v-chartPieColumn": chartPieColumn,
    "v-chartList": chartList,
    "v-chartPage4Right": chartPage4Right,
    "v-mapJk": mapJk,
    "v-mapHeat": mapHeat,
    "v-mapPeople": mapPeople,
    "v-chartLines": chartLines,
    "v-map": map,
    bgJk,
  },
};
</script>

<style lang="less" scoped>
.box_c {
  flex: 1;
  display: flex;
  .box_c {
    flex: 1;
    display: flex;
    margin-top: 0.4rem;
    flex-direction: column;
    .up {
      flex: 1;
      display: flex;

      .item1 {
        display: flex;
        flex-direction: column;
        .up {
          display: flex;
          .up_right {
            flex: 1;
            &:first-child {
              margin-right: 0.4rem;
            }
          }
        }
      }
    }
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      .box {
        .box-head {
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
          .cutlinee {
            ul {
              display: flex;
              margin: 0.4rem 0;
              li {
                display: flex;
                justify-content: center;
                font-size: 0.4rem;
                align-items: center;
                color: #fff;
                margin-right: 1rem;
                .img {
                  width: 1rem;
                  margin-right: 0.2rem;
                  img {
                    width: 100%;
                  }
                }
              }
            }
          }
          .el-pagination {
            float: right;
          }
        }
        .box-head.nobottom {
          margin-bottom: 0;
          /deep/
            .el-pagination.is-background
            .el-pager
            li:not(.disabled).active {
            background-color: #23add1; // 进行修改背景和字体
            color: #fff;
            font-weight: 300;
          }
          /deep/ .el-pagination.is-background .el-pager li:not(.disabled) {
            background-color: #0b5b84;
            color: #fff;
            font-weight: 300;
          }
          /deep/ .el-pagination.is-background.el-pagination--small .btn-prev {
            background-color: #0b5b84;
          }
          /deep/ .el-pagination.is-background.el-pagination--small .btn-next {
            background-color: #0b5b84;
          }
        }
        .sort {
          margin-top: 0.5rem;
          font-size: 0.32rem;
          color: #fff;
          th,
          tr:first-child td {
            background: rgba(35, 173, 209, 1);
            border: 0.02rem solid rgba(42, 204, 240, 1);
          }
          th,
          td {
            padding: 0.35rem 0.32rem;
          }
          .active {
            color: #ec991f;
          }
          #active2 {
            color: #d0021b;
          }
          td {
            text-align: center;
            background: rgba(46, 217, 253, 0.2);
            border: 0.02rem solid rgba(42, 204, 240, 1);
          }
        }
        .box-body {
        }
      }
    }
    .down {
      margin: 0.4rem 0 0 0;
      flex: 1;
      display: flex;
      .box {
        flex: 1;
      }
      .item {
        flex: 1;
      }
    }
    .right_item {
      flex: 1;
      display: flex;
      margin-bottom: 0.4rem;
      background-color: rgba(1, 104, 185, 0.2);
    }
  }
}
</style>
