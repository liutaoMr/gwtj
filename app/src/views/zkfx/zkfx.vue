<template>
  <div class="zjfxBox">
    <div class="handleNav">
      <ul>
        <li v-for="(item, index) in zkfxPage" @click="navClick(index,item)" :key='index' :class="{tabActive: curTab == index}">
          {{item.title}}
        </li>
      </ul>
      <Button type="primary" id="back" @click="backHandle()">返回</Button>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: 'zkfx',
  data () {
    return {
      curTab: 0,
      zkfxPage: [
        { path: '/home/zkfx/sgfx', title: '身高分析' },
        { path: '/home/zkfx/yyfx', title: '用药分析' },
        { path: '/home/zkfx/xdfx', title: '心电分析' },
        { path: '/home/zkfx/bcfx', title: 'B超分析' },
        { path: '/home/zkfx/xyfx', title: '血压分析' },
        { path: '/home/zkfx/zlfx', title: '自理能力' },
        { path: '/home/zkfx/zytzfx', title: '中医体质' }
      ]

    }
  },
  methods: {
    navClick (index, item) {
      this.curTab = index
      this.$router.push(item.path)
    },
    backHandle () {

    }

  },
  mounted () {
  },
  computed: {

  }

}
</script>

<style scoped>
  .zjfxBox{
    margin: 5px;
    background: white;
    border-radius: 5px;
  }
  .handleNav{
     position: relative;
     height: 45px;
     border-bottom: 1px solid #EEEEEE;
  }
  #back{
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
  .content{
    height: 684px;
  }

</style>
