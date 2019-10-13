## 函数

和JavaScript一样有两种函数，有名字的函数和匿名函数。

```typescript
// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x + y; };
```



#### 函数类型

函数类型包含两部分：参数类型和返回值类型。我们可以给每个参数添加类型之后再为函数本身添加返回值类型

```typescript
function add(x: number, y: number): number {
  return x + y;
}

add(1,2)
```

##### 完整的函数类型

```typescript
let myAdd: (baseValue: number, increment: number) => 
number = function ( x: number, y: number ): number {
	return x + y;
};

```



#### 可选和默认参数

默认参数 `firstName: string = "Smith` 用 `=`直接赋值，

可选参数`lastName?: string` 以在参数名后使用 `?`实现可选参数的功能

```ts
function buildName(firstName: string = "Smith", lastName?: string): string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
buildName('menndy')
```



#### 剩余参数

使用`...`运算符将 剩余的参数收集到一个变量里面，它是个数组。

```typescript
function buildName(firstName: string = "Smith", ...thatName: Array<string>): string {
    if (thatName){
		return firstName + " " + thatName.join(" ");;
	}   
    else{
		return firstName;
	}
}
buildName('menndy', 'hello', 'type');
```



#### 重载

我们可以使用重载定义多个 `reverse`的函数类型, 前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。

```typescript
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

