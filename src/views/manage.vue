<template>
  <div class="manage-container">
    <sidebar></sidebar>
    <div class="right-content">
      <header-nav></header-nav>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import sidebar from './layout/sidebar'
import headerNav from './layout/headerNav'
import appMain from './layout/appMain'
export default {
  name: 'manage',
  components: {
    sidebar,
    headerNav,
    appMain
  },
  data () {
    return {}
  },
  methods: {},
  mounted () {
  },
  created () {
  }
}
</script>

<style scoped>
  .manage-container {
    min-height: 100vh;
    display: flex;
  }
  .manage-container .left-menu-nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 240px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #191a23;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
    z-index: 11;
  }
  .manage-container .right-content {
    flex-grow: 1;
    flex-shrink: 1;
    padding-left: 240px;
    background: #f7f7f7;
    width: 100%;
  }
  .right-content .top-nav {
    position: fixed;
    left: 240px;
    right: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
  }
  .right-content .main {
    padding-top: 60px;
  }
</style>
