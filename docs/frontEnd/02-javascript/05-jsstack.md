# 2.5.JS堆栈内存


## JS 引擎中的内存分类
- 栈内存（作用域）供js代码执行的环境，保存基本数据类型
- 堆内存：存储引用数据类型

## 堆内存的创建和销毁
### 创建
创建一个对象、数组、函数、等引用数据类型，浏览器都会分配一块堆内存地址，存储引用数据类型的数据；

```js
var obj = {
	name: 'UESTC',
	age: 10,
	courses: ['计组', '数据结构', '操作系统']
}; // 每创建一个引用数据类型，浏览器都会开辟一个堆内存，并把这个堆内存地址给 obj 变量
```
```js
// 此时 obj 相当于引用了这一块堆内存，
var obj2 = obj; // 此时 obj2 也引用了这一块堆内存
```

## 堆内存释放

让所有引用堆内存空间地址的变量赋值为 null 即可（没有变量占用这个堆内存了，浏览器会在空闲的时候把它释放掉）
```js
obj = null; // 将 obj 指向空对象指针 null
obj2 = null; // 将 obj2 指向空对象指针 null
```


## js中的栈内存开辟和释放

- 栈内存（作用域）：供 js 代码执行的环境，也是用来保存基本数据类型的

### 栈内存的创建

- 当浏览器打开时，首先会开辟形成一个顶层的栈内存，就是全局作用域；
- 函数执行时，也会开辟一个供函数代码执行的栈内存（私有作用域）
```js
function add(a, b) {
	var total = 0;
	total = a + b;
	return total;
}
```
函数每一次执行，都会形成一个全新的栈内存，即每次函数执行都是在一个全新的环境里面执行，所以函数每次执行都是互相独立的；

```js
add(1, 2);
add(1, 3);
add(1, 2);

function ll() {
	return {
		school: 'UESTC'
	}
}
var o1 = ll(); //
var o2 = ll();
console.log(o1 === o2); // false ll 执行几次，救护创建几个对象，所以 o1 和 o2 是两个不同的堆内存，没有任何关系。
```

### 栈内存销毁

- 全局栈内存：当页面关闭时才会销毁
- 函数的私有作用域：一般函数执行完成后，栈内存自动销毁。但是有一些特殊情况需要注意；

## 栈内存不销毁的情形

- 函数栈内存：正常情况下，函数执行会形成一个栈内存（作用域），当函数执行完成就会自动销毁。
- 但是函数执行完成后，当前形成的栈内存中，某些内容被栈内存以外的变量占用了，此时栈内存不能释放（一旦释放外面找不到原有的内容了）。栈内存不销毁，保存在栈内存中的数据也不会被销毁


### 1.函数返回值被占用
```js
function ll() {
	return {
		name: "UESTC"
	}
}
var obj = ll(); // 函数 ll 执行形成一个不销毁的栈内存，里面定义的对象被外部 obj 变量占用，因而作用域不销毁

ll(); // 他们正常形成栈内存，但是执行后会被销毁
```

### 2.函数内部的引用数据类型被外部占用，函数执行的作用域不销毁。
```js
var x = null;

function fn() {
	x = {
		name: 'yaya'
	}
};
fn(); // 此时 x 占用着 fn 的作用域中对象 {name: 'yaya'}
```


## eg.累加计数
- 需求：实现一个累加计数的功能，点击一次，让按钮中的数字累加
```js
var btn = document.getElementById('btn');
```

- 思路：既然是累加，一定是有一个地方保存着它的上一个值。关键就在于保存在哪里。

### 1.把值保存在全局作用域
```js
var count = 0; // count 保存在全局作用域
btn.onclick = function () {
	count++; // 操作全局变量
	btn.innerHTML = count;
};
```
### 2.自定义不销毁的私有作用域
```js
btn.onclick = (function () {
	var count = 0; // count 的值保存在
	return function () {
		btn.innerHTML = count;
	}
})();
```

### 3.自定义不销毁的函数作用域
```js
(function () {
	var count = 0; // count 保存在自执行函数形成的私有作用域中
	btn.onclick = function () {
		count++;
		this.innerHTML = count;
	}
})();
```

### 4.块级作用域
```js
{
	let count = 0; // let 会把花括号变成块级作用域，等效于私有作用域，count 的值保存在块级作用域中
	btn.onclick = function () {
		count++;
		this.innerHTML = count;
	}
}
```