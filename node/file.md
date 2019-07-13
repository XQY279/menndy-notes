## 文件系统

#### 异步读取文件 async

`fs.readFile('path', callback())`

```javascript
const fs = require("fs");
function result(){
    return new Promise(function(resolved, rejected){
        fs.readFile('./function.js',(err, data)=>{
            if(err){
                rejected(err)
            }else{
                resolved(data)
            }
        })
    })
}
async function handle(){
    let res = await result()
    console.log(res.toString())
}
handle();

```



#### 打开文件

##### 语法

以下为在异步模式下打开文件的语法格式：

```
fs.open(path, flags[, mode], callback)
```

##### 参数

参数使用说明如下：

- path - 文件的路径。
- flags - 文件打开的行为。具体值详见下文。
- mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
- callback - 回调函数，带有两个参数如：callback(err, fd)。

flags 参数可以是以下值：

| Flag | 描述                                                   |
| :--- | :----------------------------------------------------- |
| r    | 以读取模式打开文件。如果文件不存在抛出异常。           |
| r+   | 以读写模式打开文件。如果文件不存在抛出异常。           |
| rs   | 以同步的方式读取文件。                                 |
| rs+  | 以同步的方式读取和写入文件。                           |
| w    | 以写入模式打开文件，如果文件不存在则创建。             |
| wx   | 类似 'w'，但是如果文件路径存在，则文件写入失败。       |
| w+   | 以读写模式打开文件，如果文件不存在则创建。             |
| wx+  | 类似 'w+'， 但是如果文件路径存在，则文件读写失败。     |
| a    | 以追加模式打开文件，如果文件不存在则创建。             |
| ax   | 类似 'a'， 但是如果文件路径存在，则文件追加失败。      |
| a+   | 以读取追加模式打开文件，如果文件不存在则创建。         |
| ax+  | 类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。 |



##### 打开文件

`fs.stat(path, callback)` 

```js
const fs = require("fs");

console.log("准备打开文件！");
fs.open('test.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");     
});
```





##### 写入文件

`fs.writeFile(file, data[, options], callback)` 

```js
const fs = require("fs");

fs.writeFile('test.txt', '这是程序写入的文件', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log('文件写入成功')
})
```

