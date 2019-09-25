<template>
  <div class="loginBox">
    <div class="login_nav">
      <div class="app-sys-command-container">
         <ul class="sys-commands">
             <!--Use <n-ui-command> attribute to control form's system commands. -->
             <li n-ui-command="close">
               <Icon class="fa fa-close" type="md-close" />
             </li>
             <!--Use <n-ui-command> attribute to control form's system commands. -->
             <li n-ui-command="maximize">
               <Icon  class="fa fa-window-maximize" type="ios-photos-outline" />
             </li>
             <!--Use <n-ui-command> attribute to control form's system commands. -->
             <li n-ui-command="minimize">
                 <Icon class="fa fa-window-minimize" type="md-remove" />
             </li>
         </ul>
      </div>
    </div>
    <div  class="login">
      <h1>登录</h1>
      <div class="log-content">
        <div class="login-item">
          <h2>用户名</h2>
          <Input type="text"  prefix="ios-person-outline" v-model="infor.username" placeholder="用户名" style="height: 50px;" class="input">
          </Input>
        </div>
        <div class="login-item">
          <h2>密码</h2>
          <Input type="password" prefix="ios-lock-outline" v-model="infor.password" placeholder="密码" class="input" @keyup.enter.native="enterLogin()">
          </Input>
          <h3 v-show="on">用户名或密码错误</h3>
        </div>
        <Button type="primary" id="login" size="large" @click="handleSubmit()" >登录</Button>
        <Button type="primary" size="large" @click="entersaoma()" >扫码页面</Button>
      </div>
    </div >

  </div>
</template>

<script>
export default {
  data () {
    return {
      on: false,
      infor: {
        username: 'admin',
        password: '1'
      }
    }
  },
  methods: {
    handleSubmit () {
      var obj = my.login(JSON.stringify(this.infor))
      var result = obj.login
      result = JSON.parse(result)
      // console.log(result)
      if (result.msg == '1') {
        this.on = false
        // 提交基础信息到Vuex
        console.log(result.data.scanPage)
        this.$store.commit('getBaseInfor', result.data.user)
        this.$store.commit('getBaseScanPage', result.data.scanPage)
        var path = result.data.homePage
        path = path.replace(/\\/g, '')
        // 验证用户名密码正确后跳转路由
        this.$router.push(path)
      } else if (result.msg == '0') {
        this.on = true
      } else {
        this.$Message.error('参数错误')
      }
    },
    enterLogin () {
      this.handleSubmit()
    },
    entersaoma () {
      this.$router.push('/home/TjRegistration')
    }
  }
}
</script>

<style scoped>
  .loginBox{
    position: relative;
    width: 100%;
    height: 768px;
    background-image: url("../../../public/images/bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .sys-commands{
    width: 100%;
    height:32px;
    background:linear-gradient(90deg,rgba(6,169,237,1) 0%,rgba(46,132,240,1) 100%);
  }
  .sys-commands li{
    width: 40px;
    list-style: none;
    float: right;
  }
  .sys-commands li i{
    color: white;
    line-height:32px ;
    font-size: 18px;
  }
  .login{
    width:420px;
    height:430px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 16px 0px rgba(57,57,57,0.26);
    border-radius:10px;
    position: absolute;
    left: 805px;
    top: 123px;
    background: white;
  }
  .login h1{
    color: white;
    height: 76px;
    line-height: 76px;
    font-weight: 600;
    font-size: 24px;
   text-align: center;margin-bottom: 40px;
    background:linear-gradient(90deg,rgba(6,169,237,1) 0%,rgba(46,132,240,1) 100%);
    border-radius:10px 10px 0px 0px;
  }
  .log-content .input{
    width: 260px;
    height: 50px;
    margin: 10px 0;
  }
  #login{
    margin: 30px 83px 20px;
    width: 254px;height: 48px;
    border-radius:28px;
    background:linear-gradient(90deg,rgba(6,169,237,1) 0%,rgba(46,132,240,1) 100%);
  }
  .login-item{
    margin-left: 80px;
  }
  .login-item h3{
    position: absolute;
    top: 300px;
    color: red;
    margin-left: 80px;
  }
</style>
