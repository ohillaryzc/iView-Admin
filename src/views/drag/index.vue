<template>
  <div>
    <div class="drags">
      <div
        :class="['drag-item', activeIndex === index ? 'active' : '']"
        v-for="(item, index) in items"
        :key="index"
        :draggable="true"
        @drop="outsideDrag"
        @dragstart="myDragStart(index)"
        @dragenter.prevent="myDragEnter(index)"
        @dragover.prevent="myDragOver"
        @dragend="myDragEnd">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      items: [
        { id: 1, label: '1111' },
        { id: 2, label: '2222' },
        { id: 3, label: '3333' },
        { id: 4, label: '4444' },
        { id: 5, label: '5555' },
        { id: 6, label: '66666' },
        { id: 7, label: '7777' },
        { id: 8, label: '8888' }
      ],
      activeIndex: null
    }
  },
  methods: {
    outsideDrag (e) {
      console.log(e)
    },

    myDragStart (e) {
      console.log('start--', e)
      this.activeIndex = e
    },
    myDragEnter (e) {
      console.log('enter--', e)
      if (e !== this.activeIndex) {
        const activeItem = this.items.splice(this.activeIndex, 1)[0]
        this.items.splice(e, 0, activeItem)
        this.activeIndex = e
      }
    },
    myDragOver (e) {
      // console.log(e)
    },
    myDragEnd (e) {
      console.log('end--', e)
      this.activeIndex = null
    }
  },
  created () {
  }
}
</script>

<style scoped>
  .drags {
    width: 520px;
    margin: 100px auto;
    border: 1px solid #000;
    /*display: flex;*/
    flex-wrap: wrap;
  }
  .drag-item {
    margin: 10px;
    padding: 6px 10px;
    border: 1px solid #000;
    border-radius: 6px;
    cursor: pointer;
  }
  .drag-item.active {
    opacity: .5;
    animation: drag-animate .3s;
  }
  @keyframes drag-animate {
    0% {
      transform: translate3d(0, -10%, 0);
    }
    50% {
      transform: translate3d(0, 10%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
</style>
