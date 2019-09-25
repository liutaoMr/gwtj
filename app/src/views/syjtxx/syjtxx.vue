<template>
  <div class="zzBox">
    <Card >
      <Row>
        <Col span="12">
          <h3 style="margin-bottom: 5px;">血型</h3>
          <div class="xxBox">
            <div class="item">
              <span class="item_span">血型:</span>
              <Select v-model="xuex" style="width:130px">
                <Option v-for="item in xxConfig" :value="item" :key="item">{{ item }}</Option>
              </Select>
            </div>
            <div class="item" style="margin-left: 80px;">
              <span class="item_span">RH*:</span>
              <Select v-model="rh" style="width:130px">
                <Option v-for="item in RHConfif" :value="item" :key="item">{{ item }}</Option>
              </Select>
            </div>
          </div>
          <h3 style="margin-bottom: 5px;">家庭结构</h3>
          <div class="jjjgBox">
            <div class="item">
              <span class="item_span">户主姓名:</span>
              <Input style="width:130px" v-model="hzxm"></Input>
            </div>
            <div class="item">
              <span class="item_span" style="margin-left: 10px;">身份证号:</span>
              <Input style="width:190px" v-model="hzsfz"></Input>
            </div>
            <div class="item">
              <span class="item_span" style="margin-right: 10px;">家庭人口数:</span>
              <Input style="width:130px" v-model="jtrysl"></Input>
            </div>
            <div class="item">
              <span class="item_span" style="margin-left: 10px;">家庭结构:</span>
              <Input style="width:190px" v-model="jtjg"></Input>
            </div>
            <div class="item">
              <span class="item_span" style="margin-right: 52px;">居住:</span>
              <Select style="width:270px" v-model="jzqk">
                <Option v-for="item in jzqkConfig" :value="item" :key="item">{{ item }}</Option>
              </Select>
            </div>
          </div>
        </Col>
        <Col span="12" style="padding-left: 16px;">
          <h3 style="margin-bottom: 5px;">家庭膳食</h3>
          <div class="jtssBox">
            <div class="jtss_item">
              <span style="margin-right: 50px;">过去三个月内？常驻家中一起吃饭的人数？</span>
              <Input style="width:190px;" v-model="czcfrs"></Input>
            </div>
            <div class="jtss_item">
              <span style="margin-right: 57px;">其中一起吃饭的人低于6岁的儿童有几人？</span>
              <Input style="width:190px;" v-model="etsl"></Input>
            </div>
            <div class="jtss_item">
              <span style="margin-right: 50px;">过去三个月，您家平均一个月吃多少克盐？</span>
              <Input style="width:190px;margin-lef: 10px;" v-model='sheyan' ></Input>
            </div>
            <div class="jtss_item">
              <span style="margin-right: 36px;">过去三个月，您家平均一个月吃多少克酱油？</span>
              <Input style="width:190px;margin-lef: 10px;" v-model='jiangyou' ></Input>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
    <Button @click="save()">保存</Button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      xxConfig: ['A', 'B', 'AB', 'O'],
      jzqkConfig: ['与成年子女居住', '与子孙三代(四代)同住', '夫妻二人同住', '独居', '计划生育特殊家庭'],
      RHConfif: ['阴性', '阳性'],
      xuex: '',
      rh: '',
      hzxm: '',
      hzsfz: '',
      jtrysl: '',
      jtjg: '',
      jzqk: '',

      // 家庭膳食
      // 结核排查
      jhpc: '',
      czcfrs: '',
      etsl: '',
      sheyan: '',
      jiangyou: ''

    }
  },
  created () {
    // 在这里请求已查体数据
    const _this = this
    if (_this.status == 1) {
      console.log('加载食盐-家庭-血型原始数据')
      var result = _this.result
      // console.log(result)
      _this.xuex = result.xuex
      _this.rh = result.rh
      _this.hzxm = result.hzxm
      _this.hzsfz = result.hzsfz
      _this.jtrysl = result.jtrysl
      _this.jtjg = result.jtjg
      _this.jzqk = result.jzqk
      _this.jhpc = result.jhpc
      _this.czcfrs = result.czcfrs
      _this.etsl = result.etsl
      _this.sheyan = result.sheyan
      _this.jiangyou = result.jiangyou
    }
  },
  methods: {
    save () {
      // 完整性校验
      const _this = this
      var data = {}
      data.tmh = _this.tmh
      data.xuex = _this.xuex
      data.rh = _this.rh
      data.hzxm = _this.hzxm
      data.hzsfz = _this.hzsfz
      data.jtrysl = _this.jtrysl
      data.jtjg = _this.jtjg
      data.jzqk = _this.jzqk
      data.jhpc = _this.jhpc
      data.czcfrs = _this.czcfrs
      data.etsl = _this.etsl
      data.sheyan = _this.sheyan
      data.jiangyou = _this.jiangyou
      var obj = my.savePersonalJktjData(JSON.stringify(data))
      var result = JSON.parse(obj.savePersonalJktjData)
      // console.log(result)
      if (result.msg == 1) {
        _this.$Message.success('家庭膳食保存成功')
      }
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
.xxBox{
  height: 110px;
  border-radius: 4px;
  border: 1px solid rgba(6,169,237,1);
  padding: 10px 50px;
}
.item{
  margin-top: 30px;
  margin-left: 10px;
  display: inline-block;
}
.item_span{
  margin-right: 25px;
}
.jjjgBox{
  height: 250px;
  border-radius: 4px;
  border: 1px solid rgba(6,169,237,1);
  padding: 30px 50px;
}
.jtssBox{
  height: 389px;
  border-radius: 4px;
  border: 1px solid rgba(6,169,237,1);
  padding: 30px 50px;
}
.jtss_item{
  padding-top: 30px;
}

</style>
