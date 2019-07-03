## PHP抽象类与接口

#### 抽象方法和抽象类

当类中有一个方法，他没有方法体，也即是没有花括号`{}`，直接分号结束，像这种方法我们叫抽象方法，必须使用关键字`abstract`定义。

```php
abstract protected function getValue();
```

包含这种方法的类必须是抽象类，也要使用关键字`abstract`定义。(即使用关键字abstract的类为抽象类)

##### 抽象类的特点：

- 不能实例化，也就是不能new成对象
- 若想使用抽象类，就必须定义一个类去继承这个抽象类，并定义覆盖父类的抽象方法(实现抽象方法)。

```php
<?php
// 1. 含有抽象方法的类必须是抽象类
// 2. 抽象类不一定非得含有抽象方法
// 3. 抽象类可以存在普通的方法
// 4. 抽象类不能被实例化，必须由一个子类去继承，并且把抽象类的抽象方法都实现
abstract class Person {
    public abstract function eat(); //抽象方法没有 {} 方法体
}
class Man extends Person{
    function eat(){
        echo "eat";
    }
}
$man = new Man();
$man -> eat();
?>
```





#### 接口

PHP与大多面向对象编程一样，不支持多重继承，也就是说每个类只能继承一个父类，为了解决这个问题PHP引入了接口，接口的思想是指定了一个实现了该接口的类必须实现的一系列函数

##### 定义格式

```php
interface 接口名称{
	//常量成员 (使用const关键字定义)
  //抽象方法(不需要使用abstract关键字)
}
```

##### 使用格式

```php
class 类名 implements 接口名1,接口名2{
  ... ...
}
```

```php
/接口： 
// 1. 接口声明的关键字是interface
// 2. 接口可以声明常量也可以抽象方法
// 3. 接口中的方法都是抽象方法 必须被实现
// 4. 接口不能被实例化， 需要一个类实现它
// 5. 一个类不能继承多个类，但是一个类可以实现多个接口


interface Person{
    const Name = "Menndy";
    public function run();
    public function eat();
}
interface Study{
    public function study();
}
class Student implements Person, Study{
    public function run(){
        echo 'run'.'<br>';
    }
    public function eat(){
        echo 'eat'.'<br>';
    }
    public function study(){
        echo 'study'.'<br>';
    }
}
$man = new Student();
$man -> run();
$man -> eat();
$man -> study();
echo $man::Name; //:: 静态的变量 

输出：
  run
  eat
  study
	Menndy
```



#### 区别

当你关注一个事物的本质的时候，用抽象类；当你关注一个操作的时候，用接口。

接口是对动作的抽象，表示这个对象能做什么，对类的整体进行抽象。

抽象类是对根源的抽象，表示这个类是什么，对类的整体进行抽象，对一类事物的抽象描述。

> 比如：男人、女人 这两个类(如果是类的话)，他们的抽象是人。说明他们都是人，人可以吃东西，狗也可以吃东西，你可以把 “吃东西” 定义成一个接口，然后让这些类去实现它。

所以，在高级语言上，一个类只能继承一个类（抽象类）（正如人不可能同是生物又是非生物），但是可以实现多个接口（吃饭接口，走路接口）。

- [x] 接口是抽象类的变体，接口中所有的方法都是抽象的，而抽象类是声明方法存在的存在而不去实现的类
- [x] 接口可多继承，抽象类不行
- [x] 接口定义的方法不能实现，而抽象类可以实现部分方法
- [x] 接口中基本的数据类型为static而抽象类不是
- [x] 接口中不能含有静态代码块及静态方法，而抽象类可以含有静态方法和静态代码块



