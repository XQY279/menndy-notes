## 模块化

ES5之前是没有模块化的，

立即执行函数去写模块化的问题：

1. 没有完全解决全局变量的污染
2. 我们需要考虑script标签的加载顺序

2009年推出 node.js ，JavaScript代码可以在后台运行 

在node中每一个js文件都是一个独立的作用域 



**模块化基本语法**

​	es6当中知道定义了语法, 但是没有定义我们的加载方式

**将type改成module** 

```javascript
<script type="module">
        
</script>
```

**导出 export** 

```javascript
export function add(a,b){
    console.log(a+b)
}
```

```javascript
export function jian(a,b){
    console.log(a-b)
}
```

​	或者在最后导出

```javascript
export{add}/在当前文件导出
```

```javascript
export {add as add1};/将add导出为add1，执行时也要写add1
```

**导入 import** 

```javascript
<script tppe="module">
    import {add} from "./add.js";/导入也可以用as重命名
add(1,2);
</script>
```

**默认导出** 

```javascript
export default function jian(a,b){/关键字 default 导出为匿名函数
    console.log(a-b)
}
```

```javascript
import jian from "./jian.js";/不用写大括号 导入的是匿名函数
```

**可以用*导出全部** 

```javascript
import * as obj from "./jian.js";/导出的是一个对象,通过 (对象.函数名) 的形式使用
obj.jian(5,6);
```



