<template>
  <div>
    <NavBar />
    <router-view/>
    <FooterItem />
  </div>
</template>
<script>
import NavBar from './NavBar'
import FooterItem from './FooterItem'
export default {
  components: {
    NavBar,
    FooterItem
  }
}
</script>