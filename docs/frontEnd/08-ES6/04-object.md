# ES6 的内置对象扩展
## 数组
### 扩展运算符
扩展运算符可以将数组或者对象转为用逗号分隔的参数序列。

拓展运算符：又叫不定参数（剩余参数），在函数形参中 ...形参名

1. 不定参数是一个数组，可以使用数组方法
2. 不定参数可以用作非必传参数
```js
let fn = (a, b, ...arg) => {
	console.log(arg);
};
fn(1, 2); // arg = []
fn(1, 2, 3); // arg =[3]
fn(1, 3, 5, 7, 9, 11); // arg = [5, 7, 9, 11]
```

### 拓展运算符——合并数组
```js
let ary1 = [1, 2, 3];
let ary2 = [3, 4, 5];
let ary3 = [...ary1, ...ary2];
```
### 拓展运算符——类数组转数组
```js
let oDivs = document.getElementsByTagName('div');
oDivs = [...oDivs];
```

### 拓展运算符配合解构使用
```js
let students = ['wangwu', 'zhangsan', 'lisi'];
let [s1, ...s2] = students;
console.log(s1); // 'wangwu'
console.log(s2); // ['zhangsan', 'lisi']
```

### 新增的拓展方法
from、includes、find...
详见[数组方法](../02-javascript/02-01-array.md)


## String
### 模版字符串
``反引号  ES6新增的“模版字符串”,有助于字符串的拼接
- ${} 存放的是JS表达式
- “JS表达式”:执行代码可以有返回结果的，例如变量/三元运算符...
- ES6中的模板字符串就是为了解决传统字符串拼接中的问题（反引号 TAB上面的撇）：${}中存放变量或者其它的JS表达式即可，很简单的完成字符串拼接

#### 1.模版字符串可以解析变量

完成字符串拼接处理：
```js
// 2020年03月03日 12:00:00
let year = '2020';
let month = '03';
let day = '03';
let hours = '12';
let minutes = '00';
let seconds = '00';
```

```js
let result = `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
console.log(result); //->2020年03月03日 12:00:00
```
// 传统的拼接方式，我们需要在字符串中基于 "++" 或者 '++' 的方式把变量拼接到字符串中（这种方式一不留神就容易拼错）
```js
let result = year + "年" + month + "月" + day + "日 " + hours + ":" + minutes + ":" + seconds;
let result = "" + year + "年" + month + "月日 ::";
console.log(result);
```

#### 2.模板字符串中可以换行
```js
let result = {
 name: 'zhangsan',
 age: 20,
 sex: '男'
}
let html = ` <div>
 <span>${result.name}</span>
 <span>${result.age}</span>
 <span>${result.sex}</span>
</div> `;
```

#### 3.模板字符串可以调用函数
```js
const sayHello = function () {
 return 'happy everyday';
};
let greet = `${sayHello()} 哈哈哈哈`;
console.log(greet); // happy everyday 哈哈哈哈
```

### startsWith()和endsWith()
- startsWith()：表示参数字符串是否在原字符串的头部，返回布尔值
- endsWith()：表示参数字符串是否在原字符串的尾部，返回布尔值
```js
let str = 'Hello world!';
str.startsWith('Hello') // true
str.endsWith('!') // true
```

### repeat()
repeat方法表示将原字符串重复n次，返回一个新字符串。
```js
'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
```