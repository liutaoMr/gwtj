const getters = {
  user: state => state.baseInfor.user,
  scanpage: state => state.baseInfor.scanpage,
  result: state => state.baseInfor.result,
  tmh: state => state.returnData.tmh,
  status: state => state.returnData.status
}

export default getters
