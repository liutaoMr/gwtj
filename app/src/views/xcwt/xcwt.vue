<template>
  <div class="xcwtBox">
    <Card class="Card">
      <div class="content">
        <div style="margin-bottom: 10px;font-size: 18px;font-weight: 700">
        </div>
        <div class="contentData">
          <table>
            <tr>
              <td style='width: 15%;' class="table_title">脑血管疾病：</td>
              <td style='width: 85%;' class="table_content">
                <div class="table_item">
                  <CheckboxGroup v-model="nxgjb">
                    <span v-for="(item,index) in nxgjbConfig">
                      <template v-if="index==0">
                         <Checkbox size=large :label='item' @click.native="nxgOk()" ></Checkbox>
                      </template>
                      <template v-else>
                        <Checkbox size=large :label='item' @click.native="nxgWrong()"></Checkbox>
                      </template>
                    </span>
                  </CheckboxGroup>
                </div>
                <div class="table_item">
                 <span>其他</span>
                 <Input class="input" v-model="nxgjbqt"></Input>
                </div>
              </td>
            </tr>
            <tr>
              <td class="table_title">肾脏疾病：</td>
              <td class="table_content">
                <div class="table_item">
                  <CheckboxGroup v-model="szjb">
                    <span v-for="(item,index) in szjbConfig">
                      <template v-if="index==0">
                         <Checkbox size=large :label='item' @click.native="szjbOk()" ></Checkbox>
                      </template>
                      <template v-else>
                        <Checkbox size=large :label='item' @click.native="szjbWrong()"></Checkbox>
                      </template>
                    </span>
                  </CheckboxGroup>
                </div>
                <div class="table_item">
                 <span>其他</span>
                 <Input class="input" v-model="szjbqt"></Input>
                </div>
              </td>
            </tr>
            <tr>
              <td class="table_title" style="height: 103px;">心血管疾病：</td>
              <td class="table_content">
                <div class="table_item">
                  <CheckboxGroup v-model="xgjb">
                    <span v-for="(item,index) in xxgjbConfig">
                      <template v-if="index==0">
                         <Checkbox size=large :label='item' @click.native="xgjbOk()" ></Checkbox>
                      </template>
                      <template v-else>
                        <Checkbox size=large :label='item' @click.native="xgjbWrong()"></Checkbox>
                      </template>
                    </span>
                  </CheckboxGroup>
                </div>
                <div class="table_item">
                 <span>其他</span>
                 <Input class="input" v-model="xgjb_qt"></Input>
                </div>

              </td>
            </tr>
            <tr>
              <td class="table_title">眼部疾病：</td>
              <td class="table_content">
                <div class="table_item">
                  <CheckboxGroup v-model="ybjb">
                    <span v-for="(item,index) in ybjbConfig">
                      <template v-if="index==0">
                         <Checkbox size=large :label='item' @click.native="ybjbOk()" ></Checkbox>
                      </template>
                      <template v-else>
                        <Checkbox size=large :label='item' @click.native="ybjbWrong()"></Checkbox>
                      </template>
                    </span>
                  </CheckboxGroup>
                </div>
                <div class="table_item">
                 <span>其他</span>
                 <Input class="input" v-model="ybjbqt"></Input>
                </div>
              </td>
            </tr>
            <tr>
              <td class="table_title">神经系统其他疾病：</td>
              <td class="table_content">
                <div class="table_item">
                  <CheckboxGroup v-model="sjxtjb">
                    <span v-for="(item,index) in sjxtjbConfig">
                      <template v-if="index==0">
                         <Checkbox size=large :label='item' @click.native="sjxtjbOk()" ></Checkbox>
                      </template>
                      <template v-else>
                        <Checkbox size=large :label='item' @click.native="sjxtjbWrong()"></Checkbox>
                      </template>
                    </span>
                  </CheckboxGroup>
                </div>
                <div class="table_item">
                 <span>其他</span>
                 <Input class="input" v-model="sjxtjbqt"></Input>
                </div>
              </td>
            </tr>
            <tr>
              <td class="table_title" style="height: 106px;">其他系统疾病：</td>
              <td class="table_content">
                <div class="table_item">
                  <CheckboxGroup v-model="qtxtjb">
                    <span v-for="(item,index) in qtxtjbConfig">
                      <template v-if="index==0">
                         <Checkbox size=large :label='item' @click.native="qtxtjbOk()" ></Checkbox>
                      </template>
                      <template v-else>
                        <Checkbox size=large :label='item' @click.native="qtxtjbWrong()"></Checkbox>
                      </template>
                    </span>
                  </CheckboxGroup>
                </div>
                <div class="table_item">
                 <span>其他</span>
                 <Input class="input" v-model="qtxtjbqt"></Input>
                </div>
              </td>
            </tr>

          </table>
        </div>
      </div>
    </Card>
    <Button @click="change()">转换格式</Button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'xcwt',
  data () {
    return {
      // 脑血管疾病配置
      nxgjbConfig: ['未发现', '缺血性卒中', '脑出血', '蛛网膜下腔出血', '短暂性脑缺血发作'],
      // 肾脏疾病配置
      szjbConfig: ['未发现', '糖尿病肾病', '肾功能衰竭', '急性肾炎', '慢性肾病'],
      // 心血管配置
      xxgjbConfig: ['未发现', '心肌梗死', '心绞痛', '冠状动脉血运重建', '充血性心力衰竭', '心前区疼痛', '高血压', '夹层动脉瘤', '动脉封闭性疾病'],
      // 眼部疾病配置
      ybjbConfig: ['未发现', '视网膜出血或渗出', '视乳头水肿', '白内障'],
      // 神经系统疾病配置
      sjxtjbConfig: ['未发现', '阿尔茨海默症(老年性痴呆)', '帕金森病'],
      // 其他系统疾病配置
      qtxtjbConfig: ['未发现', '糖尿病', '慢性支气管炎', '慢性阻塞性肺气肿', '恶性肿瘤', '老年性骨关节炎'],

      nxgjb: [],
      nxgjbqt: '',
      // 肾脏疾病
      szjb: [''],
      szjbqt: '',
      // 心血管疾病
      xzjb: [],
      xzhbqt: '',
      xgjb: [''],
      xgjb_qt: '',
       // 眼部疾病
      ybjb: [''],
      ybjbqt: '',
      sjxtjb: [''],
      sjxtjbqt: '',
      qtxtjb: [''],
      qtxtjbqt: '',
      // 现存主要问题医生
      xczywtys: ''
    }
  },
  created () {
    // 在这里请求已查体数据
    const _this = this
    if (_this.status == 1) {
      console.log('加载现存问题原始数据')
      var result = _this.result
      // 脑血管疾病
      _this.nxgjb = result.nxgjb.split(',')
      _this.nxgjbqt = result.nxgjbqt
      // 肾脏疾病
      _this.szjb = result.szjb.split(',')
      _this.szjbqt = result.szjbqt
      // 心血管疾病
      _this.xgjb = result.xgjb.split(',')
      _this.xgjb_qt = result.xgjb_qt
      // 眼部疾病
      _this.ybjb = result.ybjb.split(',')
      _this.ybjbqt = result.ybjbqt
      // 神经系统疾病
      _this.sjxtjb = result.sjxtjb.split(',')
      _this.sjxtjbqt = result.sjxtjbqt
      // 其他系统疾病
      _this.qtxtjb = result.qtxtjb.split(',')
      _this.qtxtjbqt = result.qtxtjbqt
    }
  },
  methods: {
    save () {
      // 完整性校验
      const _this = this
      var data = {}
      // 脑血管疾病保存
      data.nxgjb = _this.arryToString(_this.nxgjb)
      data.nxgjbqt = _this.nxgjbqt
      // 肾脏疾病保存
      data.szjb = _this.arryToString(_this.szjb)
      data.szjbqt = _this.szjbqt
      // 心血管疾病保存
      data.xgjb = _this.arryToString(_this.xgjb)
      data.xgjb_qt = _this.xgjb_qt
      // 眼部疾病保存
      data.ybjb = _this.arryToString(_this.ybjb)
      data.ybjbqt = _this.ybjbqt
      // 神经系统其他疾病保存
      data.sjxtjb = _this.arryToString(_this.sjxtjb)
      data.sjxtjbqt = _this.sjxtjbqt
      // 其他系统疾病保存
      data.qtxtjb = _this.arryToString(_this.qtxtjb)
      data.qtxtjbqt = _this.qtxtjbqt
      data.tmh = _this.tmh
      // console.log(JSON.stringify(data))
      var obj = my.savePersonalJktjData(JSON.stringify(data))
      // console.log('保现存问题功能')
    },
    nxgOk () {
      this.nxgjb = ['未发现']
      this.nxgjbqt = ''
    },
    nxgWrong () {
      const _this = this
      if (_this.nxgjb.includes('未发现')) {
        _this.nxgjb.forEach((item, index) => {
          if (item == '未发现') {
            _this.nxgjb.splice(index, 1)
          }
        })
      }
    },
    szjbOk () {
      this.szjb = ['未发现']
      this.szjbqt = ''
    },
    szjbWrong () {
      const _this = this
      if (_this.szjb.includes('未发现')) {
        _this.szjb.forEach((item, index) => {
          if (item == '未发现') {
            _this.szjb.splice(index, 1)
          }
        })
      }
    },
    // 心血管疾病
    xgjbOk () {
      this.xgjb = ['未发现']
      this.xgjb_qt = ''
    },
    xgjbWrong () {
      const _this = this
      if (_this.xgjb.includes('未发现')) {
        _this.xgjb.forEach((item, index) => {
          if (item == '未发现') {
            _this.xgjb.splice(index, 1)
          }
        })
      }
    },
    ybjbOk () {
      this.ybjb = ['未发现']
      this.ybjbqt = ''
    },
    ybjbWrong () {
      const _this = this
      if (_this.ybjb.includes('未发现')) {
        _this.ybjb.forEach((item, index) => {
          if (item == '未发现') {
            _this.ybjb.splice(index, 1)
          }
        })
      }
    },
    sjxtjbOk () {
      this.sjxtjb = ['未发现']
      this.sjxtjbqt = ''
    },
    sjxtjbWrong () {
      const _this = this
      if (_this.sjxtjb.includes('未发现')) {
        _this.sjxtjb.forEach((item, index) => {
          if (item == '未发现') {
            _this.sjxtjb.splice(index, 1)
          }
        })
      }
    },
    qtxtjbOk () {
      this.qtxtjb = ['未发现']
      this.qtxtjbqt = ''
    },
    qtxtjbWrong () {
      const _this = this
      if (_this.qtxtjb.includes('未发现')) {
        _this.qtxtjb.forEach((item, index) => {
          if (item == '未发现') {
            _this.qtxtjb.splice(index, 1)
          }
        })
      }
    },
    arryToString (arr) {
      var string = arr.join(',')
      return string
    },
    change () {
      const _this = this
      _this.save()
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
  .ivu-checkbox-wrapper.ivu-checkbox-large{
    font-size: 16px!important;
  }
  table,tr,td{
    font-size: 16px;
    border:1px solid #ccc;
    border-collapse:collapse;
    font-size: 16px;
  }
  table{
    margin-top: 10px;
    width: 1315px;
  }
  .table_title{
    font-weight: 700;
    text-align: center;
    height: 48px;
  }
  .table_item{
    margin-top: 10px;
    display: inline-block;
  }
  .table_content{
    padding: 5px 10px;
  }
  .input{
    width: 175px;
    margin-left: 20px;
  }
</style>
