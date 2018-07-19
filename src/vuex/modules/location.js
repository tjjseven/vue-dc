const location = {
    getLocation(state) {
        return new Promise(function (res, rej) {
            //创建一个定位对象
            var geolocation = new BMap.Geolocation(),that = this;
            //获取当前的定位
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){//成功了
                    var point = r.point;
                    console.log("-------------");
                    //创建用来得到地址的对象
                    var geoc = new BMap.Geocoder();
                    //获取指定point的地址
                    geoc.getLocation(point, function(rs){
                        //得到结果中的地址组件对象
                        var addComp = rs.addressComponents;
                        var localAddress = addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                        var city = addComp.city
                        res({
                            localAddress: localAddress,
                            city: city
                        })
                        //保存地址到sessionStorage
                        // sessionStorage.setItem("_city_",JSON.stringify(addComp.city));
                        // sessionStorage.setItem("_location_address_",JSON.stringify(that.locationAddr));
                        // rej('定位失败')
                        // console.log(addComp);
                    });
                } else {
                    rej('定位失败')
                    alert('failed'+this.getStatus());
                }
            },{enableHighAccuracy: true})
        })



        // return new Promise(function (resolve, reject) {
        //     if (navigator.geolocation){
        //         navigator.geolocation.getCurrentPosition(showPosition,showError);
        //     }else{
        //         alert("浏览器不支持地理定位。");
        //     }
        //
        //     function showPosition(position) {
        //         //得到html5定位结果
        //         var x = position.coords.longitude;
        //         var y = position.coords.latitude;
        //         var ggPoint = new BMap.Point(x,y);
        //
        //         var convertor = new BMap.Convertor();
        //         var pointArr = [];
        //         pointArr.push(ggPoint);
        //         //由于html5定位的结果是国际标准gps，所以from=1，to=5
        //         convertor.translate(pointArr, 1, 5, function (convRst) {
        //             // var point = new BMap.Point(convRst.x, convRst.y)
        //             console.log(convRst)
        //             resolve(convRst)
        //         })
        //     }
        //
        //     function showError(error) {
        //         switch (error.code) {
        //             case error.PERMISSION_DENIED:
        //                 alert("定位失败,用户拒绝请求地理定位");
        //                 break;
        //             case error.POSITION_UNAVAILABLE:
        //                 alert("定位失败,位置信息是不可用");
        //                 break;
        //             case error.TIMEOUT:
        //                 alert("定位失败,请求获取用户位置超时");
        //                 break;
        //             case error.UNKNOWN_ERROR:
        //                 alert("定位失败,定位系统失效");
        //                 break;
        //         }
        //     }
        //
        // })
    }
}
export default location
