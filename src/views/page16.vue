<template>
  <div class="content">
    <v-commonTitle title="交通统计驾驶舱"></v-commonTitle>
    <div class="lr">
      <div class="lr_l">
        <div class="lr_l_l">
          <div class="lr_l_l_t">
            <v-table1></v-table1>
          </div>
          <div class="lr_l_l_b">
            <v-table2></v-table2>
          </div>
        </div>
        <div class="lr_l_r">
          <div class="lr_l_r_t">
            <div class="lr_l_r_t_t">
              <v-table2></v-table2>
            </div>
            <div class="lr_l_r_t_b">
              <v-table2></v-table2>
            </div>
          </div>
          <div class="lr_l_r_b">
            <v-table2></v-table2>
          </div>
        </div>
      </div>
      <div class="lr_r">
        <div class="lr_r_t">
          <div class="lr_r_t_l">
            <v-table3></v-table3>
          </div>
          <div class="lr_r_t_r">
            <v-table3></v-table3>
          </div>
        </div>
        <div class="lr_r_b">
          <div class="lr_r_b_l">
            <v-table3></v-table3>
          </div>
          <div class="lr_r_b_r">
            <v-table3></v-table3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VTable1 from "../components/table/table1";
import VTable2 from "../components/table/table2";
import VTable3 from "../components/table/table3";

export default {
  name: "page1",
  components: {
    VTable1,
    VTable2,
    VTable3
  }
};
</script>

<style lang="less" scoped>
.lr {
  display: flex;
  flex: 1;
  > div {
    flex: 1;
  }
  &_l {
    margin-right: 0.4rem;
    display: flex;
    > div {
      flex: 1;
      display: flex;
      &:first-child {
        margin-right: 0.4rem;
      }
    }
    &_l {
      display: flex;
      flex-direction: column;
      &_t {
        height: 60%;
        margin-bottom: 0.4rem;
      }
      &_b {
        flex: 1;
      }
    }
    &_r {
      display: flex;
      flex-direction: column;
      &_t {
        height: 60%;
        margin-bottom: 0.4rem;
        display: flex;
        flex-direction: column;
        > div {
          flex: 1;
        }
        &_t {
          &:first-child {
            margin-bottom: 0.4rem;
          }
        }
      }
      &_b {
        flex: 1;
      }
    }
  }
  &_r {
    display: flex;
    flex-direction: column;
    > div {
      flex: 1;
      display: flex;
      > div {
        flex: 1;
        &:first-child {
          margin-right: 0.4rem;
        }
      }
    }
    &_t {
      margin-bottom: 0.4rem;
    }
  }
}
</style>