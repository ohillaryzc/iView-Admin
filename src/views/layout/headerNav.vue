<template>
  <div class="top-nav">
    <Button type="text" v-for="(item, index) in navs" :key="index" @click="changeMenu(item)">{{ item.name }}</Button>
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
  methods: {
    changeMenu (item) {
      this.$store.commit('setActiveMenu', item.key)
      this.$router.push(item.path)
    }
  },
  mounted () {
    console.log(this.$route)
  },
  created () {
  }
}
</script>

<style scoped>

</style>
