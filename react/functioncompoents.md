## 函数组件 与 默认props

定义组件最简单的方式就是编写 JavaScript 函数：statesless functionnal component

函数组件没有`state`属性

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

该函数是一个有效的 React 组件，因为它接收唯一带有数据的 “props”（代表属性）对象与并返回一个 React 元素。这类组件被称为“函数组件”，因为它本质上就是 JavaScript 函数。

你同时还可以使用 [ES6 的 class](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes) 来定义组件：

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

上述两个组件在 React 里是等效的。



**设置props的默认值**  `.defaultProps`  函数组件与class组件都可以用该方法定义默认的props

```jsx
function Header(props){ //函数组件
    return(
        <div>
            <h1>{ props.title }</h1>
            <p>{ props.subTitle } 函数组件</p>
        </div>
    )
}
Header.defaultProps={ //设置默认的props 当不传值的时候使用默认值
    title: "我是默认标题"
}
```

```jsx
class Header extends React.Component{ //class组件
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>{ this.props.title }</h1>
                <p>{ this.props.subTitle }</p>
            </div>
        )
    }
}
Header.defaultProps={
    title: "我是class组件默认标题"
}
```

##### 改变数组的时候 不能直接改变原来的数组

```jsx
this.setState((value)=>{
  return{
    options: value.options.filter((ele, idx)=>{ //用数组的filter
      if(index == idx){
        return false //不要的项 return false
      }else{
        return true
      }
    })
  }
})
```

