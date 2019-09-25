<template>
  <div class="ctBox">
    <Card class="Card">
      <div class="content">
        <div style="margin-bottom: 10px;font-size: 18px;font-weight: 700">
        </div>
        <div class="ctData">
          <table>
            <tr>
              <td style="width: 195px;" class="ctTableTitle">眼底*</td>
              <td style="width: 412px;" class="ctTableContent">
                <div class="table_item">
                  <Select class="select" v-model="yandi">
                    <Option value="正常">正常</Option>
                    <Option value="异常">异常</Option>
                  </Select>
                </div>
              </td>
              <td style="width: 195px;" class="ctTableTitle">皮肤</td>
              <td style="width: 412px;" class="ctTableContent">
                <div class="table_item">
                  <Select class="select" v-model="pifu">
                    <Option v-for="(item,index) in pfConfig" :key="index" :value="item">{{item}}</Option>
                  </Select>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ctTableTitle">巩膜</td>
              <td class="ctTableContent">
                <div class="table_item">
                  <Select class="select" v-model="gongmo">
                    <Option value='正常'>正常</Option>
                    <Option value='黄染'>黄染</Option>
                    <Option value='充血'>充血</Option>
                  </Select>
                </div>
              </td>
              <td class="ctTableTitle">淋巴结</td>
              <td class="ctTableContent">
                <div class="table_item">
                  <Select class="select" v-model="linbajie">
                    <Option value='未触及'>未触及</Option>
                    <Option value='锁骨'>锁骨</Option>
                    <Option value='腋窝'>腋窝</Option>
                  </Select>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width: 195px;height: 86px;" class="ctTableTitle">肺</td>
              <td class="ctTableContent">
                <div class="table_item">
                  <span class="span">桶装胸：</span>
                  <Select class="select" v-model="tzx">
                    <Option value='否'>否</Option>
                    <Option value='是'>是</Option>
                  </Select>
                </div>
                <div class="table_item">
                  <span class="span">呼吸音：</span>
                  <Select class="select" v-model="hxy">
                    <Option value='正常'>正常</Option>
                    <Option value='异常'>异常</Option>
                  </Select>
                </div>
                <div class="table_item">
                  <span class="span">罗音：</span>
                  <Select class="select" v-model="ly">
                    <Option value='无'>无</Option>
                    <Option value='干罗音'>干罗音</Option>
                    <Option value='干罗音'>干罗音</Option>
                  </Select>
                </div>
              </td>
              <td class="ctTableTitle">心脏</td>
              <td class="ctTableContent">
                <div class="table_item">
                  <span class="span">杂音：</span>
                  <Select class="select" style="margin-right: 20px;"  v-model="zayin">
                    <Option value='无'>无</Option>
                    <Option value='有'>有</Option>
                  </Select>
                </div>
                <div class="table_item">
                  <span class="span">心率：</span>
                  <Select class="select" v-model="xinlv">
                    <Option value='齐'>齐</Option>
                    <Option value='不齐'>不齐</Option>
                    <Option value='绝对不齐'>绝对不齐</Option>
                  </Select>
                </div>
              </td>
            </tr>
            <tr>
              <td style="width: 195px;height: 124px;" class="ctTableTitle">腹部</td>
              <td class="ctTableContent">
                <div class="table_item">
                  <span class="span" >压痛：</span>
                  <Select class="select" v-model="yatong">
                    <Option v-for="(item,index) in wyConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
                <div class="table_item">
                  <span class="span">包块：</span>
                  <Select class="select" v-model="baokuai">
                    <Option v-for="(item,index) in wyConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
                <div class="table_item">
                  <span class="span">肝大：</span>
                  <Select class="select" v-model="ganda">
                    <Option v-for="(item,index) in wyConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
                <div class="table_item">
                  <span class="span">脾大：</span>
                  <Select class="select" v-model="pida">
                    <Option v-for="(item,index) in wyConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
                <div class="table_item">
                  <span >移动性浊音：</span>
                  <Select class="select" v-model="ydxzy">
                    <Option v-for="(item,index) in wyConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
              </td>
              <td class="ctTableTitle">妇科*</td>
              <td class="ctTableContent">
                <div class="table_item">
                  <span >外阴*：</span>
                  <Select class="select" v-model="fk_waiy">
                    <Option v-for="(item,index) in ycConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
                <div class="table_item">
                  <span >阴道*：</span>
                  <Select class="select" v-model="fk_yind">
                    <Option v-for="(item,index) in ycConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
                <div class="table_item">
                  <span >宫颈*：</span>
                  <Select class="select" v-model="fk_gongj">
                    <Option v-for="(item,index) in ycConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
                <div class="table_item">
                  <span >宫体*：</span>
                  <Select class="select" v-model="fk_gongt">
                    <Option v-for="(item,index) in ycConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
                <div class="table_item">
                  <span >附体*：</span>
                  <Select class="select" v-model="fk_fuj">
                    <Option v-for="(item,index) in ycConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
              </td>
            </tr>
            <tr>
              <td  class="ctTableTitle">下肢水肿</td>
              <td class="ctTableContent">
                <div class="table_item">
                  <Select class="select" v-model="xzsz">
                    <Option v-for="(item,index) in xzszConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
              </td>
              <td class="ctTableTitle">足背动脉搏动*</td>
              <td class="ctTableContent">
                <div class="table_item">
                  <Select class="select" v-model="zbdmbd">
                    <Option v-for="(item,index) in zbdmbdConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
              </td>
            </tr>
            <tr>
              <td class="ctTableTitle">肛门指诊*</td>
              <td class="ctTableContent">
                <div class="table_item">
                  <Select class="select" v-model="gmzz">
                    <Option v-for="(item,index) in gmzzConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
              </td>
              <td class="ctTableTitle">乳腺*</td>
              <td class="ctTableContent">
                <div class="table_item">
                  <Select class="select" v-model="ruxian">
                    <Option v-for="(item,index) in rxConfig" :key="index" :value='item'>{{item}}</Option>
                  </Select>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Card>
    <Button @click="save()">保存</Button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ct',
  data () {
    return {
      // 皮肤配置
      pfConfig: ['正常', '潮红', '苍白', '发绀', '黄染', '色素沉着'],
      // 无有配置
      wyConfig: ['无', '有'],
      ycConfig: ['', '异常', '未见异常'],
      // 下肢水肿配置
      xzszConfig: ['无', '单侧', '双侧不对称', '双侧对称'],
      // 足背动脉搏动配置
      zbdmbdConfig: ['', '未触及', '触及双侧对称', '初级左侧弱或消失', '初级右侧弱或消失'],
      // 肛门指诊配置
      gmzzConfig: ['', '未及异常', '触痛', '包块', '前列腺异常'],
      // 乳腺配置
      rxConfig: ['', '未见异常', '乳房切除', '异常泌乳', '乳腺包块'],
      // 选中数据

      yandi: '',
      pifu: '',
      pifu_qt: '',
      gongmo: '',
      gongmo_qt: '',
      linbajie: '',
      linbajie_qt: '',
      tzx: '',
      hxy: '',
      ly: '',
      ly_qt: '',
      zayin: '',
      xinlv: '',
      yatong: '',
      baokuai: '',
      ganda: '',
      pida: '',
      ydxzy: '',
      xzsz: '',
      zbdmbd: '',
      gmzz: '',
      gmzz_qt: '',
      ruxian: '',
      ruxian_qt: '',
      fk_waiy: '',
      fk_yind: '',
      fk_gongj: '',
      fk_gongt: '',
      fk_fuj: ''
    }
  },
  created () {
    // 在这里请求已查体数据
    const _this = this
    if (_this.status == 1) {
      console.log('加载查体功能原始数据')
      var result = _this.result
      // 赋值
      _this.yandi = result.yandi
      _this.pifu = result.pifu
      _this.gongmo = result.gongmo
      _this.linbajie = result.linbajie
      _this.tzx = result.tzx
      _this.hxy = result.hxy
      _this.ly = result.ly
      _this.zayin = result.zayin
      _this.xinlv = result.xinlv
      _this.yatong = result.yatong
      _this.baokuai = result.baokuai
      _this.ganda = result.ganda
      _this.pida = result.pida
      _this.ydxzy = result.ydxzy
      _this.xzsz = result.xzsz
      _this.zbdmbd = result.zbdmbd
      _this.gmzz = result.gmzz
      _this.ruxian = result.ruxian
      _this.fk_waiy = result.fk_waiy
      _this.fk_yind = result.fk_yind
      _this.fk_gongj = result.fk_gongj
      _this.fk_gongt = result.fk_gongt
      _this.fk_fuj = result.fk_fuj
    }
  },
  methods: {
    save () {
      // 完整性校验
      const _this = this
      var data = {}
      data.yandi = _this.yandi
      data.pifu = _this.pifu
      data.gongmo = _this.gongmo
      data.linbajie = _this.linbajie
      data.tzx = _this.tzx
      data.hxy = _this.hxy
      data.ly = _this.ly
      data.zayin = _this.zayin
      data.xinlv = _this.xinlv
      data.yatong = _this.yatong
      data.baokuai = _this.baokuai
      data.ganda = _this.ganda
      data.pida = _this.pida
      data.ydxzy = _this.ydxzy
      data.xzsz = _this.xzsz
      data.zbdmbd = _this.zbdmbd
      data.gmzz = _this.gmzz
      data.ruxian = _this.ruxian
      data.fk_waiy = _this.fk_waiy
      data.fk_yind = _this.fk_yind
      data.fk_gongj = _this.fk_gongj
      data.fk_gongt = _this.fk_gongt
      data.fk_fuj = _this.fk_fuj
      data.tmh = _this.tmh
      console.log(JSON.stringify(data))
      var obj = my.savePersonalJktjData(JSON.stringify(data))
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
    font-size: 16px;
    border:1px solid #ccc;
    border-collapse:collapse;
    font-size: 16px;
  }
  table{
    margin-top: 10px;
    width: 1315px;
  }
  .ctTableTitle{
    font-weight: 700;
    text-align: center;
    height: 50px;
  }
  .table_item{
    margin-top: 5px;
    margin-left: 20px;
    display: inline-block;
  }
  .table_item .span{
    font-weight: 500;
    display: inline-block;
    width: 65px;
  }
  .table_item .select{
    width: 120px;
  }

</style>
