<template>
  <section>
    <el-button type="primary" @click="onLogin">主要按钮</el-button>
  </section>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    onLogin(){
      const that = this
      that.$router.push({path:'/admin'})
    }
  }
}
</script>
