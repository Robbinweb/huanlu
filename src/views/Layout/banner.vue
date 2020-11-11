<template>
  <section class="banner" >
    <div class="bg" @mouseover="changeMask(1)" @mouseout="changeMask(1)" @touchstart="touchstart" @touchmove="touchmove" >
      <img class="logoimg" height="200px" src="@/assets/image/bilibili/1.png" alt="">
    </div>
    <div class="bg" @mouseover="changeMask(2)" @mouseout="changeMask(2)" @touchstart="touchstart" @touchmove="touchmove" >
      <img class="logoimg" height="200px" src="@/assets/image/bilibili/2.png" alt="">
    </div>
    <div class="bg" @mouseover="changeMask(3)" @mouseout="changeMask(3)" @touchstart="touchstart" @touchmove="touchmove" >
      <img class="logoimg" height="200px" src="@/assets/image/bilibili/3.png" alt="" >
    </div>
    <div class="bg" @mouseover="changeMask(4)" @mouseout="changeMask(4)" @touchstart="touchstart" @touchmove="touchmove" >
      <img class="logoimg" height="200px" src="@/assets/image/bilibili/4.png" alt="" style="filter: blur(6px); transform: translate(0px, 0px) rotate(0deg);">
    </div>
    <div class="bg" @mouseover="changeMask(5)" @mouseout="changeMask(5)" @touchstart="touchstart" @touchmove="touchmove" >
      <img class="logoimg" height="200px" src="@/assets/image/bilibili/5.png" style="filter: blur(6px); transform: translate(0px, 0px) rotate(0deg);">
    </div>
    <!-- style="filter: blur(6px); transform: translate(0px, 0px) rotate(0deg);" -->
    <!-- style="filter: blur(-600px); transform: translate(50.14px, 0px) rotate(0deg);" -->
    <div class="bg" @mouseover="changeMask(6)" @mouseout="changeMask(6)" @touchstart="touchstart" @touchmove="touchmove" >
      <img class="logoimg" height="200px" src="@/assets/image/bilibili/6.png" alt="">
    </div>
    <div class="logo">
      <img class="logoimg" height="100px" width="200px" src="@/assets/image/logo/logo.png" alt="">
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted() {
    var  el = window.document.body; //声明一个变量，默认值为body
    var a = document.getElementsByClassName("banner");
    console.log('a', a)
    a.onmouseover = function (event) {
      console.log('a=======', event)
    }
    window.document.body.onmouseover =  function (event){
      el = event.target; //鼠标每经过一个元素，就把该元素赋值给变量el
      
      console.log( '当前鼠标在' , el,  '元素上' , event); //在控制台中打印该变量
    }
  },
  created() {
    
  },
  methods:{
    changeMask(index) {
      console.log('index', index)
    },
    touchstart(e) {
      // 获取起始坐标位置x
      // this.lastPosX = e.targetTouches[0].clientX
      console.log('e.targetTouches[0].clientX', e.targetTouches[0].clientX)
    },
    touchmove(e) {
      // 获取当前位置x
      // this.curPosX = e.targetTouches[0].clientX

      // // 计算差值
      // this.diff = +(this.curPosX - this.lastPosX)

      // // 其他业务逻辑
      // // ...

      // // 更新lastPosX
      // this.lastPosX = this.curPosX
      console.log('e.targetTouches[0].clientX', e.targetTouches[0].clientX)

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