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
      default: "标题"
    }
  }
};
</script>

<style lang="less" scoped>
div {
  // margin: 0 0 0 0.4rem;
  margin-bottom: 0.4rem;
  width: 15rem;
  height: 0.56rem;
  background: linear-gradient(
    90deg,
    rgba(78, 219, 240, 1) 0%,
    rgba(12, 66, 102, 1) 100%
  );
  font-size: 0.38rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 0.56rem;
  span {
    margin-left: 3.81rem;
  }
}
</style>
