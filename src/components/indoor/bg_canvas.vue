<template>
  <div class="indoorMap">
    <div class="bgBox">
      <div class="jkBox" v-if="imgType == 'jk'">
        <img v-for="i in 6" :key="i" src="../../assets/img/jk.png" alt="" />
      </div>
      <div class="jkBox" v-else-if="imgType == 'person'">
        <img v-for="i in 6" :key="i" src="../../assets/img/abry.png" alt="" />
      </div>
      <div class="jkBox" v-else-if="imgType == 'device'">
        <img src="../../assets/img/安保数据/红外双鉴2.png" alt="" />
        <img src="../../assets/img/安保数据/红外双鉴2.png" alt="" />
        <img src="../../assets/img/安保数据/jk2.png" alt="" />
        <img src="../../assets/img/安保数据/jk.png" alt="" />
        <img src="../../assets/img/安保数据/jk.png" alt="" />
        <img src="../../assets/img/安保数据/jk2.png" alt="" />
        <img src="../../assets/img/安保数据/deng.png" alt="" />
        <img src="../../assets/img/安保数据/deng.png" alt="" />
      </div>
      <div class="jkBox" v-else-if="imgType == 'event'">
        <div class="img">
          <img src="../../assets/img/事件数据/dingwei.png" alt="" />
        </div>
        <div class="img">
          <img src="../../assets/img/事件数据/dingwei.png" alt="" />
        </div>
        <div class="img">
          <img src="../../assets/img/事件数据/dingwei.png" alt="" />
        </div>
        <div class="img">
          <img src="../../assets/img/事件数据/dingwei.png" alt="" />
        </div>
        <div class="img show" @click="show1" v-clickoutside="closePopover1">
          <img src="../../assets/img/事件数据/renyuandingwei.png" alt="" />
          <!-- 弹出框 -->
          <div class="popover top" v-show="isShow.show1">
            <div class="title">实时巡查人员信息</div>
            <div class="info">
              <div class="item">
                <div>姓名</div>
                <div>张三</div>
              </div>
              <div class="item">
                <div>班次</div>
                <div>早班(7:00-15:00)</div>
              </div>
              <div class="item">
                <div>事件上报：</div>
                <div></div>
              </div>
              <div class="item">
                <div>时间</div>
                <div>地址</div>
              </div>
              <div class="item2">
                <div>3月18日12:56 <span>博物馆二楼</span></div>
                <div class="event">
                  事件详情：有游客李四遗失手机一部，遗失手机电话1331241234，描述
                </div>
              </div>
              <div class="item2 item3">
                <div>3月18日12:56 <span>博物馆二楼</span></div>
                <div>
                  事件详情：有游客李四遗失手机一部，遗失手机电话1331241234，描述
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="img show" @click="show2" v-clickoutside="closePopover2">
          <img src="../../assets/img/事件数据/renyuandingwei.png" alt="" />
          <!-- 弹出框 -->
          <div class="popover bottom" v-show="isShow.show2">
            <div class="title">实时巡查人员信息</div>
            <div class="info">
              <div class="item">
                <div>姓名</div>
                <div>张三</div>
              </div>
              <div class="item">
                <div>班次</div>
                <div>早班(7:00-15:00)</div>
              </div>
              <div class="item">
                <div>事件上报：</div>
                <div></div>
              </div>
              <div class="item">
                <div>时间</div>
                <div>地址</div>
              </div>
              <div class="item2">
                <div>3月18日12:56 <span>博物馆二楼</span></div>
                <div class="event">
                  事件详情：有游客李四遗失手机一部，遗失手机电话1331241234，描述
                </div>
              </div>
              <div class="item2 item3">
                <div>3月18日12:56 <span>博物馆二楼</span></div>
                <div>
                  事件详情：有游客李四遗失手机一部，遗失手机电话1331241234，描述
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="img">
          <img src="../../assets/img/事件数据/dingwei.png" alt="" />
        </div>
        <div class="img show" @click="show3" v-clickoutside="closePopover3">
          <img src="../../assets/img/事件数据/renyuandingwei.png" alt="" />
          <!-- 弹出框 -->
          <div class="popover bottom" v-show="isShow.show3">
            <div class="title">实时巡查人员信息</div>
            <div class="info">
              <div class="item">
                <div>姓名</div>
                <div>张三</div>
              </div>
              <div class="item">
                <div>班次</div>
                <div>早班(7:00-15:00)</div>
              </div>
              <div class="item">
                <div>事件上报：</div>
                <div></div>
              </div>
              <div class="item">
                <div>时间</div>
                <div>地址</div>
              </div>
              <div class="item2">
                <div>3月18日12:56 <span>博物馆二楼</span></div>
                <div class="event">
                  事件详情：有游客李四遗失手机一部，遗失手机电话1331241234，描述
                </div>
              </div>
              <div class="item2 item3">
                <div>3月18日12:56 <span>博物馆二楼</span></div>
                <div>
                  事件详情：有游客李四遗失手机一部，遗失手机电话1331241234，描述
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <canvas id="c"></canvas>
  </div>
