import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allMenus: {},
    nav: [],
    activeMenu: 'index'
  },
  mutations: {
    setAllMenus (state, data) {
      state.allMenus = data
    },
    setNav (state, nav) {
      state.nav = nav
    },
    setActiveMenu (state, key) {
      state.activeMenu = key
    }
  },
  actions: {
  },
  modules: {
  }
})
