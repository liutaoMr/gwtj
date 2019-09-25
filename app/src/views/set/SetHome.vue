<template>
  <div class="sethome">
    <Row style="margin-top:40px" class="dataManageBox">
      <Col span="22">
        <div class="borderNav yellow"></div>
        <div class="dataManage">数据管理</div>
      </Col>
      <Col span="2">
        <Button type="primary">返回</Button>
      </Col>
    </Row>
    <div class="dataManagecontent">
      <div class="contenul" v-for="(item,index) in dataManageConfig" :key=index>
        <div class="contenLi" @click="sjglGoPath(item.path)">
          <i :class="item.icon"></i>
        </div>
        <p>{{item.text}}</p>
      </div>

    </div>
    <Row>
      <Col span="22" style="margin-top:40px">
        <div class="borderNav green"></div>
        <div class="dataManage">系统设置</div>
      </Col>
      <Col span="2">
      </Col>
    </Row>
    <div class="sysSetContent">
      <div class="contenul" v-for="(item,index) in systermSetConfig" :key=index>
        <div class="contenLi" @click="xtszGoPath(item.path)">
          <i :class="item.icon"></i>
        </div>
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetHome',
  data () {
    return {
      dataManageConfig: [
        { icon: 'iconfont icon-shujuyilanbiao', text: '数据总检', path: '/home/inforZongjian' },
        { icon: 'iconfont icon-zhiliang', text: '质控分析', path: '/home/zkfx' },
        { icon: 'iconfont icon-xiejianbaogao', text: '检验分析', path: '/home/yfx' },
        { icon: 'iconfont icon-statistics', text: '工作量统计', path: '/gzltj' }
      ],
      systermSetConfig: [
        { icon: 'iconfont icon-yiliaojigou', text: '机构设置', path: '/jgsz' },
        { icon: 'iconfont icon-renqun1', text: '人员设置', path: '/rysz' },
        { icon: 'iconfont icon-mokuai1-copy', text: '模块设置', path: '/home/mkSet' },
        { icon: 'iconfont icon-shebei', text: '设备设置', path: '/sbsz' },
        { icon: 'iconfont icon-jibengongwei', text: '公卫设置', path: '/gwsz' },
        { icon: 'iconfont icon-daoru', text: '信息导入', path: '/xxdr' }
      ]
    }
  },
  methods: {
    sjglGoPath (path) {
      this.$router.push(path)
    },
    xtszGoPath (path) {
      this.$router.push(path)
    }
  },
  mounted () {
  }

}
</script>

<style scoped>
  .sethome{
    width: 100%;
    height: 800px;
    background: white;
  }
  .borderNav{
    float: left;
    margin: 8px 16px 0 40px;
    width:6px;
    height:16px;
    border-radius:3px;
  }
  .yellow{
    background:linear-gradient(232deg,rgba(253,154,76,1),rgba(255,213,83,1));
  }
  .green{
    background: #00F01C;
  }
  .dataManage{
    float: left;
    font-size:20px;
    font-weight: 400;
  }
  .dataManage .content div{
    width: 72px;
      height: 72px;
  }
  .contenul{
    text-align: center;
    width: 80px;
    height: 100px;
    margin-top: 20px;
    margin-left: 63px;
    float: left;
  }
  .contenul p{
    font-size: 16px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(153,153,153,1);
  }
  .dataManagecontent{
    width: 100%;
    height: 120px;
  }
  .dataManagecontent .contenLi{
    cursor:pointer;
    line-height: 72px;
    width:72px;
    height:72px;
    background:rgba(251,245,238,1);
    border-radius:20px;
  }
  .sysSetContent .contenLi{
    cursor:pointer;
    line-height: 72px;
    width:72px;
    height:72px;
    background:#EBFDF0;
    border-radius:20px;
  }
  .dataManagecontent .contenLi .iconfont{
    color:#FFD553;
    font-size: 40px;
  }
  .sysSetContent .contenLi .iconfont{
    color:#00F01C;
    font-size: 40px;
  }
  .content{
    width:100%;
    height: 160px;
  }
</style>
