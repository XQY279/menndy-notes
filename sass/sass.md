# Sass

## sass 环境及选择器

**sass是css预处理器**

解决css没有封装，没有变量，没有组合，原生的模块化语法不好用的问题

css预处理器可以编译成css



**语法：**

Style.scss   ---------一般使用

```scss
.foo{
    color: red;
    font-size: 12px;
}
```

Style.sass  ———基本被舍弃

```sass
.foo
    color: red
    font-size: 12px
```

**安装编译环境**

`sudo npm install -g sass` 安装在全局下

**编译：**

```js
sass input.scss output.css
sass input.scss:output.css input:output
```



**嵌套语法：** 

​	样式可以放在父元素的声明块里面 ,  当编译的时候会变成常见的css文件

​	好处：减少代码量 不容易写错

```html
<div>
    <a href="">123456</a>
</div>
```

```scss
div{
    a{
        color: red;
    }
}
```

**子元素** 

```scss
div{
    div{
        ...
    }
}
```

**直接子元素 ( > )**

```scss
div{
    >div{
        ...
    }
}
```

**&选择器** 父亲选择器

```scss
div{
    &.demo{
        color: yellow;
    }
}
相当于
div.demo {
  color: yellow;
}

```





## Sass 语法

**模块** 

```scss
@import"模块名字"
@import"variables" //功能模块  模块名 _variables.scss ，引用时不用加'_'
@import"index"      //引入功能的scss
```



**变量**  用 '$' 声明

```scss
$error-color: #ccc !default; //全局变量；
				 //!default 如果上面引入的模块中没有定义这个变量再定义,如果定义了就使用之前定义的
.alert-error{
    $test-color: #ddd; //局部变量
}
```



​	**变量值的类型**

​	数字： 10  200px 50% 10pt

​	颜色: #fff rgb() red

​	字符串: “a.png”

​	Null

​	布尔：true false

​	Lists（相当于js中的数组）

​	Maps（相当于js中的对象）



**Mixin 可以让你的样式复用** 

```scss
@mixin alert-text {     //声明复用代码 将重复代码提取出来
    background-color: aquamarine;
    color: purple;
}

.errpr-text{   
    @include alert-text;  //引用声明的代码
}
```

​	**Mixin参数**

```scss
@mixin alert-text($color) {
    background-color: $color;
    color: purple;
}
.error-text{
    @include alert-text(blue);
}
.content-text{
    @include alert-text(pink);
}
```

​	**可以传多个参数** 

```scss
@mixin alert-text($color1, $color2) {
    background-color: $color1;
    color: $color2;
}
.error-text{
    @include alert-text(blue,green);
}
.content-text{
    @include alert-text(pink,red);
}
```



​	**可以传默认参数** (解构赋值)  传值的时候按照顺序传 也可以指定传

```scss
@mixin alert-text($color1: red, $color2: yellow) {
    background-color: $color1;
    color: $color2;
}
.error-text{
    @include alert-text(blue);
}
.content-text{
    @include alert-text(pink,red);
}
```

​	**如果传的值是null，这条属性将被删掉**

​	**Mixin 传一个块**

sass:

```scss
@mixin alert-text($color1: red, $color2: yellow) {
    background-color: $color1;
    color: $color2;
    @content;
}

.error-text{
    @include alert-text(blue){
        border-radius: 2px;
    };
}
.item-text{
    @include alert-text(pink, green)
}
```

css:

```css
.error-text {
  background-color: blue;
  color: yellow;
  border-radius: 2px;
}

.item-text {
  background-color: pink;
  color: green;
}
```



**函数** ：http://sass-lang.com/documentation/Sass/Script/Functions.html



**@if  @else** 判断

​	Scss:

```scss
@mixin foo($size) {
    font-size: $size;
    @if $size > 20 {
        line-height: $size;
    }
    @else{
        line-height: 15px;
    }
}
.small{
    @include foo(14px);
}
.large{
    @include foo(39px);
}

```

​	Css:

```css
.small {
  font-size: 14px;
  line-height: 15px;
}

.large {
  font-size: 39px;
  line-height: 39px;
}

```



**字符串插值** **#{}**

scss:

```scss
$name: "color";
.#{$name} .btn{
    #{$name}: $name;
}

```

Css:

```css
.color .btn {
  color: "color";
}

```



**@for 循环**

```scss
@for $i from 1 to 6 {  //to 或 through
    h#{$i}{
        font-size: 5rem - $i*0.75rem;
    }
}

```



**list** 相当于js中的数组

```scss
$margin: 10px 10px 20px 10px;
.foo{
    margin: $margin;
}
```



**@each   in   循环** 可以循环 对象 和 数组

```scss
$margin: 10px 10px 20px 10px;
.foo{
    @each $i in $margin {
        
    }
}
```



**nth**  查找数组这定向

```scss
$gradients:
(to right, blue, red),
(to right, skyblue, pink);
.foo{
    height: 100px;
    background: linear-gradient(nth($gradients,2)) 数组名，数组第几位
}
```



**Map 相当于对象** 

**通过map-get 获取对象属性值**

```scss
$mymap:(
    fense:pink,
    huangse:yellow
);
.foo{
    background: map-get($map: $mymap, $key: fense);
}
```



```scss
$dirctions:(
    "t":"top",
    "b":"bottom",
    "l":"left",
    "r":"right"
);
$box:("p":"padding","m":"margin");
@each $bo in $box {
    @each $dir in $dirctions {
        @for $i from 1 through 5 {
            $size: $i * 5;
            .#{nth($bo,1)}-#{nth($dir,1)}-#{$size}{
                #{nth($bo,2)}-#{nth($dir,2)}: #{$size}px;
            }
        }
    }
}
```

