## PHP常见关键字

- final

  在PHP5中新增了final关键字，它只能用来修饰类的方法。不能用final关键字来修饰成员属性

  - final的特性
    - 使用final关键字表示的类不能被继承
    - 使用final关键字标识的方法不能被子级覆盖(重写)，是最终版本
  - 目的
    - 为了安全
    - 没必要继承或重写

- static

  static关键字表示的是静态的意思，用于修饰符的成员属性和成员方法(即静态属性和静态方法)

  类中的静态属性和方法不用实例化（new）就可以直接使用类名访问。

       ```php
类::$静态属性      类::静态方法
       ```

​		在类的方法中，不能使用`$this`来引用静态变量或静态方法，而需要`self`来引用。

```php
self::$静态属性     self::$静态方法
```

​		静态方法中不可以使用非静态内容，就是不让使用`$this`

​		静态属性是共享的，也就是说new很多对象也是共同一个属性



- const

  const是一个在类中定义常量的关键字，我们都知道在PHP中定义常量使用`define()`这个函数，但是在类里面定义常量要使用`const`这个关键字

  ```php
  const CONSTEANT = 'constant value'; //定义
  echo self::CONSTEANT;               //类内访问
  echo className::CONSTEANT;          //类外部访问
  ```

- instanceof

  instanceof关键字用于检测当前对象实例是否属于某一个类或这个类的子类

