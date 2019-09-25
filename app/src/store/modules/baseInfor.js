const baseInfor = {
  state: {
    user: {
      real_name: '',
      org_name: '',
      org_id: ''
    },
    scanpage: [],
    result: {}

  },
  mutations: {
    getBaseInfor (state, payload) {
      state.user = payload
    },
    getBaseScanPage (state, payload) {
      state.scanpage = payload
      console.log(state.scanpage)
    },
    getBaseResult (state, payload) {
      state.result = payload
      // console.log(state.result)
    }
  }
}
export default baseInfor
