<template>
    <div class="margin_top">
        <yd-cell-group>
            <yd-cell-item class="bgcolor">
                <span slot="left">联系人信息</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">姓名：</span>
                <input slot="right" type="number" placeholder="请输入收货人姓名">
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">
                    <yd-radio-group v-model="radio" color="#0793ee">
                        <span>性别：</span>
                        <yd-radio val="1">男</yd-radio>
                        <yd-radio val="2">女</yd-radio>
                        <yd-radio val="3">不男不女</yd-radio>
                    </yd-radio-group>
                </span>
                <div slot="right"></div>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">手机号：</span>
                <input slot="right" type="number" placeholder="请输入手机号">
            </yd-cell-item>
            <yd-cell-item class="bgcolor">
                <span slot="left">地址信息</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">学校\大厦\写字楼：</span>
                <input slot="right" type="number" placeholder="阿富汗塔利班">
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">详细地址:：</span>
                <input slot="right" type="number" placeholder="请填写门牌号">
            </yd-cell-item>

        </yd-cell-group>

        <yd-button-group>
            <yd-button @click.native="subAdd" size="large" bgcolor="#0793ee" color="#FFF">新增</yd-button>
        </yd-button-group>
    </div>
</template>

<script>
    export default {
        name: "add",
        data() {
            return {
                radio: '1'
            }
        },
        methods: {
            subAdd() {
                this.$dialog.toast({
                    mes: '新增成功',
                    timeout: 1000,
                    callback: () => {
                        this.$router.replace({path: '/user/address'})
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
