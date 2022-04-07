# var、let、const之间的区别
let const 是 ES6 新增关键字，用于声明变量

- let 用来声明普通变量
- const 用于声明常量

|  var | let  |  const |
|---|---|---|
| 函数级作用域  |  块级作用域 | 块级作用域  |
|  变量提升 | 不存在变量提升  |  不存在变量提升 |
|  值可更改 |  值可更改 |  值不可更改 |

## 1.变量提升
- 使用var导致变量提升,var声明变量会污染全局
- let const 不存在变量提升，对于使用 let const 声明的变量，只能在定义后使用
```js
console.log(a); // 报错：a is not defined
let a = 0;

console.log(b); // 报错：b is not defined
const b = 12;
```

## 2.重复声明
- var 可以重复声明
- let 不可以重复声明，解决了重复定义的问题(重复声明 var 或者 function 声明的也不行)
```js
var n = 1;
var n;
var n = 2;

let n = 1; // 报错：n has already been declared
```

## 3.window上增加属性
let const 在全局声明的变量或者常量不会像window上增加属性

```js
var num = 100;
console.log('num' in window); // true in 运算符，检测对象是否有某个属性
let css = 'css3';
console.log('css' in window); // false
```


## 4.作用域
- var 是不受限于块级的
    - 可以在声明的上面访问变量
- let、const支持块级作用域(let const 在代码块中会出现，会形成块级作用域)
    - let 有暂存死区，let、const在声明的上面访问变量会报错

eg. var和let
```js
var a = 10;
{
    console.log(a); //->a=10 ,使用全局变量
    var a = 200 //-> 重新赋值给a为200
}


let a = 10;
{
    console.log(a); //->暂存死区
    let a = 200 
}

```


### 暂时性死区（TDZ: temporary dead zone）

在代码块中，用 let const 声明的变量，不能再声明之前使用。
```js
let q = 12;
if (true) {
	console.log(q); // 这个变量 q 已经被 let 锁定在块级作用域中，
	let q = 14;
}
```

### 块级作用域
1. if (condition) { 条件的花括号中使用 let const 就会形成块级作用域 }
```js
let num1 = 2;
if (true) {
	let num1 = 4;
	console.log(num1); // 4
}
```

2. for(...) { for 循环中的代码块 }
```js
for (var i = 0; i < 12; i++) {
	console.log('var 没有块级作用域')
}
console.log(i); // var 会把 i 泄露成全局变量

for (let j = 0; j < 3; j++) {
	console.log('let j j不会泄露出去')
}
console.log(j); // Uncaught ReferenceError: j is not defined
```

3. 利用 {} 形成块级作用域
```js
{
	let a = 1;
	console.log(a); // a 是块级作用域中
}


{
	let m = 12; // m 所处的块级作用域是下面的块级作用域的上级作用域，同样遵从作用域链的查找规则
	{
		console.log(m);
	}
}
```
eg.遍历获得i的值
```js
for(var i = 0;i < 10;i++) {
    (function(i){
        setTimeout(function(){
        console.log(i)
    })
    })(i)
}


//let 大括号就表示作用域
for(let i = 0;i < 10;i++) {
    setTimeout(function(){
        console.log(i)
    })
}

```

## const声明变量的细节问题
const 常量，不会变的量（地址不变即可）
- const 声明之后必须赋值，否则会报错 
- const 常量，改变了就会报错

全部使用let+const

### 1.必须赋值
const声明时必须赋值
```js
let m;
var m;
const m; // 报错：Missing initializer in const declaration
```

### 2.值被定义，不能修改
值一旦被定义，不能被修改
```js
const num = 12;
num = 15; // 报错：Assignment to constant variable.
```

### 3.const和引用数据类型
如果 const 声明的常量是一个引用数据类型，那么常量带表的引用地址不能改变，但是堆内存中的内容是可以修改的。

```js
const ary = [1, 2, 3];
ary.push('33');
console.log(ary);

// ary = [1, 3, 5]; // 报错：
```
