const returnData = {
  state: {
    status: '',
    tmh: ''
  },
  mutations: {
    getStatus (state, payload) {
      state.status = payload
      // console.log(state.status)
    },
    getTmh (state, payload) {
      state.tmh = payload
      // console.log(state.tmh)
    }
  }
}
export default returnData
