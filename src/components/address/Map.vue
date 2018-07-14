<template>
    <div class="margin_top">
        <div id="myMap"></div>
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
    export default {
        name: "maps",
        data(){
            return{

            }
        },
        mounted() {
            // var script = document.createElement("script");
            //     script.src = "http://api.map.baidu.com/api?v=2.0&ak=pBZ1pAlmftcQrQleqITRKqi6UrewIuNe&callback="+this.initMap;
            //     document.body.appendChild(script);
            this.initMap()
        },
        methods: {
            initMap() {
                // 创建Map实例
                var map = new BMap.Map("myMap");
                // var locaAddr = sessionStorage.getItem("_location_address_");
                // locaAddr = JSON.parse(locaAddr);
                // var point = new BMap.Point(locaAddr.lng, locaAddr.lat);  // 创建点坐标
                map.centerAndZoom(new BMap.Point(121.491, 31.233), 15);    // 初始化地图，设置中心点坐标和地图级别
                map.addControl(new BMap.GeolocationControl()); // 定位控件
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
