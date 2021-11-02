<template>
  <section>
    日历
    <!-- 日历 -->
    <ele-calendar
      ref="calendarItemRef"
      :checkType="checkType"
      :legendItem="legendItem"
      :calendarObj="calendarData"
      @getCheckData="getCheckData">
    </ele-calendar>
  </section>
</template>
<script>
import calendar from './components/calendar.vue' 
export default {
  components:{
    'ele-calendar':calendar
  },
  data() {
    return {
      // 日历
      checkType: 'checked', // checked:日期可选 text:日期
      // 图例
      legendItem: {
        name: 'shiftName',
        color: 'shiftShowColor',
        data: [
          { shiftShowColor: '#4190f7', shiftName: '当日班次均有安排'  },
          { shiftShowColor: '#92ecd6', shiftName: '当日有班次未安排'  },
          { shiftShowColor: '#d9d9d9', shiftName: '当日班次均未安排' }
        ]
      },
      calendarData: {
        areaId:'areaId',
        areaName:'areaName',
        schedualDate:'schedualDate',
        shiftShowColor: 'shiftShowColor',
        startTime: 'startTime',
        endTime: 'endTime',
        data: [
          
        ]
      },
    }
  },
  methods:{
    getSelectData(val){
      console.log('getSelectData', val)
    }
  }

}
</script>