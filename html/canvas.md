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



![二次贝塞尔曲线](/Users/xiangqingyuan/Desktop/notes/image/1415845715278-bezier-quadratic-animation.gif)



**设置图形样式**

1.线样式

lineWidth线条宽度

lineCap：线两头样式butt /square /round

lineJoin: 两线拐角处miter /round /bevel

miterLimit: 绘制焦点方式

![fullsizerender](/Users/xiangqingyuan/Desktop/notes/image/fullsizerender.jpg)



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



![fullsizerender(/Users/xiangqingyuan/Desktop/notes/image/fullsizerender(1).jpg)](../image/fullsizerender(1).jpg)

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

