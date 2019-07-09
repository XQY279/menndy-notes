## Node.js函数

#### 函数的概念

- 在JavaScript中，一个函数可以作为另一个函数的参数
- 我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数
- Node.js中的函数的使用与JavaScript类似

```js
function say(word){
    console.log(word);//输出 Hello
}

function execute(someFunction, value){
    someFunction(value)
}

execute(say, 'Hello') 
```



#### 匿名函数

- 我们可以把一个函数作为变量传递
- 不一定“ 先定义，在传递 ” 可以直接在另一个函数的括号中定义和传递这个函数

```javascript
function execute(someFunction, value){
    someFunction(value);
}
execute(function(word){
    console.log(word); //输出 Hello
}, 'Hello')
```

