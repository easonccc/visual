<template>
  <div class="fix">
    <table class="table fix">
      <tr>
        <td rowspan="8" style="color:#63AAFF;width:30%">重庆江北国际机场</td>
        <td rowspan="4" style="color:#25D49D;width: 15%;">进</td>
        <td rowspan="2" class="glw">国内</td>
        <td class="f24">国内旅客：2108 人</td>
      </tr>
      <tr>
        <td class="f24 gw">国外旅客：208 人</td>
      </tr>
      <tr>
        <td rowspan="2" class="ggw">国际</td>
        <td class="f24">国内旅客：2108 人</td>
      </tr>
      <tr>
        <td class="f24 gw">国外旅客：208 人</td>
      </tr>
      <tr>
        <td rowspan="4" style="color:#FF84BD">出</td>
        <td rowspan="2" class="glw" style="width: 15%;">国内</td>
        <td class="f24">国内旅客：2108 人</td>
      </tr>
      <tr>
        <td class="f24 gw">国外旅客：208 人</td>
      </tr>
      <tr>
        <td rowspan="2" class="ggw">国际</td>
        <td class="f24">国内旅客：2108 人</td>
      </tr>
      <tr>
        <td class="f24 gw">国外旅客：208 人</td>
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