import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'
import store from './store'
import h5Autocomplate from './common/H5Autocomplate/h5Autocomplate.vue'
import './assets/iconfont/iconfont.css'

import 'iview/dist/styles/iview.css'
// import echarts from 'echarts'
import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(iView)
Vue.component('h5-autocomplate', h5Autocomplate)
Vue.prototype.$echarts = echarts 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
