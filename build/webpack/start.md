## webpack介绍

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

将webpack安装到全局 `npm install webpack -g`

将webpack安装到项目中  `npm install --save-dev webpack`



```javascript
npm init                              /生成项目说明书
cnpm install webpack --save-dev       /下载webpack
cnpm install webpack-cli --save-dev	  /下载webpack-cli(通过命令行使用webpack)

需要在当前文件夹下的src文件夹中找index.js文件作为入口文件，将打包的文件放在新建的dist文件夹下的main.js
可以通过npm run 运行scripts中的脚本

npm run webpack                        /运行webpack
"dev": "npm run webpack -- --mode development", //运行开发模式    不压缩
"prod": "npm run webpack -- --mode production --watch"//运行生产模式 (--watch 监听)  压缩
```





#### 配置

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