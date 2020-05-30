<template>
  <div style="height: 1000px;">{{title}}</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      title: ''
    }
  },
  methods: {},
  watch: {
    $route: function (to) {
      this.title = to.meta.title
    }
  },
  mounted () {
    this.title = this.$route.meta.title
  },
  created () {
  }
}
</script>

<style scoped>

</style>
