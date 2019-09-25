<template>
  <div class="mkSet">
    <div class="mkNav">
      <Row style="margin-top:40px" class="dataManageBox">
        <Col span="22">
          <div class="borderNav"></div>
          <div class="choseModule">选择模块</div>
        </Col>
        <Col span="2">
          <Button type="primary">返回</Button>
        </Col>
      </Row>
    </div>
    <div class="content">
      <CheckboxGroup v-model="mkSet">
        <div  v-for="(item,index) in mkSetConfig" :key=index @mouseenter="hoverMkSet(index)" :class="isActive==index?'box':'boxN'">
          <div class="li">
            <i :class="item.icon"></i>
          </div>
          <Checkbox :label="item.text" size="large" style="margin-top: 16px;"></Checkbox>
        </div>
      </CheckboxGroup>
    </div>
    <div class="mkSave">
      <Button type='success'>保存设置</Button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'mkSet',
  data () {
    return {
      isActive: 30,
      mkSetConfig: [
        { icon: 'iconfont icon-shenfenzheng', text: '体检登记', other: '', show: false },
        { icon: 'iconfont icon-tijian', text: '身高体重', other: '', show: false },
        { icon: 'iconfont icon-hamnatodynamometer', text: '血压', other: '', show: false },
        { icon: 'iconfont icon-yisheng', text: '问诊', other: '', show: false },
        { icon: 'iconfont icon-zhongyi', text: '中医体质', other: '', show: false },
        { icon: 'iconfont icon-kouqiangke', text: '口腔', other: '', show: false },
        { icon: 'iconfont icon-shilijiancha', text: '视力', other: '', show: false },
        { icon: 'iconfont icon-Bchao', text: 'B超', other: '', show: false },
        { icon: 'iconfont icon-xindiantu', text: '心电图', other: '', show: false },
        { icon: 'iconfont icon-caixietongji', text: '采血', other: '', show: false },
        { icon: 'iconfont icon-niaojiandengji', text: '尿检', other: '', show: false },
        { icon: 'iconfont icon-baobiao', text: '信息表', other: '', show: false },
        { icon: 'iconfont icon-gerenbingshi', text: '既往史', other: '', show: false },
        { icon: 'iconfont icon-xietang', text: '血糖', other: '', show: false },
        { icon: 'iconfont icon-xiexing', text: '血型', other: '', show: false },
        { icon: 'iconfont icon-hamnatodynamometer', text: '血压复测', other: '', show: false },
        { icon: 'iconfont icon-xindiantu', text: '心电审核', other: '', show: false },
        { icon: 'iconfont icon-xray', text: 'X光', other: '', show: false },
        { icon: 'iconfont icon-feijiehe-mian', text: '结核筛查', other: '', show: false },
        { icon: 'iconfont icon-yingyang', text: '家庭膳食', other: '', show: false },
        { icon: 'iconfont ', text: 'B超审核', other: '', show: false }
      ],
      mkSet: ['身高体重', '血压']

    }
  },
  methods: {
    hoverMkSet (index) {
      this.isActive = index
    }

  },
  mounted () {
  }

}
</script>

<style scoped>
  .mkSet{
    width: 100%;
    height: 703px;
    background: white;
  }
  .borderNav{
    float: left;
    margin: 8px 16px 0 40px;
    width:6px;
    height:16px;
    border-radius:3px;
    background: #335FFF;
  }
  .choseModule{
    float: left;
    font-size:20px;
    font-weight: 400;
  }
  .content{
    width: 100%;
    height: 367px;
    padding-left: 30px;
  }
  .content .box{
    text-align: center;
    margin-top: 40px;
    float: left;
    margin-left: 56px;
    width:85px;
    height:72px;
    background:rgba(255,255,255,1);
    box-shadow:3px 3px 16px 0px rgba(187,187,187,0.3);
    border-radius:20px;
  }
  .content .boxN{
    text-align: center;
    margin-top: 40px;
    float: left;
    margin-left: 56px;
    width:85px;
    height:72px;
    background:rgba(238,239,251,1);
    border-radius:20px;
  }
  .content i{
    color: #3292DE;
    font-size: 45px;
  }
  .content p{
    font-size:16px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .mkSave{
    width: 100%;
    height: 100px;
  }
  .mkSave button{
    margin-top: 40px;
    margin-left: 900px;
    width:106px;
    height:30px;
  }
</style>
