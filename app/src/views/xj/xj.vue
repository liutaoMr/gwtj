<template>
  <div class="xjBox">
    <Button id='return' @click.native='backHandle()'>返回</Button>
    <Tabs>
        <TabPane label="血常规">
          <nav>
            <Row>
              <Col span='12'>
                <div class="navL">
                  <span style="margin-right: 7px;" >体检日期</span>
                  <DatePicker
                  format="yyyy/MM/dd"
                  type="daterange"
                  split-panels
                  placeholder="Select date"
                  v-model='tjData'
                  style="width: 150px"
                  @on-change="dataTotal=$event"
                  ></DatePicker>
                  <ul>
                  	<li style="background: #FFBD00;"> H*100% < 值 <H*150%</li>
                    <li style="background: #FF1800;"> 150%*H < 值 </li>
                    <li style="background: #00B3F1;"> 值 < L </li>
                  </ul>
                </div>

              </Col>
              <Col span='12'>
                <div class="navR">
                  <Button type="error" id='drjg'>导入结果</Button>
                </div>
              </Col>
            </Row>
          </nav>
          <div class="xcgTable">
             <Table border  height="200"  ></Table>
          </div>
        </TabPane>
        <TabPane label="血生化" >
          <nav>
            <Row>
              <Col span='12'>
                <div class="navL">
                  <span style="margin-right: 7px;" >体检日期</span>
                  <DatePicker
                  format="yyyy/MM/dd"
                  type="daterange"
                  split-panels
                  placeholder="Select date"
                  v-model='tjData'
                  style="width: 150px"
                  @on-change="dataTotal=$event"
                  ></DatePicker>
                  <ul>
                  	<li style="background: #FFBD00;"> H*100% < 值 <H*150%</li>
                    <li style="background: #FF1800;"> 150%*H < 值 </li>
                    <li style="background: #00B3F1;"> 值 < L </li>
                  </ul>
                </div>
          
              </Col>
              <Col span='12'>
                <div class="navR">
                  <Button type="error" id='drjgxsh'>导入结果</Button>
                </div>
              </Col>
            </Row>
          </nav>
          <div class="xshTable">
             <Table border  height="200"  ></Table>
          </div>
        </TabPane>
    </Tabs>
  </div>

</template>

<script>
export default {
  name: 'xj',
  data () {
    return {
      tjData: []

    }
  },
  methods: {
    backHandle () {
      const _this = this
      _this.$router.go(-1)
    }

  },
  mounted () {
  }

}
</script>

<style scoped>
  .xjBox{
    position: relative;
    width: 1351px;
    height:711px;
    background:rgba(255,255,255,1);
    box-shadow:0px 8px 16px 0px rgba(6,169,237,0.16);
    border-radius:6px;
    margin: 7px 7px;
    border-top: 4px solid #06A9EDFF;
  }
  #return{
    z-index: 100;
    color: white;
    width:60px;
    height:29px;
    position: absolute;
    top:5px;
    right: 42px;
    background:rgba(6,169,237,1);
    border-radius:15px;
  }
  ul{
    color: white;
    margin-left: 30px;
    display: inline-block;
    list-style: none;
  }
  ul li{
    border-radius: 4px;
    margin: 0px 20px ;
    padding: 2px 5px;
    display: inline-block;
    list-style: none;
  }
  nav{
    margin-left: 16px;
  }
  .navR{
    margin-left: 546px;
  }
  #drjg{
    width:78px;
    height:29px;
  }
  .xcgTable{
    padding: 27px 20px ;
  }
  #drjgxsh{
    width:78px;
    height:29px;
  }
  .xshTable{
    padding: 27px 20px ;
  }

</style>
