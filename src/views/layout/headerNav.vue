<template>
  <div class="top-nav">
    <router-link v-for="(item, index) in navs" :key="index" :to="item.path">{{ item.label }}</router-link>
    <Button type="text"></Button>
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
    navs: 'nav'
  }),
  methods: {},
  mounted () {
    console.log(this.navs)
  },
  created () {
  }
}
</script>

<style scoped>

</style>
