## Class

#### 类的概念

- 类(Class)：定义了一件事物的抽象特点，包含它的属性和方法
- 对象（Object）：类的实例，通过 `new`生成
- 面向对象（OOP）的三大特性：封装、继承、多态
- 封装（Encapsulation）：将对数据的操作细节隐藏起来，只暴露对外的接口。外界调用端不需要（也不可能）知道细节，就能通过对外提供的接口来访问该对象，同时也保证了外界无法任意更改对象内部的数据
- 继承（Inheritance）：子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
- 多态（Polymorphism）：由继承而产生了相关的不同的类，对同一个方法可以有不同的响应。比如 `Cat`和 `Dog`都继承自 `Animal`，但是分别实现了自己的 `eat`方法。此时针对某一个实例，我们无需了解它是 `Cat`还是 `Dog`，就可以直接调用 `eat`方法，程序会自动判断出来应该如何执行 `eat`
- 存取器（getter & setter）：用以改变属性的读取和赋值行为
- 修饰符（Modifiers）：修饰符是一些关键字，用于限定成员或类型的性质。比如 `public`表示公有属性或方法
- 抽象类（Abstract Class）：抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
- 接口（Interfaces）：不同类之间公有的属性或方法，可以抽象成一个接口。接口可以被类实现（implements）。一个类只能继承自另一个类，但是可以实现多个接口



#### 类的创建

```typescript
class Person {
	name: string; //定义属性的类型
	age: number;  //定义属性的类型
	constructor(name: string, age: number) { //也可以定义参数的类型
	  this.name = name;
	  this.age = age;
	}
	print(){
		  return `${this.name} ${this.age}`;
	}
  }
  
  let people: Person = new Person('Menndy', 19);
	//指定当前实例的类型为当前类的类型
  let res = people.print();
  console.log(res);
```



#### 类的继承

使用`extends`关键字继承

```typescript
class Person {
	name: string;//定义属性的类型
	age: number;
	constructor(name: string, age: number){
		this.name = name;
		this.age = age;
	}
	print() {
		return `${this.name} ${this.age}`;
	}
}

class Student extends Person { //使用`extends`关键字继承 父类
	school: string;
	constructor(name: string, age: number, school: string) {
		super(name, age);// 使用super去写父类的属性
		// super()
		this.school = school;
	}
	print() {
		return `${this.name} ${this.age} ${this.school}`;
	}
}

let stu = new Student('Menndy', 19, 'school');
console.log(stu.print())
```



#### public private protected 和 readonly

TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 `public`、`private`和 `protected`。

- `public`修饰的属性或方法是(公有的)，可以在任何地方被访问到，默认所有的属性和方法都是 `public`的
- `private`修饰的属性或方法是(私有的)，不能在声明它的类的外部访问
- `protected`修饰的属性或方法是(受保护的)，它和 `private`类似，区别是它在子类中也是允许被访问的
- `readonly`关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

```typescript
class Person {
		public name: string = "Menndy"; //共有的
    private age: number = 19;    	//私有的
		protected height: number = 180; //受保护的	
}
```

使用`readonly`关键字后该属性只能在构造函数初始化的时候进行赋值，后续改变它会报错

```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```



#### getter与setter

通过get与set可以为外部提供一个接口使用；

```ts
class Person {
	private name: string = "Menndy"; 
	
	get getName(): string{
		return this.name;
	}
	set setName(name: string){
    //do something ...
		this.name = name;
	}
}
let people = new Person();
people.setName = 'Hello';
let res = people.getName;
console.log(res)
```



#### 静态属性

这些属性存在于类本身上面而不是类的实例上，可以直接通过类名调用。

```ts
class Person {
	static _name: string = "Menndy";
	static getName(){
		console.log(Person._name);
	}
}
Person.getName()
```



#### 抽象类 与 抽象方法

抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 `abstract`关键字是用于定义抽象类和在抽象类内部定义抽象方法。

```typescript
abstract class Person { // 抽象类不能被实例化
	name: string;
	constructor(name: string){
		this.name = name;
	}
	abstract getName(): void; // 必须在派生类中实现该方法
}

class People extends Person{
	constructor(name: string){
		super(name) // 在派生类的构造函数中必须调用 super()
	}
	getName(){
		console.log(this.name);
	}
}

let student: People = new People('menndy');
//student的实例类型是People
student.getName()
```

