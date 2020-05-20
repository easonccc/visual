<template>
  <div class="content">
    <v-commonTitle title="满意度数据驾驶舱"></v-commonTitle>
    <div class="box_r">
      <div class="box_flex1" style="margin: 0 0.4rem">
        <div class="item">
          <div class="box">
            <div class="box-head">
              <span class="dot"></span>各项旅游服务商户满意度评分
            </div>
            <v-rate :bindData="bindData"></v-rate>
          </div>
        </div>
      </div>
    </div>
    <div class="box_r">
      <div class="box_flex1" style="margin: 0 0.4rem">
        <div class="item">
          <div class="box">
            <div class="box-head"><span class="dot"></span>满意度指标</div>
            <v-radar :bindData="bindData2"></v-radar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rate from "../components/element/rate";
import radar from "../components/element/radar";
export default {
  name: "page1",
  data() {
    return {
      bindData: [
        [
          { name: "蔡林记", rate: 4.8 },
          { name: "蔡林记", rate: 4.7 },
          { name: "蔡林记", rate: 4.6 },
          { name: "蔡林记", rate: 4.5 },
          { name: "蔡林记", rate: 4.4 },
          { name: "蔡林记", rate: 4.3 },
          { name: "蔡林记", rate: 4.2 },
          { name: "蔡林记", rate: 4.1 },
          { name: "蔡林记", rate: 4.0 },
          { name: "蔡林记", rate: 3.9 },
        ],
        [
          { name: "武汉富力万达嘉华酒店", rate: 4.8 },
          { name: "武汉富力万达嘉华酒店", rate: 4.7 },
          { name: "武汉富力万达嘉华酒店", rate: 4.6 },
          { name: "武汉富力万达嘉华酒店", rate: 4.5 },
          { name: "武汉富力万达嘉华酒店", rate: 4.4 },
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
      bindData2: [
        {
          name: "餐饮类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "环境", max: 16000 },
            { name: "卫生", max: 30000 },
            { name: "口味", max: 38000 },
            { name: "服务", max: 52000 },
          ],
          value2: [4300, 10000, 28000, 35000, 50000],
        },
        {
          name: "住宿类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "位置", max: 16000 },
            { name: "设施", max: 30000 },
            { name: "服务", max: 38000 },
            { name: "卫生", max: 52000 },
          ],
          value2: [4300, 10000, 28000, 35000, 50000],
        },
        {
          name: "交通类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "位置", max: 16000 },
            { name: "服务", max: 30000 },
            { name: "安全", max: 38000 },
            { name: "准时", max: 52000 },
          ],
          value2: [4300, 10000, 28000, 35000, 50000],
        },
        {
          name: "景区类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "位置", max: 16000 },
            { name: "设施", max: 30000 },
            { name: "服务", max: 38000 },
            { name: "吸引力", max: 52000 },
          ],
          value2: [4300, 10000, 28000, 35000, 50000],
        },
        {
          name: "购物类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "位置", max: 16000 },
            { name: "设施", max: 30000 },
            { name: "服务", max: 38000 },
            { name: "质量", max: 52000 },
          ],
          value2: [4300, 10000, 28000, 35000, 50000],
        },
        {
          name: "住宿类",
          value1: [
            { name: "价格", max: 6500 },
            { name: "位置", max: 16000 },
            { name: "设施", max: 30000 },
            { name: "服务", max: 38000 },
            { name: "环境", max: 52000 },
          ],
          value2: [4300, 10000, 28000, 35000, 50000],
        },
      ],
    };
  },
  created() {},
  methods: {},
  components: {
    "v-rate": rate,
    "v-radar": radar,
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
    }
  }
}
</style>
