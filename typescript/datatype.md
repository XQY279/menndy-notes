## 数据类型

#### 参考链接

https://www.tslang.cn/docs/handbook/basic-types.html



#### 类型

1. boolean
2. number
3. string
4. Array
5. Tuple（元组）
6. enum（枚举）
7. Any （任意值）
8. Void（没有任何类型）
9. Null
10. undefind
11. Never（永不存在的值的类型）
12. object

#### 布尔值 `boolean` 

最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做`boolean`（其它语言中也一样）。

```ts
let isDone: boolean = false;
```

#### 数字 `number`

和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 `number`。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。

```
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

#### 字符串 `string` 

和JavaScript一样，可以使用双引号（ `"`）或单引号（`'`）表示字符串。还可以使用（`）以及  ${} 字符串插值。

```typescript
let name: string = "bob";
let sentence: string = `Hello, my name is ${ name }`;
```

#### 数组 `Array` 

TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 `[]`，表示由此类型元素组成的一个数组：

```ts
let list: number[] = [1, 2, 3];
```

第二种方式是使用数组泛型，`Array<元素类型>`：

```ts
let list: Array<number> = [1, 2, 3];
```

#### 元组 `Tuple`

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 `string`和`number`类型的元组。

```typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```

#### 枚举 `enum`

`enum` 类型是对JavaScript标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字。

默认情况下，从`0`开始为元素编号。 你也可以手动的指定成员的数值。例子改成从 `1`开始编号：

```typescript
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green; // c: 2
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：

```ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
```

#### Any

任意数据类型，检查器不会对值进行类型检查

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
```

#### Void

某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`：

```ts
function warnUser(): void {
    console.log("This is my warning message");
}
```

#### Null 和 Undefined

`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`

```ts
let u: undefined = undefined;
let n: null = null;
```

#### Never

`never`类型表示的是那些永不存在的值的类型。`never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never`类型，当它们被永不为真的类型保护所约束时。

#### Object

`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

