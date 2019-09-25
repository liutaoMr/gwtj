<template>
  <div class="xdfxBox">
    <content>
      <Row>
        <Col span='12'>
          <nav>
            <Row>
              <Col span='9'>
                <span class="item_span">时间段</span>
                <DatePicker
                format="yyyy/MM/dd"
                type="daterange"
                split-panels
                placeholder="Select date"
                v-model='dataTotal'
                style="width: 150px"
                @on-change="dataTotal=$event"
                ></DatePicker>
              </Col>
              <Col span='9'>
                <span class="item_span">人员类型</span>
                <Select style='width: 150px;'>
                  <Option v-for='(item,index) in PersonnelTypeConfig' :key="index" :value='item'>{{item}}</Option>
                </Select>
              </Col>
              <Col span='6'>

              </Col>
            </Row>
          </nav>
          <div class="xdBox">
            <div ref="xdfxBxChart" :style="{width: '630px', height: '500px'}"></div>
          </div>
        </Col>
        <Col span='12'>
          <div class="xdfxTableBox">
           <Table border  height="200"  ></Table>
          </div>
        </Col>
      </Row>
    </content>
  </div>
</template>

<script>
export default {
  name: 'xdfx',
  data () {
    return {
      dataTotal: [],
      PersonnelTypeConfig: ['低保', '脑卒中', '普通人', '残疾人', '重精', '糖尿病', '糖尿病高危',
        '60-65岁', '贫困', '高血压', '冠心病', '高血压高危',
        '五保', '老年人', '计生特殊人群'],
      data: [
        { value: 20, name: '正常' },
        { value: 30, name: 'ST-T改变' },
        { value: 50, name: '陈旧性心肌梗塞' },
        { value: 80, name: '窦性心动过速' },
        { value: 40, name: '窦性心动过缓' },
        { value: 70, name: '房颤' },
        { value: 40, name: '房室传导阻滞' },
        { value: 30, name: '其他' }
      ],
      color: ['#06A9EDFF', '#FF6969FF', '#009944FF', '#ED5106FF', '#FFD800FF', '#FF296AFF', '#3888FFFF', '#87D500FF']
    }
  },
  methods: {
    drawLine () {
      const _this = this
      let myChart = this.$echarts.init(_this.$refs.xdfxBxChart)
      var option = {
        title: {
          text: '某站点用户访问来源',
          subtext: '单位：人',
          x: 'center',
          top: 30
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'horizontal',
          left: 'left',
          data: _this.data
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: _this.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
  nav{
    margin:10px 10px;
    padding-left: 10px;
  }
  .item_span{
    margin-right: 10px;
    font-weight: 700;
  }
  .xdBox{
    margin-left: 20px;
  }
  .xdfxTableBox{
    height: 683px;
    border-left: 5px solid #EEEEEE;
    margin-left: 10px;
    padding: 10px;
  }
</style>
