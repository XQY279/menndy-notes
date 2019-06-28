[TOC]



















# HTML

## HTML常用标签

```html
<b></b>       粗体
<i></i>       斜体
<u></u>       下划线
<s></s>       删除线
<del></del>   删除线
<sup></sup>   上标
<sub></sub>   下标
<p></p>        段落
<br>           换行
<h1> ~ <h6>     标题权重大小标签
```

**列表：** 

1. 有序列表

```html
<ol type="a">
	<li>有序列表</li>	
    <li>有序列表</li>
</ol>
```

2. 无序列表

```html
<ul type="square"> <!--square列表开头为方块-->
	<li>无序列表</li>	
    <li>无序列表</li>
</ul>
```

3. 定义列表（一般用于解释）

```html
<dl>
	<dt>你什么事回家？</dt> 内容的标题
	<dd>晚上八点。</dd> 内容 
</dl>

```



```html
<pre></pre>  预定义文本标签 （保留空格和换行符）

&lt;body&gt;   对HTMl转义 

&nbsp;&nbsp;  为一个空格

<abbr title="Hyper text markup language">HTML</abbr> 
 缩写说明（对文字的内容进行解释）
```



**超链接标签 :** 

```html
<a href="http://www.baidu.com" target="blank">百度</a> 	target="blank" 在新窗口打开
```



**锚点标签：** 

```html
<a href="#">回到页面最顶上</a>   点击回到页面顶部
```

```html
<a href="#test">页面指定位置</a>    
<span id="test">				到达页面指定位置
```

**图片链接：**

```html
<img src="../动画/蓝色星星.png" title="文字"> 
<!-- ../ 为上一级 ；  title="文字" 鼠标放在图片上有文字显示 -->     

```

**图片映射：（图片中多个可点击区域）**

```html
<img src="123.jpg" alt="" usemap="#test"> <!--usemap="#test" 使用地图-->
<map name="test"> <!--地图-->
	<area shape="circle" coords="376,232,50" href="http://baidu.com" 			alt="" 			target="blank"><!--可点击区域-->
	<area shape="rect" coords="591,184,720,288" 	 
		href="http://mba.sjtu.edu.cn" alt="" target="blank">
<!--shape=""可点击区域形状  poly多边形 circle圆 rect矩形; coords=""坐标 -->
</map>

```

**表格：** 

```html
<caption>标题</caption>
<table border="1px" cellspacing="5px"> 
<!--border为边框 cellspacing 指单元格之间的距离-->
<tr></tr>    行标签
<th></th>    表头标签
<td></td>    数据列
colspan="2"  和并列
rowspan="2"  合并行
</table>
```



**媒体：** 

```html
<audio src="音频文件" controls="controls" loop="5"></audio>
	<!--音频标签
	controls="controls"控制器 
	autoplay="autoplay"自动播放
	loop="5"播放次数-->
<video src="视频文件"></video>    视频标签

```









## HTML5概述.新特性

​	HTML5 w3c规范在2008年提出

**HTML5理念**

​	1.避免不必要的复杂

​	2.支持已有的写法

​	3.解决实际问题

​	4.优雅降级  （当浏览器不支持新的写法时会优雅降级到默认的值上）

​	5.用户优先  （用户>开发者>浏览器开发厂商>标准制定者>理论上的完美 )

**Doctype**

​	指web浏览器关于页面使用哪个HTML版本进行编写指令。

​	html5简化如下：<!DOCTYPE html>；

**标准模式，怪异模式**

​	验证：

​		在js中打印（“document.comapatMode“）

​		BackCompat->表示怪异模式

​		Css1Compat ->表示标准模式

​	区别：

​		1.标准盒模型和ie6混杂盒模型：标准下盒子宽度=width+padding+border;  ie6之前才会触发ie6混合

​		2.table字体在标准模式下继承body，怪异模式下不继承body

​		3.ie6以下版本中可以给span等行元素设置宽高

​		4.即使父级没有高度，也可以设置百分比高度

​		5.ie6以下 margin：0 auto 不能左右居中

​		6.ie6以下的图片padding失效



ie6混杂模式盒模型 把padding border都缩在width里面了，导致content区域变小 

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/盒模型.png)



**HTML5新特性** 

​	1.主要的新特性

​	2.新语义元素

​	3.forms 2表单元素 HTML网页表单的改进，其中为 input 标签引入了新属性。

​	4.音视频

​	5.画布

​	6.拖放

​	7.文件读取

​	8.回调函数管理api

​	9.地理位置

​	10.执行脚本多线程worker

​	11.本地储存

​	12.websocket

​	13.HistoryAPI

​	14.跨文档通信postmessage



​															                        



## 常用元素：HTML5结构元素

**html5结构元素**

1. header 整个页面的头部，某块区域的标题 页眉。
2. footer 文档或某一块的底部 页脚。
3. main 主要内容区域。
4. nav 导航链接部分。
5. section 页面中一个内容区域。
6. article 它代表一个独立的完整的相关内容块。
7. aside 元素表示一个页面的一部分，它的内容跟这个页面的其他内容的关联性不强，或者没有关联，单独存在。
8. figure 标签规定独立的流内容（图像 图表 照片 代码等等）。

![](/Users/xiangqingyuan/Desktop/web/web实战-笔记/布局.png)

​                                     

**Iframe:嵌套页面** 

```html
<iframe src="http://www.baidu.com" frameborder="0"></iframe> 
<!--嵌套页面 -->

 frameset：与body平级，有frameset没body
<frameset rows="20%,80%">
	<frame src="123.html">
	<frame src="456.html">
</frameset>
```



块元素：独立成一行 可以设置宽高 默认宽高100%

文字块元素： p    h1~h6

容器类块元素： div   table   tr   td   th  form  ul li  ol  li  dl dt dd

 

行元素：不独立成一行 不可以设置宽高 内容决定

a  img  input  strong  em  del  span 

 

特殊字符：文字 br     & nbsp;

 

嵌套规则

1. 块元素可以嵌套行元素

2. 行元素可以嵌套行元素

3. 行元素不可以嵌套块元素

4. 文字类块元素不可以嵌套块元素

5. 容器类块元素可以嵌套块元素

​                                                                                                                 



## 常用元素：HTML5功能元素

**video 视频** 

**audio 音频** 

**source 资源** 

**figcaption 标签定义 figure 元素的标题 ** 

**canvas 画布 ** 

**progress 进程**  （进度条） 

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
    <style>
        span{
            display: none;
        }
    </style>
</head>
<body>
    <progress id="pro" max="100" min="0" value="0"></progress>
    <span id="ok">完成</span>
    <script>
        var tinmer = setInterval(function(){
            if(pro.value == 100){
                clearInterval(tinmer);
                ok.style.display = "block";
                return; //清除后不继续执行
            }
            pro.value +=10;
        },100) 
    </script>
</body>
</html>
```

​                                                                                                                                                           ----2018.9.17



## 常见元素：HTML5表单元素

**表单元素**

```html
    <form action="xxxx.aspx" method="get">
		action="xxxx.aspx"   表单里的元素提交页面
		method="get"  传值方式
		get  传比较小的数据
		post  数据较多的安全系数较高的
	<input type="text"> 文本输入框
    <input type="radio"> 小圆点 （当name值相同时只能单选）
	<input type="checkbox"> 一般用于复选框
    <input type="submit"> 提交按钮
    <input type="password"> 密码框
    <input type="button"> 普通的按钮
    <input type="file"> 上传文件  属性：multiple上传多个文件
	<input type="tel"> 电话输入框
    <input type="range" max="100" min="0" step="2"> 进度条
				属性：min 最小数字  max 最大数字  step 变换步长
    <input type="number"> 数字
    <input type="email"> 电子邮箱
    <input type="date"> 年月日
    <input type="month"> 年月
    <input type="week"> 年周
    <input type="time"> 时间
    <input type="datetime-local"> 表示本地时间和日期
    <input type="color"> 调出颜色面板
    <textarea name="text" cols="50" rows="20"></textarea>
			多行输入框   cols宽度 rows高度
	<input type="text" autofocus="autofocus"> autofocus="autofocus" 自动获取焦点（光标）
	<input type="reset">	 重置
	<input type="submit">	提交
```

**属性：**

​	placeholder 提示  （在输入框中提示该输入的内容）

```html
        <input type="tel" placeholder="请输入电话号码">
```

​	pattern 验证input 类型输入框中内容是否与正则匹配

```html
        <input id="test" type="text" pattern="^\d{6}$">
```

​	文本框下拉菜单

```html
<form autocomplete="on"> <!-- autocomplete="on" 自动筛选-->
    <input type="text" list="taglist">
<datalist id="taglist">
    <option>test</option>
</datalist> 
</form>
```

​	在表单标签外提交

```html
<form action="index.aspx" method="post" id="form1"> <!--在表单标签外提交-->
<input type="text" name="username">
<input type="text" name="pwd" formaction="index1.aspx"> 
<!--formaction="index1.aspx" 将文本框内数据单独提交到新页面--> 
<input type="submit"> 
</form>
<input type="password" form="form1">

```







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



## canvas画布

**应用场景**

1.游戏场景

2.大量数据图表

3.动画

[Demo网站](http://codepen.io)

**发展历史及支持情况**

1.Canvas标记由Apple在Safari1.3 Web浏览器中引入

2.目前主流浏览器都支持，ie9之前的不支持

3.html5

**使用**

html：

```html
    <canvas id="myCanvas" width="400" height="400"></canvas>
```

​	width和height只是单位，不是像素（是将它的宽高平均分成400份）

js：

```javascript
var myCanvas = document.getElementById('myCanvas');   相当于画布
var ctx = myCanvas.getContext('2d');   相当于画笔
```

**绘制图形**

**1.直线**

​	moveTo(x,y)画笔挪到(x,y)点

​	lineTo(x,y)画笔划线到(x,y)点

样式：

​	stroke()描边画

​	lineWidth = 20; 设置线宽

​	strokeStyle = 'red' 线的颜色

​	closePath()闭合路径

​	fill()填充画

​	fillStyle = 'red';填充颜色





开启新路径  beginPath()

​	fill和stroke方法都是作用在当前的所有子路径

​	若想开辟新的路径需要使用beginPath()方法。

​	在绘制新路径之前使用beginPath()

**2.矩形**

​	rect(x,y,w,h)；矩形 (前两个是坐标，后两个是宽高)

​	strokeRect(x,y,w,h) 描边画矩形

​	fillRect(x,y,w,h) 填充画矩形

​	

**3.圆形** 

arc(x,y,r,sAngle,eAngle,c);(x轴，y轴,半径,起始弧度，终止弧度，顺时针逆时针true/false)

```javascript
ctx.arc(200,200,100,0,Math.PI*2,true);
```



**4.曲线：**两条切线之间的弧或者曲线

arcTo(x1,y1,x2,y2,r);



**5.二次方，三次方曲线方程** 贝塞尔曲线

quadraticCurveTo(cpx, cpy,  x, y); 控制点，结束点

bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);



![二次贝塞尔曲线](C:\Users\86185\Desktop\web\web实战-笔记\1415845715278-bezier-quadratic-animation.gif)



**设置图形样式**

1.线样式

lineWidth线条宽度

lineCap：线两头样式butt /square /round

lineJoin: 两线拐角处miter /round /bevel

miterLimit: 绘制焦点方式

![fullsizerender](C:\Users\86185\Desktop\web\web实战-笔记\fullsizerender.jpg)



2.渐变

createLinearGradient(x1,y1,x2,y2); 线性渐变

```javascript
var bg = ctx.createLinearGradient(0,0,400,400);
bg.addColorStop(0,'red');
bg.addColorStop(1,'green');
ctx.fillStyle = bg;
ctx.fillRect(0,0,400,400);
```

createRadialGradient(x1,y1,r1,x2,y2,r2); 径向渐变



3.绘制图案

createPattern(img,'repeat|repeat-x|repeat-y|no-repeat');

img:图片，画布，视频元素

注意：等资源加载完



**操作图形**

1. translate(dx,dy)  重新映射画布上的(0,0)位置

2. scale(sx,sy) 缩放当前绘画

3. rotate(Math.PI) 旋转当前绘画

   ​			(1.2.3 方法操作的是整个画布)

4. save() restore() 保存当前图像状态的一份拷贝，栈中弹出储存的图形状态并恢复

5. setTransform(a,b,c,d,e,f) 变换矩阵 ，先重置再变换

​	（参数：水平缩放，水平倾斜，垂直倾斜，垂直缩放，水平移动，垂直移动）

6. transform(a,b,c,d,e,f) 在之前的基础上变换 

7. clearRect(x,y,dx,dy); 擦除当前区域  （起始点，宽高）

   ​	鼠标滑过擦除

   ```javascript
   var myCanvas = document.getElementById('myCanvas');
   var ctx = myCanvas.getContext('2d');
   
   var w = myCanvas.width;
   var h = myCanvas.height;
   
   ctx.fillRect(0,0,w,h);
   myCanvas.onmousemove = function(e){
       ctx.clearRect(e.clientX-25,e.clientY-25,50,50);
   }
   ```

8. globalCompositeOperation 组合图形



![fullsizerender(1)](C:\Users\86185\Documents\Tencent Files\2035490482\FileRecv\MobileFile\fullsizerender(1).jpg)

​		刮刮乐效果：

```javascript
ctx.fillStyle ='red';
ctx.fillRect(0,0,400,400);

ctx.globalCompositeOperation ='destination-out';
ctx.beginPath();
myCanvas.onmousemove = function(e){
    ctx.arc(e.clientX,e.clientY,30,0,Math.PI*2);
    ctx.closePath();
    ctx.fillStyle ='blue';
    ctx.fill();
}
```



**绘制图像**

1. drawImage导入图片

   drawImage(image,x,y);在画布上定位图像

   drawImage(image,x,y,width,height);在画布上定位图像，并规定图片的宽度和高度

   drawImage(image , sx , sy , swidth , sheight , x , y , width , height);剪切图像并且在画布上定位被剪切的部分

2. getImageData(x , y , dx , dy) //同源策略

3. createImageData(w , h) 创建新的ImageDate对象

4. putImageDate(imgData , x , y) 将图像数据放回画布上

```javascript
var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');
var w = myCanvas.width;
var h = myCanvas.height;

var img = new Image();
img.src = '././177.jpg';

img.onload = function(){
    ctx.drawImage(img,100,100);
}

```

**抽取canvas为图片**

canvas.toDataURL(); 将canvas的内容抽取成一张图片，base64编码格式

注：同源策略限制，要开启服务器，在www目录下打开

将canvas的内容放入img元素里



**模糊问题**

1. 位图放大会失真，canvas为为位图像素。
2. canvas绘图时，会从两个物理像素的中间位置开始绘制并向两边扩散0.5个物理像素。由于不存在0.5个像素，两边都抽取了一个像素，视觉上就造成了模糊。

解决方案：放大再缩小展示



## SVG



**应用场景**

1、图形（脑图）
2、图标、logo（矢量图）
3、动效

**发展简史及支持情况**

1、在2003 年，SVG 1.1 被确立为 W3C 标准
2、Firefox、IE9+、Chrome、Safari

**使用**

HTML

```html
    <svg xmlns="http://www.w3.org/2000/svg" version=“1.1”></svg>
