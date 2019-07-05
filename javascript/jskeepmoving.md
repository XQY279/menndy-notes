

## 数组结构赋值与对象解构赋值

**数组解构赋值**： let [a,b,c] = ary;

```javascript
let ary = [1,2,3];
let a = ary[0];
let b = ary[1];
let c = ary[2];/原始方法

let ary = [1,2,3];        
let [a,b,c] = ary;/es6 方法
console.log(b) //2
```

**注意事项：** 

​	必须要进行初始化

​	可以在解构中忽略一些项

​	**互换两个变量**的值

```javascript
let x =1;
let y =2;
let temp;
temp = x;
x = y;
y = temp;/原始方法

let x =1;
let y =2;
[x,y] = [y,x]; /es6方法
```



**默认值：** 当指定位置的项不存在走默认值  

​		指定位置的值严格等于undefined走默认值

```javascript
let [x=10, y=20] = []
console.log(x, y); /10,20   当赋值为undefined时走默认值

let [x=10, y=20] = [1, 2]
console.log(x, y); /1,2   当不为undefined时走赋值
```



**对象解构赋值：**  

​	基本语法 : 字面量对象 = 字面量对象

```javascript
let name = "xiangqingyuan";
let obj  ={
    name,/当属性值和属性名一样时 可以缩写成一个 与 name: name相等
}
```

```javascript
let {name:name1,age:age1} = {name:"xiangqingyuan",age:18}
console.log(name1,age1);
```

**注意事项：** 

​	必须要进行初始化

​	在赋值的时候使用解构赋值

```javascript
let name1,age1;/在上面声明
({name:name1,age:age1} = {name:"xiangqingyuan",age:18});
	/在上面声明变量，赋值时要用小括号包起来，否则被识别为代码块
console.log(name1,age1);
```

​	解构赋值表达式的值是表达式右侧的值

```javascript
	function fu(value){
            console.log(value);  /{name: "xiangqingyaun", age: 18}
        }
    let obj = {
        name:"xiangqingyaun",
        age:18,
    }
    fu({name,age} = obj);
```

如果赋值严格等于undefined的时候走默认赋值



**混合解构：对象和数组组合使用** :

模式匹配：左右模式互相对应，相等

```javascript
let {age: [a, b, c]} = {age: [1, 2, 3]}
console.log(a, b, c); /1, 2, 3
```





