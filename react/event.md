## 属性与事件

**属性**

```jsx
<button type="button" id={myId} className="button">+</button>
		可以像HTML一样写ID,属性值也可以是表达式，但是class要写成className
```

##### 自定义属性传值

> 通过props接收，可以是普通的数据类型 也可以是jsx语法

```jsx
function Layout(props){
    return(
        <div>
            <p>头</p>
            {props.content}
            <p>尾</p>
        </div>
        
    )
}
ReactDOM.render(<Layout content={<p>body</p>}/>, document.getElementById('root'))
```



##### 插槽

> 将要传的元素放在标签内，子组件通过 `props.children` 来接受

```jsx
function Layout(props){
    return(
        <div>
            <p>头</p>
            {props.children}
            <p>尾</p>
        </div>
        
    )
}

ReactDOM.render(<Layout content={1}><p>body</p></Layout>, document.getElementById('root'))
```



**事件**

```jsx
<button 
    type="button" 
    id={myId} 
    className="button" 
    onClick={ ()=> {console.log('add 1')}} 绑定事件，所有的事件都是驼峰是写法
 >+</button>
```



> react的数据与UI 并不是响应式的，如果数据发生改变的时候一定要通过 ReactDOM.render() 这个函数从新渲染

```jsx
let count = 0;
let myId = 'only'

const add = () => {
    count++;
    renderCountApp(); //当点击过后要执行该函数从新渲染模板
}

const renderCountApp = () => {
    const templateThree = (
        <div>
            <h1>{ count }</h1>
            <button 
                type="button" 
                id={myId} 
                className="button" 
                onClick={add}
            >+</button>
        </div>
    )
    const root = document.getElementById('app');
    ReactDOM.render(templateThree, root)
}
renderCountApp(); //首先要执行函数才能渲染出来
```

> 它只会重新渲染改变了的DOM，并不会全部重新渲染

