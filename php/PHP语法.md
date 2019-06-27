# PHP语法

**PHP**（外文名:PHP: Hypertext Preprocessor，中文名：“超文本预处理器”）是一种通用开源脚本语言。语法吸收了C语言、Java和Perl的特点，利于学习，使用广泛，主要适用于Web开发领域。PHP 独特的语法混合了C、Java、Perl以及PHP自创的语法。它可以比CGI或者Perl更快速地执行动态网页。用PHP做出的动态页面与其他的编程语言相比，PHP是将程序嵌入到HTML（标准通用标记语言下的一个应用）文档中去执行，执行效率比完全生成HTML标记的CGI要高许多；PHP还可以执行编译后代码，编译可以达到加密和优化代码运行，使代码运行更快。



> 使用xampp开启服务 所有的文件要放在软件目录的 `htdocs` 文件夹下



### 基础语法

1. PHP 文件的扩转名是 `.php`
2. PHP 脚本以 `<?php` 开始，以 ` ?> ` 结束
3. PHP 文件通常包含 HTML 标签和一些 PHP 脚本代码
4. 每段代码一定要以`;`结束否则会报错

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
    if(1 > 2){
        echo "我是第一个PHP脚本";
    }else{
        echo "Hello PHP"; //echo 相当于在页面输出； 输出Hello PHP
    }
?>
</body>
</html>
```



### 变量

变量是存储信息的容器：

##### 实例

```php
<?php
$x=5; //遵循块级作用域{}
$y=6;
$z=$x+$y;
echo $z; //输出11
?>
```

**类似代数**

```
x=5
y=6
z=x+y
```

在代数中我们使用字母（比如 x）来保存值（比如 5）。从上面的表达式 z=x+y，我们能够计算出 z 的值是 11。

在 PHP 中，这三个字母被称为*变量*。

**注释：**请把变量视为存储数据的容器。

##### PHP 变量规则：

1. 变量以 $ 符号开头，其后是变量的名称
2. 变量名称必须以字母或下划线开头
3. 变量名称不能以数字开头
4. 变量名称只能包含字母数字字符和下划线（A-z、0-9 以及 _）
5. 变量名称对大小写敏感（$y 与 $Y 是两个不同的变量）
6. 遵循块级作用域

**注释：**PHP 变量名称对大小写敏感！

可以通过 `isset()` 判断变量是否被声明

```php
$a = 1;
if(isset($a)){
  echo $a;
}
```



##### PHP 变量作用域

在 PHP 中，可以在脚本的任意位置对变量进行声明。

变量的作用域指的是变量能够被引用/使用的那部分脚本。

PHP 有三种不同的变量作用域：

- local（局部）
- global（全局）
- static（静态）



##### Local 和 Global 作用域

函数*之外*声明的变量拥有 Global 作用域，只能在函数以外进行访问。

函数*内部*声明的变量拥有 LOCAL 作用域，只能在函数内部进行访问。



##### global关键字

global 关键词用于在函数内访问全局变量，要做到这一点，请在（函数内部）变量前面使用 global 关键词：

```php
<?php
$x=5;
$y=10;

function myTest() {
  global $x,$y; //使用global 关键字 函数内才可以访问到函数外额变量
  $y=$x+$y;
  echo $y;
}

myTest();// 输出 15
?>
```

PHP 同时在名为` $GLOBALS[index] `的数组中存储了所有的全局变量。下标存有变量名。这个数组在函数内也可以访问，并能够用于直接更新全局变量。 

```php
<?php
$x=5;
$y=10;

function myTest() {
  $GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];
} 

myTest();
echo $y; // 输出 15
?>
```

