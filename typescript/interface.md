## 接口 interface

TypeScript的核心原则之一是对值所具有的*结构*进行类型检查。 使用`interface`关键字定义

#### 接口的创建与可选属性

- 使用`interface`关键字定义接口
- 在属性名后加上`?`符号定义可选属性
- 使用`readonly`关键字定义只读属性，重新赋值的时候会报错

```typescript
interface Person { //定义Person接口
   readonly name: string; //使用readonly关键字可以定义只读属性
	 age?: number; //age为可选属性
}

let tom: Person = { //定义一个变量，他的类型是Person
    name: 'Tom',
};
```



#### 函数类型

```typescript
interface SearchFunc {//定义函数的接口
  (source: string, subString: string): boolean; //定义函数的参数类型以及返回值类型
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

let res = mySearch('hello','llo');
```



#### 数组类型

```typescript
interface StringArray{
  [index: number]: string; //定义数组类型 数组的每一位是string类型
}

let myArray: StringArray = ['one', 'two', 'three'];

```



#### class类型

使用`implements`关键字对一个接口进行派生

```typescript
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) {
    
  }
  setTime(d: Date) {
    this.currentTime = d;
  }
}
```



#### 接口的继承

一个接口可以继承一个接口或多个接口，使用`extends`关键字

```typescript
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square: Square= {
  color : 'blue',
  sideLength: 18,
  penWidth: 5.0,
};
//第二种写法
let square2 = <Square>{
  color : 'blue',
  sideLength: 18,
  penWidth: 5.0,
};
```



#### 混合类型

```typescript
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}
```

