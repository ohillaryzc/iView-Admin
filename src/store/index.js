import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [],
    allMenus: {},
    nav: []
  },
  mutations: {
    changeMenu (state, key) {
      state.menu = state.allMenus[key]
    },
    setAllMenus (state, data) {
      state.allMenus = data
    },
    setNav (state, nav) {
      state.nav = nav
    }
  },
  actions: {
  },
  modules: {
  }
})
