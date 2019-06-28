# PHP接收请求



### 引入PHP文件

`require_once()` 与 `include_once()`  :

> 两者区别 前者如果引用路径发生错误会全员报错影响执行，后者报错但不影响当前文件的执行

```php
a.php

<?php
    $GLOBALS['b'] = "i am b"  //$GLOBALS 在左右PHP文件中当前代码生效
?>
```

```php
index.php
  
<?php
    require_once('a.php');
    echo $GLOBALS['b']; //输出 i am b
?>
```





### PHP Session

当您运行一个应用程序时，您会打开它，做些更改，然后关闭它。这很像一次会话。计算机清楚你是谁。它知道你何时启动应用程序，并在何时终止。但是在因特网上，存在一个问题：服务器不知道你是谁以及你做什么，这是由于 HTTP 地址不能维持状态。

通过在服务器上存储用户信息以便随后使用，PHP session 解决了这个问题（比如用户名称、购买商品等）。不过，会话信息是临时的，在用户离开网站后将被删除。如果您需要永久储存信息，可以把数据存储在数据库中。

Session 的工作机制是：为每个访问者创建一个唯一的 id (UID)，并基于这个 UID 来存储变量。UID 存储在 cookie 中，亦或通过 URL 进行传导。



#### 开始Session

在您把用户信息存储到 PHP session 中之前，首先必须启动会话

**注释：**session_start() 函数必须位于 <html> 标签之前：

```php
<?php session_start(); ?>

<html>
<body>

</body>
</html>
```

上面的代码会向服务器注册用户的会话，以便您可以开始保存用户信息，同时会为用户会话分配一个 UID。



```php
a.php
<?php
    session_start();//开启会话
    $_SESSION['views'] = 100; //设置内容
?>
```



```php
<?php 
session_start();
echo $_SESSION['views']; //输出100
?>
```



#### 超全局变量

- $_REQUEST
- $_POST
- $_GET

```html
<form action='a.php' method="POST">
    <input type="text" name="username">
    <button type="submit" >提交</button>
</form>
```

```php
a.php
  
<?php
    header("Content-type:text/html;charset=utf-8"); //设置请求头
    $username = $_POST['username']; //接收请求$_GET 使用方法一致
    if($username == 'admin'){
        echo '<h1>登陆成功</h1>',$username  ;
    }else{
        echo '登录失败';
    }
?>
```

**使用ajax发送请求**

```html
<form>
    <input type="text" id="username"> <!--admin-->
    <input type="text" id="password"> <!--123-->
    <button id="submit" >提交</button>
</form>
<script>
    $('#submit').click(function (e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'a.php',
            data:{
                username: $('#username').val(),
                password: $('#password').val(),
            },
            success: function(data){
                console.log(data)//会返回{username: "admin", password: "123"}
            },
            error: function (err) {
                console.log(err)
            },
            dataType: 'json', //发送的数据类型
        })
    });
</script>
```

```php
<?php
    header("Content-type:application/json;charset=utf-8");
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    if($username == 'admin'){ //判断用户名是否是123
        echo json_encode(array('username'=> $username, 'password'=> $password)); //如果登陆成功 该字段会返回给前端
    }else{
        echo '登录失败'; //否则返回他
    }
?>
```

