<template>
  <div class="message-box">{{message}}</div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {}
  },
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    close () {
      this.$el.style.top = '-37px'
      this.$el.style.opacity = 0
      setTimeout(() => {
        document.body.removeChild(this.$el)
      }, 300)
    }
  }
}
</script>

<style scoped>
  .message-box {
    position: fixed;
    background-color: #fff;
    box-shadow: 0 0 6px 0 rgba(0,0,0,.2);
    border-radius: 4px;
    padding: 8px 20px;
    top: -37px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    opacity: 0;
    transition: all .3s;
  }
</style>
