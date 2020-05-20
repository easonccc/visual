import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//自适应字体 50px -> 2rem
import './assets/js/pxToRem'

import './assets/js/config'
import './assets/css/common.less'

//引入公共标题 commonTitle
import commonTitle from './components/commonTitle'
Vue.component("v-commonTitle", commonTitle)
//引入公共loadder
import loader from './components/element/loader'
Vue.component("v-loader", loader)

import axios from 'axios'
Vue.prototype.$axios = axios



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 全局定义获取屏幕宽高的方法
Vue.prototype.getViewportSize = function () {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')