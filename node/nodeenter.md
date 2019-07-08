## Node.js入门

#### 什么是Node.js

- node.js的本质就是一个JavaScript的解析器
- node.js是JavaScript的运行环境
- node.js是服务器程序
- node.js本身使用的是V8引擎
- node.js不是web服务器, 只是js的运行环境



#### 为什么使用node.js

- 为了提供高性能的web服务
- IO性能强大
- 事件处理机制完善
- 天然能够处理DOM
- 社区非常活跃，生态圈日趋完善



#### node.js的优势

- 处理大流量数据
- 适合实时交互应用
- 完美支持对象数据库
- 异步处理大量大量并发连接

​     

Node.js 中文网http://nodejs.cn/



#### 包管理器NPM

- 允许用户从npm服务器上下载别人编写的第三方包到本地
- 允许用户从npm服务器下载并安装别人编写的命令行程序到本地
- 允许用户将自己编写的包或命令行程序上传到npm服务器供别人使用

> 如果npm命令安装过慢 可以使用cnpm, 但是要执行`npm install cnpm`命令进行安装cnpm



#### 运行

通过 `node <fileName>` 运行当前文件，运行结果可以输出在命令行中

##### 一个简单的实例

```js
//通过require函数从node.js原生API中 引入http 模块
//引入过后http对象 将会赋值给变量
var http = require('http');


//使用createServer函数创建一个服务,
//需要传进去一个函数 第一个参数：接收浏览器的请求；第二个参数：返回给浏览器的数据
http.createServer(function(request, response){
    //定义一个HTTP返回的头
    //第一个参数，返回的状态值； 
    //第二个参数定义返回给浏览器的头部信息
    response.writeHead(200, {'Content-Type': 'text/plan'});

    //发送响应的数据
    response.end('Hello world! \n')
}).listen(8000);//listen() 设置端口号
//运行在http://127.0.0.1:8000/ 输出 Hello world


console.log('server running in 8000');
```

