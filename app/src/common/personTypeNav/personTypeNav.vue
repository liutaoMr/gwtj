<template>
  <div class="simpleInfor">
    <Row style="height: 36px" class="inforNav">
      <Col span="6">
        <span style="margin-left: 30px">条码号：</span>
        <span>{{tmh}}</span>
        <span>{{xm}}</span>
        <span>{{sex}}</span>
        <span>{{age}}</span>
      </Col>
      <Col span="18">
        <div class="personnelType">
          <span>{{ryll}}</span>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'personTypeNav',
  data () {
    return {
      xm: '王二',
      sex: '男',
      age: '22',
      ryll: '高血压'
    }
  },
  created () {
    // 在这里请求已查体数据
    const _this = this
    if (_this.status == 1) {
      var tmh = this.tmh
      var obj = my.fetchPersonalJktjData(tmh)
      var result = JSON.parse(obj.fetchPersonalJktjData)
      // console.log(result)
    }
  },
  computed: {
    ...mapGetters(['status', 'tmh'])
  }

}
</script>

<style scoped>
  .simpleInfor{
    width: 100%;
    background: #F4F3FC;
  }
.inforNav span{
  margin: 0 10px;
  line-height: 36px;
}
  .personnelType span{
    font-weight: 700;
  }
</style>
