<template>
  <div>
     <div class="cardBox">
      <Card class="Card">
        <div class="content">
          <div style="margin-bottom: 10px;font-size: 18px;font-weight: 700">
          </div>
          <div class="lifeStyleTableBox">
            <table class="liefStyleTable">
              <tr>
                 <!--体育锻炼-->
                <td width="10%" class="td_left">体育锻炼</td>
                <td width="90%">
                  <div class="dlpl_table_item">
                    <span>锻炼频率：</span>
                     <Select v-model="dlpl" style="width:120px;" @on-change='dlplHandle($event)'>
                       <Option :key='index' :value="item" v-for="(item,index) in dlConfig">{{item}}</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item selectWhite" :class="{needValue:dlpl!=='不锻炼'&&mcdlsj.data==''}">
                    <span>每次锻炼时间：</span>
                    <input  :disabled="dlpl=='不锻炼'" type="text" list="mcdlsj" v-model="mcdlsj.data" @input="$emit('input', $event.target.value)"/>
                    <datalist id="mcdlsj" >
                      <option v-for="item in mcdlsj.option" :key="item" :value="item"/>
                    </datalist>
                  </div>
                  <div class="dlpl_table_item selectWhite" :class="{needValue:dlpl!=='不锻炼'&&jcdlsj.data==''}">
                    <span >坚持锻炼时间：</span>
                     <input :disabled="dlpl=='不锻炼'" type="text" list="jcdlsj" v-model="jcdlsj.data" />
                     <datalist id="jcdlsj">
                       <option v-for="item in jcdlsj.option" :key="item" :value="item"/>
                     </datalist>
                  </div>
                  <div class="dlpl_table_item">
                    <CheckboxGroup size="large" v-model='dlfs' :class="{needValue:dlpl!=='不锻炼'&&dlfs==''}">
                      <span>锻炼方式：</span>
                      <Checkbox :label="item" :key = "index" v-for="(item,index) in dlfsConfig"></Checkbox>
                    </CheckboxGroup>
                  </div>
                  <div class="dlpl_table_item">
                     <Input  type="text" v-model="dlfsOther" placeholder="其他" @on-blur="dlfsOtherHandle ()"></Input>
                  </div>
                </td>
              </tr>
              <tr>
                <!--饮食习惯-->
                <td class="td_left">饮食习惯</td>
                <td>
                  <div class="dlpl_table_item">
                    <span>饮食习惯：</span>
                     <Select style="width:120px;" v-model="ysxg" >
                       <Option :value="item" :key = "index+'b'" v-for="(item,index) in ysxgConfig">{{item}}</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item">
                    <CheckboxGroup size="large" v-model="kwph" >
                      <span>口味偏好：</span>
                      <Checkbox :label="item" :key = "index+'a'" v-for="(item,index) in kwphConfig">{{item}}</Checkbox>
                    </CheckboxGroup>
                  </div>
                </td>
              </tr>
              <tr>
                <!--吸烟状况-->
                <td class="td_left">吸烟状况</td>
                <td>
                  <div class="dlpl_table_item">
                    <span>吸烟状况：</span>
                     <Select style="width:120px;" v-model="xyzk" @on-change="xyzkHandle()">
                       <Option :value="item" :key = "index" v-for="(item,index) in xyConfig" >{{item}}</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item selectWhite" :class="{needValue:xyzk!=='从不吸烟'&&rxyl.data==''}">
                    <span>日吸烟量（支）：</span>
                     <input type="text" list="rxyl" v-model="rxyl.data" :disabled="xyzk=='从不吸烟'"/>
                     <datalist id="rxyl">
                       <option v-for="item in rxyl.option" :key="item" :value="item"/>
                     </datalist>
                  </div>
                  <span class="onespan" :class="{needValue:xyzk!=='从不吸烟'&&ksxyAge==''}">开始吸烟年龄：</span>
                  <div class="dlpl_table_item" >
                     <Input type="text" style="width:120px;" v-model="ksxyAge" :disabled="xyzk=='从不吸烟'"></Input>
                  </div>
                  <span class="onespan" :class="{needValue:xyzk!=='从不吸烟'&&jyAge==''&&xyzk!=='吸烟'}">戒烟年龄：</span>
                  <div class="dlpl_table_item" >
                     <Input type="text" style="width:120px;" v-model="jyAge" :disabled="xyzk=='从不吸烟'||xyzk=='吸烟'"></Input>
                  </div>
                </td>
              </tr>
              <tr>
                <!--饮酒情况-->
                <td style="height: 120px; font-size: 16px;font-weight: 700;text-align: center;">饮酒情况</td>
                <td>
                  <div class="dlpl_table_item">
                    <span>饮酒频率：</span>
                     <Select style="width:120px;" v-model="yjpl" @on-change="yjplHandle()" >
                       <Option :value="item" :key="index" v-for="(item,index) in yjplConfig">{{item}}</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item selectWhite">
                    <span>日饮酒量（两）：</span>
                     <input type="text" list="ryjl" v-model="ryjl.data" :disabled="yjpl=='从不'" />
                     <datalist id="ryjl">
                       <option v-for="item in ryjl.option" :key="item" :value="item"/>
                     </datalist>
                  </div>
                  <div class="dlpl_table_item">
                    <span>是否戒酒：</span>
                     <Select style="width:120px;" v-model="sfjj" :disabled="yjpl=='从不'"  >
                       <Option value="已戒酒">已戒酒</Option>
                       <Option value="未戒酒">未戒酒</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item selectWhite">
                    <span>开始饮酒年龄：</span>
                    <Input type="text" style="width:120px;" v-model="ksyjAge" :disabled="yjpl=='从不'" ></Input>
                  </div>
                  <div class="dlpl_table_item selectWhite">
                    <span>戒酒年龄：</span>
                    <Input type="text" style="width:120px;" v-model="jjAge" :disabled="yjpl=='从不'" ></Input>
                  </div>
                  <div class="dlpl_table_item">
                    <span>近一年是否醉酒：</span>
                     <Select style="width:120px;" v-model="jynsfzj" :disabled="yjpl=='从不'" >
                       <Option value="是">是</Option>
                       <Option value="否">否</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item">
                    <CheckboxGroup size="large" v-model="yjzl"  >
                      <span>饮酒种类：</span>
                      <Checkbox :label="item" :key = "index" v-for="(item,index) in yjzlConfig" :disabled="yjpl=='从不'">{{item}}</Checkbox>
                    </CheckboxGroup>
                  </div>
                  <div class="dlpl_table_item" >
                     <Input type="text" placeholder='其他' v-model="yjzlqt" :disabled="yjpl=='从不'" ></Input>
                  </div>
                </td>
              </tr>
              <tr>
                <!--职业病危害因素接触史 -->
                <td style="height: 240px; font-size: 16px;font-weight: 700;text-align: center;">职业病危害因素接触史</td>
                <td >
                  <div class="dlpl_table_item">
                     <Select style="width:60px;">
                       <Option value="0">有</Option>
                       <Option value="1">无</Option>
                     </Select>
                  </div>
                  <div class="dlpl_table_item">
                    <span>工种：</span>
                    <Input type="text" style="width:120px;"></Input>
                  </div>
                  <div class="dlpl_table_item">
                    <span>从业时间（年）：</span>
                    <Input type="text" style="width:120px;"></Input>
                  </div>
                  <div class="dwzl">
                    <Row>
                      <Col span="4">
                        <span class="onespan">毒物种类:</span>
                        </Col>
                      <Col span="16">
                        <div class="dwzlType" v-for="(item,index) in dwzl">
                          <span style="width: 80px;display: inline-block;">{{item.typeText}}</span>
                          <Input type="text" v-model="item.type" style='width: 120px;margin-left: 10px;'></Input>
                          <span style="width: 80px;display: inline-block;margin-left: 10px;">防护措施</span>
                          <Input type="text" v-model="item.fhcs" style='width: 120px;'></Input>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Card>
     </div>
     <Button @click = "save()">保存</Button>
     {{dlfs}}
     <p>口味偏好{{kwph}}</p>
     <p>每次锻炼频率{{mcdlsj.data}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'lifeStyle',
  data () {
    return {
      dlConfig: ['不锻炼', '每天', '每周一次以上', '偶尔'],
      dlfsConfig: ['散步', '跑步', '跳舞', '太极拳'],
      ysxgConfig: ['荤素搭配', '荤食为主', '素食为主'],
      kwphConfig: ['嗜油', '嗜盐', '嗜糖'],
      xyConfig: ['从不吸烟', '戒烟', '吸烟'],
      yjplConfig: ['从不', '经常', '偶尔', '每天'],
      yjzlConfig: ['白酒', '啤酒', '红酒', '黄酒'],
      // 锻炼频率
      dlpl: '',
      // 锻炼方式
      dlfs: ['散步', '跑步'],
      dlfsOther: '',
      mcdlsj: {
        data: '15',
        option: [15, 20, 30, 40, 50, 60, 70, 80, 120]
      },
      jcdlsj: {
        data: '0.08',
        option: [0.08, 0.17, 0.25, 0.5, 0.75, 1, 2, 3]
      },
      // 饮食习惯
      ysxg: '素食为主',
      // 口味偏好
      kwph: ['嗜油'],
      // 吸烟状况
      xyzk: '',
      rxyl: {
        data: '',
        option: [5, 10, 15, 20, 30, 40, 50, 60]
      },
      ksxyAge: '18',
      jyAge: '20',
      // 饮酒情况
      yjpl: '',
      ryjl: {
        data: '',
        option: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20]
      },
      sfjj: '',
      ksyjAge: '9',
      jjAge: '10',
      jynsfzj: '是',
      yjzl: ['红酒'],
      yjzlqt: '酒类其他',
      // 职业病床史
      zybjcs: '职业病床史',
      // 生活方式医生
      shfsys: '生活方式医生',
      // 职业病危害防护
      dwzl: [
        { typeText: '粉尘', type: '1', fhcs: '无' },
        { typeText: '放射物质', type: '2', fhcs: '' },
        { typeText: '物理因素', type: '3', fhcs: '' },
        { typeText: '化学物质', type: '4', fhcs: '' },
        { typeText: '其他', type: '5', fhcs: '' }
      ]
    }
  },
  created () {
    // 在这里请求已查体数据
    const _this = this
    if (_this.status == 1) {
      console.log('加载生活方式原始数据')
      var result = _this.result
      _this.dlpl = result.dlpl
      _this.mcdlsj.data = result.mcdlsj
      _this.jcdlsj.data = result.jcdlsj
      _this.dlfs = result.dlfs.split(',')
      _this.ysxg = result.ysxg

      // 吸烟状况
      _this.xyzk = result.xyzk
      _this.rxyl.data = result.rxyl
      _this.ksxyAge = result.ksxynl
      _this.jyAge = result.jynl
      // 饮酒频率
      _this.yjpl = result.yjpl
      _this.ryjl.data = result.ryjl
      _this.sfjj = result.sfjj
      _this.jjAge = result.jjnl
      _this.ksyjAge = result.ksyjnl
      _this.jynsfzj = result.sfzj
      _this.yjzl = result.yjzl.split(',')
      _this.yjzlqt = result.yjzlqt
      _this.zybjcs = result.zybjcs
      _this.shfsys = result.shfsys
    }
  },
  methods: {
    save () {
      const _this = this
      // 通过表单验证
      var data = {}
      data.tmh = _this.tmh
      data.dlpl = _this.dlpl
      data.mcdlsj = _this.mcdlsj.data
      data.jcdlsj = _this.jcdlsj.data
      data.dlfs = _this.dlfs.join(',')
      data.ysxg = _this.ysxg
      // 吸烟状况
      data.xyzk = _this.xyzk
      data.rxyl = _this.rxyl.data
      data.ksxynl = _this.ksxyAge
      data.jynl = _this.jyAge
      // 饮酒频率
      data.yjpl = _this.yjpl
      data.ryjl = _this.ryjl.data
      data.sfjj = _this.sfjj
      data.jjnl = _this.jjAge
      data.ksyjnl = _this.ksyjAge
      data.sfzj = _this.jynsfzj
      data.yjzl = _this.yjzl.join(',')
      data.yjzlqt = _this.yjzlqt
      data.zybjcs = _this.zybjcs
      data.shfsys = _this.shfsys
      console.log(JSON.stringify(data))
      var obj = my.savePersonalJktjData(JSON.stringify(data))
    },
    dlfsOtherHandle () {
      const _this = this
      if (_this.dlfsOther == '') { return }
      if (!_this.dlfs.includes(_this.dlfsOther)) { _this.dlfs.push(_this.dlfsOther) }
    },
    // 不锻炼选项清空值
    dlplHandle () {
      const that = this
      if (that.dlpl == '不锻炼') {
        console.log('不锻炼')
        that.dlfs = []
        that.dlfsOther = ''
        that.$set(that.mcdlsj, 'data', '')
        that.$set(that.jcdlsj, 'data', '')
      }
    },
    // 不吸烟清空值
    xyzkHandle () {
      const that = this
      if (that.xyzk == '从不吸烟') {
        that.$set(that.rxyl, 'data', '')
        that.ksxyAge = ''
        that.jyAge = ''
      }
    },
    // 不饮酒清空值
    yjplHandle () {
      const that = this
      if (that.yjpl == '从不') {
        that.$set(that.ryjl, 'data', '')
        that.sfjj = ''
        that.ksyjAge = ''
        that.jjAge = ''
        that.jynsfzj = ''
        that.yjzl = []
      }
    }

  },
  watch: {
    kwph: {
      handler (newValue) {
        const that = this
        if (newValue.length > 2) {
          that.$delete(that.kwph, `0`)
        }
      }
    }
  },
  mounted () {

  },
  computed: {
    ...mapGetters(['status', 'tmh','result'])
  }

}
</script>

<style scoped>
table,tr,td{
  font-weight: 700;
  font-size: 14px;
  border:1px solid #ccc;
  border-collapse:collapse;
}
.lifeStyleTableBox{
  margin:15px 0 0 20px;
}
.liefStyleTable{
  width: 100%;
}
.liefStyleTable .td_left{
  text-align: center;
  font-size: 16px;
  font-weight: 700;
}
.liefStyleTable tr{
  height: 52px;
}
.dlpl_table_item{
  margin-top:8px;
  margin-left: 8px;
  display:inline-block;
}
.selectWhite input[type="text"]{
    border-radius: 4px;
    display: inline-block;
    width: 134px;
    height: 31px;
    border: 1px solid #EEEEEE;
    font-weight: 600;
    background-color: white;
  }
  .onespan{
    margin-left:8px ;
  }
  .dwzl{
    margin-top: 10px;
  }
  .dwzlType{
    margin-top: 3px;
    margin-left: 10px;
    display: inline-block;
  }
  .needValue{
    background: red;
  }
</style>
