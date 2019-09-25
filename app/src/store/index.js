import Vue from 'vue'
import Vuex from 'vuex'
import baseInfor from './modules/baseInfor'
import returnData from './modules/returnData'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)

// 创建实例
const store = new Vuex.Store({
  modules: {
    baseInfor,
    returnData
  },
  getters,
  mutations
})

export default store
