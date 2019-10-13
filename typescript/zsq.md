## Typescript 装饰器

装饰器（Decorators）为我们在类的声明及成员上通过元编程语法添加标注提供了一种方式。 Javascript里的装饰器目前处在 [建议征集的第二阶段](https://github.com/tc39/proposal-decorators)，但在TypeScript里已做为一项实验性特性予以支持。

> 若要启用实验性的装饰器特性，你必须在命令行或`tsconfig.json`里启用`experimentalDecorators`编译器选项：

1. 装饰器是一种特殊类型的声明，本质上就是一个方法，可以注入到类、方法、属性、参数上，扩展其功能；

2. 常见的装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器...

3. 装饰器在写法上有：普通装饰器(无法传参)、装饰器工厂(可传参)

4. 装饰器已是ES7的标准特性之一，是过去几年JS最大的成就之一！

5. 启用装饰器：

   ```js
   "compilerOptions": {
       "experimentalDecorators": true
   }
   ```

### 类装饰器

1. 类装饰器在类声明之前被声明，应用于类构造函数，可以监视、修改、替换类的定义，传入一个参数；

   ```js
   function logClz(params:any) {
       console.log(params)  //  HttpClient() {}
   }
   @logClz
   class HttpClient {
       constructor() {
   
       }
   }
   ```

   1. `logClz()` 接收的参数`params`就是被装饰的类`HttpClient`
   2. 为`HttpClient`动态扩展属性属性和方法

   ```js
   function logClz(params:any) {
       params.prototype.url = 'xxxx';
       params.prototype.run = function() {
           console.log('run...');
       };
   }
   var http:any = new HttpClient();
   http.run(); // run...
   ```

2. 装饰器工厂：闭包

   ```js
   function logClz(params:string) {
       console.log('params:', params);  //params: hello
       return function(target:any) {        //这是装饰器 
           console.log('target:', target);  //target: class HttpClient
           target.prototype.url = params;  //扩展一个url属性
       }
   }
   @logClz('hello')
   class HttpClient {
       constructor() { }
   }
   var http:any = new HttpClient();
   console.log(http.url);  //hello
   ```

   1. 在使用装饰器工厂时，如果不想给装饰器传参，可以把参数声明为可选参数，但使用装饰器时仍然不能丢失小括号！

   ```js
   function logClz(params?:string) {
       return function(target:any) { }
   }
   @logClz()
   class HttpClient {
       constructor() { }
   }
   ```

3. 重载构造函数

   1. 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数；
   2. 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明；

   ```js
   function logClz(target:any) {
       return class extends target {
           url = 'change url'
           getData() {
               console.log('getData:', this.url);
           }
       }
   }
   @logClz
   class HttpClient {
       public url:string|undefined;
       constructor() {
           this.url = 'init url'
       }
       getData() {
           console.log(this.url);
       }
   }
   var http = new HttpClient();  //装饰器返回的就是HttpClient的子类，因此TS可以自动推导 http 的类型
   http.getData(); //getData: change url
   ```

4. 修改类的定义

   ```js
   function fn<T extends {new(...args: any[]): {}}>(constructor: T): T {
       class Ps extends constructor {
           age: number = 20;   //扩展一个类型为number的属性age
       }
       return Ps;
   }
   @fn
   class Person{
       
   }
   let p:any = new Person(); //装饰之后的Person已经变成了Ps
   console.log(p.age)  //20
   ```

   ```js
   function fn(v: number) {
       return function<T extends {new(...args: any[]): {}}>(cst: T): T {
           class Ps extends cst {
               age: number = v;
           }
       }
   }
   @fn(10)
   class Person { }  //age:number = 10
   @fn(20)
   class Cat { }  //age:number = 20
   ```

### 属性装饰器

1. 属性装饰器表达式会在运行时当作函数被调用，传入两个参数：

   1. 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象；
   2. 成员的名字；

   ```js
   function logProp(params:any) {
       return function(target:any, attr:any) {
           console.log(target)  // { constructor:f, getData:f } 
           console.log(attr)  // url
           target[attr] = params;  //通过原型对象修改属性值 = 装饰器传入的参数
           target.api = 'xxxxx';  //扩展属性
           target.run = function() {  //扩展方法
               console.log('run...');
           }
       }
   }
   class HttpClient {
       @logProp('http://baidu.com')
       public url:any|undefined;
       constructor() { }
       getData() {
           console.log(this.url);
       }
   }
   var http:any = new HttpClient();
   http.getData();  // http://baidu.com
   console.log(http.api);  // xxxxx
   http.run();  // run...
   ```

### 方法装饰器

1. 方法装饰器被应用到方法的属性描述符上，可以用来监视、修改、替换方法的定义；

2. 方法装饰器会在运行时传入3个参数：

   1. 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象；
   2. 成员的名字；
   3. 成员的属性描述符；

   ```js
   function get(params:any) {
       console.log(params) // 装饰器传入的参数：http://baidu.com
       return function(target:any, methodName:any, desc:any) {
           console.log(target)  // { constructor:f, getData:f } 
           console.log(methodName)  // getData
           console.log(desc)  // {value: ƒ, writable: true, enumerable: false, configurable: true} value就是方法体
           /* 修改被装饰的方法 */
           //1. 保存原方法体
           var oldMethod = desc.value;
           //2. 重新定义方法体
           desc.value = function(...args:any[]) {
               //3. 把传入的数组元素都转为字符串
               let newArgs = args.map((item)=>{
                   return String(item);
               });
               //4. 执行原来的方法体
               oldMethod.apply(this, newArgs);
               // 等效于 oldMethod.call(this, ...newArgs);
           }
       }
   }
   class HttpClient {
       constructor() { }
       @get('http://baidu.com')
       getData(...args:any[]) {
           console.log('getData: ', args);
       }
   }
   var http = new HttpClient();
   http.getData(1, 2, true);  // getData: ["1", "2", "true"]
   ```





### 访问器装饰器

*访问器装饰器*声明在一个访问器的声明之前（紧靠着访问器声明）。 访问器装饰器应用于访问器的 *属性描述符*并且可以用来监视，修改或替换一个访问器的定义。 访问器装饰器不能用在声明文件中（.d.ts），或者任何外部上下文（比如 `declare`的类）里。

> 注意  TypeScript不允许同时装饰一个成员的`get`和`set`访问器。取而代之的是，一个成员的所有装饰的必须应用在文档顺序的第一个访问器上。这是因为，在装饰器应用于一个*属性描述符*时，它联合了`get`和`set`访问器，而不是分开声明的。

访问器装饰器表达式会在运行时当作函数被调用，传入下列3个参数：

1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。
3. 成员的*属性描述符*。

> 注意  如果代码输出目标版本小于`ES5`，*Property Descriptor*将会是`undefined`。

如果访问器装饰器返回一个值，它会被用作方法的*属性描述符*。

> 注意  如果代码输出目标版本小于`ES5`返回值会被忽略。

下面是使用了访问器装饰器（`@configurable`）的例子，应用于`Point`类的成员上：

```ts
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}
```

我们可以通过如下函数声明来定义`@configurable`装饰器：

```ts
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
```



### 方法参数装饰器

1. 参数装饰器表达式会在运行时被调用，可以为类的原型增加一些元素数据，传入3个参数：

   1. 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象；
   2. 方法名称；
   3. 参数在函数参数列表中的索引；

   ```js
   function logParams(params:any) {
       console.log(params)  // 装饰器传入的参数：uuid
       return function(target:any, methodName:any, paramIndex:any) {
           console.log(target)  // { constructor:f, getData:f } 
           console.log(methodName)  // getData
           console.log(paramIndex)  // 0
       }
   }
   class HttpClient {
       constructor() { }
       getData(@logParams('uuid') uuid:any) {
           console.log(uuid);
       }
   }
   ```

2. 注意：参数装饰器只能用来监视一个方法的参数是否被传入；

3. 参数装饰器在`Angular`中被广泛使用,特别是结合`reflect-metadata`库来支持实验性的`Metadata API`；

4. 参数装饰器的返回值会被忽略。

### 装饰器的执行顺序

1. 装饰器组合：TS支持多个装饰器同时装饰到一个声明上，语法支持从左到右，或从上到下书写；

   ```js
   @f @g x
   
   @f
   @g
   x
   ```

   当多个装饰器应用于一个声明上，它们求值方式与[复合函数](http://en.wikipedia.org/wiki/Function_composition)相似。在这个模型下，当复合*f*和*g*时，复合的结果(*f* ∘ *g*)(*x*)等同于*f*(*g*(*x*))。

2. 在TypeScript里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：

   1. 由上至下依次对装饰器表达式求值;
   2. 求值的结果会被当作函数，由下至上依次调用.

3. 不同装饰器的执行顺序：属性装饰器 > 方法装饰器 > 参数装饰器 > 类装饰器

   ```ts
   function logClz11(params:string) {
       return function(target:any) {
           console.log('logClz11')
       }
   }
   function logClz22(params?:string) {
       return function(target:any) {
           console.log('logClz22')
       }
   }
   function logAttr(params?:string) {
       return function(target:any, attrName:any) {
           console.log('logAttr')
       }
   }
   function logMethod(params?:string) {
       return function(target:any, methodName:any, desc:any) {
           console.log('logMethod')
       }
   }
   function logParam11(params?:any) {
       return function(target:any, methodName:any, paramIndex:any) {
           console.log('logParam11')
       }
   }
   function logParam22(params?:any) {
       return function(target:any, methodName:any, paramIndex:any) {
           console.log('logParam22')
       }
   }
   
   @logClz11('http://baidu.com')
   @logClz22()
   class HttpClient {
       @logAttr()
       public url:string|undefined;
   
       constructor() { }
   
       @logMethod()
       getData() {
           console.log('get data');
       }
   
       setData(@logParam11() param1:any, @logParam22() param2:any) {
           console.log('set data');
       }
   }
   // logAttr --> logMethod --> logParam22 --> logParam11 --> logClz22 --> logClz11
   ```

*TypeScript*