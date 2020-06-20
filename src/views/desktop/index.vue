<template>
  <div class="container">
    <div class="phone-left"></div>
    <div class="content-right">
      <div class="content-item">
        <p class="title">数据主体</p>
        <RadioGroup v-model="type" type="button">
          <Radio label="1">页面数据</Radio>
          <Radio label="2">坑位数据</Radio>
        </RadioGroup>
      </div>
      <div class="content-item">
        <p class="title">概况统计</p>
        <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="选择时间" style="width: 200px;margin-right: 16px;"></DatePicker>
        <RadioGroup v-model="period" type="button">
          <Radio label="1">昨天</Radio>
          <Radio label="2">最近7天</Radio>
          <Radio label="3">最近30天</Radio>
        </RadioGroup>
      </div>
      <div class="content-item">
        <div
          v-for="(item, index) in 4"
          :key="index"
          :class="{'data-tab-item': true, 'active': activeDataTab === index}"
          @click="clickDataTab(index)">
          <div class="top-border"></div>
          <div class="data-box">
            <div class="data-item">
              <div class="num-box">
                <p class="num-title">点击UV</p>
                <p class="number">2,235</p>
              </div>
              <div class="percentage">
                <Tooltip>
                  <Icon type="ios-information-circle-outline" size="14"/>
                  <div slot="content">单位时间内，订单数与访问UV的比值。</div>
                </Tooltip>
                <div class="up-down">
                  <p class="per-title">日环比</p>
                  <p class="per-num">23.01%<Icon type="md-arrow-dropup" size="10" color="#FF4A57"/></p>
                </div>
              </div>
            </div>
            <div class="data-item">
              <div class="num-box">
                <p class="num-title">点击PV</p>
                <p class="number">2,235</p>
              </div>
              <div class="percentage">
                <Tooltip>
                  <Icon type="ios-information-circle-outline" size="14"/>
                  <div slot="content">单位时间内，订单数与访问UV的比值。</div>
                </Tooltip>
                <div class="up-down">
                  <p class="per-title">日环比</p>
                  <p class="per-num" style="color:#23D194;">23.01%<Icon type="md-arrow-dropdown" size="10" color="#23D194"/></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div id="chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
const data = [
  { date: 1489593600000, pv: 17, time: 12351000 },
  { date: 1489680000000, pv: 10, time: 18000 },
  { date: 1489766400000, pv: 3, time: 0 },
  { date: 1489852800000, pv: 3, time: 0 },
  { date: 1489939200000, pv: 18, time: 21157000 },
  { date: 1490025600000, pv: 32, time: 3543000 },
  { date: 1490112000000, pv: 25, time: 10000 },
  { date: 1490198400000, pv: 23, time: 24000 },
  { date: 1490284800000, pv: 7, time: 0 }
]
export default {
  name: 'index',
  data () {
    return {
      type: '1',
      period: '1',
      options2: {
        shortcuts: [
          {
            text: '近一周',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              return [start, end]
            }
          },
          {
            text: '近一月',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              return [start, end]
            }
          },
          {
            text: '近三月',
            value () {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              return [start, end]
            }
          }
        ]
      },
      activeDataTab: 0,
      chart: null
    }
  },
  methods: {
    clickDataTab (index) {
      this.activeDataTab = index
    }
  },
  mounted () {
    const chart = new Chart({
      container: 'chart',
      // autoFit: true,
      width: 500,
      height: 400
    })
    chart.data(data)
    chart.scale({
      date: {
        alias: '日期',
        type: 'time'
      },
      pv: {
        alias: '进入次数',
        min: 0,
        sync: true, // 将 pv 字段数值同 time 字段数值进行同步
        nice: true
      },
      time: {
        alias: '平均时长',
        formatter: (value) => {
          return value
        },
        sync: true, // 将 pv 字段数值同 time 字段数值进行同步
        nice: true
      },
      count: {
        alias: '次数'
      }
    })
    chart.axis('time', {
      grid: null,
      title: {}
    })
    chart.axis('pv', {
      grid: null,
      title: {}
    })
    chart.legend({
      custom: true,
      items: [
        { id: 'time', name: 'time', marker: 'square', fill: '#9AD681' },
        { id: 'pv', name: 'pv', marker: 'square', fill: '#4FAAEB' }
      ]
    })

    chart.tooltip({
      showCrosshairs: true,
      shared: true
    })

    chart
      .line()
      .position('date*pv')
      .color('#4FAAEB')
    chart
      .line()
      .position('date*time')
      .color('#9AD681')
      .shape('dash')
    chart.render()
    // this.$nextTick(() => {
    //
    // })
    this.chart = chart
  },
  created () {
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    margin: 16px;
    background-color: #fff;
  }
  .container .phone-left {
    width: 380px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .container .content-right {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .content-item {
    margin-bottom: 26px;
    overflow: hidden;
  }
  .content-item .title {
    font-size:16px;
    font-family:PingFangSC-Medium,PingFang SC;
    font-weight:500;
    color:rgba(0,0,0,0.85);
    line-height:40px;
  }
  .data-tab-item {
    float: left;
    width: 224px;
    margin-right: 16px;
  }
  .data-tab-item:hover .top-border {
    background: rgba(0,193,182,0.25);
  }
  .data-tab-item .data-box {
    padding: 16px;
    background-color: #F9FFFF;
    border-radius: 0 0 2px 2px;
    border: 2px solid rgba(255,255,255,0);
  }
  .data-tab-item.active .data-box {
    border: 2px solid #00C1B6;
  }
  .data-tab-item .top-border {
    height: 4px;
    background: rgba(0,0,0,0.06);
    border-radius: 2px 2px 0 0;
  }
  .data-tab-item.active .top-border {
    background-color: #00C1B6;
  }
  .data-box .data-item {
    display: flex;
    justify-content: space-between;
  }
  .data-item:nth-child(2) {
    margin-top: 32px;
  }
  .data-item .num-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .num-box .num-title {
    font-size: 14px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: rgba(0,0,0,0.65);
    line-height: 22px;
  }
  .num-box .number {
    font-size: 24px;
    font-family: DINAlternate-Bold,DINAlternate;
    font-weight: bold;
    color: rgba(0,0,0,0.85);
    line-height: 28px;
  }
  .data-item .percentage {
    text-align: right;
  }
  .percentage .up-down {
    margin-top: 10px;
  }
  .percentage .per-title {
    font-size: 14px;
    font-family: PingFangSC-Regular,PingFang SC;
    font-weight: 400;
    color: rgba(0,0,0,0.25);
    line-height: 22px;
  }
  .percentage .per-num {
    font-size: 12px;
    font-family: DINAlternate-Bold,DINAlternate;
    font-weight: bold;
    color: rgba(255,74,87,1);
    line-height: 16px;
  }
</style>
