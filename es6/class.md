## Class

JS 是一门基于原型的语言 为了有面向对象的设计思想 所以创建出了类 

Js 基于原型 ： 连接

Java 基于类 ： 复制



**ES5中的仿类结构：构造器（自定义类型）**  



**类的声明：基本的类声明** 

​	类声明以class关键字开始  然后是类的名字  

​	剩余部分像是对象字面量的简写

​	两个对象之间*没有*逗号隔开

```javascript
class Dog{ /通过class来声明类名
    constructor(name,age){ /要使用关键字constructor
        this.name = name;
        this.age = age;
    }
}
const lili = new Dog("lili",3);
const goudan = new Dog("goudan",5);
```

**类语法注意事项**:

1. 类声明不会被提升
2. 类声明中的代码都自动运行在严格模式下
3. 调用类必须使用new
4. 类中所有的方法都是不可枚举的
5. 类中的方法是不能用new调用的
6. 在类的方法中重写类名报错



用ES5方法

```javascript
const Dog = (function(){
    "use strict";
    const Dog = function(name,age){
        if(!(this instanceof Dog)){
            throw new Error("必须使用new去调用方法")
        }
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Dog.prototype,"bark",{
        value:function(){
            if(this instanceof Dog.prototype.bark){
                throw new Error("不能使用new调用")
            }
            console.log(`我叫${this.name}`)
        },
        enumerable:false
    })
    return Dog;
})()
const lili = new Dog("lili",3);
const goudan = new Dog("goudan",5);
```



**类表达式** 

```javascript
const Cat = class{
    constructor(age){
        this.age = age;
    }
}
const xiaomao = new Cat(3);
```



**类为一等公民**: 可以作为参数传给函数,  能作为函数返回值,  能给变量赋值



**静态方法:**  

```javascript
class Dog{
    constructor(name,age){ 
        this.name = name;
        this.age = age;
    }
    bark(){     /原型方法
        console.log(`我叫${this.name}`)
    }
    static showInfo(){/静态方法 可以通过Dog.showInfo()的形式来调用  关键字static
        console.log("这是一条狗");
    }
}
```

**getter与setter** 

```javascript
class Dog{
  	constructor(name,age){
    this.name = name;
    this.age = age;
  }
  bark(){ //原型
    console.log(`我叫${this.name}`)
  }
  static showInfo(){   //静态方法 可以通过Dog.showInfo()的形式来调用
    console.log("这是一条狗");
  }
  get info(){  // 可以通过lili.info 的形式获取
    return `我叫${this.name},我${this.age}岁了`
  }
  set nickName(value){ //设置一个值
    this.nick = value;
  }
  get nickName(){
    return this.nick;
  }
}
const lili = new Dog("lili",3);
const goudan = new Dog("goudan",5);
console.log(lili, goudan);
```







#### 类的继承



ES6中class 继承`extends` `super`的使用

```javascript
class Animal{
    constructor(name){
        this.name = name;
        this.thirsty = 100;
        this.food = [];
    }
    drink(){
        return this.thirsty -= 10;
    }
    eat(item){
        this.food.push(item);
    }
    static Info(){/通过static 关键字定义静态方法
        console.log("我是一个静态方法")
    }
}

class Dog extends Animal{ /通过extends来继承
    constructor(name,bread){
        super(name); / 注意:必须先调用 super() 才能使用 "this"。
        this.name = name;
        this.bread = bread;
    }
}

var wangcai = new Dog('wangcai','藏獒');
```

通过 **static** 关键字定义静态方法。不能在类的实例上调用静态方法，而应该通过类本身调用。这些通常是实用程序方法，例如创建或克隆对象的功能。



