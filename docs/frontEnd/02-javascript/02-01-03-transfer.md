# 三、数组_转换
## 3.1.数组 => 字符串
原有数组不变
### toString
- 作用：把数组转换为字符串 
- 参数： 
- 返回值：转换后的字符串，每一项用逗号分隔（原来数组不变）
```js
let ary = [10, 20, 30]; 
let res = ary.toString(); 
console.log(res); 
//=>"10,20,30" 
console.log([].toString()); 
//=>"" 
console.log([12].toString()); 
//=>"12"
```

### join
- 作用：根据参数指定的分隔符把数组连接成字符串
- 参数：指定的分隔符（字符串格式），不指定时默认空字符串
- 返回值：转换后的字符串（原来数组不变）
- 原数组改变：否
```js
let ary = [10, 20, 30];
let res = ary.join(''); 
console.log(res); 
//=>"102030" 

res = ary.join();
console.log(res); //=>"10,20,30" 
res = ary.join('|'); 
console.log(res);
//=>"10|20|30" 

res = ary.join('+'); 
console.log(res); 
//=>"10+20+30" 

console.log(eval(res)); 
//=>60 eval把字 符串变为JS表达式执行
```

## 3.2.数组 => 对象
### arrObj = {...arr}
```js
let fruits = ["banana", "apple", "orange", "watermelon"];  
  
let fruitsObj = {...fruits};  
  
console.log(fruitsObj) // returns {0: “banana”, 1: “apple”, 2: “orange”, 3: “watermelon”, 4: “apple”, 5: “orange”, 6: “grape”, 7: “apple”}
```




## 3.3.类数组 => 数组
类数组：有索引有 length 的对象；

常见的类数组：arguments、DOM 集合

因为类数组不是数组，没办法使用数组中的方法，操作起来不方便，即类数组 => 数组
常见的类数组转数组方法：

### 常见方案
1. 准备一个空数组，遍历类数组，把类数组中的每一项 push 到新数组
```js
function sum() {
	let ary = []; // 准备一个新数组
	// 遍历 arguments
	for (let i = 0; i < arguments.length; i++) {
		ary.push(arguments[i]);
	}
	console.log(ary);
}
sum(1, 2, 3, 4);
```

2. 扩展运算符(将 arguments 中的内容展开到一个新的数组中)
```js
function sum2() {
	let ary = [...arguments];
	console.log(ary)
}
sum2(1, 4, 5, 7);
```

3. slice.call() 使用 call 借用数组 slice 方法复制一个数组
- Array.prototype.slice.call()
- [].slice.call() 这种写法在 IE 低版本会报错
```js
function sum3() {
	var ary = Array.prototype.slice.call(arguments); // 借用数组中的 slice 方法，在 slice 方法执行的时候把 slice 方法中的 this 修改成 arguments
	// var ary = [].slice.call(arguments); // 利用 [].slice 找到数组原型上的 slice 方法，然后把 slice 中的 this 修改成 arguments
	console.log(ary)
}
sum3(2, 3, 4);
```

4. Array.from() ES6新增的方法，将类数组结构（类数组、iterator 对象）转换成数组
```js
function sum4() {
	let ary = Array.from(arguments);
	console.log(ary);
}
sum4(1, 3, 4, 5);
```

### 方法封装与容错处理
封装一个将类数组转换成数组的方法

- 版本1
```js
function arrLikeToAry(arg) {
	return Array.from(arg);
}
```
但是上面的代码有兼容性问题，因为 Array.from 是 ES6 新的方法，IE 低版本不兼容，一旦在 IE 低版本执行会报错，而js单线程，一旦报错后面的代码就不执行了，因此需要做容错处理：

JS的容错语句

try-catch 语句，会先 try，如果 try 过程中报错了，会捕获错误继续执行容错处理，而不会停止执行；
```js
try {
	// 这里是尝试执行的语句；
	// 通常这里是第一方案
} catch (e) {
	// 这里是异常情况的处理，如果上面
	// catch是捕获异常，异常信息
	// 上面代码执行报错后胡执行这里的代码，所以这里一般设置方案二
	console.log(e);
}
```

- 版本2 改写方法
```js
function arrLikeToAry(arg) {
	// 使用 try-catch 语句
	try {
		// 首先执行这里，如果浏览器支持 ES6，不会报错正常执行，下面的 catch 语句就不会执行了
		return Array.from(arg)
	} catch (e) {
		// 如果浏览器不支持 es6，就执行这里的代码，我们使用最原始的方式转数组
		console.warn(e);
		var ary = [];
		for (var i = 0; i < arg.length; i++) {
			ary.push(arg[i])
		}
		return ary;
	}
}
```
