## 盒模型及使用     

![](../image/box.png)

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

```css
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

