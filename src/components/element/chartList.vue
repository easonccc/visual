<template>
  <div class="l" :style="{ height: height, width: width }">
    <div class="item_type" v-if="show">
      <el-button type="text" class="pull-right" style="margin-left: 0.2rem"
        >娱乐消费</el-button
      >
      <el-button type="text" class="pull-right">商店购买</el-button>
      <el-button type="text" class="pull-right">景区购票</el-button>
      <el-button type="text" class="pull-right">交通服务</el-button>
      <el-button type="text" class="pull-right">酒店民宿</el-button>
      <el-button type="text" class="pull-right">餐饮消费</el-button>
    </div>
    <div class="item_type">
      <!--   <div class="type5"><span></span>网银</div>
      <div class="type4"><span></span>刷卡</div>
      <div class="type3"><span></span>支付宝</div>
      <div class="type2"><span></span>微信</div>
      <div class="type1"><span></span>现金</div> -->
      <div
        v-for="(item, index) in unit.legendArr"
        :class="'type' + (unit.legendArr.length - index)"
        :key="index"
      >
        <span></span>{{ item }}
      </div>
    </div>
    <div class="item_list mt10">
      <el-row :gutter="20" v-for="(v, j) in bindData" :key="j">
        <el-col :span="3"
          ><div class="i" :style="{ color: j < 3 ? '' : 'white' }">
            0{{ j + 1 }} {{ v.name }}
          </div></el-col
        >
        <el-col :span="3" v-if="showRatio"
          ><div class="i" :style="{ color: j < 3 ? '' : 'white' }">
            {{ v.num2 }}{{ unit.unit }}
          </div></el-col
        >
        <!-- 不显示环比与同比 -->
        <el-col :span="3" v-if="showRatio"
          ><div class="i" :style="{ color: j < 3 ? '' : 'white' }">
            同比:-25%<img src="../../assets/img/upsmall.png" /></div
        ></el-col>
        <el-col :span="3" v-if="showRatio"
          ><div class="i" :style="{ color: j < 3 ? '' : 'white' }">
            环比:+125%<img src="../../assets/img/downsmall.png" /></div
        ></el-col>
        <!-- 显示百分比 -->
        <el-col :span="3" v-else
          ><div
            class="i"
            style="float:right"
            :style="{ color: j < 3 ? '' : 'white' }"
          >
            {{ v.num1 }}%
          </div></el-col
        >
        <el-col :span="6" v-if="showRatio == false"
          ><div
            class="i"
            style="margin-left:5rem"
            :style="{ color: j < 3 ? '' : 'white' }"
          >
            {{ v.num2 }}{{ unit.unit }}
          </div></el-col
        >
        <el-col :span="12" style="display: flex">
          <div class="c1" :style="{ width: v.per[0] + '%' }">
            {{ v.per[0] }}%
          </div>
          <div class="c2" :style="{ width: v.per[1] + '%' }">
            {{ v.per[1] }}%
          </div>
          <div class="c3" :style="{ width: v.per[2] + '%' }">
            {{ v.per[2] }}%
          </div>
          <div class="c4" :style="{ width: v.per[3] + '%' }">
            {{ v.per[3] }}%
          </div>
          <div class="c5" v-if="v.per[4]" :style="{ width: v.per[4] + '%' }">
            {{ v.per[4] }}%
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "visitorsStatic",
  props: {
    type: {
      type: String,
      default: "数量",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    bindData: {
      type: Array,
      default: function(value) {
        return value;
      },
    },
    show: {
      type: Boolean,
      default: false,
    },
    // 是否显示环比和同比
    showRatio: {
      type: Boolean,
      default: true,
    },
    // 单位及图例
    unit: {
      type: Object,
      default: function() {
        return {
          unit: "元",
          legendArr: ["网银", "刷卡", "支付宝", "微信", "现金"],
        };
      },
    },
  },
  data() {
    return {
      chart: null,
      xData: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
      ],
      yData: [
        103215,
        103233,
        103234,
        103252,
        132101,
        132115,
        132200,
        103220,
        103330,
        103334,
        103390,
        103215,
        90654,
        103215,
        103215,
        103215,
        103215,
        103215,
        103332,
        133215,
        93215,
        103215,
        123215,
        103215,
      ],
    };
  },
  mounted() {
    this.initChart();
  },
  watch: {
    bindData: function() {
      this.initChart();
    },
  },
  beforeDestroy() {},
  methods: {
    initChart() {},
  },
};
</script>
<style scoped lang="less">
.l {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  .item_type {
    > div {
      float: right;
      height: 0.45rem;
      font-size: 0.32rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 0.45rem;
      text-align: center;
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
    }
    .type1 {
      span {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        background: #17abff;
        margin-right: 0.4rem;
        background: rgba(254, 75, 138, 1);
      }
    }
    .type2 {
      span {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        background: rgba(89, 222, 129, 1);

        margin-right: 0.4rem;
      }
    }
    .type3 {
      span {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        background: rgba(54, 172, 235, 1);
        margin-right: 0.4rem;
      }
    }
    .type4 {
      span {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        background: #20d271;
        margin-right: 0.4rem;
        background: rgba(177, 134, 242, 1);
      }
    }
    .type5 {
      span {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
        background: #20d271;
        margin-right: 0.4rem;
        background: rgba(36, 214, 209, 1);
      }
    }
  }
  .item_list {
    padding: 0.2rem;
    flex: 1;
    margin-top: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .i {
      height: 0.5rem;
      font-size: 0.6rem;
      font-weight: 400;
      color: #fdaa18;
      line-height: 0.5rem;
      display: flex;
      align-items: center;
      img {
        width: 0.25rem;
        height: 0.25rem;
        margin-left: 0.5rem;
      }
    }
    .c1 {
      background: rgba(254, 75, 138, 1);
      height: 1rem;
      font-size: 0.36rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 1rem;
      text-align: center;
    }
    .c2 {
      background: rgba(89, 222, 129, 1);

      height: 1rem;
      font-size: 0.36rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 1rem;
      text-align: center;
    }
    .c3 {
      background: rgba(54, 172, 235, 1);
      height: 1rem;
      font-size: 0.36rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 1rem;
      text-align: center;
    }
    .c4 {
      background: rgba(177, 134, 242, 1);
      height: 1rem;
      font-size: 0.36rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 1rem;
      text-align: center;
    }
    .c5 {
      background: rgba(36, 214, 209, 1);
      height: 1rem;
      font-size: 0.36rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 1rem;
      text-align: center;
    }
  }
}
</style>
