## 数据渲染与form表单

```jsx
const obj = {
    title: "帮你决定",
    subtitle: "把你的命运交给电脑吧",
    options: ['option1', 'option2']
}

const showOpthions = (options) => {
    if(options && options.length > 0){
        return '这些是options'
    }else{
        return '没有options'
    }
}

const formSubmit = (e) => {
    e.preventDefault() //取消form表单的默认事件
    var option = e.target.elements.option.value;   //获取input输入的值
    if(option){
        obj.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
}

const removeAll = () => {
    obj.options = [];
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{obj.title}</h1>
            <p>{obj.subtitle}</p>
            <p>{showOpthions(obj.options)}</p>
            <p>{obj.options.length}</p>
            <button onClick = { removeAll }> remove all </button>
            <ol>
                {    //将数组中的每一个元素渲染到每一个li中
                 obj.options.map((options, index) => { 
                   	//通过数组的map方法遍历整个数组，为每个元素生成回调
                          return <li key={index}>{options}</li> //每个li都要有唯一的key值
                    })
                }                
            </ol>
            <form onSubmit = {formSubmit}>
                <input type="text" name="option"/>给input命名方便DOM的获取
                <button>添加选项</button>
            </form>
        </div>  
    )
    const root = document.getElementById('app');
    ReactDOM.render(template, root)
}
render();
```

