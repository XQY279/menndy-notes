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

![../image/0254.png](/Users/xiangqingyuan/Desktop/notes/image/0254.png)



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

![image-20181007160929942](/Users/xiangqingyuan/Desktop/notes/image/image-20181007160929942.png)

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

![](/Users/xiangqingyuan/Desktop/notes/image/canvas1.png)

![](/Users/xiangqingyuan/Desktop/notes/image/canvas2.png)

## 