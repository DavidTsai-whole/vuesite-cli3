<template>
  <div>
      <Navbar></Navbar>
      <Alert></Alert>

      <router-view class="layout"></router-view>
    <Footer></Footer>
  </div>
</template>
<style scoped>
.layout {
  padding-top: 120px;
  min-height: calc(100vh - 85px - 218.4px);
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
  },
  created () {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)vueToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = myCookie
  }
}
</script>