```

JS

```javascript
var char = "http://www.w3.org/2000/svg";
var svg = document. createElementNS(char, 'svg’);
```

SVG元素对象一般通过调用setAttribute()方法来设定属性值

**基础元素**

```html
直线
	<line x1="100" y1="100" x2="200" y2="100"></line>
矩形
	<rect x="100" y="100" width="100" height="100" rx="20"ry="50"></rect>
圆形
	<circle cx="100" cy="100" r="50"></circle>
椭圆
	<ellipse rx="100" ry="50" cx="250" cy="250"></ellipse>
多边形
	<polygon points="100 100, 70 150, 130 150"></polygon>
折线
	<polyline points="0 100, 100 35, 200 150, 300 75, 400 150, 500 20"></polyline>
字体
	<text x="300" y="300">蝉壳</text>
```

**基础样式**

1、fill: transparent;  填充

2、stroke: red;  描边

3、stroke-width: 10px;  线宽

4、stroke-opacity/fill-opacity: 0.5;  描边/填充 的透明的

5、stroke-linecap: butt/round/square;  线段两端的样式

6、stroke-linejoin:bevel/round/miter; 两线焦点的样式 

![image-20181007160840254](/Users/xiangqingyuan/Library/Application Support/typora-user-images/image-20181007160840254.png)



**重要元素：路径**

<path>元素可以定义一个路径，属性说明如下：
d: 定义路径指令:
​	M = moveto 移动到
​	L = lineto 画线到
​	H = horizontal lineto 水平线到
​	V = vertical lineto 垂直线到
​	C = curveto三次贝塞尔曲线到
​	S = smooth curveto光滑三次贝塞尔曲线到
​	Q = quadratic Bezier curve二次贝塞尔曲线到
​	T = somooth quadratic Bezier curve 光滑二次贝塞尔曲线到
​	A = elliptical Arc 椭圆弧 A 70 120 0 1 1 150 200 

​	(起始点x  起始点y  旋转  顺逆时针  取大弧/小弧  终点x  终点y)

![image-20181007160929942](/Users/xiangqingyuan/Library/Application Support/typora-user-images/image-20181007160929942.png)

​	Z = closepath关闭路径

注：以上所有命令均允许小写，大写表示绝对定位，小写表示相对定位



**路径属性**

1、stroke-dasharray: 10px; 画多少空多少 画出一条线

2、stroke-dashoffset: 15px;  线向左缩进

注：getTotalLength获取路径长度

**渐变**

```html
1.线性渐变
<defs>
    <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0%" style="stop-color:rgb(255,255,0);"/>
        <stop offset="100%" style="stop-color:rgb(255,0,0);"/>
    </linearGradient>
</defs>
<rect x="0" y="0" width="500" height="500"style="fill:url(#bg1)"/>

2.径向渐变
<defs>
    <radialGradient id="bg2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style="stop-color:green;"/>
        <stop offset="100%" style="stop-color:red;"/>
    </radialGradient>
</defs>

```



**滤镜**

1.高斯滤镜

```html
<defs>
    <filter id="Gaussian_Blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="20"/>
    </filter>
</defs>
<rect x="0" y="0" width="500" height="500" fill=”yellow” style="filter:url(#Gaussian_Blur)"/>

```

2.其他滤镜
http://www.w3school.com.cn/svg/svg_filters_intro.asp



**在线编辑工具 Method Draw**

地址：http://editor.method.ac/



**viewbox**

1、viewBox属性

```html
<svg width="400" height="300" viewBox="0,0,40,30" style="border:1px solid #cd0000;">
    <rect x="10" y="5" width="20" height="15" fill="#cd0000"/>
</svg>
```

2、  preserveAspectRatio(作用的对象都是viewBox) 
​	preserveAspectRatio=“xMidYMid meet”参数1：viewBox在svg中对齐方式（图片）
​	参数2：高宽比
​	meet:保持纵横比缩放viewBox适应viewport
​	slice:保持纵横比同时比例小的方向放大填满viewport  (在均匀缩放的同时保持viewbox的宽高比)
​	none: 不保持自己的宽高，扭曲纵横比以充分适应viewport

![1537963766970](C:\Users\86185\AppData\Roaming\Typora\typora-user-images\1537963766970.png)



**SVG运动动画**

```html
<animate attributeName="x" from="0" to="400" begin='0s' dur="1s" repeatCount="indefinite"> </animate>
```

​	attributeName=" " 改变物体的属性 

​	attributeName="x" 运动的方向 X / Y 

​	attributeName="opacity" 改变物体透明度

​	from="0" to="400"  从某处运动到某处

​	values="20;10;20"  从某处到某处再回到某处

​	begin='0s'  开始时间

​	dur="1s"  运动总时长

​	repeatCount="indefinite"  运动次数 



**Canvas VS SVG**  

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/图片 1.png)

![图片 2](/Users/xiangqingyuan/Desktop/web/web实战-手册/图片 2.png)

## 命名规则

| 网页公共命名           |                          |
| ---------------------- | ------------------------ |
| #wrapper               | 页面外围控制整体布局宽度 |
| #container或#content   | 容器,用于最外层          |
| #layout                | 布局                     |
| #head, #header         | 页头部分                 |
| #foot, #footer         | 页脚部分                 |
| #nav                   | 主导航                   |
| #subnav                | 二级导航                 |
| #menu                  | 菜单                     |
| #submenu               | 子菜单                   |
| #sideBar               | 侧栏                     |
| #sidebar_a, #sidebar_b | 左边栏或右边栏           |
| #main                  | 页面主体                 |
| #tag                   | 标签                     |
| #msg #message          | 提示信息                 |
| #tips                  | 小技巧                   |
| #vote                  | 投票                     |
| #friendlink            | 友情连接                 |
| #title                 | 标题                     |
| #summary               | 摘要                     |
| #loginbar              | 登录条                   |
| #searchInput           | 搜索输入框               |
| #hot                   | 热门热点                 |
| #search                | 搜索                     |
| #search_output         | 搜索输出和搜索结果相似   |

| #searchBar           | 搜索条             |
| -------------------- | ------------------ |
| #search_results      | 搜索结果           |
| #copyright           | 版权信息           |
| #branding            | 商标               |
| #logo                | 网站LOGO标志       |
| #siteinfo            | 网站信息           |
| #siteinfoLegal       | 法律声明           |
| #siteinfoCredits     | 信誉               |
| #joinus              | 加入我们           |
| #partner             | 合作伙伴           |
| #service             | 服务               |
| #regsiter            | 注册               |
| arr/arrow            | 箭头               |
| #guild               | 指南               |
| #sitemap             | 网站地图           |
| #list                | 列表               |
| #homepage            | 首页               |
| #subpage             | 二级页面子页面     |
| #tool, #toolbar      | 工具条             |
| #drop                | 下拉               |
| #dorpmenu            | 下拉菜单           |
| #status              | 状态               |
| #scroll              | 滚动               |
| .tab                 | 标签页             |
| .left .right .center | 居左、中、右       |
| .news                | 新闻               |
| .download            | 下载               |
| .banner              | 广告条(顶部广告条) |

| 电子贸易相关          |          |
| :-------------------- | :------- |
| .products             | 产品     |
| .products_prices      | 产品价格 |
| .products_description | 产品描述 |
| .products_review      | 产品评论 |
| .editor_review        | 编辑评论 |
| .news_release         | 最新产品 |
| .publisher            | 生产商   |
| .screenshot           | 缩略图   |
| .faqs                 | 常见问题 |
| .keyword              | 关键词   |
| .blog                 | 博客     |
| .forum                | 论坛     |

| CSS文件命名          | 说明       |
| -------------------- | ---------- |
| master.css,style.css | 主要的     |
| module.css           | 模块       |
| base.css             | 基本共用   |
| layout.css           | 布局，版面 |
| themes.css           | 主题       |
| columns.css          | 专栏       |
| font.css             | 文字、字体 |
| forms.css            | 表单       |
| mend.css             | 补丁       |
| print.css            | 打印       |

**CSS命名**

书写规范：
1、命名小写，不用下划线_，与js区分
2、尽量用能看懂的英文
3、颜色#ccbbaa，写成#cba

**CSS书写顺序**

1.位置属性(position, top, right, z-index, display, float等)
2.大小(width, height, padding, margin)
3.文字系列(font, line-height, letter-spacing, color- text-align等)
4.背景(background, border等)
5.其他(animation, transition等)



## Drag和Drop拖放操作

在拖拽的元素上设置属性draggable 当值为true可以拖拽

```html
    <div class="drag" draggable="true">drag</div>
```



**拖放API基础**

drastart：被拖放元素  开始被拖放时触发

drag：被拖放元素  在拖拽的过程中触发

draged：被拖放元素  拖拽完成时

dragenter：目标元素  拖放元素进入目标时

dragover：目标元素  拖放元素在目标上时

dragleave：目标元素  拖放元素在目标元素上离开

drop：目标元素  被拖放的元素在目标元素上同时鼠标放开触发的事件 

​		（ 注：需要阻止dragover的默认行为才会触发drop事件 ）

```javascript
drag.addEventListener('drag', function () {
  console.log('drag');
});
```



**DataTransfer对象**

1、getData()向DataTransfer对象中存放数据

2、setData()从DataTransfer对象中读取数据



```javascript
drag.addEventListener('dragstart', function (e) {
  var dt = e.dataTransfer;
  dt.setData('id', this.className);
  console.log('dragstart');
});
```





## FileReader文件操作

**fileList and file**

1、fileList: 表示用户选择的文件列表

2、file: 表示file控件内的每一个被选择的文件对象。fileList为这些file对象的列表



**fileReader对象**

负责把文件读入内存，并且读取文件中的数据。

1、读取并显示文件

​	readAsText()将文件中的数读取为问文本数据

​	readAsBinaryString()读取为二进制字符串

​	readAsDataURL()读取为DataURL字符串

​	readAsArrayBuffer()读取为一个ArrayBuffer对象

​	abort()中断读取操作

2、检测读取事件

​	onabort：数据读取中断时触发

​	onprogress: 数据读取中触发

​	onerror: 数据读取出错时触发

​	onload：数据读取完成时触发

​	onloadstart: 数据开始读取时触发

​	onloadend: 数据读取完成时触发，无论成功还是失败

**Blob对象**

​	1、blob对象的访问

​	2、blob对象的创建

​	3、截取blob对象

**把文件进行裁剪：**silce(0,2)



## 优化WEB动画

**计时器做动画存在的问题：**

1、当前窗口不在动画页面时，计时器仍将继续工作

2、回调函数执行耗时，倒是排队

3、设置动画频率高，倒是过度绘制，出现掉帧。浏览器屏幕刷新频率 1000/60 = 16.7ms



**requestAnimationFrame优势：**

1、当前窗口不在动画页面时，停止工作

2、浏览器刷新屏幕时自动执行，无需设置时间间隔

3、浏览器优化



**requestAnimationFrame使用：**

1、req = requestAnimationFrame(cb);屏幕每次绘制时执行回调函数cb

2、cancelAnimationFrame(req);  清除计时器

```javascript
var req;
function move(){
    var l = oDemo.offsetLeft;
    if(l < 1000){
        oDemo.style.left = l + 1 + 'px';
        req = requestAnimationFrame(move);
    }else{
        oDemo.style.left = '1000px';
    }
}

oStop.onclick = function(){
    cancelAnimationFrame(req);
}
move();
```



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



## Worker多线程处理

**使用场景**

大型数据运算、计时器、异步请求、访问navigator部分属性、js核心对象



**使用Worker**

![image-20181009162744775](/Users/xiangqingyuan/Library/Application Support/typora-user-images/image-20181009162744775.png)

![image-20181009162753549](/Users/xiangqingyuan/Library/Application Support/typora-user-images/image-20181009162753549.png)



**结束worker**

1、close() 在worker文件中使用

2、terminate() 在worker对象上调用（worker.terminate）



**局限性**

1、不能跨域加载（所以我放到了服务器下）

2、worker文件不能访问DOM









# CSS

## CSS基础

**原理：** 

一．优先原则：后解析的内容会覆盖掉之前解析的内容

1. 同一个选择器：文件从上往下执行

2. 同一类型选择器：从上往下

3. 不同的选择器：先解析低优先级 再解析高优先级 高优先级在后

​             优先级：       * < div < class <id

4. 外部样式 内部样式 合并之后一起解析的 先外部样式后内部样式

5. 内联样式：外部和内部解析完之后，再解析内联样式

6. 加了 ！important 字段的 最后执行

二．继承原则：嵌套里面的标签拥有外部标签的某些样式 子元素可以继承父元素的属性

1. 文字 文本样式可以被继承  其他不能被继承

2. 块级元素 宽度不设置会继承父级元素的宽度，高度由内容决定



**css三种引入方式**

1. 内部样式表 style

2. 外部样式表 link 

3. 行内样式


**css选择器权重**  (256进制)

​	无限大 !import

​	1000    行间样式 

​	100      id选择器

​	10        class选择器||属性选择器||伪类选择器

​	1          标签选择器

​	0          通配符选择器

**文档流**

文档流

​	页面 从上往下 从左往右 排列的 

脱离文档流

​	不受原来文档流管理

​	三种方式：

​		postion：fixed

​		position：absolute

​		float



**css属性前缀**

-moz- 火狐等使用Mozilla浏览器引擎的浏览器

-webkit-  Safari, 谷歌浏览器等使用Webkit引擎的浏览器

-o- Opera浏览器(早期)

-ms- Internet Explorer



## CSS3常用选择器

**组合选择器：**把基本选择器通过特殊符号串在一起 带来特定的意义

1. 分组选择器：两个或多个选择器通过“ ，”逗号隔开

2. 嵌套选择器：多个标签中间用空格隔开 选择的是父级中的子标签

3. 子选择器：通过“>”连接     div>p   父标签必须是div的p 才生效

4. 相邻同级选择器：通过“+”连接  div+p  跟div同一级别的p 才生效



**属性选择器**

`E[att] `属性

`E[att='val'] `属性att的值为"val"的元素

```css
	input[type='text']{}
```

`E[att~='val'] `属性att有多个值，val为其中一个

`E[att^='val'] `属性att的值以"val"开头的元素

`E[att$='val'] `属性att的值以"val"结尾的元素

`E[att*='val'] `属性att的值包含"val"的元素



**同级选择器** 

**`E + F`** 毗邻元素选择器，匹配所有紧随E元素之后的同级元素F

**`E ~ F`** 匹配任何在E元素之后的同级所有F元素,兄弟选择器



***伪类选择器*** 

**`:not(s`)** 不含有s选择符的元素E 



**`:first-child`** 匹配父元素的*第一个*子元素

**`:last-child`** 匹配父元素的*最后一个*子元素

**`:nth-child(n)`**  匹配父元素的*任何一个*子元素 n为序数 从1开始

**`:nth-last-child(n)`** (从后往前找 )匹配父元素的*任何一个*子元素 n为序数 从1开始



**`:first-of-type`**  匹配父元素的同类型的 *第一个* 子元素

**`:last-of-type`**  匹配父元素的同类型的 *最后一个* 子元素

**`:nth-of-type (n)`**  匹配父元素的同类型的 *任何一个* 子元素  n为序数 从1开始

**`:nth-last-of-type `**  (从后往前找 )匹配父元素的同类型的*任何一个*子元素  n为序数 从1开始



**`:empty` ** 找内容是空的元素 是否有文本内容 (dom树无内容 与before after 无关) 



**`:enable`** 匹配表单中激活的元素

**`:disabled`** 匹配表单中禁用的元素

**`:checked`** 匹配表单中被选中的radio(单选按钮)或checkbox(复选框)元素



**`:target`** 匹配被选中的元素

**`:root`** 根元素





***伪元素选择器***

**`:first-letter`** 设置对象内的第一个字符的样式

**`:first-line`** 设置对象内的第一行的样式

**`:before`**  开始

**`:after`**   结束

**`::selection`** 设置对象被鼠标选中的元素的样式





## CSS常用属性

***常用属性*** 



**背景颜色：**`background-color：；`

**背景图片：**`background-image: url('')；`

**X轴平铺：**`background-repeat: repeat-x;`

**Y轴平铺：**`background-repeat:repeat-y;`

**不平铺：**`background-repeat:no-repeat;`

**绝对定位：**`background-position: 100px 100px;`

​        *x*: left center right

​		y: top center bottom

**背景固定：**`background-attachment: fixed;`



**`border-radius`** 圆角	(一个值/四个值/每个值拆分成两个方向值)

```css
border-top-left-radius: 10px 40px; 左上角圆角 x取10px y取40px

border-radius: 20px 30px 40px 50px/10px 20px 30px 40px; 前四个代表水平方向，后四个代表垂直方向
```



**`box-shadow`** 盒子阴影

​	box-shadow: 	x 		y 	  模糊半径 / 阴影拓展半径 / 阴影颜色 / 投影方式

```css
box-shadow: 10px 20px   10px        1 px      #ccc    inset;
			 				x    y    模糊半径   阴影拓展半径  阴影颜色   向内投影(默认向外投影 不写)
```

可以及向内投影也向外投影用逗号隔开 



**`text-shadow`** 文字阴影 

​	text-shadow: x  y  模糊半径 / 阴影颜色

```css
text-shadow: 5px 5px 5px #ccc;
```



**`rgba(r, g, b, a)`**  注意与opacity的区别

​	opacity 子元素汇集成他的值 里面的元素也会有透明度





***线性渐变***

`background:linear-gradient(direction, color [percent], color [percent])`

​	direction: 渐变方向

​        	写方向：to bottom / to bottom right……

​       	 	 写角度：0deg/45deg

​	color: 渐变颜色

​	percent: 百分比( 从百分之多少开始渐变 )

```css
background: linear-gradient(to right, yellow, red);
background: linear-gradient(to right, yellow 30%,red 70%);
                                             从百分之多少的地方开始渐变
```





***径向渐变***

`background:radial-gradient(shape r/(a,b) at position, color [percent], color [percent])`

​	shape: 形状

​       	 	circle/ellipse (圆 / 椭圆)

​	r/(a,b): 半径/(长短轴)

​	position: 中心点位置

​       		像素值/百分比/方向(top left)/也可以是一个值，第二个值默认center

```css
background:radial-gradient(circle 100px at 300px 300px, yellow,green);
```



***CSS3 新增 background值：***

**指定绘制背景图像时的起点** 

`background-origin:border-box | padding-box | content-box`



**指定背景的显示范围** 

`background-clip: border-box | padding-box | content-box`



**指定背景中图像的尺寸 ** 

`background-size: auto|l具体像素|百分比|cover|contain`

​      cover: 用一张图片铺满盒子

​      contain: 让盒子保留一张完整背景图片





***CSS3 新增 border值：*** 

可单独设置每边的border

`border: border-width  border-style border-color;`



给border添加背景图片

​    border-image：url number style;

​    url: 图片地址

​    number: 图片裁剪的px值(从四边向里裁剪)

​    style: 图片添加的方式  repeat | round(等比例平铺 使裁剪的部分保持完整)

​    			例如：花边效果



***文字属性：文本溢出*** 

**text-overflow: clip|ellipsis | ellipsis-word** 

​    clip:不显示省略标记(…),而是简单裁切

​    ellipsis：当对象文本溢出时显示省略标记(…)，省略标记插入的位置是最后一个字符

 **white-space:nowrap**  *文本不会换行，直到遇到* `<br>` 标签为止。(css2.1)



***单行打点：(超出部分隐藏 并加上省略号)*** 

```css
text-overflow: ellipsis;  当对象文本溢出时显示省略标记(…)
overflow: hidden;  溢出内容为隐藏
white-space: nowrap;  强制文本在一行内显示
```


 ***多行打点：*** 

```css
-webkit-line-clamp: 4;  第几行打点
text-overflow: ellipsis;  当对象文本溢出时显示省略标记(…)
display: -webkit-box;  
-webkit-box-orient: vertical;
overflow:hidden;  溢出内容为隐藏
```

***多行打点兼容性不好，可用js操作*** 

```javascript
var oA = document.getElementsByClassName('dot')[0];
function dot(dom, num){
    var str = dom.innerHTML;
    var len = str.length;
    if(len > num){
        dom.innerHTML = str.substr(0,num) + "..."
    }
}
dot(oA, 8);
```



***文字属性：文本换行***

**word-wrap: normal|break-word;** 

​    normal: 连续文本换行

​    break-word: 内容将在边界内换行（强制换行）



***4、文字属性：***

**字体**：font-family: "宋体";

**大小：**font-size: 30px;

**字体粗细：**font-weight: 100~900;

​	normal普通状态

​	lighter更细

​	bold更粗

**样式：**font-style: italic; 斜体

**行间距：**line-height: 20px;



@font-face{

​    font-family: 'ShadowsIntoLight’;

​    src: url('./ShadowsIntoLight.ttf');/*兼容IE*/

​    src: 

​        url('./ShadowsIntoLight.eot?#iefix') format('embedded-opentype’),

​        url('./ShadowsIntoLight.woff') format('woff’),

​        url('./ShadowsIntoLight.ttf') format('truetype’),

​        url('./ShadowsIntoLight.svg') format('svg');

}

地址   (翻墙)：https://fonts.google.com/?selection.family=Shadows+Into+Light



**文本：**



```css
颜色：color: red;

字符间距：letter-spacing: 5px;

字间距：word-spacing: 5PX;

从左到右显示：direction:ltr;

从右到左显示：direction:rtl;

删除线：text-decoration: line-through;

下划线：text-decoration: underline;

上划线：text-decoration: overline;

两端对齐：text-align: justify;

中间对齐：text-align: center;

	左侧对齐：left

	右侧对齐：right

文字缩进：text-indent: 20px;（段落开头的空格）

英文字母全大写：text-transform: uppercase；

	小写：lowercase

	首字母大写：capitalize

超出容器：white-space: nowrap;

超出容器的隐藏：overflow: hidden;

隐藏部分替换成省略号：text-overflow: ellipsis;

垂直对齐：vertical-align: top /center /bottom;

```



**a标签：**

```css
初始状态：a:link{}

被访问：a:visited{}

鼠标滑过：a:hover{}

点击：a:active{}
```



**列表：**

​	list-style-type: none;  初始化

**li：**

​	none:不使用项目符号

​	disc：实心圆

​	circle：空心圆

​	square：实心方块

​    **ol：**

​	demical：阿拉伯数字

​	lower-alpha：小写英文字母

​	upper-alpha:大写英文字母

​	lower-roman：小写罗马数字

​	upper-roman：大写罗马数字





**定位：** 

```css
1.固定定位：
position: fixed;  （无论滚轮怎么滚 该div都不会动）
	top: ; bottom: ;   left: ; right: ;

2.相对定位：
position: relative; （灵魂跑了-肉体还在）

3.绝对定位：
position: absolute; （灵魂和肉体都跑了）

	子绝父相
```







## 盒模型及使用     

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/盒模型.png)

**盒子：**所有的元素都是矩形的盒子

内边距：padding：

​	上：*padding-top*: ; 

​	下：*padding-bottom*: ;

​	左：*padding-left*: ;

​	右：*padding-right*: ;

​	*padding*: 10px 20px 30px 40px;顺时针方向

 

盒子框：border

 

外边距：margin：

​	上：*margin-top*: ; 

​	下：*margin-bottom*: ;

​	左：*margin-left*: ;

​	右：*margin-right*: ;

 

**margin重叠**

1. 平级元素 重叠取最大值

   解决方法：*float*: left;

   解决方法：*display*: inline-block;

2. 嵌套关系

   border

   Padding

 

**布局：**

div 块元素-独占一行 

通过浮动来解决独占一行的问题：float

*float*: left; 从左往右浮动

*float*: right; 从右往左浮动

 

清除浮动：*clear*: both;

​       在它下面的元素上清除浮动

​       将之前浮动的块重新打包成标准流在打包到标准流中；两个合并之后独占一行

 

**伪元素清除浮动：**

``` css
.class值::after{

	content: " "; /*伪元素加内容变成真元素 */

	display: block; /*行元素强转为块元素 */

	clear: both; /*清除浮动 */

}
```



 **伪元素清除margin：**

 ```css
.container::before,.container::after{

content:"";

display: table; /*固定的给他加内容 */

}
 ```



定义显示方式

定义显示方式 **box-sizing: content-box**(默认,标准盒模型)

​			        	     **border-box**(ie6 混杂模式)

 

**鼠标拖动可控大小**  

**resize: nont** 

​	 **horizontal(水平方向)** 

​	 **vertical(垂直方向)** 

​	 **both;(水平垂直都可)** 

结合属性**overflow: hidden;**   溢出内容隐藏 



input 定义轮廓 获得焦点时伪元素（:focus ）

 **outline: outline-width**

​		 **outline-style** 

​		**outline-color;** 

```css
input:focus{
     outline: 1px solid orange;
}
```



## Columns多列布局

**column-width | column-count; ** 

​	`column-width:`每列的宽度

​	`column-count:`显示的列数



`column-gap: `列间距宽，默认大小由 font-size 决定



**column-rule:** width style color 列边框样式 (不占宽度)

​	`column-rule-width  `	

​	`column-rule-style `

​	`column-style-color  ` 



`column-span: none | all`    标题横跨所有列 







## Flex弹性盒子

**定义弹性盒子** 

​	flexbox，是一种*一维*的布局模型。它给flexbox的子元素之间提供了强大的空间分布和对齐能力。

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/屏幕快照 2018-10-23 下午4.37.16.png)

​       注意：columns属性再伸缩容器上没效果，同时float,clear和vertical-align属性再伸缩项目上页没有效果



1. 将父级设置display: flex;时，子元素相当于行级块元素 
2. 子元素会按照轴排序 ，不会在意换行符的空隙
3. 默认情况下不会超出， 超出的部分按比例压缩

**flexbox的两根轴线** 

主轴和交叉轴：交叉轴永远垂直于主轴

方向：主轴方向可以 水平从左向右，水平从右向左，垂直从上到下，垂直从上到下；

起始位置和终止位置：子元素对齐方式 从起始位置开始对齐， 从终点位置开始对齐 ，中间对齐，分散开对齐



![](/Users/xiangqingyuan/Desktop/web/web实战-手册/屏幕快照 2018-10-23 下午5.07.39.png)

**初始效果**  

所有CSS属性都会有一个初始值，所以 flex 容器中的所有 flex 元素都会初始默认效果：

1. 主轴水平从左向右。元素排列为一行 (`flex-direction` 属性的初始值是 `row`)。

2. 元素从左边起始线开始(`justify-content:flex-start`)。元素从主轴的起始线开始。

3. 默认不拉伸(`flex-grow:0`)，但是会压缩(`flex-shrink:1`)不换行(`flew-wrap:nowrap`)。元素不会在主维度方向拉伸，但是可以缩小。

4. 不设置高度时flex元素充满flex容器(`align-items:stretch`)。元素被拉伸来填充交叉轴大小。



**flex容器属性** 

1、`flex-direction:`设置flex容器主轴的方向

​		`row ` (默认)默认方向

​		`row-reverse `默认方向 首尾互换

​	    `column `垂直 从上到下

​		`column-reverse` 垂直 从下到上



2、`flex-wrap: ` 控制flex容器是单线还是多线，以及新线的堆叠方向	

​		`nowrap ` 单行

​		`wrap ` 多行

​		`wrap-reverse `  新的一行排在原来一行的上面



3、`flex-flow: ` `flex-direction` ` flex-wrap;`  复合写法



4、`justify-content：` 项目在主轴上的对齐方式

​		`flex-start` (默认) 从主轴的起始点开始排列

​		`flex-end  ` 从主轴的终止点开始排列

​		`center  ` 居中

​		`space-between  `两端对齐，每两个flex元素之间的空隙相等 (起始点与终止点没有空隙)

​		`space-around   ` 两端对齐，每个项目两侧的距离相等



5、`align-items:` 单行项目在交叉轴上的对齐方式

​		`flex-start  ` (默认)与交叉轴起始点齐平

​		`flex-end `与交叉轴终止点齐平

​		`center  `居中对齐

​		`baseline`  flex元素的第一行文字为基准对齐

​		`stretch`   flex元素未设置高度时，高度充满flex容器高度 (当flex项目不设置高度的时候 默认为stretch)



6、`align-content: `多线的对齐方式，单线不起作用

​		`flex-start ` 打包 与交叉轴起始点齐平

​		`flex-end ` 打包 与交叉轴终止点齐平

​		`center`   打包居中

​		`stretch`  未设置高/宽度时占满整个交叉轴

​		`space-between `  交叉轴两端对齐   (起始点与终止点没有空隙)

​		`space-around`   每跟轴两侧空隙相等



**flex元素属性**

1、`flex-basis: length; ` （px   默认由width / height 来决定）定义该元素在主轴上的尺寸  main-size 

​	主轴在水平方向的时候由宽度决定  主轴在垂直方向的时候由高度决定



2、`flex-grow: number;` 拉伸比例，默认值为0



3、`flex-shrink: number;` 压缩比例，默认值为1



4、`flex: ` `flex-grow` ,` flex-shrink`, ` flex-basis`，默认值 0 1 auto

5、`align-self: `单个项目在cross轴上的对齐方式

​		`flex-start ` cross-start齐平

​		`flex-end`  cross-end齐平

​		`center ` 居中

​		`baseline  `第一行文字

​		`stretch ` 未设置高度时 该元素高度为flex容器高度 



6、`order：number `该项目排列的位置 (值从小到大排列) 





## Media媒体查询

**常见页面布局**

​	静态布局

​	流式布局

​	自适应布局

​	响应式布局



**媒体查询的使用** 

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/屏幕快照 2018-10-24 下午3.58.04.png)



**媒体查询的使用** 

*link元素中的css媒体查询*

```css
<link rel="stylesheet" href="demo.css" media="screen and (max-width: 800px)">
```

​	最大宽度为800的时候生效



*样式表中的css媒体查询*

```css
@media screen and (max-width: 600px) {
   .demo{
        background: pink;
        color: deeppink;
   }
}
```



**媒体类型** 

| 类型       | 解释                                   |
| ---------- | -------------------------------------- |
| all        | 所有设备                               |
| braille    | 盲文                                   |
| embossed   | 盲文打印                               |
| handheld   | 手持设备                               |
| print      | 文档打印或打印预览模式                 |
| projection | 项目演示，比如幻灯                     |
| screen     | 彩色屏幕                               |
| speech     | 演讲                                   |
| tty        | 固定字母间距的网格媒体，比如电传打字机 |
| tv         | 电视                                   |



**媒体特性** 

| 属性                | 值                      | Min/Max | 描述                     |
| ------------------- | ----------------------- | ------- | ------------------------ |
| color               | 整数                    | yes     | 每种色彩的字节数         |
| color-index         | 整数                    | yes     | 色彩表中的色彩数         |
| device-aspect-ratio | 整数/整数               | yes     | 宽高比                   |
| device-height       | length                  | yes     | 设备屏幕的输出高度       |
| device-width        | length                  | yes     | 设备屏幕的输出宽度       |
| grid                | 整数                    | no      | 是否是基于格栅的设备     |
| height              | length                  | yes     | 渲染界面的高度           |
| monochrome          | 整数                    | yes     | 单色帧缓冲器中没像素字节 |
| resolution          | 分辨率(" dpi / dpcm ")  | yes     | 分辨率                   |
| scan                | Progressive  interlaced | no      | tv媒体类型的扫描方式     |
| width               | length                  | yes     | 渲染界面的宽度           |
| orientation         | Portrait / landscape    | no      | 横屏或竖屏               |

***媒体查询的逻辑操作符***  

**and操作符 ** 

`and`关键字用于合并多个媒体属性或合并媒体属性与媒体类型。

`@media screen and (min-width: 500px) and (max-width: 800px) `



**逗号分隔列表** 
`,`  媒体查询中使用逗号分隔效果等同于or逻辑操作符。当使用逗号分隔的媒体查询时，如果任何一个媒体查询返回真，样式就是有效的。

`@media (max-width: 300px), screen and (orientation: landscape)`



**not操作符** 

`not` 关键字应用于整个媒体查询，在媒体查询为假时返回真

`@media not screen and (min-width: 500px) and (max-width: 800px)`



**only操作符 ** 

`only`关键字防止老旧的浏览器不支持带媒体属性的查询而应用到给定的样式

` @media only screen and (min-width: 500px) and (max-width: 800px)` 



## 移动端布局

**等比缩放** 

​	**百分比布局** 

​	**flex布局** 

​	**单位`rem`**     1rem的大小由html的font-size的像素值决定 

​			**`em`**       1em的大小由父级的font-size的像素值决定 

​		通过js动态获取屏幕宽度来设置html的font-size

```javascript
function newWidth(){
  var w = document.documentElement.clientWidth;
  var a = document.documentElement.style.fontSize = w/10 + 'px';
  console.log(a);
}    
newWidth();    
window.onresize = function(){ //当窗口大小改变的时候重新设置fontSize的大小 
  newWidth();
}
```

​	**单位`vw` `vh`**   它会把屏幕分成100份 ，1份就是1vw/vh  ( 1vw/vh  相当于屏幕宽高的 1%)  

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/buju1.png)



***viewport***  

**物理像素：**物理像素又被称为设备像素，他是显示设备中一个最小的物理部件。每个像素可以根据操作系统设置自己的颜色和亮度。

**逻辑像素：**一个可以由程序使用的虚拟像素(比如说CSS像素)，然后由相关系统转换为物理像素。

**设备像素比(dpr) = 物理像素/逻辑像素**  

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/像素.png)



**Viewport视窗** 

viewport是严格等于浏览器的窗口。在桌面浏览器中，viewport就是浏览器窗口的宽度高度。但在移动端设备上默认为980px。

viewport就是浏览器上，用来显示网页的那一部分的区域。Ios及新版本浏览器默认viewport为980px。

```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
																			宽度等于屏幕宽度。              缩放 
																												dpr = 2 为0.5
																												dpr = 3 为0.3333...
```



**viewport默认有6个属性：** 

| 属性          | 解释                                                     |
| ------------- | -------------------------------------------------------- |
| width         | 设置viewport宽度，可以为一个整数，或字符串"device-width" |
| initial-scale | 页面初始的缩放值，为数字，可以是小数                     |
| minimum-scale | 允许用户的最小缩放值，为数字，可以是小数                 |
| maximum-scale | 允许用户的最大缩放值，为数字，可以是小数                 |
| height        | 设置viewport的高度（我们一般而言并不能用到）             |
| user-scalable | 是否允许用户进行缩放，'no'为不允许，'yes’为允许          |



通过javascript动态获取dpr 生成meta标签

```javascript
var oMeta = document.createElement('meta');
oMeta.setAttribute('name','viewport');
if(window.devicePixelRatio >= 2){
    oMeta.setAttribute('content', 'width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, user-scalable=no');
}
if(window.devicePixelRatio >= 3){
    oMeta.setAttribute('content', 'width=device-width, initial-scale=0.3, minimum-scale=0.3, maximum-scale=0.3, user-scalable=no');
}
document.getElementsByTagName('head')[0].appendChild(oMeta);
```



根据dpr的值来修改viewport实现1px的线

解决方案：

1、动态生成mate标签

```html
<meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">
```

2、css3 transform:scale缩放

```css
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and ( min--moz-device-pixel-ratio: 2),
only screen and ( -o-min-device-pixel-ratio: 2/1),
only screen and ( min-device-pixel-ratio: 2),
only screen and ( min-resolution: 192dpi),
only screen and ( min-resolution: 2dppx){ 
     div{
             transform: scale(0.5, 0.5);
     }
}
```



**综合解决方案：**

**方案一：手淘解决方案 flexbile** 

<http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js>

1、根据屏幕大小动态改变html的fontSize，达到等比缩放问题 

2、给body设置fontSize，字体大小可以直接继承body的font-size

3、给html标签添加data-dpr属性，可以通过查找该属性，给不同dpr元素设置个性化属性

[data-dpr='2'] div{

​     font-size:  26px;

}



**方案二： Vw+postcss(插件) （推荐）** 

根据设置稿（如宽度750px的设计稿），以px为单位写大小，转换成vw。解决等比缩放问题。

至于小于等于1px的线，以px为单位不专成vw。 postcss-write-svg插件主要用来处理移动端1px的解决方案。该插件主要使用的是border-image和background来做1px的相关处理，编译出来是border-image或者background



**dpr 不同的设备上图片的适配问题？** 

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/屏幕快照 2018-10-25 下午7.11.40.png)





## Bootstrap快速使用

网站： http://www.bootcss.com

**1、什么是Bootstrap?**

Bootstrap 是最受欢迎的 HTML、CSS 和 JS 框架，用于开发响应式布局、移动设备优先的 WEB 项目。

**2、特点：**

虽然可以直接使用 Bootstrap 提供的 CSS 样式表，但Bootstrap 的源码是基于最流行的 CSS 预处理脚本 Less和 Sass 开发的。你可以采用预编译的 CSS 文件快速开发，也可以从源码定制自己需要的样式。

你的网站和应用能在 Bootstrap 的帮助下通过同一份代码快速、有效适配手机、平板、PC 设备，这一切都是 CSS 媒体查询（Media Query）的功劳。

Bootstrap 提供了全面、美观的文档。你能在这里找到关于 HTML 元素、HTML 和 CSS 组件、jQuery 插件方面的所有详细文档。



**模版：**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">   <!-- 引入css -->

  <body>
    <h1>你好，世界！</h1>
    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```

**全局样式**

表格、按钮、辅助类



**组件**

按钮组、下拉菜单、字体图标、导航条



**栅格系统**



**插件**

模态框、轮播图



**栅格系统** 

Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。它包含了易于使用的预定义类，还有强大的mixin 用于生成更具语义的布局







## Transform形状变换

**transform： **translate | scale | rotate | skew；( 所有属性写在一起  )

transform属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行移动、缩放、旋转或倾斜。



**移动: translate**

​	translateX( px/% )

​	translateY()

​	translateZ()

​	translate3d(x,y,z)

​	简写：translate(x,y)



**缩放：scale**

​	scaleX()  大于1为放大，小于1为缩小  负数翻转

​	scaleY()

​	scaleZ()

​	scale3d(x,y,z)

​	简写：scale(x,y) | scale(n) -> scale(n,n)



**旋转: rotate**

​	rotateX(deg)    

​	rotateY()

​	rotateZ()

​	rotate3d(x,y,z)

​	简写：rotate()àrotateZ()



**倾斜：skew** 

​	skewX(ndeg)

​	skewY(ndeg)

​	scale3d(x,y)

​	简写：skew(x, y)

**中心点：transform-origin**  

​	transform-origin设置元素原点位置

​	transform-origin: 50% 50% 0;默认值



​	X轴方向：left | center | right | px | %

​	Y轴方向：top | center | bottom | px | %

​	Z轴方向：px





## transition过渡动画



**transition: property | duration | timing-function | delay;**

​	transition-property 规定设置过渡效果的 CSS 属性的名称。 ( 只能过度有值的属性 ) all是全部属性

​	transition-duration 规定完成过渡效果需要多少秒或毫秒。

​	transition-timing-function  规定速度效果的速度曲线。

​	transition-delay    定义过渡效果何时开始。



**transition-timing-function 规定设置过渡效果的 CSS 属性的名称。** 

​	transition-timing-function: linear | ease | ease-in | ease-out | ease-in-out 

​						cubic-bezier(n,n,n,n);



​	linear 匀速, cubic-bezier(0,0,1,1) 

​	ease 慢快慢， cubic-bezier(0.25,0.1,0.25,1) 

​	ease-in 慢速开始的过渡， cubic-bezier(0.42,0,1,1) 

​	ease-out 慢速结束的过渡， cubic-bezier(0,0,0.58,1) 

​	ease-in-out 慢速开始和结束的过渡， cubic-bezier(0.42,0,0.58,1) 

​	cubic-bezier(n,n,n,n) 在 cubic-bezier函数中定义自己的值。可能的值是 0 ~1 之间的数值。



**transition-property 规定设置过渡效果的CSS 属性的名称。**

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/过度属性.png)

实现动画的方法：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        #demo{
            width: 100px;
            height: 100px;
            background-color: pink;
            transition: transform 4s linear,height 2s linear 2s;
        }
        #demo.move{
            transform :translateX(600px);
            height: 200px;
        }
    </style>
</head>
<body>
    <div id="demo"></div>
    <script>
        demo.onclick=function(){
            demo.className = "move";
        }
    </script>
