<template>
    <div>
     <div class="TjHandle">
       <Row style="padding: 6px">
         <Col span="13">
           <div class="djTableBox" style="border-top: 6px solid #06A9EDFF;">
            <nav>
              <div class="item">
                <div class="ydj">
                  <span>已登记</span>
                </div>
              </div>
              <div class="item" style="margin-left: 12px;font-weight:500;color:rgba(51,51,51,1);">
                <span>条码号</span>
                <Input placeholder="条码号" v-model='tmNumber' @on-enter="tiaomahaoEnter()"  autofocus ref='stxm' style="width: 160px;margin:0px 15px;"></Input>
              </div>
              <div class="item">
                <Button type="primary" @click=handleXz() >新增</Button>
              </div>
              <div class="item" style="margin-left: 20px;">
                <Checkbox v-model='wjry' @on-change='wjryHandle()' ></Checkbox><span>只看未检人员</span>
              </div>
              <div class="item" style="margin-left: 100px;">
                <span style="margin-right: 5px;">共8条</span>
                <Button type="success">刷新</Button>
              </div>
            </nav>
            <div class="tableBox">
              <Table border  height="200" :columns="TmbTableConfig" :data="TmbTableData"></Table>
            </div>
           </div>
         </Col>
         <Col span="11">
           <div class="tjTableBox" style="border-top: 6px solid #009944FF;">
             <nav>
               <div class="item">
                <div class="ytj">
                   <span>已体检</span>
                </div>
               </div>
               <div class="item" style="margin-left: 10px;font-weight:500;color:rgba(51,51,51,1);">
                 <span style="margin-right: 10px;">时间段</span>
                 <DatePicker
                 format="yyyy/MM/dd"
                 type="daterange"
                 split-panels
                 placeholder="Select date"
                 v-model='dataTotal'
                 style="width: 200px"
                 @on-change="dataTotal=$event"
                 ></DatePicker>
               </div>
               <div class="item" style="margin-left: 10px;font-weight:500;color:rgba(51,51,51,1);">
                 <span>状态</span>
                 <Select style="width: 80px;margin:0 30px;" v-model='status'>
                   <Option value="全部">全部</Option>
                   <Option value="未上传">未上传</Option>
                   <Option value="已上传">已上传</Option>
                 </Select>
               </div>
               <div class="item" style="margin-left: 25px;">
                 <Button type="error" style="margin-left: 10px">上传</Button>
               </div>
             </nav>
             <div class="tableBox">
               <Table border  height="200" :columns="localTableConfig" :data="localTableData"></Table>
             </div>
           </div>
         </Col>
       </Row>
     </div>
     <h1>{{scanpage}}</h1>
     <h2>{{dataTotal[0]}}</h2>
     <Button @click="getTable()">点击获取条码本检查状态</Button>
     <Modal
         v-model="modal"
         title="提示"
         @on-cancel="cancel"
         @on-ok="ok">
         <p>该条码号已查体！确定修改？</p>
     </Modal>
     <Button @click="text()">获取中医体质数据</Button>
      <Button @click="fetchLocalUploadStatus()">获取本地上传状态</Button>
     <span>中医体质数据</span>{{obj}}
    </div>
</template>

