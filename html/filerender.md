## FileReader文件操作

**fileList and file**

1、fileList: 表示用户选择的文件列表

2、file: 表示file控件内的每一个被选择的文件对象。fileList为这些file对象的列表



**fileReader对象**

负责把文件读入内存，并且读取文件中的数据。

1、读取并显示文件

​	readAsText()将文件中的数读取为问文本数据

​	readAsBinaryString()读取为二进制字符串

​	readAsDataURL()读取为DataURL字符串

​	readAsArrayBuffer()读取为一个ArrayBuffer对象

​	abort()中断读取操作

2、检测读取事件

​	onabort：数据读取中断时触发

​	onprogress: 数据读取中触发

​	onerror: 数据读取出错时触发

​	onload：数据读取完成时触发

​	onloadstart: 数据开始读取时触发

​	onloadend: 数据读取完成时触发，无论成功还是失败

**Blob对象**

​	1、blob对象的访问

​	2、blob对象的创建

​	3、截取blob对象

**把文件进行裁剪：**silce(0,2)

