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



