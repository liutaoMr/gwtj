<template>
  <div class="zzBox">
    <Card >
      <div class="zzContet">
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
        <Input style="width: 150px;" v-model='zzqt' @change.native="symOther()"></Input>
      </div>
    </Card>
    {{zz}}
    <Button @click="save()">保存</Button>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['isContinu'],
  data () {
    return {
      symptomConfig: ['无症状', '头疼', '头晕', '心悸', '胸闷', '慢性咳嗽', '胸疼 咳痰', '呼吸困难', '多饮', '多尿', '体重下降', '乏力', '关节肿痛', '视力模糊', '手脚麻木', '尿急', '尿痛', '便秘', '腹泻', '恶心呕吐', '眼花', '耳鸣', '乳房肿痛'],
      zz: [],
      zzqt: ''
    }
  },
  created () {
    // 在这里请求已查体数据
    const _this = this
    if (_this.status == 1) {
      console.log('加载症状原始数据')
      var result = _this.result
      _this.zz = result.zz.split(',')
      _this.zzqt = result.zzqt
    }
  },
  methods: {
    save () {
      const _this = this
      // 完整性校验
      if (_this.zz.length == 0 && _this.zzqt == '') {
        _this.$Message.error('症状不能为空')
        _this.$emit('ContinuChanged', 0)
      } else {
        const _this = this
        var data = {}
        data.zz = _this.zz.join(',')
        data.zzqt = _this.zzqt
        data.tmh = _this.tmh
        console.log(JSON.stringify(data))
        var obj = my.savePersonalJktjData(JSON.stringify(data))
      }
    },
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
  mounted () {
  },
  computed: {
    ...mapGetters(['status', 'tmh', 'result'])
  }
}
</script>

<style scoped>
  .zzContet{
    width: 795px;
    padding-left: 65px;
  }
  .ivu-checkbox-wrapper.ivu-checkbox-large {
      font-size: 18px!important;
      font-weight: 500;
      margin-top: 10px;
  }

</style>
