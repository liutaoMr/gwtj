<template>
  <div class="handleBox">
    <person-type-nav></person-type-nav>
    <div class="handleNav">
      <ul>
        <li v-for="(item, index) in scanPage" @click="navClick(index)" :key='index' :class="{tabActive: curTab == index}">
          {{item.title}}
        </li>
      </ul>
      <Button type="primary" id="totalSave" @click="submit()">保存</Button>
    </div>
    <div v-for="(item, index) in asnyComp" :key="index" :class="[curTab == index ? 'paneActive': 'paneHidden']">
      <components :is="item"  :isContinu="isContinu" v-on:ContinuChanged='gaibiancanshu($event)' :ref="'child' + index"></components>
      {{'child' + index}}
      {{'人员是否查询' + status }}
    </div>
    <!-- <components v-for="(item, index) in asnyComp" :key="index" :is="item" :ref="'child'+index" :class="[curTab == index ? 'paneActive': 'paneHidden']"></components> -->
  </div>
</template>

<script>
import PersonTypeNav from '@/common/personTypeNav/personTypeNav'
import { mapGetters } from 'vuex'
export default {
  name: 'handle',
  components: { PersonTypeNav },
  data () {
    return {
      curTab: 0,
      isContinu: '1',
      scanPage: []
    }
  },
  created () {
    // 此处可通过调用后台方法返回scanPage
    this.scanPage = [
      { path: 'zz/zz', title: '症状', name: 'zz' },
      { path: 'heightWeight/heightWeight', title: '身高体重', name: 'heightWeight' },
      { path: 'bloodPressure/bloodPressure', title: '血压', name: 'zlnl' },
      { path: 'bChao/bSuper', title: 'B超', name: 'bChao' },
      { path: 'zqgn/zqgn', title: '脏器功能', name: 'zqgn' },
      { path: 'xcwt/xcwt', title: '现存问题', name: 'xcwt' },
      { path: 'ct/ct', title: '查体', name: 'ct' },
      { path: 'zlnl/zlnl', title: '自理能力', name: 'zlnl' },
      { path: 'lifeStyle/lifeStyle', title: '生活方式', name: 'lifeStyle' },
      { path: 'zytz/zytz', title: '中医体质', name: 'zytz' },
      { path: 'zyyy/zyyy', title: '住院用药', name: 'zyyy' },
      { path: 'syjtxx/syjtxx', title: '食盐-家庭-血型', name: 'syjtxx' }
    ]
  },
  computed: {
    asnyComp () {
      let plugs = []
      this.scanPage.forEach(item => {
        plugs.push(() => import(`@/views/${item.path}`))
      })
      return plugs
    },
    ...mapGetters(['status', 'tmh', 'scanpage'])
  },
  methods: {
    navClick (index) {
      this.curTab = index
    },
    gaibiancanshu (code) {
      this.isContinu = code
    },
    submit () {
      // console.log('总保存')
      const _this = this
      _this.isContinu = '1'
      for (let i = 0; i < this.scanPage.length; i++) {
        // 如果子组件数据完整性判断不通过在这里阻止下一个子组件进行保存
        if (_this.isContinu == 0) { break }
        this.$refs['child' + i][0].save()
        this.curTab = i
      }
      if (_this.isContinu == 1) {
        setTimeout(function () {
          _this.$router.push('/home/TjRegistration')
        }, 2000)
      }
    }
  }
}
</script>

<style scoped>
  .handleBox{
    background: white;
  }
  .handleNav{
     position: relative;
     height: 35px;
  }
  #totalSave{
    position: absolute;
    right: 10px;
    top:5px;
  }
  .handleNav ul li{
    cursor:pointer;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    padding: 0 10px;
    margin-right:5px;
    float: left;
    list-style: none;
    text-align: center;

  }
  .handleNav ul li.tabActive{
    color: #2d8cf0;
    border-bottom: 2px solid #2d8cf0;
    font-weight: 700;
  }
  .paneActive {
    display: block;
    margin-top: 5px;
  }
  .paneHidden {
    display: none;
  }
</style>
