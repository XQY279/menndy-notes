## webpack

webpack是前端模块化的打包工具

模块化是一种将系统分离成独立功能的部分方法，严格意义模块接口、模块间具有透明性

#### 以前结局模块化的方式：

| 方式                             | 问题                                       |
| -------------------------------- | ------------------------------------------ |
| 将每个模块通过立即执行函数包起来 | 引入依赖的问题                             |
| 通过gulp grunt等工具             | 我们修改一个文件，可能就打破依赖；有死代码 |
| Node                             | 没有浏览器支持                             |
| 打包工具 browerify               | commonJS是静态的 打包出来的文件很大        |
| AMD(Require.js) CMD(Sea.js)      | 太动态                                     |



#### 模块化的好处

- 拆分依赖到代码块按需加载
- 快速初始化加载
- 所有静态资源都可以做模块
- 第三方库模块化
- 自定义模块化打包
- 适合大型项目



#### 安装webpack

| Command                              | Description                            |
| ------------------------------------ | -------------------------------------- |
| `npm init`                           | 生成项目说明书                         |
| `npm install webpack --save-dev`     | 下载webpack                            |
| `npm install webpack-cli --save-dev` | 下载webpack-cli(通过命令行使用webpack) |



#### 使用

##### 默认情况下当前项目目录下`src/index`为项目的入口文件



packge.json

```json
"dev": "webpack --mode development", //运行开发模式 不压缩
"prod": "webpack --mode production"  //运行为生产模式 压缩
```



安装bable

`npm install babel-preset-env --save-dev`





#### 配置文件

在当前根目录下 创建一个 `webpack.config.js`文件 用来写配置文件

```javascript
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = ({mode}) => {
    return {
        mode,
        entry: "./src/index1.js", //入口文件名
        output: {
            path: __dirname + "/dist", //输出 文件夹 名
            filename : "main.js"  //输出 文件 名
        },
        plugins: [
            new htmlWebpackPlugin({//将处理好的js文件插入到HTML页面当中
                template: "./index.html"//模板页 会将此页面的内容复制到插入js文件的HTML页面中
            }),
            new webpack.ProgressPlugin()
        ]
    }
}
```



**webpack四个核心概念**

Entry：告诉webpack入口文件在哪

Outout：告诉webpack把编译好的文件放在哪

Loaders：告诉webpack在添加到依赖图之前如何转换一个文件，本质上是一个函数

Plugins：在编译的过程中添加你想要的任何操作

`cnpm install webpack-dev-server` 下载模拟服务器





#### loaders

`cnpm install sass-loader node-sass --save-dev` 下载将sass文件转换为css文件的loader

`cnpm install css-loader --save-dev` 下载将css转换为js的loader

`cnpm install style-loader --save-dev` 将js形式的css形成style标签注入到HTML中

`cnpm install --save-dev mini-css-extract-plugin` 下载将css插入到HTML中的插件



开发模式配置文件

```javascript
module:{
    rules: [{
        test:/\.scss$/,//匹配文件
        use: ["style-loader","css-loader","sass-loader"] //使用loader
    }]
}/css形成style标签注入到HTML中
```



生产模式配置文件

```javascript
const MiniCssExtractPlugin = require("mini-css-extract-plugin");/引入插件

module:{
    rules: [{
        test:/\.scss$/,
        use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"]
    }]
},
plugins: [
   new MiniCssExtractPlugin();/通过new的形式使用插件
],/将css形成一个css文件插入到HTML中
```



package.json

```javascript
npm run webpack-dev-server -- --env.mode development --hot ;/--hot 模拟服务器热模块启动实现页面编辑后的局部刷新
```



`cnpm install babel-loader @babel/core @babel/preset-env --save-dev` 下载babel插件 es6 转es5

```javascript
module: {
    rules: [{
        test: /\.js$/,
        use: [{
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }]
    }]
},
```



`cnpm install url-loader file-loader --save-dev`  用于将文件转换为base64 URI

```javascript
{
    test: /\.(jpg|png)$/,
        use:{
            loader: "url-loader"
            options: {
                limit: 8192;/限制大于8k将会生成一个图片 否则是base64编码
            }
        }
}
```



 **devtool**  代码映射 方便调试

```javascript
devtool: "source-map",/在配置文件中添加
```





#### 性能优化

**最优状态** 

<=200KB的初始化JavaScript

<=100KB的初始化css

HTTP1.0/1.1：<=6个请求

HTTP2.0 : <=20个请求

90%的代码覆盖率，10%未使用代码



**静态方式：**

```javascript
entry: { /多个入口文件写成对象的形式
    index1: "./src/index1.js",
    index2: "./src/index2.js"
},
```



**"动态"方式：**

`cnpm install @babel/plugin-syntax-dynamic-import --save-dev` 下载插件

```javascript
方法一：
button.onclick = function(){
    import("./footer").then((footer) =>{
        document.body.appendChild(footer.divTop);
        document.body.appendChild(footer.divBottom);
    })  
};/当点击的时候加载footer.js
```

```javascript
方法二：
const getFooter = () => import("./footer");

button.onclick = function(){
    getFooter().then((footer) =>{
        document.body.appendChild(footer.divTop);
        document.body.appendChild(footer.divBottom);
    }) 
}
```

