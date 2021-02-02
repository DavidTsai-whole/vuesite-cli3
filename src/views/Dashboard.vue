<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid">
      <Sidebar></Sidebar>
      <div class="row">
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/DashNav'
import Sidebar from '@/components/DashSide'
export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>
