<template>
  <div>
    <hl-aside />
    <router-view></router-view>
  </div>
</template>
<script>
import aside from './aside.vue'
export default {
  components: {
    'hl-aside': aside
  }
}
</script>