<template>
  <div class="yyfxBox">
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
                <div class="tabBox" >
                  <div class="tabl" :class="{tabActive:isShow == 0}" @click="ChangeShow(0)">
                    <i class=" iconfont icon-zhuzhuangtu"></i>
                  </div>
                  <div class="tabr" :class="{tabActive:isShow == 1}" @click="ChangeShow(1)">
                    <i class=" iconfont icon-statistics"></i>
                  </div>
                </div>
              </Col>
            </Row>
          </nav>
          <div class="zbBox">
            <div class="zhuxing" v-show="isShow == 0">
              <div ref="yyfxZxChart" :style="{width: '670px', height: '340px'}"></div>
            </div>
            <div class="bingxing" v-show="isShow == 1">
              <p>用药人数占比</p>
              <p>单位：人</p>
              <div class="circleBOx">
                <div class="circleL">
                  <i-circle :percent="80">
                    <span class="demo-Circle-inner" style="font-size:24px">80%</span>
                  </i-circle>
                  <p>用药人数/全部人数</p>
                </div>
                <div class="circleR">
                  <i-circle :percent="75">
                    <span class="demo-Circle-inner" style="font-size:24px">75%</span>
                  </i-circle>
                  <p>重点用药人数/重点人数</p>
                </div>

              </div>

            </div>
          </div>
        </Col>
        <Col span='12'>
          <div class="yyfxTableBox">
           <Table border  height="200"  ></Table>
          </div>
        </Col>
      </Row>
    </content>

  </div>
</template>

<script>
export default {
  name: 'yyfx',
  data () {
    return {
      isShow: 0,
      dataTotal: [],
      percent: 20,
      color: '#5cb85c',
      PersonnelTypeConfig: ['低保', '脑卒中', '普通人', '残疾人', '重精', '糖尿病', '糖尿病高危',
        '60-65岁', '贫困', '高血压', '冠心病', '高血压高危',
        '五保', '老年人', '计生特殊人群'],
      zxData:[2, 4, 7, 23, 25, 76, 135, 162, 32, 20, 6, 3, 13, 24, 16]
    }
  },
  methods: {
    ChangeShow (n) {
      this.isShow = n
    },
    drawLineZx () {
      const _this = this
      let myChart = this.$echarts.init(_this.$refs.yyfxZxChart)
      var option = {
        color: ['#3398DB'],
        title: {
          left: '200px',
          text: '重点人群用药人数分析图',
          subtext: '单位：人'
        },
        tooltip: {
          trigger: 'axis'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['计生特殊', '五保', 'HTN高危', 'IDF高危', '普通人', '老年人', '60-65岁', '贫困', '低保', 'HTN', 'IDF', '重精', '冠心病', '脑卒中', '残疾人'],
            axisLabel: {
              interval: 0,
              rotate: 45
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
            type: 'bar',
            data: _this.zxData,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          }
        ]
      }
      myChart.setOption(option)
    }


  },
  mounted () {
    this.drawLineZx()
  },
  computed: {

  }

}
</script>

<style scoped>
  .yyfxTableBox{
    height: 683px;
    border-left: 5px solid #EEEEEE;
    margin-left: 10px;
    padding: 10px;
  }
  .item_span{
    margin-right: 10px;
    font-weight: 700;
  }
  nav{
    margin:10px 10px;
    padding-left: 10px;
  }
  .tabActive{
    width:33px;
    height:29px;
    background:rgba(6,169,237,1)!important;
    border-radius:4px 0px 0px 4px;
    display: inline-block;
  }
  .tabActive i{
    color: white;
  }
  .tabBox{
    color: #999999FF;
    margin-left: 60px;
  }
  .zbBox{
    width: 669px;
    height: 340px;
  }
  .tabBox i{
    line-height: 29px;
  }
  .tabl{
     width:33px;
     height:29px;
     text-align: center;
     border-radius:4px 0px 0px 4px;
     display: inline-block;
     background: #EEEEEEFF;
   }
 .tabr{
    width:33px;
    height:29px;
    text-align: center;
    border-radius:0px 4px 4px 0px;
    display: inline-block;
    background: #EEEEEEFF;
  }
  .bingxing{
    margin-top: 30px;
  }
  .bingxing{
    padding-left:20px ;
  }
  .bingxing p:nth-child(1){
    font-size:16px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(51,51,51,1);
    text-align: center;
  }
  .bingxing p:nth-child(2){
    text-align: center;
   font-size:14px;
   font-family:SimHei;
   font-weight:400;
   color:rgba(153,153,153,1);
  }
  .circleL{
    width: 198px;
    height: 198px;
    display: inline-block;
    margin-top: 35px;
    margin-left: 40px;
  }
  .circleR{
    width: 198px;
    height: 198px;
    display: inline-block;
    margin-top: 35px;
    margin-left: 160px;
  }
  .ivu-chart-circle{
    margin-left: 40px!important;
  }
</style>
