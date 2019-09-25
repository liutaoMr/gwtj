<template>
  <div class="zlBoxfx">
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
          <div class="zlBox">
            <div ref="zlfxBxChart" :style="{width: '630px', height: '500px'}"></div>
          </div>
        </Col>
        <Col span='12'>
          <div class="zlfxTableBox">
           <Table border  height="200"  ></Table>
          </div>
        </Col>
      </Row>
    </content>

  </div>
</template>

<script>
export default {
  name: 'zlfx',
  data () {
    return {
      PersonnelTypeConfig: ['低保', '脑卒中', '普通人', '残疾人', '重精', '糖尿病', '糖尿病高危',
        '60-65岁', '贫困', '高血压', '冠心病', '高血压高危',
        '五保', '老年人', '计生特殊人群'],
      dataTotal: [],
      zlData: [
        { value: 20, name: '可自理' },
        { value: 30, name: '轻度依赖' },
        { value: 50, name: '中度依赖' },
        { value: 80, name: '不能自理' }

      ],
      color: ['#06A9EDFF', '#FF6969FF', '#009944FF', '#ED5106FF']

    }
  },
  methods: {
    drawLine () {
      const _this = this
      let myChart = this.$echarts.init(_this.$refs.zlfxBxChart)
      var option = {
        title: {
          text: '老年人生活自理能力分析图',
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
          data: _this.zlData
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: _this.zlData,
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
  .zlBox{
    margin-top: 20px;
  }
  .zlfxTableBox{
    height: 683px;
    border-left: 5px solid #EEEEEE;
    margin-left: 10px;
    padding: 10px;
  }
</style>
