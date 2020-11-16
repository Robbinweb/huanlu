<template>
  <section class="cloud-music" :style="backgroundDiv">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="4" style="padding: 10px">
            <span class="heading-dot heading-dot--red" @click="onCa"></span>
            <span class="heading-dot heading-dot--yellow"></span>
            <span class="heading-dot heading-dot--green"></span>
          </el-col>
          <el-col :span="2" style="padding-top: 20px">
            <span>
              <i class="el-icon-arrow-left" style="font-size: 20px;"></i>
              <i class="el-icon-arrow-right" style="font-size: 20px;"></i>
            </span>
          </el-col>
          <el-col :span="13">1</el-col>
          <el-col :span="5" style="padding: 5px">
            <el-input style="width:70%" size="small" placeholder="搜索" v-model="search">
              <i slot="prefix" class="el-input__icon el-icon-search" @click="onSearch"></i>
            </el-input>
            <i class="el-icon-copy-document" style="padding:20px"></i>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside>
          el-aside
        </el-aside>
        <el-main>
          main
        </el-main>
      </el-container>
      <!-- <el-main>
        main
      </el-main> -->
      <el-footer>
        <div class="footer-left">
          封面
        </div>
        <div class="footer-main">
          按钮
        </div>
        <div class="footer-right">
          操作
        </div>
      </el-footer>
    </el-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      backgroundDiv:{
        backgroundImage: 'url(' + require('@/assets/images/bg/bg.jpg')+ ')',
        backgroundRepeat: 'no-repeat',
      }
      
    }
  },
  created() {
    
  },
  methods: {
    onSearch(){
      console.log('搜索',this.search)
    }
  }
}
</script>
<style lang="scss" scoped>
.cloud-music{
  background: #fff;
  padding: 20px;
  width: 100%;
  .el-header{
    background: #fbf8f8;
    border-radius: 10px 10px 0px 0px;
    .heading-dot {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #eee;
      margin-right: 8px;
    }
    .heading-dot--red {
      background-color: #FF5F57;
    }
    .heading-dot--yellow {
      background-color: #FFBD2E;
    }
    .heading-dot--green {
      background-color: #28CA42;
    }
  }
  .el-aside{
    background: #e6e6e6;
  }
  .el-main{
    background: #ffffff;
    height: 600px;
  }
  .el-footer{
    background: #fbf8f8;
    border-radius: 0px 0px 10px 10px;
    .footer-left {
      float: left;
      width: 15%;
      background: blue;
    }
    .footer-main{
      width: 70%;
      background: red;
    }
    .footer-right {
      float: right;
      width: 15%;
      background: yellow;
    }
  }
}
</style>