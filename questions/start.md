#### 1.请写出弹出值，并解释为什么

```js
alert(a)
a();
var a=3;
function a(){
		alert(10)
}
alert(a) 
a=6; 
a();
```

答：

> 首先弹出：function a(){ alert(10) }
>
> 然后弹出：10
>
> 最后弹出：3
>
> 最后控制台会报错：a is not a function 
>
> 原因：首先函数声明提升，将函数提升至最顶端，所以打印出function a(){ alert(10) }；然后执行函数a，就会打印出10；最后打印出 3 因为全局变量中的a = 3；然后a被赋值成了6，所以执行a() 会报错 a is not a function 





#### 2.请写出如下输出值，并写出把注释掉的代码取消注释的值，并解释为什么 

```js
this.a = 20;
var test = {
    a: 40,
    init:()=> {
          console.log(this.a);
          function go() {
              // this.a = 60;
              console.log(this.a);
          }
          go.prototype.a = 50;
          return go; 
      }
};
//var p = test.init();
//p();
new(test.init())();
```

答: (去掉代码注释后的答案):

> 











```js
var num = 1; 
function yideng() {
  	"use strict";
  	console.log(this.num++); 
}
function yideng2() {
  	console.log(++this.num);
} 
(function() {
		"use strict";
		yideng2(); 
})();
yideng();
```

答：

> 







##### 拓展题(请写出以下代码执行结果):

```javascript
function C1(name) {
		if (name) this.name = name;
}
function C2(name) { 
  	this.name = name;
}
function C3(name) { 
  	this.name = name || 'fe';
}
C1.prototype.name = "yideng";
C2.prototype.name = "lao";
C3.prototype.name = "yuan";
console.log((new C1().name) + (new C2().name) + (new C3().name));
```

答：

> 















#### 3.请写出如下点击li的输出值，并用三种办法正确输出li里的数字。

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
</ul>
<script type="text/javascript">
    var list_li = document.getElementsByTagName("li");
    for (var i = 0; i < list_li.length; i++) {
      	list_li[i].onclick = function() {
   					console.log(i);
        }
    }
</script>
```

答：

> 













#### 4.写出输出值，并解释为什么

```js
function test(m) {
		m = {v:5}
}
var m = {k: 30};
test(m);
alert(m.v);
```

答：

> 













#### 5.请写出代码执行结果，并解释为什么?

```js
function yideng() {
		console.log(1);
}
(function () {
  	if (false) {
				function yideng() {
          	console.log(2);
				}
    }
		yideng();
})();
```

答：

> 















#### 6.请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等 生以此类推。不允许使用if switch等。

答: 

> 





















#### 7.请用一句话遍历变量a。(禁止用for 已知var a = “abc”)

答: 

```javascript
Array.from(a ,item => console.log(item))
```



#### 8.请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。  要求:汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子 类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句:将 红色的 Cruze买给了小王价格是14万。

答: 

> 

















#### 9.请你写出如何利用EcmaScript6/7(小Demo)优化多步异步嵌套的代码?

答: 

> 













#### 10.【仔细思考】写出如下代码执行结果，并解释为什么。

```js
var length = 10;
function fn() { 
  	console.log(this.length);
}
var yideng = {
		length: 5,
		method: function(fn) {
    fn();
    arguments[0]();
   }
};
yideng.method(fn, 1);
```

答：

> 

