</body>
</html>
```







## animation动画

**animation** 

​	**animation 属性是一个简写属性，用于设置动画属性。** 

​	**animation-name  规定需要绑定到选择器的 keyframe 名称。** 

​	**animation-duration  规定完成动画所花费的时间，以秒或毫秒计。** 

​	**animation-timing-function   规定动画的速度曲线。** 

​	**animation-delay 规定在动画开始之前的延迟。** 

​	**animation-iteration-count   规定动画应该播放的次数。** 

​		*n 播放n次*

​		*infinite 无限次*

​	**animation-direction 规定是否应该轮流反向播放动画。** 

​		*normal 默认值，按照顺序正常播放* 

​		*reverse 动画反向播放* 

​		*alternate 动画在奇数次正向，偶数次反向播放* 

​		*alternate-reverse 动画在奇数次反向，偶数次正向播放* 

​	**animation-fill-mode 属性规定动画在播放之前或之后，其动画效果是否可见。** 

​		*none    不改变默认行为。*

​		*forwards    当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。*

​		*backwards   在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关*

​		*键帧中定义）。*

​		*both    向前和向后填充模式都被应用。*

​	**animation-play-state 属性规定动画正在运行还是暂停。** 

​		*paused  规定动画已暂停。* 

​		*running 规定动画正在播放。* 

```css
.demo{
    position: absolute;
    top: 100px;
    left: 100px;
    width: 100px;
    height: 100px;
    background: pink;
    font-size: 20px;
    color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    animation: move 2s linear;
}
@keyframes move{
    0%{
        left: 100px;
    }
    100%{
        left: 600px;
    }
}
```

​	关键帧 为百分比，如果只从0%到100%可以用关键字form，to；

​	filter: blur(10px); 模糊



**项目：感知鼠标滑过方向图片遮罩效果** 

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/感知鼠标滑过方向图片遮罩效果.png)

## CSS3 3D变换动画



**perspective** (将该元素设置到父级)

定义 3D 元素距视图的距离，以像素计。当为元素定义 perspective 属性时，其子元素会获得透视效果，而不是元素本身。

​	perspective：距离屏幕的距离（ px ）；

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/3d1.png)

在父级设置   transform-style: preserve-3d;  保留3D效果；



**translate3d(x,y,z,n)** 

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/3D2.png)

**perspective-origin视点得位置   perspective-origin: x y;默认50% 50%;** 

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/3d3.png)



**transform-style指定嵌套元素是怎样在三维空间中呈现。**

transform-style: flat|preserve-3d;

注：设置了transfrom-style:preserve-3d的元素，不能防止子元素溢出，即不能设置overflow:hidden；否则persever-3d失效；



**backface-visibility 属性定义当元素背面是否可见。** 

backface-visibility: visible | hidden;





**动画优化** 

1、减少试用left width margin做动画，用transform替换

2、利用3d变形来开启GPU加速，使动画更流畅

3、动画过程有闪烁（一般出现在动画开始）

​	-webkit-backface-visibility:hidden;

​	-moz-backface-visibility:hidden; 

​	-ms-backface-visibility:hidden; 

​	backface-visibility:hidden; 

​	-webkit-perspective:1000; 

​	-moz-perspective:1000; 

​	-ms-perspective:1000; 

​	perspective:1000;







## PS技巧

1. 修改后缀名可获得图片，取消后缀自动删除图片 ; 通过新建组也可以获得图片
2. 设置图片大小:200% 图片名.png  ;  100X200 图片名.png
3. 设置图片画质:图片名.jpg8   可以是1~10











# JavaScript

## JS引入及阻塞加载

引入JS的两种方式：

1. 嵌入代码

   ```html
   <script></script>
   ```

2. 引入外部文件

   ```html
    <script src="文件名.js"></script>
   ```


阻塞加载：如果把js放在前面需要加载完js中的内容 再加载body的内容



## 延迟加载和异步加载

**延迟加载 defer** 

定义：表示脚本可以延迟到文档完全被解析和显示之后再执行

```javascript
<script defer src="./1.js"></script>
<script defer="defer" src="./1.js"></script>
```

1. 并发
2. 多个js，按定义的顺序执行
3. 在文档解析完，才执行
4. 在DOMContentLoaded事件之前执行完
5. 只支持外部引入方式，( IE7以前除外 )

**异步加载 async：** 

定义：表示应立即下载脚本，但不应妨碍页面中的其他操作

```html
<script async src="./1.js"></script>
<script async="async" src="./1.js"></script>
```

1. 并发
2. 多个js，不一定按顺序执行
3. 加载完就执行在load事件之前
4. 在load事件之前执行完
5. 只支持外部引入方式



![](/Users/xiangqingyuan/Desktop/web/web实战-手册/img_0045.png)







## 按需加载，时间线

一、按需加载

​    1.按需加载HTML 

​    2.按需加载图片 

​    3.按需加载js

二、js时间线

​    1.创建Document对象，开始解析web页面，解析HTML元素和他们的文本内容后添加Element对象和Text节点到文档中。

​    这个阶段Document.readyState = "loading"。

​    2.遇到link外部css，创建线程加载，并继续解析文档。

​    3.遇到script外部js，并且没有设置async\defer ，浏览器加载，并阻塞，等待js加载完成并执行该脚本，然后继续解析文档

​    4.遇到script外部js，并且设置有async\defer 浏览器创建线程加载，并继续解析文档， 对于async属性的脚本，脚本加载完成后立即执行

​    5.遇到img标签等，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档

​    6.当文档解析完成，document.readyState = "interactive"；

​    7.文档解析完成后，所有设置有defer的脚本会按照顺序执行。

​    8.当文档解析完成之后，document对象触发DOMContentLoaded事件，这也标志着程序执行从同步脚本执行阶段，转化为事件驱动阶段

​    9.当所有async的脚本加载完成并执行后，img等加载完成后，document.readyState = "complete" window对象触发load事件

​    10.从此，页面以异步响应方式处理用户输入，网络事件等。





## JS数据类型及获取类型

**js时弱类型**

强类型：定义一个变量是整数类型，不能再放字符串等

弱类型：定义时并没有设置类型，可以是数字，字符，布尔值等



**6种基本类型：** number   string  boolean   null   undefined    object



**类型和值：** 

**number：**所有的数字

​		整数：0  1  -1

​		小数：浮点数：1.1   1.1111

**string：**所有的字符、字符串

**boolean：**true / false

**null：**null  对象是空

**undefined：**undefined 变量未定义

**object：**除了上面的，都是对象





**js的获取数据类型 常用的4种方式** 

1. typeof：注意 null 和 function

    				*null	打印出object是指对象空* 

   ​		无法判断对象的具体类型


2. Object.prototype.toString.call( )：可以把系统自带的类型都打印出来

   ​	资料链接：

   获取不到自定义类型

3. instanceof：仅能判断对象的具体类型

   ```javascript
   var x = new Number(12); /必须是对象
   x instanceof Number; /true
   ```

   

4. constructor：查看对象对应的构造函数名

   ```javascript
   x.constructor.name
   ```

   



## 数字和二进制

**整数：**int    1，2，3

| 特殊值                      | 说明         |
| --------------------------- | ------------ |
| Infinity                    | 无穷大       |
| NaN  ( Not a Number 的缩写) | 非数值       |
| Number.MIN_VALUE            | 最小值       |
| Number.MAX_VALUE            | 最大值       |
| Number.MAX_SAFE_INTEGER     | 最大安全整数 |
| Number.MAX_SAFE_INTEGER     | 最小安全整数 |

​	超出最大最小安全整数 会丢失精度



**小数：**float  1.111

​	float 精度：0.1+0.2 !=0.3   小数转换二进制过程中造成精度丢失

​				按照 IEEE754 标准进行浮点数转换的

可以使用 Number对象、Math 对象的方法



**科学计数法：**科学计数法  1e+3 = 1000 



**二进制** 

| 二进制 | 八进制 | 十进制 | 十六进制 |
| ------ | ------ | ------ | -------- |
| 0000   | 0      | 0      | 0        |
| 0001   | 1      | 1      | 1        |
| 0010   | 2      | 2      | 2        |
| 0011   | 3      | 3      | 3        |
| 0100   | 4      | 4      | 4        |
| 0101   | 5      | 5      | 5        |
| 0110   | 6      | 6      | 6        |
| 0111   | 7      | 7      | 7        |
| 1000   | 10     | 8      | 8        |
| 1001   | 11     | 9      | 9        |
| 1010   | 12     | 10     | A        |
| 1011   | 13     | 11     | B        |
| 1100   | 14     | 12     | C        |
| 1101   | 15     | 13     | D        |
| 1110   | 16     | 14     | E        |
| 1111   | 17     | 15     | F        |

写法：

二进制：var x = 0b1010 

八进制：var x = 0o12 

十六进制：var x = 0x00A 



**数字是用64位储存的：** 53位用来存储整数   安全值2的53次方

​					10位用于科学计数法的指数

​					1代表 正数 和 负数



1个字节B=8位(bit)

1024个字节=1KB

1024KB=1MB

1024MB=1GB

TB PB ZB YB BB NB DB



**二进制转十进制:** 

0101 :   1*2的0次方

​	      0*2的1次方

​	      1*2的2次方

​    	  0*2的3次方



**十进制转二进制**

正整数： 除2 取余数排序，倒序

小数：  乘2 取整，正序

大于1的小数：拆成整数和小数部分分别计算

负整数： 在正整数基础上，取反并+1



**n.toString("2")方法转2进制** 





## 字符串及编码

**字符串：** 

组成：单或双引号包裹的Unicode字符、数字、各种符号

​	Unicode字符：16位  (2的16次方)

​	ASCII字符：8位  (2的8次方)  字符的编码系统，128个字符组成的字符集

注意：

1. 在一行内     \ 换行
2. 单双引号要成对
3. 字符串种每个字符都是自己的下标位置，从0开始
4. 特殊字符要用转义字符表示：换行、单引号



**转义字符：改变字符本来的意义：**  \n 换行  \r 回车  \” \’





## 运算符

**运算规则：** 	

1. 先完成优先级高的运算符

2. 同一优先级的从左往右

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/运算规则1.png)



**优先级简单记忆：**

​	一元 二元 三元运算符

​	操作的元素越多，优先级越低

​	赋值运算最低









## 流程语句

**if语句** 

```javascript
var i = -3;

if(i > 25){  /如果
    alert('大于25');
}else if(i < 0){ /否则如果
    alert('小于0')
}else{			/否则
    alert('其他')
}
```



**do-while语句**

是一种后测试语句 只有循环体内的代码执行以后，才会测试出口条件；换句话说在对条件表达式求值之前，循环体内的代码至少会被执行一次

```javascript
var i = 0;
do {
    i += 2;
} while(i < 10); /只要变量小于10是循环会一直执行下去
console.log(i);
```



**while语句**

前测试循环语句 ，再循环体内的代码被执行之前，就会对出口条件求值，循环体内的代码有可能永远不被执行

```javascript
var i = 0;
while(i < 20){ /当条件返回true时候 执行代码块中的代码
    i++;
    console.log(i);
}
```



**for语句**

for也是一种前测试循环语句

```javascript
for(var i = 0; i < 20; i++){
    console.log(i);
}
```



**for-in语句**

是一种精准的迭代语句，可以用来枚举对象的属性

```javascript
for (const propName in window) {
    console.log(propName);
}
```



**label语句**



**break和continue语句** 

break和continue语句用于在循环中精确的控制代码的执行

break会立刻退出循环 强制执行后面的预计

continue 退出后从循环的顶部开始执行



**with语句**

将代码的作用域设置到一个特定的对象中，主要是为了简化多次编写同一个对象的工作

```javascript
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href; 
/未使用


with(location){ /使用了with
    var qs = search.substring(1);
    var hostName = hostname;
    var url = href;
}/使用with会导致性能下降，大型应用不建议使用
```



**switch语句**

```javascript
switch (i){
    case 25: /如果表达式等于这个值 则执行后面的语句 case可以是任意数据类型
        alert("25");
        break; /执行完跳出
    case 35:
        alert("35");
        break;
    case 45:
        alert("45");
        break;
    default: /用于表达式不匹配的任意一种情况(相当于一个else语句)
        alert("Other");
        break;
}
```

```javascript
switch (i){
    case 25: 
    case 35: /合并多种情况
        alert("25 or 35");
        break;
    case 45:
        alert("45");
        break;
    default: 
        alert("Other");
        break;
}
```







## 内存管理之堆与栈

**内存分配：** 

栈：系统自动分配，物理内存连续的

堆：动态创建，物理地址不连续，程序自行维护







## 函数：创建，return，作用域

**函数：**代码的复用多次使用  把特定功能的语句打包放在一起



**创建方式** 

​	**静态方法：**

```javascript
function add1(a,b){
    return a + b;
}
```

```javascript
var add2 = function(a,b){
    var c = a + b;
    return c;
}
```



​	**动态方法**： 用对象的方式创建对象

```javascript
var add3 = new Function("a","b","var c = a + b; return c;");/最后一个字符串是大括号内执行的代码
```

返回值 return：获取到函数的结果



**动态情况下 无论写在哪里创建在最顶层**  创建在window下

```javascript
var x = 1;
function func(){
    var x = 2;
    function e1() {
        return x;
    }
    var e2 = new Function("return x;")
    return [e1,e2];
}

alert( func()[0]() );
alert( func()[1]() );
```





## 函数参数及arguments

形参：形式上的参数

实参：实际的参数

```javascript
function add(a,b){  形参
    return a + b;
}
console.log(add(1,2)); 实参
```

**获取形参的个数：**可以通过 add.length的方法获取到形参的长度

**获取实参的个数：** 通过arguments；



**arguments** ：

每创建一个函数系统会自动生成arguments对象，专门为函数参数设计的对象，是个伪数组( 有length 和下标[] )

用callee实现函数的自调用（指向函数本身自己）

`arguments.callee`可以获取到函数的形参



**实现任意参数的求和** 

```javascript
function add(){
    var z = 0;
    for(var i = 0; i<arguments.length; i++){
        z += arguments[i];
    }//arguments 动态参数
    return z; //返回值
}
console.log(add(1,2,3,4));
console.log(add());
console.log(add(1,4));
```







## 函数的三大特性

1. 方法特性 () :运行大括号包裹的代码
2. 对象特性 . :获取对象的属性
3. 类的特性 new：创建类似对象



**自有属性** ：arguments(只能在函数体内使用)	name	length	prototype	call,apply方法

​			toString()方法	bind方法



**自定义属性**：注意是在函数的内部还是外部

​			变量和方法



用自定义属性的方式实现计数器

```javascript
function f(){
    if(f.x == undefined){
        f.x = 0;
    }
    return f.x++;
}
for(i=0; i<100; i++){
    console.log("i=" + i +" x="+ f());
}
```



## 函数的call和apply



**定义：**把函数**临时**赋值到**对象**上面并**执行** 

**两者区别：**传递参数的形式不一样

**call** : function.call(obj,args1,args2){}

先将add方法 添加到obj对象中，执行完后并且删除

```javascript
function add(a,b){
    return a + b;
}

var obj = {

}

add.call(obj,2,3);
```

```javascript
function add(a,b){
    return this.a + this.b;
}

var obj = {
    a:1,
    b:2,
}

console.log( add.call(obj) );
```



**apply** : function.apply(obj,[args]){} **( apply传的值是数组 )** 

```javascript
function add(a,b){
    return a + b;
}

var obj = {

}

console.log( "call：" + add.call(obj,1,2) );
console.log( "apply：" + add.apply(obj,[1,2]) );
```



实例：现有一个初中、一个高中班级，需要收班服的费用，初中男生100，女生80，高中男生120，女生100，请问两个班级收多少钱？

```javascript
var obj1 = {
    boy: 100,
    girl: 90,
}
var obj2 = {
    boy: 50,
    girl: 45,
}
function func(boym,girlm){
    return this.boy * boym + this.girl *girlm;
}
console.log("初中：" + func.call(obj1,100,80));
console.log("高中：" + func.call(obj2,120,100));
```







## 函数bind

**定义：**把函数拷贝一份，并插入到对象作用域上面

**语法：** obj.e = [functionName].bind(obj,args1,args2)

```javascript
function add(){
    return this.x + this.y;
}
var obj = {
    x:1,
    y:2,
}
obj.e = add.bind(obj);
console.log(obj.e());
```







## 函数this指针

**定义**：this是函数体内自带的一个对象指针, this代表函数本身

简单理解：**哪个对象拥有函数，this就是**谁 

**3种基本用法的this**：

​	**普通对象使用函数**

```javascript
var x = 2;
var obj = {
    x: 1,
    e: function(){
        console.log(this.x);/哪个对象拥有了这个函数this就会指向这个函数  /console.log打印为1
    }
}
obj.e();
```



​	**直接使用函数**

```javascript
var x = 2;
function e(){
    console.log(this.x);/指向window对象
}
e();/属于window对象
```



​	**函数对象使用函数** 

```javascript
function f(){
    f.x = 1000;
    f.e = function(){
        console.log(this.x);/this指向函数对象中的x
    }
    f.e();
}
f();
```



​	点击事件函数

```javascript
var btn = document.getElementById("btn");
function f(){
    console.log(this);/this指向的是btn对象
}
btn.onclick = f;
```

​	计时器

```javascript
 var btn = document.getElementById("btn");
function f(){
    console.log(this);/指向window对象
}
btn.onclick = f;
setTimeout(f,1000);/window对象正在使用setTimeout，把f指针传递进去了 
```



## 递归函数

**递归**：函数自己调用了自己 , 需要有终止条件

**递归思维** : 把复杂的问题，拆成越来越简单的问题，直到能够获得结果

**栈的概念**：先进后出 （先压进去的子弹后打出来）

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/栈的概念.png)



实现n的递减

```javascript
function f(n){
    console.log(n);
    if(n<=1){
        return ;
    }
    else f(n-1);
}
```



用递归来实现n阶乘

```javascript
function f(n){
    console.log(n);
    if(n == 0){
        return 1;
    }
    return n * f(n-1);
}
```



用递归来实现x的n次方

```javascript
function f2(x,n){
    if(n == 0){
        return 1;
    }
    return x * f2(x, n - 1);
}
```





## 闭包

闭包就是能够读取其他函数内部变量的函数。只有函数内部的子函数才能读取[局部变量](https://baike.baidu.com/item/%E5%B1%80%E9%83%A8%E5%8F%98%E9%87%8F/9844788)，所以闭包可以理解成“定义在一个[函数](https://baike.baidu.com/item/%E5%87%BD%E6%95%B0/301912)内部的函数“。在本质上，闭包是将函数内部和函数外部连接起来的桥梁

**三要素：**

1.嵌套结构的函数

2.内部函数访问了外部函数的变量

3.在外部函数的外面，调用内部函数



**概念：** 闭包是由函数以及创建该函数的词法环境组合而成。

​	    这个环境包含了这个闭包创建时所能访问的所有局部变量

```javascript
function f(){
    var a = 1;
    return function(){
        a++;
        console.log(a);
    }
}
var f1 = f();

var f2 = f();
```



每次创建都会产生独立的闭包对象，闭包对象之间是互相独立的，闭包对象是长存在内存里的



**作用**：

1.让局部变量变成私有化的长存变量

2.给事件调用函数传递参数







## 什么是对象

**什么是对象：**存在内存中，可以具有多个属性的数据

```javascript
var obj = {
    a:1,
    b:"test",
    c:function(){
        return this.a;
    }
}
```



**复制一个对象:**遍历一遍，将每一个属性的值复制到另外一个对象里

枚举法： 只能针对可以枚举的属性进行遍历；

```javascript
var obj1 = {a:1,b:2,c:3};
    var obj2 = {};
    for(var i in obj1){
        obj2[i] = obj1[i];
    }
```



对象的销毁机制：  无引用后定期自动回收；





## 对象、构造函数、原型的关系

**对象创建方式：**

1. 直接量         var a1 = {}

2. 构造函数     var a1 = new A():

   ```javascript
   function Book(name,page){
       this.name = name;
       this.page = page;
   }
   var book1 = new Book("book1",1);
   var book2 = new Book("book2",2);
   ```

3. **create**方法  var a1 = Object.create(原型对象,属性列表);

   ```javascript
   var book3 = Object.create(null,{
       name:{
           value:"book3",
           enumerable:true,/是否可枚举
       },
       page:{
           value:3,
       }
   })
   ```

**创建原理**：基于构造函数定义的属性，并继承原型对象的属性，生成一个新的对象



**原型：** 特殊的对象 , 通过类的prototype进行设置

```javascript
function Book(name,page){
    this.name = name;
    this.page = page;
}

var bookauthor = {author_name:"cc",author_age:35};        
Book.prototype = bookauthor;

var book1 = new Book("book1",1);
var book2 = new Book("book2",2);

```

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/对象、构造函数、原型的关系.png)





## 原型、原型链、继承

**当前对象:** 本地属性 / 私有属性

**原型对象:** 原型属性 / 公共属性

​	本地属性被修改，只有当前对象的该属性被修改

​	原型属性被修改，所有对象的该属性被修改



**继承原则：**

1. 本地有的用本地
2. 本地没有的找原型
3. 原型没有的找原型对象的原型

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/原型链.png)



**实用方法：** 

​	**获得原型：Object.getPrototypeOf()**

```javascript
function Book(name,page){
    this.name = name;
    this.page = page;
}

var book1 = new Book("book1",1);
var book2 = new Book("book2",2);

var bookauthor = {author_name:"cc",author_age:35};  

Book.prototype = bookauthor;

var bookprototype = Object.getPrototypeOf(book1);
console.log(bookprototype);
```



​	**构造函数检测原型：构造函数.isPrototypeOf（对象）** 

```javascript
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);//Bar的原型是Foo
Baz.prototype = Object.create(Bar.prototype);//Baz的原型是Bar

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true      Baz是不是baz的原型
console.log(Bar.prototype.isPrototypeOf(baz)); // true      Bar是不是baz的原型
console.log(Foo.prototype.isPrototypeOf(baz)); // true      Foo是不是baz的原型
console.log(Object.prototype.isPrototypeOf(baz)); // true   Object是不是baz的原型
```



​	**for/in  ->可枚举属性，包括原型的**

​	**检测私有属性：对象.hasOwnProperty( ' 属性名 ' )** 

​	**Object.getOwnPropertyNames(对象名)  -> 所有私有属性的名称**

```javascript
Object.getOwnPropertyNames(book1)
返回：["name", "page"]
```



​	**Object.keys()  -> 可枚举的私有属性的名称**







## 对象属性的高级用法

获取属性值用“点”，多层级的，就用多个点;



**属性的特性**:

可写 :  是否可设置该属性的值-   `writable`：ture

可枚举 : for/in是否可以获得该值-   `enumerable` ：ture

可配置 : 是否可以删除或修改该属性特性-   `configurable` ：ture



**定义属性的特性**:

Object.defineProperty(对象，" 属性名 "，特性描述对象)

Object.defineProperties (对象，{多属性特性描述对象}) 



```javascript
var obj = {
    x: 1,
    y: 2,
};
Object.defineProperty(obj,"z",{
    value:3, /z的值
    writable:false,/是否可以设置该属性的值
    enumerable:true,/是否可枚举
    configurable:true,/是否可配置
})
```



**查看属性的特性**：

Object.getOwnPropertyDescriptor(对象，''属性名'')   -> 私有属性的特性描述



**set  get** 

```javascript
var class1 = {
  boy: 10,
  girl: 8,
  allmoney: 0
}
Object.defineProperty(class1, "onemoney", {
  set: function(money){ /设置
    this.allmoney = money * (this.boy + this.girl);
  },
  get: function(){ /获取
    return this.allmoney;
  },
  enumerable: false,
  configurable: true
})
//class1.onemoney = 10
//class1.allmoney : 180
```





## 对象的特性及克隆

| 函数                       | 不可添加新属性 | 不可设置特性 | 不可修改属性值 |
| -------------------------- | -------------- | ------------ | -------------- |
| Object.preventExtensions() | 是             | 否           | 否             |
| Object.seal()              | 是             | 是           | 否             |
| Object.freeze()            | 是             | 是           | 是             |

```javascript
var obj = {x:1,y:2};
Object.preventExtensions(obj); /对象中不可以添加新的属性
```



**查看特性的方式**：返回布尔值

​	`Object.isExtensible()  `  

​	`Object.isSealed()  ` 

​	`Object.isFrozen() ` 



**克隆对象：** 

​	浅克隆：

```javascript
var obj = {x:1,y:2};
var obj1  ={};
for( i in obj){
    obj1[i] = obj[i];
}
```



​	深克隆：

```javascript
var obj = {
    x:1,
    y:{x:2}
}
var obj1  ={};

function clone(obj){
    var obj1 = {};
    for( i in obj){
        if(typeof obj[i] == "object"){
            obj1[i] = clone(obj[i]); /递归思想
        }
        else obj1[i] = obj[i];
    }
    return obj1;
}
```



​	原型克隆

```javascript
function clone1(obj){
    function Temp(){}
    temp.prototype = obj;
    return new Temp();
}
```



全面的深克隆

```javascript
 function clone(obj){
   if(obj instanceof Array){
     var ary = [];
     for( var i = 0; i<obj.length; i++){
       ary[i] = clone(obj[i]); 
     }
     return ary;
   }
   if(obj instanceof Object){
     var newObj = {};
     for(key in obj){
       newObj[key] = clone(obj[key]);
     }
     return newObj;
   }
   return obj;
 }
```





## 数组详解

**定义：** 数组是一种有序数据结合

​	注意：数组的值是有序的，对象的值是无序的



**创建方式：** 

​	直接量：var a = [];

​	构造函数：var a = new Array(); 多个值或一个非数值 ， 一个值时是数组的长度



遍历数组：

```javascript
var a1 = [1,2,3,"a32"];
for(var i = 0; i<a1.length; i++){
    console.log(a1[i]);
}/for方法

for(var i in a1){
    console.log(a1[i]);
}/for in方法
```



**注意：** 

1.数组长度是弹性的  (长度由最大下标决定)

2.下标从0开始的非负整数，且小于2^23-1

3.下标不符合，将转换为字符串，成为对象属性



**多维数组** 

```javascript
var a = [ [1,2,3],[4,5,6]];
console.log( a[0][0]);
```







## 数组API

1. `push`添加元素

2. `pop`删除元素

3. `unshift` 在头部插入元素

4. `shift` 在头部删除元素

5. `concat `连接数组->新数组

```javascript
    var a = [0,1];
    var b = [2,3];
    var c = a.concat(b);
```

6. `splice` 删除并插入元素

   ```javascript
   var a = [0,1,2,3,4,5];
   a.splice(1,3,"1","2","3");
   /splice(删除开始的下标，删除个数,添加的元素)
   ```

7. `slice `截取元素生成新数组

```javascript
    var a = [0,1,2,3,4,5];
    var b = a.slice(1,2);
			/(开始下标，结束下标)；负数为从后往前拷贝
```

8. `reverse()` 颠倒顺序
9. `sort ()`排序 (传值可以是函数)  并返回数组。默认排序顺序是根据字符串Unicode码点。

如果指明了 `compareFunction` ，那么数组会按照调用该函数的返回值排序。即 a 和 b 是两个将要被比较的元素：

- 如果 `compareFunction(a, b)` 小于 0 ，那么 a 会被排列到 b 之前；

- 如果 `compareFunction(a, b)` 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；

- 如果 `compareFunction(a, b)` 大于 0 ， b 会被排列到 a 之前。
- `compareFunction(a, b)` 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

```javascript
var b = [4,8,3,34,12,8,1,6];
b.sort( (a, b) => {
  if(a > b) return 1;
  if(a < b) return -1;
  if(a == b) return 0;
} )

console.log(b)
```



8. `indexOf() `获取元素的索引 （查看下标 从前往后）
9. `lastIndexOf` 获取元素的索引 （从后往前）
10. `forEach` 定义每个元素定义回调函数 

```javascript
var a = [0,1,2,3,4,5];
a.forEach(f);
function f(value,index,ary){ /元素的值，元素的索引，整个数组
    console.log("value:"+value+" index:"+index+" ary:"+ary);
}/三个值(值，索引，整个数组)
```



13. `every `每个元素回调是否是true
14. `some` 一个元素回调是否是true
15. `map` 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。

```javascript
var array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
```



13. `filter` 返回结果为true的数组
14. `reduce` 汇总元素
15. `reduceRight` 反向汇总元素





数组去重

```javascript
Array.prototype.ditinct = function(){
  var ret = [];
  for(var i = 0; i<this.length; i++){
    for(var j = i+1; j<this.length;){
      if(this[i] === this[j]){
        ret.push( this.splice(j,1)[0] ); /如果前一位和后一位相等就把他删除并且添加到新的数组中
      }
      else{
        j++; /否则下一位
      }
    }
  }
  return ret;
}
var x = ['a','b','c','a','b','c','d'];
var y = x.ditinct();

console.log(x);//去重之后的数组 ["a", "b", "c", "d"]
console.log(y);//删除的数组 ["a", "b", "c"]
```







## 常见字符串处理需求

**字符串定义**：字符串直接量，字符串对象 ；双引号     单引号    转义字符:\

```javascript
 var str = String(1,2,3);
```



**理解Unicode编码:**

​	Unicode编码是一本字典书，现在书写了17页了

​	每一页：两个字节来存储  0x0000 -- 0xFFFF ；有65536个数字，每个数字对应一个符

​	早期ASCII码：0x00 -- 0xFF  256个英文及常用符号	

1. 字符和编码之间转化： fromCharCode ，charCodeAt

```javascript
	str.charCodeAt(3);/参数传字符串中想转换的第几位
	String.fromCharCode(99,99,29233,116,116);/参数传Unicode编码
```

​	字符可以比较大小；

2. 字符串长度和字节长度：ASCII的为单字节 ，Unicode为双字节

3. 字符串拼接： +号（建议），   concat()

4. 字符串查找:

    **charAt()**通过下标获取字符,   



   **indexOf()**  从前往后通过给定的字符串查找,返回下标

   ```javascript
   var s = "cc爱tt,cc爱tt,cc爱tt";
   s.indexOf("tt",10);/第二个参数起始位数
   ```



   **lastIndexOf()**   从后往前通过给定的字符串查找,返回下标(同样两个参数)

   match  search  ：正则表达式

5. 字符串截取：**slice(开始下标，结束下标)**  结束下标为负数是从后往前数

      **substring** (如果下标写反了，默认将下标颠倒) 负数当作零

6. 字符串替换： replace - 正则表达式

7.  字符串和数组之间转化 

   **join**数组转字符串

   ```javascript
   var ary = [1,2,"aasd",true];
   ary.join();/参数可以传字符串以什么符号隔开
   ```

   **split**字符串转数组 (参数可以传字符串以什么符号隔开)

8. URL编码: 通过encodeURI() 方法将文字转换成URL编码

   ​			decodeURl()将编码转换成汉字





## 正则表达式语法

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

**意义**：描述字符模式的对象       字符组成的特殊格式的字符串

**定义**：

​	**直接量** ：/字符模式/标志字符

​	**RegExp类**：new RegExp( “字符模式”，“标志字符”)   g：全匹配   i：不分大小写   m：多行匹配

​	**组成**：普通字符（A~Z a~z 0~9 + - * / () {} * ? = ^等等)     及元字符	



**字符模式：** 

**.match（）** 用match方法匹配

**字符范围** ` [abc]` `  [0-9]`   `[^abc]` `^` 取反   `[ ]`中括号里面的代表一个字符
**逻辑或**   `| `    /(abc) |  (123)/  

**重复**         `+`：至少一个  等价于 {1,}

​		 `*` ：零个或多个    等价于 {0,}

​		 `？`：零个或一个   等价于 {0,1}

​	 	`{x}`： x个  

​		 `{x,y}`： x或y个 

​		 `{x,}`： 至少x个 

​		 `. `：匹配除换行符之外的任何单个字符
重复(尽可能多的)默认贪婪模式  加上 `？`变惰性模式

**限定词** ： `^`用第一个单词进行匹配

​		 ` $`用最后一个单词

**声明量词** :  ` (?=as)`等号后面是指定内容      ` (?!as)`不等于

**表达式分组及引用**  `()`  每一个子表达式都会被独立执行 并存储，如果不想在子表达式前面加上`?:` 

​	**获取子表达式的值 ： **通过 `\1`  `\2` ……来获取子表达式的值 

## 正则实战

**作用**：验证字符串，查找字符串，截取字符串，替换字符串



**RegExp**：

`exec`:  检索指定值，返回数组

`test`:   检索指定值，返回true或false



**String**:

`search`:   检索指定值，返回下标

`match`:   检索指定值，返回数组

`replace`:   替换指定值，返回数组

`split`:   分割字符串，返回数组 

```javascript
/前后同时有^ $时表示验证同一行的所有字符
//验证是否是qq号 必须都是数字 5～11位 第一个数字不能是0
var reg = /^[1-9][0-9]{4,10}$/;
reg.test("2035490482");

