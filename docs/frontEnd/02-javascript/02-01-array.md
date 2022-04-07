# 2.2.1.数组中常用的方法 
- 方法的作用和含义 
- 方法的实参（类型和含义） 
- 方法的返回值 
- 原来的数组是否会发生改变
## 一、basic
### 1.1.数组
- 数组可以把一组相关的数据一起存放，并提供方便的访问(获取）方式。
- 数组是指一组数据的集合，其中的每个数据被称作元素，在数组中可以存放任意类型（字符串，数字，布尔型)的元素。数组是一种将一组数据存储在单个变量名下的优雅方式。


### 1.2.创建数组
JS 中创建数组有两种方式：

#### 1.new创建数组  

  ```js
  var 数组名 = new Array() ；
  var arr = new Array();   // 创建一个新的空数组
  ```

  注意 Array () ，A 要大写    

#### 2.数组字面量创建数组

  ```js
  //1. 使用数组字面量方式创建空的数组
  var  数组名 = []；
  //2. 使用数组字面量方式创建带初始值的数组
  var  数组名 = ['小白','小黑','大黄','瑞奇'];
  ```

### 1.3.获取数组元素
利用索引，索引是从0开始的。

注意：如果访问时数组没有和索引值对应的元素，则得到的值是undefined

### 1.4.数组长度
数组名.length
  ```js
  var arrStus = [1,2,3];
  alert(arrStus.length);  // 3
  ```
- 数组的长度 = 数组元素的个数 ，不要和数组的索引号混淆。
- 当数组元素个数发生变化，length属性跟着一起变化
  
数组的length属性可以被修改：
- 如果设置的length属性值大于数组的元素个数，则会在数组末尾出现白元素；
- 如果设置的length属性值小于数组的元素个数，则会把超过该值的数元素删除


### 1.5.判断数组
Array.isArray()

是数组 Array 的静态方法，只能通过 Array 自己调用；

Array.isArray() 检测一个值是否是一个数组，如果是返回 true，不是就返回 false

```js
console.log(Array.isArray([])); // true
console.log(Array.isArray(1)); // false
arr instanceof Array; // true
```


## 二、数组方法目录
1.判断数组
- isArray
- instanceof

2.数组增删改，这一部分方法都会修改原有的数组
- push
- unshift
- shift
- pop
- splice

3.查询和拼接,原来数组不会改变
- slice
- concat

4.数组=>字符串，原数组不变
- toString
- join


5.检测数组包含某一项，原数组不变
- indexOf 
- lastIndexOf 
- includes

6.排序or排列，原来数组改变
- reverse
- sort

7.遍历数组中每一项的方法
- forEach
- map
- filter
- find
- reduce
- some
- ...

8.Array.prototype 在控制台查看数组中所有提供的方 法，可以基于MDN网站去查询方法的用法






## 数组常用方法
### 增
#### 1.push
- 作用：向数组末尾追加项（可以多项，多项直接用逗号分隔）
- 参数：需要添加到数组的项
- 返回值：新增后数组的长度
- 原数组是否改变：是
```js
var ary1 = [1, 2, 3];
var r1 = ary1.push(4, 5);// 基于原生JS操作键值对的方法，也可以向末尾追加 一项新的内容 
console.log(ary1, r1);
// [1, 2, 3, 4, 5] 5 使用了push，会返回数组增加项之后的长度
```

##### push原理
```js
Array.prototype.myPush = function () {
	// this 指向数组的实例
	for (let i = 0; i < arguments.length; i++) {
		this[this.length] = arguments[i];
	}
	return this.length;
};

let r2 = ary.myPush(11);
console.log(ary);
console.log(r2);
```

#### 2.arr[arr.length] = 值
数组[数组长度] = 要添加的内容

```js
let ary =[1, 2, 3, 4, 5]
ary[ary.length] = 40; 
console.log(ary); //->[1, 2, 3, 4, 5, 40]
```

#### 3. unshift 
- 作用：向数组开头添加项
- 参数：需要追加到开头的项
- 返回值：新增后数组的长度
- 原数组是否改变：是
```js

let ary = [10, 20]; 
let res = ary.unshift(30, 'AA');
console.log(res, ary); 
//=>4 [30, 'AA' ,10,20]
```

