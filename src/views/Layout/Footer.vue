<template>
  <section class="footer">
    <div>
      footer
    </div>
    <div class="link">
      <strong>
      Copyright © 2018-2019<router-link class="text-secondary" target="_blank" to="/admin">欢鹿博客</router-link>All rights reserved.
      <div>京ICP备15053799号</div>
    </strong>
    </div>
      
  </section>
</template>
<style lang="scss" scoped>
.footer{
  text-align: center;
  background: #242a2d;
  padding: 20px;
  // padding: 0px 20px;
  & .link{
    text-align: center;
    color:#6c757d;
    a{
      text-decoration:none;
      padding:0px 10px;
      color: #6c757d;
    }
    & a:hover{
      color: #409eff;
    }
  }
}
</style>