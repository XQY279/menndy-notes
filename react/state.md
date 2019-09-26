## 组件的state用法

```jsx
class MyApp2 extends React.Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this)
        this.minus = this.minus.bind(this)
        this.reset = this.reset.bind(this) //改变事件函数的this指向
        this.state = { //定义数据
            count: 0, 
        };
    }
    add(){
        this.setState((state, props) => { //要通过this.setState() 来改变数据 它是异步的
          //这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
            return{//返回一个对象
                count: state.count+1
            }
        })
    }
    minus(){0
        this.setState((state, props) => {
            return{
                count: state.count-1
            }
        })
    }
    reset(){
        this.setState({count: 0}) //也可以传一个对象
    }
    render(){
        // console.log(this)
        return(
            <div>
                <h1>Count:{ this.state.count }</h1>
                <button onClick={ this.add }>+1</button>
                <button onClick={ this.minus }>-1</button>
                <button onClick={ this.reset }>reset</button>
            </div>
        )
    }
}

```