#### 4.扩展符"..."
```js
// 基于原生ES6展开运算符，把原有的ARY克隆一 份，在新的数组中创建第一项，其余的内容使用原始 ARY中的信息即可，也算实现了向开始追加的效果
let ary = [30, 'AA' ,10,20]
ary = [100, ...ary]; 
console.log(ary); 
//=> [100,30, 'AA' ,10,20]
```

#### 5.splice
- 用法：实现数组项的增加

- 参数：第一个参数（插入位置），第二个参数（0），第三个参数（插入的项）。

- 返回值：array.splice(index,0,insertValue)，返回值为空数组，array值为最终结果值。


```js

// 实现增加 
ary.splice(3, 0, '呵呵呵'); 
console.log(ary); 
//=>[10, "111", "哈哈哈", "呵呵呵", 40, 50]

// 向数组末尾追加 
ary.splice(ary.length, 0, 'AAA'); 

// 向数组开始追加 
ary.splice(0, 0, 'BBB');

let fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"]  
fruits.splice(0, 2, "potato", "tomato")  
console.log(fruits) // returns  ["potato", "tomato", "orange", "watermelon", "apple", "orange", "grape", "apple"]
```


### 删
#### 1. shift
- 作用: 删除数组中的第一项 && 提取开头第一项元素
- 参数：  
- 返回值：删除的那一项
```js
let ary = [10, 20, 30, 40]; 
let res = ary.shift(); 
console.log(res, ary); 
//=>10 [20, 30, 40]
```

#### 2.pop
- 作用：删除数组末尾一项
- 参数：无
- 返回值：被删除的数组项
- 原数组是否改变：是
```js
let ary = [10, 20, 30, 40]; 
let res = ary.pop(); 
console.log(res, ary);  //40 [10,20,30]
//=>40 [10,20,30]
// 基于原生JS让数组数组长度删掉一位，默认删掉的 就是最后一项
ary.length--; 
//=>ary.length = ary.length - 1; 
console.log(ary); // [10,20]
```
#### pop原理
```js
Array.prototype.myPop = function () {
	// this 就是数组实例
	let last = this[this.length - 1];
	this.length--;
	return last;
};

let r3 = ary.myPop();
console.log(r3);
```



#### 3. splice
```js
// splice : 实现数组的增加、删除、修改 
// @params  
// n,m 都是数字 从索引n开始删除m个元素（m 不写，是删除到末尾） 
// @return  把删除的部分用新数组存储起来返回

let ary = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let res = ary.splice(2, 4); 
console.log(res, ary); 
//=>[30, 40, 50, 60] [10, 20, 70, 80, 90]

// 基于这种方法可以清空一个数组，把原始数组中的 内容以新数组存储起来（有点类似数组的克隆：把原来 数组克隆一份一模一样的给新数组）
res = ary.splice(0); 
console.log(res, ary);
//=>[10, 20, 70, 80, 90] [] 

// 删除最后一项和第一项 
ary.splice(ary.length - 1); 
ary.splice(0, 1); 
console.log(ary);

```

#### 4.filter
筛选出新数组，将符合条件的元素装入新数组返回
- 如果数组装的引用类型，那么返回的新数组中保存的是元素的地址
- 如果数组装的值类型，那么返回的新数组中保存的是元素的副本
```js
// 用filter删除数组中虚值
虚值：false, 0, "", null, NaN, undefined
var mixedArr = [0, “blue”, “”, NaN, 9, true, undefined, “white”, false];  
var trueArr = mixedArr.filter(Boolean);  
console.log(trueArr); // returns [“blue”, 9, true, “white”]
```

### 改
#### 1.arr[i] =
用索引下标改
#### 2. splice
```js
// splice : 实现数组的修改
// @params  
// n,m,x 从索引n开始删除m个元素，用x占用删 除的部分 
// n,0,x 从索引n开始，一个都不删，把x放到 索引n的前面 @return  
// 把删除的部分用新数组存储起来返回

let ary = [10, 20, 30, 40, 50]; 
let res = ary.splice(1, 2, '啦啦啦' , '哈哈哈');
console.log(res, ary); 
//=> [20,30] [10, '啦啦啦' , '哈哈哈' , 40, 50]


```

