##  Javascript语言精粹

- [数据类型](#数据类型)
- [变量](#变量)
- [函数](#函数)
- [对象](#对象)
- [prototype](#prototype)
- [this和作用域](#this和作用域)
- [call&apply](#call&apply)
- [箭头函数](#箭头函数)











### Lint & Hint

- 目的：检测JavaScript代码标准
- 原因：JavaScript代码诡异，保证团队代码规范
- lint: http://www.jslint.com
- hint: http://www.jshint.com

搭配自动化任务管理工具完善自动化测试grunt-jshint，grunt-jslint



#### 数据类型

JavaScript是弱类型语言，但并不是没有类型，JavaScript可以识别下面7种不同类型的值

##### 基本数据类型

1. Boolean
2. Number
3. String
4. null
5. undefined
6. symbol



##### 7. Object

1. Array
2. RegExp
3. Date
4. Math
5. ...



可以用 `typeof` 判断数据类型，操作符返回一个字符串，但并非返回所有结果都符合预期，无法判断object具体数据类型

```javascript
typeof false //"boolean"
typeof .2 //"number"
typeof NaN//"number"
typeof ''//"string"
typeof undefined//"undefined"
typeof Symbol()//"symbol"

typeof new Data() //"object"
typeof []//"object"
typeof alert //function

typeof null//"object"
typeof not_defined_var //"undefined"
```



### 变量

在应用程序中，使用变量来为值命名，变量的名称为identifiers

##### 	声明

1. 使用关键字 `var`：函数作用域
2. 使用关键字`let`：块作用域
3. 直接使用：全局作用域 （严格模式下报错）

只声明不赋值，变量额默认值是`undefined`

 `const`关键字可以生命不可改变的变量，同为块级作用域。及为常量



##### 	变量提升

JavaScript中可以引用稍后声明的变量，这一概念成为变量生命提升

```javascript
console.log(a); //undefined
var a = 2;
```

等同于

```javascript
var a;
console.log(a);
a = 2;
```



### 函数

一个函数就是一个可以被外部代码调用（或者函数本身递归调用）的子程序

##### 定义函数

1. 函数声明
2. 函数表达式
3. Function构造函数
4. 箭头函数

```javascript
function fn(){}

var fn = function(){}

var fn = new Function(arg1, arg2, ...argN, funcBody)

var fn = () => {}
```

##### arguments

1. arguments: 一个包含了传递给当前执行函数参数的类似于数组的对象
2. arguments.length: 传递给函数参数的数量



##### rest

```javascript
function foo(...args){
  return args;
} 
foo(1,2,3)//[1,2,3]
```



##### 默认值

```javascript
function fn(a = 2, b = 3){
  return a + b;
}
fn(2, 3);//5
fn(2);//5
fn();//5
```





### 对象

##### 定义对象

1. 字面量
2. 构造函数

```javascript
var obj = {
	prop: 'value',
  fn: function)(){}
};

var date = new Date()
```

#### 构造函数

构造函数和普通的函数没什么区别，使用`new`关键字调用就是构造函数，使用构造函数可以实例化一个对象。

##### 函数的返回值有两种可能

普通函数返回值

1. 显试调用`return`返回`return`后表达式的求值，
2. 没有调用`return`返回`undefined`

构造函数返回值

1. 没有返回值
2. 简单数据类型
3. 对象类型

前两种情况构造函数返回构造对象的实例，实例化对象正是利用是个特性

第三种构造函数和普通函数一致，返回`return`后表达式的结果

```javascript
function People(){
  this.name = name;
  this.age = age;
}

var people = new People('Byron', 26)
```







### prototype

1. 每个函数都有一个`prototype`对象属性，对象内有一个`constructor`属性，默认指向函数本身
2. 每个对象都有一个`__ proto__`的属性其指向它父类的prototype

```javascript
function Person(name){
  this.name = name;
}
Person.prototype.print = function(){
  console.log(this.name);
}
var p1 = new Person('Byron');
var p2 = new Person('Casper')
p1.print();
p2.print();
```





### this和作用域

##### 作用域可以通俗的理解

1. 我是谁
2. 我有哪些马仔

我是谁的回答就是`this`

马仔就是我的全局变量



#### this场景

##### 普通函数

1. 严格模式: `undefined`
2. 非严格模式下：全局对象
   1. node：`global`
   2. 浏览器：`window`

##### 构造函数：对象的实例

##### 对象方法：对象本身





### call&apply

```javascript
fn.call(content, arg1, arg2, ...,argn)
fn.apply(content, args)
```

```js
function isNumber(obj){
  return Object.prototype.toString.call(obj) === '[object Number]'
}
```



#### Function.prototype.bind

`bind`返回一个新函数，函数的作用域为`bind`参数

```javascript
function fn(){
  this.i = 0;
  setInterval(function(){
    console.log(this.i++)
  }.bind(this), 500)
}
```





### 箭头函数

`() => {}`

箭头函数是ES6提供的新特性， 时间写的函数表达式，拥有词法作用域和this 值





