# ES6模块化规范
## 一.什么是模块

模块化是指在解决某一个复杂问题或者一系列的杂糅问题时，依照一种分类的思维把问题进行系统性的分解以之处理。模块化是一种处理复杂系统分解为代码结构更合理，可维护性更高的可管理的模块的方式。

既然是模块化设计，那么作为一个模块化系统所必须的能力：

- 定义封装的模块
- 可以导出内容供其他模块使用
- 可以导入其他模块的内容

## 二.ES6的模块规范（ESModule）

ES6 为了弥补 JS 没有模块系统提出了新的模块化方案，即 ESModule；ES6 的模块化主要依靠 export 和 import 两个指令完成的；此外页面中引入 js 的 script 标签也需要指定 type="module";

## 三.export导出

export 命令用于规定模块的对外接口；

### export用法 

#### 1.单个导出

test1-export.js
```js
export var name = 'yaya';
export var age = 'age';
export var job = 'FE';

export let x = 1;
export const y = 2;

export function sum (a, b) {
	return a + b;
}
```

### 2.批量导入

test2-export.js

```js
var name = 'yaya';
var age = 18;
var job = 'FE';

let x = 1;
const y = 2;

function sum(a, b) {
	return a + b;
}

class Teacher {
	constructor(name, age, job) {
		this.name = name;
		this.age = age;
		this.job = job;
	}
}

export {name, age, job, x, y, sum, Teacher}
```

优先考虑这种写法，因为这样可以很清晰的这个模块导出了哪些东西


## 四.import导入
使用 export 命令定义了模块的对外接口以后，其他 js 文件就可以通过 import 命令加载这个模块；

### 原名导出
test3-import.js
```js
import {name, age, job, sum} from './test1-export.js';
```

import 后面的 from 指定模块文件的位置，可以是相对路径，也可以是绝对路径

### 给导出的内容重命名
如果想给输入的变量改名字需要使用 as 关键字

test4-import.js

```js
import {Teacher as T } from "./tets2-export.js";

console.log(name, age);
let x = sum(1, 2);
console.log(x);

console.log(T);
```

### 导出全部内容

test5-import-all.js

```js
import * as yaya from './test1-export.js'; // 从这 test1-export.js 中把所有导出的东西都导出来，放到一个 yaya 的对象中；

console.log(yaya.name);
console.log(yaya.age);
console.log(yaya.job);
console.log(yaya.sum(3, 4));
```

## 五.export-default
在此前的例子中，使用 import 导入的时候，用户需要知道要导入的变量名或者函数名，否则无法加载；为了提供更方便的导入方式，在导出的时候可以使用 export default 命令导出，这样导出可以指定为模块默认的导出；

6-export-default.js
```js
export default function (a, b) {
	return a + b;
}
```

注意，一个模块只能有一个 export default，如果有多个就会报错；

```js
export default function (a, b) {
	return a + b;
}

// 其他模块在加载这个模块的时候可以给该函数指定任意名字

var a = 1;

export default a; 
// 报错，一个模块只能导出一个 export default，因为 default 相当于是变量名，不能重复；
```



## 六.导入export default导出的内容
导入默认导出模块时不用再写花括号

7-import.js
```js
import sum from './6-export-default.js';

console.log(sum(1, 2));
```

## 七.动态导入
import 命令只能同步导入，因为 import 是静态的，发生在 js 代码执行之前；

### import() 方法

import() 方法可以动态导入，import() 方法返回一个 promise 对象，可以直接 .then，在 then 的第一个回调的参数就是模块中导出的内容；

8-dynamic-import.js —— 点击时导入内容
```js
let btn = document.getElementById('btn');
btn.onclick = function () {
	import('./test1-export.js').then((res) => {
		console.log(res)
	});
};
```

### 动态导入模块的场景

1. 按需加载，如在点击的时候或者滑动的时候再去加载某个模块
2. 条件加载，如果条件为 true 加载 a 模块，否则加载 b 模块
3. 模块的路径是动态的，例如通过ajax从服务端获取的


### 动态加载多个模块：Promise.all()
```js
Promise.all([
	import('./test1-export.js'),
	import('./test2-export.js')
]).then((arr) => {
	console.log(arr);
});
```

### import() 和 async 函数

import() 还可以用在 async 函数中，通过 await 直接获取动态导入的内容；

```js
async function get() {
	let one = await import('./test1-export.js');
	return one;
}

get().then(res => {
	console.log('res');
	console.log(res)
});
```


## 八.浏览器中使用 ESModule

● 如果JS文件中使用export 或者 import 关键字，在不用工具处理的情况下引入 html，需要在 script 标签上增加 type="module" 属性；
```js
<script src="1-esmodule/test1-export.js" type="module"></script>
```