### 查询&拼接
#### slice
- 作用：从索引 n 开始复制到索引 m（不包括m）
- 参数：起始索引 n，终点索引 m; 注意：m 不写就是复制到最后一项，如果 n 和 m 都不写也是从开头复制到末尾
- 返回值：复制的项组成的新数组
- 原数组是否改变：否

```js
let ary = [10, 20, 30, 40, 50]; 
let res = ary.slice(1, 3); 
console.log(res); 
//=>[20,30]

// m不写是找到末尾 
res = ary.slice(1); 
console.log(res); 
//=>[20, 30, 40, 50] 

// 数组的克隆，参数0不写也可以 
res = ary.slice(0); 
console.log(res); 
//=>[10, 20, 30, 40, 50] 
// 思考：1.如果n/m为负数会咋地，如果n>m了会咋 地，如果是小数会咋地，如果是非有效数字会咋地，如 果m或者n的值比最大索引都会咋地？ 2.这种克隆方式 叫做浅克隆，可以回去先看看深度克隆如何处理!
```


#### concat
- 作用：实现数组拼接  
- 参数：多个任意类型值 
- 返回值： 拼接后的新数组（原来数组不变）
- 原数组是否改变：否
```js
let ary1 = [10, 20, 30]; 
let ary2 = [40, 50, 60]; 
let res = ary1.concat('莉安' , ary2); console.log(res);
```

#### ...拓展运算符
```js
let ary1 = [1,2,3,4,5,7];
let ary2 = [sdcf,grf,ad,3,4];
console.log([...ary1,..ary2])
```

## 包含&查找
检测数组中的是否包含某一项
### indexOf 
- 作用：数组项 x 在数组中第一次出现的索引位置
- 参数：数组项x
- 返回值：如果数组中存在该项，就返回该项第一次出现的索引，如果不存在，则返回-1
- 原数组是否改变：否
### lastIndexOf 
- 作用：数组项 x 在数组中最后一次出现的索引位置
- 参数：数组项x
- 返回值：如果数组中存在该项，就返回该项最后一次出现的索引，如果不存在，则返回 -1
- 原数组是否改变：否
- （在IE6~8中 不兼容）
### includes
包含：如果存在返回的是TRUE
表示某个数组是否包含给定的值，返回布尔值。
```js
[1, 2, 3].includes(2) // true
[1, 2, 3].includes(4) // false
```
```js
let ary = [10, 20, 30, 10, 20, 30]; 
console.log(ary.indexOf(20)); //=>1 console.log(ary.lastIndexOf(20)); //=>4 

// 想验证ARY中是否包含'yaya' 
if (ary.indexOf('yaya') === -1) {
	// 不包含 
} 

// 也可以直接使用ES6新提供的includes方法判断 
if (ary.includes('yaya')) { 
// 包含：如果存在返回的是TRUE 
}
```

```js
// 查找第一个匹配项
const num = arr.find(function (item, i) {
  return item % 2 === 0; // 条件
});

// 查找第一个匹配项的索引
const idx = arr.findIndex(function (item, i) {
  return item % 2 === 0; // 条件
});

// 查找是否有匹配项
const boo = arr.some(function (item, i) {
  return item % 2 === 1; // 条件
});

// 检查是否每一项都是偶数
const boo = arr.every(function (item, i) {
  return item % 2 === 0; // 条件
});

// 查找第一个匹配项的索引（low）
const idx = arr.indexOf(2); // 1

// 查找是否有匹配项
const boo = arr.includes(2); // true
```


## 排序&排列
### reverse
- 作用：让数组翻转排列
- 参数：无
- 返回值：翻转过后的数组
- 原数组是否改变：是
```js
let ary = [12, 15, 9, 28, 10, 22]; 
ary.reverse(); 
console.log(ary); 
//=>[22, 10, 28, 9, 15, 12]
```


### sort
- 作用：默认按unicode升序或降序排序
- 参数：回调函数
  - SORT方法中如果不传递参数，是无法处理10以上
- (a-b)升序排列，（b-a)降序排列
- 返回值：
  - 如果回调函数 return a - b 返回升序排列后的数组
  - 如果回调函数 return b - a 返回降序排列后的数组；
