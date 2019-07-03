## PHP错误处理

```php
//try 分支 在这里进行代码测试，如果有异常会抛出一个异常，如果没有就会继续执行
try{
//catch分支就是捕获异常对象
//参数：异常对象，使用的就是类型约束，只能捕获由Exception类实例化的对象
}catch(Exception $e){
    echo "错误文件为：";
    echo $e -> getFile();  //得到发生异常的文件
    echo ",发生错误的行为：";
    echo $e -> getLine();  //得到发生异常的行
    echo ", 错误代码为：";
    echo $e -> getCode();  //的到异常代码
    echo ", 错误信息为：";
    echo $e -> getMessage();  //的到异常信息
}
```

