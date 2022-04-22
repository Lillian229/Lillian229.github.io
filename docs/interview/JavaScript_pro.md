# JS高级

## try/catch 无法捕获promise.reject的问题

try..catch 结构，它只能是同步的，无法用于异步代码模式。


## error 事件的事件处理程序

https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalEventHandlers/onerror

## 一个简易版的Function.prototype.bind实现

```js
Function.prototype.bind = function (context) {
    var self = this;
    return function () {
        return self.apply(context, arguments);
    };
};

var obj = {
    name: '前端架构师'
};
var func = function () {
    console.log(this.name);
}.bind(obj);
func();
```

[【JavaScript】Function.prototype.bind 实现原理](https://blog.csdn.net/w390058785/article/details/83185847)


## call、apply、bind
[JS基础-this、apply、call、bind](../frontEnd/02-javascript/07-this.md)
1. 怎么利用 call、apply 来求一个数组中最大或者最小值 ?
2. 如何利用 call、apply 来做继承 ?
3. apply、call、bind 的区别和主要应用场景 ?

- call 跟 apply 的用法几乎一样，唯一的不同就是传递的参数不同，call 只能一个参数一个参数的传入。
- apply 则只支持传入一个数组，哪怕是一个参数也要是数组形式。最终调用函数时候这个数组会拆成一个个参数分别传入。
- 至于 bind 方法，他是直接改变这个函数的 this 指向并且返回一个新的函数，之后再次调用这个函数的时候 this 都是指向 bind 绑定的第一个参数。
- bind 传参方式跟 call 方法一致。

适用场景：

求一个数组中最大或者最小值

```js
// 如果一个数组我们已知里面全都是数字，想要知道最大的那个数，由于 Array 没有 max 方法，Math 对象上有
// 我们可以根据 apply 传递参数的特性将这个数组当成参数传入
// 最终 Math.max 函数调用的时候会将 apply 的数组里面的参数一个一个传入，恰好符合 Math.max 的参数传递方式
// 这样变相的实现了数组的 max 方法。min 方法也同理
const arr = [1,2,3,4,5,6]
const max = Math.max.apply(null, arr)
console.log(max)    // 6
```

参数都会排在之后

```js
// 如果你想将某个函数绑定新的`this`指向并且固定先传入几个变量可以在绑定的时候就传入，之后调用新函数传入的参数都会排在之后
const obj = {}
function test(...args) { console.log(args) }
const newFn = test.bind(obj, '静态参数1', '静态参数2')
newFn('动态参数3', '动态参数4')
```

利用 call 和 apply 做继承

```js
function Animal(name){
  this.name = name;
  this.showName = function(){
    console.log(this.name);
  }
}

function Cat(name){
  Animal.call(this, name);
}

// Animal.call(this) 的意思就是使用 this 对象代替 Animal 对象，那么
// Cat 中不就有 Animal 的所有属性和方法了吗，Cat 对象就能够直接调用 Animal 的方法以及属性了
var cat = new Cat("TONY");
cat.showName(); //TONY
```

将伪数组转化为数组（含有 length 属性的对象，dom 节点, 函数的参数 arguments）

```js
// case1: dom节点：
<div class="div1">1</div>
<div class="div1">2</div>
<div class="div1">3</div>

let div = document.getElementsByTagName('div');
console.log(div); // HTMLCollection(3) [div.div1, div.div1, div.div1] 里面包含length属性
let arr2 = Array.prototype.slice.call(div);
console.log(arr2); // 数组 [div.div1, div.div1, div.div1]


//case2：fn 内的 arguments
function fn10() {
    return Array.prototype.slice.call(arguments);
}
console.log(fn10(1,2,3,4,5)); // [1, 2, 3, 4, 5]


// case3: 含有 length 属性的对象
let obj4 = {
    0: 1,
    1: 'thomas',
    2: 13,
    length: 3 // 一定要有length属性
};
console.log(Array.prototype.slice.call(obj4)); // [1, "thomas", 13]
```

判断变量类型

```js
let arr1 = [1,2,3];
let str1 = 'string';
let obj1 = { name: 'thomas' };
//
function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
console.log(fn1(arr1)); // true

// 判断类型的方式，这个最常用语判断 array 和 object ，null( 因为 typeof null 等于 object )
console.log(Object.prototype.toString.call(arr1)); // [object Array]
console.log(Object.prototype.toString.call(str1)); // [object String]
console.log(Object.prototype.toString.call(obj1)); // [object Object]
console.log(Object.prototype.toString.call(null)); // [object Null]
```

总结：

1. 当我们使用一个函数需要改变 this 指向的时候才会用到 `call` `apply` `bind`
2. 如果你要传递的参数不多，则可以使用 fn.call(thisObj, arg1, arg2 ...)
3. 如果你要传递的参数很多，则可以用数组将参数整理好调用 fn.apply(thisObj, [arg1, arg2 ...])
4. 如果你想生成一个新的函数长期绑定某个函数给某个对象使用，则可以使用 const newFn = fn.bind(thisObj); newFn(arg1, arg2...)


手写 bind

```js
Function.prototype.myBind = function(context, ...args) {
  // 设置 fn 为调用 myCall 的方法
  const fn = this
  args = args ? args : []

  // 设置返回的一个新方法
  const result = function(...newFnArgs) {

    // 如果是通过 new 调用的，绑定 this 为实例对象
    if (this instanceof result) {
      fn.apply(this, [...args, ...newFnArgs]);
    } else { // 否则普通函数形式绑定 context
      fn.apply(context, [...args, ...newFnArgs]);
    }
  }

  // 绑定原型链
  result.prototype = Object.create(fn.prototype);

  // 返回结果
  return result;
};

this.a = 1;

const fn = function() {
  this.a = 2;
  console.log(this.a);
}

fn.myBind(fn);
fn();
```


实现 apply

```js
Function.prototype.myApply = function (context, args) {
    //这里默认不传就是给window,也可以用es6给参数设置默认参数
    context = context || window
    args = args ? args : []
    //给context新增一个独一无二的属性以免覆盖原有属性
    const key = Symbol()
    context[key] = this
    //通过隐式绑定的方式调用函数
    const result = context[key](...args)
    //删除添加的属性
    delete context[key]
    //返回函数调用的返回值
    return result
}
```


实现 call

```js
//传递参数从一个数组变成逐个传参了,不用...扩展运算符的也可以用arguments代替
Function.prototype.myCall = function (context, ...args) {
    //这里默认不传就是给window,也可以用es6给参数设置默认参数
    context = context || window
    args = args ? args : []
    //给context新增一个独一无二的属性以免覆盖原有属性
    const key = Symbol()
    context[key] = this
    //通过隐式绑定的方式调用函数
    const result = context[key](...args)
    //删除添加的属性
    delete context[key]
    //返回函数调用的返回值
    return result
}
```

参考文章：

- [手写 bind, apply, call](https://juejin.cn/post/6844903891092389901)
- [call、apply、bind 的区别](https://www.jianshu.com/p/bbeadae6127e)
- [聊一聊 call、apply、bind 的区别](https://segmentfault.com/a/1190000012772040)


## JS引擎如何管理内存
1. 内存生命周期
- 分配小内存空间，得到它的使用权
- 存储数据，可以反复进行操作
- 释放小内存空间
2. 释放内存
- 局部变量:函数执行完自动释放
- 对象:成为垃圾对象==>垃圾回收器回收