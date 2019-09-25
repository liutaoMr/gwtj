const mutations = {
  setUpdate(state,setChecked){
    state.setlist.count= '新数据'
    setChecked.forEach((item,index)=>{
      for(var i=0;i<state.setlist.setListConfig.length;i++){
        if(state.setlist.setListConfig[i].option==item){
          state.setlist.setListConfig[i].checked=true;
        }else{
          state.setlist.setListConfig[i].checked=false;
        }
      }
    })
    //在这将设置选项存入localstorage
    localStorage.setItem("setConfig",JSON.stringify(state.setlist))
  }

}

export default mutations
