import Vue from 'vue'
import App from './App.vue'
import router, { syncRouterMap } from './router'
import store from './store'
import { Sider, Button, Menu, Submenu, MenuItem, Icon, RadioGroup, Radio, DatePicker, Tooltip, Message, Select, Option, Tabs, TabPane, Divider } from 'view-design'
import 'view-design/dist/styles/iview.css'
import './assets/cover.css'

// import { nav } from './config'

const iViewComponents = { Sider, Button, Menu, Submenu, MenuItem, Icon, RadioGroup, Radio, DatePicker, Tooltip, Select, Option, Tabs, TabPane, Divider }
Object.keys(iViewComponents).forEach(key => {
  Vue.component(key, iViewComponents[key])
})
Vue.prototype.$Message = Message

// 初始化manage
const allMenu = {}
const allNav = []
const paths = {}
function getConfigList (arr, first, prePath, mKey) {
  const result = []
  arr.forEach(item => {
    if (!item.hidden) {
      const menu = {
        label: item.meta.title,
        path: item.path
      }
      if (item.children) {
        menu.children = getConfigList(item.children, false, item.pathName, item.moduleKey)
      }
      if (first) {
        allNav.push({ name: item.name, key: item.moduleKey, path: item.pathName })
        if (!allMenu[item.moduleKey]) {
          allMenu[item.moduleKey] = []
        }
        allMenu[item.moduleKey].push(menu)
      } else {
        if (!paths[mKey]) {
          paths[mKey] = []
        }
        paths[mKey].push(prePath + '/' + item.path)
      }
      result.push(menu)
    }
  })
  return result
}
getConfigList(syncRouterMap, true)
store.commit('setAllMenus', allMenu)
store.commit('setNav', allNav)
store.commit('setPaths', paths)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
