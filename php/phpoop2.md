## PHP面型对象的封装性

#### 访问控制

封装性是面向对象编程中的三大特性之一，封装就是把对象中的成员属性和成员方法加上访问修饰符，使其尽可能隐藏对象内部的细节，以达到成员的访问控制 ( 切记不是拒绝访问 )

PHP 对属性或方法的访问控制，是通过在前面添加关键字 public（公有），protected（受保护）或 private（私有）来实现的。

- **public（公有）：**公有的类成员可以在任何地方被访问。
- **protected（受保护）：**受保护的类成员则可以被其自身以及其子类和父类访问。
- **private（私有）：**私有的类成员则只能被其定义所在的类访问。



#### 魔术方法: 

```php
__set(); //在给不可访问属性赋值时，__set() 会被调用。 有两个参数 key 与 value
__get(); //读取不可访问属性的值时，__get() 会被调用。 有一个参数 key
__isset(); //当对不可访问属性调用 isset() 或 empty() 时，__isset() 会被调用。 有一个参数 key
__unset(); //当对不可访问属性调用 unset() 时，__unset() 会被调用。 有一个参数 key
```



```php
<?php
class Person{
    public $name = "Menndy";     //共有的
    private $age = 19;    //私有的
    protected $money = 67878889778; //受保护的

    //这是私有的成员方法，不能在类的外部直接访问，继承的时候也不能被访问
    private function getName(){ 
        return $this-> name;
    }

    //这是被保护的成员方法，不能在类的外部直接访问，继承的时候可以被访问
    protected function getAge(){
        return $this -> age;
    }

    public function userCard(){
        echo $this->getName() . $this->getAge(),'<br>';
    }

    public function __set($key, $value){ //__set() 魔术方法 只针对 保护的变量 和 私有的变量 在外部受变化时调用
        echo $key.">>>>>".$value, '<br>'; //输出： age>>>>>12
        $this -> age = $value;
    }
    public function __get($key){ //当读取不可访问的属性使 执行该方法
        echo '  __get:' . $key, '<br>';
        if($key == 'age'){
            return $this -> age;
        }
    }
    public function __isset($key){
        echo $key,'<br>';
    }

}
   $boy = new Person();
   $boy -> age = 12; //改变私有变量  会调用__set()
   echo $boy-> age, '<br>'; //获取私有变量  会调用__get()
   var_dump(isset($boy -> money)); // 会调用__isset()
?>
```

