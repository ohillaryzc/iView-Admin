<template>
  <div class="order-statistics">
    <div class="search">
      <div class="search-top">
        <DatePicker type="daterange" placeholder="选择时间" style="width: 200px;margin-right: 16px;"></DatePicker>
        <RadioGroup v-model="period" type="button">
          <Radio label="1">昨天</Radio>
          <Radio label="2">最近7天</Radio>
          <Radio label="3">最近30天</Radio>
        </RadioGroup>
        <div style="float: right;">
          <Button icon="ios-download-outline" size="large" type="primary">导出数据</Button>
        </div>
      </div>
      <div class="search-select">
        <span>端口</span>
        <Select v-model="type" style="width: 200px;margin: 0 48px 0 8px;">
          <Option value="1">个人小程序</Option>
          <Option value="2">企业小程序</Option>
        </Select>
        <Button style="margin-right: 8px;">重置</Button>
        <Button type="primary">查询</Button>
      </div>
    </div>
    <Tabs>
      <TabPane label="用户数据">
        <h4 style="margin-top: 24px;">付费用户</h4>
        <div class="all-chart">
          <div class="chart-row">
            <div class="chart-col">
              <p class="chart-item-title">分布</p>
              <div id="chart-user1"></div>
            </div>
            <div class="chart-col">
              <p class="chart-item-title">分布</p>
              <div id="chart-user2"></div>
            </div>
          </div>
          <div class="chart-row">
            <div class="chart-col">
              <p class="chart-item-title">分布</p>
              <div id="chart-user3"></div>
            </div>
            <div class="chart-col">
              <p class="chart-item-title">分布</p>
              <div id="chart-user4"></div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="基础数据">
        <div class="top-select">
          <Select v-model="type" style="width: 200px;">
            <Option value="1">个人小程序</Option>
            <Option value="2">企业小程序</Option>
          </Select>
        </div>
        <div class="data-content">
          <h4>一级指标</h4>
          <div class="tab-box">
            <div class="data-tab" v-for="item in 4" :key="item">
              <div class="top flex-wrap flex-x-justify">
                <div class="data-left flex-wrap flex-direction-column flex-x-justify">
                  <p class="title">总租金</p>
                  <p class="amount">981万</p>
                </div>
                <div class="data-right">
                  <Tooltip content="提示信息">
                    <Icon type="ios-information-circle-outline" />
                  </Tooltip>
                  <p class="percentage-title">日环比</p>
                  <div class="percentage up flex-wrap flex-y-center">
                    <span>12.88%</span>
                    <div class="arrow-up"></div>
                  </div>
                </div>
              </div>
              <Divider />
              <div class="bottom flex-wrap flex-x-justify">
                <div class="data-left flex-wrap flex-direction-column flex-x-justify">
                  <p class="title">总租金</p>
                  <p class="amount">981万</p>
                </div>
                <div class="data-right">
                  <Tooltip content="提示信息">
                    <Icon type="ios-information-circle-outline" />
                  </Tooltip>
                  <p class="percentage-title">日环比</p>
                  <div class="percentage down flex-wrap flex-y-center">
                    <span>12.88%</span>
                    <div class="arrow-down"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-box">
            <div class="data-tab" v-for="item in 3" :key="item">
              <div class="top flex-wrap flex-x-justify">
                <div class="data-left flex-wrap flex-direction-column flex-x-justify">
                  <p class="title">总租金</p>
                  <p class="amount">981万</p>
                </div>
                <div class="data-right">
                  <Tooltip content="提示信息">
                    <Icon type="ios-information-circle-outline" />
                  </Tooltip>
                  <p class="percentage-title">日环比</p>
                  <div class="percentage up flex-wrap flex-y-center">
                    <span>12.88%</span>
                    <div class="arrow-up"></div>
                  </div>
                </div>
              </div>
              <Divider />
              <div class="bottom flex-wrap flex-x-justify">
                <div class="data-left flex-wrap flex-direction-column flex-x-justify">
                  <p class="title">总租金</p>
                  <p class="amount">981万</p>
                </div>
                <div class="data-right">
                  <Tooltip content="提示信息">
                    <Icon type="ios-information-circle-outline" />
                  </Tooltip>
                  <p class="percentage-title">日环比</p>
                  <div class="percentage down flex-wrap flex-y-center">
                    <span>12.88%</span>
                    <div class="arrow-down"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="data-tab" style="opacity: 0;"></div>
          </div>
          <h4 style="margin-top: 24px;">二级指标</h4>
          <div class="tab-box">
            <div class="pre-tab row-tow">
              <div class="top flex-wrap flex-x-justify">
                <div class="data-left flex-wrap flex-direction-column flex-x-justify">
                  <p class="title">总租金</p>
                  <p class="amount">981万</p>
                </div>
                <div class="data-right">
                  <Tooltip content="提示信息">
                    <Icon type="ios-information-circle-outline" />
                  </Tooltip>
                  <p class="percentage-title">日环比</p>
                  <div class="percentage up flex-wrap flex-y-center">
                    <span>12.88%</span>
                    <div class="arrow-up"></div>
                  </div>
                </div>
              </div>
              <div class="bottom flex-wrap flex-x-justify">
                <div class="data-left flex-wrap flex-direction-column flex-x-justify">
                  <p class="title">总租金</p>
                  <p class="amount">981万</p>
                </div>
                <div class="data-right">
                  <Tooltip content="提示信息">
                    <Icon type="ios-information-circle-outline" />
                  </Tooltip>
                  <p class="percentage-title">日环比</p>
                  <div class="percentage up flex-wrap flex-y-center">
                    <span>12.88%</span>
                    <div class="arrow-up"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pre-tab" v-for="item in 2" :key="item">
              <div class="chart-item-box">
                <div class="chart-top flex-wrap flex-x-justify">
                  <div class="flex-wrap flex-y-center">
                    <span style="color: rgba(0,0,0,0.65);margin-right: 4px;">订单比</span>
                    <Tooltip content="提示信息">
                      <Icon type="ios-information-circle-outline" />
                    </Tooltip>
                  </div>
                  <div class="flex-wrap flex-y-center">
                    <Icon type="md-repeat" color="#3BA0FF" size="16"/>
                    <span style="color: #3BA0FF;">切换为金额</span>
                  </div>
                </div>
                <div class="chart-content flex-wrap">
                  <div class="chart">
                    <div :id="`chart${item}`"></div>
                  </div>
                  <div class="chart-info">
                    <div class="chart-info-top">
                      <div class="info-title">新用户</div>
                      <div class="info-num flex-wrap flex-x-justify flex-y-end">
                        <span class="num">5642</span>
                        <span class="pre blue">77.83%</span>
                      </div>
                    </div>
                    <Divider/>
                    <div class="chart-info-bottom">
                      <div class="info-title">老用户</div>
                      <div class="info-num flex-wrap flex-x-justify flex-y-end">
                        <span class="num">1608</span>
                        <span class="pre green">22.17%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="销售数据">
        <div class="top-select">
          <Select v-model="type" style="width: 200px;">
            <Option value="1">个人小程序</Option>
            <Option value="2">企业小程序</Option>
          </Select>
        </div>
        <div class="rank flex-wrap">
          <div class="rank-item flex-con" style="margin-right: 16px;">
            <div class="rank-title flex-wrap flex-x-justify">
              <span>类目销量TOP10</span>
              <span>付款金额</span>
            </div>
            <div class="rank-item-row flex-wrap flex-x-justify flex-y-center" v-for="item in 10" :key="item">
              <div class="rank-row-left flex-wrap flex-y-center">
                <div :class="{index: true, before: item <= 3}">{{ item }}</div>
                <div class="name">华硕ROG</div>
              </div>
              <div class="money">1,999</div>
            </div>
          </div>
          <div class="rank-item flex-con">
            <div class="rank-title flex-wrap flex-x-justify">
              <span>类目销量TOP10</span>
              <span>付款金额</span>
            </div>
            <div class="rank-item-row flex-wrap flex-x-justify flex-y-center" v-for="item in 10" :key="item">
              <div class="rank-row-left flex-wrap flex-y-center">
                <div :class="{index: true, before: item <= 3}">{{ item }}</div>
                <div class="name">华硕ROG</div>
              </div>
              <div class="money">1,999</div>
            </div>
          </div>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { Chart } from '@antv/g2'
