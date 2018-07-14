<template>
    <yd-navbar title="" bgcolor="#3e3e3e" fixed>
        <router-link to="/location" slot="left" v-if="this.$store.state.headerL">
          <yd-icon name="location" size="20px" color="#d7d7d7"></yd-icon>
          <span>&nbsp;{{locationMsg}}</span>
        </router-link>
        <router-link to="/" slot="left" v-else>
            <yd-icon name="location" size="20px" color="#d7d7d7"></yd-icon>
            <span>&nbsp;返回</span>
        </router-link>
        <router-link to="/user" slot="right">
          <yd-icon name="ucenter-outline" size="20px" color="#d7d7d7"></yd-icon>
          <span>&nbsp;个人中心</span>
        </router-link>
    </yd-navbar>
</template>

<script>
    export default {
        name: "headers",
        data() {
            return{
                locationMsg : '正在定位中...'
            }
        },
        mounted() {

            this.getLocation()
        },
        methods: {
            getLocation() {
                //创建一个定位对象
                var geolocation = new BMap.Geolocation(),that = this;
                //获取当前的定位
                geolocation.getCurrentPosition(function(r){
                    if(this.getStatus() == BMAP_STATUS_SUCCESS){//成功了
                        var point = r.point;
                        //创建用来得到地址的对象
                        var geoc = new BMap.Geocoder();
                        //获取指定point的地址
                        geoc.getLocation(point, function(rs){
                            //得到结果中的地址组件对象
                            var addComp = rs.addressComponents;
                            that.locationMsg = addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                            //保存地址到sessionStorage
                            sessionStorage.setItem("_city_",JSON.stringify(addComp.city));
                            sessionStorage.setItem("_location_address_",JSON.stringify(that.locationMsg));
                            console.log("-------------");
                            console.log(addComp);
                        });
                    }
                    else {
                        alert('failed'+this.getStatus());
                    }
                },{enableHighAccuracy: true})
            }
        }
    }
</script>

<style scoped>
  .addr_photo,.toux_photo{
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url("../assets/img/addr.png") no-repeat center center/cover;
  }
  span{
    color: #d7d7d7;
  }
    .yd-navbar-item{
        overflow: auto;
    }
</style>