//验证年龄 必须是数字 第一个数字不能是0  不能大于150
var reg = /^([1-9][0-9]?|1[0-4][0-9]|150)$/;

//验证用户名 开始不能是数字 只能是字母  长度只能是10个  字母和数字的组合
var reg = /^[a-zA-Z]\w{1,9}$/;

//邮箱地址 
var reg = /^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w+([.-]\w+)*$/;
```



# ECMAScript 6

## ES6简介

ECMAScript 是javascript的书写规范，javascript是ECMAScript的实现

在实现过程中分为了两部分内容：DOM(Document Object Model) ，BOM；



**One JavaScript原则** 

不会改变以前的语法，更新是从以前的版本的基础上增加语法



**bable使用**：将ES6的语法转换成EC5的语法

```javascript
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> /引入该行标签
<script type="text/babel">	/在要转换的标签上写入 type="text/babel"
	const getMessage = () => "Hello World";
	document.getElementById('output').innerHTML = getMessage();
</script>
```





## let与const块级作用域

**块级作用域：**

​	{块级作用域}从大括号开始到大括号结束是一个块级作用域



**let的使用**：

声明的变量遵循块级作用域，

```javascript
let msg = "hello";
{
    let a = 1;
}
console.log(msg);
console.log(a);//访问不到a，是块级作用域，大括号外失效
```

​	**不能变量声明提升**

```javascript
console.log(a);/var 会将变量提前声明 var a; 打印出undefined 
var a = 1;

/用let定义变量 不会提前声明
console.log(a);/会报错，a is not defined
let a = 1;/在哪块写的就在哪声明赋值
```

​	**不能重复声明变量** 

```javascript
var a = 10;
var a = 20;/在var中下面的会把上面的覆盖掉
console.log(a);/20

let ;/不能重复声明,不会污染变量
```



**const的使用**：

定义的时候要有初始化值

初始化值不能改变（绑定不能改变）,可以增加属性



**块级作用域的奇特概念**

​	暂时性死区(TDZ)：

```javascript
let a = 10;
{
    console.log(a);/会报错，不管let在哪定义变量，let会统治整个作用域
    let a = 20;
}
```



​	循环中使用块级作用域: 

```javascript
var arr = [];
for(var i = 0; i < 10; i++){/用var声明，遵循函数作用域
    (function(j){
        arr.push(function(){
            console.log(j);
        })
    })(i);
}
arr.forEach(function(item,index,arr){
    item();
})




var arr = [];
for(let i = 0; i < 10; i++){/用let声明，块级作用域，出大括号消失，进大括号重新定义
    arr.push(function(){
        console.log(i);
    })
}
arr.forEach(function(item,index,arr){
    item();
})
```





## 字符串的扩展

**传统字符串的问题：**

​	多行字符串问题。

​	字符串中使用变量。 

```javascript
let msg = "hellohellohellohellohello\n\
        hellohellohellohello";
/用原方法定义字符串 换行时会报错，要用\n\进行连接，但是有空格;
/或者用加号 字符串拼接，
```

​	

**ES6新方法**解决上述问题

```javascript
反引号 `字符串`    解决多行字符串问题
	let msg = `hello
	hello
	hello;  //可以随意换行，不用进行拼接

替换位的使用 ${}    解决字符串中使用变量
	let age = 10;
    let msg = `pink ${age}  也可以在大括号中写表达式
	pink
	pink`;
```



实例：模拟从服务器获取数据添加到 页面

```javascript
let arr = [{
            title:"VUE CONF大会之后的感想(非技术)",
            like:"200",
        },
        {
            title:"三行代码实现 JS 柯里化",
            like:"300",
        },
        {
            title:"赶上 ECMAScript 潮流：用现代 JavaScript 编程",
            like:"400",
        },
        {
            title:"Cookbook：优化 Vue 组件的运行时性能",
            like:"500",
        },
        {
            title:"Typescript版本VUE+组件封装+最简单的策略模式",
            like:"600",
        },]
 
        let myul = document.getElementById('myul');
        let html = "";
        arr.forEach(function(item){
            html+=`
            <li>
                <h3>${item.title}</h3>
                <p>${item.like}</p>
            </li>`
        })
        myul.innerHTML = html;
```



**字符串拓展方法**:

**String.prototype.includes("要查找的字符"，索引值从第几位开始查找)**   

​	判断一个字符或一串字符是否在当前的字符串内 返回true/flase

```javascript
let msg = "hello";
console.log(msg.includes("o"));/返回布尔值
```



**String.prototype.startsWith("要查找的字符"，索引值从第几位开始查找)**  判断字符串是否是以某某开头

```javascript
let msg = "hello";
console.log(msg.startsWith("h"));/判断是否是以h开头
```

**String.prototype.endsWith** ("要查找的字符"，索引值前的字符) 判断字符串是否是以某某结尾



**String.prototype.repeat(重复的次数)**  去重复一段字符串









## 数组结构赋值与对象解构赋值



**数组解构赋值**： let [a,b,c] = ary;

```javascript
let ary = [1,2,3];
let a = ary[0];
let b = ary[1];
let c = ary[2];/原始方法

let ary = [1,2,3];        
let [a,b,c] = ary;/es6 方法
```

**注意事项：** 

​	必须要进行初始化

​	可以在解构中忽略一些项

​	**互换两个变量**的值

```javascript
let x =1;
let y =2;
let temp;
temp = x;
x = y;
y = temp;/原始方法

let x =1;
let y =2;
[x,y] = [y,x]; /es6方法
```



**默认值：** 当指定位置的项不存在走默认值  

​		指定位置的值严格等于undefined走默认值

```javascript
let [x=10, y=20] = []
console.log(x, y); /10,20   当赋值为undefined时走默认值

let [x=10, y=20] = [1, 2]
console.log(x, y); /1,2   当不为undefined时走赋值
```



**对象解构赋值：**  

​	基本语法 : 字面量对象 = 字面量对象

```javascript
let name = "xiangqingyuan";
let obj  ={
    name,/当属性值和属性名一样时 可以缩写成一个 与 name: name相等
}
```

```javascript
let {name:name1,age:age1} = {name:"xiangqingyuan",age:18}
console.log(name1,age1);
```

**注意事项：** 

​	必须要进行初始化

​	在赋值的时候使用解构赋值

```javascript
let name1,age1;/在上面声明
({name:name1,age:age1} = {name:"xiangqingyuan",age:18});
	/在上面声明变量，赋值时要用小括号包起来，否则被识别为代码块
console.log(name1,age1);
```

​	解构赋值表达式的值是表达式右侧的值

```javascript
	function fu(value){
            console.log(value);  /{name: "xiangqingyaun", age: 18}
        }
    let obj = {
        name:"xiangqingyaun",
        age:18,
    }
    fu({name,age} = obj);
```

如果赋值严格等于undefined的时候走默认赋值



**混合解构：对象和数组组合使用** :

模式匹配：左右模式互相对应，相等

```javascript
let {age: [a, b, c]} = {age: [1, 2, 3]}
console.log(a, b, c); /1, 2, 3
```











## ES6参数的处理

**参数默认值**:参数值严格等于undefined走默认值

```javascript
function value(){
    return 20;
}
/惰性求值：当 a的默认赋值发生的时候才会执行函数value();
function fn(a = value(),b = 2,c = 3){
    console.log(a,b,c); /如果不传参数走默认赋值
}
fn();
```

在默认值中使用其他变量: 从左到右的顺序，作用域的问题



**剩余运算符：** ` ... `  三个点

把散列元素的变成一个集合，在函数或解构中使用

​	把剩下的元素变成数组

```javascript
function add(...arr){
    console.log(arr); /[1, 2, 3, 4, 5, 6, 7, 8, 9]
}
add(1,2,3,4,5,6,7,8,9);
```

```javascript
let [a,...b] = [1,2,3,4,5];
console.log([a,b]);
```



**扩展运算符** ：把一个集合变成散元素 ，函数参数传递，数组和对象的复制

```javascript
function fn(a,b,c){
    console.log(a,b,c); /1 2 3
}
fn(...[1,2,3]); /会将数组拆开分别赋值给a,b,c
```

数组的复制

```javascript
let arr = [1,2,3];
let arr2 = [...arr];
```

对象的复制：

```javascript
let obj = {
    a : 1,
    b : 2,
    c : 3
}
let obj2 = {
    ...obj
}
```



**模拟命名参数** :使用对象的解构赋值来模拟命名参数(提高代码的可读性) 

```javascript
function fn({start = 1,end = 2} = {}){
    console.log(start,end);
}
fn({start:3,end:4});/当没有参数时执行默认值
```





## 对数字的操作

16进制表达方式：let num = 0x10;  在数字前面加0x

8进制表达方式 ：let num = 0o100;  在数字前面加0o

2进制表达方式：let num = 0b10;   在数字前面加0b



**使用场景：node.js** ：在后台运行 linux 

​	创建一个文件 文件权限：读权限read，写权限write，执行权限execute

用二进制表示权限

​	文件创建者:   r:1      w: 1    e1

​	组成员    r: 1     w:1     e0

​	其他       r:  1    w: 0    e0



**新的Number方法**：

```javascript
console.log(isNaN('>'));  //看一个数字是不是空 如果是字符串会进行隐士转换 
console.log(Number.isNaN('>')); /如果不是数字的话 会直接返回 false

console.log(isFinite(Infinity)); // 看一个数字是不是有限的 
console.log(Number.isFinite('1111'));  /如果不是数字的话 会直接返回 false
```







## 箭头函数详解

**箭头函数**：语义化的函数

​	lambda表达式 

来源于**cooffeeScript :**相当于js的超级

胖箭头 ，瘦箭头



**基本语法**:  () => {} 

```javascript
var foo1 = (a,b) => {
    console.log(a,b);
}
foo1(1,2);
```

**注意点：** 

​	**如果参数只有一个的话 小括号可以省略**

​	**如果参数是0个 两个或两个以上的话 小括号必须有**

```javascript
var foo1 = a => {
    console.log(a);
}
foo1(1);
```

​	**如果执行语句是一条的话 大括号可以省略** 如果有return的话可以删除return

​	**如果执行语句是两条或两条以上的话 必须要用大括号** 

```javascript
var foo1 = a => console.log(a);
foo1(1);
```



**this指向的问题**：	箭头函数里面没有this指向，它的this 是借用父级作用域的this;this指向 不可以被更改

**不能使用arguments** 

**不能当做构造函数** 









## ES6对象的扩展

**新的对象字面量特性** 

```javascript
方法的定义：
    /老方法：
        let obj = {
            a:1,
            show : function(){
                console.log('show');
            }
        }
    /新方法：可以省略掉 ：和function
        let obj = {
            a:1,
            show(){
                console.log('show')
            }
        }
        obj.show();


对象属性的简写：属性名和属性值一样时可以简写；
  let name = "xqy";
  let obj = {
    name,
    age:10,
  }

计算属性名：属性名也可以是变量
	let a = 'mame';
  let obj = {
    [a] : 1,/a是变量 = name
    b:2
  }
    console.log(obj);
```



**新的对象方法** 

**Object.is**    判断两个值是否相等

```javascript
console.log(Object.is(1,1));/返回布尔值
```

​	与===的差别：NaN， +0 与-0 (科学计算，精确计算)，



**Object.setPrototypeOf** (obj,protoObj1)  给对象设置原型

```javascript
let obj = {
    a:1,
    b:2
}

let obj1 = {
    c:3
}

Object.setPrototypeOf(obj,obj1);/两个值，第一个值要设置原型的对象，第二个原型对象

console.log(obj.c);
```

**Object.getPrototypeOf(obj)** 获取对象的原型

```javascript
let obj = {
  a:1,
  b:2
}

let obj1 = {
  c:3
}

Object.setPrototypeOf(obj,obj1);

console.log(obj.c); /3
```





**Object.assign** () 可以合并对象  可以传无数个对象 第一个对象是目标对象（只能复制自身上的可遍历的属性）

```javascript
let obj1 = {
  a:1
}
let obj2 = {
  b:2
}
let obj3 = {
  c:3
}
Object.assign(obj1,obj2,obj3);
console.log(obj1); //{a: 1, b: 2, c: 3}
```

​	**注意**：复制对象属性: 自身的可以遍历的属性 

​		    复制对象是一个对象一个对象复制的

​                   属于浅拷贝

​	**使用场景：** 

​		对象的复制，

```javascript
 				let obj1 = {
            a: 1,
            b: 2
        }
        let obj2 = Object.assign({},obj1)
        console.log(obj2);
```



​		原型方法的添加：

```javascript
				function Person(){
            this.name = "xiangqignyuan"
        }
        let obj =  Object.assign(Person.prototype, {
            eat(){

            },
            walk(){

            }
        })
```



​		函数默认参数





**对象的遍历**  

**Object.keys()**; 会遍历出对象的属性名 返回一个数组

```javascript
 let obj = {
     a:1,
     b:2,
     c:3
 }
 console.log(Object.keys(obj));
```

**Object.values()** 会遍历出对象的属性值 

**Object.entries()** 便利出属性名和属性值 返回二维数组





## 类的基础使用方法

JS 是一门基于原型的语言 为了有面向对象的设计思想 所以创建出了类 

Js 基于原型 ： 连接

Java 基于类 ： 复制



**ES5中的仿类结构：构造器（自定义类型）**  



**类的声明：基本的类声明** 

​	类声明以class关键字开始  然后是类的名字  

​	剩余部分像是对象字面量的简写

​	两个对象之间*没有*逗号隔开

```javascript
class Dog{ /通过class来声明类名
    constructor(name,age){ /要使用关键字constructor
        this.name = name;
        this.age = age;
    }
}
const lili = new Dog("lili",3);
const goudan = new Dog("goudan",5);
```

**类语法注意事项**:

1. 类声明不会被提升

2. 类声明中的代码都自动运行在严格模式下

3. 调用类必须使用new

4. 类中所有的方法都是不可枚举的

5. 类中的方法是不能用new调用的

6. 在类的方法中重写类名报错



用ES5方法

```javascript
const Dog = (function(){
    "use strict";
    const Dog = function(name,age){
        if(!(this instanceof Dog)){
            throw new Error("必须使用new去调用方法")
        }
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Dog.prototype,"bark",{
        value:function(){
            if(this instanceof Dog.prototype.bark){
                throw new Error("不能使用new调用")
            }
            console.log(`我叫${this.name}`)
        },
        enumerable:false
    })
    return Dog;
})()
const lili = new Dog("lili",3);
const goudan = new Dog("goudan",5);
```



**类表达式** 

```javascript
const Cat = class{
    constructor(age){
        this.age = age;
    }
}
const xiaomao = new Cat(3);
```



**类为一等公民**: 可以作为参数传给函数,  能作为函数返回值,  能给变量赋值



**静态方法:**  

```javascript
class Dog{
    constructor(name,age){ 
        this.name = name;
        this.age = age;
    }
    bark(){     /原型方法
        console.log(`我叫${this.name}`)
    }
    static showInfo(){/静态方法 可以通过Dog.showInfo()的形式来调用  关键字static
        console.log("这是一条狗");
    }
}
```

**getter与setter** 

```javascript
class Dog{
  	constructor(name,age){
    this.name = name;
    this.age = age;
  }
  bark(){ //原型
    console.log(`我叫${this.name}`)
  }
  static showInfo(){   //静态方法 可以通过Dog.showInfo()的形式来调用
    console.log("这是一条狗");
  }
  get info(){  // 可以通过lili.info 的形式获取
    return `我叫${this.name},我${this.age}岁了`
  }
  set nickName(value){ //设置一个值
    this.nick = value;
  }
  get nickName(){
    return this.nick;
  }
}
const lili = new Dog("lili",3);
const goudan = new Dog("goudan",5);
console.log(lili, goudan);
```







## 类的继承



ES6中class 继承extends super的使用

```javascript
class Animal{
    constructor(name){
        this.name = name;
        this.thirsty = 100;
        this.food = [];
    }
    drink(){
        return this.thirsty -= 10;
    }
    eat(item){
        this.food.push(item);
    }
    static Info(){/通过static 关键字定义静态方法
        console.log("我是一个静态方法")
    }
}

class Dog extends Animal{ /通过extends来继承
    constructor(name,bread){
        super(name); / 注意:必须先调用 super() 才能使用 "this"。
        this.name = name;
        this.bread = bread;
    }
}

var wangcai = new Dog('wangcai','藏獒');
```

通过 **static** 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用。这些通常是实用程序方法，例如创建或克隆对象的功能。







## 模块化

ES5之前是没有模块化的，

立即执行函数去写模块化的问题：

 	1. 没有完全解决全局变量的污染
 	2. 我们需要考虑script标签的加载顺序

2009年推出 node.js ，JavaScript代码可以在后台运行 

在node中每一个js文件都是一个独立的作用域 



**模块化基本语法**

​	es6当中知道定义了语法, 但是没有定义我们的加载方式

**将type改成module** 

```javascript
<script type="module">
        
</script>
```

**导出 export** 

```javascript
export function add(a,b){
    console.log(a+b)
}
```

```javascript
export function jian(a,b){
    console.log(a-b)
}
```

​	或者在最后导出

```javascript
export{add}/在当前文件导出
```

```javascript
export {add as add1};/将add导出为add1，执行时也要写add1
```

**导入 import** 

```javascript
<script tppe="module">
    import {add} from "./add.js";/导入也可以用as重命名
add(1,2);
</script>
```

**默认导出** 

```javascript
export default function jian(a,b){/关键字 default 导出为匿名函数
    console.log(a-b)
}
```

```javascript
import jian from "./jian.js";/不用写大括号 导入的是匿名函数
```

**可以用*导出全部** 

```javascript
import * as obj from "./jian.js";/导出的是一个对象,通过 (对象.函数名) 的形式使用
obj.jian(5,6);
```





## ES6对数组的扩展

**创建数组：** 

​	**Array.of()** 

```javascript
let arr = Array.of(10);
```

​	**Array.from()** 将类数组转换成数组并调用map方法

​	在DOM节点中使用：把一个类数组变成数组,并且调用map方法

```javascript
let myp = document.getElementsByTagName('p');
let mypArr = Array.from(myp,(item) =>{
    return item.textContent;
});
console.log(mypArr);
```

​	在arguments中

```javascript
function add(){
    return Array.from(arguments).reduce((item,sum) => {
        return sum += item
    },0)
}
console.log(add(1,2,3,4,5));
```

​	数组的浅拷贝

```javascript
let arr = [1,2,3];
let arr1 = Array.from(arr);
```



**数组数据新方法** 

​	**find()** 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined

```javascript
var data = [{
    id:1,
    name:"xqy"},
    {id:2,
    name:"dwf"},
    {id:3,
    name:"dfw"
    },];
	console.log(
    	data.find((item,index,arr) => {
        return item.id === 1;
    }))
```

​	**findIndex()**方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。



​	**fill(value,start,end)**方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```javascript
var arr = new Array(10);
arr.fill(1,3,10);
console.log(arr);
```

​	**copyWithin(target,start,end)** 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小

```javascript
var arr = [1,2,3,4,5,6,7,8,9,10];
arr.copyWithin(0,6,10);
console.log(arr);//[7, 8, 9, 10, 5, 6, 7, 8, 9, 10]
```



​	**some()**方法测试数组中的某些元素是否通过由提供的函数实现的测试。

```javascript
var ages = [12,20,22,8]
console.log(ages.some(age => age>=18))//ture
```

​	**every()** 方法测试数组的所有元素是否都通过了指定函数的测试。

```javascript
var ages = [12,20,22,8]
console.log(ages.some(age => age>=18))//false
```

​	**includes()** 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

```javascript
var arr = [1,2,3];
console.log(arr.includes(5));//返回false
```





## Iterator与Generator的使用

**for循环的缺陷**：

```javascript
let colors = ["red","blue","pink","yellow"];
/理解方面比较差， i这个变量不好管理
for(var i = 0; i<colors.length; i++){
    console.log(colors[i]);
}
```

**迭代器：** `[Symbol.iterator] ()` 

迭代器是什么？ 

​	统一的接口，它是一个对象 对象里面有`next`方法, 

​	每次调用这个方法就会输出数据结构的的成员

​	第一次输出第一个成员，第二次输出第二个，

​	已此类推，输出成员的形式为`{value:值,done:true/false}`  

​	对象没有迭代器

​	数组迭代器：

```javascript
let colors = ["red","blue","pink","yellow"];
let arrIt = colors[Symbol.iterator](); /创建迭代器函数
arrIt.next();/执行
```

​	类数组迭代器：

```javascript
let argsIt;
function fn(a,b,c){
    argsIt = arguments[Symbol.iterator]();
}
fn(1,2,3)
argsIt.next()
```

​	DOM

```javascript
let myP = document.getElementsByTagName('p');
let pIt = myP[Symbol.iterator]();
pIt.next()
```

​	字符串

```javascript
let str = "xiangqingyuan";
let sIt = str[Symbol.iterator]();
```

**for of循环**  只要内置有迭代器就可以用forof循环 他是循环一个迭代器的而不是使用`.next()`方法

```javascript
let colors = ["red","blue","pink","yellow"];
for(let color of colors){
  console.log(color); /打印出：red blue pink 
  if(color === 'pink'){
    break;
  }
}/可以break跳出
```

**数组新增方法：**

​	**keys()** 索引

​	**value()** 值

​	**entries()** 所有

```javascript
let colors = ["red","blue","pink","yellow"];

for(let color of colors.keys()){
    console.log(color);
}
```





## ES6生成器

生成器 Generator

**基础语法 :function* fn(){}** 

```javascript
function* fn(){ /普通函数，如果没有return语句 就会从头到尾执行下来 
    yield "111";/碰到yield语句会暂停  将yield语句后面的输出到。next()的value里面
    yield "222";
    yield "333";  
}

const people = fn();/函数执行完会返回一个迭代器 调用people.next()
```

**可以通过next()传参**  如果不传值整个yield语句就是undefined

```javascript
 function* fn(x){         /x=4
     var y = yield (x+2); /y=6
     var z = yield (y/3); /z=10
     return x + y + z;
 }

const it = fn(4);
console.log(it.next());
console.log(it.next(6));
console.log(it.next(10));
```



**for of 循环** 

```javascript
function* fn(){
    yield "111";
    yield "222";
    yield "333";  
}

const people = fn();

for(var person of people){
    console.log(person); /打印出 111 222 333 
}
```

**在对象中创建自定义的迭代器 **

```javascript
let obj = {}
obj[Symbol.iterator] = function* fn(){
  yield 1;
  yield 2;
  yield 3;
}
for (const iterator of obj) {
  console.log(iterator);/打印出 1  2  3
}
```







## ES6中异步的处理(Promise async await)

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise  MDN

https://www.jianshu.com/p/459a856c476f   简书

promise A+规范: <https://promisesaplus.com/> 

中文翻译 promise A+规范 :<http://www.ituring.com.cn/article/66566> 

**需要异步的原因：**

​	js是单线程的 js一段时间内只能做一件事情 

​	js需要跟浏览器交互 请求数据 要等待 所以出现了异步  等数据请求回来，执行函数内的内容



**Promise** 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。

```javascript
new Promise( function(resolve, reject) {...} /* executor */  ); /通过new的形式创建出一个promise
```

```javascript
const p = new Promise((resolved,rejected)=>{
  setTimeout(function(){
    resolved(1000);
  },1000)
});
console.log(p); 
//会打印出{
//[[PromiseStatus]]: "resolved", 状态
//[[PromiseValue]]: 1000 传的值
//}
```



一个 `Promise`有以下几种状态: 

​	*`pending`*: 初始状态，既不是成功，也不是失败状态。

​	*`fulfilled`*: 意味着操作成功完成。 通过`resolved()`来注册成功的事件

​	*`rejected`*: 意味着操作失败。通过`rejected()`来注册失败的事件

​								两个函数都不调用时是pending状态

```javascript
const p = new Promise((resolved,rejected)=>{/成功，失败
    resolved(100);
});
```



`then()` 方法返回一个  [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/API/Promise) 。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。

```javascript
p.then(function(val){ /第一个是成功的回调函数 第二个是失败的回调函数
    console.log(val);/成功时执行
},function(err){
    console.log(err);/失败时执行
})
```

创建一个已处理的promise

```javascript
const p1 = Promise.resolve();/成功的状态
console.log(p1);
const p2 = Promise.reject();/失败的状态
console.log(p2);
```



**promise链式调用**  *解决回调地域的问题* 

```javascript
//p.then会返回一个新的promise对象 它看回调函数的返回值
//如果return值不是promise对象的话就是成功状态
//如果return的promise对象是成功的外界promise就是成功的，如果是失败的外界就是失败的
function fakeAjax(ms, val){
  return new Promise((resolved,rejected)=>{
    setTimeout(function(){
      resolved(val);
    },ms)
  })
}
fakeAjax(1000,10).then((val)=>{
  console.log(val);
  return fakeAjax(2000,20)
},()=>{}).then((val)=>{ //链式调用
  console.log(val);
  return fakeAjax(3000,30)
},()=>{}).then((val)=>{
  console.log(val);
})
```



`Promise.all(iterable)` 参数是一个数组，如果所有的返回成功则调用成功的回调函数，如果有一个失败则调用失败的回调函数 

```javascript
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

`Promise.race(iterable)` 去看反应最快的请求

`catch()` 方法返回一个[Promise](https://developer.mozilla.org/zh-CN/docs/Web/API/Promise)，并且处理拒绝的情况。它的行为与调用



**一、Pomise.all的使用**

**Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。**

具体代码如下：

```js
let p1 = new Promise((resolve, reject) => {
  resolve('成功了')
})

let p2 = new Promise((resolve, reject) => {
  resolve('success')
})

let p3 = Promse.reject('失败')

Promise.all([p1, p2]).then((result) => {
  console.log(result)               //['成功了', 'success']
}).catch((error) => {
  console.log(error)
})

Promise.all([p1,p3,p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)      // 失败了，打出 '失败'
})
```

Promse.all在处理多个异步处理时非常有用，比如说一个页面上需要等两个或多个ajax的数据回来以后才正常显示，在此之前只显示loading图标。

代码模拟：

```js
let wake = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${time / 1000}秒后醒来`)
    }, time)
  })
}

let p1 = wake(3000)
let p2 = wake(2000)

Promise.all([p1, p2]).then((result) => {
  console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
}).catch((error) => {
  console.log(error)
})
```

**需要特别注意的是，Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。这带来了一个绝大的好处：在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题。**

二**、Promise.race的使用** 

顾名思义，Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('failed')
  }, 500)
})

Promise.race([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)  // 打开的是 'failed'
})
```

链接：https://www.jianshu.com/p/7e60fc1be1b2





## 异步编程1-同步



**JavaScript运行的时候做了什么** 

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步编程1.png)

1. 一行一行的执行代码    执行函数

2. 把数据存在一个有标识的内存当中（全局变量对象 / 局部变量对象）

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步1.png)

Call Stack：追踪我们的js代码运行到哪里了







## 异步编程2-异步



异步是现代js开发中的基石

由于js是单线程与一段时间只能执行一段代码的特性，如果我们在执行一段代码之前需要等待一段时间

那只有等待了



**同步的情况：** 

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步编程 2.png)

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步2.png)

问题：不合理的模式：会阻塞代码的执行

好处：代码非常容易理解



**目标：**

1. 有一个任务需要长时间完成，例如一个请求

2. 继续向下执行接下来的js代码

3. 当那个很长时间的任务完成的时候，做一些什么



**引入异步：** 

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步编程3.png)

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步3.png)

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步编程4.png)

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步4.png)

问题：控制反转

​	代码没有同步的好理解

好处：和浏览器交互



## 异步编程3-promise

<https://www.jianshu.com/p/735ee3d12a43> 



**promise异步** 

​	promise会立即返回一个对象,也就是说我们用promise的时候做了两件事

​	promise对象是一个占位符当异步完成时把值存到对象里面

​	promise对象可以存储当异步完成时的回调函数

​	当异步完成是会自动触发相应的回调函数



**promise做了两件事情**：1.发送异步 

​					   2.返回对象

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步编程5.png)

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步5.png)

promise的底层

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步编程6.png)

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步6.png)

## 异步编程4-generator与async

Generator函数返回一个iterator对象我们有能力去暂停函数



![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步编程7.png)

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步7.png)

**Generator的异步**  

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步编程8.png)

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步8.png)



[**async await** ](https://segmentfault.com/a/1190000013292562?utm_source=channel-newest) 



![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步编程9.png)



![](/Users/xiangqingyuan/Desktop/web/web实战-手册/异步9.png)

```javascript
function fakeAjax(data, ms){
  return new Promise((resolved)=>{
    setTimeout(()=>{
      resolved(data)
    }, ms)
  })
}

