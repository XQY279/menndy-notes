## 组件之间传值

##### 子组件触发父组件事件

```jsx
class MyApp extends React.Component{ //父组件
    constructor(props){
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.state = {
            options : ["张三", "李四", "王二", "六六"]
        }
    }
  	handleAddOption(option){
        this.setState(state => {
            return{
                options: state.options.concat([option])
              	//不能用push方法直接改变原来的值 使用的方法不能直接改变旧的值 必须返回新的值
            }
        })
        console.log(option)
    }
    handleRemoveAll(){
        console.log("删除所有")
        this.setState((value, props)=>{
            return{
                options: []
            }
        })
    }
    render(){
        const title = "帮你决定";
        const subTitle = "把命运交给电脑吧";
        return(
            <div>
                <Header title={title} subTitle={subTitle}></Header>
                <Options 
                  options={this.state.options} 
                  handleRemoveAll={this.handleRemoveAll}
                ></Options>
     <!--通过自定义属性将函数传到子组件中   子组件通过this.props可以获取到-->
             		<AddOptions 
               		handleAddOption={this.handleAddOption}
                 ></AddOptions>

                <Action hasOptions={this.state.options.length > 0}></Action>
            </div>
        )
    }
}

```



```jsx
class Options extends React.Component{ //子组件
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <button onClick={this.props.handleRemoveAll}>清除所有</button>
            		<!--子组件 获取到父组件传过来的函数 执行即可即可改变父组件的值-->
                <ul>
                    {this.props.options.map((item, index) => <Option option={ item } key={ index }></Option>)}
                </ul>
            </div>
        )
    }
}
```



```jsx
class AddOptions extends React.Component{ //子组件
    constructor(props){
        super(props);
        this.addOption = this.addOption.bind(this);
    }
    addOption(e){
        e.preventDefault()
        let option = e.target.option.value
        if(option){
            this.props.handleAddOption(option) //将子组件的值传给父组件
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.addOption}>
                    <input name="option" type="text"/>
                    <button type="submit">添加选项</button>
                </form>
                    
            </div>
        )
    }
}
```

