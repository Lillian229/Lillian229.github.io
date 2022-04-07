# 2.7.this、call、apply、bind
this 是 JS 的关键字，代表当前代码执行的环境对象。一般在函数中使用，并且是在函数执行时，根据函数的不同执行方式确定不同的值,在运行时不能通过赋值的方式修改；

## 一、this指向
| 调用方式  |  this指向 |
|---|---|
|  普通函数调用 | window  |
| 构造函数调用  |  实例对象原型对象里面的方法也指向实例对象 |
|  对象方法调用 |  该方法所属对象 |
|  事件绑定方法 |  绑定事件对象 |
|  定时器函数 | window  |
|  立即执行函数 |  window |

1. 事件中的 this 是绑定当前事件的元素；
2. 自执行函数中的 this 指向 window；
3. 定时器回调函数中的 this 指向 window；
4. 全局作用域的 this 指向 window
5. 方法调用时看方法执行前没有有点，如果有点前面是谁 this 就是谁，没有就是 window
6. 箭头函数中的 this 是箭头函数声明时所在作用域中的 this
7. 构造函数中的 this 指向当前实例


### 1.事件函数中的this是绑定该事件的元素
```js
let box = document.getElementById('box');
box.onclick = function () {
	console.log(this); // box 元素对象
};
```

### 2.自执行函数中的this是window
```js
(function () {
	console.log(this);
})();
```

## 3.setTimeout/setInterval定时器回调函数中的this指向window
```js
setTimeout(function () {
	console.log(this);
}, 0); // 定时器写 0 也不会立刻执行，也需要等待其他同步代码执行完才会执行；
```

### 4.方法调用时，看方法前面是否有点.如果有点前面是谁，this就是谁，如果没有，方法中的this就是window
```js
var num = 13;
var obj = {
	num: 12,
	fn: function () {
		console.log(this.num);
	}
};
obj.fn(); // 12
obj['fn'](); // 12 obj['fn'] 等效于 obj.fn 所以，this 仍然指向 obj

var fn = obj.fn;
fn(); // 13；window.num
```

### 5.箭头函数中的this指向函数定义时所在作用域中的this

箭头函数：

ES6 新增的语法：省略 function 关键字，在形参入口后增加 => 箭头，后面紧跟函数体；
```js
let f = (a, b) => {
	return a + b;
	console.log(this)
};
f();
```

1. 只有一个形参时，可以省略 形参入口的小括号
```js
let f2 = a => {
	var x = 10;
	x += a;
	return x;
};
```

2. 如果函数只有一行代码，或者只有return指定返回值，可以省略函数体的花括号和return关键字
```js
let transfer = (a, b) => a + b;
// 等效于：
let transfer = function (a, b) {
	return a + b;
}
```

### 6.全局作用域中的this是window
```js
console.log(this);
```

### 7.this在运行时不可以赋值
```js
this = {};  // 报错
```

## 二、改变函数内部this指向(call、apply、bind)
Function.prototype 上的三个方法 call、apply、bind 供 Function 的实例用来修改函数中的 this 指向
```js
console.log(Function.prototype);
```

### 1.call方法
call()方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的 this 指向

应用场景: 经常做继承.
```js
var o = {
    name: 'andy'
}
function fn(a, b) {
    console.log(this);
    console.log(a + b)
};
fn(1, 2)// 此时的this指向的是window 运行结果为3
fn.call(o, 1, 2)//此时的this指向的是对象o,参数使用逗号隔开,运行结果为3
```

运行结果：
```js
Window {window: Window, self: Window, document: document, name: '', location: Location, …}    //命名函数调用.this指向为window
3

{name: "andy"}    //使用Call方法调用,this指向为传递进去的对象o
3
```

### 2.apply方法
apply() 方法调用一个函数。简单理解为调用函数的方式，但是它可以改变函数的 this 指向。

应用场景: 经常跟数组有关系

```js
var o = {
    name: 'andy'
}
function fn(a, b) {
    console.log(this);
    console.log(a + b)
};
fn()// 此时的this指向的是window 运行结果为3
fn.apply(o, [1, 2])//此时的this指向的是对象o,参数使用数组传递 运行结果为3
```

运行结果：
```js
Window {window: Window, self: Window, document: document, name: '', location: Location, …} 
NaN

{name: "andy"} 
3
```

### 3.bind方法
bind() 方法不会调用函数,但是能改变函数内部this 指向,返回的是原函数改变this之后产生的新函数

如果只是想改变 this 指向，并且不想调用这个函数的时候，可以使用bind

应用场景:不调用函数,但是还想改变this指向
```js
var o = {
    name: 'andy'
};
function fn(a, b) {
    console.log(this);
    console.log(a + b);
};
var f = fn.bind(o, 1, 2); //此处的f是bind返回的新函数
f();//调用新函数 this指向的是对象o 参数使用逗号隔开
```

运行结果：
```js
{name: "andy"} 
3
```

## call、apply、bind三者的异同
共同点 : 都可以改变this指向

不同点:
- call 和 apply 会调用函数, 并且改变函数内部this指向.
- call 和 apply传递的参数不一样,call传递参数使用逗号隔开,apply使用数组传递
- bind 不会调用函数, 可以改变函数内部this指向.

应用场景:
1. call 经常做继承.
2. apply经常跟数组有关系. 比如借助于数学对象实现数组最大值最小值
3. bind 不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向.


## 具体应用
1. 怎么利用 call、apply 来求一个数组中最大或者最小值 ?
2. 如何利用 call、apply 来做继承 ?
3. apply、call、bind 的区别和主要应用场景 ?

- call 跟 apply 的用法几乎一样，唯一的不同就是传递的参数不同，call 只能一个参数一个参数的传入。
- apply 则只支持传入一个数组，哪怕是一个参数也要是数组形式。最终调用函数时候这个数组会拆成一个个参数分别传入。
- 至于 bind 方法，他是直接改变这个函数的 this 指向并且返回一个新的函数，之后再次调用这个函数的时候 this 都是指向 bind 绑定的第一个参数。
- bind 传参方式跟 call 方法一致。

适用场景：

### 求一个数组中最大或者最小值

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

### 利用 call 和 apply 做继承

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

### 将伪数组转化为数组（含有 length 属性的对象，dom 节点, 函数的参数 arguments）

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

### 判断变量类型

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

### 总结：

1. 当我们使用一个函数需要改变 this 指向的时候才会用到 `call` `apply` `bind`
2. 如果你要传递的参数不多，则可以使用 fn.call(thisObj, arg1, arg2 ...)
3. 如果你要传递的参数很多，则可以用数组将参数整理好调用 fn.apply(thisObj, [arg1, arg2 ...])
4. 如果你想生成一个新的函数长期绑定某个函数给某个对象使用，则可以使用 const newFn = fn.bind(thisObj); newFn(arg1, arg2...)


### 手写 bind

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


### 实现 apply

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


### 实现 call

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

