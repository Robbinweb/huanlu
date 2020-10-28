<template>
  <section class="home">
    <el-container>
      <el-header>
        <NavBar></NavBar>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="16"  :offset="4">
            <router-view></router-view>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </section>
</template>
<script>
import NavBar from './NavBar'
import Footer from './Footer'
export default {
  components: {
    NavBar,
    Footer
  },
  data(){
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  .el-header{
    // margin: 0 auto;
    padding: 0px;
    background: #ffffff;
  }
  .el-main{
    padding: 20px 0px;
    background: #f5f8fa;
  }
  .el-footer{
    background: #242a2d;
    padding: 20px 0px;
    color: #ffffff;
  }
  .page-component__scroll {
      height: calc(100% - 80px);
      margin-top: 80px;
  }
  .page-component__scroll>.el-scrollbar__wrap {
    overflow-x: auto;
  }
  .el-scrollbar__wrap--hidden-default {
      scrollbar-width: none;
  }
  .el-scrollbar__wrap {
      overflow: scroll;
      height: 100%;
  }
}
</style>