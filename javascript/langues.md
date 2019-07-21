##  Javascript语言精粹

- [数据类型](#数据类型)
- [变量](#变量)
- [函数](#函数)









#### Lint & Hint

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



#### 变量

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



#### 函数

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

