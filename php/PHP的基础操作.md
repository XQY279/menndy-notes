# PHP的基础操作



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
    session_start();
    $_SESSION['views'] = 100;
?>
```



```php
<?php 
session_start();
echo $_SESSION['views']; //输出100
?>
```

