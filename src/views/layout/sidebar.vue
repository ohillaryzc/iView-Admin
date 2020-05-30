<template>
  <div class="left-menu-nav">
    <Sider hide-trigger :width="240" style="background: #191a23;">
      <div class="logo">iView Admin</div>
      <div class="menus">
        <Menu theme="dark">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-appstore" size="20"/>
              <span>应用商店</span>
            </template>
            <MenuItem name="game">娱乐游戏</MenuItem>
            <MenuItem name="study">学习生活</MenuItem>
          </Submenu>
        </Menu>
      </div>
    </Sider>
  </div>
</template>

<script>
export default {
  name: 'sideBar'
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
