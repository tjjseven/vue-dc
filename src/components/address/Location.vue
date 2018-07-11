<template>
    <div class="address">
        <yd-search v-model="value" :on-submit="submitHandler"></yd-search>
        <yd-cell-group>
            <yd-cell-item>
                <span slot="left">当前位置:</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">111111111111111111</span>
                <span slot="right">
                    <img slot="icon" src="../../assets/img/lp_position.png">
                    重新定位
                </span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">附近地址:</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item arrow>
                <span slot="left">更多地址</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">收货地址:</span>
                <span slot="right"></span>
            </yd-cell-item>
        </yd-cell-group>
    </div>
</template>

<script>
    export default {
        name: "location",
        data() {
            return {
                value: '请输入您所在地址'
            }
        },
        methods: {
            submitHandler(value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            }
        }
    }
</script>

<style scoped lang="less">
    .yd-cell-item:nth-of-type(odd){
        background: #efeff4;
        .yd-cell-left span{
            color: #969696;
        }
    }

    img{
        width: .3rem;
        vertical-align: middle;
    }

</style>
