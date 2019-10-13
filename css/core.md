## BFC,IFC,GFC,FFC



### BFC 原理

BFC 的全称为 Block Formatting Content，即块级格式化上下文。一个 BFC 有如下特性：

1. 处于同一个 BFC 中的元素相互影响，可能会发生 margin collapse
2. BFC 在页面上是一个独立的容器，容器里面的子元素不会影响到外面的元素，反之亦然
3. 计算 BFC 的高度时，考虑 BFC 所包含的所有元素，包括浮动元素也参与计算
4.  浮动盒的区域不会叠加到 BFC 上

**创建 BFC**

创建 BFC 的方法如下：

1. 浮动（ float 的值不为 none ）
2. 绝对定位元素（ position 的值为 absolute 或 fixed ）
3. 行内块（ display 为 inline-block ）
4. 表格单元（ display 为 table、table-cell、table-caption 等 HTML 表格相关的属性 ）
5. 弹性盒（ display 为 flex 或 inline-flex ）
6. overflow 不为 visible

**BFC 使用场景**

1.  防止垂直 margin 重叠
2. 父子元素的边界重叠得解决方案：
3. 在父元素上加上 overflow: hidden; 使其成为 BFC。





### IFC 原理

全称 Inline Formatting Contexts，也就是"内联格式化上下文"。

**创建 IFC** 

块级元素中仅包含内联级别元素。
当 IFC 中有块级元素插入时，会产生两个匿名块将父元素分割开来，产生两个 IFC。

**IFC 的布局规则：**

1. 子元素水平方向排列，并且垂直方向起点为元素顶部
2. 子元素只会计算水平方向元素空间(margin padding border)，不会计算垂直方向
3. 在垂直方向上，子元素会以不同形式来对齐(vertical-align)
4. 能把一行上的框全部包含进去的一个矩形区域，被称为该行的行框(line box)。行框的宽度由包含块(containing box)和与其中的浮动元素来决定
5. IFC 中的 "line box" 一般紧贴其包含块，但 float 元素会优先排列
6. IFC 中的 "line box" 高度由 CSS 行高计算规则来确定，同个 IFC 下的多个 "line box" 高度可能会不同
7. 当内联元素的总宽度小于包含它们的  "line box" 时，其水平渲染规则由 "text-align" 属性值来决定
8. 当一个  "line box" 超过父元素的宽度时，它会被分割成多个 box，这些 box 分布在多个 "line box" 中。如果子元素未设置强制换行的情况下，"inline box" 将不可被分割，将会溢出父元素

**IFC 使用场景：**

1. 水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中。
2. 2. 垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中。



### GFC 原理

GFC(GridLayout Formatting Contexts)直译为"网格布局格式化上下文"，当为一个元素设置display值为grid的时候，此元素将会获得一个独立的渲染区域，我们可以通过在网格容器（grid container）上定义网格定义行（grid definition rows）和网格定义列（grid definition columns）属性各在网格项目（grid item）上定义网格行（grid row）和网格列（grid columns）为每一个网格项目（grid item）定义位置和空间。 

**和 table 的区别**：同样是一个二维表格，gridLayout 会以更加丰富的属性来控制行列、控制对齐以及更精细的控制语义



### FFC 原理

FFC(Flex Formatting Contexts)直译为"自适应格式化上下文"，display 值为flex 或者 inline-flex 的元素将会生成自适应容器（flex container）。

Flex Box 由伸缩容器和伸缩项目组成。通过设置元素的 display 属性为 flex 或 inline-flex 可以得到一个伸缩容器。设置为 flex 的容器被渲染为一个块级元素，而设置为 inline-flex 的容器则渲染为一个行内元素。

伸缩容器中的每一个子元素都是一个伸缩项目。伸缩项目可以是任意数量的。伸缩容器外和伸缩项目内的一切元素都不受影响。简单地说，Flexbox 定义了伸缩容器内伸缩项目该如何布局。