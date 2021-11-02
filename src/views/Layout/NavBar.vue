<template>
  <section class="nav-bar">
    <el-row class="bg">
      <el-col :span="16" :offset="4">
        <el-menu :default-active="this.$router.path" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/index">首页</el-menu-item>
          <el-submenu index="/article">
            <template slot="title">文章</template>
            <el-menu-item index="/article?=js">javaScript</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="/onfile">归档</el-menu-item>
          <el-menu-item index="/cloudMusic">云音乐</el-menu-item>
          <el-menu-item index="/about">关于我</el-menu-item>
          <el-menu-item index="/map">地图</el-menu-item>
          <el-menu-item index="/login">登录</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: 1
    }
  }
}
</script>
<style lang="scss" scoped>
.nav-bar{
  text-align: center;
  .bg{
    background: #ffffff;
  }
  .el-menu{

    border: 0px;
  }
}
</style>