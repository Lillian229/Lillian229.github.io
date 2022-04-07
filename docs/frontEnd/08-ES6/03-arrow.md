# 箭头函数
ES6中新增的定义函数的方式。
```js
() => {}
const fn = () => {}
```

## 注意事项
1. 函数体中只有一句代码，且代码的执行结果就是返回值，可以省略 return 和花括号
```js
function sum(num1, num2) {
 return num1 + num2;
}
let sum = (num1, num2) => num1 + num2;
let getObj = (num1, num2) => ({num1: num1, num2: num2});
```

2. 如果形参只有一个，可以省略小括号
```js
function fn (v) {
 return v;
}
const fn = v => v;
```
```js
let say = msg => console.log(msg);
```

3. 箭头函数不绑定this关键字，箭头函数中的this，指向的是函数定义位置的上下文this。
```js
const obj = { name: '张三'}
function fn () {
 console.log(this);
 return () => {
 console.log(this)
 }
}
const resFn = fn.call(obj);
resFn();
```

4. 箭头函数里面没有 arguments，但是可以使用不定参数（剩余参数/拓展运算符）
```js
let allIn = (...arg) => {
	let total = 0;
	for (let i = 0; i < arg.length; i++) {
		total += arg[i];
	}
	return total;
};
```
