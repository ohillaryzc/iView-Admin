import Vue from 'vue'
import MessageVue from './main.vue'

const MessageConstructor = Vue.extend(MessageVue)

const messageQueen = []

const Message = function (option) {
  const instance = new MessageConstructor({
    el: document.createElement('div')
  })
  instance.message = option.message
  // instance.close()
  setTimeout(() => {
    instance.close()
    messageQueen.splice(0, 1)
    messageQueen.forEach((item, index) => {
      item.$el.style.top = (index + 1) * 47 - 17 + 'px'
    })
  }, option.duration || 2000)
  const top = messageQueen.length * 47 + 30
  instance.$el.style.top = top - 47 + 'px'
  document.body.appendChild(instance.$el)
  messageQueen.push(instance)
  setTimeout(() => {
    instance.$el.style.top = top + 'px'
    instance.$el.style.opacity = 1
  }, 100)
}

export default Message
