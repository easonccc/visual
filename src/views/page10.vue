<template>
  <div class="content">
    <v-commonTitle title="酒店数据驾驶舱"></v-commonTitle>
    <div class="box_r">
      <div class="box_flex1">
        <div class="box">
          <div class="box-head">
            <span class="dot"></span>年酒店销量产品数量TOP10
          </div>
          <v-chartList
            :unit="unit"
            :bindData="bindData"
            :show="false"
          ></v-chartList>
        </div>
        <div class="box" style="margin-top:0.4rem">
          <div class="box-head">
            <span class="dot"></span>全省酒店销售量产品入住情况
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
              <th>入住起止日期</th>
              <th>旅行社名称</th>
              <th>入住酒店</th>
              <th>入住总人数</th>
              <th>导游人数</th>
              <th>司乘人数</th>
              <th>游客人数</th>
            </tr>
            <tr v-for="(v, i) in tableData" :key="i">
              <td>{{ i + 1 < 10 ? "0" + (i + 1) : i + 1 }}</td>
              <td>{{ v.data1 }}</td>
              <td>{{ v.name }}</td>
              <td>{{ v.floor }}</td>
              <td>{{ v.ting }}</td>
              <td>{{ v.num1 }}</td>
              <td>{{ v.num2 }}</td>
              <td>{{ v.data1 }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chartList from "../components/element/chartList";
export default {
  name: "page1",
  data() {
    return {
      title: "",
      width: "100%",
      height: "100%",
      tableData: [
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "武汉恒大酒店",
          ting: "126",
          active: "湖北宜昌神农架",
          num1: "4",
          num2: "2",
          data1: "120",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "武汉恒大酒店",
          ting: "126",
          active: "湖北宜昌神农架",
          num1: "4",
          num2: "2",
          data1: "120",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "武汉恒大酒店",
          ting: "126",
          active: "湖北宜昌神农架",
          num1: "4",
          num2: "2",
          data1: "120",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "武汉恒大酒店",
          ting: "126",
          active: "湖北宜昌神农架",
          num1: "4",
          num2: "2",
          data1: "120",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "武汉恒大酒店",
          ting: "126",
          active: "湖北宜昌神农架",
          num1: "4",
          num2: "2",
          data1: "120",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "武汉恒大酒店",
          ting: "126",
          active: "湖北宜昌神农架",
          num1: "4",
          num2: "2",
          data1: "120",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "武汉恒大酒店",
          ting: "126",
          active: "湖北宜昌神农架",
          num1: "4",
          num2: "2",
          data1: "120",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "武汉恒大酒店",
          ting: "126",
          active: "湖北宜昌神农架",
          num1: "4",
          num2: "2",
          data1: "120",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "武汉恒大酒店",
          ting: "126",
          active: "湖北宜昌神农架",
          num1: "4",
          num2: "2",
          data1: "120",
          data2: "2020-04-18",
        },
        {
          type: "养生大九湖休闲3日2万跟团游",
          name: "宜旅假日国际旅行社",
          floor: "武汉恒大酒店",
          ting: "126",
          active: "湖北宜昌神农架",
          num1: "4",
          num2: "2",
          data1: "120",
          data2: "2020-04-18",
        },
      ],
      bindData: [
        {
          name: "武汉恒大酒店",
          num1: "18.56",
          num2: "25425425.00",
          per: [10, 30, 32, 28],
        },
        {
          name: "武汉恒大酒店",
          num1: "18.56",
          num2: "25425425.00",
          per: [12, 30, 32, 26],
        },
        {
          name: "武汉恒大酒店",
          num1: "18.56",
          num2: "25425425.00",
          per: [26, 24, 32, 18],
        },
        {
          name: "武汉恒大酒店",
          num1: "18.56",
          num2: "25425425.00",
          per: [26, 24, 32, 18],
        },
        {
          name: "武汉恒大酒店",
          num1: "18.56",
          num2: "25425425.00",
          per: [26, 24, 32, 18],
        },
      ],
      unit: {
        unit: "间",
        legendArr: ["标间", "三人间", "双人间", "大床房"],
      },
    };
  },
  created() {},
  methods: {},
  components: {
    "v-chartList": chartList,
  },
};
</script>

<style lang="less" scoped>
.box_r {
  flex: 1;
  display: flex;
  .box_flex1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    .box {
      &:first-child {
        height: 42%;
      }
      &:last-child {
        flex: 1;
      }
      .box-head {
        margin-bottom: 0.1rem;
        width: 100%;
        .el-pagination {
          float: right;
        }
        /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
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
        font-size: 0.32rem;
        color: #fff;
        th,
        tr:first-child td {
          background: rgba(46, 217, 253, 0.4);
          border: 0.02rem solid rgba(42, 204, 240, 1);
        }
        th,
        td {
          padding: 0.5rem 0.32rem;
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
    }
  }
}
</style>