export default {
  name: 'order-statistics',
  data () {
    return {
      period: null,
      type: '1'
    }
  },
  methods: {
    setChartPie1 (tagId) {
      const data = [
        { type: '新用户', value: 77.83 },
        { type: '老用户', value: 22.17 }
      ]
      const chart = new Chart({
        container: tagId,
        // width: 200,
        autoFit: true,
        height: 170
      })
      chart.data(data)
      chart.legend(false)
      chart.tooltip({
        showMarkers: false
      })
      chart.facet('rect', {
        fields: ['type'],
        padding: 0,
        showTitle: false,
        eachView: (view, facet) => {
          const data = facet.data
          let color
          if (data[0].type === '新用户') {
            color = '#3BA0FF'
          } else {
            color = '#23D194'
          }
          data.push({ type: '其他', value: 100 - data[0].value })
          view.data(data)
          view.coordinate('theta', {
            radius: 0.9,
            innerRadius: 0.8
          })
          view
            .interval()
            .adjust('stack')
            .position('value')
            .color('type', [color, '#eceef1'])
            .style({
              opacity: 1
            })
          view.annotation().text({
            position: ['50%', '50%'],
            content: data[0].type,
            style: {
              fontSize: 12,
              fill: '#8c8c8c',
              fontWeight: 300,
              textBaseline: 'bottom',
              textAlign: 'center'
            },
            offsetY: 0
          })

          view.annotation().text({
            position: ['50%', '50%'],
            content: data[0].value,
            style: {
              fontSize: 14,
              fill: '#000',
              fontWeight: 500,
              textAlign: 'center'
            },
            offsetY: 8
          })

          view.interaction('element-active')
        }
      })
      chart.render()
    },
    setChartPie2 (tagId) {
      const data = [
        { item: '事例一', count: 40, percent: 0.4 },
        { item: '事例二', count: 21, percent: 0.21 },
        { item: '事例三', count: 17, percent: 0.17 },
        { item: '事例四', count: 13, percent: 0.13 },
        { item: '事例五', count: 9, percent: 0.09 }
      ]
      const chart = new Chart({
        container: tagId,
        autoFit: true,
        // width: 400,
        padding: [0, 300, 0, 0],
        height: 300
      })
      chart.data(data)
      chart.scale('percent', {
        formatter: (val) => {
          val = val * 100 + '%'
          return val
        }
      })
      chart.coordinate('theta', {
        radius: 0.7,
        innerRadius: 0.7
      })
      chart.tooltip({
        showTitle: false,
        showMarkers: false,
        itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      })
      chart.legend({
        position: 'right',
        offsetX: 0,
        itemHeight: 40,
        itemName: {
          spacing: 20,
          formatter: val => {
            return val + '\t\t      100%'
          }
        }
      })
      chart
        .annotation()
        .text({
          position: ['50%', '50%'],
          content: '总用户',
          style: {
            fontSize: 12,
            fill: '#8c8c8c',
            textAlign: 'center'
          },
          offsetY: -8
        })
        .text({
          position: ['50%', '50%'],
          content: '7000人',
          style: {
            fontSize: 16,
            fill: '#8c8c8c',
            textAlign: 'center'
          },
          offsetX: 0,
          offsetY: 8
        })
      chart
        .interval()
        .adjust('stack')
        .position('percent')
        .color('item')

      chart.interaction('element-active')

      chart.render()
      this.$nextTick(() => {
        chart.forceFit()
      })
    }
  },
  mounted () {
    this.setChartPie1('chart1')
    this.setChartPie1('chart2')
    this.setChartPie2('chart-user1')
    this.setChartPie2('chart-user2')
    this.setChartPie2('chart-user3')
    this.setChartPie2('chart-user4')
  },
  created () {
  }
}
</script>

