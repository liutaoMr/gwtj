<template>
 <div class="cardBox">
  <Card class="Card">
    <div class="content">
      <div style="margin-bottom: 10px;font-size: 18px;font-weight: 700">
      </div>
      <div class="contentData">
        <Row>
          <Col span="14">
            <div class="content-left">
              <Form style="padding:40px 20px;text-align: center" inline>
                <FormItem label="身高(cm)" :label-width="120" class="formItem">
                  <Input type="text" ref="height" v-model="height" placeholder="请输入身高" style="width:120px;">
                  </Input>
                  <p class="form-notice" v-show="200<height||height<80">身高填写错误</p>
                </FormItem>
                <FormItem label="腰围(cm)" :label-width="120" class="formItem">
                  <Input type="text" ref="waistline" v-model="waistline" placeholder="请输入腰围" style="width:120px;">
                  </Input>
                </FormItem>
                <FormItem label="体重(kg)" :label-width="120" class="formItem">
                  <Input type="text" ref="weight" v-model="weight" placeholder="请输入体重" style="width:120px;">
                  </Input>
                </FormItem>
                <FormItem label="体温(°C)" :label-width="120" class="formItem">
                  <Input type="text" ref="temperature" v-model="temperature" placeholder="请输入体温" style="width:120px;">
                  </Input>
                </FormItem>
                <FormItem label="BMI(kg/㎡)" :label-width="120" class="formItem" style="margin-right: 258px">
                  <Input type="text" v-model="bmiCompute" style="width:120px;">
                  </Input>
                </FormItem>
                <FormItem class="measureHeightBox">
                  <span>连接身高体重仪失败</span>
                  <Button size="large" type="primary" @click="heightWeightMeasure()" id="heightMeasure">测量</Button>
                </FormItem>
                <FormItem label="端口号" :label-width="80" style="margin-top: 20px;">
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
                <p>BMI>28 超重!</p>
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

  <span>`子组件{{isContinu}}`</span>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'heightWeight',
  props: ['isContinu'],
  data () {
    return {
      height: '',
      weight: '',
      waistline: '',
      temperature: '',
      BMI: '',
      port: '8080'
    }
  },
  created () {
    // 在这里请求已查体数据
    const _this = this
    if (_this.status == 1) {
      console.log('加载身高体重原始数据')
      var result = _this.result
      // console.log(result)
      _this.height = result.sg
      _this.weight = result.tz
      _this.waistline = result.yaowei
      _this.temperature = result.tiwen
      _this.BMI = result.bmi
    }
  },
  methods: {
    heightWeightMeasure () {
      alert('身高体重测量')
    },
    save () {
      var _this = this
      if (_this.height == '' || _this.height == null) {
        _this.$refs.height.focus()
        _this.$Message.warning('身高不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.weight == '' || _this.weight == null) {
        _this.$refs.weight.focus()
        _this.$Message.warning('体重不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.waistline == '' || _this.waistline == null) {
        _this.$refs.waistline.focus()
        _this.$Message.warning('腰围不能为空')
        _this.$emit('ContinuChanged', 0)
      } else if (_this.temperature == '' || _this.temperature == null) {
        _this.$refs.temperature.focus()
        _this.$Message.warning('体温不能为空')
        _this.$emit('ContinuChanged', 0)
      } else {
        // 通过完整性校验
        console.log('身高体重数据完整')
        var data = {}
        data.sg = parseInt(_this.height)
        data.tz = parseInt(_this.weight)
        data.yaowei = parseInt(_this.waistline)
        data.tiwen = parseInt(_this.temperature)
        data.bmi = parseInt(_this.BMI)
        data.tmh = parseInt(_this.tmh)
        console.log(JSON.stringify(data))
        var obj = my.savePersonalJktjData(JSON.stringify(data))
        var result = JSON.parse(obj.savePersonalJktjData)
        // console.log(result)
        if (result.msg == 1) {
          console.log('身高体重保存成功')
        }
      }
    }
  },
  computed: {
    // 根据身高体重生成BMI
    bmiCompute: function () {
      const that = this
      var height = that.height / 100
      var weight = that.weight
      var bmiCompute = weight / (height * height)
      bmiCompute = bmiCompute.toFixed(2)
      that.BMI = bmiCompute
      return bmiCompute
    },
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
  .form-notice{
    color: red;
    position: absolute;
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
  .measureHeightBox{
    margin-top: 20px;
    position: relative;
  }
  .measureHeightBox span{
    color: red;position: absolute;top: -30px;left: 136px;
  }

  #heightMeasure{width:200px;
    height:40px;
    border-radius:20px;
    margin-left: 99px}
</style>
