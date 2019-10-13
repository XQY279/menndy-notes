## 泛型

#### 泛型的基本应用

通常情况下我们需要一种方法使返回值的类型与传入参数的类型是相同的，但是使用`any`类型并不能达到期待的约束效果，

```typescript
function identity(arg: any): any {
    return arg;
}
```

这时我们可以使用泛型，使用泛型通常用`<T>`来定义，

```typescript
function identity<T>(arg: T): T {
  //<T>指定函数是泛型类型的函数， 第二个T指定函数的参数是泛型，第三个T指定函数的返回值也是泛型
  return arg;
}
identity<number>(122); //调用的时候指泛型定函数的类型为number
```



#### 多个类型参数

```ts
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}


swap([7, 'seven']); // ['seven', 7]
```

我们定义了一个 `swap` 函数，用来交换输入的元组。



#### 泛型类型

```typescript
function hello<T>(arg: T): T {
  return arg;
}

let myHello: <U>(arg: U) => U = hello;
//<U>定义一个函数它是泛型
//第二个U定义了函数的参数是泛型
//最后一个U通过Lambda表达式定义了函数的返回值也是泛型


let myHello :{<T>(arg: T): T} = hello;
//也可以通过另一种方式定义泛型函数
console.log(myHello('hello'))
```



#### 泛型接口

```typescript
interface Hello{
  <T>(arg: T): T;
}
function myHello<T>(arg: T): T {
  return arg;
}
let myFunc:Hello = myHello;
console.log(myFunc<string>('hello'))
```



#### 泛型类

与泛型接口类似，泛型也可以用于类的类型定义中：

```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}


let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```