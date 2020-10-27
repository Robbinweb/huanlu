<template>
  <section>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </section>
</template>
<script>
import NavBar from '@/components/Admin/Layout/navBar.vue'
export default {
  components: {
    'nav-bar': NavBar
  },
  data(){
    return {

    }
  }
}
</script>