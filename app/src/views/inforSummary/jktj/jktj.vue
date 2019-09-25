<template>
  <div class="jktjPanel">
    <nav>
      <p>国家基本公共卫生服务项目健康体检表</p>
      <Row>
        <Col span='12' style='text-align: center;font-weight: bold;font-size: 18px;'>
         <span>姓名：</span><span>刘**</span>
        </Col>
        <Col span='12' style='text-align: center; font-weight: bold;font-size: 18px;'>
          <span>编号：</span><span>001</span>
        </Col>
      </Row>
    </nav>
    <table class="jktjTable">
      <thead>
        <tr>
          <td style="100%;height:25px" colspan="10">
            <span style="text-align: center; width: 150px;">体检日期：</span>
            <span style="text-align: left;width: 350px;">1996年10月28日</span>
            <span style="text-align: right;width: 300px;">责任医生</span>
            <span style="text-align: center;width: 230px;" >杨永信</span>
         </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width="10%" colspan="1">内容</td>
          <td width="80%" colspan="8">检查项目</td>
          <td width="10%" colspan="1">医生签名</td>
        </tr>
        <tr>
          <td width="10%" colspan="1">症状</td>
          <td width="80%" colspan="8">
            <div class="table_item">
              <CheckboxGroup v-model="zz">
                <span v-for="(item,index) in symptomConfig" :key='index' >
                  <template v-if="index==0">
                    <Checkbox :label="item" size=large @click.native = "symOk()"></Checkbox>
                  </template>
                  <template v-else>
                    <Checkbox :label="item" size=large @click.native = "symWrong()"></Checkbox>
                  </template>
                </span>
              </CheckboxGroup>
              <span>其他：</span>
              <Input style="width: 150px;" v-model='zzqt' @change.native="symOther()"></Input>
            </div>
          </td>
          <td width="10%" colspan="1">
            xxx
          </td>
        </tr>
        <tr>
          <td width="10%" colspan="1" rowspan="9">一般情况</td>
          <td colspan="1">
              体温
          </td>
          <td colspan="3">
            <div>
              <span>35</span>
              <span>°C</span>
            </div>
          </td>
          <td colspan="1">
            脉率
          </td >
          <td colspan="3">
            <div>
              <span style="margin-right: 8px;">35</span>
              <span>次/分钟</span>
            </div>
          </td>
          <td rowspan="9">
            杨某某
          </td>
        </tr>
        <tr>
          <td rowspan="2">呼吸频率</td>
          <td colspan="3" rowspan="2">次/分钟</td>
          <td rowspan="2">血压</td>
          <td colspan="2">左侧</td>
          <td>/mmHG</td>
        </tr>
        <tr>
          <td colspan="2">左侧</td>
          <td>/mmHG</td>
        </tr>
        <tr>
          <td>身高</td>
          <td colspan="3">cm</td>
          <td>体重</td>
          <td colspan="3">Kg</td>
        </tr>
        <tr>
          <td>腰围</td>
          <td colspan="3">cm</td>
          <td>体质指数（BMI）</td>
          <td colspan="3">Kg/㎡</td>
        </tr>
        <tr>
          <td colspan="1">老年人健康状态自我评估*</td>
          <td colspan="7">
             <RadioGroup size="large">
              <Radio label="1满意"></Radio>
              <Radio label="2基本满意"></Radio>
              <Radio label="3说不清楚"></Radio>
              <Radio label="4不太满意"></Radio>
              <Radio label="5不满意"></Radio>
             </RadioGroup>
          </td>
        </tr>
        <tr>
          <td colspan="1">老年人生活自理能力自我评估*</td>
          <td colspan="7">
             <RadioGroup size="large">
              <Radio label="1可自理(0~3分)"></Radio>
              <Radio label="2轻度依赖（4~8分"></Radio>
              <Radio label="3中度依赖（9~18分)"></Radio>
              <Radio label="4不能自理（≥19分）"></Radio>
             </RadioGroup>
          </td>
        </tr>
        <tr>
          <td colspan="1">老年人认知能力*</td>
          <td colspan="7" >
            <span>
              <RadioGroup size="large">
               <Radio label="1粗筛阴性"></Radio>
               <Radio label="2粗筛阳性"></Radio>
              </RadioGroup>
            </span>
            <span>简易智力状态检查，总分 </span><span>20</span>
          </td>
        </tr>
        <tr>
          <td colspan="1">老年人情感状态*</td>
          <td colspan="7" >
            <span>
              <RadioGroup size="large">
               <Radio label="1粗筛阴性"></Radio>
               <Radio label="2粗筛阳性"></Radio>
              </RadioGroup>
            </span>
            <span>老年人抑郁评分检查，总分 </span><span>20</span>
          </td>
        </tr>
        <tr>
          <td rowspan="13">生活方式</td>
          <td rowspan="3">体育锻炼</td>
          <td>锻炼频率</td>
          <td colspan="6">
            <RadioGroup size="large">
             <Radio label="每天"></Radio>
             <Radio label="每周一次"></Radio>
             <Radio label="偶尔"></Radio>
             <Radio label="不锻炼"></Radio>
            </RadioGroup>
          </td>
          <td rowspan="13">李**</td>
        </tr>
        <tr>
          <td colspan="1">每次锻炼时间</td>
          <td colspan="2">/分钟</td>
          <td colspan="2">坚持锻炼时间</td>
          <td colspan="2">/年</td>
        </tr>
        <tr>
          <td colspan="1">锻炼方式</td>
          <td colspan="6">跑步,游泳,</td>
        </tr>
        <tr>
          <td colspan="1">饮食习惯</td>
          <td colspan="7">
            <RadioGroup size="large">
             <Radio label="荤素均衡"></Radio>
             <Radio label="荤食为主"></Radio>
             <Radio label="素食为主"></Radio>
            </RadioGroup>
            <CheckboxGroup >
              <Checkbox size = large>嗜盐</Checkbox>
              <Checkbox size = large>嗜油</Checkbox>
              <Checkbox size = large>嗜糖</Checkbox>
            </CheckboxGroup>
          </td>
        </tr>
        <td rowspan="3">吸烟情况</td>
        <td>吸烟状况</td>
        <td colspan="6">
          <RadioGroup size="large">
           <Radio label="从不吸烟"></Radio>
           <Radio label="已戒烟"></Radio>
           <Radio label="吸烟"></Radio>
          </RadioGroup>
        </td>
        <tr>
          <td>日吸烟量</td>
          <td colspan="6">
            <div>
              <span>平均</span>1<span>支</span>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="1">开始吸烟年龄</td>
          <td colspan="3">岁</td>
          <td colspan="1">戒烟年龄</td>
          <td colspan="3">岁</td>
        </tr>
      </tbody>
    </table>

  </div>

