## 生命周期函数

`componentDidMount()` 方法会在组件已经被渲染到 DOM 中后运行

`componentWillUnmount()` 会在组件卸载及销毁之前直接调用。

`componentDidUpdate()` 会在更新后会被立即调用。首次渲染不会执行此方法。

> 只有class组件有生命周期， function组件没有生命周期

```jsx
componentDidUpdate(prevProps) {
  // 典型用法（不要忘记比较 props）：
  if (this.props.userID !== prevProps.userID) {//如果上一次的值 与 这次的值不等的时候再执行
    this.fetchData(this.props.userID);
  }
}
```



