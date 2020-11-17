<template>
  <section class="main">
    <div v-loading="loading">
      <div v-for="(item,i) in data" :key="i">
        {{item}}
      </div>
    </div>
    <el-pagination
      v-if="data.length > 0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </section>
</template>
<script>
import { getData1 } from '@/Api/common.js'
export default {
  data() {
    return {
      loading: false,
      data: [],
      currentPage:1,
    }
  },
  created() {
    // 首页数据
    this.getList()
  },
  methods: {
    // 首页数据
    getList(){
      this.loading = true
      setTimeout(() => {
        this.data = []
        for(let i = 0; i < 100; i++){
          this.data.push(i)
        }
        this.loading = false
      }, 2000);
      getData1().then(res => {
        console.log('res[============', res)
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  margin-top: 40px;
  margin-bottom: 80px;
}
</style>