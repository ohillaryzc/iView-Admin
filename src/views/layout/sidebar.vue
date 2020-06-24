<template>
  <div class="left-menu-nav">
    <Sider hide-trigger :width="240" style="background: #191a23;">
      <div class="logo">iView Admin</div>
      <div class="menus">
        <Menu theme="dark" @on-select="goPage" :active-name="$route.path">
          <Submenu v-for="(item, index) in allMenu[menus]" :key="index" :name="item.path">
            <template slot="title">
              <Icon type="ios-appstore" size="20"/>
              <span>{{ item.label }}</span>
            </template>
            <MenuItem v-for="(child, idx) in item.children" :key="idx" :name="item.path + '/' + child.path">{{ child.label }}</MenuItem>
          </Submenu>
        </Menu>
      </div>
    </Sider>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'sideBar',
  data () {
    return {}
  },
  methods: {
    goPage (name) {
      if (this.$route.path !== name) {
        this.$router.push(name)
      }
    }
  },
  computed: {
    ...mapState({
      menus: 'activeMenu',
      allMenu: 'allMenus'
    })
  },
  mounted () {
  }
}
</script>

<style scoped>
  .logo {
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    font-size: 24px;
  }
  .ivu-menu-dark {
    background-color: #191a23;
  }
  .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
    background-color: #101117;
  }
</style>
