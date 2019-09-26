## react cli构建项目

中文文档：  https://www.html.cn/create-react-app/docs/getting-started/ 

```js
npx create-react-app my-app
cd my-app
npm start
```



#### 入口文件

入口文件 默认为`src.index.js`

> 引入`React` `ReactDOM` 
>
> 需要通过`ReactDOM.render(component, Root)`函数将根组件渲染到HTML中

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import MyApp from './components/MyApp'

ReactDOM.render(<MyApp/>, document.getElementById('root'))
```



#### 组件化

> 每个组件必须引入`React`，因为最后会编译成 `React.createElement(component, props,...children)` 

```jsx
import React from 'react';

Header.defaultProps = {
    title:"帮你做决定",
    subTitle: ""
}

export default function Header(props){ //需要将每个组件暴露出去
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subTitle}</h3>
        </div>
    )
}
```

