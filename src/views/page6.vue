<template>
  <div class="content">
    <v-commonTitle title="事件数据驾驶舱"></v-commonTitle>
    <div class="box_r">
      <div class="box_flex1" style="margin: 0 0.4rem">
        <div class="item">
          <div class="item1">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>场馆巡查人员统计
              </div>
              <div class="box-body">
                <v-chartPie
                  :bindData="bindData1"
                  :showPer="false"
                  type="人"
                ></v-chartPie>
              </div>
            </div>
          </div>
          <div class="item1" style="margin-top: 0.4rem">
            <div class="box">
              <div class="box-head">
                <span class="dot"></span>今日巡查点数据
              </div>
              <div class="box-body" style="padding: 0.2rem 0">
                <div class="box-item">
                  <div class="body_item">
                    <div class="img">
                      <img src="../assets/img/事件数据/形状结合.png" alt="" />
                    </div>
                    <div class="name">全部巡查点 : <span>720</span>个</div>
                  </div>
                  <div class="body_item">
                    <div class="img">
                      <img
                        src="../assets/img/事件数据/形状结合(1).png"
                        alt=""
                      />
                    </div>
                    <div class="name">已巡查 : <span>500</span>个</div>
                  </div>
                </div>
                <v-consumerList :bindData="bindData2"></v-consumerList>
              </div>
            </div>
          </div>
          <div class="item2">
            <div class="box">
              <div class="box-head"><span class="dot"></span>巡查人员列表</div>
              <div class="box-body">
                <div class="body-top">
                  <div class="search">
                    <el-input placeholder="关键字搜索">
                      <i
                        slot="suffix"
                        class="el-input__icon el-icon-search"
                      ></i>
                    </el-input>
                  </div>
                  <div class="selector">
                    <div>班次 :</div>
                    <el-select v-model="value" placeholder="早班">
                      <el-option> </el-option>
                    </el-select>
                  </div>
                </div>
                <table class="sort">
                  <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>班次</th>
                    <th>上报事件</th>
                  </tr>
                  <tr v-for="(v, i) in tableData" :key="i">
                    <td>{{ i + 1 < 10 ? "0" + (i + 1) : i + 1 }}</td>
                    <td>{{ v.name }}</td>
                    <td>{{ v.level }}</td>
                    <td>{{ v.event }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box_flex2">
        <div class="up">
          <div class="box">
            <div class="box-head"><span class="dot"></span>巡查事件</div>
            <!-- <v-mapEvent></v-mapEvent> -->
            <bg-canvas></bg-canvas>
          </div>
        </div>
        <div class="down" style="margin-top: 0.4rem">
          <div class="box">
            <div class="box-body">
              <el-table
                :data="tableData1"
                style="width: 100%"
                height="100%"
                fit
                border
              >
                <el-table-column label="序号" type="index"> </el-table-column>
                <el-table-column label="巡查人员" prop="name" width="80">
                </el-table-column>
                <el-table-column label="事件上报时间" prop="time" width="140">
                </el-table-column>
                <el-table-column label="事件上报地点" prop="addr">
                </el-table-column>
                <el-table-column
                  show-overflow-tooltip
                  label="事件详情"
                  prop="desc"
                >
                </el-table-column>
                <el-table-column label="事件处理状态" prop="status">
                  <template scope="scope">
                    <span
                      v-if="scope.row.status === '待处理'"
                      style="color: #EC991F"
                      >{{ scope.row.status }}</span
                    >
                    <span v-else-if="scope.row.status === '已处理'">{{
                      scope.row.status
                    }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作" type="expand">
                  <template slot-scope="props">{{ props.row.desc }}</template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <div class="box_flex3">
        <div class="up">
          <div class="box">
            <div class="box-head">
              <span class="dot"></span>场馆报警设备分布
            </div>
            <div class="box-body">
              <v-mapJk :bindData="device"></v-mapJk>
            </div>
          </div>
        </div>
        <div class="down">
          <div class="box">
            <div class="box-head"><span class="dot"></span>事件列表</div>
            <el-table
              :data="tableData2"
              style="width: 100%"
              fit
              height="100%"
              border
            >
              <el-table-column label="序号" type="index"> </el-table-column>
              <el-table-column label="记录时间" prop="time" width="130">
              </el-table-column>
              <el-table-column label="报警事件标题" prop="title" width="140">
              </el-table-column>
              <el-table-column label="事件处理状态" prop="status">
              </el-table-column>
              <el-table-column label="操作" type="expand">
                <template slot-scope="props">{{ props.row.desc }}</template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartPie2 from "../components/element/chartPie2";
import chartLines from "../components/element/chartLines";
import chartList from "../components/element/chartList";
import chartPie from "../components/element/chartPie";
import mapJk from "../components/map/mapJk";
import consumerList from "../components/element/ConsumerList";
import mapEvent from "../components/map/mapEvent";
import bgCanvas from "../components/indoor/bg_canvas";

export default {
  name: "page1",
  data() {
    return {
      // 下拉选择框选择的数据
      value: "",
      bindData: [
        {
          name: "铁路",
          value: 45000,
          per: "45%",
        },
        {
          name: "航空",
          value: 55000,
          per: "55%",
        },
      ],
      bindData1: [
        {
          name: "全部巡查人员",
          value: 50,
          value2: 50,
        },
        {
          name: "在职巡查人员",
          value: 30,
          value2: 30,
        },
      ],
      bindData2: [
        {
          name: "",
          value: "70%",
          width: "70%",
        },
      ],
      tableData: [
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
        {
          name: "李四",
          level: "早班",
          event: 1,
        },
      ],
      tableData1: [
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "待处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "待处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "待处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "待处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "待处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "待处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "待处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "已处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "已处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "已处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "已处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "已处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "已处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "已处理",
          option: "",
        },
        {
          name: "张三",
          time: "2020-02-26 12:15",
          addr: "博物馆二楼大厅",
          desc:
            "有游客李四遗失一部华为P30手机，遗失手机电话：13312341234，描述：疑似在入口登记处遗失。",
          status: "已处理",
          option: "",
        },
      ],
      tableData2: [
        {
          time: "2020-02-26 12:15",
          title: "手机遗失",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "寻人",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "寻人",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "寻人",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "寻人",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "寻人",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "寻人",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "寻人",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "手机遗失",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "手机遗失",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "手机遗失",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "手机遗失",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "手机遗失",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "手机遗失",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "手机遗失",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "手机遗失",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
        {
          time: "2020-02-26 12:15",
          title: "手机遗失",
          desc:
            "博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失博物馆三楼有人遗失",
          status: "已处理",
          option: "",
        },
      ],
      device: null,
    };
  },
  created() {
    this.getDeviceData();
  },
  methods: {
    async getDeviceData() {
      const data = await http.get("./data/deviceData.json");
      this.device = data;
    },
  },
  components: {
    "v-chartPie2": chartPie2,
    "v-chartLines": chartLines,
    "v-chartPie": chartPie,
    "v-consumerList": consumerList,
    "v-chartList": chartList,
    "v-mapJk": mapJk,
    "v-mapEvent": mapEvent,
    bgCanvas,
  },
};
</script>

<style lang="less" scoped>
.box_r {
  flex: 1;
  margin-top: 0.4rem;
  display: flex;
  .box_flex1 {
    flex: 1;
    display: flex;
    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      .item1 {
        flex: 1;
        .box .box-body {
          display: flex;
          flex-direction: column;
          .box-item {
            display: flex;
            padding: 1rem 0;
            .body_item {
              display: flex;
              flex: 1;
              justify-content: center;
              align-items: center;
              font-size: 0.4rem;
              color: #fff;
              &:last-child {
                color: #07c5f5;
              }
              span {
                font-size: 1rem;
                font-family: "lcd";
              }
              .img {
                width: 0.8rem;
                margin-right: 0.4rem;
                img {
                  width: 100%;
                }
              }
            }
          }
        }
      }
      .item2 {
        flex: 4;
        margin-top: 0.4rem;
        .box {
          .box-body {
            display: flex;
            flex-direction: column;
            .body-top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .search {
                margin-bottom: 0.4rem;
                width: 30%;
                /deep/ .el-input__suffix {
                  top: -0.45rem;
                }
              }
              .selector {
                display: flex;
                align-items: center;
                width: 40%;
                color: rgba(46, 217, 253, 1);
                font-size: 0.5rem;
                div {
                  padding-right: 0.2rem;
                }
                .el-select {
                  width: 70%;
                }
              }
            }
          }
        }
      }
    }
  }
  .sort {
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
    td {
      text-align: center;
      background: rgba(46, 217, 253, 0.2);
      border: 0.02rem solid rgba(42, 204, 240, 1);
    }
  }
  .box_flex2 {
    flex: 2;
    display: flex;
    flex-direction: column;
    margin-right: 0.4rem;
    .up {
      height: 55%;
    }
    .down {
      overflow: hidden;
      margin-top: 0.4rem;
      flex: 1;
      display: flex;
      .box-body {
        overflow-y: auto;
      }
    }
  }
  .box {
    flex: 1;
    /deep/ .el-table__expanded-cell[class*="cell"] {
      padding: 0.35rem 0.32rem;
      text-indent: 2em;
      font-size: 0.32rem;
      line-height: 0.8rem;
    }
    /deep/ .el-table .cell,
    .el-table th div,
    .el-table--border td:first-child .cell,
    .el-table--border th:first-child .cell {
      padding: 0.1rem 0.2rem;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.32rem;
      color: #fff;
    }
    // 将展开行的小图标颜色变为白色
    /deep/ .el-icon-arrow-right:before {
      color: #fff;
    }
    /deep/.el-table,
    .el-table__expanded-cell {
      background-color: transparent;
    }
    /deep/ .el-table tr {
      background-color: transparent !important;
      padding: 0.35rem 0.32rem;
    }
    /deep/ .el-table--enable-row-transition .el-table__body td,
    .el-table .cell {
      background-color: transparent;
      color: #fff;
    }
    /deep/.el-table__header-wrapper {
      background-color: transparent !important;
    }
    /deep/ .el-table td,
    .el-table th.is-leaf {
      background: rgba(46, 217, 253, 0.2) !important;
      border-bottom: 0.01rem solid rgba(42, 204, 240, 1) !important;
    }
    /deep/ .el-table th,
    .el-table td {
      border: none;
      background-color: rgba(35, 173, 209, 1) !important;
      border-right: 0.02rem solid rgba(42, 204, 240, 1);
      color: #fff;
      padding: 0 !important;
    }
    /deep/ .el-table td,
    .el-table th {
      padding: 0;
    }
    /deep/ .el-table--border:after,
    .el-table--group:after,
    .el-table:before {
      background-color: rgba(42, 204, 240, 1);
    }

    /deep/ .el-table--border,
    .el-table--group {
      border-color: rgba(42, 204, 240, 1);
    }

    /deep/ .el-table--border th,
    .el-table--border th.gutter:last-of-type {
      border-bottom: 0.02rem solid rgba(42, 204, 240, 1);
    }

    /deep/.el-table--border td,
    .el-table--border th {
      border-right: 0.02rem solid rgba(42, 204, 240, 1);
    }
    /*   /deep/ .el-table__expand-column .cell {
          display: none;
        } */
  }
  .box_flex3 {
    flex: 1;
    display: flex;
    flex-direction: column;
    .up {
      height: 42%;
      display: flex;
      .box {
        flex: 1;
      }
    }
    .down {
      margin-top: 0.4rem;
      flex: 1;
      display: flex;
      .box {
        flex: 1;
      }
    }
    .item {
      flex: 1;
    }
  }
}
</style>
