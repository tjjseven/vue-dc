<template>
    <div class="confirm margin_top">
        <yd-cell-group>
            <yd-cell-item arrow type="link" href="/user/address">
                <span slot="left">伊拉克驻华大使馆</span>
            </yd-cell-item>
            <yd-cell-item class="send_time">
                <div slot="left">
                    <yd-cell-item arrow type="label">
                        <span slot="left">送餐时间：</span>
                        <select slot="right">
                            <option value="">未选择</option>
                            <option value="1">立即派送</option>
                        </select>
                    </yd-cell-item>
                </div>
                <span slot="right">预计1小时后送达</span>
            </yd-cell-item>
            <yd-cell-item class="bgcolor">
                <span slot="left">订单详情:</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-preview-item>
                <div slot="left">
                    <img src="../../assets/img/1.png" alt="">
                    <p>鸡肉沙拉 x 12</p>
                </div>
                <div slot="right" class="price">元</div>
            </yd-preview-item>
            <yd-cell-item class="bgcolor">
                <span slot="left">备注:</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-group title="">
                <yd-cell-item>
                    <yd-textarea slot="right" placeholder="说点什么" maxlength="100"></yd-textarea>
                </yd-cell-item>
            </yd-cell-group>
            <yd-cell-item class="bgcolor">
                <span slot="left">费用小计:</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-preview-item>
                <div slot="left">配送费用：</div>
                <div slot="right">0元</div>
            </yd-preview-item>
            <yd-preview-item>
                <div slot="left">费用合计：</div>
                <div slot="right" class="order_discounts">0元</div>
            </yd-preview-item>
        </yd-cell-group>
        <div class="sub_order">
            <yd-button @click.native="openConfrim" size="large" bgcolor="#0793ee" color="#FFF">提交订单</yd-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "confirm",
        data() {
            return {

            }
        },
        methods: {
            openConfrim() {
                this.$dialog.confirm({
                    title: '确认提交订单？',
                    // mes: '确认提交订单？',
                    opts: () => {
                        // this.$dialog.toast({mes: '你点了确定', timeout: 1000});
                        this.$router.replace({path: '/user/order'})
                    }
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .send_time{
        padding-left:0;
        .yd-cell-icon{
            margin-right: 0;
        }
    }
    .yd-cell-icon{
        margin-right: 0;
    }
    .yd-preview-item{
        border-bottom: 1px dashed #d9d9d9;
        margin:.24rem;
        padding:0 0 .2rem 0;
        p{
            float: right;
            margin: .1rem 0 0 .2rem;
        }
        img{
            width:1.2rem;
        }
    }
    .sub_order{
        padding: .5rem;
    }
</style>
