<template>
  <section class="banner" >
    <div class="bg" v-for="(item,i) in imgData" :key="i">
      <img  class="logoimg" height="200px" :src="item.src" :style="item.style" alt="">
    </div>
    <div class="logo">
      <img class="logoimg" height="100px" width="200px" src="@/assets/images/logo/logo.png" alt="">
    </div>
    <!-- <div class="bg" >
      <img class="logoimg" height="200px" src="@/assets/images/bilibili/2.png" alt="">
    </div>
    <div class="bg" >
      <img class="logoimg" height="200px" src="@/assets/images/bilibili/2.png" alt="">
    </div>
    <div class="bg" >
      <img class="logoimg" height="200px" src="@/assets/images/bilibili/3.png" alt="" >
    </div>
    <div class="bg"  >
      <img class="logoimg" height="200px" src="@/assets/images/bilibili/4.png" alt="" style="filter: blur(6px); transform: translate(0px, 0px) rotate(0deg);">
    </div>
    <div class="bg"  >
      <img class="logoimg" height="200px" src="@/assets/images/bilibili/5.png" style="filter: blur(6px); transform: translate(0px, 0px) rotate(0deg);">
    </div> -->
    <!-- style="filter: blur(6px); transform: translate(0px, 0px) rotate(0deg);" -->
    <!-- style="filter: blur(-600px); transform: translate(50.14px, 0px) rotate(0deg);" -->
    <!-- <div class="bg" >
      <img class="logoimg" height="200px" src="@/assets/images/bilibili/6.png" alt="">
    </div>
    <div class="logo">
      <img class="logoimg" height="100px" width="200px" src="@/assets/images/logo/logo.png" alt="">
    </div> -->
  </section>
</template>
<script>
export default {
  data () {
    return {
      diff: '',
      curPosX: '',
      lastPosX: '',
      imgData: [
        {
          id: '01',
          src: require('@/assets/images/bilibili/1.png'),
          style:"filter: blur(6px); transform: translate(0px, 0px) rotate(0deg);"
        },
        {
          id: '02',
          src: require('@/assets/images/bilibili/2.png'),
          tyle:"filter: blur(-600px); transform: translate(50.14px, 0px) rotate(0deg);"
          },
        {
          id: '03',
          src: require('@/assets/images/bilibili/3.png'),
          tyle:"filter: blur(-600px); transform: translate(50.14px, 0px) rotate(0deg);"
          },
        {id: '04', src: require('@/assets/images/bilibili/4.png') },
        {id: '05', src: require('@/assets/images/bilibili/5.png') },
        {id: '06', src: require('@/assets/images/bilibili/6.png') },
      ]
    }
  },
  mounted() {
    // var  el = window.document.body; //声明一个变量，默认值为body
    // var a = document.getElementsById("banner");
    // console.log('a', a)
    // a.onmouseover = function (event) {
    //   console.log('a=======', event)
    // }
    window.document.body.onmouseover =  function (event){
      // el = event.target; //鼠标每经过一个元素，就把该元素赋值给变量el
      
      console.log( '元素上' , event, event.layerX, event.layerY); //在控制台中打印该变量
    }
  },
  created() {
    
  },
  methods:{
    touchstart(e) {
        // 获取起始坐标位置x
        this.lastPosX = e.targetTouches[0].clientX
        console.log('this.lastPosX', this.lastPosX)
    },
    touchmove(e) {
        // 获取当前位置x
        this.curPosX = e.targetTouches[0].clientX

        // 计算差值
        this.diff = +(this.curPosX - this.lastPosX)

        // 其他业务逻辑
        // ...

        // 更新lastPosX
        this.lastPosX = this.curPosX
    }
  }
}
</script>
<style lang="scss" scoped>
.banner{
  height: 200px;
  .logo{
    position: absolute;
    margin-top: 100px;
    margin-left: 400px;
  }
  .bg {
    position: absolute;
  }
}
</style>