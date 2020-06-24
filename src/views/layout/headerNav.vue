<template>
  <div class="top-nav">
    <Button type="text" v-for="(item, index) in navs" :key="index" :class="{'active': item.key === activeItem}" @click="changeMenu(item)">{{ item.name }}</Button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'headerNav',
  data () {
    return {}
  },
  computed: mapState({
    navs: 'nav',
    activeItem: 'activeMenu',
    paths: 'paths'
  }),
  methods: {
    changeMenu (item) {
      if (item.key !== this.activeItem) {
        this.$store.commit('setActiveMenu', item.key)
        this.$router.push(item.path)
      }
    },
    getActiveKey (path) {
      let result = 'index'
      Object.keys(this.paths).forEach(key => {
        if (this.paths[key].indexOf(path) !== -1) {
          result = key
          return ''
        }
      })
      return result
    }
  },
  mounted () {
    const key = this.getActiveKey(this.$route.path)
    this.$store.commit('setActiveMenu', key)
  },
  created () {
  }
}
</script>

<style scoped>

</style>
