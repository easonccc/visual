<template>
  <div>
    <table class="sort">
      <tr>
        <th
          v-for="(v, i) in bindData.headData"
          :key="i"
          :style="{ background: bindData.thbg, border: bindData.tdbor }"
        >
          {{ v }}
        </th>
      </tr>
      <tr
        v-for="(v, i) in bindData.tableData"
        :key="i"
        :class="{ active: v.active }"
        :style="{ background: bindData.tdbg, border: bindData.tdbor }"
      >
        <td v-if="bindData.showIndex">
          {{ i + 1 < 10 ? "0" + (i + 1) : i + 1 }}
        </td>
        <td
          v-for="(v2, i2) in v"
          v-if="isBoolean(v2)"
          :style="{ border: bindData.tdbor }"
        >
          {{ v2 }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    bindData: {
      type: Object,
      default: function() {
        return {
          showIndex: false,
          headData: [
            // "排名",
            "城市",
            "省份",
            "所属大区",
            "城市分级",
            "热度指数"
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
          thbg: "rgba(46, 217, 253, 0.4)",
          tdbg: "rgba(46, 217, 253, 0.2)",
          tdbor: "0.02rem solid rgba(42, 204, 240, 1)"
        };
      }
    }
  },
  methods: {
    isBoolean(v) {
      return typeof v == "boolean" ? false : true;
    }
  }
};
</script>

<style lang="less" scoped>
.sort {
  font-size: 0.28rem;
  color: #fff;
  width: 100%;
  th,
  tr:first-child td {
    background: rgba(46, 217, 253, 0.4);
    border: 0.02rem solid rgba(42, 204, 240, 1);
  }
  th,
  td {
    padding: 0.22rem 0.32rem;
  }
  .active td {
    color: #ef6767;
  }
  td {
    text-align: center;
    background: rgba(46, 217, 253, 0.2);
    // border: 0.02rem solid rgba(42, 204, 240, 1);
  }
}
</style>
