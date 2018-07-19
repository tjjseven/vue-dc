<template>
    <div class="margin_top">
        <!--<div class="center_point"></div>-->
        <div id="myMap"></div>
        <yd-cell-item v-for="(item, index) in addrList" :key="index">
            <yd-icon slot="icon" name="location" size=".3rem" color="#555"></yd-icon>
            <span slot="left">{{item.name}}</span>
            <span slot="right"></span>
        </yd-cell-item>
    </div>
</template>

<script>
    /*
     *  beforecreated：el 和 data 并未初始化
        created:完成了 data 数据的初始化，el没有
        beforeMount：完成了 el 和 data 初始化
        mounted ：完成挂载
     *
     * */
    // import BMap from 'BMap';
    import { mapState, mapGetters, mapMutations } from 'vuex'
    export default {
        name: "maps",
        data(){
            return{
                addrList: []
            }
        },
        mounted() {
            this.HEADERL(false)
            this.initMap()
        },
        methods: {
            ...mapMutations([
                'HEADERL'
            ]),
            initMap() {
                // 创建Map实例
                var map = new BMap.Map("myMap"),that = this
                // var locaAddr = sessionStorage.getItem("_location_address_");
                // locaAddr = JSON.parse(locaAddr);30.5552509695,114.3056204396
                // var point = new BMap.Point(locaAddr.lng, locaAddr.lat);  // 创建点坐标
                map.centerAndZoom(new BMap.Point(114.3056204396, 30.5552509695), 15);    // 初始化地图，设置中心点坐标和地图级别
                // map.addOverlay(new BMap.Marker(new BMap.Point(map.getCenter().lng, map.getCenter().lat))); // 显示标记
                map.addControl(new BMap.GeolocationControl()); // 定位控件

                // 地图拖拽事件
                map.addEventListener("dragend",showList);
                // 监视缩放完成事件
                map.addEventListener("zoomend",showList);
                // 显示周边地址列表
                function showList() {
                    that.addrArr = [];
                    // 删除中心点标记
                    map.clearOverlays();
                    //得到中心点的坐标
                    var center = map.getCenter();
                    map.addOverlay(new BMap.Marker(new BMap.Point(map.getCenter().lng, map.getCenter().lat))); // 显示标记
                    //通过中心点坐标获取周边的地址信息
                    var url = 'http://api.map.baidu.com/geocoder/v2/?ak=pBZ1pAlmftcQrQleqITRKqi6UrewIuNe' +
                        '&callback=JSON_CALLBACK&location=' + center.lat + ',' + center.lng + '&output=json&pois=1';
                    //显示附近的地址列表 jsonp 跨域
                    var script = document.createElement("script");
                    script.type = "text/javascript";
                    script.src = url
                    document.body.appendChild(script);
                    window.JSON_CALLBACK = function (data) {
                        /*得到移动地图的对象信息*/
                        var result = data.result;
                        console.log(result);
                        /*周边地址信息*/
                        result.pois.forEach(function (addr) {
                            that.addrList.push({
                                name : addr.addr,
                                lat : addr.point.y,
                                lng : addr.point.x,
                                cityId : result.cityCode
                            });
                        });
                        console.log(that.addrList)
                    }
                }
                showList()
            }
        }
    }
</script>

<style scoped>
    #myMap{
        width: 100%;
        height: 5rem;
        background: #ccc;
    }

</style>
