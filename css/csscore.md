## OO CSS

#### OO CSS概念 

(OO是面向对象的缩写)

众多开发者忽视了CSS的表现（认为他太过简单，是一种机械的工作），而且更多关注在JavaScript的性能上或者其他方面。

OO CSS将页面可重用元素抽象成一个类，用Class加以描述，而与其对应的HTML即可看成是此类的一个实例。

#### OO CSS 的作用和注意事项——作用

1. 加强代码复用以方便维护
2. 减小CSS体积
3. 提升渲染效率（逐层渲染）
4. 组件库思想（和美工对接）、栅格布局可共用、减少选择器、方便扩展

#### OO CSS 的作用和注意事项——注意事项

1. 不要直接定义子节点，应把共性声明放到父类

```cpp
.inner{}  // 不是很建议的声明 
.mod .inner{} //.mod下面的inner
```

2. 结构与皮肤相分离

```jsx
<div class="container simpleExt"></div>  //html结构 （不建议这样）
.container{} //控制结构的class
.simpleExt{} // 控制皮肤的class
```

3. 容器和内容相分离

```jsx
<div class="container"><ul><li>排行</li></ul></div>
.container ul{}  //ul依赖了容器
<div class="container"><ul class="rankList"><li>排行</li></ul></div>
.rankListul li{}  //解除与容器的依赖，可以从一个容器转移到其他容器
```

4. 抽象出可重用的元素，建好组件库，在组件库内寻找可用的元素组装页面（只要把最外层的class引进来，然后去组件库找类，组装页面）
5. 往你想要扩展的对象本身添加class而不是他的父节点
6. 对象应保持独立性

```jsx
<div class="container"><div class="mod"></div></div>  //htlm结构
.container{}    .container .mod{}  //控制结构的class
<div class="container mod"></div>
```

7. 避免使用ID选择器，权重太高，无法重用
8. 避免位置相关的样式

```cpp
#header .container{},#footer .container{}
.container{}  //上面的直接提出来就行，肯定有共性的。
#header h1{},#footer h1{}//如果是有不同的，可以像下面这样
h1 .h1{}  h2 .h2{}      <h1><div class="h6"></div></h1>
```

9. 保证选择器相同的权重（不要去嵌套太多，不然状态改变很麻烦）
10. 类名 剪短 清晰 语义化 OOCSS的名字并不影响HTML语义化

#### 常用CSS库

> 对于OO CSS来说，这些库就相当于父类，父类做了本不该你做的事情

- [Reset CSS](https://meyerweb.com/eric/tools/css/reset/)
  - 杀伤力也较大，会把我们想要的不想要的都给设置一个初始样式
  - 做了一个统一回归
  - 之后有了normalize.css，做了一个改进
- [normalize.css](http://nicolasgallagher.com/about-normalize-css/)
  - 它只给body设置了padding:0;margin:0;
  - 它做的是保证每个浏览器显示效果统一，相当于一种补充，但是有些默认的还没置掉，支队body做了重置
- [Neat.css](http://thx.github.io/cube/doc/neat)
  - 它是基于normalize和reset结合的
  - 解决低级浏览器Bug（这是normalize的优点）
  - 统一效果，但不盲目重置为0
  - 向后兼容
  - 考虑响应式
  - 考虑移动设备
  - 还有一些特色等可以到官网查看，在我们项目中也可以直接下载使用