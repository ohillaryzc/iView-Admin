import Vue from 'vue'
import VueRouter from 'vue-router'
import Manage from '../views/manage'
import Desktop from '../views/desktop'

Vue.use(VueRouter)

/* 同步路由表 */
const syncRouterMap = [
  {
    path: '',
    name: 'Layout',
    hidden: true,
    component: Manage
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('../views/login')
  },
  {
    path: '/desktop',
    name: '首页',
    component: Manage,
    moduleKey: 'index',
    meta: {
      title: '工作台',
      icon: 'ios-home'
    },
    children: [
      {
        path: 'desktop',
        name: 'desktop',
        meta: {
          title: '系统首页',
          icon: 'ios-system'
        },
        component: Desktop
      }
    ],
    redirect: '/desktop/desktop'
  },
  {
    path: '/order',
    name: '订单',
    component: Manage,
    moduleKey: 'order',
    meta: {
      title: '订单管理',
      icon: 'ios-order'
    },
    children: [
      {
        path: 'list',
        meta: {
          title: '订单列表',
          icon: 'ios-list'
        },
        component: Desktop
      },
      {
        path: 'list-v2',
        meta: {
          title: '订单列表v2',
          icon: 'ios-list'
        },
        component: Desktop
      }
    ],
    redirect: '/order/list'
  },
  {
    path: '/order',
    name: '订单',
    component: Manage,
    moduleKey: 'order',
    meta: {
      title: '支付配置',
      icon: 'ios-order'
    },
    children: [
      {
        path: 'list',
        meta: {
          title: '全局配置',
          icon: 'ios-list'
        },
        component: Desktop
      },
      {
        path: 'list-v2',
        meta: {
          title: '配置v10',
          icon: 'ios-list'
        },
        component: Desktop
      }
    ],
    redirect: '/order/list'
  }
]

/* 异步路由表 */
const asyncRouterMap = []

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: syncRouterMap
})

export default router
export { syncRouterMap, asyncRouterMap }
