<template>
    <div class="loaction margin_top">
        <yd-search :result="result" fullpage v-model="value" :item-click="itemClickHandler" :on-submit="submitHandler"></yd-search>
        <yd-cell-group>
            <yd-cell-item class="bgcolor">
                <span slot="left">当前位置:</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item>
                <router-link slot="left" to="/">
                    <span>拉斯维加斯</span>
                </router-link>
                <span slot="right">
                    <img slot="icon" src="../../assets/img/lp_position.png">
                    重新定位
                </span>
            </yd-cell-item>
            <yd-cell-item class="bgcolor">
                <span slot="left">附近地址:</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">索马里</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item arrow type="link" href="/address/map">
                <span slot="left">更多地址</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item class="bgcolor">
                <span slot="left">收货地址:</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">阿拉斯加</span>
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
                value: '请输入您所在地址',
                result: []
            }
        },
        methods: {
            getResult(val) {
                if (!val) return [];
                return [
                    'Apple', 'Banana', 'Orange', 'Durian', 'Lemon', 'Peach', 'Cherry', 'Berry',
                    'Core', 'Fig', 'Haw', 'Melon', 'Plum', 'Pear', 'Peanut', 'Other', '中国', '中国北京', '中国上海', '北京天安门'
                ].filter(value => new RegExp(val, 'i').test(value));
            },
            itemClickHandler(item) {
                this.$dialog.toast({mes: `搜索：${item}`});
            },
            submitHandler(value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            }
        },
        watch: {
            value(val) {
                this.result = this.getResult(val);
            }
        }
    }
</script>

<style scoped lang="less">
    /*.yd-cell-item:nth-of-type(odd){*/
        /*background: #efeff4;*/
        /*.yd-cell-left span{*/
            /*color: #969696;*/
        /*}*/
    /*}*/

    img{
        width: .3rem;
        vertical-align: middle;
    }

</style>
