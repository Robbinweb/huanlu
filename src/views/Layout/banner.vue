<template>
  <section class="bannerPage" >
    <div class="banner">
      <div v-for="(item,i) in imgData" :key="i">
        <img :src="item.src" >
      </div>
      <a @click="onLogo" class="logo">
        <img class="logoimg" height="60px" width="120px" src="@/assets/images/logo/logo.png" alt="">
      </a>
    </div>
    
  </section>
</template>
<script>
export default {
  data () {
    return {
      imgData: [
        { id: '01', src: require('@/assets/images/bilibili/autumn1.png'), },
        { id: '02', src: require('@/assets/images/bilibili/autumn2.png') },
        { id: '03', src: require('@/assets/images/bilibili/autumn3.png') },
        { id: '04', src: require('@/assets/images/bilibili/autumn4.png') },
        { id: '05', src: require('@/assets/images/bilibili/autumn5.png') },
        { id: '06', src: require('@/assets/images/bilibili/autumn6.png') },
      ]
    }
  },
  mounted() {
    // banner 模糊
    const images = document.querySelectorAll('.banner>div>img');
    document.querySelector('.banner').addEventListener('mousemove', (e) => {
      let percentage = e.clientX / window.outerWidth;
      // 设置鼠标移动百分比
      let offset = 10 * percentage;
      // 定义offset，定义分层图片位置的距离
      let blur = 20;
      for (let [index, image] of images.entries()) {
        offset *= 1.3;
        // 越后面的图片，位移的越多
        // 鼠标在中间，第三章和第四张图的模糊度最低，趋近于0；第2张和第5张模糊度较高，第1张和第6张模糊度最高；
        // 鼠标在右边，第六张图模糊度趋近于0，越往左的图片，模糊度越高；使用公式：y = x**2*20
        let blurValue = Math.pow((index / images.length - percentage), 2) * blur;
        image.style.setProperty('--offset', `${offset}px`);
        image.style.setProperty('--blur', `${blurValue}px`);
      }
    });
  },
  created() {
  },
  methods:{
    onLogo(){
      console.log('点击logo')
    }
  }
}
</script>
<style lang="scss" scoped>
.bannerPage{
  // height: 200px;
  .logo{
    position: absolute;
    margin-top: 100px;
    margin-left: 200px;
    z-index: 99999;
    // border: 1px solid red;
  }
}
.banner {
  height: 160px;
  position: relative;
  overflow: hidden;
}
.banner > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* 将图片上下左右居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  --offset:0px;
  --blur:2px;
}

.banner > div > img {
  display: flex;
  width: 110%;
  /* 图片需要左右移动，预先设置的宽一些 */
  height: 100%;
  object-fit: cover;
  /* 将图片按照比例填满容器 */
  transform:translateX(var(--offset));
  filter:blur(var(--blur));
}
</style>