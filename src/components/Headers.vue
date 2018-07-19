<template>
    <yd-navbar title="" bgcolor="#3e3e3e" fixed>
        <router-link to="/location" slot="left" v-if="this.$store.state.headerL">
          <yd-icon name="location" size="20px" color="#d7d7d7"></yd-icon>
          <span>&nbsp;{{localAddress}}</span>
        </router-link>
        <div slot="left" v-else @click="goBack">
            <yd-navbar-back-icon color="#d7d7d7"></yd-navbar-back-icon>
            <span>返回</span>
        </div>
        <router-link to="/user" slot="right">
          <yd-icon name="ucenter-outline" size="20px" color="#d7d7d7"></yd-icon>
          <span>&nbsp;个人中心</span>
        </router-link>
    </yd-navbar>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "headers",
        data() {
            return{
                localAddress : '正在定位中...'
            }
        },
        mounted() {
            // 获取定位地址
            this.getL.then((data)=>{
                console.log(data)
                this.localAddress = data.localAddress
                // 提交emit，向父组件App传递地址
                this.$emit('sendLocation', data)
            })
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }

        },
        // 计算属性
        computed: {
            // 映射getters
            ...mapGetters([
                'getL'
            ])
        }
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
