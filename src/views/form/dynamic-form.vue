<template>
  <div class="form-box">
    <div class="form-content">
      <p class="form-title">九江职业技术学院</p>
      <p class="form-title">2019届学生顶岗实习离校申请表</p>
      <div class="form-inputs">
        <div class="form-row flex-wrap" v-for="(row, index) in table" :key="index">
          <template v-for="(col, i) in row">
            <div class="form-label form-col flex-box" :key="i" v-if="col.label">{{ col.label }}</div>
            <div class="form-item-box form-col flex-con" :key="i" v-if="col.type">
              <input type="text">
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dynamic-form',
  data () {
    return {
      table: [
        [
          { label: '名字' },
          { type: 'input' },
          { label: '班级' },
          { type: 'input' },
          { label: '学号' },
          { type: 'input' }
        ],
        [
          { label: '本人电话' },
          { type: 'input' },
          { label: 'QQ号' },
          { type: 'input' },
          { label: '邮箱' },
          { type: 'input' }
        ]
      ]
    }
  },
  methods: {},
  created () {
  }
}
</script>

<style scoped>
  .form-box {
    margin: 24px;
  }
  .form-content {
    width: 850px;
    height: 1000px;
    margin: 0 auto;
    padding: 24px 74px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .form-content .form-title {
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
  }
  .form-inputs {
    border: 2px solid #000;
  }
  .form-row {
    height: 50px;
    border-bottom: 1px solid #000;
  }
  .form-col {
    line-height: 38px;
    padding: 6px 10px;
    box-sizing: border-box;
    border-right: 1px solid #000;
  }
  .form-col.form-label {
    width: 100px;
    text-align: center;
  }
  .form-inputs input {
    width: 100%;
    height: 38px;
    border: none;
    outline: none;
    padding: 0 6px;
  }
</style>
