<template>
    <div class="user margin_top">
        <div class="user_info">
            <p>您好，{{user}}</p>
        </div>
        <yd-cell-item arrow type="link" href="/user/order">
            <yd-icon slot="icon" name="order" size=".42rem" color="#0793ee"></yd-icon>
            <span slot="left">我的订单</span>
            <span slot="right"></span>
        </yd-cell-item>
        <yd-cell-item arrow type="link" href="/user/address">
            <yd-icon slot="icon" name="location" size=".42rem" color="#0793ee"></yd-icon>
            <span slot="left">地址管理</span>
            <span slot="right"></span>
        </yd-cell-item>
        <yd-cell-item arrow type="link" href="/user/opinion">
            <yd-icon slot="icon" name="feedback" size=".42rem" color="#0793ee"></yd-icon>
            <span slot="left">意见反馈</span>
            <span slot="right"></span>
        </yd-cell-item>
    </div>
</template>

<script>
    export default {
        name: "user",
        data() {
            return {
                user: 'pqd'
            }
        }
    }
</script>

<style scoped lang="less">
    .user_info{
        height: 139px;
        background: url("../../assets/img/pc_banner.png") no-repeat center center/cover;
        color: #fff;
        text-align: center;
        p{
            padding-top: 2rem;
        }
    }
</style>