- 原数组是否改变：是
```js
let ary = [7, 8, 5, 2, 4, 6, 9]; 
ary.sort(); 
console.log(ary); 
//=>[2, 4, 5, 6, 7, 8, 9]
// SORT方法中如果不传递参数，是无法处理10以上 数字排序的(它默认按照每一项第一个字符来排，不是 我们想要的效果) 

ary = [12, 15, 9, 28, 10, 22]; 
ary.sort(); 
console.log(ary); 
//=> [10, 12, 15, 22, 28, 9] 


// 想要实现多位数正常排序，需要给SORT传递一个函数，
// 函数中返回 a-b 实现升序，返回 b-a 实现降序 
ary = [12, 15, 9, 28, 10, 22]; 
// ary.sort(function(a,b){ return a-b; }); 
ary.sort((a, b) => a - b); 
console.log(ary);
```

```js
const arr = [1, 3, 2, 4];
arr.sort(); // 1, 2, 3, 4
const arr1 = [2, 11, 3, 'b', 'a'];
// 默认按unicode排序
arr1.sort(); // 11, 2, 3, 'a', 'b'
arr1.sort(function (a, b) {
 return a - b;
});
Array.prototype.mass = function () {
 // return this.sort(function () {
 //  return Math.random() - .5; // 50%几率小于0  50%几率大于0 
 // });
 return this.sort(() => Math.random() - .5); // 50%几率小于0  50%几率大于0 
 };
```

<!-- ::: 容器
这是一个容器
::: -->


## 遍历数组
### 原生
```js
let ary = [12, 15, 9, 28, 10, 22]; 
// 基于原生JS中的循环实现 
for (let i = 0; i < ary.length; i++) { 
// i:当前循环这一项的索引 
// ary[i]:根据索引获取循环的这一项 
console.log('索引： ' + i + ' 内容： ' + ary[i]); 
} //->
// 索引： 0 内容： 12
// 索引： 1 内容： 15
// 索引： 2 内容： 9
// ...
```



### foreach
- 语法：
  ```js
  forEach(function (item, index) {
  在回调函数里可以操作这些值
  })
  ```
- 作用：遍历数组
- 参数：回调函数（回调函数的参数：item 是遍历时每一个数组项，index 是这个数组项的索引）
- 返回值：无
- 原数组是否改变：否
```js
let ary = [12, 15, 9, 28, 10, 22]; 
ary.forEach((item, index) => { 
// 数组中有多少项，函数就会被默认执行多少次 
// 每一次执行函数：item是数组中当前要操作 的这一项，index是当前项的索引 
console.log('索引： ' + index + ' 内 容： ' + item); 
});
```

#### forEach原理
```js
Array.prototype.myForEach = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i);
	}
};
ary.myForEach(function (item, index) {
	console.log(item, index);
});
```

### map
`map(function (item, index) {})`
- 作用：将原数组映射成一个新数组
- 参数：回调函数（回调函数的参数同 forEach）
- 返回值：由回调函数的返回值组成的新数组
- 原数组是否改变：否
```js
var ary = [1, 2, 5];
var r = ary.map(function (item, index) {
  return item  * 2;
});
console.log(ary, r);
// [1, 2, 5] (3) [2, 4, 10]
```

#### map原理
```js
Array.prototype.myMap = function (cb) {
	let newArr = [];
	for (let i = 0; i < this.length; i++) {
		let result = cb(this[i], i);
		newArr.push(result);
	}
	return newArr;
};

let r6 = ary.myMap(function (item, idx) {
	return item * 2;
});
console.log(r6);
```


### from
- 作用：对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例
- 语法：Array.from(arrayLike[, mapFn[, thisArg]])
- 参数：
    - arrayLike
    想要转换成数组的伪数组对象或可迭代对象。
    - mapFn (可选)
    如果指定了该参数，新数组中的每个元素会执行该回调函数。
    - thisArg (可选)
    可选参数，执行回调函数 mapFn 时 this 对象。
- 返回值：一个新的数组实例。
```js
console.log(Array.from('foo'));
// Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
//Array [2, 4, 6]
```
```js
let friends = [  
 { name: 'John', age: 22 },  
 { name: 'Peter', age: 23 },  
 { name: 'Mark', age: 24 },  
 { name: 'Maria', age: 22 },  
 { name: 'Monica', age: 21 },  
 { name: 'Martha', age: 19 },  
]  
  
let friendsNames = Array.from(friends, ({name}) => name)  
  
console.log(friendsNames) //returns ["John", "Peter", "Mark", "Maria", "Monica", "Martha"]
```
- 创建数组方式
  - 伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
  - 可迭代对象（可以获取对象中的元素,如 Map和 Set 等）