async function func(){ /通过async关键字定义
  var data = await fakeAjax('1', 1000);/使用await关键字，会自己执行
  console.log(data);
  var data1 = await fakeAjax('2', 2000);
  console.log(data1);
  var data2 = await fakeAjax('3', 1000);
  console.log(data2);
}
func();
console.log(111);
```







# jQuery

## jQuery简介

jQuery是一个高效 精简 并且功能丰富的JavaScript工具库

jQuery解决了兼容性问题，操作简单 功能丰富



**特点**

1. 语法简单，开发高效
2. 文件够轻，短小精悍
3. 插件丰富，扩展性强
4. 浏览器支持性高



## 引用及DOM选择

引用jQuery是要把他的引用标签放在自己的js标签上面



**$('')** 返回的是对象

​	css选择器

​	属性DOM

​	Function

​	空值

​	其他



**DOM获取** 

```javascript
$('#dom') //id
$('.dom') //class
$('div')  //标签
$('ul>li,div') //子元素，多个选择，css3选择器也可以传
```





## 整体框架封装

1. 如何全局使用jQuery
2. 无new操作
3. init原型
4. 链式操作

```javascript
(function(){
    window.jQuery = window.$ = jQuery;//要把jQuery的对象暴露在Window对象下
    function jQuery(id){
        return new init(id);      //无new操作
    }

    var init = jQuery.prototype.init = function(id){//把init的原型指向jQuery的原型
        var dom = document.getElementById(id.slice(1));
        this[0] = dom;
        this.length = 1;
        return this;
    }


    jQuery.prototype.text = function(){
        console.log('text');
        return this;       //链式操作 return当前的jQuery对象
    }
    jQuery.prototype.css = function(){
        console.log('css');
        return this;
    }
    init.prototype = jQuery.prototype;//将init的原型指向jQuery的原型

})();

$('#dom').css().text();
```





## 属性：文本属性

**text()** 得到匹配元素集合中每个元素的文本内容结合，包括他们的后代，或设置匹配元素集合中每个元素的文本内容为指定的文本内容。

```javascript
/1.可以获取到标签内的内容
$('p').text();
/2.可以添加文本
$('p').text('程序员的爱情故事');
/3.通过函数来传递文本内容。
$('p').text(function(index,ele){/索引值，标签内的值(两个参数)
    return 'fgsdhjytr'
});
```



**html()** 获取集合中第一个匹配元素的HTML内容 或 设置每一个匹配元素的html内容

​	和text()的三种方法一样

​	获取一堆dom内容时只获取一个



*text(()，html() 的区别：* 

​	text 取值赋值钧一组

​	html 取值取第一个 赋值赋一组

**val()** 获取匹配的元素集合中第一个元素的当前值或设置匹配的元素集合中每个元素的值。







## 属性：特性,属性

1.固有属性 (特性)：id class title href src alt type value

2.新增属性，自定义的属性

attr获取未定义的属性 均返回undefined ，prop获取未定义的特性，返回空

**attr()** 获取匹配的元素集合中的第一个元素的属性的值  或 设置每一个匹配元素的一个或多个属性。

```javascript
/prop( propertyName)获取匹配的元素集中第一个元素的属性（property）值
$('div').attr('id');

/prop( propertyName, value )属性名，值
$('div').attr('id','test');

/prop( properties )用来设置的 属性 - 值对 的对象。(可以给多个标签插入)
$('div').attr({
    id:'text',
    lecti:'xqy'
});

/
```



**.prop()** 获取匹配的元素集中第一个元素的属性（property）值或设置每一个匹配元素的一个或多个属性。(不能获取自定义属性)



**.removeAttr()** 为匹配的元素集合中的每个元素中移除一个属性（attribute）

**.removeProp()**  为集合中匹配的元素删除一个属性（property） (只能删除prop设定的)





## 属性：Class属性操作

**addClass() ，removeClass()** 添加，删除class

```javascript
$('div').addClass('test').removeClass('test');/可以添加删除class名

//可以是函数  返回的是字符串
$('div').addClass(function(index,className){/索引值，class名
    return 'test';
})
```

**hasClass()** 确定任何一个匹配元素是否有被分配给定的（样式）类。

**toggleClass()**  在匹配的元素集合中的每个元素上添加或删除一个或多个样式类,取决于这个样式类是否存在或值切换属性。即：如果存在（不存在）就删除（添加）一个类。

```javascript
$(this).toggleClass('active');
```





## CSS样式属性



**.css()** 获取匹配元素集中第一个元素的计算样式属性的值，或为每个匹配元素设置一个或多个CSS属性。

```javascript
/可以获取css属性
.css('backgroundColor');
.css(['width','height','backgroundColor']);//可以传数组

/设置css属性和值
.css('background-color','red')
.css({width:'200px',height:'200px'})//可以传入对象
```



**.width()** 获取匹配元素集中第一个元素的当前计算宽度或设置每个匹配元素的宽度

```javascript
/获取一个元素的宽度
$('div').width();//获取的是number值
/可以设置一个元素的宽
$('div').width(200);
```



**.innerWidth()** 获取匹配元素集中第一个元素的当前计算内部宽度（包括填充但不是边框）或设置每个匹配元素的内部宽度。(content+padding)



**.outerWidth()** 是 (content+padding+border)的宽度  

​	outerWidth(true )有true时是(content+padding+border+margin)的宽度

 

**.offset()** 获取或设置第一个元素的当前坐标，或者在匹配元素集中相对于文档设置每个元素的坐标。

**.position()** 获取设置最近的有定位的父元素距离该元素的位置。(不可以传递参数)

```javascript
/获取
console.log($('div').offset());
console.log($('div').position());

/设置
$('.one').offset({left:400,top:400})
```



**.scrollLeft()** 获取匹配元素集中第一个元素的滚动条的当前水平位置，或为每个匹配元素设置滚动条的水平位置。

**.scrollTop()**获取匹配元素集中第一个元素的滚动条的当前垂直位置，或为每个匹配元素设置滚动条的垂直位置。

```javascript
$(document).scrollTop(100);/可以设置滚动条的值
```



​	**判断是否滚到底部** 

```javascript
$(document).scrollTop() + $(window).height() >= $('body').height()
滚过的距离                     窗口的距离             整个body的距离
```







## DOM的筛选遍历



**:first | .first()** 第一个元素    

**:last | .last()** 最后一个   

**:odd** 索引值是奇数个

**:even** 索引值是偶数  

**:eq() | .eq()** 想要查找的第几个(索引值)

```javascript
$('li:first').css('background','red');
$('li').first().css('background','red');/可以写在外面
```



**.prev()**获取匹配元素集中每个元素的前一个兄弟

```javascript
$('li:eq(2)').prev('li').css('background','orange');
				/可以判断是否是li标签,如果不是返回空
```

**.prevAll()** 当前这个元素上面所有的兄弟元素

**.next()** 当前这个元素下面的一个兄弟元素

**.nextAll()** 当前这个元素下面所有的兄弟元素

**.siblings()** 匹配当前这个元素除外的兄弟元素



**.filter()** 选出符合条件的

​	Function（整数索引，Element）元素

```javascript
$('li').filter(function(index,ele){
    return index % 2 == 0;
}).css('background','orange')
```

**.not()** 符合条件的不要,选出不符合条件的

```javascript
$('li').not('.text').css('background','orange')
```

**.is()** 是否符合条件的 返回布尔值

**.slice（start ，end）** 截取（开始，结束）

**.map()**  把每个元素通过函数传递到当前匹配集合中，生成包含返回值的新的 jQuery 对象。

​	.map(callback(index,domElement){})

**has()** 将匹配元素集合缩减为拥有匹配指定选择器或 DOM 元素的后代的子集。

​	.has(selector)





## DOM的查询操作

**parent(筛选条件)** 获得当前匹配元素集合中每个元素的父元素，使用选择器进行筛选是可选的。

​	参数：字符串值，包含用于匹配元素的选择器表达式。

**parents(筛选条件)** 获得当前匹配元素集合中每个元素的祖先元素，使用选择器进行筛选是可选的。会查到html为止

**closest()** 方法获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上。

**offsetParent()** 获得被定位的最近祖先元素。无参数

**children()**  方法返回返回被选元素的所有直接子元素。

​	.children(selector)

**find()** 方法获得当前元素集合中每个元素的后代，通过选择器、jQuery 对象或元素来筛选。

**end()** 方法结束当前链条中的最近的筛选操作，并将匹配元素集还原为之前的状态。相当于回退(prevObject)

```javascript
$('ul').find('li:eq(2)').css('color','red').end().find('li:eq(4)').css('color','pink');
```

**add()** 方法将元素添加到匹配元素的集合中。

```javascript
$('li:first').add('li:last').css('background','pink');
```

**addback()** 返回当前的元素与先前的元素的集合

```javascript
$('li:eq(1)').css('background','yellow').nextAll().css('background','skyblue').addBack().click(function(){
            console.log($(this).text())
        })
```





## DOM操作：插入操作

**before()** 方法在被选元素前插入指定的内容。

```javascript
$('li').before($('h2'));/h2 插入到li的前面

$('li').before(function(index,value){
    console.log(index,value);/索引值，索引值对应的html结构内的内容
});

$('li').before('<span>this is span</span>');/添加HTML字符串

```



**insertBefore()** 方法在被选元素之前插入 HTML 标记或已有的元素。

```javascript
$('h2').insertBefore($('li'));/将要插入的元素写在前面;
	//insertBefore 与 before 执行完返回的是前面的DOM元素 方便链式调用
```

**after()** 在被选中的元素后面加上指定内容	

**insertafter()** 方法在被选元素之后插入 HTML 标记或已有的元素。( 与insertBefore类似 )​	

> before, insertBefore, after, insertafter 插入后是兄弟关系，，给被选中的元素插入指定的兄弟元素



**append()** 方法在被选元素（内部）的结尾插入指定内容。

```javascript
$('ul').append('<li>li2</li>');/将一个新的li插入到ul中
```

**appendTo()** 方法在被选元素（内部）的结尾插入指定内容。

```javascript
$('<li>li2</li>').appendTo($('ul')); /将要插入的元素写在前面
```

**prepend()** 方法在被选元素（内部）的开头插入指定内容。

**prependTo()**  方法在被选元素（内部）的开头插入指定内容。

> append, appendTo, prepend, prependTo 插入后是父子关系，给被选中的元素插入指定的子元素







## DOM操作：删除、包裹

**replaceAll()** 方法用指定的 HTML 内容或元素替换被选元素。

```javascript
$('.three').replaceAll($('.two'));/将2的内容与3替换
```

**replaceWith()** 方法用指定的 HTML 内容或元素替换被选元素。

```javascript
$('.two').replaceWith($('.three'));/将2的内容与3替换
```

**empty()** 方法 删除被选中的元素的所有子元素

```javascript
$('ul').empty();/清空ul的所有子元素
```

**remove()** 方法移除被选元素，包括所有文本和子节点。

```javascript
$('ul').remove();/删除ul的所有内容包括ul
```

**detach()** 方法移除被选元素，包括所有文本和子节点。

​	detach() 会保留所有绑定的事件、附加的数据，这一点与 remove() 不同。

**clone()** 方法生成被选元素的副本，包含子节点、文本和属性。

```javascript
$('ul').append($('.three').clone(true));/克隆，如果有true是深度克隆 事件也会克隆出来
```

**wrap()** 方法把每个被选元素放置在指定的 HTML 内容或元素中。

```javascript
$('ul').wrap('<div></div>');
```

**wrapAll()** 在指定的 HTML 内容或元素中放置所有被选的元素。

```javascript
$('li').wrapAll('<div></div>');/会把li都返回放在div里
```

**wrapInner()** 方法指 在被选中的元素内部包裹HTML内容

```javascript
$('li').wrapInner('<div></div>');/包li的内部包裹上div
```

**.unwrap()**  将匹配元素集合的父级元素删除，保留自身（和兄弟元素，如果存在）在原来的位置。

​	删除元素的父级元素。和 .wrap()的功能相反。匹配的元素（以及他们的兄弟元素，如果有的话）取代他们的父母在DOM结构。







## 事件：鼠标事件

**.click()** 单击事件

```javascript
$('li').click(function(){
    console.log($(this).text());
})
```

**.dblclick()** 双击事件

```javascript
 $('li').dblclick(function(){
     console.log($(this).text());
 })
```

```javascript
$(document).dblclick(function(e){/e
    $('body').append('<img src="./download.png" style=" top:'+e.pageY+'px; left: '+ e.pageX +'px;">')
});/双击在鼠标位置插入小心心； e.pageY 获取鼠标在Y轴的位置，e.pageX 获取鼠标在X轴的位置 注意函数形参e
```

> e.pageY 获取鼠标在Y轴的位置，e.pageX 获取鼠标在X轴的位置 注意函数形参e

​	**event.which** 判断按下的是鼠标的哪个按键 

​	返回1:左键，2:滚轮，3:右键

**取消鼠标右击菜单** 

```javascript
方法一
$(document).contextmenu(function(e){
    return false;
})
方法二
$(document).contextmenu(false) 

