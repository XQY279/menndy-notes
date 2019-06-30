## PHP与MySQL

#### 连接到一个 MySQL 数据库

[PHP链接数据库](http://www.w3school.com.cn/php/php_mysql_connect.asp)

在您能够访问并处理数据库中的数据之前，您必须创建到达数据库的连接。

在 PHP 中，这个任务通过` mysqli_connect()` 函数完成。

#### 语法

```php
mysqli_connect(servername,username,password);
```

| 参数       | 描述                                                         |
| :--------- | :----------------------------------------------------------- |
| servername | 可选。规定要连接的服务器。默认是 "localhost:3306"。          |
| username   | 可选。规定登录所使用的用户名。默认值是拥有服务器进程的用户的名称。 |
| password   | 可选。规定登录所用的密码。默认是 ""。                        |

```php
<?php
    $con = mysqli_connect("localhost","root","");
    if(!$con){
      die('Could not connect: ' . mysql_error());
    }else{
        echo "MySQL OK"; //链接成功的时候输出
    }
?>
```



#### PHP与数据库的增删改查 

增删改查命令详见[点击这里](../mysql/phpandmysql.md) 

[`mysqli_select_db(mysqli $link , string $dbname)`](https://www.php.net/manual/en/mysqli.select-db.php) 

```php
mysqli_select_db ( mysqli $link , string $dbname ) //第一个参数 数据库的链接，第二个 数据库表名
```



`mysqli_query ` 对数据库执行一次查询

```php
mysqli_query ( mysqli $link , string $query) 
```

| 参数  | 描述                                            |
| :---- | ----------------------------------------------- |
| link  | 数据库的链接                                    |
| query | 对数据库发送命令的字符串 (增删改查操作的string) |

**增加** 

```php
<?php
    $con = mysqli_connect("localhost","root",""); //连接到数据库
    if(!$con){
      die('Could not connect: ' . mysql_error());
    }else{
        mysqli_select_db( $con, "phplesson");//选择哪个数据库 注意是数据库的名字 不是表名
        $sql = "INSERT INTO `news`(`newstitle`, `newsimage`, `newstontent`, `addtime`) VALUES ( 'title4', 'image4', 'content4', '2019-2-22')";

        mysqli_query($con, $sql); //对数据库进行一次查询 $sql:要执行的命令字符串(增删改查)

    }
    mysqli_close($con); //关闭与数据库的链接
?>
```



#### 实例：

```html
<body>
    <form action="mysql.php" method="POST">
        <label for="">新闻标题</label>
        <input type="text" name="newstitle" id="newstitle"><br>
        <label for="">图片地址</label>
        <input type="text" name="newsimage" id="newsimage"><br>
        <label for="">新闻内容</label>
        <textarea rows="5" cols="30" type="text" name="newstontent" id="newstontent"></textarea><br>
        <label for="">上传时间</label>
        <input type="date" name="addtime" id="addtime"><br>
        <input type="submit" value="submit" id="submit">
        <input type="reset" value="reset">
    </form>
</body>
```

```php
<?php
    header("Content-type:application/json;charset=utf-8");
    $con = mysqli_connect("localhost","root","");
    if(!$con){
      die('Could not connect: ' . mysqli_error($con));
    }else{
        mysqli_select_db( $con, "phplesson");//选择哪个数据库
        mysqli_query($con, "SET NAMES 'utf8'");
        $newstitle = $_REQUEST['newstitle'];
        $newsimage = $_REQUEST['newsimage'];
        $newstontent = $_REQUEST['newstontent'];
        $addtime = $_REQUEST['addtime'];
        $sql = "INSERT INTO `news`( `newstitle`, `newsimage`, `newstontent`, `addtime`) VALUES ('".
                                    $newstitle."','".$newsimage."','".$newstontent."','".$addtime."')";//注意'' 字符串的拼接
        $result = mysqli_query($con, $sql);
        if($result){
            echo 'success';
        }else{
            die("error" . mysqli_error($con));
        }


    }
    mysqli_close($con);
?>
```

