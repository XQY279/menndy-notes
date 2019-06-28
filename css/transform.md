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



