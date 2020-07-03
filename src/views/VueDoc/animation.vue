<template>
  <div style="margin: 16px;">
    <div class="move-item-box">
      <Button type="primary" @click="up2down = !up2down">开始动画</Button>
      <transition name="up2down">
        <div class="move-item" v-if="up2down">动画对象</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'animation',
  data () {
    return {
      up2down: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .move-item-box {
    position: relative;
    background-color: #fff;
    padding: 24px;
  }
  .move-item {
    position: absolute;
    top: 21px;
    left: 120px;
    padding: 8px 12px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    border-radius: 4px;
  }
  .up2down-enter-active, .up2down-leave-active {
    transition: top .3s ease-in-out, opacity .3s ease-in-out;
  }
  .up2down-enter, .up2down-leave-to {
    opacity: 0;
    top: 100px;
  }
</style>
