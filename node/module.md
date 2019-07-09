## 模块化

#### 模块化的概念与意义

- 为了让Node.js的文件可以相互调用，Node.js提供了简单的模块系统
- 模块是node.js应用程序的基本组成部分
- 文件和模块是一一对应的，一个node.js文件就是一个模块
- 这个文件可能是JavaScript代码、JSON或编译过的C/C++扩展。
- Node.js中存在4类模块（原生模块和3种文件模块）



#### Node.js的模块加载流程

![](../image/nodejs-require.jpg)



##### 模块加载方式

- 从文件模块缓存区中加载
- 从原生模块加载
- 从文件加载



#### require方法加载模块

##### require方法接受接受以下几种参数的传递

- http、fs、path等，原生模块
- ./mod 或 ../mod，相对路径的文件模块
- /pathtomdule/mod, 绝对路径的文件模块
- mod，非原生模块的文件模块



##### 通过`module.exports` 来导出模块，通过`require`来引入模块

`hello.js`

```js
function Hello(){
    var name;
    this.setName = function(argName){
        name = argName;
    }
    this.sayHello = function(){
        console.log(name);
    }
}
module.exports = Hello;//导出模块
```

`main.js`

```js
const Hello = require('./hello')
const hel = new Hello;

hel.setName('Menndy');
hel.sayHello();
```

