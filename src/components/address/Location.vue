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
                    <span>{{localAddress}}</span>
                </router-link>
                <span slot="right" @click="relocation">
                    <img slot="icon" src="../../assets/img/lp_position.png" :class="{posing : isLocation}">
                    重新定位
                </span>
            </yd-cell-item>
            <yd-cell-item class="bgcolor">
                <span slot="left">附近地址:</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item v-for="(item, index) in aroundAddrList" :key="index">
                <span slot="left">{{item}}</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item arrow type="link" href="/address/map" class="more_addr">
                <span slot="left">更多地址</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item class="bgcolor">
                <span slot="left">收货地址:</span>
                <span slot="right"></span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">{{city}}</span>
                <span slot="right"></span>
            </yd-cell-item>
        </yd-cell-group>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    export default {
        name: "location",
        data() {
            return {
                value: '请输入您所在地址',
                result: [],
                localAddress: this.propLocation.localAddress, //  接收props地址，并传递给data：localAddress
                aroundAddrList: [],
                city: this.propLocation.city,
                isLocation: false
            }
        },
        props:{
            propLocation: {
                type: Object
            }
        },
        mounted() {
            this.HEADERL(false)
            console.log(this.propLocation)
        },
        computed: {
            ...mapGetters([
                'getL'
            ])
        },
        methods: {
            ...mapMutations([
                'HEADERL'
            ]),
            relocation() {
                this.localAddress = '正在定位中...'
                this.isLocation = true
                var that = this
                this.getL.then((data)=>{
                    setTimeout(function () {
                        // console.log(data)
                        that.localAddress = data.localAddress
                        that.city = data.city
                        that.isLocation = false
                        /*显示周边地址*/
                        that.showAroundAddrs(false, data.city)
                    },1000)

                }).catch((err)=>{
                    console.log(err)
                    this.localAddress = '网络故障'
                })
                //
            },
            /*通过当前定位坐标获取周边的地址信息*/
            showAroundAddrs(keyName, city) {
                this.aroundAddrList = []
                /*判断输入的地址关键字是手动输入还是自动定位获取*/
                var keyNames = keyName ? keyName : this.localAddress, that = this
                var url = 'http://api.map.baidu.com/place/v2/search?q='
                    + keyNames + '&region='+city+
                    '&output=json&ak=aDvS9fDTEwGEUFRiVlTt6koBLHTcYTny' +
                    '&callback=JSON_CALLBACK';
                //显示附近的地址列表 jsonp 跨域
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = url
                document.body.appendChild(script);
                window.JSON_CALLBACK = function(data) {
                    // console.log(data)
                    if(data.status===0){
                        var addrs = data.results;
                        addrs.forEach((item)=> {
                            that.aroundAddrList.push(item.name)
                        })
                        if(keyName){
                            console.log(that.aroundAddrList);
                            console.log("searchList搜索");
                        }else{
                            console.log(that.aroundAddrList);
                            console.log("loactionList定位");
                        }
                    }

                }


                // this.$ajax({
                //     method: 'get',
                //     url: url
                // }).then(function (data) {

                //
                // }).catch((err) => {
                //     if (err) {
                //         console.log(err)
                //     }
                // })
            },

            // 搜索地址
            getResult(val) {
                if (!val) return [];
                /*显示周边地址*/
                this.showAroundAddrs(val, this.city)
                console.log(this.city)
                return this.aroundAddrList;
            },
            itemClickHandler(item) {
                // this.$dialog.toast({mes: `搜索：${item}`});
            },
            submitHandler(value) {
                // this.$dialog.toast({mes: `搜索：${value}`});
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
    .more_addr span{
        color:#969696;
    }
    img{
        width: .3rem;
        vertical-align: middle;
    }
    /*旋转动画*/
    @-webkit-keyframes rotate {
        from {-webkit-transform:rotate(0deg);}
        to {-webkit-transform:rotate(360deg);}
    }
    /*正在定位中样式(旋转动画)*/
    .posing {
        overflow: hidden;
        -webkit-animation-name: rotate;
        -webkit-animation-duration: 0.1s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
    }
</style>
