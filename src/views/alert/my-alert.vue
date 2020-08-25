<template>
  <div class="my-alert">
    <div class="my-message-box">
      <Button type="primary" @click="showAlert(1000)">弹出提示1s</Button>
      <Button type="primary" @click="showAlert(2000)" style="margin-left: 16px;">弹出提示2s</Button>
      <Button type="primary" @click="showAlert(3000)" style="margin-left: 16px;">弹出提示3s</Button>
    </div>
    <div class="iView-message-box" style="margin-top: 16px;">
      <Button type="primary" @click="showMessage(10)">弹出提示1s</Button>
      <Button type="primary" @click="showMessage(5)" style="margin-left: 16px;">弹出提示2s</Button>
      <Button type="primary" @click="showMessage(30)" style="margin-left: 16px;">弹出提示3s</Button>
    </div>
  </div>
</template>

<script>
import Message from '../../components/message'
export default {
  name: 'my-alert',
  data () {
    return {}
  },
  methods: {
    showAlert (duration) {
      Message({ message: '首个弹窗', duration })
    },
    showMessage (duration) {
      this.$Message.info({
        content: `${duration}后关闭`,
        duration
      })
    }
  },
  mounted () {
  },
  created () {
  }
}
</script>

<style scoped>
  .my-alert {
    margin: 16px;
  }
</style>
