<template>
  <div class="zytzBox">
    <Card class="Card">
      <Button @click="save()">保存</Button>
     <div class="content">
       <div style="margin-bottom: 10px;font-size: 18px;font-weight: 700">
       </div>
      </div>
      <div class="coentent_data">
        <table>
          <tr>
            <th style="width: 37.5%;">请根据近一年的体检和感觉，回答以下问题</th>
            <th style="width: 12.5%;">没有(根本不/从来没有)</th>
            <th style="width: 12.5%;">很少(有一点/偶尔)</th>
            <th style="width: 12.5%;">有时(有些/少数时间)</th>
            <th style="width: 12.5%;">经常(相当/多数时间)</th>
            <th style="width: 12.5%;">总是(非常/每天)</th>
          </tr>
          <tr>
            <td class="table_title">（1）您精力充沛吗？(指精神头足，乐于做事)</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q1df' ><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（2）您容易疲乏呜？（指体力如何，是否稍微活动一下或做一点家务就感觉到累）（气虚质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q2df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（3）您容易气短、呼吸短促、接不上气吗？（气虚质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q3df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（4）您说话声音低弱无力吗？ （指说话没力气）（气虚质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q4df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title"> （5）您感到闷闷不乐、情绪低沉吗？（指心情不愉快，情绪低落）（气郁质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q5df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title"> （6）您容易精神紧张，焦虑不安吗？（指遇事是否心情紧张）（气郁质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q6df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（7）您因生活状态改变而感到孤独、失落吗？（气郁质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q7df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（8）您容易感到害怕或受到惊吓吗？（气郁质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q8df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（9）您感到身体超重不轻松了吗（感觉身体沉重）BMI指数=体重（kg）/身高（m）？（痰湿质）'</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q9df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（10）您眼睛干涩呜？（阴虚质）'</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q10df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（11）您手脚发凉吗？（不包含因周围温度低或穿的少导致的手脚发凉）（阳虚质）'</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q11df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（12）您胃部，背部腰膝部怕凉吗?（指上腹部、背部、腰部或膝关节等，有一处或多处怕冷）（阳虚质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q12df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（13）您比一般人不耐受寒冷吗？（指比别人容易害怕冬天或是夏天空调、电扇等）（阳虚质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q13df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（14）您容易感冒吗？（指每年感冒的次数（气虚质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q14df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（15）您没有感胃时也会鼻塞、流鼻涕吗？（特禀质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q15df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（16）您有口黏，口腻或睡觉打鼾吗？（痰湿质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q16df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（17）您容易过敏（对药物、食物、气味、花粉或在季节交替、气候变化时）吗？（特禀质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q17df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（18）您的皮肤容易起荨麻疹吗 ? （包括风团、风疹块、风疙瘩）（特禀质）'</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q18df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（19）您的皮肤在不知不觉中会出现青紫淤斑、皮下出血吗？（指皮肤在没有外伤的情况下出现见青一块紫一块的情况）（血瘀质）'</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q19df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（20）您的皮肤一抓就会红，并出现抓痕吗 ? （指被指甲或钝物划过后皮肤的反应）（特禀质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q20df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（21）您皮肤或口唇干吗？（阴虚质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q21df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（22）您有肤体麻木或固定部位疼痛的感觉吗? （血淤质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q22df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（23）您面部鼻部有油腻或油亮发光吗（指脸上或鼻子上）?（湿热质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q23df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（24）您面目或目框晦暗，或出现褐色斑块／斑点吗？（血淤质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q24df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（25）您有皮肤湿疹、疮疖吗？（湿热质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q25df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（26）您感到口干舌燥、总想喝水吗？（阴虚质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q26df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（27）您感到口苦、嘴里有异味吗（指口苦或口臭）？（湿热质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q27df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（28）您腹部肿大吗（指腹部脂肪肥厚）？（痰湿质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q28df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（29）您吃（喝）凉的东西会感到不舒服或者怕吃（喝）凉的东西呜？（指不喜欢吃凉的食物，或吃凉的食物后会不舒服）？（阳虚质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q29df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（30）您有大便黏滞不爽，解不尽的感觉吗（大便容易粘结在马桶坑壁上）？（湿热质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q30df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（31）您容易大便干燥吗？（阴虚质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q31df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（32）您舌苔厚腻或舌苔厚厚的感觉吗（如果自己感觉不清楚可由调察员观察后填写）？（痰湿质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q32df'><span>{{item}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">（33）您舌下静脉淤紫或增粗吗（可由调查员观察后填写）？（血淤质）</td>
            <td v-for="(item,index) in 5" :key=index>
              <div class="table_item">
                <input type="radio" :value="item" v-model='df.q33df'><span>{{item}}</span>
              </div>
            </td>
          </tr>

        </table>

      </div>
    </Card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'zytz',
  data () {
    return {
      df: {
        q1df: '',
        q2df: '',
        q3df: '',
        q4df: '',
        q5df: '',
        q6df: '',
        q7df: '',
        q8df: '',
        q9df: '',
        q10df: '',
        q11df: '',
        q12df: '',
        q13df: '',
        q14df: '',
        q15df: '',
        q16df: '',
        q17df: '',
        q18df: '',
        q19df: '',
        q20df: '',
        q21df: '',
        q22df: '',
        q23df: '',
        q24df: '',
        q25df: '',
        q26df: '',
        q27df: '',
        q28df: '',
        q29df: '',
        q30df: '',
        q31df: '',
        q32df: '',
        q33df: ''
      },
      up_time: '',
      // 体质得分 结论 指导 气虚质
      qxzdf: '',
      qxzjl: '',
      qxzzd: '',
      // 阴虚质
      yxzdf: '',
      yxzjl: '',
      yxzzd: '',
      // 阳虚质
      yinxzdf: '',
      yinxzjl: '',
      yinxzzd: '',
      // 痰湿质
      txzdf: '',
      txzjl: '',
      txzzd: '',
      // 湿热质
      srzdf: '',
      srzjl: '',
      srzzd: '',
      // 血瘀质
      xyzdf: '',
      xyzjl: '',
      xyzzd: '',
      // 气郁质
      qyzdf: '',
      qyzjl: '',
      qyzzd: '',
      // 特禀质
      tbzdf: '',
      tbzjl: '',
      tbzzd: '',
      // 平和质
      phzdf: '',
      phzjl: '',
      phzzd: ''

    }
  },
  created () {
    const _this = this
    if (_this.status == '1') {
      console.log('加载中医体质原始数据')
      var tmh = _this.tmh
      var obj = my.fetchPersonalZytzData(tmh)
      var result = obj.fetchPersonalZytzData
      result = JSON.parse(result)
      result = result.data
      _this.df.q1df = result.q1df
      _this.df.q2df = result.q2df
      _this.df.q3df = result.q3df
      _this.df.q4df = result.q4df
      _this.df.q5df = result.q5df
      _this.df.q6df = result.q7df
      _this.df.q8df = result.q8df
      _this.df.q9df = result.q9df
      _this.df.q10df = result.q10df
      _this.df.q11df = result.q11df
      _this.df.q12df = result.q12df
      _this.df.q13df = result.q13df
      _this.df.q14df = result.q14df
      _this.df.q15df = result.q15df
      _this.df.q16df = result.q16df
      _this.df.q17df = result.q17df
      _this.df.q18df = result.q18df
      _this.df.q19df = result.q19df
      _this.df.q20df = result.q20df
      _this.df.q21df = result.q21df
      _this.df.q22df = result.q22df
      _this.df.q23df = result.q23df
      _this.df.q24df = result.q24df
      _this.df.q25df = result.q25df
      _this.df.q26df = result.q26df
      _this.df.q27df = result.q27df
      _this.df.q28df = result.q28df
      _this.df.q29df = result.q29df
      _this.df.q30df = result.q30df
      _this.df.q31df = result.q31df
      _this.df.q32df = result.q32df
      _this.df.q33df = result.q33df



    }
  },
  methods: {
    save () {
      const _this = this
      // 完整性校验

      var data = {}
      data.tmh = _this.tmh
      // 得分
      data.q1df = _this.df.q1df
      data.q2df = _this.df.q2df
      data.q3df = _this.df.q3df
      data.q4df = _this.df.q4df
      data.q5df = _this.df.q5df
      data.q6df = _this.df.q6df
      data.q7df = _this.df.q7df
      data.q8df = _this.df.q8df
      data.q9df = _this.df.q9df
      data.q10df = _this.df.q10df
      data.q11df = _this.df.q11df
      data.q12df = _this.df.q12df
      data.q13df = _this.df.q13df
      data.q14df = _this.df.q14df
      data.q15df = _this.df.q15df
      data.q16df = _this.df.q16df
      data.q17df = _this.df.q17df
      data.q18df = _this.df.q18df
      data.q19df = _this.df.q19df
      data.q20df = _this.df.q20df
      data.q21df = _this.df.q21df
      data.q22df = _this.df.q22df
      data.q23df = _this.df.q23df
      data.q24df = _this.df.q24df
      data.q25df = _this.df.q25df
      data.q26df = _this.df.q26df
      data.q27df = _this.df.q27df
      data.q28df = _this.df.q28df
      data.q29df = _this.df.q29df
      data.q30df = _this.df.q30df
      data.q31df = _this.df.q31df
      data.q23df = _this.df.q32df
      data.q33df = _this.df.q33df
      // 其他信息
      _this.up_time = _this.getNowFormatDate()
      data.up_time = _this.up_time
      console.log(JSON.stringify(data))
      var obj = my.savePersonalZytzData(JSON.stringify(data))
    },
    // 获取时间格式
    getNowFormatDate () {
      var date = new Date()
      var seperator1 = '-'
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
      return currentdate
    }

  },
  computed: {
    ...mapGetters(['status', 'tmh'])
  },
  mounted () {

  }

}
</script>

<style scoped>
  table,tr,td,th{
    font-size: 15px;
    border:1px solid #ccc;
    border-collapse:collapse;
  }
  table{
    margin-top: 10px;
    width: 1315px;
  }
  table th{
    height: 55px;
  }
  table td{
    height: 50px;
  }
  table .table_title{
    font-weight: 700;
    font-size: 15px;
    text-align: center;
  }
  .table_item{
    text-align: center;
  }
  input[type='radio']{
    width: 16px;
    height: 16px;
  }
  input[type=radio]:after  {
      content: "";
      display:block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      text-align: center;
      line-height: 14px;
      font-size: 16px;
      color: #fff;
      border: 2px solid #ddd;
      background-color: #fff;
      box-sizing:border-box;
      position: relative;
      left: -2px;
  }
  input[type=radio]:checked:after  {
      content: "";
      transform:matrix(-0.766044,-0.642788,-0.642788,0.766044,0,0);
      -webkit-transform:matrix(-0.766044,-0.642788,-0.642788,0.766044,0,0);
      background: #5774FF;
  }

</style>
