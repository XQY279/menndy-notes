## 优化WEB动画

**计时器做动画存在的问题：**

1、当前窗口不在动画页面时，计时器仍将继续工作

2、回调函数执行耗时，倒是排队

3、设置动画频率高，倒是过度绘制，出现掉帧。浏览器屏幕刷新频率 1000/60 = 16.7ms



**requestAnimationFrame优势：**

1、当前窗口不在动画页面时，停止工作

2、浏览器刷新屏幕时自动执行，无需设置时间间隔

3、浏览器优化



**requestAnimationFrame使用：**

1、req = requestAnimationFrame(cb);屏幕每次绘制时执行回调函数cb

2、cancelAnimationFrame(req);  清除计时器

```javascript
var req;
function move(){
    var l = oDemo.offsetLeft;
    if(l < 1000){
        oDemo.style.left = l + 1 + 'px';
        req = requestAnimationFrame(move);
    }else{
        oDemo.style.left = '1000px';
    }
}

oStop.onclick = function(){
    cancelAnimationFrame(req);
}
move();
```

