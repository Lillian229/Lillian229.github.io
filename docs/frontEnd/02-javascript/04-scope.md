# 2.4.变量提升和作用域链

## 变量提升（预解释）

- 在 js 代码执行之前，对所有声明的变量进行提前带 var 和带 function 变量进行提前声明和定义（赋值）；
    - 声明：声明一个变量，告诉浏览器有一个变量；
    - 定义：给变量赋值
- 对于带 var 的进行提前声明，不赋值（变量声明时不赋值，变量的默认值是 undefined），只是浏览器知道有这么个变量。
- 对于带 function 的进行提前声明 并且赋值为函数定义本身
变量提升结束后，代码才会从上到下执行。
- 当执行到  var 变量 = 值 时，此时才会对变量进行赋值，即在此之后变量才代表这个值本身，在此之前是undefined；
- 而当执行到 function 函数名... 时，跳过，因为在变量提升阶段就已经完成了对变量的赋值过程。
```js
console.log(num); // undefined 因为代码执行到这里时，num 只是经过了变量提升阶段的声明，但是没有完成赋值，所以是 undefined；

var num = 100; // 代码执行过这一行后完成了赋值，所以 num 是100
console.log(num);  // 100

console.log(fe); // 函数体本身，因为 fe 这个变量在函数执行时就已经赋值完成了，所以无论在函数声明前还是后使用都是函数本身
fe(); // 因为 fe 在变量提升阶段就已经完成了赋值，所以 fe 是一个函数，所以可以成功执行
function fe() {
	console.log('We are Front-end Engineer');
}
```

## js的运行机制及原理

### js运行的环境（栈内存）：作用域

作用域是js运行的环境，另外一个功能是保存基本数据类型。在 js 中作用域分为：
- 全局作用域：当页面打开时，首先形成一个全局作用域，执行全局中的代码，全局作用域是 window；
- 私有作用域（函数作用域）当函数执行时，会形成一个函数作用域，这个作用域用来保存函数中的基本数据类型同时执行函数代码；
- 块级作用域（类似私有作用域 ES6）


### js运行过程

- 在 js 代码执行前，浏览器会开辟一个全局作用域，然后执行变量提升，完成变量提升操作后，代码开始从上到下开始执行；
- 当执行时，如果遇到基本数据类型，就在作用域中存储该基本数据类型；
- 如果遇到引用数据类型，则浏览器会再次分配一个堆内存，然后把引用数据类型的内容存储到堆内存中，接下来再把这个堆内存的地址赋值给变量（此时这个地址是存储在作用域内存中的）；
- 遇到函数执行时，会经历以下几步：
  1. 浏览器开辟一个私有作用域；
  1. 形参赋值，把执行时的实参赋值给函数形参变量；
  1. 私有作用域中变量提升
  1. 函数代码从上到下执行

### 私有变量和全局变量

- 全局变量：在全局作用域中声明的变量
- 私有变量：函数的形参以及在函数私有作用域中声明的变量
变量根据作用域的不同分为两种：全局变量和局部变量。


1. 函数内部可以使用全局变量。
2. 函数外部不可以使用局部变量。
3. 当函数执行完毕，本作用域内的局部变量会销毁。

预解释只发生在当前作用域，如果函数不执行，函数中的变量不会进行变量提升。

```js
function fn() {
	var num = 13;
}
console.log(num); // 报错：因为预解释发生在当前作用域中，而当前作用域没有 num 的变量，num 是 fn 的私有变量。
```

## 重复声明的问题
### 1.同名变量只会声明一次，代表的值就是最后一次的值
```js
var num;
var num;
var num; // 这些语句没有赋值操作，当代码执行时会略过
var num = 100; // num 虽然 var 了4次，但是并不会声明4次，只会声明一次，同时只有这一次才会将 num 的值赋值成100；

function fn() {
	console.log(1)
}
function fn() {
	console.log(2)
}
function fn() {
	console.log(3)
}
fn(); // 3
```

