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

