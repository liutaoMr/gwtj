<template>
  <div class="zlnlBox">
    <Card class="Card">
     <div class="content">
       <div style="margin-bottom: 10px;font-size: 18px;font-weight: 700">
       </div>
      </div>
      <div class="contentData">
        <table>
          <tr>
            <th colspan="1.5" rowspan="2" align="center" style="border-right: 1px solid #CCCCCC; height: 80px;">评估事项，内容与评分</th>
            <th colspan="5" align="center">程度等级</th>
          </tr>
          <tr>
            <th style="width: 12%;">可自理</th>
            <th style="width: 18%;">轻度依赖</th>
            <th style="width: 20%;">中度依赖</th>
            <th style="width: 14%;">不能自理</th>
            <th style="width: 10%;">判断评分</th>
          </tr>
          <tr>
            <td class="table_title">进餐：使用餐具将饭菜入口、咀嚼、吞咽等动作</td>
            <td>
              <div class="table_item">
                <p>独立完成</p>
                <p><input type="radio" v-model="eatGrade" value=0><span>0分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>——</p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>需要协助，如切碎搅拌食物</p>
                <p><input type="radio" v-model="eatGrade" value=3><span>3分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
               <p>完全需要帮助</p>
               <p><input type="radio"  v-model="eatGrade" value=5><span>5分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <span>{{eatGrade}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">洗漱：梳头、洗脸、刷牙、剃须、洗澡等活动</td>
            <td>
              <div class="table_item">
                <p>独立完成</p>
                <p><input type="radio" v-model="showerGrade" value = 0><span>0分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>  能独立完成梳头、洗脸、刷牙、剃须等；洗澡需要协助</p>
                <p><input type="radio" v-model="showerGrade" value= 1><span> 1分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>在协助下和适当的时间内能完成部分洗漱活动</p>
                <p><input type="radio" v-model="showerGrade" value= 3><span>3分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>完全需要协助</p>
                <p><input type="radio" v-model="showerGrade" value=7><span>7分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <span>{{showerGrade}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">穿衣：穿衣裤、袜子、鞋子等活动</td>
            <td>
              <div class="table_item">
                <p>独立完成</p>
                <p><input type="radio" v-model="dressGrade" value=0><span>0分</span></p>
              </div>
            </td>
            <td >
              <div class="table_item">
                <span>——</span>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>需要协助在适当的时间内能完成部分穿衣活动</p>
                <p><input type="radio" v-model="dressGrade" value=3><span>3分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>完全需要协助</p>
                <p><input type="radio" v-model="dressGrade" value=5><span>5分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <span>{{dressGrade}}</span>
              </div>
            </td>
            <td>
              <div class="table_item">

              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">如厕：小便、大便等活动及自控</td>
            <td>
              <div class="table_item">
                <p>独立完成</p>
                <p><input type="radio" v-model="toiletGrade" value=0><span>0分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>偶尔失禁，但基本能如厕或使用便具</p>
                <p><input type="radio" v-model="toiletGrade" value=1><span>1分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>经常失禁，在很多提示和协助下尚能如厕和使用便具</p>
                <p><input type="radio" v-model="toiletGrade" value=5><span>5分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>完全失禁，完全需要帮助</p>
                <p><input type="radio" v-model="toiletGrade" value=10><span>10分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <span>{{toiletGrade}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td class="table_title">活动：站立、室内行走、上下楼梯户外活动</td>
            <td>
              <div class="table_item">
                <p>独立完成</p>
                <p><input type="radio" v-model="activityGrade" value=0><span>0分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>借助较小的外力和辅助装备能完成站立、行走、上下楼梯等</p>
                <p><input type="radio" v-model="activityGrade" value=1><span>1分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>借助较大的外力和辅助装备能完成站立、行走、不能上下楼梯</p>
                <p><input type="radio" v-model="activityGrade" value=5><span> 5分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <p>卧床不起、行动完全需要帮助</p>
                <p><input type="radio" v-model="activityGrade" value=10><span>10分</span></p>
              </div>
            </td>
            <td>
              <div class="table_item">
                <span>{{activityGrade}}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td style="text-align: center;height: 32px;">总得分</td>
            <td colspan="5">
              <div class="table_item">
                <span>{{totalGradeCount}}</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </Card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'zlnl',
  data () {
    return {
      eatGrade: 0,
      showerGrade: 0,
      dressGrade: 0,
      toiletGrade: 0,
      activityGrade: 0,
      totalGrade: null
    }
  },
  computed: {
    totalGradeCount: function () {
      const that = this
      var totalGradeCount = parseInt(that.eatGrade) + parseInt(that.showerGrade) + parseInt(that.dressGrade) + parseInt(that.toiletGrade) + parseInt(that.activityGrade)
      that.totalGrade = totalGradeCount
      return totalGradeCount
    },
    ...mapGetters(['status', 'tmh','result'])
  },
  created () {
    // 在这里请求已查体数据
    const _this = this
    if (_this.status == 1) {
      console.log('加载自理能力原始数据')
      var result = _this.result
      // console.log(result)
      this.eatGrade = result.q1df
      this.showerGrade = result.q2df
      this.dressGrade = result.q3df
      this.toiletGrade = result.q4df
      this.activityGrade = result.q5df
      this.totalGrade = result.zf
    }
  },
  methods: {
    save () {
      const _this = this
      var data = {}
      data.q1df = parseInt(this.eatGrade)
      data.q2df = parseInt(this.showerGrade)
      data.q3df = parseInt(this.dressGrade)
      data.q4df = parseInt(this.toiletGrade)
      data.q5df = parseInt(this.activityGrade)
      data.zf = parseInt(this.totalGrade)
      data.tmh = parseInt(this.tmh)
      // console.log(JSON.stringify(data))
      var obj = my.savePersonalJktjData(JSON.stringify(data))
      var result = JSON.parse(obj.savePersonalJktjData)
      // console.log(result)
      if (result.msg == 1) {
       // _this.$Message.success('保存成功')
      }
    },
    zlnlSave () {
      this.save()
    }

  }

}
</script>

<style scoped>
  table,tr,td,th{
    font-weight: 700;
    font-size: 16px;
    border:1px solid #ccc;
    border-collapse:collapse;
  }
  table{
    margin-top: 10px;
    width: 1315px;
  }
  .table_title{
    padding: 10px 20px 0 40px;
    height: 87px;
  }
  .table_item{
    font-weight: 400;
    text-align: center;
  }
  .table_item p:nth-child(1){
    padding: 10px;
    height: 65px;
  }
  .table_item p:nth-child(2) span{
    line-height:24px;
    margin-left: 8px;
    font-style:normal
  }
  .table_item p:nth-child(2){
   margin-bottom: 10px;
  }
  input[type='radio']{
    width: 16px;
    height: 16px;
  }
  input[type=radio]:after  {
      content: "";
      display:block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      text-align: center;
      line-height: 14px;
      font-size: 16px;
      color: #fff;
      border: 2px solid #ddd;
      background-color: #fff;
      box-sizing:border-box;
      position: relative;
      left: -2px;
  }

  input[type=radio]:checked:after  {
      content: "";
      transform:matrix(-0.766044,-0.642788,-0.642788,0.766044,0,0);
      -webkit-transform:matrix(-0.766044,-0.642788,-0.642788,0.766044,0,0);
      background: #5774FF;
  }

</style>
