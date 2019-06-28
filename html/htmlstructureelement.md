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

![](/Users/xiangqingyuan/Desktop/notes/image/buju.png)

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