

## Drag和Drop拖放操作

在拖拽的元素上设置属性draggable 当值为true可以拖拽

```html
    <div class="drag" draggable="true">drag</div>

```



**拖放API基础**

drastart：被拖放元素  开始被拖放时触发

drag：被拖放元素  在拖拽的过程中触发

draged：被拖放元素  拖拽完成时

dragenter：目标元素  拖放元素进入目标时

dragover：目标元素  拖放元素在目标上时

dragleave：目标元素  拖放元素在目标元素上离开

drop：目标元素  被拖放的元素在目标元素上同时鼠标放开触发的事件 

​		（ 注：需要阻止dragover的默认行为才会触发drop事件 ）

```javascript
drag.addEventListener('drag', function () {
  console.log('drag');
});
```



**DataTransfer对象**

1、getData()向DataTransfer对象中存放数据

2、setData()从DataTransfer对象中读取数据



```javascript
drag.addEventListener('dragstart', function (e) {
  var dt = e.dataTransfer;
  dt.setData('id', this.className);
  console.log('dragstart');
});
```



