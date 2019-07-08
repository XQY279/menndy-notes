## Iterator 与 Generator

**for循环的缺陷**：

```javascript
let colors = ["red","blue","pink","yellow"];
/理解方面比较差， i这个变量不好管理
for(var i = 0; i<colors.length; i++){
    console.log(colors[i]);
}
```

**迭代器：** `[Symbol.iterator] ()` 

##### 迭代器是什么？ 

​	统一的接口，它是一个对象 对象里面有`next`方法, 

​	每次调用这个方法就会输出数据结构的的成员

​	第一次输出第一个成员，第二次输出第二个，

​	已此类推，输出成员的形式为`{value:值,done:true/false}`  

​	对象没有迭代器

​	数组迭代器：

```javascript
let colors = ["red","blue","pink","yellow"];
let arrIt = colors[Symbol.iterator](); /创建迭代器函数
arrIt.next();/执行
```

​	类数组迭代器：

```javascript
let argsIt;
function fn(a,b,c){
    argsIt = arguments[Symbol.iterator]();
}
fn(1,2,3)
argsIt.next()
```

​	DOM

```javascript
let myP = document.getElementsByTagName('p');
let pIt = myP[Symbol.iterator]();
pIt.next()
```

​	字符串

```javascript
let str = "xiangqingyuan";
let sIt = str[Symbol.iterator]();
```

**for of循环**  只要内置有迭代器就可以用forof循环 他是循环一个迭代器的而不是使用`.next()`方法

```javascript
let colors = ["red","blue","pink","yellow"];
for(let color of colors){
  console.log(color); /打印出：red blue pink 会直接拿到数组中的值
  if(color === 'pink'){
    break;
  }
}/可以break跳出
```

**数组新增方法：**

​	**keys()** 索引

​	**value()** 值

​	**entries()** 所有

```javascript
let colors = ["red","blue","pink","yellow"];

for(let color of colors.keys()){
    console.log(color);
}
```



#### 生成器 Generator

##### 基础语法 : `function* fn(){}  ` `yield` 

```javascript
function* fn(){ /普通函数，如果没有return语句 就会从头到尾执行下来 
    yield "111";/碰到yield语句会暂停  将yield语句后面的输出到。next()的value里面
    yield "222";
    yield "333";  
}

const people = fn();/函数执行完会返回一个迭代器 调用people.next()
```

**可以通过next()传参**  如果不传值整个yield语句就是undefined

```javascript
 function* fn(x){         /x=4
     var y = yield (x+2); /y=6
     var z = yield (y/3); /z=10
     return x + y + z;
 }

const it = fn(4);
console.log(it.next());
console.log(it.next(6));
console.log(it.next(10));
```



**for of 循环** 

```javascript
function* fn(){
    yield "111";
    yield "222";
    yield "333";  
}

const people = fn();

for(var person of people){
    console.log(person); /打印出 111 222 333 
}
```

**在对象中创建自定义的迭代器 **

```javascript
let obj = {}
obj[Symbol.iterator] = function* fn(){
  yield 1;
  yield 2;
  yield 3;
}
for (const iterator of obj) {
  console.log(iterator);/打印出 1  2  3
}
```



