## 常见元素：HTML5表单元素

**表单元素**

```html
    <form action="xxxx.aspx" method="get">
		action="xxxx.aspx"   表单里的元素提交页面
		method="get"  传值方式
		get  传比较小的数据
		post  数据较多的安全系数较高的
	<input type="text"> 文本输入框
    <input type="radio"> 小圆点 （当name值相同时只能单选）
	<input type="checkbox"> 一般用于复选框
    <input type="submit"> 提交按钮
    <input type="password"> 密码框
    <input type="button"> 普通的按钮
    <input type="file"> 上传文件  属性：multiple上传多个文件
	<input type="tel"> 电话输入框
    <input type="range" max="100" min="0" step="2"> 进度条
				属性：min 最小数字  max 最大数字  step 变换步长
    <input type="number"> 数字
    <input type="email"> 电子邮箱
    <input type="date"> 年月日
    <input type="month"> 年月
    <input type="week"> 年周
    <input type="time"> 时间
    <input type="datetime-local"> 表示本地时间和日期
    <input type="color"> 调出颜色面板
    <textarea name="text" cols="50" rows="20"></textarea>
			多行输入框   cols宽度 rows高度
	<input type="text" autofocus="autofocus"> autofocus="autofocus" 自动获取焦点（光标）
	<input type="reset">	 重置
	<input type="submit">	提交
```

**属性：**

​	placeholder 提示  （在输入框中提示该输入的内容）

```html
        <input type="tel" placeholder="请输入电话号码">
```

​	pattern 验证input 类型输入框中内容是否与正则匹配

```html
        <input id="test" type="text" pattern="^\d{6}$">

```

​	文本框下拉菜单

```html
<form autocomplete="on"> <!-- autocomplete="on" 自动筛选-->
    <input type="text" list="taglist">
<datalist id="taglist">
    <option>test</option>
</datalist> 
</form>

```

​	在表单标签外提交

```html
<form action="index.aspx" method="post" id="form1"> <!--在表单标签外提交-->
<input type="text" name="username">
<input type="text" name="pwd" formaction="index1.aspx"> 
<!--formaction="index1.aspx" 将文本框内数据单独提交到新页面--> 
<input type="submit"> 
</form>
<input type="password" form="form1">


```

