<template>
  <section class="adman">
    <el-container>
      <el-aside>
        <Aside />
      </el-aside>
      <el-container>
        <el-header>
          <NavBar />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>
<script>
import NavBar from '@/components/Admin/Layout/navBar.vue'
import Aside from '@/components/Admin/Layout/aside.vue'
export default {
  components: {
    NavBar,
    Aside
  },
  data(){
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.adman{
  .el-aside{
    background: #001628;
    height: 100vh;
  }
}
</style>