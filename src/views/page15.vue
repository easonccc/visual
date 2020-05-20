<template>
  <div class="content">
    <div class="tb">
      <div class="t">
        <v-commonTitle title="客流统计对比折线图"></v-commonTitle>
        <div class="box">
          <div class="hotWord">
            <span>关键词:</span>
            <div class="wordBox">
              <div>巫山小三峡</div>
              <div>酉阳桃花源</div>
              <div>万州大瀑布</div>
            </div>
            <el-button size="medium" icon="el-icon-plus" style="height: 0.84rem;
    border: 0.01rem solid rgb(27, 178, 210);
    display: flex;
    align-items: center;
    padding: 0;
    border-radius: 0;
    color: #1BB2D2;
    background: transparent;
    font-size: 0.26rem;
    padding: 0 .34rem;">添加对比</el-button>
            <el-button size="medium" icon="el-icon-check" style="height: 0.84rem;
    border: 0.01rem solid rgb(27, 178, 210);
    display: flex;
    align-items: center;
    padding: 0;
    border-radius: 0;
    color: #1BB2D2;
    background: transparent;
    font-size: 0.26rem;
    padding: 0 .34rem;">确定查询</el-button>
          </div>
          <div class="itemBox trendTable">
            <div class="item" v-for="(v,i) in 1" :key="i">
              <div class="searchBox">
                <div class="title2">常看景区</div>
                <div class="wordBox">
                  <span v-for="(v,i) in wordArr" :key="i">{{v}}</span>
                </div>
              </div>
              <Chart-line></Chart-line>
            </div>
          </div>
        </div>
      </div>

      <div class="b">
        <v-commonTitle title="车流统计对比折线图"></v-commonTitle>
        <div class="box">
          <div class="hotWord">
            <span>关键词:</span>
            <div class="wordBox">
              <div>巫山小三峡</div>
              <div>酉阳桃花源</div>
              <div>万州大瀑布</div>
            </div>
            <el-button size="medium" icon="el-icon-plus" style="height: 0.84rem;
    border: 0.01rem solid rgb(27, 178, 210);
    display: flex;
    align-items: center;
    padding: 0;
    border-radius: 0;
    color: #1BB2D2;
    background: transparent;
    font-size: 0.26rem;
    padding: 0 .34rem;">添加对比</el-button>
            <el-button size="medium" icon="el-icon-check" style="height: 0.84rem;
    border: 0.01rem solid rgb(27, 178, 210);
    display: flex;
    align-items: center;
    padding: 0;
    border-radius: 0;
    color: #1BB2D2;
    background: transparent;
    font-size: 0.26rem;
    padding: 0 .34rem;">确定查询</el-button>
          </div>
          <div class="itemBox trendTable">
            <div class="item" v-for="(v,i) in 1" :key="i">
              <div class="searchBox">
                <div class="title2">常看景区</div>
                <div class="wordBox">
                  <span v-for="(v,i) in wordArr" :key="i">{{v}}</span>
                </div>
              </div>
              <Chart-line></Chart-line>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ChartLine from "../components/myEcharts/chartLine";

  export default {
    name: "page1",
    data() {
      return {
        wordArr: [
          "大足石刻景区",
          "大足石刻景区",
          "大足石刻景区",
          "大足石刻景区",
          "大足石刻景区",
          "大足石刻景区",
          "大足石刻景区"
        ]
      };
    },
    components: {
      ChartLine
    }
  };
</script>

<style lang="less" scoped>
  .content {
    display: flex;
    flex-direction: column;

    .tb {
      display: flex;
      height: 100%;
      flex-direction: column;
      margin-bottom: 0 !important;
      >div {
        height: 47%;
      }
    }

    >div {
      flex: 1;
      display: flex;
      flex-direction: column;

      &:first-child {
        margin-bottom: 0.4rem;
      }

      >.box {
        flex: 1;
      }
    }

    .hotWord {
      display: flex;
      //   justify-content: space-between;
      align-items: center;
      background: #03416d;
      padding: 0.25rem 1.35rem;
      margin-bottom: 0.2rem;

      >span {
        margin-right: 0.32rem;
        font-size: 0.32rem;
        color: #fff;
      }

      .wordBox {
        display: flex;
        justify-content: space-between;

        >div {
          width: 4.05rem;
          height: 0.84rem;
          padding-left: 0.57rem;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          position: relative;
          color: #fff;
          font-size: 0.26rem;
          margin-right: 1.35rem;
          background: rgba(46, 217, 253, 0.2);

          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 0.18rem;
          }

          &:nth-child(1) {
            border: 1px solid #58cf66;

            &::before {
              background: #58cf66;
            }
          }

          &:nth-child(2) {
            border: 1px solid #fe8f29;

            &::before {
              background: #fe8f29;
            }
          }

          &:nth-child(3) {
            border: 1px solid #5990ff;

            &::before {
              background: #5990ff;
            }
          }
        }
      }
    }

    .itemBox {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      flex: 1;
      width: 100%;

      .searchBox {

        //   padding: 20px 0;
        .wordBox {
          display: flex;
          justify-content: space-between;
          color: #fff;
          font-size: 0.24rem;
          margin: 0.4rem 0;
        }

        .title1 {
          color: #5990ff;
          font-size: 24px;
        }

        .title2 {
          color: #fff;
          font-size: 0.32rem;
        }
      }

      .info {
        display: flex;
        align-items: center;

        >img {
          width: 0.2rem;
          height: 0.18rem;
          margin-left: 0.1rem;
        }
      }

      .item {
        display: flex;
        flex-direction: column;
        background: rgba(3, 65, 109, 1);
        border: 0.01rem solid rgba(255, 255, 255, 0.2);
        padding: 0.33rem 0.54rem;
        margin-right: 1.38rem;

        &:last-child {
          margin-right: 0;
        }

        flex: 1;

        .title {
          color: #ffffff;
          font-size: 0.32rem;
        }
      }
    }
  }
</style>