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
    display: flex;
    height: 100%;
    background: #f7f7f7;
  }
  .manage-container .left-menu-nav {
    width: 240px;
    flex-grow: 0;
    flex-shrink: 0;
    background-color: #191a23;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
    z-index: 2;
  }
  .manage-container .right-content {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .right-content .top-nav {
    height: 60px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
  }
  .right-content .main {
    height: calc(100% - 60px);
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
