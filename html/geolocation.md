## Geolocation地理位置信息



**1、window.navigator.geolocation对象** 返回经纬坐标等元数据信息

**2、获取当前地理位置**

​    	 navigator.geolocation.getCurrentPosition(suc, err, obj);

**参数1：**suc成功回调，有参数option，属性如下：

​	 accuracy:经纬度的精度

​	altitude:null海拔

​	altitudeAccuracy:null海拔的精度

​	heading:null设备前进方向

​	latitude:34.0653347纬度

​	longitude:-118.24389099999999经度

​	speed:null设备前进速度

​	timestamp: 获取地理位置信息的时间



**参数2：**err失败回调，有参数error对象，属性如下：

code属性：

​	1 用户拒绝了位置服务

​	2 获取不到位置信息

​	3 获取信息超时

  message属性：错误信息字符串

**参数3：**obj 可选参数      

  enableHighAccuracy：是否要求高精度的地理位置信息

  timeout: 超时限制

  maximumAge: 缓存有效时间，若为0则无条件重新获取新地理信息



**3、监事位置信息**

​      var id = navigator.geolocation.watchPosition(suc, err, obj);

​      持续定期的自动获取用户的当前地理位置信息，并同计时器一样有个位置标识。

**4、停止获取位置信息**

​       navigator.geolocation.clearWatch(id);

```javascript
<script>
    var obj = {
        timeout: 10
    }
// navigator.geolocation.getCurrentPosition(suc,err,obj);
var id = navigator.geolocation.watchPosition(suc, err, obj);

function suc(position){
     console.log(position.coords.latitude + ',' + position.coords.longitude);
}

function err(positionError){
    console.log(positionError);
}
</script>
```