```

**.mouseenter()** 鼠标进入

**.mouseleave()** 鼠标离开

```javascript
$('.box').mouseenter(function(){
    console.log('enter');
}).mouseleave(function(){
    console.log('leave');
})
```

**.mouseover()** 鼠标进入 *(会冒泡)*

**.mouseout()** 鼠标离开 *(会冒泡)*



**.mousedown()** 鼠标按下

**.mousemove()** 鼠标移动

**.mouseup()** 鼠标抬起

​	**DOM拖拽** 

```javascript
$('.box').mousedown(function(e){
    var offset = $(this).offset(); /获取当前DOM元素的top,left值
    var dis = {};
    		/获取鼠标的X,Y值
    dis.x = e.pageX - offset.left; /DOM元素的位置
    dis.y = e.pageY - offset.top; /获取鼠标的X,Y值 - DOM元素的位置 = 鼠标在DOM元素中的位置
    var _this = this;
    $(document).mousemove(function(e){
        $(_this).css({
            left : e.pageX - dis.x,/left = 获取鼠标的X,Y值 - 鼠标在DOM元素中的位置;
            top : e.pageY - dis.y
        })
    })
    $(document).mouseup(function(){
        $(this).off('mousemove mouseup');/清除事件绑定
    })
    return false;
})
```





## 事件：焦点、滚轮、取消默认等事件

**.focus()** 获得焦点

**.blur()** 失去焦点

```javascript
$('input').focus(function(){
    $(this).val('');
    $(this).css('color','#777');
}).blur(function(){
    $(this).css('color','black');
})
```

**.change()** 表单元素它的value值发生变化时触发



**keydown()** 按下按键    *event.which 返回的是键值代码*

**keypress()**  按下按键    *event.which 返回的是字符的ASCII*

**keyup()** 抬起按键

```javascript
$('input').keydown(function(){
    $("input").css("background-color","#FFFFCC");
}).keyup(function(){
    $("input").css("background-color","white");
})
```

**.scroll()** 滚轮事件

```javascript
$(window).scroll(function(){
    if($(document).scrollTop()+$(window).height() >= $('body').height()){/判断滚轮是否到底部
        $('.wrapper').append('<div class="item">'+ $('.item').length + '</div>');
    }
});/滚轮到底部自动添加DOM
```

**Event.pageX | Event.pageY**  获取鼠标的top left值

**event.preventDefault()**阻止默认事件 

**event.stopPropagation()** 阻止冒泡 







## 事件：事件高级使用及事件委托

**.on()** 在选定的元素上绑定一个或多个事件处理函数。

```javascript
$('li').on('click', function () {
    console.log($(this).text())    
});
```

通过事件委托绑定事件：先获取父级元素

```javascript
$('ul').on('click', 'li', function(){
    console.log( $(this).text() );
})
```



**.off()** 移除绑定事件

```javascript
$('button').off('click')
```

**.one()** 为元素的事件添加处理函数。处理函数在每个元素上每种事件类型最多执行一次。

**.trigger()** 根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为。

```javascript
$('button').trigger('click');/触发一次click事件
```







## 动画：隐藏与显示动画

**.hide()** 隐藏匹配的元素。

**.show()** 显示匹配的元素。

```javascript
$('.box').hide();
```



**.slideDown()** 用滑动动画从上到下显示一个匹配元素

**slideUp()** 用滑动动画从下到上隐藏一个匹配元素。

**.slideToggle()** 如果是显示的就隐藏，如果是隐藏的就显示

> 可以传参数，动画过度的毫秒数 默认400

```javascript
$(this).find('p').slideToggle(400,function(){/在动画执行完，执行函数
    console.log('end');
});
```



**.fadeIn()** 通过淡入的方式显示匹配元素。

**.fadeOut()** 通过淡出的方式隐藏匹配元素。





## 动画：自定义动画

**.animate({属性对象}，过度毫秒数，动画运动的速率("linear" 和 "swing"),function动画执行完执行函数)** 

​	根据一组 CSS 属性，执行自定义动画。

```javascript
$('.box').animate({
    top:200,
    left:300
},1000)
```



**动画运动速率**库 ：https://www.helloweba.net/javascript/212.html



**.stop()** 停止匹配元素当前正在运行的动画。

stop(布尔值,指示是否取消以列队动画 默认false， 布尔值指示是否当前动画立即完成 默认false)

```javascript
$('.btn2').click(function(){
    $('.box').stop();
})
```







## 常用工具方法

**$.type()** 判断数据类型

```javascript
var arr = 1212;
console.log($.type(arr));
```

**$.trim()**  去掉字符串起始和结尾的空格

```javascript
var str = ' aasa ';
console.log($.trim(arr));
```

**$.makeArray()**  转换一个类似数组的对象成为真正的JavaScript数组。

```javascript
console.log($.makeArray($('li')));
```

**$.inArray()** 在数组中查找指定值并返回它的索引（如果没有找到，则返回-1

​	$.inArray(要查找的值,  一个数组,   [数组索引值 表示从哪里在开始查找 默认值是0 这将查找整个数组])

```javascript
var arr = ['a', 'b', 1, 2 ];
console.log($.inArray(1,arr));
```

**$.each()**  遍历数据

```javascript
var data = [
    {
        name: 'zns',
        age: 18
    },
    {
        name: 'xqy',
        age: 19
    },
    {
        name: 'zsn',
        age: 18
    }
];
var str = '';
$.each(data,function(index,ele){
    str += '<p>' + ele.name +'，'+ ele.age + '</p>'
})
$('.wrapper').append(str);
```

**$.merge()** 合并两个数组内容到第一个数组。 把后面的数组合并到前面 将前面的数组返回

```javascript
var arr1 = [1,2,3,4];
var arr2 = ['a','b','c','d'];
console.log($.merge(arr1,arr2)）;
```

**$.noConflict()**  放弃jQuery控制`$` 变量 $失效，将权限交出去，要使用jQuery, 如果传值为true是jQuery也失效

```javascript
var j = $.noConflict(true);/可以用变量接收 将$|jQuery 替换
console.log(j('.wrapper'))
```

**console.log($.prototype.jquery);** 可以通过它来获取版本

**$.data()** 存储任意数据到指定的元素并且/或者返回设置的值。

```javascript
var wrapper = $('.wrapper');
$.data(wrapper,{
    age: 20,
});
console.log($.data(wrapper,'age'))
```







## Zepto

**Zepto**是一个轻量级的**针对现代高级浏览器的JavaScript库，** 它与jquery**有着类似的api**。

https://www.css88.com/doc/zeptojs_api/







## 高级方法extend

**$.extend()** 将两个或更多对象的内容合并到第一个对象。当以一个参数是true时是深拷贝,

​	 一个参数时 合并到$上 可以扩展一些工具方法

```javascript
var people1 = {
    frank:{
        age: 18,
        sex: 'female'
    },
    alise:{
        age: 16,
        sex: 'male'
    }
}
var people2 = {
    xiaoming:{
        age: 18,
        sex: 'female'
    },
    honghong:{
        age: 16,
        sex: 'male'
    }
}
$.extend(people1,people2);
```



**$.fn.extend()** 一个对象的内容合并到jQuery的原型，以提供新的jQuery实例方法。

```javascript
var people1 = {
    frank:{
        age: 18,
        sex: 'female'
    },
    alise:{
        age: 16,
        sex: 'male'
    }
}
$.fn.extend(people1);
console.log($(people1));
```









## 高级方法Callbacks、Deferrend

**$.Callbacks()** 一个多用途的回调列表对象，提供了强大的的方式来管理回调函数列表。

- `once`: 确保这个回调列表只执行（ .fire() ）一次(像一个递延 Deferred).
- `memory`: 保持以前的值，将添加到这个列表的后面的最新的值立即执行调用任何回调 (像一个递延 Deferred).
- `unique`: 确保一次只能添加一个回调(所以在列表中没有重复的回调).
- `stopOnFalse`: 当一个回调返回false 时中断调用

```javascript
var cb = $.Callbacks();/生成回调函数列表
function wakeup(){
    console.log('早');
}
(function(){
    function eating(){
        console.log('吃早饭');
    };
    cb.add(eating);/将函数添加到cb中
})();

cb.add(wakeup);/将函数添加到cb中

$('#box').click(function(){
    cb.fire();/执行回调函数
})
```



**$.Deferred()** 延迟对象

```javascript
var dtd = $.Deferred();
dtd.resolve();//成功状态
dtd.reject();//失败状态
dtd.notify();//进行中

dtd.done(su).fail(er).progress(ing);//如果成功执行done; 如果失败执行fail; 如果进行中执行progress
function su(){
    console.log('成功了');
}
function er(){
    console.log('失败了');
}
function ing(){
    console.log('进行中');
}
```





## jQuery构造函数源码

单独引用 Sizzle.js 可以快速实现DOM查找

https://sizzlejs.com/









# 编程修养

## 程序的设计思想



**编程思想**

编程—通过代码让电脑完成我们想要他做的事

思想—人写代码的方式

当你拿到一个需求，你会如何用代码来实现



1. 面向机器

2. 面向过程

   ​	程序 = 算法 + 数据结构

3. 结构化程序设计

4. 面向对象



## 面向对象概述



现实虚拟化

把一些需求，归纳成独立的对象 

每个对象都有自己的工作和能力



**面向对象划时代语言**

simula   面向对象开山鼻祖

C++        第一个大规模使用面向对象语言

Java        目前使用最广的面向对象语言



面向过程 ：程序 = 算法 + 数据结构

面向对象 ：程序 = 对象 + 交互



**软件质量：** 性能 健壮性 安全性 易用性 可维护性 可伸缩性 可移植性 可扩展性 成本 



1. 编程思想 ：面向机器 => 面向过程 => 面向对象
2. 面向过程 ：程序 = 算法 + 数据结构 C (机器思维)
3. 面向对象 ：程序 = 对象 + 交互 Simula C++ Java (人类思维 可扩展性)





## 面向对象的核心理论

类是一组对象的抽象 

对象是类的具体实例



**面向对象的类：** 属性和方法

​	属性：类所应具备的特性、值

​	方法：类所应具备的功能

  属性最小化，方法单一化



类是设计概念，对象是实力物体



**接口** 

接口是指定数据交换的方式、协议



**抽象类和特殊的类 ** 仅用于继承，不用于实例化

抽象类：水果；   类：苹果；   对象：一个具体的苹果



**抽象** 把对象中比较相似的点提取出来



**封装 **: 把一些东西、方法和属性打包放在一起

​	通过类 实现了具体功能的封装

​	保护隐私，隔离复杂度



**继承** :父类的功能提供给子类使用



**多态** ：对象的多种形态





## 面向对象分析和设计全流程

**面向对象：** 

1. 类：是一组相似物体的归纳称呼
2. 类设计：属性不可分、一个方法一个功能
3. 对象：类的具体实例化
4. 接口：数据交互功能定义，想想USB接口
5. 封装：类设计的过程，叫封装、
6. 继承：建立类之间的父子关系
7. 多态：对象可以把自己转换成不同的类型



**软件开发：** 

1. 需求分析
2. 模型抽象
3. 系统设计
4. 编码开发

UML：建模工具

**需求：** 发掘用户真实的想法，需求是一个反复确认的过程

​	和用户聊并记录

​	挖掘并整理文档

​	再找用户确认



**模型抽象**

把客户的最终需求，用面向对象的思想，抽象成产品业务概念，并建立业务之间关系



**系统设计** 

​	在领域建模基础上，改造模型 筛选符合软件开发要求的类，并设计类之间的关系

**UML** 

静态图	类图	类关系图

动态图	状态图、活动图、序列图、协作图

结构图	组件、子系统、接口、外部库



**编码** 按系统设计，具体用面型对象的语言，实现出来





## 后端

**前端：** 和用户直接接触，提供给用户操作的

**后端：** 维护数据，业务和权限判断，调度其他服务



**单机模式**：一台电脑  用户直接操作数据

**C/S模式**：客户端 + 服务器  

​						     后端操作数据

**B/S模式**：浏览器 + 服务器





## 数据库MySQL和MongoDB

**数据库**：存放数据的仓库



**数据库分类：** 关系型数据库          MySQL

​			非关系型数据库	 MongoDB





# 网络基础

## 网络基础知识

**www万维网：** 是一个由许多相互连接的超文本组成的系统，通过互联网访问

**URL：** 统一资源定位符，通过url可以得到资源的位置



`在终端 输入 ping 和域名 可以查看IP地址`

**一个网页展示出来的过程** 

1. 输入url http://vip.chanke.xyz/V01007/chanke/chankeweb/index.html
2. 先到DNS服务器解析地址 然后返回IP地址  , 本地会有一个host文件会存储IP地址
3. TCP/IP链接 (三次握手)  
   1. 客户端向服务器发送SYN包
   2. 服务器使用SYN+ACK应答表示接收到了这个消息，
   3. 最后客户机再以[ACK](https://baike.baidu.com/item/ACK)消息响应
4. 客户端向web服务器发送请求
5. 服务器接受处理请求
6. 向浏览器返回响应
7. TCP/IP断开 (四次挥手) 
   1. 客户端向服务器发送FIN
   2. 服务器接收FIN后并向客户端ACK
   3. 服务器向客户端FIN
   4. 客户机向服务器发送ACK确认
8. 解析HTML渲染页面 



**CSDN详解三次握手 四次挥手**：https://blog.csdn.net/younglao/article/details/79453777





## 集成环境安装及使用

**服务器的作用** 

​	PHP 后端程序语言

​	Apache 运行网站的服务

​	MySQL 数据库



**wamp/mamp** ：Windows / Mac  Apache  MySQL  PHP







## Ajax兼容性写法

**什么是Ajax**

​	ajax（Asynchronous JavaScript and XML 异步的javascript和xml)

​	可实现异步、局部的获取数据



XML and json

(1) json

```javascript
var data = {"name": "aimee","age": 18}
JSON.parse(data)  //字符串转json
JSON.stringify(data)  //json转字符串
```

(2)XML  

```xml
 <name>aimee<name>
 <age>18<age>
```



**封装Ajax**

模拟定外卖过程：

（1）手机/电脑

（2）打开app 饿了么/美团外卖

（3）商家 商品 地址

（4）下单 （不要麻辣不要烫） 

（5）监控物流信息

（6）下楼 验货 吃 



（1） web浏览器

（2） ajax对象       

（3） 初始化 HTTP 请求参数(请求方式, 地址, 同步异步)

（4） 发送请求

（5） 监控数据        

（6） 检查数据 使用



​    **readyState五种状态**

​        0 － （未初始化）还没有调用send()方法 

​        1 － （载入）已调用send()方法，正在发送请求 

​        2 － （载入完成）send()方法执行完成，已经接收到全部响应内容 

​        3 － （交互）正在解析响应内容 

​        4 － （完成）响应内容解析完成，可以在客户端调用了



**HTTP状态码 **status

​    100:信息类,表示web浏览器请求,正在进一步的处理中

​    200:成功,表示用户请求被正确接收正在进一步的处理中 200 OK

​    300:表示请求没有成功,客户端必须采取进一步的动作

​    400:客户端错误,表示客户端提交的请求有错误 	

​	   例如:404 NOT Found 意味着请求中所引用的文档不存在

​    500:服务器错误 表示服务器不能完成对请求的处理,如500

```javascript
// （1） web浏览器
function ajax(method,url,callback,data,flag){ //请求方法，请求地址，回调函数，数据，是否异步
    var xml = null;
    if(window.XMLHttpRequest){
        xml = new XMLHttpRequest(); // IE7以下没有该方法
    }else{
        xml = new ActiveXObject('Microsoft.XMLHttp'); // IE7以下方法
    }// （2） 创建ajax对象 
    method = method.toUpperCase();//将小写转换成大写
    if(method == 'GET'){//get请求
        var date = new Date();
        timer = date.getTime();
        //将时间戳拼接到URL中，因为GET请求会去缓存中取数据，加上时间戳，保证了每次的URL不一样
        xml.open(method, url + '?' + data + '&timer'+timer, flag);
        // （3） 初始化 HTTP 请求参数(请求方式, 地址, 同步异步)  
        xml.send();// （4） 发送请求
    }else if(method == 'POST'){//post请求
        xml.open(method, url, flag);
        xml.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        //设置请求头部
        xml.send(data);// （4） 发送请求, data是向服务器传的值
    }     
    xml.onreadystatechange = function(){
        if(xml.readyState == 4){// （5） 监控数据 
            if(xml.status == 200){// （6） 检查数据 使用
                callback(xml.responseText); //数据存储在 .responseText 中
            }
        }
    }
}
```





## HTTP协议

**一、HTTP协议是什么**

​	超文本传输协议（HTTP，HyperText Transfer Protocol)是用于从web服务器传输超文本到web浏览器的传送协议。所有的WWW文件都必须遵守这个标准



**二、报文** 

报文分为三部分： ![image-20190110112004752](/Users/xiangqingyuan/Library/Application Support/typora-user-images/image-20190110112004752.png)

**报文首部：** 需要处理的内容和某些属性。在客户端和服务器处理时起至关重要作用的信息几乎都在这边

**报文主体：** 应该被发送的数据（不需要发送数据时可没有报文主体）所需要的用户和资源的信息都在这里



**请求报文**

报文首部：请求行    请求首部​    报文主体



**响应报文**

报文首部 :   响应行    响应首部    报文主体



**请求报文**

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/qingqiubaowen.png)

请求行：请求方法 URL 版本及协议

首部字段：包含表示请求和响应的各种条件和属性的各种首部



**响应报文**

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/xiangyingbaowen.png)

响应行：状态码  原因短语  协议及版本

首部字段：包含表示请求和响应的各种条件和属性的各种首部



**三、请求方法**



**GET**: 获取资源

**POST**: 传输主体内容



**GET** 和 **POST**请求比较相似，说一下他们的区别？

​    其实GET请求和POST请求本质上没有什么区别，因为他们底层都是TCP链接。

​    （1）那为什么GET请求参数要放到URL中，而POST要放到body里呢。只不过是在请求的时候，为了交互数据的时候能更清晰一些，HTTP协议规定GET要放到url中

​    （2）GET请求在URL中传送的参数是有长度限制的，而POST没有

​        一次传输数据量太大对浏览器和服务器都是很大负担。而且如果服务器不做处理的话，恶意攻击传入大量数据容易导致服务器崩溃。

​    （3）至于说POST请求比GET请求安全，那仅仅是因为get放到了url中而已。



**PUT**: 传输文件

**DELETE**: 删除文件

**OPTIONS**: 查询支持的方法

**HEAD**: 获得报文首部



**四、URL**

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/URL.png)



协议：http:/https: 不区分大小写

登录信息：用户名和密码从服务器获取资源师必要的登录信息。此项可选

域名：

​        chanke.com一级域名

​        www.chanke.com二级域名（也称子域名）

​        aa.bb.chanke.com 三级域名



后面的com属于顶级域名，还有和很多顶级域名

​      com（商业机构） net（互联网服务的机构）  org(非盈利组织) cn（中国） com.cn(中国商业机构)

​      端口：服务器连接的网络端口号（可省略。:80 :443）



**五、协议及版本**

​	HTML/1.0 非持久连接。但是通过非标准手段也可以实现持久连接

​	HTML/1.1 默认持久连接



**六、状态码**  status

描述返回请求的结果。根据状态码可知道服务器端是否正常处理了请求。

|       | 类别                             | 原因短语                   |
| ----- | -------------------------------- | -------------------------- |
| 1 X X | Informational（信息性状态码）    | 接收的请求正在处理         |
| 2 X X | Success（成功状态码）            | 请求正常处理完毕           |
| 3 X X | Redirection（重定向状态码）      | 需要进行附加操作以完成请求 |
| 4 X X | Client Error（客户端错误状态码） | 服务器无法处理请求         |
| 5 X X | Server Error（服务器错误状态码） | 服务器处理请求出错         |



**常见状态码**

**2XX** 成功 响应结果表明请求被正常处理了。

​    **200** OK 表示从客户端发来的请求在服务器端被正常处理了



**3XX** 重定向  响应结果表明浏览器需要执行某些特殊的处理以正确处理请求。

​    **301** Moved Permanentl永久性重定向。该状态码表示请求的资源已被分配了新的 URI，以后应使用资源现在所指的 URI。

​    **302** Found 临时性重定向。该状态码表示请求的资源已被分配了新的 URI，希望用户（本次）能使用新的 URI 访问



**4XX** 客户端错误 响应结果表明客户端是发生错误的原因所在

​    **403** Forbidden该状态码表明对请求资源的访问被服务器拒绝了。

​    **404** Not Fou 该状态码表明服务器上无法找到请求的资源。



**5XX** 服务器错误 的响应结果表明服务器本身发生错误。

​    **500** Internal Server Error 该状态码表明服务器端在执行请求时发生了错误。

​    **503** Service Unavailable 该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求



**七、报文首部** 

​	**四种首部字段**：

​	**通用首部字段**：请求报文和响应报文两方都会使用的 

| 首部字段名        | 说明                       |
| :---------------- | -------------------------- |
| Cache-Control     | 控制缓存的行为             |
| Connection        | 逐跳首部、链接的管理       |
| Date              | 创建报文的日期时间         |
| Pragma            | 报文指令                   |
| Trailer           | 报文末端的首部一览         |
| Transfer-Encoding | 指定报文主体的传输编码方式 |
| Upgrade           | 升级为其他协议             |
| Via               | 代理服务器的相关信息       |
| Warning           | 错误通知                   |



​	**请求首部字段**：从客户端向服务器端发送请求报文时使用的首部。补充了请求的附加内容、客户端信息、       响应内容相关优先级等信息。

| 首部字段名          | 说明                                          |
| ------------------- | --------------------------------------------- |
| Accept              | 用户代理可处理的媒体类型                      |
| Accept-Charset      | 优先的字符集                                  |
| Accept-Encoding     | 优先的内容                                    |
| Accept-Language     | 优先的语言（自然语言）                        |
| Authorization       | Web认证信息                                   |
| Expect              | 期待服务器的特定行为                          |
| From                | 用户的电子邮箱地址                            |
| Host                | 请求资源所在的服务器                          |
| If-Match            | 比较实体标记（ETag）                          |
| If-Modified-Since   | 比较资源的更新时间                            |
| If-None-Match       | 比较实体标记（与If-Match相反）                |
| If-Range            | 资源未更新时发送实体Byte的范围请求            |
| If-Unmodified-Since | 比较资源的更新时间（与If-Modified-Since相反） |
| Max-Forwards        | 最大传输逐跳数                                |
| Proxy-Authorization | 代理服务器要求客户端的认证信息                |
| Range               | 实体的字节范围请求                            |
| Referer             | 对请求中的URI的原始获取方                     |
| TE                  | 传输编码的优先级                              |
| User-Agent          | HTTP客户端程序的信息                          |

​	**响应首部字段**：从服务器端向客户端返回响应报文时使用的首部。补充了响应的附加内容，也会要求客户端附加额外的内容信息

| 首部字段名         | 说明                         |
| ------------------ | ---------------------------- |
| Accept-Ranges      | 是否接受字节范围请求         |
| Age                | 推算资源创建经过时间         |
| ETag               | 资源的匹配信息               |
| Location           | 令客户端重定向至指定URI      |
| Proxy-Authenticate | 代理服务器对客户端的认证信息 |
| Retry-After        | 对再次发送请求的时机要求     |
| Server             | HTTP服务器的安装信息         |
| Vary               | 代理服务器缓存的管理信息     |
| WWW-Authenticate   | 服务器对客户端的认证信息     |

​	**实体首部字段**：针对请求报文和响应报文的实体部分使用的首部。补充了资源内容更新时间等与实体有关的信息。

| 首部字段名       | 说明                         |
| ---------------- | ---------------------------- |
| Allow            | 资源可支持的HTTP方法         |
| Content-Encoding | 实体主体使用的编码方式       |
| Content-Language | 实体主体的自然语言           |
| Content-Length   | 实体主体的大小（单位：字节） |
| Content-Location | 替代对应资源的URl            |
| Content-MD5      | 实体主体的报文摘要           |
| Content-Range    | 实体主体的位置范围           |
| Content-Type     | 实体主体的媒体类型           |
| Expires          | 实体主体过期的日期时间       |
| Last-Modified    | 资源最后的修改日期时间       |



**浏览器缓存机制**

像if-xxx这类为条件请求，服务器会先判断条件是否满足再做处理

if-Math 会匹配Etag ,匹配成功才会处理

If-Modified-Since 比较资源的更新时间 Last-Modified 资源的最后修改日期时间

如果资源没有修改过，返回304状态。如果资源修改过，返回200和新资源。





## jsonp跨域

**一、同源策略**

同源策略是浏览器的一种安全策略

协议、域名、端口 均相同的源才属于同源



同源策略阻止从一个源加载的文档或脚本获取或设置另一个源加载的文档的属性%

当浏览器的tab页执行一个脚本的时候会检查这个脚本是属于哪个页面的，

如果非同源，那么在请求数据时，浏览器会在控制台中报一个异常，提示拒绝访问。

**src不受同源策略限制** 

https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=cbs

**jsonp接口：cb=回调函数名称  wd=关键字** 

```javascript
 var oBtn = document.getElementsByClassName('btn')[0];
oBtn.onclick = function(){
    var oScript = document.createElement('script');
    oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=cbs";
    document.body.appendChild(oScript);
}

function cbs(data){
    console.log(data);
}
```

**如何交互？**

在cb=里把回调函数名称传进去，后台会拼接好，返回一个回调函数名()执行的形式，拿到以后回调函数就会被执行





## History历史记录管理

**History 对象属性**

length  返回浏览器历史列表中的 URL 数量。



**History 对象方法**

| 方法      | 描述                                                 |
| --------- | ---------------------------------------------------- |
| back()    | 加载 history 列表中的前一个 URL。                    |
| forward() | 加载 history 列表中的下一个 URL。                    |
| go()      | 加载 history 列表中的某个具体页面。正数前进 负数后退 |

```js
history.pushState(stateObj, "page 2", "bar.html");      /添加一条历史记录 不刷新
history.replaceState(stateObj, "page 3", "bar2.html");  /替换当前历史记录 不刷新

//以上两个方法：第一个参数是个对象存在要改变的页面中，第二个暂时传空字符串，第三个参数历史记录名
window.onpopstate;      /历史记录发生变化时触发  (上两个方法不会触发该事件)
```

```javascript
window.onpopstate = function(e){
    console.log(e.state); /e.state 可以获取到对象传进来的参数
}
```



**解决问题：** 无刷新 历史记录切换





## Cookie使用机制

**一、个性化服务** 

​	HTTP是无状态的请求/响应连接，导致连接断开后，再次连接服务器无法识别用户



**我们就需要用一些技术来帮助服务器去识别用户**

1、跟踪客户端IP地址。动态IP

2、借助http首部放置用户身份信息。referer、e-mail

3、胖URL 在URL中嵌入识别信息 。丑陋，无法共享URL，非持久等

4、cookie 在客户端存储用户标识信息。识别用户，持久化最好的方式。



**cookie原理：**

**1、**首次访问Web站点时，web服务器对用户一无所知。web服务器希望这个用户再次回来还能认识它。所以想给这个用户一个标识。标签。set-cookie: user_id=aimee123的响应首部

**2、**服务器返回响应的时候会带有响应首部set-cookie字段。浏览器会自动的把响应的cookie存储在浏览器数据库中（就是文本文件，存储不了一些cookie字段）

**3、**当用户再次访问同一站点时，浏览器会把存储的cookie一起带上发送出去，这样服务器在拿到请求的同时也拿到这这个cookie字段，知道你曾将来过，找与这个令牌相对应的数据返回



**cookie分类：**

1、会话cookie 用户退出浏览器时 会话cookie就被删除了

2、持久cookie 存储在硬盘上，浏览器退出计算机重启时仍然存在。可以维护用户周期性访问的站点。



**cookie属性：**

1、cookie域

2、cookie路径

3、cookie存储时间



**cookie存储大小：**

IE 6.0  		IE 7.0 8.0     		Opera  			FF  				safari  		   chrome

Cookie个数    每个域名下20个    每个域名下50个     每个域名30个  	每个域名50个   没有限制    每个域名53个

Cookie大小  	4095字节  		4095字节  		4096字节  		4097字节  	   4097字节   4097字节



**客户端操作cookie：**

cookie的增、删、改、查

通过 document.cookie 来获取cookie值

设置cookie ： `document.cookie = 'id=123;max-age=1000'`; max-age设置时间

​			`Expires=具体的时间点` 设置具体的时间点

删除cookie：把日期放到之前的时间





## webStorage本地存储

**一、storage本地存储**

本地存储可以使用cookie，但是cookie本地存储不便：大小限制 （4k） 、随http传输

storage本地存储容量大（5M）进供本地存储使用



**二、分类**

sessionStorage 临时存储 浏览器关闭存储结束

localStorage 永久存储 除非用户手动删除



**三、操作**    storege存取的是字符串类型



**1、基本添加和读取**

添加：

```javascript
localStorage.user = 'aimee';

var obj = {
    name:'xiangqignyaun',
    age: 19,
    height: 180
}
localStorage.objj =  JSON.stringify(obj);
```



读取：

​	localStorage.user;

​	JSON.parse(localStorage.objj );

**2、API操作添加和读取**

`localStorage.setItem('id',12345)` 设置

`localStorage.getItem('id')`   获取

`localStorage.removeItem('id') ` 删除

`localStorege.clear()` 清空



**四、作用域**

localStorage->文档源限制

sessionStorage->文档源限制+窗口







## CORS跨域资源共享

**一、cross-origin resource sharing (CORS) 跨域资源共享，是一种使用额外HTTP首部实现跨域获取资源权限的机制**。 

XMLHttprequest获取非同源资源会被浏览器拦截。

eg：localhost下的资源发送XMLHttprequest请求同源、非同源资源



**二、CORS分类**

1、简单请求

2、预检请求



**简单请求：**

1、使用下列方法之一：

​    GET POST HEAD  

2、content-Type值为下列之一：

​    text/plain 

​    multipart/form-data 

​    application/x-www-form-urlencoded 

等……

除了正常发起请求外，若想实现cors跨域，还需要服务器配置正确的响应首部。否则无法获取

access-contral-allow-origin: *(http://localhost) 访问控制允许源



**预检请求:**

“需预检的请求”要求必须首先使用 OPTIONS   方法发起一个预检请求到服务器，以获知服务器是否允许该实际请求。

"预检请求“的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。

当请求满足下述任一条件时，即应首先发送预检请求：

1、使用非GET POST HEAD方法

2、content-Type值不为下列之一：

​        text/plain 

​        multipart/form-data 

​        application/x-www-form-urlencoded 

3、人为设置了 CORS 安全的首部字段集合之外的首部字段，如人为的写一个。

 CORS 安全的首部字段集合：https://fetch.spec.whatwg.org/#cors-safelisted-request-header

发起POST请求，人为设置了X-user：aimee字段，则需要预检请求。

要求服务器设置正确字段。

Access-Control-Allow-Origin: *

Access-Control-Allow-Methods: POST, GET, OPTIONS//了实际请求所允许使用的 HTTP 方法

Access-Control-Allow-Headers: X-PINGOTHER, Content-Type//请求中允许携带的首部字段

Access-Control-Max-Age: 86400//请求的结果能够被缓存







## postMessage 通信

**一、背景**

为了安全考虑，浏览器会有同源策略限制，限制禁止跨域访问数据，但是具有src属性的标签不受限制，可以跨域访问资源，

```html
<img src="">
<script src=""></script>
<iframe src=""></iframe>
```

但是 浏览器限制了JavaScript的权限，不能进行各种读写



**二、postMessage**

该window.postMessage()方法安全地启用Window对象之间的跨源通信。提供一种受控制的机制来安全地规避这种限制。

使用targetWindow.postMessage() 在其上发送一个MessageEvent。然后，接收窗口可根据需要自由处理此事件。传递给window.postMessage()的参数（即“message”）通过事件对象暴露给接收窗口。



**三、使用**

Window.postMessage(传递的数据, targetOrigin)；发送数据

message事件；响应postMessage发送的的数据

```html
demo内容：<h1>index page</h1>
<button class="btn">btn</button>
<input type="text" class="inp">
<iframe src="http://vip.chanke.xyz/v01007/chanke/demo.html" style="border:1px solid #ccc" frameborder="0" name="demo"></iframe>
<script>
var oBtn = document.getElementsByClassName('btn')[0];
var oinp = document.getElementsByClassName('inp')[0];
var h1 = document.getElementsByTagName('h1')[0];

oBtn.onclick = function(){
    var val = oinp.value;   						       	    window.frames['demo'].postMessage(val,'http://vip.chanke.xyz/v01007/chanke/demo.html');
/向子页面demo传递数据
}
window.addEventListener('message',function(messageEvent){
    h1.innerText = messageEvent.data;
})
</script>
```

```html
index内容：<h1>demo page</h1>
<button class="btn">btn</button>
<input type="text" class="inp">
<script>
    var oBtn = document.getElementsByClassName('btn')[0];
    var oinp = document.getElementsByClassName('inp')[0];
    var h1 = document.getElementsByTagName('h1')[0];
    window.addEventListener('message',function(messageEvent){
        h1.innerText = messageEvent.data;
    });/demo接收index传来的数据
    oBtn.onclick = function(){
        var val = oinp.value;
        parent.postMessage(val,'http://localhost/postMessage/index.html');
    }
</script>
```







## websocket双向通信

**一、背景**

协议：HTTP/HTTPS协议 

版本：HTTP/1.0    HTTP/1.1 

HTTP协议中，服务端不能主动联系客户端，只能有客户端发起。

轮询



**二、WebSocket是什么？**

WebSocket 对象提供了一组 API，用于创建和管理 WebSocket 连接, 

以及通过连接发送和接收数据.

Websocket 其实是一个新协议，跟HTTP协议基本没有关系，只是为了兼容现有浏览器的握手规范而已.借用了HTTP的协议来完成握手



**三、建立连接**

当Web应用程序调用new WebSocket(url)接口时，Browser就开始了与地址为url的WebServer建立握手连接的过程。

1. Browser与WebSocket服务器通过TCP握手建立连接，如果这个建立连接失败，那么后面的过程就不会执行，Web应用程序将收到错误消息通知。

2. 在TCP建立连接成功后，Browser通过http协议传送WebSocket支持的版本号，协议的字版本号，原始地址，主机地址等等一些列字段给服务器端。

3. WebSocket服务器收到Browser发送来的请求后，如果数据包数据和格式正确，客户端和服务器端的协议版本号匹配等等，就接受本次握手连接，并给出相应的数据回复，同样回复的数据包也是采用http协议传输。

4. Browser收到服务器回复的数据包后，如果数据包内容、格式都没有问题的话，就表示本次连接成功，触发onopen消息，此时Web开发者就可以在此时通过send接口向服务器发送数据。否则，握手连接失败，Web应用程序会收到onerror消息，并且能知道连接失败的原因。

 

**四、使用**

1、创建webSocket

```javascript
var Socket = new WebSocket('ws://echo.websocket.org');/建立链接
```



2、Web Socket 方法

​       Socket.send()，方法使用连接传输数据。

​       Socket.close()，用于终止任何现有连接

3、事件

​       WebSocket.onclose，用于指定连接关闭后的回调函数

​       WebSocket.onerror，用于指定连接失败后的回调函数

​       WebSocket.onmessage，用于指定当从服务器接受到信息时的回调函数

​       WebSocket.onopen，用于指定连接成功后的回调函数



**五、WebSocket的优点**

​     1、客户端与服务器都可以主动传送数据给对方;

​     2、不用频率创建TCP请求及销毁请求，减少网络带宽资源的占用，同时也节省服务器资源;

```javascript
var Socket = new WebSocket('ws://echo.websocket.org');
Socket.onopen = function(){//链接成功时触发事件
    Socket.send('我喜欢你');//发送数据
}
Socket.onmessage = function(messageEvent){//从服务器接收到数据触发事件
    console.log(messageEvent);
    Socket.close();//断开连接
}
Socket.onclose = function (){//当断开链接时触发事件
    console.log('已断开');
}
```







# webpack前端工程化

## 模块化梳理

webpack是前端的打包工具

以前结局模块化的方式：

将每个模块通过立即执行函数包起来  	 问题：引入依赖的问题

通过gulp grunt等工具   				问题：我们修改一个文件，可能就打破依赖；有死代码

Node 								问题：没有浏览器支持

打包工具 browerify  					问题：commonJS是静态的 打包出来的文件很大

AMD(Require.js) CMD(Sea.js)			问题：太动态





## 下载

**webpack优点**：任意模块化语法都支持   异步加载

1. 看官网

2. 安装环境 node

3. npm 包管理工具 项目 可以下载想要的包         (下载命令：cnpm install)

4. 生一个项目说明书   ： npm init

5. 下载webpack  下载webpack-cli

6. Webpack 安装到了当前文件下的node_modules中

7. 了解mode模式 生产模式和开发模式

8. --watch监听

9. tree  shaking  移除未引用的代码


```javascript
npm init                              /生成项目说明书
cnpm install webpack --save-dev       /下载webpack
cnpm install webpack-cli --save-dev	  /下载webpack-cli(通过命令行使用webpack)

需要在当前文件夹下的src文件夹中找index.js文件作为入口文件，将打包的文件放在新建的dist文件夹下的main.js
可以通过npm run 运行scripts中的脚本

npm run webpack                        /运行webpack
"dev": "npm run webpack -- --mode development", //运行开发模式    不压缩
"prod": "npm run webpack -- --mode production --watch"//运行生产模式 (--watch 监听)  压缩
```





## 配置文件

在当前根目录下 创建一个 `webpack.config.js`文件 用来写配置文件

```javascript
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = ({mode}) => {
    return {
        mode,
        entry: "./src/index1.js", //入口文件名
        output: {
            path: __dirname + "/dist", //输出 文件夹 名
            filename : "main.js"  //输出 文件 名
        },
        plugins: [
            new htmlWebpackPlugin({//将处理好的js文件插入到HTML页面当中
                template: "./index.html"//模板页 会将此页面的内容复制到插入js文件的HTML页面中
            }),
            new webpack.ProgressPlugin()
        ]
    }
}
```



**webpack四个核心概念**

Entry：告诉webpack入口文件在哪

Outout：告诉webpack把编译好的文件放在哪

Loaders：告诉webpack在添加到依赖图之前如何转换一个文件，本质上是一个函数

Plugins：在编译的过程中添加你想要的任何操作

`cnpm install webpack-dev-server` 下载模拟服务器





## loaders

`cnpm install sass-loader node-sass --save-dev` 下载将sass文件转换为css文件的loader

`cnpm install css-loader --save-dev` 下载将css转换为js的loader

`cnpm install style-loader --save-dev` 将js形式的css形成style标签注入到HTML中

`cnpm install --save-dev mini-css-extract-plugin` 下载将css插入到HTML中的插件



开发模式配置文件

```javascript
module:{
    rules: [{
        test:/\.scss$/,//匹配文件
        use: ["style-loader","css-loader","sass-loader"] //使用loader
    }]
}/css形成style标签注入到HTML中
```



生产模式配置文件

```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");/引入插件

module:{
    rules: [{
        test:/\.scss$/,
        use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
    }]
},
plugins: [
   new MiniCssExtractPlugin();/通过new的形式使用插件
],/将css形成一个css文件插入到HTML中
```



package.json

```javascript
npm run webpack-dev-server -- --env.mode development --hot ;/--hot 模拟服务器热模块启动实现页面编辑后的局部刷新
```



`cnpm install babel-loader @babel/core @babel/preset-env --save-dev` 下载babel插件 es6 转es5

```javascript
module: {
    rules: [{
        test: /\.js$/,
        use: [{
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }]
    }]
},
```



`cnpm install url-loader file-loader --save-dev`  用于将文件转换为base64 URI

```javascript
{
    test: /\.(jpg|png)$/,
        use:{
            loader: "url-loader"
            options: {
                limit: 8192;/限制大于8k将会生成一个图片 否则是base64编码
            }
        }
}
```



 **devtool**  代码映射 方便调试

```javascript
devtool: "source-map",/在配置文件中添加
```





## 性能优化

**最优状态** 

<=200KB的初始化JavaScript

<=100KB的初始化css

HTTP1.0/1.1：<=6个请求

HTTP2.0 : <=20个请求

90%的代码覆盖率，10%未使用代码



**静态方式：**

```javascript

entry: { /多个入口文件写成对象的形式
    index1: "./src/index1.js",
    index2: "./src/index2.js"
},
```



**"动态"方式：**

`cnpm install @babel/plugin-syntax-dynamic-import --save-dev` 下载插件

```javascript
方法一：
button.onclick = function(){
    import("./footer").then((footer) =>{
        document.body.appendChild(footer.divTop);
        document.body.appendChild(footer.divBottom);
    })  
};/当点击的时候加载footer.js
```

```javascript
方法二：
const getFooter = () => import("./footer");

button.onclick = function(){
    getFooter().then((footer) =>{
        document.body.appendChild(footer.divTop);
        document.body.appendChild(footer.divBottom);
    }) 
}
```



# Sass

## sass 环境及选择器

**sass是css预处理器**

解决css没有封装，没有变量，没有组合，原生的模块化语法不好用的问题

css预处理器可以编译成css



**语法：**

Style.scss   ---------一般使用

```scss
.foo{
    color: red;
    font-size: 12px;
}
```

Style.sass  ———基本被舍弃

```sass
.foo
    color: red
    font-size: 12px
```

**安装编译环境**

`sudo npm install -g sass` 安装在全局下

**编译：**

```js
sass input.scss output.css
sass input.scss:output.css input:output
```



**嵌套语法：** 

​	样式可以放在父元素的声明块里面 ,  当编译的时候会变成常见的css文件

​	好处：减少代码量 不容易写错

```html
<div>
    <a href="">123456</a>
</div>
```

```scss
div{
    a{
        color: red;
    }
}
```

**子元素** 

```scss
div{
    div{
        ...
    }
}
```

**直接子元素 ( > )**

```scss
div{
    >div{
        ...
    }
}
```

**&选择器** 父亲选择器

```scss
div{
    &.demo{
        color: yellow;
    }
}
相当于
div.demo {
  color: yellow;
}

```





## Sass 语法

**模块** 

```scss
@import"模块名字"
@import"variables" //功能模块  模块名 _variables.scss ，引用时不用加'_'
@import"index"      //引入功能的scss
```



**变量**  用 '$' 声明

```scss
$error-color: #ccc !default; //全局变量；
				 //!default 如果上面引入的模块中没有定义这个变量再定义,如果定义了就使用之前定义的
.alert-error{
    $test-color: #ddd; //局部变量
}
```



​	**变量值的类型**

​	数字： 10  200px 50% 10pt

​	颜色: #fff rgb() red

​	字符串: “a.png”

​	Null

​	布尔：true false

​	Lists（相当于js中的数组）

​	Maps（相当于js中的对象）



**Mixin 可以让你的样式复用** 

```scss
@mixin alert-text {     //声明复用代码 将重复代码提取出来
    background-color: aquamarine;
    color: purple;
}

.errpr-text{   
    @include alert-text;  //引用声明的代码
}
```

​	**Mixin参数**

```scss
@mixin alert-text($color) {
    background-color: $color;
    color: purple;
}
.error-text{
    @include alert-text(blue);
}
.content-text{
    @include alert-text(pink);
}
```

​	**可以传多个参数** 

```scss
@mixin alert-text($color1, $color2) {
    background-color: $color1;
    color: $color2;
}
.error-text{
    @include alert-text(blue,green);
}
.content-text{
    @include alert-text(pink,red);
}
```



​	**可以传默认参数** (解构赋值)  传值的时候按照顺序传 也可以指定传

```scss
@mixin alert-text($color1: red, $color2: yellow) {
    background-color: $color1;
    color: $color2;
}
.error-text{
    @include alert-text(blue);
}
.content-text{
    @include alert-text(pink,red);
}
```

​	**如果传的值是null，这条属性将被删掉**

​	**Mixin 传一个块**

sass:

```scss

@mixin alert-text($color1: red, $color2: yellow) {
    background-color: $color1;
    color: $color2;
    @content;
}

.error-text{
    @include alert-text(blue){
        border-radius: 2px;
    };
}
.item-text{
    @include alert-text(pink, green)
}
```

css:

```css
.error-text {
  background-color: blue;
  color: yellow;
  border-radius: 2px;
}

.item-text {
  background-color: pink;
  color: green;
}
```



**函数** ：http://sass-lang.com/documentation/Sass/Script/Functions.html



**@if  @else** 判断

​	Scss:

```scss
@mixin foo($size) {
    font-size: $size;
    @if $size > 20 {
        line-height: $size;
    }
    @else{
        line-height: 15px;
    }
}
.small{
    @include foo(14px);
}
.large{
    @include foo(39px);
}
```

​	Css:

```css
.small {
  font-size: 14px;
  line-height: 15px;
}

.large {
  font-size: 39px;
  line-height: 39px;
}
```



**字符串插值** **#{}**

scss:

```scss
$name: "color";
.#{$name} .btn{
    #{$name}: $name;
}
```

Css:

```css
.color .btn {
  color: "color";
}
```



**@for 循环**

```scss
@for $i from 1 to 6 {  //to 或 through
    h#{$i}{
        font-size: 5rem - $i*0.75rem;
    }
}
```



**list** 相当于js中的数组

```scss
$margin: 10px 10px 20px 10px;
.foo{
    margin: $margin;
}
```



**@each   in   循环** 可以循环 对象 和 数组

```scss
$margin: 10px 10px 20px 10px;
.foo{
    @each $i in $margin {
        
    }
}
```



**nth**  查找数组这定向

```scss
$gradients:
(to right, blue, red),
(to right, skyblue, pink);
.foo{
    height: 100px;
    background: linear-gradient(nth($gradients,2)) 数组名，数组第几位
}
```



**Map 相当于对象** 

**通过map-get 获取对象属性值**

```scss
$mymap:(
    fense:pink,
    huangse:yellow
);
.foo{
    background: map-get($map: $mymap, $key: fense);
}
```



```scss
$dirctions:(
    "t":"top",
    "b":"bottom",
    "l":"left",
    "r":"right"
);
$box:("p":"padding","m":"margin");
@each $bo in $box {
    @each $dir in $dirctions {
        @for $i from 1 through 5 {
            $size: $i * 5;
            .#{nth($bo,1)}-#{nth($dir,1)}-#{$size}{
                #{nth($bo,2)}-#{nth($dir,2)}: #{$size}px;
            }
        }
    }
}
```







# Git代码管理

## Git安装及简介

**Git ：** 分布式版本控制系统

**本地版本控制系统**

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/Git1.png)

**集中式版本控制系统** svn

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/Git2.png)

**分布式版本控制系统** 

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/git3.png)

**安装GIt** ：Git官网

**配置**：

用户信息:git config --global user.name “  ”

​                git config --global user.email “  ”

检查配置:    git config --list









## Git基础语法

**获取Git仓库** 

 **git init**  :从现在有的目录中初始化 

**git clone "url"** : 克隆现有的仓库到本地



**三个工作区域**：工作目录，暂存区域，Git仓库

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/git4.png)

**Git更新状态命令** 

**git add** 把工作目录提交到暂存区

**git commit -m ""**  把暂存区提交成一个版本

**git status**  查看状态 



**文件状态** ：没有追踪的状态 ——  没有修改的状态 —— 修改过的状态 —— 暂存的状态

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/git5.png)



**查看修改** 

**git diff**  	 		比较工作目录和暂存区

**git diff --staged **  比较暂存区和上一个版本

**git diff HEAD** 	比较工作目录和上一个版本



**Git查看提交历史:  git log**



**Git撤销**

 **git checkout -- < file>**  撤销到暂存

**git reset HEAD < file>**  撤销暂存 







## GIt分支

**默认分支** ：master

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/git6.png)



**git branch < 分支名字 >**  创建分支

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/git7.png)



**HEAD 指针**

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/git8.png)



**git checkout <名字>**  分支切换

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/git9.png)

**git commit -a -m "说明"**   可以直接把工作目录提交到Git  所有文件都在被追踪的前提下



**工作中使用分支 我们不要主分支修改代码** 



**git merge < 分支名字 >**  将某个分支合并到当前分支 







## GitHub的创建与使用

**远程仓库**：GitHUb  码云  



**使用方法**：

1. 以本地仓库为基准
2. 以远程仓库为基准



**git remote**     查看本地仓库是否与远程仓库有联系

**git remote  add < name > url**   添加远程连接   name默认叫origin

**git remote -v** 查看状态 

**git push < name > < 分支名 >**  推送



**多人协作** 

 **git fetch < name >**   拉取

 **git merge < branch >**  合并

 **git pull < name > < branch >**  拉取加合并





## 项目开发中使用GIt

**git工作流：** 

​	**集中式工作流**



​	**功能分支工作流**   新建分支开发. 开发完上传到远程仓库分支



​	**gitflow**：master分支只存储写好的版本，develop分支相当于以前的master，release分支

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/git10.png)



​	**Forking工作流** ：fork别人仓库，添加上游仓库的地址 将他人的仓库复制一份到自己的仓库









## Hexo快速搭建博客

**hexo**：https://hexo.io/zh-cn/ 快速搭建博客

通过：`sudo cnpm install hexo-cli -g` 命令进行安装

`hexo init <filename>` 创建文件夹

`$ hexo new [layout] <title>` 新建一篇文章

​	**layout 有三种形式的文件** 

​	post(默认)  

​	 draft (私密 不会直接展示到页面)  通过`hexo publish <filename>` 将文件类型改成post

​	page 主页



`hexo generat` 转换为HTML 用于发布到git







# VUE

## 三大主流框架对比

**前端框架的特点**

1. 基于组件化
2. 有一个强大的社区
3. 有很多第三方的库可以解决很多问题
4. 有成熟的第三方库
5. 都有浏览器插件可以debugging
6. 对单页面应用很友好



**为什么要使用前端框架：** 保持UI和状态同步



**三大主流框架**：Angular  React  Vue 



**Angular**：

优点： MVVM模式  双向数据绑定  依赖注入

缺点：语法复杂，Angular5使用typescript  没有向后兼容



**React**	

优点： 虚拟DOM 更加轻量 JSX语法

缺点：官方文档没有体系化  JSX语法



**VUE**

优点：使用HTML模板  详细文档并且中文化  30KB

缺点：社区相对不健全  缺乏大型项目的实践







## 初识Vue

通过引入 `<script src="https://cdn.jsdelivr.net/npm/vue@2.5.22/dist/vue.js"></script>`来使用

通过Vue CLI 创建 `vue create <ProjectName>` 

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.22/dist/vue.js"></script>
<div id = "app">
	<input type="text" v-on:input = "changeName"> v-on: 指令监听 DOM 事件 等号后面是函数名
	<h1>{{name}}</h1> 
<!--通过{{}}的形式获取js定义的数据 通过属性名获取数据额内容 可以在 {{}} 中写js代码 可以写写简单的js表达式-->
</div>
```

