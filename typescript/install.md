## 介绍

##### 介绍

[TypeScript](http://www.typescriptlang.org/)是 JavaScript 的一个超集，主要提供了**类型系统**和**对 ES6 的支持**，它由 Microsoft 开发，typescript兼容JavaScript，可以载入JavaScript代码然后运行。



##### Typescript与JavaScript比较

Typescript与JavaScript相比进步的地方包括：加入注释，让编译器理解所支持的对象和函数，编译器会移除注释，不会增加开销；增加一个完整的类结构，使之更像是传统的面向对象语言



##### 语法特性

- 类 `class`

- 接口 `interfaces`

- 模块 `Modules`

  ......



## 安装与编译

TypeScript 的命令行工具安装方法如下：

```bash
npm install -g typescript
```

以上命令会在全局环境下安装 `tsc`命令，安装完成之后，我们就可以在任何地方执行 `tsc`命令了。

编译一个 TypeScript 文件很简单：

```bash
tsc index.ts
```

执行过后会在当前目录下生成同名的`.js`文件

我们约定使用 TypeScript 编写的文件以 `.ts`为后缀，用 TypeScript 编写 React 时，以 `.tsx`为后缀。

