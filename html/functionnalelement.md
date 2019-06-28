## 常用元素：HTML5功能元素

**video 视频** 

**audio 音频** 

**source 资源** 

**figcaption 标签定义 figure 元素的标题 ** 

**canvas 画布 ** 

**progress 进程**  （进度条） 

```html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
    <style>
        span{
            display: none;
        }
    </style>
</head>
<body>
    <progress id="pro" max="100" min="0" value="0"></progress>
    <span id="ok">完成</span>
    <script>
        var tinmer = setInterval(function(){
            if(pro.value == 100){
                clearInterval(tinmer);
                ok.style.display = "block";
                return; //清除后不继续执行
            }
            pro.value +=10;
        },100) 
    </script>
</body>
</html>
```

​                        