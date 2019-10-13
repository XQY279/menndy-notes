## CSS后处理器

#### 概念

简单理解，进行Sass、less、css编写完最后一步统一处理，好比 css压缩、自动补全各个浏览器前缀。



#### 以 [Autoprefixer](https://www.npmjs.com/package/autoprefixer#webpack) 为例

Autoprefixer 自动补充各个浏览器前缀，自动处理兼容性问题。

标准的css 书写

```css
.container {
display: flex;
}
.item {
flex: 1;
}
```

编译为处理了兼容性的 生产环境 CSS：

```css
.container {
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
}
.item {
-webkit-box-flex: 1;
-webkit-flex: 1;
-ms-flex: 1;
flex: 1;
}
```

这里我使用的是`VSCode`IDE，所以直接插件安装`Autoprefixer`就可以体验一下。

#### 实现原理

1. 将 **源代码** 做为 **CSS** 解析，获得 **分析树**
2. 对 **CSS** 的 **分析树** 进行 **后处理**
3. 将 **CSS** 的 **分析树** 转换为 **CSS 代码**

#### 优缺点

- 优点：使用 CSS 语法，容易进行模块化，贴近 CSS 的未来标准
- 缺点：逻辑处理能力有限

真正团队开发使用方式是统一最后处理，通过gulp或grunt编译时进行处理，eg: `gulp-postcss` 依赖插件