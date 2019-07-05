## ES6参数的处理

**参数默认值**:参数值严格等于undefined走默认值

```javascript
function value(){
    return 20;
}
/惰性求值：当 a的默认赋值发生的时候才会执行函数value();
function fn(a = value(),b = 2,c = 3){
    console.log(a,b,c); /如果不传参数走默认赋值
}
fn();
```

在默认值中使用其他变量: 从左到右的顺序，作用域的问题



**剩余运算符：** ` ... `  三个点

把散列元素的变成一个集合，在函数或解构中使用

​	把剩下的元素变成数组

```javascript
function add(...arr){
    console.log(arr); /[1, 2, 3, 4, 5, 6, 7, 8, 9]
}
add(1,2,3,4,5,6,7,8,9);
```

```javascript
let [a,...b] = [1,2,3,4,5];
console.log([a,b]);
```



**扩展运算符** ：把一个集合变成散元素 ，函数参数传递，数组和对象的复制

```javascript
function fn(a,b,c){
    console.log(a,b,c); /1 2 3
}
fn(...[1,2,3]); /会将数组拆开分别赋值给a,b,c
```

数组的复制

```javascript
let arr = [1,2,3];
let arr2 = [...arr];
```

对象的复制：

```javascript
let obj = {
    a : 1,
    b : 2,
    c : 3
}
let obj2 = {
    ...obj
}
```



**模拟命名参数** :使用对象的解构赋值来模拟命名参数(提高代码的可读性) 

```javascript
function fn({start = 1,end = 2} = {}){
    console.log(start,end);
}
fn({start:3,end:4});/当没有参数时执行默认值
```

