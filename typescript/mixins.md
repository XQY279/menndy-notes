## Mixins

> 详情可参考网址：[https://www.tslang.cn/docs/handbook/mixins.html](https://link.jianshu.com/?t=https%3A%2F%2Fwww.tslang.cn%2Fdocs%2Fhandbook%2Fmixins.html)

> Mixins 他是对象继承的一种替代方案，可以把这个单词分为 Mix(混合) ins(插入)，合起来这个单词也就是混入的意思，他想要表达的就是一个对象中混入另一个对象的方法，这个就是 Mixins

## 源码

app.ts

```tsx
//首先定义一个只能一次性写入的类
class Apple{
    isDisposed:boolean;
    dispose(){
        this.isDisposed = true;
    }
}

class Peach{
    isActive:boolean;
    activate(){
        this.isActive = true;
    }
    deactivate(){
        this.isActive = false;
    }
}

//下面是一个把上面两个类当作是接口然后去实现的子类
class SmartObject implements Apple,Peach{
    //增加一个构造函数 这个在实例化时会自动执行的
    constructor(){
        //500 ss 执行一次 console 
        setInterval(() => console.log('like peach? ' + this.isActive + 'like Apple? ' + this.isDisposed),500);
    }
    //增加一个方法
    interact(){
        console.log('statring change');
        this.activate();//这里调用时执行的其实是在 Peach 类中定义的方法
    }
    //下面是使用上面两个类的所有的属性和方法做占位，只定义而不去实现
    //Apple
    isDisposed:boolean = false;
    dispose:() => void;
    //Peach
    isActive:boolean = false;
    activate:() => void;
    deactivate:() => void;
}

// 把mixins混入定义的类，完成全部实现部分。
applyMixins(SmartObject,[Apple,Peach]);

//创建这个帮助函数，帮我们做混入操作。 它会遍历mixins上的所有属性，并复制到目标上去，把之前的占位属性替换成真正的实现代码。
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}

//实例化上面定义的类
let smartObj = new SmartObject();//实例化时会一直执行 constructor 中的 console
setTimeout(() => smartObj.interact(), 1000);//这个是在 1000ss 后 执行  interact() - this.activate() - this.isActive = true;
```

HTML

```xml
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TypeScript Mixins</title>
</head>
<body>
    <script type="text/javascript" src="app.js"></script>
</body>
</html>
```

浏览器效果图

![img](https://upload-images.jianshu.io/upload_images/9064013-cdda64a5b0035ab8.png)

总结：

> 首先创建了两个类 `Apple` 和 `Peach` ，之后有创建了一个将前两个类作为接口实现的 `SmartObiect` 类，并在这个类里面将前两个类中所有的属性以及方法都使用了占位的方法做了定义，再在下面是用自定义的 `applyMixins()` 函数将前两个类中的所有的属性以及方法混合进了 `SmartObject` 这个类中，使其之前的占位的属性已经方法都替换成了真正的代码，后面将 `SmartObject` 实例化进行了测试

