<template>
  <div class="bloodPressureBox">
    <Card>
      <div class="content">
        <div style="margin-bottom: 10px;font-size: 18px;font-weight: 700">
        </div>
        <div class="contentData">
          <Row>
            <Col span="14">
              <div class="content-left">
                <Form style="padding:40px 20px;text-align: center" inline>
                  <FormItem label="左侧血压" :label-width="120" class="formItem">
                    <Input type="text" ref="leftbloodLow" v-model="leftbloodLow"  style="width:120px;">
                    </Input>
                    <span style="font-size: 20px;margin: 0 10px;color: #D2D2D2">/</span>
                    <Input type="text" ref="leftbloodHigh" v-model="leftbloodHigh" style="width:120px;">
                    </Input>
                  </FormItem>
                  <FormItem label="脉率" :label-width="120" class="formItem">
                    <Input type="text" ref="mailv" v-model="mailv"  style="width:120px;">
                    </Input>
                  </FormItem>
                  <FormItem label="右侧血压" :label-width="120" class="formItem">
                    <Input type="text" ref="rightbloodLow" v-model="rightbloodLow" style="width:120px;">
                    </Input>
                    <span style="font-size: 20px;margin: 0 10px;color: #D2D2D2">/</span>
                    <Input type="text" ref="rightbloodHigh" v-model="rightbloodHigh" style="width:120px;">
                    </Input>
                  </FormItem>
                  <FormItem label="呼吸频率" :label-width="120" class="formItem">
                    <Input type="text" ref="huxipinlv" v-model="huxipinlv" style="width:120px;">
                    </Input>
                  </FormItem>
                  <FormItem class="measureBloodBox">
                    <span>连接血压计失败</span>
                    <Button size="large" type="primary" @click="bloodPressureMeasure()" id="bloodPressureMeasure">测量</Button>
                  </FormItem>
                  <FormItem label="端口号" :label-width="80" style="margin-top: 60px;">
                    <Select  style="width:90px;" v-model="port">
                      <Option value="8080">8080</Option>
                    </Select>
                    <Icon type="md-sync" size="24" />
                  </FormItem>
                </Form>
              </div>
            </Col>
            <Col span="10">
              <div class="content-right">
                <div class="friendNotoce" >友情提示</div>
                <div class="notice">
                  <p>右侧血压过高</p>
                  <p>
                    <span>风险评估：</span><span>患高血压、糖尿病风险较高</span>
                  </p>
                  <p>
                    <span>医生建议：</span><span>多运动、锻炼身体、多吃青菜多运动、锻炼身体、多吃青菜、锻炼身体</span>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'bloodPressure',
  data () {
    return {
      leftbloodHigh: '',
      leftbloodLow: '',
      rightbloodHigh: '',
      rightbloodLow: '',
      mailv: '',
      huxipinlv: '',
      port: ''
    }
  },
  created () {
    // 在这里请求已查体数据
    const _this = this
    if (_this.status == 1) {
      console.log('加载血压原始数据')
      var result = _this.result
      _this.leftbloodHigh = result.zxyg
      _this.leftbloodLow = result.zxyd
      _this.rightbloodHigh = result.yxyg
      _this.rightbloodLow = result.yxyd
      _this.mailv = result.mailv
      _this.huxipinlv = result.hxpl
    }
  },
  methods: {
    save () {
      const _this = this
      if (_this.leftbloodHigh == '') {
        _this.$refs.leftbloodHigh.focus()
        _this.$Message.warning('左侧高血压不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.leftbloodLow == '') {
        _this.$refs.leftbloodLow.focus()
        _this.$Message.warning('左侧低血压不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.rightbloodLow == '') {
        _this.$refs.rightbloodLow.focus()
        _this.$Message.warning('右侧低血压不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.rightbloodHigh == '') {
        _this.$refs.rightbloodHigh.focus()
        _this.$Message.warning('右侧高血压不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.mailv == '') {
        _this.$refs.mailv.focus()
        _this.$Message.warning('脉率不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.huxipinlv == '') {
        _this.$refs.huxipinlv.focus()
        _this.$Message.warning('呼吸频率不能为空')
        _this.$emit('ContinuChanged', 0)
      } else {
        // 通过完整性校验
        console.log('身高体重数据完整')
        var data = {}
        data.zxyg = parseInt(_this.leftbloodHigh)
        data.zxyd = parseInt(_this.leftbloodLow)
        data.yxyg = parseInt(_this.rightbloodHigh)
        data.yxyd = parseInt(_this.rightbloodLow)
        data.mailv = parseInt(_this.mailv)
        data.hxpl = parseInt(_this.huxipinlv)
        data.tmh = parseInt(_this.tmh)
        console.log(JSON.stringify(data))
        var obj = my.savePersonalJktjData(JSON.stringify(data))
        var result = JSON.parse(obj.savePersonalJktjData)
        // console.log(result)
        if (result.msg == 1) {
          console.log('血压保存成功')
        }
      }
    },
    bloodPressureMeasure () {
      alert('血压测量')
    }
  },
  computed: {
    ...mapGetters(['status', 'tmh', 'result'])
  }

}
</script>

<style scoped>
  .content-left{
    height:370px;
    border-radius:4px;
    border:1px solid rgba(6,169,237,1);
  }
  .content-right{
    padding: 10px;
    margin-left: 15px;
    height:370px;
    border-radius:4px;
    border:1px solid rgba(6,169,237,1);
  }
  .notice p{
    text-indent: 10px;
    font-weight: 700;
  }
  .notice p:first-child{
    font-size: 20px;
    color: red;
  }
  .friendNotoce{
    color: white;
    margin: 20px auto;
    text-align: center;
    width:118px;
    height:36px;
    line-height: 36px;
    background:rgba(255,140,140,1);
    border-radius:4px;
  }
  .formItem>:first-child{
    font-size: 18px;
  }
  .measureBloodBox{
      margin-top: 60px;position: relative
  }
  .measureBloodBox span{
    color: red;position: absolute;top: -38px;left: 286px;
   }
  #bloodPressureMeasure{width:200px;
    height:40px;
    border-radius:20px;
    margin-left: 236px}
</style>
