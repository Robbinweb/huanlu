<template>
  <section>
    <div class="content-one">
        <div class="YearClass">
          <el-button @click="yearReduce">上一年</el-button>
          <el-button @click="yearPlus">下一年</el-button>
          <span style="padding: 20px">
            图例说明：<span v-for="(item,i) in illustration" :key="i">
              <span :style="{ background: item.background, color: item.color, padding: '0px 3px 0px 3px', margin: '10px', borderRadius:'5px' }">{{item.type}}</span>
              <span>{{item.explain}}</span>
            </span>
            <span></span>
          </span>
        </div>
        <el-calendar id="calendar">
          <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
          <template
            slot="dateCell"
            slot-scope="{date, data}">
            <!--自定义内容-->
            <div class="calendar-day" style="text-align: center;">
              <span>
                <div style="width: 100%;">
                  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox :label="data.day" >{{ data.day.split('-').slice(2).join('-') }}日</el-checkbox>
                  </el-checkbox-group>
                </div>
                <!-- <div style="float: right;"></div> -->
              </span>
              <el-row v-if="brightDate.indexOf(data.day) != -1 && calendarList[brightDate.indexOf(data.day)].available === calendarList[brightDate.indexOf(data.day)].checked">
                <el-col :span="24" style="background:#4190f7;color:#fff;">
                  可入住{{calendarList[brightDate.indexOf(data.day)].available}}人
                </el-col>
                <el-col :span="24" style="background:#4190f7;color:#fff;">
                  已入住{{calendarList[brightDate.indexOf(data.day)].checked}}人
                </el-col>
              </el-row>
              
              <el-row v-if="brightDate.indexOf(data.day) != -1 && calendarList[brightDate.indexOf(data.day)].available !== calendarList[brightDate.indexOf(data.day)].checked">
                <el-col :span="24" style="background:#92ecd6;color:#fff;">
                  可入住{{calendarList[brightDate.indexOf(data.day)].available}}人
                </el-col>
                <el-col :span="24" style="background:#92ecd6;color:#fff;">
                  已入住{{calendarList[brightDate.indexOf(data.day)].checked}}人
                </el-col>
              </el-row>
              <el-row v-if="brightDate.indexOf(data.day) == -1" >
                <el-col :span="24" style="background: #d9d9d9">
                    未安排
                </el-col>
              </el-row>
            </div>
          </template>
        </el-calendar>
      </div>
  </section>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
  props: {
    calendarList: Array, // 获取到的数据
    illustration: Array, // 图例说明
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // or any other constructor
  },
  data(){
    return{
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  computed: {
    // 时间高亮的数组
    brightDate () {
      let ary = []
      for (let i in this.calendarList) {
        ary.push(this.calendarList[i].startDate)
      }
      return ary
    }
  },
  methods:{
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log('点击==>', value)
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      this.$emit('returnData', value)

    },
    yearPlus () { // 年份加
      let prevBtn2 = document.querySelector('.el-calendar__button-group .el-button-group>button:nth-child(3)');
      prevBtn2.click()
      prevBtn2.click()
      prevBtn2.click()
      prevBtn2.click()
      prevBtn2.click()
      prevBtn2.click()
      prevBtn2.click()
      prevBtn2.click()
      prevBtn2.click()
      prevBtn2.click()
      prevBtn2.click()
      prevBtn2.click()
    },
    yearReduce () { // 年份减
      let prevBtn1 = document.querySelector('.el-calendar__button-group .el-button-group>button:nth-child(1)')
      prevBtn1.click()
      prevBtn1.click()
      prevBtn1.click()
      prevBtn1.click()
      prevBtn1.click()
      prevBtn1.click()
      prevBtn1.click()
      prevBtn1.click()
      prevBtn1.click()
      prevBtn1.click()
      prevBtn1.click()
      prevBtn1.click()
    },
    // 日历Tooltip 文字提示
    content (date) {
      let content = ''
      for (let i in this.calendarList) {
        if (date === this.calendarList[i].startDate) {
          content = this.calendarList[i].msg
        }
      }
      return content
    }
  }
}
</script>
<style>
.content-one{
  height: 100%;
  background: #fff;
  border-radius: 15px;
  padding: 10px ;
  overflow: auto;
}
.el-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* margin-right: 30px; */
  width: 100%;
}
.el-checkbox__input {
  float: left;
}
.el-checkbox__label {
  display: inline-block;
  padding-left: 10px;
  line-height: 19px;
  font-size: 14px;
  float: right;
} 

</style>