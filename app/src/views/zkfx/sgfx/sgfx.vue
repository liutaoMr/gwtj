<template>
  <div class="sgfxBox">
    <Row>
      <Col span="12">
        <div>
          <div class="timeChose">
            <span>时间段：</span>
            <DatePicker
            format="yyyy/MM/dd"
            type="daterange"
            split-panels
            placeholder="Select date"
            v-model='dataTotal'
            style="width: 200px"
            @on-change="dataTotal=$event"
            ></DatePicker>
          </div>
          <div class="introu">
            <ul>
            	<li :key='index' v-for="(item,index) in liConfog">
                <span :class="item.sty"></span>
                <span>{{item.title}}</span>
              </li>
            </ul>
            <p>单位：人</p>
          </div>
          <div>
            <div ref="heightWeightChart" :style="{width: '600px', height: '340px'}"></div>
          </div>
        </div>
      </Col>
      <Col span="12" >
        <div class="sgTableBox">
         <Table border  height="200"  ></Table>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>

export default {
  name: 'sgfx',
  data () {
    return {
      dataTotal:[],
      liConfog: [
        { title: '120cm以下', sty: 'col1' },
        { title: '120cm-140cm', sty: 'col2' },
        { title: '140cm-180cm', sty: 'col3' },
        { title: '180cm以上', sty: 'col4' },
        { title: '190cm以上', sty: 'col5' }
      ]

    }
  },
  methods: {
  // 基于准备好的dom，初始化echarts实例
    drawLine () {
      const _this = this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(_this.$refs.heightWeightChart)
      // 绘制图表
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['120以下', '120-140', '140-180', '180以上', '190以上'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '人数',
            type: 'bar',
            barWidth: '60%',
            itemStyle: {
              normal: {
                // 随机显示
                // color:function(d){return “#”+Math.floor(Math.random()*(256*256*256-1)).toString(16);}
                // 定制显示
                color: function (params) {
                  var colorList = ['#FF5D5E', '#009ADC', '#009B4C', '#FF4200', '#FFD600']
                  return colorList[params.dataIndex]
                }
                // 如果是两色交替 可以判断params.dataIndex的奇偶去设置颜色
              }
            },
            data: [10, 52, 200, 334, 390]
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawLine()
  },
  computed: {

  }

}
</script>

<style scoped>
  .sgTableBox{
    height: 683px;
    border-left: 5px solid #EEEEEE;
    margin-left: 10px;
    padding: 10px;
  }
  .timeChose{
    margin: 35px 0 0 20px;
  }
  .timeChose span{
    font-weight: 700;
    font-size: 14px;
  }
  .introu ul li{
    margin-top: 20px;
    display: inline-block;
  }
  .introu ul li span:nth-child(1){
    display: inline-block;
    width:20px;
    height:12px;
    border-radius:2px;
    margin:0 5px;
  }
  .col1{
     background:rgba(255,105,105,1);
  }
  .col2{
     background:#06A9EDFF;
  }
  .col3{
     background:#009944FF;
  }
  .col4{
     background:#ED5106FF;
  }
  .col5{
     background:#FFD800FF;
  }
  .introu{
    padding-left:20px;
  }
</style>
