<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="orderH2 text-center font-weight-bold text-success mb-5">訂單完成</h2>
          <h3 class="orderContent text-center">恭喜已完成結帳囉</h3>
          <h3 class="orderContent text-center">感謝您對本店的信任與支持!</h3>
          <i class="far fa-laugh-beam text-success pt-3"></i>
          <div class="d-flex justify-content-around pt-5">
            <a href="#/" class="cartin h3 font-weight-bold ml-5"
              ><i class="fas fa-home"></i>首頁</a
            >
            <a href="#/product" class="cartin h3 font-weight-bold mr-5"
              ><i class="fas fa-arrow-circle-left"></i>繼續購物</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.far {
  font-size: 130px;
  position: relative;
  left: 50%;
  transform: translate(-50%);
}
.orderH2 {
  font-size: 45px;
}
.cartin {
  border-bottom: 4px solid transparent;
  color: #21232d;
}
.cartin:hover {
  border-bottom: 3px solid black;
  cursor: pointer;
}
@media(max-width:567px){
  .cartin {
  font-size:20px
  }
  .orderH2 {
    font-size:40px;
  }
  .orderContent{
    font-size:25px
  }
}
</style>
