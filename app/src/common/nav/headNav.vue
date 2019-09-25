<template>
    <div class="nav">
        <Row style="background:#278AEF; height: 36px;">
          <Col span="17">
            <div class="imgBox">
              <img src="../../../public/images/logo.png" alt="">
            </div>
            <div class="imgBox">体检信息采集系统</div>
            <Button @click="goback()">返回扫码页面</Button>
          </Col>
          <Col span="7" >
            <div class="nav_item_1">
                <select v-model="clinicSelected" id="selecte" class="shortselect" style="width:110px;margin-top: 1px;">
                  <option v-for="item in clinicOption" :value="item.value" :key="item.value">{{ item.label }}</option>
                </select>
            </div>
            <div class="nav_item">
              <i class="iconfont icon-yonghu"></i>
              <span style="margin-left: 5px;">admin</span>
            </div>
            <div class="border"></div>
            <div class="nav_item">
              <i class="iconfont icon-shezhi"></i>
            </div>
            <div class="border"></div>
            <div class="nav_item_3">
              <ul class="sys-commands">
                  <li n-ui-command="close">
                    <Icon class="fa fa-close" type="md-close" />
                  </li>
                  <li n-ui-command="maximize">
                      <Icon  class="fa fa-window-maximize" type="ios-photos-outline" />
                  </li>
                  <li n-ui-command="minimize">
                      <Icon class="fa fa-window-minimize" type="md-remove" />
                  </li>
              </ul>
            </div>
          </Col>
        </Row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'headNav',
  data () {
    return {
      modal1: false,
      // 全屏
      fullscreen: false,
      theme1: 'primary',
      clinicOption: [
        {
          value: '37021301',
          label: '沧口社区卫生院'
        },
        {
          value: 'heshan',
          label: '河山镇卫生室'
        }
      ],
      clinicSelected: ''
    }
  },
  methods: {
    handleFullScreen () {
      let element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    ok () {
      this.$router.push('/login')
    },
    cancel () {
    },
    goback () {
      this.$router.push('/home/TjRegistration')
    },
    logOut () {
      this.modal1 = true
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>
  i{
    font-size: 18px;
    color: white;
  }
  .nav{
    position: relative;
  }
  .imgBox{
    float:left ;
    display: inline-block;
    height: 36px;
    line-height: 36px;
    font-size:14px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
  .ivu-select-single .ivu-select-selection{
    height: 25px!important;
  }
  .nav_item_1{
    display: inline-block;
  }
  .nav_item{
    margin-left: 10px;
    height: 36px;
    color: white;
    font-size: 18px;
    display: inline-block;
    padding: 0px 15px;
  }
  .border{
    position: absolute;
    top:6px;
    display: inline-block;
    background:white;
    height: 20px;
    width: 1px;
  }
  .nav_item_3{
    margin-left: 20px;
    display: inline-block;
  }
  .sys-commands li{
    margin: 0px 7px;
    list-style: none;
    float: right;
  }
  .sys-commands li i{
    color: white;
    font-size: 16px;
  }


.shortselect{
    background:#fafdfe;
    height:28px;
    width:180px;
    line-height:28px;
    border:1px solid #9bc0dd;
    -moz-border-radius:2px;
    -webkit-border-radius:2px;
    border-radius:4px;
}


</style>
