<template>
  <div class="zqgnBox">
    <Card class="Card">
      <div class="content">
        <div style="margin-bottom: 10px;font-size: 18px;font-weight: 700">
        </div>
        <div class="zqgnTableBox">
          <table class="zqgnTable">
            <tr>
              <td style="width: 20%;height: 140px;" class="table_tile">口腔</td>
              <td style="width: 80%;" class="table_content">
                <div class="zqgn_li">
                  <div class="table_item">
                    <span>口唇：</span>
                    <Select class="select" v-model="kc">
                      <Option :value="item" :key="index" v-for="(item,index) in kcConfig">{{item}}</Option>
                    </Select>
                  </div>
                  <div class="table_item">
                    <span>咽部：</span>
                    <Select class="select" v-model="yb">
                      <Option :value="item" :key="index" v-for="(item,index) in ybConfig">{{item}}</Option>
                    </Select>
                  </div>
                </div>
                <div class="zqgn_li">
                  <div class="table_item">
                    <CheckboxGroup v-model="tooth">
                      <span style="font-size: 16px;">齿列：</span>
                      <Checkbox label="正常" size=large @click.native = "toothOk()"></Checkbox>
                      <Checkbox label="缺齿" size=large @click.native = "toothWrong()"></Checkbox>
                      <div class="quechi">
                         <Input style="width: 93px;" v-for="(item,index) in 4" v-model="quechi[index]" :key="index" class="quechi_input" :disabled="!tooth.includes('缺齿')"></Input>
                      </div>
                      <Checkbox label="龋齿" size=large @click.native = "toothWrong()"></Checkbox>
                      <div class="quechi">
                        <Input style="width: 93px;" v-for="(item,index) in 4" v-model="quchi[index]" :key="index" class="quechi_input" :disabled="!tooth.includes('龋齿')"></Input>
                      </div>
                      <Checkbox label="义齿(假牙)" size=large @click.native = "toothWrong()"></Checkbox>
                      <div class="quechi">
                        <Input style="width: 93px;" v-for="(item,index) in 4" v-model="yichi[index]" :key="index" class="quechi_input" :disabled="!tooth.includes('义齿(假牙)')"></Input>
                      </div>
                    </CheckboxGroup>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td class="table_tile">视力</td>
              <td class="table_content">
                <div class="table_item">
                  <span>左眼视力：</span>
                  <input class="select input_select" type="text" list="zysl" v-model="zysl" />
                  <datalist id="zysl" >
                    <option v-for="item in zyslConfig" :key="item" :value="item"/>
                  </datalist>
                </div>
                <div class="table_item">
                 <span>右眼视力：</span>
                 <input class="select input_select" type="text" list="zysl" v-model="yysl">
                 <datalist id="zysl" >
                   <option v-for="item in zyslConfig" :key="item" :value="item"/>
                 </datalist>
                </div>
                <div class="table_item">
                 <span>左眼矫正视力：</span>
                 <input class="select input_select" type="text" list="zysl" v-model="zyjzsl" @change="zyjzHandle()"/>
                 <datalist id="zysl" >
                   <option v-for="item in zyslConfig" :key="item" :value="item"/>
                 </datalist>
                </div>
                <div class="table_item">
                 <span>右眼矫正视力：</span>
                 <input class="select input_select" type="text" list="zysl" v-model="yyjzsl" @change=" yyjzHandle()"/>
                 <datalist id="zysl" >
                   <option v-for="item in zyslConfig" :key="item" :value="item"/>
                 </datalist>
                </div>
              </td>
            </tr>
            <tr>
              <td class="table_tile">听力</td>
              <td class="table_content">
                <div class="table_item">
                  <Select class="select" v-model='tingli'>
                    <Option :value="item" :key="index" v-for="(item,index) in tlConfig">{{item}}</Option>
                  </Select>
                </div>
              </td>
            </tr>
            <tr>
              <td class="table_tile">运动能力</tindexd>
              <td class="table_content">
                <div class="table_item">
                  <Select class="select" style="width: 200px;" v-model='yundongnengli'>
                    <Option :value="item" :key="index" v-for="(item,index) in ydnlConfig">{{item}}</Option>
                  </Select>
                </div>
              </td>
            </tr>
          </table>1
        </div>

      </div>
      <span>缺齿</span>{{quechi}}
      <span>牙齿</span>{{tooth}}
      <span>左眼视力</span>{{zysl}}
    </Card>
    <Button @click="save()">保存</Button>
    <Button @click="change()">转格式</Button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'zqgn',
  data () {
    return {
      kcConfig: ['红润', '苍白', '发绀', '皲裂', '疱疹'],
      // 咽部配置
      ybConfig: ['无充血', '充血', '淋巴滤泡增生'],
      // 左右边眼视力配置
      zyslConfig: [5.3, 5.2, 5.1, 5.0, 4.9, 4.8, 4.7, 4.6, 4.5, 4.4, 4.3, 4.2, 4.1, 4.0, 0],
      // 听力
      tlConfig: ['听见', '听不清或无法听'],
      // 运动能力
      ydnlConfig: ['可顺利完成', '无法完成其中任何一个动作'],
      // 牙齿状态
      kc: '红润',
      yb: '无充血',
      tooth: [],
      zysl: '',
      yysl: '',
      zyjzsl: '',
      yyjzsl: '',
      quechi: [],
      quchi: [],
      yichi: [],
      tingli: '听见',
      yundongnengli: '可顺利完成',
      text: '7,6,5,4,3,2,1;1,2,3,4,5,6,7;7,6,5,4,3,2,1;1,2,3,4,5,6,7'
    }
  },
  created () {
    // 在这里请求已查体数据
    const _this = this
    if (_this.status == 1) {
      console.log('加载脏器功能原始数据')
	    var result = _this.result
      // console.log(result)
      _this.kc = result.koucun
      _this.yb = result.yanbu
      // 齿列
      _this.tooth = result.chilie.split(',')
      _this.zysl = result.zysl
      _this.yysl = result.yysl
      _this.zyjzsl = result.zyjzsl
      _this.yyjzsl = result.yyjzsl
      _this.tingli = result.tingli
      _this.yundongnengli = result.ydgn
      // 缺齿
      var Arr = []
      var arr = result.quechi.split(';')
      arr.forEach((item) => {
        var string = item.replace(/,/g, '')
        Arr.push(string)
      })
      _this.quechi = Arr
      // 龋齿
      var Arr1 = []
      var arr1 = result.quchi.split(';')
      arr1.forEach((item) => {
        var string = item.replace(/,/g, '')
        Arr1.push(string)
      })
      _this.quchi = Arr1
      // 义齿
      var Arr2 = []
      var arr2 = result.yichi.split(';')
      arr2.forEach((item) => {
        var string = item.replace(/,/g, '')
        Arr2.push(string)
      })
      _this.yichi = Arr2
    }
  },
  methods: {
    save () {
      const _this = this
      // 完整性校验
      if (_this.tooth.length == 0) {
        _this.$Message.warning('齿列不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.tooth.includes('缺齿') && _this.quechi.length == 0) {
        _this.$Message.warning('缺齿不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.tooth.includes('龋齿') && _this.quechi.length == 0) {
        _this.$Message.warning('龋齿不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.tooth.includes('义齿(假牙)') && _this.quechi.length == 0) {
        _this.$Message.warning('义齿(假牙)不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.zysl == '') {
        _this.$Message.warning('左眼不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.yysl == '') {
        _this.$Message.warning('右眼不能为空')
        _this.$emit('ContinuChanged', 0)
      } else {
        const _this = this
        var data = {}
        data.koucun = _this.kc
        data.yanbu = _this.yb
        // 齿列
        data.chilie = _this.tooth.join(',')

        data.zysl = _this.zysl
        data.yysl = _this.yysl
        data.zyjzsl = _this.zyjzsl
        data.yyjzsl = _this.yyjzsl
        // 缺齿
        var Arry = []
        _this.quechi.forEach((item, index) => {
          var arr = _this.quechi[index].split('')
          var string = arr.join(',')
          Arry.push(string)
        })
        var String = Arry.join(';')
        data.quechi = String
        console.log(data.quechi)
        // 龋齿
        var Arry1 = []
        _this.quchi.forEach((item, index) => {
          var arr = _this.quchi[index].split('')
          var string = arr.join(',')
          Arry1.push(string)
        })
        var String1 = Arry1.join(';')
        data.quchi = String1
        console.log(data.quchi)
        // 义齿
        var Arry2 = []
        _this.yichi.forEach((item, index) => {
          var arr = _this.yichi[index].split('')
          var string = arr.join(',')
          Arry2.push(string)
        })
        var String2 = Arry2.join(';')
        data.yichi = String2
        // console.log(data.yichi)
        data.tmh = _this.tmh
        data.tingli = _this.tingli
        data.ydgn = _this.yundongnengli
        console.log(JSON.stringify(data))
        var obj = my.savePersonalJktjData(JSON.stringify(data))
      }
    },
    toothOk () {
      this.tooth = ['正常']
      this.quechi = []
      this.quchi = []
      this.yichi = []
    },
    toothWrong () {
      const _this = this
      if (_this.tooth.includes('正常')) {
        _this.tooth.forEach((item, index) => {
          if (item == '正常') {
            _this.tooth.splice(index, 1)
          }
        })
      }
    },
    zyjzHandle () {
      const _this = this
      if (_this.zyjzsl < _this.zysl) {
        _this.$Message.warning('左眼矫正视力需要大于左眼视力')
        _this.zyjzsl = ''
      }
    },
    yyjzHandle () {
      const _this = this
      if (_this.yyjzsl < _this.yysl) {
        _this.$Message.warning('右眼矫正视力需要大于左眼视力')
        _this.yyjzsl = ''
      }
    },
    change () {
      var Arr = []
      var arr = this.text.split(';')
      // console.log(arr)
      arr.forEach((item) => {
        var string = item.replace(/,/g, '')
        Arr.push(string)
      })
    }
  },
  mounted () {

  },
  computed: {
    ...mapGetters(['status', 'tmh', 'result'])
  }

}
</script>

<style scoped>
  table,tr,td{
    font-size: 14px;
    border:1px solid #ccc;
    border-collapse:collapse;
    font-size: 16px;
  }
  .table_tile{
    font-weight: 700;
    text-align: center;
  }
  .table_content{
    padding: 10px;
  }
  .table_item{
    display: inline-block;
    margin-left: 15px;
    margin-top:10px;
  }
  .zqgnTable{
    margin-top: 15px;
    width: 1315px;
  }
  .zqgnTable tr{
    height: 53px;
  }
  .select{
    margin-left: 10px;
    width: 136px;
  }
  .quechi{
    display: inline-block;
    width: 210px;
  }
  .quechi .quechi_input{
    margin: 5px 0 0 5px;
  }
  .input_select{
    border-radius: 4px;
    display: inline-block;
    width: 114px;
    height: 31px;
    border: 1px solid #EEEEEE;
    text-indent: 5px;
    background-color: white;
  }

</style>
