## react组件



通过ES6 的class语法来创建组件

```js
class Header extends  React.Component { // 通过extends关键字来继承react的组件
  	render() {//render 函数内 return jsx语法
        return <p>I am a header</p>
    }
}

const jsx = (
    <div>
        <Header></Header>
    </div>
)

let app = document.getElementById('app');
ReactDOM.render(jsx, app)// 渲染到app组件中
```



嵌套组件

```jsx
class MyApp extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Action></Action>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>帮你做决定</h1>
                <p>把命运交给电脑吧</p>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
                <button>随机输出一个选项</button>
            </div>
        )
    }
}


let app = document.getElementById('app');
ReactDOM.render(<MyApp></MyApp>, app)// 渲染到app组件中
```



