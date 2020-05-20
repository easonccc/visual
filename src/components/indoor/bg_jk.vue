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
      <div class="jkBox t" v-else-if="imgType == 't'">
        <img
          v-for="i in 6"
          @click="showData(i, $event)"
          :key="i"
          ref="img"
          src="../../assets/img/icon/t.png"
          alt=""
        />
      </div>
      <div class="jkBox" v-else-if="imgType == 'c'">
        <img
          v-for="i in 6"
          :key="i"
          ref="img"
          @click="showData(i, $event)"
          src="../../assets/img/icon/co2.png"
          alt=""
        />
      </div>
      <div class="jkBox" v-else-if="imgType == 'jq'">
        <img
          v-for="i in 6"
          :key="i"
          @click="showData(i, $event)"
          src="../../assets/img/icon/jiaquan.png"
          alt=""
        />
      </div>
      <div class="jkBox" v-else-if="imgType == 'pm'">
        <img
          v-for="i in 6"
          :key="i"
          @click="showData(i, $event)"
          src="../../assets/img/icon/pm25.png"
          alt=""
        />
      </div>
    </div>
    <!-- 弹出框的位置 -->
    <div class="popover" v-show="isShow" :id="imgData.bgC" ref="popover">
      <ul>
        <li>当前{{ imgData.name }}:{{ imgData.data }}</li>
        <li v-if="imgData.name1">
          当前{{ imgData.name1 }}:{{ imgData.data1 }}
        </li>
      </ul>
      <div class="css"></div>
    </div>
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
      isShow: false,
    };
  },
  props: {
    imgType: {
      type: String,
      default: "jk",
    },
    imgData: {
      type: Object,
      default: function() {
        return {
          name: "温度",
          name1: "湿度",
          data: "25℃",
          data1: "30%~80%",
          bgC: "orange",
        };
      },
    },
  },
  directives: { clickoutside },
  methods: {
    showData(index, e) {
      // 设置弹出框的位置在点击位置的附近
      console.log(e, "...");
      // console.log(this.$refs.img);
      console.log(index);
      /*     let imgs = this.$refs.img;
      console.log(imgs); */
      if (index == 1) {
        this.isShow = true;
        this.$refs.popover.style.top = 30 + "%";
        this.$refs.popover.style.left = 15 + "%";
      } else if (index == 2) {
        this.isShow = true;
        this.$refs.popover.style.top = 30 + "%";
        this.$refs.popover.style.left = 27 + "%";
      } else if (index == 3) {
        this.isShow = true;
        this.$refs.popover.style.top = 66 + "%";
        this.$refs.popover.style.left = 45 + "%";
      }
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
  #orange {
    background: rgba(254, 124, 75, 0.8);
    .css {
      border-color: transparent transparent rgba(254, 124, 75, 0.8) transparent;
    }
  }
  #blue {
    background: rgba(23, 154, 228, 0.8);
    .css {
      border-color: transparent transparent rgba(23, 154, 228, 0.8) transparent;
    }
  }
  #violet {
    background: rgba(137, 120, 255, 0.8);
    .css {
      border-color: transparent transparent rgba(137, 120, 255, 0.8) transparent;
    }
  }
  #red {
    background: rgba(213, 21, 230, 0.8);
    .css {
      border-color: transparent transparent rgba(213, 21, 230, 0.8) transparent;
    }
  }
  .popover {
    position: absolute;
    top: 17%;
    left: 18%;

    width: 8vw;
    border-radius: 0.2rem;
    padding: 0.4rem;
    .css {
      position: absolute;
      left: 30px;
      overflow: hidden;
      width: 0;
      height: 0;
      border-width: 10px;
      border-style: solid dashed dashed dashed;
      top: -20px;
    }
    ul {
      padding: 0;
      margin: 0;
      color: #fff;
      font-size: 0.4rem;
    }
  }
}
</style>
