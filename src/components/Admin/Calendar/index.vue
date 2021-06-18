<template>
  <section>
    日历
    <calendar
      :calendarList="calendarData"
      @returnData="getSelectData"
      :illustration="illustrationData"
    ></calendar>
  </section>
</template>
<script>
import calendar from './components/calendar.vue' 
export default {
  components:{
    calendar:calendar
  },
  data() {
    return {
      list: [],
      calendarData: [
        {
          isSelected: false,
          available:'1000',
          checked: '500',
          startDate: '2021-06-16',
        },
        {
          isSelected: false,
          available:'1000',
          checked: '1000',
          startDate: '2021-06-17',
        },
        {
          isSelected: false,
          available:'1000',
          checked: '500',
          startDate: '2021-06-19',
        },
        {
          isSelected: false,
          available:'1000',
          checked: '490',
          startDate: '2021-06-21',
        }
      ],
      illustrationData: [
        { type: '床', background: '#4190f7', color: '#fff', explain: '当日无空余床位'  },
        { type: '床', background: '#92ecd6', color: '#fff', explain: '当日有空余床位'  },
        { type: '未', background: '#d9d9d9', color: '#fff', explain: '未安排' }
      ]
    }
  },
  methods:{
    getSelectData(val){
      console.log('getSelectData', val)
    }
  }

}
</script>