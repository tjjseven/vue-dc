<template>
    <yd-navbar title="" bgcolor="#3e3e3e" fixed>
        <router-link to="/location" slot="left">
          <yd-icon name="location" size="20px" color="#d7d7d7"></yd-icon>
          <span>&nbsp;定位中</span>
        </router-link>
        <router-link to="/user" slot="right">
          <yd-icon name="ucenter-outline" size="20px" color="#d7d7d7"></yd-icon>
          <span>&nbsp;个人中心</span>
        </router-link>
    </yd-navbar>
</template>

<script>
    export default {
        name: "headers"
    }
</script>

<style scoped>
  .addr_photo,.toux_photo{
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url("../assets/img/addr.png") no-repeat center center/cover;
  }
  span{
    color: #d7d7d7;
  }
</style>
