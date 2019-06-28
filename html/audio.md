## Audio/Video元素基本属性



**通过标签引入Audio/Video：controls为控件**

```html
    <audio src="./9420.mp3" controls></audio>
    <video src="./01.mp4" controls poster="./188.jpg"></video>

```

**通过JavaScript引入Audio/Video：**

```javascript
    var myAudio = new Audio("./9420.mp3");
    myAudio.controls = true;
    document.body.appendChild(myAudio);

```



|     属性     |       属性名       |
| :----------: | :----------------: |
|   视频海报   |       poster       |
|     控件     |      controls      |
|   自动播放   |      autoplay      |
|   循环播放   |        loop        |
|   视频静音   |       muted        |
|  全部预加载  |   preload="auto"   |
|  部分预加载  | preload="metadata" |
| 不进行预加载 |   preload="none"   |

**方法：**

**play() **播放

**pause() **停止

**loud() **重置媒体元素并重新载入媒体，可终止正在进行的任务或事件



**浏览器支持情况**

canPlayType()方法：

audio.canPlayType()  返回probably 或 maybe ，返回空为不支持

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
    <audio id="myAuido" src="./9420.mp3" controls></audio>
    <script>
        var myAuido = document.getElementById('myAudio');
        if(myAuido.canPlayType){
            if(myAuido.canPlayType('audio/mpeg') != ""){
                document.write('您的浏览器不支持mp3编码;');
            }
            if(myAuido.canPlayType('audio/ogg; codec="vorbis"') != ""){
                document.write('您的浏览器不支持ogg编码;');
            }
            if(myAuido.canPlayType('audio/mp4; codecs="mp4a.40.5"') != ""){
                document.write('您的浏览器不支持acc编码;');
            }    
        }else {
            document.write('您的浏览器不支持检测音频文件');
        }
    </script>
</body>
</html>

```



**currentSrc:**返回资源链接（注意要资源加载完才能获取到）

```javascript
var myAudio = document.getElementById('myAudio');
        myAudio.oncanplay = function(){
            console.log(myAudio.currentSrc);
        }

```



**duration：**媒体持续时间（总时长，注意要资源加载完才能获取到）

可由在该事件下获取 : audio.oncanplay = function() {}

**currentTime : **返回或设置资源当前时间

**volume : **音量 [0-1] ，可读可写

**muted : **静音 

​	实例：调整音频音量大小

```html
<body>
    <audio id="myAudio" src="./9420.mp3" controls></audio>
    <button id="current">currentTime</button>
    <button id="lessVolume">-</button>
    <button id="addVolume">+</button>
    <script>
        var myAudio = document.getElementById('myAudio');
        current.onclick = function(){
            console.log(myAudio.currentTime);
        }
        console.log(myAudio.volume);
        lessVolume.onclick = function(){
            var volume = parseInt((myAudio.volume - 0.1)*10)/10;
            if(volume >= 0 && volume <= 1 ){
                myAudio.volume = volume;
            }
            console.log(myAudio.volume);
        }
        
    </script>
</body>

```



**playbackRate:**读取或设置媒体资源播放的当前速率（大于1快放，小于1大于0慢放，无倒放）

```javascript
var myAudio = document.getElementById('myAudio');
id名.onclick = function(){
   myAudio.playbackRate +=0.1;
}
id名.onclick = function(){
   myAudio.playbackRate -=0.1;
}

```

**paused/ended/seeking:**查询媒体播放状态，返回 true/false

​	**paused：**是否暂停

```javascript
按钮id.onclick = function(){
    if(myAudio.paused){
    	myAudio.play();
    }
    else{
       myAudio.pause();
   }
}
```

​	**ended：**是否结束了

​	**seeking：**正在请求某一个位置的媒体数据

**played/buffered/seekable: **均返回一个TimeRanges对象

​	（timeRanges对象的length属性为部分时间段，end(i)返回已播放时间段的结束时间，start(i) 返回已播放时		间段的开始时间）

​	**played：**标明媒体资源在浏览器中已播放的时间范围。

​	**buffered：**确定浏览器已经缓存媒体文件。

​	**seekable：**表明可以对当前媒体资源进行请求。

**事件：**

**play：**媒体开始播放时触发

**pause：**媒体暂停时触发

**ended：**资源播放结束

**canplay：**浏览器能够开始播放媒体数据，但是不确定已当前的速率能否顺利地播放完媒体。