eg.
1. 从 String 生成数组
```js
Array.from('foo');
// [ "f", "o", "o" ]
```

2. 从 Set 生成数组
```js
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

3. 从 Map 生成数组
```js
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```
4. 从类数组对象（arguments）生成数组
```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```
 
5. 在 Array.from 中使用箭头函数
```js
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### filter
### find
用于找出第一个符合条件的数组成员，如果没有找到返回undefined
```js
let ary = [{
 id: 1,
 name: '张三'
}, {
 id: 2,
 name: '李四'
}];
let target = ary.find((item, index) => item.id == 2);
```

### findIndex()
用于找出第一个符合条件的数组成员的位置，如果没有找到返回-1
```js
let ary = [1, 5, 10, 15];
let index = ary.findIndex((value, index) => value > 9);
console.log(index); // 2
```

### reduce

### some
### every
### ...使用拓展运算符
```js
let fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"] 
// 第一种方法  
let uniqueFruits = Array.from(new Set(fruits))  
//第二种方法  
let uniqueFruits2 = [...new Set(fruits)]
```
Array.prototype 在控制台查看数组中所有提供的方 法，可以基于MDN网站去查询方法的用法

## 数组 => 字符串
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

## 数组 => 对象
### arrObj = {...arr}
```js
let fruits = ["banana", "apple", "orange", "watermelon"];  
  
let fruitsObj = {...fruits};  
  
console.log(fruitsObj) // returns {0: “banana”, 1: “apple”, 2: “orange”, 3: “watermelon”, 4: “apple”, 5: “orange”, 6: “grape”, 7: “apple”}
```




## 类数组 => 数组
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

##  清空数组
### arr.length = 0
```js
let fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"];  
  
fruits.length = 0;  
console.log(fruits); // returns []
```




## 相同数据填充数组
### .fill()
```js
let newArray = new Array(10).fill('1')  
console.log(newArray) // returns [“1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”, “1”]
```

## 复制填充
### copyWithin




## 合并数组
### .concat
### 扩展运算符 “ ... ”
```js
var fruits = [“apple”, “banana”, “orange”];  
var meat = [“poultry”, “beef”, “fish”];  
var vegetables = [“potato”, “tomato”, “cucumber”];  
var food = […fruits, …meat, …vegetables];  
console.log(food); // [“apple”, “banana”, “orange”, “poultry”, “beef”, “fish”, “potato”, “tomato”, “cucumber”]
```



## 数组交集
其展示了你是否可以使用数组方法以及逻辑
```js
var numOne = [0, 2, 4, 6, 8, 8];  
var numTwo = [1, 2, 3, 4, 5, 6];  
var duplicatedValues = [...new Set(numOne)].filter(item=> numTwo.includes(item))  
console.log(duplicatedValues); // returns [2, 4, 6]
```

其他方法：
```js
    let a1 =[1,2,3,4,5];
    let a2 =[34,45,1,1,2,4,4]
    function intersection(){
        return [...new Set(a1)].filter(function(item){
            return new Set(a2).has(item);
        })
    }
    console.log(intersection());//-> [1，2，4]
```

```js
let a = [...]
let b = [...]
 // 交集
 let intersect = new Set([...a].filter(x => b.has(x)));
```



## 获取随机值
### Math.random()
```
var colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];  
  
var randomColor = colors[(Math.floor(Math.random() * (color.length)))]
```


## 数组所有值求和
### .reduce()
```js
var nums = [1, 5, 2, 6];  
var sum = nums.reduce((x, y) => x + y);  
console.log(sum); // returns 14
```

## 数组去重
### 1.ES6数组去重
不考虑兼容性，这种去重的方法代码最少,这种方法还无法去掉“{}”空对象
```js
function unique (arr) {
  return Array.from(new Set(arr))
}
var arr = [1,1,2,2,2,3,2,4,5,6,7,3,2,8,{},{}]
console.log(unique(arr))
//  [1, 2, 3, 4, 5, 6, 7, 8,{},{}]
```
### 2.1.ES6简易版
```js
[...new Set(arr)] 
```

