<template>
  <section class="cloud-music">
    
    <div class="cloud-box">
      <el-row>
        <el-col :span="2" style="padding: 10px">
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
        <el-col :span="14">1</el-col>
        <el-col :span="6" style="padding: 5px">
          <el-input style="width:70%" size="small" placeholder="搜索" v-model="search">
            <i slot="prefix" class="el-input__icon el-icon-search" @click="onSearch"></i>
          </el-input>
          <i class="el-icon-copy-document" style="padding:20px"></i>
        </el-col>
        <el-col :span="24">
          <el-row>
            <el-col :span="4">1</el-col>
            <el-col :span="20" style="background:#ffffff">2</el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      search: '',
      dialogVisible: true
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
  padding: 10px;
  .cloud-box{
    margin: 10px;
    background: #f6f6f6;
    box-shadow: 15px;
    border-radius: 10px;
    border:1px solid #f2f2f2;
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
}
</style>