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
    pathName: '/desktop',
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
    pathName: '/order',
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
        component: () => import('../views/order')
      },
      {
        path: 'list-v2',
        meta: {
          title: '订单列表v2',
          icon: 'ios-list'
        },
        component: () => import('../views/order/list-v2')
      }
    ],
    redirect: '/order/list'
  },
  {
    path: '/statistics',
    pathName: '/statistics',
    name: '统计',
    component: Manage,
    moduleKey: 'statistics',
    meta: {
      title: '数据统计',
      icon: 'ios-stats'
    },
    children: [
      {
        path: 'order-statistics',
        meta: {
          title: '订单统计',
          icon: 'ios-stats'
        },
        component: () => import('../views/statistics/order-statistics')
      }
    ],
    redirect: '/statistics/order-statistics'
  },
  {
    path: '/form',
    pathName: '/form',
    name: '表单',
    component: Manage,
    moduleKey: 'form',
    meta: {
      title: '配置表单',
      icon: 'md-folder'
    },
    children: [
      {
        path: 'dynamic-form',
        meta: {
          title: '自定义表单',
          icon: 'md-list'
        },
        component: () => import('../views/form/dynamic-form')
      }
    ],
    redirect: '/form/dynamic-form'
  },
  {
    path: '/drag',
    pathName: '/drag',
    name: '拖拽',
    component: Manage,
    moduleKey: 'drag',
    meta: {
      title: '拖拽',
      icon: 'md-folder'
    },
    children: [
      {
        path: 'index',
        meta: {
          title: '拖拽',
          icon: 'md-list'
        },
        component: () => import('../views/drag/index')
      }
    ],
    redirect: '/drag/index'
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
