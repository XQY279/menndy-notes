## 创建项目并使用React 

**官网**：<https://zh-hans.reactjs.org/>



CDN：

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<!--react 核心--> 
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script><!--react DOM 运行在网页端  nactive运行在APP端--> 
```



开启本地服务器：

通过NPM下载`live-server`包

```js
npm install -g live-server
```

通过`live-server <fileName>/` 来开启服务器



**JSX 语法** : JavaScript XML

将DOM渲染到页面中

```jsx
console.log(React)
console.log(ReactDOM)

const template = <div>    //jsx
    <h1>this is a h1</h1> //react底层会通过 React.createElement() 创建标签
    <p>this is a p</p>
</div>;

const root = document.getElementById('app');

ReactDOM.render(template, root) 
//通过React.reader()渲染到页面中 第一个参数模板 第二个参数要渲染到的根节点
```



**要使用babel将jsx语法转换为js语法**

通过 `npm init` 创建一个项目说明书

通过 `npm install @babel/core @babel/cli @babel/preset-env @babel/preset-react --save-dev` 安装babel 将 jsx 转换为 js 

在`package.json` 文件中设置`script`属性来设置脚本

```json
"scripts": {
    "babel": "babel"
  }
```

创建文件名为 `.babelrc` 的配置文件

```js
{
    "presets": ["@babel/preset-env", "@babel/preset-react"] //使用的babel工具
}
```

最后通过`npm run babel -- src/app.js -o public/scripts/app.js -w` 进行语法转换 `-w`是监听

 						  *入口文件*               *出口文件* 



