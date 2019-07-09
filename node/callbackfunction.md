## node回调函数

#### 什么是回调

- 函数调用分为三类：同步调用、回调 和 异步调用
- 回调是一种双向调用模式
- 可以通过回调函数来实现回调



#### 阻塞与非阻塞

- 阻塞和非阻塞关注的是程序在等待调用结果（消息，返回值）时的状态。
- 阻塞就是做不完不准回来
- 非阻塞就是你先做，我看看有其他事情没，做完了告诉我一声



##### 同步读取文件 

```javascript
//阻塞时的代码
var fs = require('fs'); //y引入读取文件的库
var data = fs.readFileSync('server.js') //进行阻塞试的读取文件
console.log(data.toString()); //toString 方法将会把数据已字符串的形式输出，否则会输出16进制
```

> 必须要等到文件读取完，才会向下执行



##### 异步读取文件

```javascript
//非阻塞时的代码
const fs = require('fs');

//这里的匿名函数就是回调
fs.readFile('server.js', function(err, data){//回调函数: 第一个参数时错误信息，第二个参数是数据
    if(err){
        return console.error(err);
    }else{
        console.log(data.toString());
    }
})
console.log('执行完毕')
```

> 异步：会先向下继续执行 ，等待文件读取完了再输出