</template>

<script>
// 定义绑定   点击除了元素本身之外的事件
const clickoutside = {
  // 初始化指令
  bind(el, binding, vnode) {
    function documentHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener("click", documentHandler);
  },
  update() {},
  unbind(el, binding) {
    // 解除事件监听
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
};
export default {
  data() {
    return {
      isShow: {
        show1: false,
        show2: false,
        show3: false,
      },
    };
  },
  directives: { clickoutside },
  props: {
    imgType: {
      type: String,
      default: "event",
    },
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      // 获取canvas的父盒子宽高
      let indoorMap = document.querySelector(".indoorMap");
      let canvas = document.getElementById("c");
      let ctx = canvas.getContext("2d");
      //  设置宽高
      canvas.width = indoorMap.offsetWidth; // 将canvas元素设置与父元素同宽
      canvas.height = indoorMap.offsetHeight; //将canvas元素设置与父元素同高
      //按照绘制路径顺序连接各个坐标点
      ctx.beginPath();
      //设置线条颜色
      ctx.strokeStyle = "red";
      //   设置线的宽度
      ctx.lineWidth = 2;
      //设置路径起点坐标 50px -> 2rem
      ctx.moveTo(180, 106);
      //定义中间点坐标1
      ctx.lineTo(290, 106);
      //定义中间点坐标2
      ctx.lineTo(460, 248);
      ctx.lineTo(182, 330);
      ctx.lineTo(720, 338);
      ctx.stroke();
      //关闭绘制路径
      ctx.closePath();
    },
    show1() {
      this.isShow.show1 = !this.isShow.show1;
    },
    show2() {
      this.isShow.show2 = !this.isShow.show2;
    },
    /*  closePopover() {
      this.isShow.show1 = false;
      this.isShow.show2 = false;
      this.isShow.show3 = false;
    }, */
    show3() {
      this.isShow.show3 = !this.isShow.show3;
    },
    closePopover1() {
      this.isShow.show1 = false;
    },
    closePopover2() {
      this.isShow.show2 = false;
    },
    closePopover3() {
      this.isShow.show3 = false;
    },
  },
};
</script>

<style lang="less" scoped>
.indoorMap {
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  .bgBox {
    flex: 1;
    background: url(../../assets/img/Bitmap.png);
    background-size: 100% 100%;
    .jkBox {
      .img {
        position: relative;
        //   弹出框的位置1
        .top {
          bottom: 0.4rem;
          left: 0rem;
        }
        // 弹出框的位置2
        .bottom {
          top: 1.8rem;
          left: -2rem;
        }
        .popover {
          position: absolute;
          border: 0.02rem solid rgba(245, 245, 245, 1);
          background: rgba(34, 75, 142, 1);
          color: #fff;
          border-radius: 4px;
          width: 12vw;
          .title {
            color: #fff;
            text-align: left;
            font-size: 0.5rem;
            padding: 0.2rem;
            border-bottom: 1px solid rgba(225, 225, 225, 1);
          }
          .info {
            padding: 0.2rem 0.4rem;
            .item {
              font-size: 0.4rem;
              display: flex;
              border-bottom: 0;
              > div {
                padding: 0.2rem;
                text-align: left;
              }

              > div:last-child {
                color: #fff;
              }
            }
            .item1 {
              border: none;
              > div:first-child {
                border-right: none;
                color: #fff;
              }
              > div:last-child {
                color: #fff;
              }
            }
            .item2 {
              border: 1px solid #7a93b6;
              > div {
                border-bottom: 1px solid #7a93b6;
                font-size: 0.4rem;
                padding: 0.2rem;
                .event {
                  border-bottom: none;
                }
              }
              > div:last-child {
                border-bottom: none;
                border-top: none;
              }
            }
            .item3 {
              border-top: none;
            }
          }
        }
        cursor: pointer;
        position: absolute;
        z-index: 999;
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
          bottom: 26%;
          right: 18%;
        }
        &:nth-child(5) {
          bottom: 26%;
          left: 18%;
        }
        &:nth-child(6) {
          top: 15%;
          right: 18%;
        }
        &:nth-child(7) {
          bottom: 26%;
          right: 40%;
        }
        &:nth-child(8) {
          top: 17%;
          right: 40%;
        }
      }
      img {
        cursor: pointer;
        position: absolute;
        z-index: 999;
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
    height: 100%;
    width: 100%;
  }
}
</style>
