<template>
    <div class="login margin_top">
        <yd-cell-group >
            <yd-cell-item>
                <span slot="left">手机号：</span>
                <yd-input slot="right" v-model="phone" regex="mobile" placeholder="请输入手机号码"></yd-input>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">验证码：</span>
                <input type="text" slot="right" placeholder="请输验证码">
                <yd-sendcode slot="right"
                             v-model="start"
                             @click.native="sendCode"
                             type="warning"
                ></yd-sendcode>
            </yd-cell-item>
        </yd-cell-group>
        <yd-button-group>
            <yd-button size="large" bgcolor="#0793ee" color="#FFF">登录</yd-button>
        </yd-button-group>
        <p class="to_register">还没账号？
            <router-link to="/register" slot="left">
                立即注册
            </router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                phone: '',
                start: false
            }
        },
        methods: {
            sendCode() {
                this.$dialog.loading.open('发送中...');
                setTimeout(() => {

                    this.start = true;
                    this.$dialog.loading.close();

                    this.$dialog.toast({
                        mes: '已发送',
                        icon: 'success',
                        timeout: 1500
                    });

                }, 1000);
            }
        }
    }
</script>

<style scoped lang="less">
    .login{
        padding:.5rem 0 0 0
    }
    .to_register{
        text-align: center;
        margin: .7rem 0;
        a{
            color:#0793ee;
        }
    }
</style>