<script>
// import HeadNav from '../../common/nav/headNav'
import { mapGetters } from 'vuex'
export default {
  name: 'TjRegistration',
  // components: { HeadNav },
  data () {
    return {
      modal: false,
      wjry: false,
      path: '',
      obj: '',
      TmbTableConfig: [
      ],
      TmbTableData: [],
      status: '已上传',
      dataTotal: [],
      localTableConfig: [],
      localTableData: [],
      tmNumber: '1234567890121'
    }
  },
  created () {

  },
  mounted () {
    // my.endFondMethod()
    // console.log(1)
    this.$refs.stxm.focus()
  },
  methods: {
    text () {
      var data = {}
      data.tmh = '1234567890121'
      var obj = my.fetchPersonalZytzData(JSON.stringify(data))
      this.obj = obj
    },
    wjryHandle () {
      const _this = this
      if (this.wjry == true) {
        var obj = my.fetchTmbCheckState(JSON.stringify(1))
        var result = obj.fetchTmbCheckState
        result = JSON.parse(result)
        result = result.data
        console.log(result)
        _this.TmbTableConfig = result.columns
        _this.TmbTableData = result.tabledata
      }
    },
    fetchLocalUploadStatus () {
      const _this = this
      var data = {}
      data.status = _this.status
      if (_this.dataTotal.length !== 0) {
        data.startdate = _this.dataTotal[0]
        data.enddate = _this.dataTotal[1]
      } else {
        data.startdate = ''
        data.enddate = ''
      }
      console.log(JSON.stringify(data))
      var obj = my.fetchLocalUploadStatus(JSON.stringify(data))
      var result = obj.fetchLocalUploadStatus
      result = JSON.parse(result)
      result = result.data
      _this.localTableConfig = result.columns
      _this.localTableData = result.tabledata
      console.log(result)
    },
    ok () {
      this.$router.push('/home/handle')
    },
    cancel () {
      console.log('取消修改条码号')
    },
    handleXz () {
      this.tiaomahaoEnter()
    },
    tiaomahaoEnter () {
      // 跳转数组第一个的路由
      // console.log(this.scanPage[0].path)
      // var path = this.scanPage[0].path
      // this.path = path
      var tmh = this.tmNumber
      if (tmh.length !== 13 || !/^[0-9]+$/.test(tmh)) {
        alert('请输入正确的条码号')
      } else {
        // console.log(tmh)
        var obj = my.isExists(tmh)
        var result = JSON.parse(obj.isExists)
        // console.log(result.data.status)
        this.$store.commit('getTmh', this.tmNumber)
        this.$store.commit('getStatus', result.data.status)
        // 在这里判断体检是新增数据还是修改数据
        // 如果是新增直接跳转操作页面 带条码号和一个状态去Vuex表明是新增
        console.log(result.data.status)
        if (result.data.status == 0) {
          console.log('准备跳转操作页面')
          this.$router.push('/home/handle')
        }
        // 如果是修改跳转操作页面 带条码号和一个状态去Vuex标明是修改
        if (result.data.status == 1) {
          var ob = my.fetchPersonalJktjData(tmh)
          var res = ob.fetchPersonalJktjData
          res = JSON.parse(res)
          res = res.data
          // 提交数据到Vuex
          this.$store.commit('getBaseResult', res)

          // 出询问窗体
          this.modal = true
        }
      }
    },
    getTable () {
      const _this = this
      var obj = my.fetchTmbCheckState(JSON.stringify(0))
      var result = obj.fetchTmbCheckState
      result = JSON.parse(result)
      result = result.data
      console.log(result)
      _this.TmbTableConfig = result.columns
      _this.TmbTableData = result.tabledata
    }
  },
  computed: {
    ...mapGetters(['scanpage'])
  }
}
</script>

<style scoped>
.ivu-btn {
  font-size: 14px!important;
}
.TjHandle{
 font-size: 14px!important;
 font-family:SimHei;
 font-weight:400;
 color:rgba(153,153,153,1);
 border-radius:6px;
}
.djTableBox{
  background: white;
  margin-right: 10px;
  border-radius:6px;
}
.tjTableBox{
  background: white;
}
.tableBox{
  padding: 10px 8px;
}
nav{
  height: 48px;
  border-bottom: 1px solid #EEEEEE;
  margin-bottom: 10px;
  margin-left: 5px;
}
.item{
  margin-top: 8px;
  display: inline-block;
}
.ydj{
  margin-left: -5px;
  line-height: 29px;
  color: white;
  width:66px;
  height:29px;
  background:rgba(6,169,237,1);
  border-radius:0px 15px 15px 0px;
}
.ytj{
  margin-left: -5px;
  line-height: 29px;
  color: white;
  width:66px;
  height:29px;
  background:rgba(0,153,68,1);
  border-radius:0px 15px 15px 0px;
  color:rgba(255,255,255,1);
}

</style>
