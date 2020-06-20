import Vue from 'vue'
import App from './App.vue'
import router, { syncRouterMap } from './router'
import store from './store'
import { Sider, Button, Menu, Submenu, MenuItem, Icon, RadioGroup, Radio, DatePicker, Tooltip, Message } from 'view-design'
import 'view-design/dist/styles/iview.css'
import './assets/cover.css'

// import { nav } from './config'

const iViewComponents = { Sider, Button, Menu, Submenu, MenuItem, Icon, RadioGroup, Radio, DatePicker, Tooltip }
Object.keys(iViewComponents).forEach(key => {
  Vue.component(key, iViewComponents[key])
})
Vue.prototype.$Message = Message

// 初始化manage
const allMenu = {}
const allNav = []
function getConfigList (arr, first) {
  const result = []
  arr.forEach(item => {
    if (!item.hidden) {
      const menu = {
        label: item.meta.title,
        path: item.path
      }
      if (item.children) {
        menu.children = getConfigList(item.children)
      }
      if (first) {
        allNav.push({ name: item.name, key: item.moduleKey, path: item.pathName })
        if (!allMenu[item.moduleKey]) {
          allMenu[item.moduleKey] = []
        }
        allMenu[item.moduleKey].push(menu)
      }
      result.push(menu)
    }
  })
  return result
}
getConfigList(syncRouterMap, true)
store.commit('setAllMenus', allMenu)
store.commit('setNav', allNav)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
