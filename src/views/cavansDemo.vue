<template>
  <div class="indoorMap">
    <!--   <div class="bgBox">
      <div class="jkBox" v-if="imgType == 'jk'">
        <img v-for="i in 6" :key="i" src="../assets/img/jk.png" alt="" />
      </div>
      <div class="jkBox" v-else-if="imgType == 'person'">
        <img v-for="i in 6" :key="i" src="../assets/img/abry.png" alt="" />
      </div>
      <div class="jkBox" v-else-if="imgType == 'device'">
        <img src="../assets/img/安保数据/红外双鉴2.png" alt="" />
        <img src="../assets/img/安保数据/红外双鉴2.png" alt="" />
        <img src="../assets/img/安保数据/jk2.png" alt="" />
        <img src="../assets/img/安保数据/jk.png" alt="" />
        <img src="../assets/img/安保数据/jk.png" alt="" />
        <img src="../assets/img/安保数据/jk2.png" alt="" />
        <img src="../assets/img/安保数据/deng.png" alt="" />
        <img src="../assets/img/安保数据/deng.png" alt="" />
      </div>
    </div>
    <canvas id="c"></canvas> -->
    <weather></weather>
    <weather-two></weather-two>
  </div>
</template>

<script>
import weather from "../components/weather";
import weather2 from "../components/weather2";
export default {
  props: {
    imgType: {
      type: String,
      default: "person",
    },
  },
  components: {
    weather,
    weatherTwo: weather2,
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      let canvas = document.getElementById("c");
      let ctx = canvas.getContext("2d");
      //开始一个新的绘制路径
      ctx.beginPath();
      //定义直线的起点坐标为(10,10)
      ctx.moveTo(10, 10);
      //定义直线的终点坐标为(50,10)
      ctx.lineTo(50, 10);
      //沿着坐标点顺序的路径绘制直线
      ctx.stroke();
      //关闭当前的绘制路径
      ctx.closePath();

      //绘制一条带颜色的直线
      ctx.moveTo(10, 30);
      ctx.lineTo(50, 30);
      //支持css颜色值的各种表现形式，例如："blue"、"#0000ff"、"#00f"、"rgb(0,0,255)"、"rgba(0,0,255,1)"
      //颜色等各种设置，必须在最终的绘制函数stroke()之前调用
      ctx.strokeStyle = "red";

      ctx.stroke();
      //关闭当前的绘制路径
      ctx.closePath();
    },
  },
};
</script>

<style lang="less" scoped>
.indoorMap {
  /*   height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  .bgBox {
    flex: 1;
    background: url(../assets/img/Bitmap.png);
    background-size: 100% 100%;
    .jkBox {
      img {
        cursor: pointer;
        position: absolute;
        width: 40px;
        &:first-child {
          top: 15%;
          left: 18%;
        }
        &:nth-child(2) {
          top: 15%;
          left: 30%;
        }
        &:nth-child(3) {
          top: 50%;
          left: 50%;
          transform: translateX(-20%);
        }
        &:nth-child(4) {
          bottom: 15%;
          right: 18%;
        }
        &:nth-child(5) {
          bottom: 15%;
          left: 18%;
        }
        &:nth-child(6) {
          top: 15%;
          right: 18%;
        }
        &:nth-child(7) {
          bottom: 16%;
          right: 40%;
        }
        &:nth-child(8) {
          top: 17%;
          right: 40%;
        }
      }
    }
  }
  #c {
    position: absolute;
    top: 0;
    left: 0;
  } */
}
</style>
