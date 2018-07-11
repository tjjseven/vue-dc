<template>
  <yd-list theme="3">
    <yd-list-item v-for="item, key in list" :key="key">
      <img slot="img" :src="item.img">
      <span slot="title">{{item.title}}</span>
      <yd-list-other slot="other">
        <div>
          <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
          <span class="demo-list-del-price">¥{{item.w_price}}</span>
        </div>
        <div class="cir">
          <p class="cir_sub">-</p>
          <span>1</span>
          <p class="cir_add">+</p>
        </div>
      </yd-list-other>
    </yd-list-item>
  </yd-list>
</template>
<script>
    export default {
        name: "list",
        data() {
          return {
            list: [
              {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题11", price: 156.23, w_price: 89.36},
              {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题22", price: 256.23, w_price: 89.36},
              {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题33", price: 356.23, w_price: 89.36},
              {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题44", price: 456.23, w_price: 89.36},
              {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题55", price: 556.23, w_price: 89.36},
              {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题66", price: 656.23, w_price: 89.36}
            ]
          }
        }
    }
</script>

<style scoped>
  p{
    width: .5rem;
    height: .5rem;
    line-height: .5rem;
    border: 1px solid #0a0a0a;
    display: inline-block;
    border-radius: 50%;
    font-size: 20px;
    text-align: center;
    color: #0a0a0a;
  }
</style>
