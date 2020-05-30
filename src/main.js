import Vue from 'vue'
import App from './App.vue'
import router, { syncRouterMap } from './router'
import store from './store'
import { Sider, Button, Menu, Submenu, MenuItem, Icon } from 'view-design'
import 'view-design/dist/styles/iview.css'
import './assets/cover.css'

// import { nav } from './config'

const iViewComponents = { Sider, Button, Menu, Submenu, MenuItem, Icon }
Object.keys(iViewComponents).forEach(key => {
  Vue.component(key, iViewComponents[key])
})

// 初始化manage
const menus = {}
const navs = []
// nav.forEach(item => {
//   menus[item.moduleKey] = []
// })
const tempNav = []
syncRouterMap.forEach(item => {
  if (!item.hidden) {
    if (!menus[item.moduleKey]) {
      menus[item.moduleKey] = []
    }
    if (tempNav.indexOf(item.moduleKey) === -1) {
      tempNav.push(item.moduleKey)
      navs.push({
        label: item.name,
        path: item.path
      })
    }
    menus[item.moduleKey].push(item)
  }
})
store.commit('setAllMenus', menus)
store.commit('setNav', navs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
