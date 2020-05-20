<template>
  <div class="fix">
    <table class="table fix">
      <tr>
        <td rowspan="4" style="color:#F8B024;width: 20%;">江北收费站</td>
        <td rowspan="2" style="color:#25D49D">进</td>

        <td class="f24">本地旅客：2108 人</td>
      </tr>
      <tr>
        <td class="f24 gw">外地旅客：89208 人</td>
      </tr>
      <tr>
        <td rowspan="2" style="color:#FF84BD">出</td>
        <td class="f24">本地旅客：2108 人</td>
      </tr>
      <tr>
        <td class="f24 gw">外地旅客：89208 人</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.fix {
  width: 100%;
  height: 100%;
  flex: 1;
}
.table {
  td {
    background: rgba(5, 63, 102, 1);
    border: 0.02rem solid rgba(79, 219, 240, 1);
    padding: 1.5% 1.7%;
    font-size: 0.56rem;
    text-align: center;
    vertical-align: middle;
    color: #fff;
  }
  .f24 {
    font-size: 0.44rem;
    text-align: left;
  }
}
</style>