### 2.2.合并后去重
```js
function combine(){
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    return Array.from(new Set(arr));
}

var m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n));  // [1, 2, 3]
```

### 3.Map去重
创建一个空Map数据结构，遍历需要去重的数组，把数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果。

```js
    function unique(arr) {
        let map = new Map();
        let array = new Array();  // 数组用于返回结果
        for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {  // 如果有该key值
                map.set(arr[i], true);
            } else {
                map.set(arr[i], false);   // 如果没有该key值
                array.push(arr[i]);
            }
        }
        return array;
    }
    var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
    console.log(unique(arr))
//[1, "a", "true", true, 15, false, 1, {…}, null, NaN, NaN, "NaN", 0, "a", {…}, undefined]
```

### 4.利用filter
```js
    function unique(arr) {
        return arr.filter(function (item, index, arr) {
            //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
            return arr.indexOf(item, 0) === index;
        });
    }
    var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
    console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, "NaN", 0, "a", {…}, {…}]
```

### 5.includes
```js
    function unique(arr) {
        if (!Array.isArray(arr)) {
            console.log('type error!')
            return
        }
        var array = [];
        for (var i = 0; i < arr.length; i++) {
            if (!array.includes(arr[i])) {//includes 检测数组是否有某个值
                array.push(arr[i]);
            }
        }
        return array
    }
    var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
    console.log(unique(arr))
    //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {…}, {…}]     //{}没有去重
```

### 6.sort()
利用sort()排序方法，然后根据排序后的结果进行遍历及相邻元素比对。
```js
function unique(arr) {
    if (!Array.isArray(arr)) {
        console.log('type error!')
        return;
    }
    arr = arr.sort()
    var arrry= [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i-1]) {
            arrry.push(arr[i]);
        }
    }
    return arrry;
}
     var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
        console.log(unique(arr))
// [0, 1, 15, "NaN", NaN, NaN, {…}, {…}, "a", false, null, true, "true", undefined]      //NaN、{}没有去重
```

### 7.利用indexOf去重
新建一个空的结果数组，for 循环原数组，判断结果数组是否存在当前元素，如果有相同的值则跳过，不相同则push进数组。
```js
    function unique(arr) {
        if (!Array.isArray(arr)) {
            console.log('type error!')
            return
        }
        var array = [];
        for (var i = 0; i < arr.length; i++) {
            if (array.indexOf(arr[i]) === -1) {
                array.push(arr[i])
            }
        }
        return array;
    }
    var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
    console.log(unique(arr))
   // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {…}, {…}]  //NaN、{}没有去重
```

### 8.双重for,splice去重（ES5常用）
双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。
```js
function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {         //第一个等同于第二个，splice方法删除第二个
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
var arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];
console.log(unique(arr))
//[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
```

## 三、数组排序算法
[数组排序算法](../../cs_basic/data_construct/sort.md)：冒泡、快速、插入


## 四、求数组极值
需求：求数组中的最大值和最小值
```js
let ary = [1, 9, 18, 234, 23];
```

### 1.先升序排序，排序后，数组的第一项就是最小值
```js
ary.sort(function (a, b) {
	return a - b;
});
let min = ary[0];
// 接着降序排列，排序后数组的第一项就是最大值；
ary.sort(function (a, b) {
	return b - a;
});
```

### 2.假设法
- 求最小值：假设第一项就是最小值；
```js
let min1 = ary[0];
for (let i = 1; i < ary.length; i++) {
	ary[i] < min ? min = ary[i] : void 0;
}
console.log(min1);
```

- 求最大值：假设第一项最大值
```js
let min1 = ary[0];
for (let i = 1; i < ary.length; i++) {
	ary[i] < min ? min = ary[i] : void 0;
}
console.log(min1);
```

### 3.排序算法


### 4.Math.max() 和 Math.min()
- Math.max() 从一堆数字中取出最大值
- Math.min() 从一堆数字中取出最小值
```js
let min3 = Math.min(2, 3, 5, 0, -1);
let max3 = Math.max(12, 4, 1);
console.log(min3);
console.log(max3);
```