## express介绍

[菜鸟教程链接](https://www.runoob.com/nodejs/nodejs-express-framework.html)

[expressAPI 中文](https://www.runoob.com/w3cnote/express-4-x-api.html)

[express官方文档](http://expressjs.com/zh-cn/)

初始化package.json: `npm init`

安装express ：`sudo npm install express --save`



##### demo

```javascript
var express = require('express');
var app = express();

app.get('/:id', function (req, res) { //:id 冒号开头的是动态路由
  	//req用户传递过来的信息
  	//res服务端向用户输出的心理
    res.send('Hello');
 })
  
 var server = app.listen(8081, function () {
  
   server.address().address
   server.address().port
  
   console.log("应用实例已启动")
  
 })
```



#### 安装supervisor热刷新

安装:   `sudo npm install supervisor -g`

启动：`supervisor <filename>` 



#### 请求与响应

Express 应用使用回调函数的参数： **request** 和 **response** 对象来处理请求和响应的数据。

```javascript
app.get('/', function (req, res) {
   // --
})
```



##### request 和 response 对象的具体介绍：

- Request 对象 - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。
- Response 对象 - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。

 



#### 静态文件

Express 提供了内置的中间件 **express.static** 来设置静态文件如：图片， CSS, JavaScript 等。

你可以使用 **express.static** 中间件来设置静态文件路径。例如，如果你将图片， CSS, JavaScript 文件放在 public 目录下，通过浏览器就可访问。你可以这么写：

```js
app.use('/public', express.static('public'));
```





