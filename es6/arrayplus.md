## 字符串的扩展

**传统字符串的问题：**

​	多行字符串问题。

​	字符串中使用变量。 

```javascript
let msg = "hellohellohellohellohello\n\
        hellohellohellohello";
/用原方法定义字符串 换行时会报错，要用\n\进行连接，但是有空格;
/或者用加号 字符串拼接，
```

​	

**ES6新方法**解决上述问题

```javascript
//反引号 `字符串`    解决多行字符串问题
	let msg = `hello
	hello
	hello`;  //可以随意换行，不用进行拼接

//替换位的使用 ${}    解决字符串中使用变量
	let age = 10;
    let msg = `pink ${age}  也可以在大括号中写表达式
	pink
	pink`;
```



实例：模拟从服务器获取数据添加到 页面

```javascript
let arr = [{
            title:"VUE CONF大会之后的感想(非技术)",
            like:"200",
        },
        {
            title:"三行代码实现 JS 柯里化",
            like:"300",
        },
        {
            title:"赶上 ECMAScript 潮流：用现代 JavaScript 编程",
            like:"400",
        },
        {
            title:"Cookbook：优化 Vue 组件的运行时性能",
            like:"500",
        },
        {
            title:"Typescript版本VUE+组件封装+最简单的策略模式",
            like:"600",
        },]
 
        let myul = document.getElementById('myul');
        let html = "";
        arr.forEach(function(item){
            html+=`
            <li>
                <h3>${item.title}</h3>
                <p>${item.like}</p>
            </li>`
        })
        myul.innerHTML = html;
```



**字符串拓展方法**:

**String.prototype.includes("要查找的字符"，索引值从第几位开始查找)**   

​	判断一个字符或一串字符是否在当前的字符串内 返回true/flase

```javascript
let msg = "hello";
console.log(msg.includes("o"));/返回布尔值
```



**String.prototype.startsWith("要查找的字符"，索引值从第几位开始查找)**  判断字符串是否是以某某开头

```javascript
let msg = "hello";
console.log(msg.startsWith("h"));/判断是否是以h开头
```

**String.prototype.endsWith** ("要查找的字符"，索引值前的字符) 判断字符串是否是以某某结尾



**String.prototype.repeat(重复的次数)**  重复一段字符串

