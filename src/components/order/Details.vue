<template>
    <div class="details margin_top">
        <div class="order_div">
            <img src="../../assets/img/od_schedule.png" alt="">
            <div class="order_time">
                <p>已完成</p>
                <span>预计送达时间：12:00</span>
            </div>
        </div>
        <yd-step theme="1" current="3" current-color="#eb3c3c">
            <yd-step-item>
                <span slot="top">已付款</span>
            </yd-step-item>
            <yd-step-item>
                <span slot="top">商家已接单</span>
            </yd-step-item>
            <yd-step-item>
                <span slot="top">确认送达</span>
            </yd-step-item>
            <yd-step-item>
                <span slot="top">已签收</span>
            </yd-step-item>
        </yd-step>
        <yd-preview-item>
            <div slot="left" class="title">订单详情</div>
            <div slot="right"></div>
        </yd-preview-item>
        <yd-preview-item>
            <div slot="left">
                <img src="../../assets/img/1.png" alt="">
                <p>鸡肉沙拉 x 12</p>
            </div>
            <div slot="right" class="price">元</div>
        </yd-preview-item>
        <yd-preview-item>
            <div slot="left">配送费用：</div>
            <div slot="right">0元</div>
        </yd-preview-item>
        <yd-preview-item>
            <div slot="left">费用合计：</div>
            <div slot="right" class="order_discounts">0元</div>
        </yd-preview-item>
        <yd-preview-item>
            <div slot="left">配送地址：{{address}}</div>
            <div slot="right" class="order_discounts"></div>
        </yd-preview-item>
        <yd-preview-item>
            <div slot="left">收货电话：110</div>
            <div slot="right" class="order_discounts"></div>
        </yd-preview-item>
        <div class="details_footer">
            <div class="edit">
                <p><a href="tel:400-888-8888"></a><yd-icon name="phone2" size=".4rem"></yd-icon></p>
                <p>退单</p>
            </div>
            <yd-button type="primary" @click.native="confrimSend">确认送达</yd-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detail',
        data() {
            return {
                address: '伊拉克'
            }
        },
        methods:{
            confrimSend() {
                this.$dialog.alert({
                    mes: '提交成功',
                    callback: () => {
                        this.$router.replace({path: '/user/order'})
                    }});
            }
        }
    }
</script>

<style scoped lang="less">
    @float:left;
    .details{
        img{
            width: .8rem;
            float: @float;
        }
        .order_div{
            width: 50%;
            margin: 0 auto;
            overflow: hidden;
            padding: .5rem 0;
            .order_time{
                margin-left: .2rem;
                float: @float;
                p{
                    font-size: .36rem;
                    margin-top: .05rem;
                }
            }
        }
        .yd-step{
            margin: 0 0 .5rem 0;
        }
        .yd-preview-item{
            border-bottom: 1px dashed #d9d9d9;
            margin:.24rem;
            padding:0 0 .2rem 0;
            p{
                float: right;
                margin: .1rem 0 0 .2rem;
            }
        }
        .details_footer{
            width:100%;
            padding:0 .5rem;
            position: fixed;
            bottom: 0;
            .edit{
                float: @float;
                p{
                    float: @float;
                    border:1px solid #ccc;
                    border-radius: 50%;
                    width: .7rem;
                    height: .7rem;
                    line-height: .7rem;
                    text-align: center;
                    margin: 0 0 0.2rem .2rem;
                }
            }
            button{
                float:right;
                height: .7rem;
                background: #0793ee;
            }
        }
        .yd-step-item span{
            color:#666;
        }
        .title{
            padding:.1rem;
            background:#eb3c3c;
            color: #fff;
        }
    }
</style>
