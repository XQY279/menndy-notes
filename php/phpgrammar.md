# PHP语法

- [基础语法](#基础语法) 

- [类型与变量](#类型与变量) 

- [运算符](#运算符) 

- [PHP 变量作用域](#PHP 变量作用域) 

- [运算符](#运算符) 

- [输出](#输出)

- [控制结构](#控制结构) 
- [函数](#函数)
- [导入](#导入) 



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





### 类型与变量

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



1. String（字符串）

```php
// 变量以$开始
// 变量可以以字母或者下划线开头，后面可以跟着数字、字母和下划线

// 字符串需要被包含在单引号之中
$sgl_quotes = 'String'; // => 'String'

// 如果需要在字符串中引用变量，就需要使用双引号
$dbl_quotes = "This is a $sgl_quotes."; // => 'This is a String.'

// 特殊字符只有在双引号中有用
$escaped   = "This contains a \t tab character.";
$unescaped = 'This just contains a slash and a t: \t'; //此行报错

// 可以把变量包含在 ${} 中
$string = 'aaaa';
print "a:${string}"; //=>'a:aaaa'

// 自 PHP 5.3 开始, nowdocs 可以被用作多行非计算型字符串  <<<
//在该运算符之后要提供一个标识符，然后换行。接下来是字符串 string 本身，最后要用前面定义的标识符作为结束标志。
$nowdoc = <<<'END'
Multi line
string
END;

// 而Heredocs则可以用作多行计算型字符串 与 非计算型的差别只是 开头标识符是否有引号的差别
$heredoc = <<<END
Multi line
$sgl_quotes
END;

// 字符串需要用 . 来连接
echo 'This string ' . 'is concatenated';
```



2. Integer（整型）

```php
// 整型
$int1 = 12;   // => 12
$int2 = -12;  // => -12
$int3 = 012;  // => 10 (0开头代表八进制数)
$int4 = 0x0F; // => 15 (0x开头代表十六进制数)
```



3. Float（浮点型）

```php
// 浮点型 (即双精度浮点型)
$float = 1.234;
$float = 1.2e3;
$float = 7E-10;
```



4. Boolean（布尔型） 

```php
// 布尔值是大小写无关的
$boolean = true;  // 或 TRUE 或 True
$boolean = false; // 或 FALSE 或 False
```



5. Array（数组）

```php
// PHP 中的数组都是关联型数组，也就是某些语言中的哈希表或字典

// 在所有PHP版本中均适用：
$associative = array('One' => 1, 'Two' => 2, 'Three' => 3);

// PHP 5.4 中引入了新的语法
$associative = ['One' => 1, 'Two' => 2, 'Three' => 3];

echo $associative['One']; // 输出 1

// 声明为列表实际上是给每个值都分配了一个整数键（key）
$array = ['One', 'Two', 'Three'];
echo $array[0]; // => "One"
```

6. Object（对象）

对象数据类型也可以用于存储数据。

在 PHP 中，对象必须声明。

首先，你必须使用class关键字声明类对象。类是可以包含属性和方法的结构。

然后我们在类中定义数据类型，然后在实例化的类中使用数据类型：

```php
<?php
class Car
{
  var $color;
  function __construct($color="green") {
    $this->color = $color;
  }
  function what_color() {
    return $this->color;
  }
}
?>
```



7. NULL（空值）

NULL 值表示变量没有值。NULL 是数据类型为 NULL 的值。

NULL 值指明一个变量是否为空值。 同样可用于数据空值和NULL值的区别。

可以通过设置变量值为 NULL 来清空变量数据：

```php
<?php
$x="Hello world!";
$x=null;
var_dump($x);
?>
```





### PHP 变量作用域

在 PHP 中，可以在脚本的任意位置对变量进行声明。

变量的作用域指的是变量能够被引用/使用的那部分脚本。

PHP 有三种不同的变量作用域：

- local（局部）
- global（全局）
- static（静态）
- parameter (参数作用域)



#### Local 和 Global 作用域

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

PHP 同时在名为` $GLOBALS[index] `的数组中存储了所有的全局变量。下标存有变量名。这个数组在函数内也可以访问，并能够用于直接更新全局变量。 在所有PHP代码中 该段代码均生效

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



##### Static 关键字

通常，当函数完成/执行后，会删除所有变量。不过，有时我需要不删除某个局部变量。实现这一点需要更进一步的工作。

要完成这一点，请在您首次声明变量时使用 *static* 关键词：

```php
<?php
function myTest() {
   static $x=0;
   echo $x;
   $x++;
}

myTest(); //0
myTest(); //1
myTest(); //2
myTest(); //3
myTest(); //4
?> 
```





### 运算符

```php
// 算数运算
$sum        = 1 + 1; // 2
$difference = 2 - 1; // 1
$product    = 2 * 2; // 4
$quotient   = 2 / 1; // 2

// 算数运算的简写
$number = 0;
$number += 1;      // $number 自增1
echo $number++;    // 输出1 (运算后自增)
echo ++$number;    // 输出3 (自增后运算)
$number /= $float; // 先除后赋值给 $number

```



### 输出

```php
echo('Hello World!');
// 输出到标准输出
// 此时标准输出就是浏览器中的网页

print('Hello World!'); // 和echo相同

// echo和print实际上也属于这个语言本身，所以我们省略括号
echo 'Hello World!';
print 'Hello World!'; 

$paragraph = 'paragraph';

echo 100;        // 直接输出标量
echo $paragraph; // 或者输出变量

// 如果你配置了短标签，或者使用5.4.0及以上的版本
// 你就可以使用简写的echo语法
?>
<p><?= $paragraph ?></p>
<?php

$x = 1;
$y = 2;
$x = $y; // $x 现在和 $y 的值相同
$z = &$y;
// $z 现在持有 $y 的引用. 现在更改 $z 的值也会更改 $y 的值，反之亦然
// 但是改变 $y 的值不会改变 $x 的值

echo $x; // => 2
echo $z; // => 2
$y = 0;
echo $x; // => 2
echo $z; // => 0
```



### 逻辑

```php
$a = 0;
$b = '0';
$c = '1';
$d = '1';

// 如果assert的参数为假，就会抛出警告

// 下面的比较都为真，不管它们的类型是否匹配
assert($a == $b); // 相等
assert($c != $a); // 不等
assert($c <> $a); // 另一种不等的表示
assert($a < $c);
assert($c > $b);
assert($a <= $b);
assert($c >= $d);

// 下面的比较只有在类型相同、值相同的情况下才为真
assert($c === $d);
assert($a !== $d);
assert(1 === '1');
assert(1 !== '1');

// 变量可以根据其使用来进行类型转换

$integer = 1;
echo $integer + $integer; // => 2

$string = '1';
echo $string + $string; // => 2 (字符串在此时被转化为整数)

$string = 'one';
echo $string + $string; // => 0
// 输出0，因为'one'这个字符串无法被转换为整数

// 类型转换可以将一个类型视作另一种类型

$boolean = (boolean) 1; // => true

$zero = 0;
$boolean = (boolean) $zero; // => false

// 还有一些专用的函数来进行类型转换
$integer = 5;
$string = strval($integer);

$var = null; // 空值
```



### 控制结构

```php
if (true) {
    print 'I get printed';
}

if (false) {
    print 'I don\'t';
} else {
    print 'I get printed';
}

if (false) {
    print 'Does not get printed';
} elseif(true) {
    print 'Does';
}

// 三目运算符
print (false ? 'Does not get printed' : 'Does');

$x = 0;
if ($x === '0') {
    print 'Does not print';
} elseif($x == '1') {
    print 'Does not print';
} else {
    print 'Does print';
}


// 用switch来实现相同的逻辑
switch ($x) {
    case '0':
        print 'Switch does type coercion';
        break; // 在case中必须使用一个break语句，
               // 否则在执行完这个语句后会直接执行后面的语句
    case 'two':
    case 'three':
        // 如果$variable是 'two' 或 'three'，执行这里的语句
        break;
    default:
        // 其他情况
}

// While, do...while 和 for 循环
$i = 0;
while ($i < 5) {
    echo $i++;
}; // 输出 "01234"

echo "\n";

$i = 0;
do {
    echo $i++;
} while ($i < 5); // 输出 "01234"

echo "\n";

for ($x = 0; $x < 10; $x++) {
    echo $x;
} // 输出 "0123456789"

echo "\n";

$wheels = ['bicycle' => 2, 'car' => 4];

// Foreach 循环可以遍历数组
foreach ($wheels as $wheel_count) {
    echo $wheel_count;
} // 输出 "24"

echo "\n";

// 也可以同时遍历键和值
foreach ($wheels as $key => $value) {
    echo "key: $key, value $value ";
    echo '<br>';
}
//输出：
//key: bicycle, value 2 
//key: car, value 4 


$i = 0;
while ($i < 5) {
    if ($i === 3) {
        break; // 退出循环
    }
    echo $i++;
} // 输出 "012"

for ($i = 0; $i < 5; $i++) {
    if ($i === 3) {
        continue; // 跳过此次遍历
    }
    echo $i;
} // 输出 "0124"
```





### 函数

```php
// 通过"function"定义函数:
function my_function () {
  return 'Hello';
}

echo my_function(); // => "Hello"

// 函数名需要以字母或者下划线开头, 
// 后面可以跟着任意的字母、下划线、数字.

function add ($x, $y = 1) { // $y 是可选参数，默认值为 1
  $result = $x + $y;
  return $result;
}

echo add(4); // => 5
echo add(4, 2); // => 6

// $result 在函数外部不可访问
// print $result; // 抛出警告

// 从 PHP 5.3 起我们可以定义匿名函数
$inc = function ($x) {
  return $x + 1;
};

echo $inc(2); // => 3

function foo ($x, $y, $z) {
  echo "$x - $y - $z";
}


// 你也可以通过字符串调用函数
$function_name = 'add';
echo $function_name(1, 2); // => 3
// 在通过程序来决定调用哪个函数时很有用
// 或者，使用 call_user_func(callable $callback [, $parameter [, ... ]]);
```



### 导入



```php
<?php
// 被导入的php文件也必须以php开标签开始

include 'my-file.php';
// 现在my-file.php就在当前作用域中可见了
// 如果这个文件无法被导入（比如文件不存在），会抛出警告

include_once 'my-file.php';
// my-file.php中的代码在其他地方被导入了，那么就不会被再次导入
// 这会避免类的多重定义错误

require 'my-file.php';
require_once 'my-file.php';
// 和include功能相同，只不过如果不能被导入时，会抛出错误

// my-include.php的内容:
<?php

return 'Anything you like.';
// 文件结束

// Include和Require函数也有返回值
$value = include 'my-include.php';

// 被引入的文件是根据文件路径或者include_path配置来查找到的
// 如果文件最终没有被找到，那么就会查找当前文件夹。之后才会报错
/* */
```















