## PHP PDO

PHP 数据对象 （PDO） 扩展为PHP访问数据库定义了一个轻量级的一致接口。

[PDO](https://www.runoob.com/php/php-pdo.html) 提供了一个数据访问抽象层，这意味着，不管使用哪种数据库，都可以用相同的函数（方法）来查询和获取数据。

PDO随PHP5.1发行，在PHP5.0的PECL扩展中也可以使用，无法运行于之前的PHP版本。

```php
<?php
header('Content-Type: text/html;charset=utf-8');
$dbms='mysql';     //数据库类型
$host='localhost'; //数据库主机名
$dbName='phplesson';    //使用的数据库
$user='root';      //数据库连接用户名
$pass='';          //对应的密码
$dsn="$dbms:host=$host;dbname=$dbName"; //链接串
try{
    $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象
    echo "链接成功";
    foreach ($dbh->query("SELECT * from `news` WHERE 1") as $row) { //query() 可以执行任何的增删改查;  $row每一行
        print_r($row); //你可以用 echo($GLOBAL); 来看到这些值； print_r对当前的row进行打印
    }

    $query = "INSERT INTO `news`(`newstitle`, `newsimage`, `newstontent`, `addtime`) VALUES ('titleeeee','imageeee','contenttttt', '2019-3-3')";
    $res = $dbh->exec($query); //会返回受影响的行数
    echo "添加成功:受影响的行数".$res;
    $dbh = null; //记得关闭连接

}catch(PDOException $e){
    die("Error" . $e->getMessage());
}
?>
```

