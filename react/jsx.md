## JSX语法 条件渲染

JSX 语法中DOM必须有一个根节点

```jsx
const template = (  //jsx 语法中可以将HTML标签放在括号中
    <div>
        <h1>i am h1</h1>
        <p>i am a p</p>
        <h2>我是👌</h2>
        
    </div>
)
```



通过`{}`将变量渲染到jsx中的HTML标签中

```jsx
let user = 'xiangqingyuan',
    age = 19,
    city = 'beijing' //声明变量
//也可以渲染对象

const templateTwo =(
    <div>
        <h1>{user}</h1> //在HTML中通过 {} 的形式可以写js表达式
        <p>{age}</p>
        <p>{city}</p>
    </div>
)
```



##### 条件渲染

1. 函数执行 if语句
2. 三目运算符
3. 逻辑与算符

```jsx
const user = {
    name: 'xiangqignyuan',
    age: 19,
    city: 'beijing'
}
const shoeLocation = () => { //如果有city字段就将city渲染到p标签中，否则不渲染
    if(user.city){
        return  <p>{user.city}</p>
    }else{
        return undefined
    }
}
const templateTwo =(
    <div>
        <h1>{user.name ? user.name : "匿名"}</h1>  // 如果有name就渲染name 否则渲染匿名
        {user.age >= 18 && <p>{user.age}</p>} 如果小于18 就是返回空。否则返回p
        {shoeLocation()} //函数执行
    </div>
)
```

