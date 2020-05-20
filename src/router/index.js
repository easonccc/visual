import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/page1',
    name: 'home',
    component: () => import('../views/page1.vue')
  },
  {
    path: '/page2',
    name: 'page2',
    component: () => import('../views/page2.vue')
  },
  {
    path: '/page3',
    name: 'page3',
    component: () => import('../views/page3.vue')
  },
  {
    path: '/page4',
    name: 'page4',
    component: () => import('../views/page4.vue')
  },
  {
    path: '/page5',
    name: 'page5',
    component: () => import('../views/page5.vue')
  }, {
    path: '/page6',
    name: 'page6',
    component: () => import('../views/page6.vue')
  }, {
    path: '/page7',
    name: 'page7',
    component: () => import('../views/page7.vue')
  }, {
    path: '/page8',
    name: 'page8',
    component: () => import('../views/page8.vue')
  }, {
    path: '/page9',
    name: 'page9',
    component: () => import('../views/page9.vue')
  }, {
    path: '/page10',
    name: 'page10',
    component: () => import('../views/page10.vue')
  }, {
    path: '/page11',
    name: 'page11',
    component: () => import('../views/page11.vue')
  }, {
    path: '/page12',
    name: 'page12',
    component: () => import('../views/page12.vue')
  }, {
    path: '/page13',
    name: 'page13',
    component: () => import('../views/page13.vue')
  }, {
    path: '/page14',
    name: 'page14',
    component: () => import('../views/page14.vue')
  }, {
    path: '/page15',
    name: 'page15',
    component: () => import('../views/page15.vue')
  }, {
    path: '/page16',
    name: 'page16',
    component: () => import('../views/page16.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/cavansDemo.vue')
  },
  {
    path: "",
    redirect: "/page1"
  }
]

const router = new VueRouter({
  routes
})

export default router