<template>
    <div class="register margin_top">
        <yd-cell-group>
            <yd-cell-item>
                <span slot="left">手机号：</span>
                <yd-input slot="right" v-model="phone" regex="mobile" placeholder="请输入手机号码"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">密码：</span>
                <yd-input slot="right" type="password" v-model="password" placeholder="请输入密码"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">确认密码：</span>
                <yd-input slot="right" type="password" v-model="apassword" placeholder="请输入密码"></yd-input>
            </yd-cell-item>
        </yd-cell-group>
        <yd-button-group>
            <yd-button size="large" bgcolor="#0793ee" color="#FFF">注册</yd-button>
        </yd-button-group>
        <p class="to_login">已有账号？
            <router-link to="/login" slot="left">
                马上登录
            </router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                phone: '',
                password: '',
                apassword: ''
            }
        }
    }
</script>

<style scoped lang="less">
    .register{
        padding:.5rem 0 0 0
    }
    .to_login{
        text-align: center;
        margin: .7rem 0;
        a{
            color:#0793ee;
        }
    }
</style>
