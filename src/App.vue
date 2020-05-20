<template>
  <div id="app">
    <transition name="el-zoom-in-center">
      <div class="settingBox" v-show="boxshow" @click="openSetting()">
        <div>
          <div class="item" v-for="(v, i) in menu" v-if="i > 0">
            <div class="bor lt"></div>
            <div class="bor lb"></div>
            <div class="bor rt"></div>
            <div class="bor rb"></div>
            <router-link :to="'/page' + i">
              <img :src="'/img/m' + i + '.png'" alt="" />
              <span>{{ v.name }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </transition>
    <div class="header">
      <div class="header_left">宜昌市博物馆运行监测中心</div>
      <div class="header_right">
        <div class="right_center">
          <span>2020年04月01日 星期三</span>
          <span>多云 27℃</span>
          <span>宜昌</span>
          <span>admin</span>
          <img
            style="width:0.72rem;height:0.72rem"
            class="menu"
            @click="openSetting()"
            src="./assets/img/menu.png"
          />
          <span @click="quit()">退出大屏</span>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boxshow: false,
      menu: [
        {},
        {
          name: "全域旅游概况",
        },
        {
          name: "客流数据驾驶舱",
        },
        {
          name: "车流数据驾驶舱",
        },
        {
          name: "安保数据驾驶舱",
        },
        {
          name: "环境监测数据驾驶舱",
        },
        {
          name: "事件数据驾驶舱",
        },
        {
          name: "通讯数据驾驶舱",
        },
        {
          name: "关注度数据驾驶舱",
        },
        {
          name: "投诉数据驾驶舱",
        },
        {
          name: "舆情数据驾驶舱",
        },
      ],
    };
  },
  methods: {
    quit() {
      location.href = "login.html";
    },
    openSetting() {
      this.boxshow = !this.boxshow;
    },
  },
};
</script>

<style lang="less">
body {
  background-color: #022b4c;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box; //font-family: PingFangSC-Regular;
}

#app {
  font-family: "Microsoft YaHei", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.settingBox {
  width: 100vw;
  height: 100vh;
  background: rgba(2, 43, 76, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    height: 80%;
    width: 90%;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 9rem);
    grid-gap: 3.12rem;
  }

  .item {
    width: 8.8rem;
    height: 8.8rem;
    position: relative;
    background: rgba(1, 104, 185, 0.4);
    box-shadow: 0rem 0.02rem 0.04rem 0rem rgba(1, 104, 185, 1),
      0rem -0.02rem 0.04rem 0rem rgba(1, 104, 185, 1);
    .bor {
      position: absolute;
      width: 0.88rem;
      height: 0.88rem;
    }
    .lt {
      border-left: 0.16rem solid #22c8eb;
      border-top: 0.16rem solid #22c8eb;
      left: 0;
      top: 0;
    }
    .rt {
      border-right: 0.16rem solid #22c8eb;
      border-top: 0.16rem solid #22c8eb;
      right: 0;
      top: 0;
    }
    .lb {
      border-left: 0.16rem solid #22c8eb;
      border-bottom: 0.16rem solid #22c8eb;
      left: 0;
      bottom: 0;
    }
    .rb {
      border-right: 0.16rem solid #22c8eb;
      border-bottom: 0.16rem solid #22c8eb;
      right: 0;
      bottom: 0;
    }
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 0.72rem;
      color: #ecfbfb;
      img {
        width: 4rem;
        height: 4rem;
        margin-bottom: 1rem;
      }
    }
  }

  img {
    margin-bottom: 25px;
    display: block;
  }
}
</style>
