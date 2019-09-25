<template>
  <div class="inforzongjian">
    <nav>
      <Row>
        <Col span="20">
          <div style="width: 100%;height: 40px;margin-top: 10px;padding: 0 28px; font-size: 16px;" inline>
            <div class="item" >
              <Input type="text"  suffix="ios-search" placeholder="请输入姓名" style="width:170px;">
              </Input>
            </div>
            <div class="item" style="margin-left: 10px;">
               <Button type="primary" id="xxzj_search">搜索</Button>
            </div>
            <div class="item" style="margin-left: 30px;">
              <span style="margin-right: 10px;">选择时间</span>
              <Date-picker  placeholder="选择日期"
                            type="daterange"
                            split-panels
                            confirm
                            v-model="searchInterval"
                            style="width: 200px" >
              </Date-picker>
            </div>
            <div class="item" style="margin-left: 30px;">
              <span style="margin-right: 10px;">上传状态</span>
              <Select style="width:70px;">
              </Select>
            </div>
            <div class="item" style="margin-left: 30px;">
               <Button type="success" id="xxz_found">查询</Button>
            </div>
          </div>
        </Col>
        <Col span="4" style="height: 40px;">
          <div  class="xxzj_uploadBox item">
            <span>共<i>8</i>条</span>
            <Button size="large" type="error" id="xxzj_upload">上传至服务器</Button>
          </div>
        </Col>
      </Row>
    </nav>
    <content>
      <div class="content">
        <Table  border :columns="tableConfig" :data = 'tableDtata' ></Table>
      </div>
    </content>
  </div>

</template>

<script>
export default {
  name: 'inforZongjian',
  data () {
    return {
      tableConfig: [
        {
          title: '姓名',
          key: 'name',
          width: 120,
          fixed: 'left'
        },
        {
          title: '心电',
          key: 'xd',
          width: 120,
          render: (h, params) => {
            if (params.row.xd == '已上传') {
              return h('Icon', {
                'style': {
                  'color': '#19be6b',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-checkmark'
                }
              }, '√')
            } else {
              return h('Icon', {
                'style': {
                  'color': 'red',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-close'
                }
              })
            }
          }
        },
        {
          title: '身高体重',
          key: 'sgtz',
          width: 120,
          render: (h, params) => {
            if (params.row.sgtt == '已上传') {
              return h('Icon', {
                'style': {
                  'color': '#19be6b',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-checkmark'
                }
              }, '√')
            } else {
              return h('Icon', {
                'style': {
                  'color': 'red',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-close'
                }
              })
            }
          }
        },
        {
          title: 'B超',
          key: 'bc',
          width: 100,
          render: (h, params) => {
            if (params.row.bc == '已上传') {
              return h('Icon', {
                'style': {
                  'color': '#19be6b',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-checkmark'
                }
              }, '√')
            } else {
              return h('Icon', {
                'style': {
                  'color': 'red',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-close'
                }
              })
            }
          }
        },
        {
          title: '症状',
          key: 'zz',
          width: 100,
          render: (h, params) => {
            if (params.row.zz == '已上传') {
              return h('Icon', {
                'style': {
                  'color': '#19be6b',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-checkmark'
                }
              }, '√')
            } else {
              return h('Icon', {
                'style': {
                  'color': 'red',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-close'
                }
              })
            }
          }
        },
        {
          title: '问诊',
          key: 'wz',
          width: 100,
          render: (h, params) => {
            if (params.row.wz == '已上传') {
              return h('Icon', {
                'style': {
                  'color': '#19be6b',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-checkmark'
                }
              }, '√')
            } else {
              return h('Icon', {
                'style': {
                  'color': 'red',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-close'
                }
              })
            }
          }
        },
        {
          title: '生活方式',
          key: 'shfs',
          width: 120,
          render: (h, params) => {
            if (params.row.shfs == '已上传') {
              return h('Icon', {
                'style': {
                  'color': '#19be6b',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-checkmark'
                }
              }, '√')
            } else {
              return h('Icon', {
                'style': {
                  'color': 'red',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-close'
                }
              })
            }
          }
        },
        {
          title: '血压',
          key: 'xy',
          width: 100,
          render: (h, params) => {
            if (params.row.xy == '已上传') {
              return h('Icon', {
                'style': {
                  'color': '#19be6b',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-checkmark'
                }
              }, '√')
            } else {
              return h('Icon', {
                'style': {
                  'color': 'red',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-close'
                }
              })
            }
          }
        },
        {
          title: '脏器功能',
          key: 'zqgn',
          width: 120,
          render: (h, params) => {
            if (params.row.zqgn == '已上传') {
              return h('Icon', {
                'style': {
                  'color': '#19be6b',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-checkmark'
                }
              }, '√')
            } else {
              return h('Icon', {
                'style': {
                  'color': 'red',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-close'
                }
              })
            }
          }
        },
        {
          title: '其他',
          key: 'qt',
          width: 120,
          render: (h, params) => {
            if (params.row.qt == '已上传') {
              return h('Icon', {
                'style': {
                  'color': '#19be6b',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-checkmark'
                }
              }, '√')
            } else {
              return h('Icon', {
                'style': {
                  'color': 'red',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-close'
                }
              })
            }
          }
        },
        {
          title: '上传状态',
          key: 'sczt',
          width: 125,
          fixed: 'right',
          render: (h, params) => {
            if (params.row.sczt == '已上传') {
              return h('div', {},
                [
                  h('span', {}, [h('Icon', { 'style': { 'color': '#19be6b', 'font-size': '16px', 'font-weight': '800' }, props: { type: 'md-cloud-upload' } }, '')]),
                  h('span', {}, [h('span', { 'style': { 'font-size': '16px', 'font-weight': '800', 'margin-left': '10px' } }, '已上传')])
                ])
            } else {
              return h('Icon', {
                'style': {
                  'color': 'red',
                  'font-size': '16px',
                  'font-weight': '800'
                },
                props: {
                  type: 'md-close'
                }
              })
            }
          }
        }
      ],
      tableDtata: [
        {
          name: '周杰伦',
          xd: '已上传',
          sgtz: '未上传',
          bc: '未上传',
          zz: '未上传',
          wz: '未上传',
          shfs: '未上传',
          xy: '未上传',
          zqgn: '未上传',
          qt: '已上传',
          sczt: '未上传'
        },
        {
          name: '林俊杰',
          xd: '未上传',
          sgtz: '未上传',
          bc: '未上传',
          zz: '未上传',
          wz: '未上传',
          shfs: '未上传',
          xy: '未上传',
          zqgn: '未上传',
          qt: '未上传',
          sczt: '已上传'
        }
      ],
      searchInterval: ''
    }
  },
  methods: {

  },
  mounted () {
  }

}
</script>

<style scoped>
  .ivu-form .ivu-form-item-label {
    font-size: 16px!important;
    font-weight: 700!important;
  }
  #xxzj_search{
    width:60px;
    height:32px;
    font-size:14px ;
  }
  #xxz_found{
    width:60px;
    height:32px;
    font-size:14px ;
  }
  .xxzj_uploadBox{
    margin-top: 8px;
    margin-left: 60px;
  }
  #xxzj_upload{
    margin-left: 5px;
    font-size:14px ;
  }
  nav{
    border-bottom: 1px solid #EEEEEE;
    margin-bottom: 10px;
  }
  .item{
    display: inline-block;
  }
  .inforzongjian{
    width: 100%;
    height: 703px;
    background: white;
  }
  .inforzongjian content{
    width: 100%;
    text-align: center;
  }
  .content{
    padding: 10px 50px;
  }
</style>