```javascript
new Vue({
	el :'#app',  /通过el来获取DOM
    data: { /通过data定义数据 
    	name: ""  
	},
  methods: { /定义函数
  	changeName : function(event){
			this.name = event.target.value;
		}
  	}
})
```







## 使用HTML模板 v-bind v-once v-html 的使用

[**v-bind**](https://cn.vuejs.org/v2/api/#v-bind) 动态地绑定一个或多个特性

缩写：`:` 

```html
<a v-bind:href=" link ">baidu</a>
```

```javascript
new Vue({
  data: {
    link: "https://www.baidu.com"
  }
})
```



[**v-once**](https://cn.vuejs.org/v2/api/#v-once) 只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。



[**v-html**](https://cn.vuejs.org/v2/api/#v-html) 更新元素的 `innerHTML` 。**注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译** 

```html
<a v-bind:href="link">baidu</a>
```

```javascript
new Vue({
  data: {
    html: "<a href='https://www.baidu.com'>baidu</a>"
  },
})
```







## 事件的绑定   v-on

[**v-on**](https://cn.vuejs.org/v2/api/#v-on)

- **缩写**：`@`

- **预期**：`Function | Inline Statement | Object` 

- **参数**：`event`   

- **修饰符**：

  - `.stop` - 调用 `event.stopPropagation()`。阻止冒泡
  - `.prevent` - 调用 `event.preventDefault()`。取消默认事件
  - `.capture` - 添加事件侦听器时使用 capture 模式。
  - `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
  - `.{keyCode | keyAlias}` - 只当事件是从特定键触发时才触发回调。
  - `.native` - 监听组件根元素的原生事件。
  - `.once` - 只触发一次回调。
  - `.left` - (2.2.0) 只当点击鼠标左键时触发。
  - `.right` - (2.2.0) 只当点击鼠标右键时触发。
  - `.middle` - (2.2.0) 只当点击鼠标中键时触发。
  - `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器

- **用法**：

  绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。

  用在普通元素上时，只能监听[**原生 DOM 事件**](https://developer.mozilla.org/zh-CN/docs/Web/Events)。用在自定义元素组件上时，也可以监听子组件触发的**自定义事件**。

  在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 `$event` 属性：`v-on:click="handle('ok', $event)"`。

  从 `2.4.0` 开始，`v-on` 同样支持不带参数绑定一个事件/监听器键值对的对象。注意当使用对象语法时，是不支持任何修饰器的。



```html
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>

<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>

<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>

<!-- 阻止默认行为，没有表达式 -->
<form @submit.prevent></form>

<!--  串联修饰符 -->
<button @click.stop.prevent="doThis"></button>

<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter">

<!-- 键修饰符，键代码 -->
<input @keyup.13="onEnter">

<!-- 点击回调只会触发一次 -->
<button v-on:click.once="doThis"></button>

<!-- 对象语法 (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```







## 双向数据绑定 计算属性与监听

[**v-model**](https://cn.vuejs.org/v2/api/#v-model)  

- **预期**：随表单控件类型不同而不同。

- **限制**：

  - `<input>` 
  - `<select> ` 
  - `<textarea> ` 
  - components

- **修饰符**：

  - [`.lazy`](https://cn.vuejs.org/v2/guide/forms.html#lazy) - 取代 `input` 监听 `change` 事件， (正常情况下是input事件 使用.lazy后是change事件)
  - [`.number`](https://cn.vuejs.org/v2/guide/forms.html#number) - 输入字符串转为有效的数字
  - [`.trim`](https://cn.vuejs.org/v2/guide/forms.html#trim) - 输入首尾空格过滤

- **用法**：

  在表单控件或者组件上创建双向绑定。





**计算属性**：

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```javascript
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {   /通过computed字段来设置计算属性
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```



**侦听属性** 

```html
<input id="demo" v-model:value="fullName"></input>
```

```javascript
/watch 可以有异步操作
var vm = new Vue({
    el: '#demo',
    data: {
      fullName: 'Foo Bar'
    },
    watch: {  /通过watch字段来设置侦听属性
        fullName: function (val) {  /属性名：要监听的数据，属性值：监听数据所执行的函数
            console.log(val);  /将数据的最新值传入到函数的第一个参数里面 
      }
    }
  })
```



计算属性是同步的代码，侦听属性可以是异步的代码





## 动态添加样式

**通过  `v-bind`  绑定class**  

```html
<!--绑定class时是个对象，属性名是css的类 属性值是 如果表达式是true是这个类显示 如果是false这个类不显示-->
<div class="app" @click = "isCircle = !isCircle" :class="{ circle : isCircle }"> 
  																									<!--绑定的是一个对象，可以是多个键值对-->
    <p>{{ isCircle }}</p>
</div>
```

```javascript
new Vue({
    el: ".app",
    data: {
        isCircle: false
    }
})
```

```css
.app{
    width: 100px;
    height: 100px;
    background-color: pink;
    margin: 10px;
    text-align: center;
    line-height: 100px;
}
.circle{
    border-radius: 50%;
}
```



**通过计算属性绑定**：

```html
<div class="app" @click = "isCircle = !isCircle" :class="divClass" :style="fontcolor">
<!--通过计算属性绑定-->                                             绑定内联样式
    <p>{{ isCircle }}</p>
</div>
```

```javascript
new Vue({
    el: ".app",
    data: {
        isCircle: false,
        fontcolor: {/内联是个对象 
            color:'white',
            fontSize: '25px'
        }
    },
    computed: {
        divClass: function() {
            return{
                circle : this.isCircle, /通过this 访问到data 中的isCircle
            }
        }
    }
})
```



**数组语法**：

我们可以把一个数组传给 `v-bind:class`，以应用一个 class 列表：

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```

```javascript
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

渲染为：

```html
<div class="active text-danger"></div>
```

如果你也想根据条件切换列表中的 class，可以用三元表达式：

```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

这样写将始终添加 `errorClass`，但是只有在 `isActive` 是 truthy[[1\]](https://cn.vuejs.org/v2/guide/class-and-style.html#footnote-1) 时才添加 `activeClass`。

不过，当有多个条件 class 时这样写有些繁琐。所以在数组语法中也可以使用对象语法：

```html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```









## v-if 与 v-for

**条件渲染**  v-if 与js中的if else很相似

```html
<div id="app">
    <p v-if = "items>=10">有库存 {{ items }} 个</p>
    <p v-else-if = "items < 10 && items >= 1">快买啊 快没有货了</p>
    <p v-else-if = "items == 0">对不起 没有货了</p>
</div>
```

```javascript
var t = new Vue({
    el: "#app",
    data: {
        items: 0
    }
})
```

`v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。



**template** 渲染该DOM的时候不会渲染出该容器

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 `v-if`。最终的渲染结果将不包含 `<template>` 元素。

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```



[**v-show**](https://cn.vuejs.org/v2/guide/conditional.html#v-show)  通过`display`属性进行显示/隐藏

另一个用于根据条件展示元素的选项是 `v-show` 指令。用法大致一样：

```html
<h1 v-show="ok">Hello!</h1>
```

不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 CSS 属性 `display`。

注意，`v-show` 不支持 `<template>` 元素，也不支持 `v-else`。



**列表渲染** v-for

```html
<ul>
    <li v-for="movie in movies">{{ movie.name }} | {{movie.rate}}</li>
    <!--变量 in 数据名            变量名.数据对象的属性名-->
</ul>
```

```javascript
var t = new Vue({
    el: "#app",
    data: {
        movies: [
            {name:"流浪地球",rate:"8.0"},
            {name:"熊出没",rate:"5.0"},
            {name:"战斗天使",rate:"7.0"},
            {name:"邪不压正",rate:"6.0"}
        ]
    }
})
```



在 `v-for` 块中，我们拥有对父作用域属性的完全访问权限。`v-for` 还支持一个可选的第二个参数为当前项的索引。

```html
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

```javascript
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```



**在对象中使用`v-for`** 

```html
<ul>
	<li v-for="(value, key, index) in object">{{index}} | {{key}} : {{value}}</li>
    <!--可以传3个值: 值，键，索引-->
</ul>
```

```javascript
var t = new Vue({
    el: "#app",
    data: {
        object:{
            name: "xiangqingyuan",
            age: 18,
            height: 180
        }
    }
})
```



也可以循环 数字 及 字符串





## Vue深入及生命周期

[**ref**](https://cn.vuejs.org/v2/api/#ref)  

- **预期**：`string`

  `ref` 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 `$refs`对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例：

  ```html
  <!-- `vm.$refs.p` will be the DOM node -->
  <p ref="p">hello</p>
  
  <!-- `vm.$refs.child` will be the child component instance -->
  <child-component ref="child"></child-component>
  ```

  ```javascript
  var vm = new Vue({
      el: "p",
      
  })
  vm.$refs.p.innerText = "改变后的Vue"
  ```

  当 `v-for` 用于元素或组件的时候，引用信息将是包含 DOM 节点或组件实例的数组。

  关于 ref 注册时间的重要说明：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！`$refs` 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。



**生命周期图** 

![](/Users/xiangqingyuan/Desktop/web/web实战-手册/vue生命周期.png)  



**created**：实例创建完成之后执行的钩子函数

```javascript
new Vue({
    el: "#app",
    data: {
        title: "我是Vue"
    },
    created: function(){/通过created字段 定义函数-----剩下的同理
        console.log(this.title);
    }
})
```









## 使用最新的Vue-CLI3.0创建项目

**官网：** https://cli.vuejs.org/zh/ 

**真实的开发需求**：开发服务器，babel，postcss less sass，esLint(代码规范)



通过`npm install -g @vue/cli`进行全局安装 *如果失败 前面加上`sudo`* 

`vue create <ProjectName>`  创建一个项目

`npm run serve` 在服务器上运行当前项目

通过`vue ui`创建图形化页面配置Vue





## Vue定义组件与组件的使用

**template**模板：会覆盖掉当前的DOM节点  必须有一个根元素(所有的元素必须包裹在一个元素里)

```javascript
new Vue({
    el: "#app",
    data:{
        name: "xiangqiangyuan"
    },
    template: "<div>{{ name }}</div>",/通过template关键字定义  会覆盖掉当前的DOM节点
})
```



**全局组件**

```html
<div id="app">
    <my-component></my-component> <!--可以进行组件复用-->
    <my-component></my-component>
    <my-component></my-component>
    <my-component></my-component>
</div>
```

```javascript
Vue.component("my-component",{
    data: function(){ /定义的数据必须是函数
        return {
            name : "xiangqingyaun"
        }
    },
    template: "<div>{{ name }}</div>"
}); /全局组件

new Vue({
    el: "#app",
})
```



**局部组件** 

```html
<div id="app">
    <my-xiangqiangyuan></my-xiangqiangyuan>
    <my-xiangqiangyuan></my-xiangqiangyuan>
    <my-xiangqiangyuan></my-xiangqiangyuan>
</div>
```

```javascript
new Vue({
    el: "#app",
    components : { /通过components字段定义局部组件
        'my-xiangqiangyuan' : {
            template : '<div>xiangqiangyuan</div>'
        }
    }
})
```









## Vue单文件组件详解

**从模板到HTML** 

模板 => 编译 => ast树 => 绑定数据 => render函数 => 虚拟DOM => 真实的HTML    



**render函数** 他会直接渲染出DOM 覆盖掉当前的DOM节点

```javascript
new Vue({
  el: "#app",
  render: function(createElement) {
    return createElement('div', ['hi', createElement('p', ['xiangqingyuan'])]); 
      					//第一个参数传 想要创建什么样的DOM节点
    					//第二个参数可以传class id，如果不传自动忽略 跳到第三个参数 他是数组 是子节点
  }
})
```

**通过render函数定义组件** 只传一个参数 是一个对象(组件配置项)

```javascript
var app = {
	data:function (){
  	return  {
    	name: "xiangqingyuan"
    }
  },
	template : "<div>{{ name }}</div>",/也可以直接写成render函数
}
new Vue({
  el: "#app",
  render: function(createElement) {
    return createElement(app);/将组建的配置项传入到函数中
  }
})

```



**App.vue** 中有3个主要的结构

```vue
<template>
	模板
</template>

<script>
export default {

}
</script>

<style scoped> 组件中定义的样式将会是全局的样式，添加scoped属性 使样式变成局部样式
	样式
</style>
```



**项目实例**：路径：vue/vue-project







## 组件之间传值

**props** 父=>子

```vue
<template>
   <app-server-detall :status="status"></app-server-detall> 
					<!--通过自定义属性 或v-bind:绑定 到组件中-->
</template>

<script>
export default {
  data() {
    return {
      status: "开启"
    }
  },
}
</script>
```

```vue
<template>
    <div class="col-xs-12 col-sm-6">
        <p>服务器状态: {{ status }}</p>
    </div>
</template>

<script>
export default {
    props: ['status'] //通过props字段来定义接收的数据 是数组 ， 
}
</script>
```



**props验证** 

可以以对象形式列出 prop，这些属性的名称和值分别是 prop 各自的名称和类型：

```javascript
props: {
        myStatus: String,/接收的数据变量名：验证的数据类型(可以是一个 也可以是多个 多个类型是数组)
    },
```

```javascript
props: {
        myStatus: {
            type: String, /数据类型
            required: true, /如果是true 这个参数时必须传的
            default: "xiaoming", / 默认值(如果数据类型是一个对象，default要是一个函数return一个对象)
        },
    },
```



**.$emit ** 自定义事件 子组件向父组件传值

父组件：

```vue
<template>
<app-server-detall :my-status="status" @changeParentName="changeName"></app-server-detall>
								<!--通过v-on绑定子组件传过来的自定义属性, 属性值是要执行的函数名-->
</template>

<script>
export default {
  data() {
    return {
      status: "开启"
    }
  },
  methods:{
    changeName:function(name){/(name)从子组件中传过来的参数
      this.status = name
    }
  }
}
</script>
```

子组件：

```vue
<template>
    <p>服务器状态: {{ status }}</p>
    <button @click="changeParentName">change</button>
<!--通过v-on绑定点击时触发的函数-->
</template>

<script>
export default {
    props: {
        myStatus: {
            type: String,
        },
    },
    data(){
        return{
            status: this.myStatus
        }
    },
    methods: {
        changeParentName: function(){
            this.$emit('changeParentName','停止'),
/通过$emit定义自定义事件,(传向父组件的自定义属性名, 要传的数据)
        }
    }
}
</script>
```



**兄弟组件之间互相传值：** 

方法一：将所要改变的值定义在*父组件*中，在一个子组件中改变 *父组件* 的值 另一个子组件的值也会发生改变

方法二：vue-x 它是一个容器 存放值，任意组件都可以去取值



**不通过父组件 子组件之间互相传值** 

注册一个全局的事件 







## 深入使用组件(slot使用)

**slot内容分发** 

```vue
<template>
  <div class="container">
        <app-artical>通过自动以标签（组件）定义要传的DOM
          <h1 slot="title">这是标题</h1> slot定义指定的DOM 命名slot
          <p>这是段落</p> 默认slot
        </app-artical>
  </div>
</template>

<script>
import artical from './components/artical'
export default {
  components:{
    appArtical: artical
  }
}
</script>

<style>
  h1{
    color: blueviolet;
  }
</style>
```

```vue
<template>
    <div>
        slot标签中可以写默认值 不传走默认值
        <slot name="title"></slot>通过slot接收父组件传过来的DOM 通过name接收指定的DOM
        <slot></slot> 默认slot
    </div>   
</template>

<script>
export default {

}
</script>

<style scoped>
    div{
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px black;
        padding:30px;
        text-align: center;
    }
</style>
```



**动态组件**

```vue
<template>
  <div class="container">
  <button @click="selectCom = 'appArtical'">artical</button>
  <button @click="selectCom = 'appAuthor'">author</button>
  <button @click="selectCom = 'appNews'">news</button>
  
  <hr>
  <p>{{ selectCom }}</p>
  <component :is="selectCom"></component> 渲染自定义组件 :is属性告诉component渲染的是哪个组件
  </div>
</template>

<script>
import artical from './components/artical'
import author from './components/author'
import news from './components/news'
export default {
  components:{
    appArtical: artical,
    appAuthor: author,
    appNews: news
  },
  data(){
    return{
      title: "这是标题",
      selectCom: "appArtical", /定义数据
    }
  }
}
</script>
```

**切换组件时被切换的组件会被注销** 

**< keep-alive>标签解决切换时被注销的问题** 会缓存不会注销

```vue
<keep-alive>
    <component :is="selectCom"></component>
</keep-alive>
```



**提供了两个钩子函数** 

```javascript
activated: function(){
    console.log('active'); /此组件显示是触发该函数
},
deactivated: function(){
    console.log('deactivated'); /切换到其他组件时触发此函数
}
```







## From表单



https://cn.vuejs.org/v2/guide/forms.html



**V-model修饰符** 

[`.lazy`](https://cn.vuejs.org/v2/guide/forms.html#lazy)

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip)输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转变为使用 `change`事件进行同步：

```html
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >
```

[`.number`](https://cn.vuejs.org/v2/guide/forms.html#number)

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```html
<input v-model.number="age" type="number">
```

这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

[`.trim`](https://cn.vuejs.org/v2/guide/forms.html#trim)

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```html
<input v-model.trim="msg">
```



## 自定义指令

通过Vue.directive注册**全局指令** 

```javascript
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

如果想注册**局部指令**，组件中也接受一个 `directives` 的选项：

```javascript
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

然后你可以在模板中任何元素上使用新的 `v-focus` 属性，如下：

```html
<input v-focus="'green'"> 自定义指令 传过去的值 在binding.value中
```



**配置项**：主要有5个钩子函数 

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

接下来我们来看一下钩子函数的参数 (即 `el`、`binding`、`vnode` 和 `oldVnode`)。



**指令钩子函数会被传入以下参数：**  

- `el`：指令所绑定的元素，可以用来直接操作 DOM 。
- `binding`：一个对象，包含以下属性：
  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"`中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- `vnode`：Vue 编译生成的虚拟节点。移步 [VNode API](https://cn.vuejs.org/v2/api/#VNode-%E6%8E%A5%E5%8F%A3) 来了解更多详情。
- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。







## filters与mixins的使用

**filters**过滤器可以用在两个地方：**双花括号插值和 v-bind 表达式** 

```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

```vue
<template>
  <div id="app">
    <p>{{ msg | toUpper }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg: "Hello"
    }
  },
  filters: {
    toUpper(value){
      return value.toUpperCase();
    }
  }
}
</script>
```



**全局filter** 

```javascript
Vue.filter('toUpper',function(value){
  return value.toUpperCase();
})
```



**Mixins** 

```javascript
Mxin.js
export default{
    data(){
        return{
          msg: "Hello",
          inputText: "",
          colors:[ 'pink', 'green', 'blue', 'skyblue', 'yellow', 'orange']
        }
    },
    filters: {
    
    },
    computed:{
        colorFilter(){
            return this.colors.filter((color)=>{
            return color.match(this.inputText)
            })
        }
    }
}
```

```vue
<script>
    import Mxin from "./Mxin"
    export default {
      mixins: [Mxin], /通过mixins字段 它是一个数组
    }
</script>
```









## Vue中动画的使用

```vue
<transition name="fade">  用transition属性将要使用动画的DOM包裹起来 只能包裹单个组件或单个元素
    <div 				  name： 过度类型中将v换成的值
         class="alert" 
         v-if="show"
         >我是一句提示语</div>
</transition> 
「条件渲染 (使用 v-if)
条件展示 (使用 v-show)
动态组件
组件根节点」 中使用
```

对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 `<transition>`，则 `v-` 是这些类名的默认前缀。如果你使用了 `<transition name="my-transition">`，那么 `v-enter` 会替换为 `my-transition-enter`。

[过渡的类名](https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D) 

在进入/离开的过渡中，会有 6 个 class 切换。

1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`: **2.1.8版及以上** 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
4. `v-leave`: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`: **2.1.8版及以上** 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。



**使用 animation**

```css
  @keyframes silde-in {
    from{
      transform: translateY(20px);
    }
    to{
      transform: translateY(0);
    }
  }
   @keyframes silde-out {
    from{
      transform: translateY(0);
    }
    to{
      transform: translateY(20px);
    }
  }

  .silde-enter{
    transform: translateY(20px);    
  }
  .silde-enter-active{
    animation: silde-in 1s ease-out;   //
  }
  .silde-enter-to{
    transform: translateY(0);    
  }
  .silde-leave{
    transform: translateY(0);        
  }
  .silde-leave-active{
    animation: silde-out 1s ease-out;   //
  }
  .silde-leave-to{
    transform: translateY(20px);        
  }
```



但是，在一些场景中，你需要给同一个元素同时设置两种过渡动效，比如 `animation`很快的被触发并完成了，而 `transition` 效果还没结束。在这种情况中，你就需要使用 `type` 特性并设置 `animation` 或 `transition` 来明确声明你需要 Vue 监听的类型。



可以通过 `appear` 特性设置节点在初始渲染的过渡 (页面加载时就触发动画)

```css
<transition appear>
  <!-- ... -->
</transition>
```



这里默认和进入/离开过渡一样，同样也可以自定义 CSS 类名。

```css
<transition
   enter-class=""
   enter-to-class=""
>
  <!-- ... -->
</transition>
```



 Vue 提供了 **过渡模式**

- `in-out`：先进后出。新元素先进行过渡，完成之后当前元素过渡离开。
- `out-in`：先出后进。当前元素先进行过渡，完成之后新元素过渡进入。

用 `out-in` 重写之前的开关按钮过渡：

```css
<transition name="fade" mode="out-in">
  <!-- ... the buttons ... -->
</transition>
```



**[JavaScript 钩子](https://cn.vuejs.org/v2/guide/transitions.html#JavaScript-%E9%92%A9%E5%AD%90)**  

可以在属性中声明 JavaScript 钩子

```html
<transition
  v-on:before-enter="beforeEnter" 进入前
  v-on:enter="enter"  进入中
  v-on:after-enter="afterEnter"	 进入后
  v-on:enter-cancelled="enterCancelled" 进入的时候取消了

  v-on:before-leave="beforeLeave"  离开前
  v-on:leave="leave" 离开中
  v-on:after-leave="afterLeave"  离开后
  v-on:leave-cancelled="leaveCancelled"  离开时候取消了
>
  <!-- ... -->
</transition>
```



```javascript
// ...
methods: {
  // --------
  // 进入中
  // --------

  beforeEnter: function (el) {
    //el是DOM节点 可以进行操作
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter: function (el, done) {
    // ...
    done() 	//在过度执行完后 执行
      		//在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {//如果进入时取消了
    // ...
  },

  // --------
  // 离开时
  // --------

  beforeLeave: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave: function (el, done) {
    // ...
    done() //在 enter 和 leave 中必须使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {//如果离开时取消了
    // ...
  }
}
```

这些钩子函数可以结合 CSS `transitions/animations` 使用，也可以单独使用。

推荐对于仅使用 JavaScript 过渡的元素添加 `v-bind:css="false"`，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。( 设置后vue会跳过对css动画的检测 )



**列表过度** 

使用 `<transition-group>` 组件

- 不同于 `<transition>`，它会以一个真实元素呈现：默认为一个 `<span>`。你也可以通过 `tag` 特性更换为其他元素。
- [过渡模式](https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E6%A8%A1%E5%BC%8F)不可用，因为我们不再相互切换特有的元素。
- 内部元素 **总是需要** 提供唯一的 `key` 属性值。







## 使用axios连接服务器

**axios官网**: <https://github.com/axios/axios>

​	中文：<https://www.kancloud.cn/yunye/axios/234845> 

​				<http://www.axios-js.com/zh-cn/docs/>

**firebase**: [https://firebase.google.com](https://firebase.google.com/) 后端数据库



**使用**

通过`  import axios from 'axios';`的方式引入



get

```javascript
axios.get('/user.json')  //第一个参数请求的url， 第二个参数请求头(可以忽略)
        .then(data=>{    /返回一个promise回调函数
          // console.log(data);
          const arr = [];
          for(let key in data.data){
            let myData = data.data[key];
            myData.id = key;
            arr.push(myData);
            console.log(arr)
          }
          this.email = arr[0].email;
        }, err => {
          console.log(err);
        })
```



Post 

```javascript
axios.post('/user', { /第二个参数是请求头可以忽略   第三个参数是个对象，会通过post请求发送到服务器上
    firstName: 'Fred',
    lastName: 'Flintstone'
  }) //然后会返回一个promise对象
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```



**在main.js中全局配置** 

```js
axios.defaults.baseURL = 'https://myapp-2b515.firebaseio.com/'; //配置基础URL
axios.defaults.headers.common["Accept"] = "text/html" //在任意请求都设置该请求头
//可以配置get post 的请求头； 或者common( 所有的请求都会带这样的请求头 )
axios.interceptors.request.use( config => {
  console.log(config);
  return config;
})
axios.interceptors.response.use( data => {
  console.log(data);
  return data;
})
```





**拦截器**

在请求或响应被 `then` 或 `catch` 处理前拦截它们。

```javascript
// 添加请求拦截器
axios.interceptors.request.use(function (config) { //要使用一个函数å
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```

如果你想在稍后移除拦截器，可以这样：

```javascript
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

可以为自定义 axios 实例添加拦截器

```javascript
var instance = axios.create();
instance.interceptors.request.use(function () {/*...*/}); 
```







## router的创建与基础使用

官网 ：<https://router.vuejs.org/zh/> 

通过 `npm install vue-router` 下载，也可以通过vue-CLI创建项目的时初始化的时候选择 `router` 

必须要通过 `Vue.use()` 明确地安装路由功能 :

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router' //引入VueRouter

Vue.use(VueRouter); //告诉当前的vue使用VueRouter插件
```



```html
<router-link to="/路径名" tag="想要渲染成的标签名" active-class="active" exact></router-link> 
相当于a标签    要前往的路径     默认是a标签             定义选中时候的class   使用精确匹配

<router-view></router-view>想要将组建渲染到的位置 会渲染到标签内
```

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router' //引入vue-router
import signIn from './components/signin' //引入组件
import signUp from './components/signup' //引入组件
Vue.use(VueRouter); //要通过use来使用

export default new VueRouter({ //配置，最好单独创建个文件
  routes: [ 
    {path: '/signin',component: signIn}, //路由名，组件名

    {path: '/signup',component: signUp},
  ],//通过routes配置路由以及映射的组件，它是一个数组
  mode: 'history' //模式 默认hash,hash模式，url后面增加任何值都不会去后台请求，history会向后台发送请求
})
```

通过`router` 属性告诉vue使用哪个VueRouter实例

我们可以在任何组件内通过 `this.$router` 访问路由器，

也可以通过 `this.$route`访问当前路由

可以通过`this.$router` 获取到当前的 router 实例，并可以通过`push()` 方法通过js跳转路由可以传入对象以及字符串

```javascript
methods: {
  goToHome(){
    this.$router.push('/')//push()里面可以传一个对象
  }
}
```







## 使用router-link与动态路由

```javascript
export default new VueRouter({
  routes: [
    {path: '/signup/:id',component: signUp, hash:'锚点id'} //通过`:`变量名来设置动态路由
  ],
})
```

```javascript
data(){
  return{
    id: this.$route.params.id//可以获取到当前路由的名字
  }
},
  created(){
    console.log(this.id)
  }
```

相同组件互相切换时参数不会变 通过watch监听`$route` 

```javascript
watch:{
  $route(to, from){
    this.id = to.params.id
    console.log(to) //去哪里
    console.log(from) //从哪里来
  }
},
```



**命名路由** 

在 `routes` 配置中给某个路由设置名称。

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
```

要链接到一个命名路由，可以给 `router-link` 的 `to` 属性传一个对象：

```html
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```



**嵌套路由** 

```javascript
routes: [
    {path: '/',component: signIn}, //路由名，组件名
  	{path: '/signup/:id',
   	component: signUp,
   	children:[{ //通过children 设置嵌套路由
     	path:":id",//不写 `/`
     	component:signIn
   	}]
    },{
      path: "/abc",
      redirect: "/user", //redirect重定向
    },{
      path: "*", //以上所有路由没有匹配到的时候匹配该路由
      redirect: "error" //通过redirect重定向
    }
]
```



`to`可以是个对象

```html
<router-link 
    class="btn btn-primary" 
    tag="button" 
    :to="{
    name: 'UserEdit',          //命名路由
    params: {                //传递参数
      id: $route.params.id
    },
      query: {a:1,b:2}       //通过？传参
    }">
    编辑页面
</router-link>
```



**命名视图** 

有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 `sidebar` (侧导航) 和 `main` (主内容) 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 `router-view` 没有设置名字，那么默认为 `default`。

```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 `components` 配置 (带上 s)：

```js
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
```





## 利用router传参

**过度行为**

```html
<transition>
  <router-view></router-view>
</transition>
```





**滚动行为 ** 解决锚点标签问题

```javascript
const router = new VueRouter({ //写在VUE的配置中
  routes: [...],
  scrollBehavior (to, from, savedPosition) { //去哪，来自哪，当前进后退时记录上一次滚动条的位置
    // return 期望滚动到哪个的位置
    return{ x: 0, y: 0 } //x 横向滚动条， y纵向滚动条
                             
​````````````````````````````````````````````````````````````````````````````````````
		if(savedPosition){
      return savedPosition
    }else if(to.hash){
      return {selector:"#btn"}// 也可以返回一个选择器
    }else{
      return {x: 0, y: 0}
    }
  }
})
```



**导航守卫**  (相当于拦截器)



全局前置导航守卫：

```javascript
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => { //全局的守卫，在进入任意路由的时候都会执行这个函数
  // ...
  next() //如果不执行next就会被拦截掉 不会执行下一步
})
```

局部前置守卫导航：

```javascript
routes[{
      path: ':id',
      component: UserDetail,
      beforeEnter(to, from, next){
        console.log('局部路由');
        next();
      }
}]
```

组件内部前置守卫：

```javascript
export default {
    beforeRouteEnter(to, from, next){
        console.log('edit路由')
        next()
    }
  // 不！能！获取组件实例 `this`
  // 因为当守卫执行前，组件实例还没被创建
  //但是可以通过next传递一个回调函数
  next(vm => {
    // 通过 `vm` 访问组件实例
  	console.log(vm)
  })
}
```

组件内部后置守卫：

```javascript
beforeRouteLeave (to, from, next) {
  // ...
}
```





每个守卫方法接收三个参数：

- **to: Route**: 即将要进入的目标 [路由对象](https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1)
- **from: Route**: 当前导航正要离开的路由
- **next: Function**: 一定要调用该方法来 **resolve** 这个钩子。执行效果依赖 `next` 方法的调用参数。
  - **next()**: 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 **confirmed** (确认的)。
  - **next(false)**: 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 `from` 路由对应的地址。
  - **next('/') 或者 next({ path: '/' })**: 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 `next` 传递任意位置对象，且允许设置诸如 `replace: true`、`name: 'home'` 之类的选项以及任何用在 [`router-link` 的 `to` prop](https://router.vuejs.org/zh/api/#to) 或 [`router.push`](https://router.vuejs.org/zh/api/#router-push) 中的选项。
  - **next(error)**: (2.4.0+) 如果传入 `next` 的参数是一个 `Error` 实例，则导航会被终止且该错误会被传递给 [`router.onError()`](https://router.vuejs.org/zh/api/#router-onerror) 注册过的回调。

**确保要调用 next 方法，否则钩子就不会被 resolved。** 



**异步加载** ：

```javascript
const User = () => import('./components/user/User') //当执行到该组件的时候再进行加载
```







## Vuex简介与创建

官网：<https://vuex.vuejs.org/zh/> 

**安装**：

```js
npm install vuex --save
```

也可以通过vue CLI 初始化的时候选择`Vuex` 



Main.js

```javascript
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'; //引入Vuex
vue.use(Vuex) //通过use() 字段使用插件
const store = new Vuex.Store({   //通过`new Vuex.Store`的形式创建Vuex的实例 
  state: { //通过state字段定义数据 它是一个对象
    count: 0
  }
});

Vue.config.productionTip = false

new Vue({
  store, //通过 store 在该vue实例中引用Vuex
  render: h => h(App),
}).$mount('#app')

```



```vue
<template>
    <div>
        <h3>{{ count }}</h3>
    </div>
</template>

<script>
export default {
    computed: { //要通过计算属性监听该属性 保持数据的实时更新
        count(){
            return this.$store.state.count //通过 this.$store.state.count 获取到
        }
    }
}
</script>
```







## Vuex getters actions mutations详解



**getters** 可以减少代码的重复

```js
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {    //监听state的数据 
    doubleCount(state){ //每次数据发生变化的时候 执行该函数，将state传入到该函数中
      return state.count * 2 //该函数中可以进行数据的改变
    }
  }
});
export default store;

```



**mutations**   不能直接改变store的状态  

```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    doubleCount(state){
      return state.count * 2
    }
  },
  mutations: {    // 要通过mutations方法 定义要改变store状态的函数 可以通过该函数追踪到数据的状态
    increaseCount(state){ //将state传递到函数体中
      state.count++; //必须是同步的代码 否则无法准确追踪到数据
    },
    decreaseCount(state){ //将state传递到函数体中
      state.count--;
    }
  }
});
```

```js
methods: {
  increaes(){
    this.$store.commit("increaseCount") 
    					//通过commit 来执行 mutations 方法中定义的函数，函数名以字符串的形式传递过去
  },
  deincreaes(){
    this.$store.commit("decreaseCount")
  }
}
```



**actions**  执行异步操作

Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

```javascript
import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    doubleCount(state){
      return state.count * 2
    }
  },
  mutations: {
    increaseCount(state, num){
      state.count+=num;
    },
    decreaseCount(state){
      state.count--;
    }
  },
  actions: { //通过 actions定义执行异步的函数
    actionsIncrease(context){ //context 中有commit方法
      setTimeout(() => {
        context.commit("increaseCount", 5)
      },1000)
    }
  }
});
export default store;
```

```javascript
methods: {
        increaes(){
            this.$store.dispatch("actionsIncrease") 
          				// 通过 dispatch 来分发一个异步的函数执行，参数是actions中的函数名
        },
        deincreaes(){
            this.$store.commit("decreaseCount")
        }
    }
```



v-model 无法绑定计算属性，使用get 和 set

```html
<input type="text" v-model="valueGetter">
<p>{{valueGetter}}</p>
```

```javascript
computed:{
    valueGetter:{
        get(){
          this.$store.getters.valueGetter;
        },
        set(num){
          this.$store.dispatch('valueGetter', num) //分发一个actions
        }
    }
}
```





## Vuex模块化构建



**State辅助函数** 

```javascript
import {mapState} from 'vuex'  //首先要先引入 mapState

export default {
    computed: mapState(['count', 'value']) //将要获取的属性传递到mapState中，它是一个数组
}
```



**Module 模块化** 

```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```









# React

## 创建项目并使用React 

**官网**：<https://zh-hans.reactjs.org/>



CDN：

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<!--react 核心--> 
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script><!--react DOM 运行在网页端  nactive运行在APP端--> 
```



开启本地服务器：

通过NPM下载`live-server`包

```js
npm install -g live-server
```

通过`live-server <fileName>/` 来开启服务器



**JSX 语法** JavaScript XML

将DOM渲染到页面中

```jsx
console.log(React)
console.log(ReactDOM)

const template = <div>    //jsx
    <h1>this is a h1</h1> //react底层会通过 React.createElement() 创建标签
    <p>this is a p</p>
</div>;

const root = document.getElementById('app');

ReactDOM.render(template, root) 
//通过React.reader()渲染到页面中 第一个参数模板 第二个参数要渲染到的根节点
```



**要使用babel将jsx语法转换为js语法**

通过 `npm init` 创建一个项目说明书

通过 `npm install @babel/core @babel/cli @babel/preset-env @babel/preset-react --save-dev` 安装babel 将 jsx 转换为 js 

在`package.json` 文件中设置`script`属性来设置脚本

```json
"scripts": {
    "babel": "babel"
  }
```

创建文件名为 `.babelrc` 的配置文件

```js
{
    "presets": ["@babel/preset-env", "@babel/preset-react"] //使用的babel工具
}
```

最后通过`npm run babel -- src/app.js -o public/scripts/app.js -w` 进行语法转换 `-w`是监听

 						  *入口文件*               *出口文件* 





## JSX语法 条件渲染

JSX 语法中DOM必须有一个根节点

```jsx
const template = (  //jsx 语法中可以将HTML标签放在括号中
    <div>
        <h1>i am h1</h1>
        <p>i am a p</p>
        <h2>我是👌</h2>
        
    </div>
)
```



通过`{}`将变量渲染到jsx中的HTML标签中

```jsx
let user = 'xiangqingyuan',
    age = 19,
    city = 'beijing' //声明变量
//也可以渲染对象

const templateTwo =(
    <div>
        <h1>{user}</h1> //在HTML中通过 {} 的形式可以写js表达式
        <p>{age}</p>
        <p>{city}</p>
    </div>
)
```



**条件渲染** 

函数执行 if语句

三目运算符

逻辑与算符

```jsx
const user = {
    name: 'xiangqignyuan',
    age: 19,
    city: 'beijing'
}
const shoeLocation = () => { //如果有city字段就将city渲染到p标签中，否则不渲染
    if(user.city){
        return  <p>{user.city}</p>
    }else{
        return undefined
    }
}
const templateTwo =(
    <div>
        <h1>{user.name ? user.name : "匿名"}</h1>  // 如果有name就渲染name 否则渲染匿名
        {user.age >= 18 && <p>{user.age}</p>} 如果小于18 就是返回空。否则返回p
        {shoeLocation()} //函数执行
    </div>
)
```







## 属性与事件

**属性**

```jsx
<button type="button" id={myId} className="button">+</button>
		可以像HTML一样写ID,属性值也可以是表达式，但是class要写成className
```



**事件**

```jsx
<button 
    type="button" 
    id={myId} 
    className="button" 
    onClick={ ()=> {console.log('add 1')}} 绑定事件，所有的事件都是驼峰是写法
 >+</button>
```



> react的数据与UI 并不是响应式的，如果数据发生改变的时候一定要通过 ReactDOM.render() 这个函数从新渲染

```jsx
let count = 0;
let myId = 'only'

const add = () => {
    count++;
    renderCountApp(); //当点击过后要执行该函数从新渲染模板
}

const renderCountApp = () => {
    const templateThree = (
        <div>
            <h1>{ count }</h1>
            <button 
                type="button" 
                id={myId} 
                className="button" 
                onClick={add}
            >+</button>
        </div>
    )
    const root = document.getElementById('app');
    ReactDOM.render(templateThree, root)
}
renderCountApp(); //首先要执行函数才能渲染出来
```

> 它只会重新渲染改变了的DOM，并不会全部重新渲染







## 数据渲染与form表单

```jsx
const obj = {
    title: "帮你决定",
    subtitle: "把你的命运交给电脑吧",
    options: ['option1', 'option2']
}

const showOpthions = (options) => {
    if(options && options.length > 0){
        return '这些是options'
    }else{
        return '没有options'
    }
}

const formSubmit = (e) => {
    e.preventDefault() //取消form表单的默认事件
    var option = e.target.elements.option.value;   //获取input输入的值
    if(option){
        obj.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const removeAll = () => {
    obj.options = [];
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{obj.title}</h1>
            <p>{obj.subtitle}</p>
            <p>{showOpthions(obj.options)}</p>
            <p>{obj.options.length}</p>
            <button onClick = { removeAll }> remove all </button>
            <ol>
                {    //将数组中的每一个元素渲染到每一个li中
                 obj.options.map((options, index) => { 
                   	//通过数组的map方法遍历整个数组，为每个元素生成回调
                          return <li key={index}>{options}</li> //每个li都要有唯一的key值
                    })
                }                
            </ol>
            <form onSubmit = {formSubmit}>
                <input type="text" name="option"/>给input命名方便DOM的获取
                <button>添加选项</button>
            </form>
        </div>  
    )
    const root = document.getElementById('app');
    ReactDOM.render(template, root)
}
render();
```









## 创建react组件



通过ES6 的class语法来创建组件

```js
class Header extends  React.Component {
    				// 通过extends关键字来继承react的组件
  	render() {
        //render 函数内 return jsx语法
        return <p>I am a header</p>
    }
}

const jsx = (
    <div>
        <Header></Header>
    </div>
)

let app = document.getElementById('app');
ReactDOM.render(jsx, app)// 渲染到app组件中
```



嵌套组件

```jsx
class MyApp extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Action></Action>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>帮你做决定</h1>
                <p>把命运交给电脑吧</p>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button>随机输出一个选项</button>
            </div>
        )
    }
}


let app = document.getElementById('app');
ReactDOM.render(<MyApp></MyApp>, app)// 渲染到app组件中
```







## Props传值 与 组件中的交互事件

```jsx
class MyApp extends React.Component{
    render(){
        const title = "帮你决定"
        return(
            <div>
                <Header title={title}></Header> <!--和vue 一样通过自定义属性传值-->
                <Action></Action>
            </div>
        )
    }
}
 
class Header extends React.Component{
    render(){
        // console.log(this)
        return(
            <div>
                <h1>{ this.props.title }</h1>  <!--通过 this.props 可以获取到传过来的值-->
                <p>把命运交给电脑吧</p>
            </div>
        )
    }
}

```



**循环渲染组件**

```jsx
class Option extends React.Component{
    render(){
        
        return(
            <li >{ this.props.option }</li>
        )
    }
}

class Options extends React.Component{
  	const options = ["张三", "李四", "王二"]
    render(){
        return(
            <div>
                <ul> <!--循环渲染 Option 组件-->
  {options.map((item, index) => <Option option={ item } key={ index }></Option>)}
                </ul>
            </div>
        )
    }
}

```



**组件中绑定事件**

```jsx
class Action extends React.Component{
    handlePick(){
        alert(111)
    }
    render(){
        return(
            <div>
                <button onClick={this.handlePick.bind(this)}>随机输出一个选项</button>
            		<!--要通过this获取 要改变当前的this 指向 指向当前的对象-->
            </div>
        )
    }
    
}
```



**也可以在初始化的时候改变this指向** 

```jsx
class Options extends React.Component{
    constructor(props){
        super(props)
        this.removeAll = this.removeAll.bind(this) //初始化的时候改变this指向
    }
    removeAll(){
        // this.props.options = []
        console.log(this.props.options)
    }
    render(){
        return(
            <div>
                <button onClick={this.removeAll}>清除所有</button>
                <ul>
                    {this.props.options.map((item, index) => <Option option={ item } key={ index }></Option>)}
                </ul>
            </div>
        )
    }
}
```









## 组件的state用法

```jsx

class MyApp2 extends React.Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this)
        this.minus = this.minus.bind(this)
        this.reset = this.reset.bind(this) //改变事件函数的this指向
        this.state = { //定义数据
            count: 0, 
        };
    }
    add(){
        this.setState((state, props) => { //要通过this.setState() 来改变数据 它是异步的
          //这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
            return{//返回一个对象
                count: state.count+1
            }
        })
    }
    minus(){0
        this.setState((state, props) => {
            return{
                count: state.count-1
            }
        })
    }
    reset(){
        this.setState({count: 0}) //也可以传一个对象
    }
    render(){
        // console.log(this)
        return(
            <div>
                <h1>Count:{ this.state.count }</h1>
                <button onClick={ this.add }>+1</button>
                <button onClick={ this.minus }>-1</button>
                <button onClick={ this.reset }>reset</button>
            </div>
        )
    }
}

```









## 组件之间传值

**子组件触发父组件事件**



```jsx
class MyApp extends React.Component{ //父组件
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.state = {
            options : ["张三", "李四", "王二", "六六"]
        }
    }
  	handleAddOption(option){
        this.setState(state => {
            return{
                options: state.options.concat([option])
              	//不能用push方法直接改变原来的值 使用的方法不能直接改变旧的值 必须返回新的值
            }
        })
        console.log(option)
    }
    handleRemoveAll(){
        console.log("删除所有")
        this.setState((value, props)=>{
            return{
                options: []
            }
        })
    }
    render(){
        const title = "帮你决定";
        const subTitle = "把命运交给电脑吧";
        return(
            <div>
                <Header title={title} subTitle={subTitle}></Header>
     <Options options={this.state.options} handleRemoveAll={this.handleRemoveAll}></Options>
     <!--通过自定义属性将函数传到子组件中   子组件通过this.props可以获取到-->
             <AddOptions handleAddOption={this.handleAddOption}></AddOptions>

                <Action hasOptions={this.state.options.length > 0}></Action>
            </div>
        )
    }
}



class Options extends React.Component{ //子组件
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <button onClick={this.props.handleRemoveAll}>清除所有</button>
            		<!--子组件 获取到父组件传过来的函数 执行即可即可改变父组件的值-->
                <ul>
                    {this.props.options.map((item, index) => <Option option={ item } key={ index }></Option>)}
                </ul>
            </div>
        )
    }
}

class AddOptions extends React.Component{ //子组件
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
    }
    addOption(e){
        e.preventDefault()
        let option = e.target.option.value
        if(option){
            this.props.handleAddOption(option) //将子组件的值传给父组件
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addOption}>
                    <input name="option" type="text"/>
                    <button type="submit">添加选项</button>
                </form>
                    
            </div>
        )
    }
}
```







## 函数组件 与 默认props

定义组件最简单的方式就是编写 JavaScript 函数：statesless functionnal component

函数组件没有`state`属性

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。

你同时还可以使用 [ES6 的 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 来定义组件：

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

上述两个组件在 React 里是等效的。



**设置props的默认值**  `.defaultProps`  函数组件与class组件都可以用该方法定义默认的props

```jsx
function Header(props){ //函数组件
    return(
        <div>
            <h1>{ props.title }</h1>
            <p>{ props.subTitle } 函数组件</p>
        </div>
    )
}
Header.defaultProps={ //设置默认的props 当不传值的时候使用默认值
    title: "我是默认标题"
}
```

```jsx
class Header extends React.Component{ //class组件
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>{ this.props.title }</h1>
                <p>{ this.props.subTitle }</p>
            </div>
        )
    }
}
Header.defaultProps={
    title: "我是class组件默认标题"
}
```

**改变数组的时候 不能直接改变原来的数组** 

```jsx
this.setState((value)=>{
  return{
    options: value.options.filter((ele, idx)=>{ //用数组的filter
      if(index == idx){
        return false //不要的项 return false
      }else{
        return true
      }
    })
  }
})
```









## 生命周期函数

`componentDidMount()` 方法会在组件已经被渲染到 DOM 中后运行

`componentWillUnmount()` 会在组件卸载及销毁之前直接调用。

`componentDidUpdate()` 会在更新后会被立即调用。首次渲染不会执行此方法。

```jsx
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {//如果上一次的值 与 这次的值不等的时候再执行
    this.fetchData(this.props.userID);
  }
}
```







## react cli构建项目

中文文档：  https://www.html.cn/create-react-app/docs/getting-started/ 

```js
npx create-react-app my-app
cd my-app
npm start
```

















# 微信小程序

## WXML语法

**数据绑定** `{{}}`

内容

```html
<view> {{ message }} </view>
```

```js
Page({
  data: {
    message: 'Hello MINA!'
  }
})
```

属性

```html
<view id="item-{{id}}"> </view>
```

```js
Page({
  data: {
    id: 0
  }
})
```



**列表渲染** `wx:for="{{ }}"` 

```html
<view wx:for="{{movies}}" wx:key="name">  
  <!--要绑定唯一的key值 对象的时候要是对象的一个属性名， 数组绑定*this-->
  {{index}}: {{item.name}}   <!--index为索引， item为数组的每一项-->
</view>
```

```js
Page({
    data: {
        movies: [{
            name: '复仇者联盟'
        },{
            name: '阿丽塔'
        },{
            name: '比悲伤更悲伤的故事'
        },{
            name: '蜘蛛侠'
        },{
            name: '钢铁侠'
        }]
    },
})
```

使用 `wx:for-item` 可以指定数组当前元素的变量名，

使用 `wx:for-index` 可以指定数组当前下标的变量名：

```html
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
```

使用`block`标签不会将标签渲染到页面当中

**wx:key** 

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 [input](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) 中的输入内容，[switch](https://developers.weixin.qq.com/miniprogram/dev/component/switch.html) 的选中状态），需要使用 `wx:key` 来指定列表中项目的唯一的标识符。

`wx:key` 的值以两种形式提供

1. 字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。
2. 保留关键字 `*this` 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字，如：

当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。



**`setData`** 当数据发生改变的时候要通过setData来从新设置数据 

```js
reverse(){
  this.setData({  //它是一个对象，属性名是要改变的数据， 属性值是改变后的数据
    movies: this.data.movies.reverse()
  })
}
```



**条件渲染** 

`wx:if` 

在框架中，使用 `wx:if=""` 来判断是否需要渲染该代码块：

```html
<view wx:if="{{condition}}"> True </view>
```

也可以用 `wx:elif` 和 `wx:else` 来添加一个 else 块：

```html
<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>
```

`block `  `wx:if`

因为 `wx:if` 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 `<block/>` 标签将多个组件包装起来，并在上边使用 `wx:if` 控制属性。

```html
<block wx:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

**注意：** `<block/>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。

`wx:if` vs `hidden`

因为 `wx:if` 之中的模板也可能包含数据绑定，所以当 `wx:if` 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。

同时 `wx:if` 也是**惰性的**，如果在初始渲染条件为 `false`，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。

相比之下，`hidden` 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏。

一般来说，`wx:if` 有更高的切换消耗而 `hidden` 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 `hidden` 更好，如果在运行时条件不大可能改变则 `wx:if` 较好。







## wxss

**尺寸单位**

- rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。





## Javascript

**模块化** 

```javascript
// common.js
function sayHello(name) {
  console.log(`Hello ${name} !`)
}
function sayGoodbye(name) {
  console.log(`Goodbye ${name} !`)
}

module.exports.sayHello = sayHello
exports.sayGoodbye = sayGoodbye
```

```js
var common = require('common.js')
Page({
  helloMINA: function() {
    common.sayHello('MINA')
  },
  goodbyeMINA: function() {
    common.sayGoodbye('MINA')
  }
})
```



**事件** `bind` 

- 在组件中绑定一个事件处理函数。

如`bindtap`，当用户点击该组件的时候会在该页面对应的Page中找到相应的事件处理函数。

```html
<view id="tapTest" data-hi="WeChat" bindtap="tapName"> Click me! </view>
```

- 在相应的Page定义中写上相应的事件处理函数，参数是event。

```js
Page({
  tapName: function(event) {
    console.log(event)
  }
})
```

`bind`事件绑定不会阻止冒泡事件向上冒泡，

`catch`事件绑定可以阻止冒泡事件向上冒泡,

捕获阶段可以采用`capture-bind`、`capture-catch`关键字，后者将中断捕获阶段和取消冒泡阶段。





## 自定义组件

首先需要在 `json` 文件中进行自定义组件声明（将 `component` 字段设为 `true` 可这一组文件设为自定义组件）

```json
{
  "component": true
}
```



在自定义组件的 `js` 文件中，需要使用 `Component()` 来注册组件

```js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})
```



**使用自定义组件**

使用已注册的自定义组件前，首先要在页面的 `json` 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径：

```json
{
  "usingComponents": {
    "component-tag-name": "path/to/the/custom/component"
  }
}
```

这样，在页面的 `wxml` 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。

**父组件像子组件传值** `自定义属性` `properties` 

```html
<view>
  <!-- 以下是对一个自定义组件的引用 --> 通过自定义属性传值
  <component-tag-name inner-text="Some text"></component-tag-name>