### 2.变量提升时，function 的优先级高于普通变量
```js
console.log(fe); // 函数体
function ll() { // 当代码执行到这里时，直接忽略，因为函数变量赋值已经在变量
	console.log('我是ll');
}
var fe = 123; // 代码执行到这一行时，将变量 ll 的值修改为123
```


### 3.变量名和函数名同名
如果变量名和函数名同名，在执行到变量的赋值语句之前时，这个名字代表函数，但是当执行过变量赋值语句后
```js
function ll() {
	console.log('LL')
}
var ll = 1;
// ll(); // 报错，因为执行到这里的时候 ll 不再代表一个函数了，而是一个数字
```

## 变量提升的细节问题
### 1.等号右侧的不会进行变量提升，即使右侧是函数也不会进行变量提升
```js
// fn(); // 报错，
var fn = function () {
	console.log('来自等号右侧的你');
};
// console.log(x1); // 报错：x1 is not defined
// console.log(x); // undefined
var x = function x1() {
	console.log(x1);
};
```

### 2.条件语句中的变量不管条件成立与否都会参与当前作用域中的变量提升；
```js
console.log(n); // undefined
if (NaN === Number('I Love programming')) {
	var n = 1;
}
console.log(n); // undefined，以内条件不成立，所以赋值语句没执行，所以 n 仍然是 undefined
```

### 3.函数中，return 下面的代码虽然不执行，但仍会进行函数作用域中的变量提升；
```js
function add(a, b) {
	console.log(n); // undefined
	ll(); // 执行了
	return a + b;
	var n = 123;
	function ll() {
		console.log('I Love programming')
	}
}
add();
```

### 4.函数的返回值不参与变量提升； return 右边的不会参与变量提升
```js
function minus(a, b) {
	console.log(foo);
	return function foo() {
		console.log('函数的返回值不参与变量提升')
	}
}
minus();
```


## 带 var 和不带 var 的区别

1. 在全局中，用 var 和 function 声明的变量，也相当于给 window 上添加一个同名属性

- 全局作用域是一个内置对象 window
console.log(window);
```js
var num = 2019;
console.log(window.num); // 2019
window.num = 2020;
console.log(num); // 2020 num 和 window.num 是绑定在一起的
console.log('num' in window); // in 运算符 检测对象是否有某个属性，有返回 true，否则 false


function ll() {
	console.log('LL')
}
window.ll();
ll();
```

2. 不带 var 的不会参与变量提升
```js
console.log(a); // undefined
var a = 1;

console.log(b); // 报错：
b = 2; // 不带 var 不会参与变量提升，所以不会提前声明和赋值
console.log(b);
```


## 作用域链
js中作用域
- 全局作用域
- 私有作用域
- 块级作用域
```js
function fn() {
	console.log(n);
}
fn(); // 15

function fn2() {
	console.log(x)
}
fn3();


function fn3() {
	x = 16;
}
fn2();
```


## 作用域链：变量的查找机制：

当在作用域中查找一个变量的时候，先看当前作用域中是否声明过这个变量，如果声明过，就使用这个变量，如果没有声明过，那么就去上级作用域（上级作用域就是函数声明时所在的作用域）查找，找到就使用，如果没有就一直向上查找，一直找到 window 为止，如果本次使用变量是赋值，那么就相当于给 window 上面增加一个属性，如果是引用变量，就会报错;
```js
function ll() { // ll 是在全局中定义的，所以 ll 的上级作用域就是全局作用域
  var n = 200;
  return function f() { // 这个 function 就是在 ll 的作用域中定义的，所以该函数的上级作用域就是 ll 的作用域
    console.log(n) // 200
  }
}
var fn = ll();
fn();
```

## 上级作用域的确定

- 如何查找上级作用域，就看这个函数是在哪里定义的。
```js
function ll() { // ll 是在全局中定义的，所以 ll 的上级作用域就是全局作用域
	var n = 200;
	return function f() { // 这个 function 就是在 ll 的作用域中定义的，所以该函数的上级作用域就是 ll 的作用域
		console.log(n) // 200
	}
}
var fn = ll();
fn();
```

<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-03-07 18:50:30
 * @LastEditTime: 2022-03-15 22:02:58
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->
