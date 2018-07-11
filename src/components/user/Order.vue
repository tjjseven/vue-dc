<template>
    <div class="order">
        <yd-preview :buttons="btns">
            <yd-preview-header>
                <div slot="left">订单号：{{order_num}}</div>
                <div slot="right" class="order_status">状态：待支付</div>
            </yd-preview-header>

            <yd-preview-item>
                <div slot="left">
                    <img src="../../assets/img/1.png" alt="">
                    <p>鸡肉沙拉 x {{num}}</p>
                </div>
                <div slot="right" class="price">{{price}}元</div>
            </yd-preview-item>
            <yd-preview-item>
                <div slot="left">配送地址：{{address}}</div>
                <div slot="right">配送费用：0元</div>
            </yd-preview-item>
            <yd-preview-item>
                <div slot="left">送餐时间：12:00</div>
                <div slot="right" class="order_discounts">优惠减免：0元</div>
            </yd-preview-item>
            <yd-preview-item>
                <div slot="left">下单时间：12:00</div>
                <div slot="right">实付款：0元</div>
            </yd-preview-item>
        </yd-preview>
    </div>
</template>

<script>
    export default {
        name: "order",
        data() {
            return {
                order_num: '000007',
                num: '11',
                price: '100',
                address: '中国',
                btns: [
                    {
                        text: '电话',
                        click: () => {
                            alert('辅助操作');
                        }
                    },
                    {
                        text: '取消',
                        click: () => {
                            alert('辅助操作');
                        }
                    },
                    {
                        color: '#F00',
                        text: '立即支付',
                        link: {path: '/'}
                    }
                    ,
                    {
                        color: '#F00',
                        text: '查看状态',
                        link: {path: '/'}
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    @red:red;
    img{
        width: 1.2rem;
    }
    p{
        float: right;
        margin: .1rem 0 0 .2rem;
    }
    .price{
        margin: .1rem 0 0 0;
    }
    .order_status, .order_discounts{
        color:@red
    }
</style>
