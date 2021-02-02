<template>
  <div>
    <div class="wraper">
      <Navbar></Navbar>
      <Alert></Alert>

      <router-view class="layout"></router-view>
      <div class="FooterPush"></div>
    </div>
    <Footer></Footer>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
}
.layout {
  padding-top: 120px;
}
.wrap {
  min-height: 100%;
}
.FooterPush {
  height: 196px;
}
</style>
<script>

// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer'
import Alert from '@/components/Alert'
export default {
  components: {
    Navbar,
    Footer,
    Alert
  },
  data () {
    return {
      cartData: JSON.parse(localStorage.getItem('cartData')) || [],
      cartnum: 0
    }
  }
}
</script>
