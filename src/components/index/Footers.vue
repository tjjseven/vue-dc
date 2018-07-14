<template>
  <div class="footer">
    <div class="cart">
      <p>{{count}}</p>
      <img src="../../assets/img/cart.png" alt="">
    </div>
    <p>共计：￥{{money}}元</p>
    <p>
        <router-link to="/order/confirm">
            选好了
        </router-link>
    </p>
  </div>
</template>

<script>
    export default {
        name: "footers",
        data() {
          return {
            money: 100,
            count:0
          }
        }
    }
</script>

<style scoped lang="less">
  .footer{
    position: fixed;
    bottom: 0;
    background: #fff;
    width: 100%;
    height: 50px;
  }
  p{
    display: inline-block;
  }
  p:first-of-type{
    padding: .2rem 1.3rem 0 0;
    font-size:16px;
  }
  p:last-of-type{
    border: 1px solid #ccc;
    padding: .2rem .4rem;
    margin: .1rem .3rem 0 0;
    float: right;
  }
  .cart{
    width: 60px;
    display: inline-block;
    position:relative;
    p{
      position: absolute;
      top: -1.3rem;
      left: .3rem;
      border:1px solid red;
      border-radius: 50%;
      padding: 0;
      width: .5rem;
      height: .5rem;
      line-height: .5rem;
      text-align: center;
      color: red;
    }
    img{
      position: absolute;
      width: 1rem;
      height: 1rem;
      top: -.7rem;
      left: 2px;
      z-index: 998;
    }
  }
</style>