</template>

<script>
export default {
  name: 'jktj',
  data () {
    return {
      symptomConfig: ['无症状', '头疼', '头晕', '心悸', '胸闷', '慢性咳嗽', '胸疼 咳痰', '呼吸困难', '多饮', '多尿', '体重下降', '乏力', '关节肿痛', '视力模糊', '手脚麻木', '尿急', '尿痛', '便秘', '腹泻', '恶心呕吐', '眼花', '耳鸣', '乳房肿痛'],
      zz: [],
      zzqt: ''

    }
  },
  methods: {
    symOk () {
      this.zz = ['无症状']
      this.other = ''
    },
    symWrong () {
      const _this = this
      if (_this.zz.includes('无症状')) {
        _this.zz.forEach((item, index) => {
          if (item == '无症状') {
            _this.zz.splice(index, 1)
          }
        })
      }
    },
    symOther () {
      const _this = this
      if (_this.zzqt !== '') {
        _this.zz.forEach((item, index) => {
          if (item == '无症状') {
            _this.zz.splice(index, 1)
          }
        })
        _this.zz.push(_this.zzqt)
      }
    }
  },
  created () {
    // 在这里通过父组件传来的标识来请求数据。
    console.log('公卫体检加载数据')
  }
}
</script>

<style scoped>
  /* 公卫体检Css */
  table,tr,td{
   font-family: KaiTi;
   font-size: 14px;
   font-weight: 700;
   border:1px solid #ccc;
   border-collapse:collapse;
  }
  tr,td{
   height: 26px;
  }
  table thead span{
    display: inline-block;
    width: 250px;
  }
  table tbody{
    text-align: center;
  }
  nav p{
    text-align: center;
    font-family: KaiTi;
    font-size: 26px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .jktjTable{
    margin-top: 5px;
    width: 1045px;
    height: 100px;
    margin-left: 7px;
  }
  .table_item{
    text-align: left;
    padding: 10px;
  }

</style>
