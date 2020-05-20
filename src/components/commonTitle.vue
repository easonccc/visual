<template>
  <div>
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "commonTitle",
  props: {
    title: {
      type: String,
      default: "标题",
    },
  },
};
</script>

<style lang="less" scoped>
div {
  // margin: 0 0 0 0.4rem;
  margin-bottom: 0.2rem;
  width: 30rem;
  height: 1.12rem;
  background: url(../assets/img/title_bg.png);
  background-size: 100% 100%;
  font-size: 0.7rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 1.08rem;
  span {
    margin-left: 7.6rem;
  }
}
</style>
