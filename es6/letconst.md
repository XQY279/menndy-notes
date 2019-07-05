## let与const块级作用域

**块级作用域：**

​	{块级作用域}从大括号开始到大括号结束是一个块级作用域



**let的使用**：

声明的变量遵循块级作用域，

```javascript
let msg = "hello";
{
    let a = 1;
}
console.log(msg);
console.log(a);//访问不到a，是块级作用域，大括号外失效
```

​	**不能变量声明提升**

```javascript
console.log(a);/var 会将变量提前声明 var a; 打印出undefined 
var a = 1;

/用let定义变量 不会提前声明
console.log(a);/会报错，a is not defined
let a = 1;/在哪块写的就在哪声明赋值
```

​	**不能重复声明变量** 

```javascript
var a = 10;
var a = 20;/在var中下面的会把上面的覆盖掉
console.log(a);/20

let ;/不能重复声明,不会污染变量
```



**const的使用**：定义常量

定义的时候要有初始化值

初始化值不能改变（绑定不能改变）,可以增加属性



**块级作用域的奇特概念**

​	暂时性死区(TDZ)：

```javascript
let a = 10;
{
    console.log(a);/会报错，不管let在哪定义变量，let会统治整个作用域
    let a = 20;
}
```



​	循环中使用块级作用域: 

```javascript
var arr = [];
for(var i = 0; i < 10; i++){/用var声明，遵循函数作用域
    (function(j){
        arr.push(function(){
            console.log(j);
        })
    })(i);
}
arr.forEach(function(item,index,arr){
    item();
})




var arr = [];
for(let i = 0; i < 10; i++){/用let声明，块级作用域，出大括号消失，进大括号重新定义
    arr.push(function(){
        console.log(i);
    })
}
arr.forEach(function(item,index,arr){
    item();
})
```