<style scoped>
  .order-statistics {
    margin: 16px;
  }
  .search {
    padding: 24px 32px;
    background-color: #fff;
  }
  .search .search-top {
    overflow: hidden;
    margin-bottom: 24px;
  }

  .top-select {
    padding: 24px 32px;
    margin-bottom: 24px;
    background-color: #fff;
  }
  .tab-box {
    display: flex;
  }
  .tab-box .data-tab {
    flex: 1;
    height: 200px;
    min-width: 200px;
    margin: 16px 16px 0 0;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.03);
    border-radius: 2px;
    box-sizing: border-box;
  }
  .tab-box .data-tab:last-child {
    margin-right: 0;
  }
  .data-left .title {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.65);
  }
  .data-left .amount {
    font-size: 24px;
    font-weight: bold;
    color: rgba(0,0,0,0.85);
  }
  .data-right {
    text-align: right;
  }
  .data-right .percentage-title {
    line-height: 22px;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.25);
  }
  .data-right .percentage {
    font-size: 14px;
    font-weight: bold;
  }
  .percentage.up {
    color: #FF4A57;
  }
  .percentage.down {
    color: #23D194;
  }
  .data-right .arrow-up,
  .data-right .arrow-down {
    width: 8px;
    height: 7px;
    border-left: 4px solid rgba(255,255,255,0);
    border-right: 4px solid rgba(255,255,255,0);
    box-sizing: border-box;
    margin-left: 4px;
  }
  .data-right .arrow-up {
    border-bottom: 7px solid #FF4A57;
  }
  .data-right .arrow-down {
    border-top: 7px solid #23D194;
  }

  .tab-box .pre-tab {
    flex: 3;
    height: 216px;
    min-width: 200px;
    margin: 16px 16px 0 0;
    padding: 16px;
    background-color: #fff;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.03);
    border-radius: 2px;
    box-sizing: border-box;
  }
  .tab-box .pre-tab:last-child {
    margin-right: 0;
  }
  .tab-box .pre-tab.row-tow {
    padding: 0;
    flex: 2;
    background-color: rgba(255,255,255,0);
  }
  .row-tow .top,
  .row-tow .bottom {
    height: 100px;
    padding: 16px;
    box-sizing: border-box;
    background-color: #fff;
  }
  .row-tow .top {
    margin-bottom: 16px;
  }
  .chart-top {
    margin-bottom: 8px;
  }
  .chart-content .chart {
    flex-shrink: 1;
    flex-grow: 1;
    padding-right: 12px;
    box-sizing: border-box;
  }
  .chart-content .chart-info {
    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: 200px;
  }
  .chart-info .info-title {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0,0,0,0.25);
    line-height: 22px;
    margin-bottom: 16px;
  }
  .chart-info .info-num .num {
    font-size: 24px;
    font-weight: bold;
    color: rgba(0,0,0,0.85);
    line-height: 28px;
  }
  .chart-info .info-num .pre {
    font-weight: bold;
  }
  .info-num .pre.blue {
    color: #3BA0FF;
  }
  .info-num .pre.green {
    color: #23D194;
  }

  .rank .rank-item {
    padding: 24px 32px;
    background-color: #fff;
  }
  .rank-item .rank-title {
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(0,0,0,0.85);
    line-height: 24px;
  }
  .rank-item .rank-item-row {
    margin-bottom: 24px;
    font-size: 14px;
    color: rgba(0,0,0,0.65);
    line-height: 22px;
  }
  .rank-item .rank-item-row .money {
    font-weight: bold;
  }
  .rank-item .rank-item-row .index {
    width: 20px;
    height: 20px;
    margin-right: 24px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    font-weight: bold;
    color: rgba(0,0,0,0.65);
    background-color: #F0F2F5;
    border-radius: 50%;
  }
  .rank-item-row .index.before {
    color: #fff;
    background-color: #00C1B6;
  }

  .chart-row {
    margin-bottom: 42px;
    overflow: hidden;
  }
  .chart-row .chart-col {
    width: 50%;
    /*height: 448px;*/
    border-radius: 1px;
    box-sizing: border-box;
    float: left;
  }
  .chart-row .chart-col > div {
    background-color: #fff;
    height: 100%;
  }
  .chart-row .chart-col:first-child {
    padding-right: 8px;
  }
  .chart-row .chart-col:last-child {
    padding-left: 8px;
  }

  .chart-item-title {
    padding: 24px 32px;
    background-color: #fff;
  }
</style>