</view>
```

```js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {  //组件中 要使用methods 定义函数
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})
```



**子组件向父组件传值** `triggerEvent` 



```html
<!-- 在自定义组件中 -->
<button bindtap="onTap">点击这个按钮将触发“myevent”事件</button> 

```

```javascript
Component({
  properties: {},
  methods: {
    onTap: function(){
      var myEventDetail = {} // 要传的参数 detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})
```

```html
父组件
<my-component bind:myevent="myfunc"></my-component>
<!--绑定自定义事件 子组件中传过来的值在事件对象中-->
```



可以使用`<slot />`传标签 和vue方法一样

默认情况下，一个组件的wxml中只能有一个slot。需要使用多slot时，可以在组件js中声明启用。



```js
Component({ //组件js文件
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: { /* ... */ },
  methods: { /* ... */ }
})
```

此时，可以在这个组件的wxml中使用多个slot，以不同的 `name` 来区分。

```html
<!-- 组件模板 -->
<view class="wrapper">
  <slot name="before"></slot>
  <view>这里是组件的内部细节</view>
  <slot name="after"></slot>
</view>
```

使用时，用 `slot` 属性来将节点插入到不同的slot上。

```html
<!-- 引用组件的页面模板 -->
<view>
  <component-tag-name>
    <!-- 这部分内容将被放置在组件 <slot name="before"> 的位置上 -->
    <view slot="before">这里是插入到组件slot name="before"中的内容</view>
    <!-- 这部分内容将被放置在组件 <slot name="after"> 的位置上 -->
    <view slot="after">这里是插入到组件slot name="after"中的内容</view>
  </component-tag-name>
</view>
```



**自定义组件**

使用npm时 要在当前文件夹通过`npm init -y` 来初始化package.json文件



```javascript
module.exports = function (){
    const pages = getCurrentPages();  //获取到所有页面对象
    const currentPage = pages[pages.length - 1] //当前的页面在页面栈的下方 获取到数组的最后一位
    const val = currentPage.selectComponent("#my-notify"); //通过ID获取到组件
    val.show()//执行组件中的函数
}
```

```javascript
const notify = require("../../components/notify/notify.js")
click(){
  notify()
}
```

```javascript
methods: { //自定义组件中
  show(){
    let _this = this
    this.setData({
      isShow: true,
    })
    setTimeout(function(){
      _this.setData({
        isShow: false,
      })
    }, this.properties.duration)
  }
}
```





