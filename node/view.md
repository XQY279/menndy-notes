## 模板引擎

安装依赖  `npm install swig --save` 

链接 ： https://blog.csdn.net/u010238381/article/details/79831554

##### 在项目views文件夹里建以下文件

Layout.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>{% block title %}{% endblock %}</title>
    {% block head %}{% endblock %}
</head>
<body>
    {% block content %}{% endblock %}
</body>
</html>
```



Index.html

在layout.html模板页面里面定义很多block，而子页面可以有选择性的实现。

```html
{% extends 'layout.html' %}
 
{% block title %}index {{title}} {% endblock %}
 
{% block head %}
<link rel="stylesheet" href="stylesheets/index.css">
{% endblock %}
 
{% block content %}
<p>这是我填充的内容</p>
{{data}}
{% endblock %}
```

index放在public/stylesheets 里



app.js

```javascript
var express = require("express");
var swig = require('swig');
var app = express();
 
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
 
app.use(express.static('public'));
 
app.get("/index", function(req, res, next) {
  res.render('index', {
      title: '测试首页',
      data: 'Hello Express'
  });
});
app.listen(3000, function() {
    console.log('接口已启动...');
});
```



