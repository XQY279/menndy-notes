## Less

#### less的介绍

中文网: http://lesscss.cn/

Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。

Less 可以运行在 Node 或浏览器端。



#### less的安装

```bash
npm install -g less
```



#### 编译

将`less`编译成`css` 

```bash
lessc styles.less styles.css
      <less源文件> <编译后的css文件>
```

要输出缩小的内容，可以使用CSS [`clean-css`插件](https://github.com/less/less-plugin-clean-css)。安装插件后，将使用`--clean-css`选项指定缩小的CSS输出：

```bash
lessc --clean-css styles.less styles.min.css
```



less中文文档: https://www.w3cschool.cn/less/