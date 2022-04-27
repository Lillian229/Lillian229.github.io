# 二、数组_遍历
## 原生
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



## foreach
- 语法：
  ```js
  forEach(function (item, index) {
  在回调函数里可以操作这些值
  })
  ```
- 作用：遍历数组
- 参数：回调函数（回调函数的参数：item 是遍历时每一个数组项，index 是这个数组项的索引）
- 🔅🔅🔅返回值：无
- 原数组是否改变：否
```js
let ary = [12, 15, 9, 28, 10, 22]; 
ary.forEach((item, index) => { 
// 数组中有多少项，函数就会被默认执行多少次 
// 每一次执行函数：item是数组中当前要操作 的这一项，index是当前项的索引 
console.log('索引： ' + index + ' 内 容： ' + item); 
});
```

### forEach原理
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

## map
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

### map原理
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


## from
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

// 遍历生成1-100
Array.from(Array(100),(v,i) => i + 1);
// [1,2,3....,99,100]
```

## filter
## find
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

## findIndex()
用于找出第一个符合条件的数组成员的位置，如果没有找到返回-1
```js
let ary = [1, 5, 10, 15];
let index = ary.findIndex((value, index) => value > 9);
console.log(index); // 2
```

## reduce

## some
## every
## ...使用拓展运算符
```js
let fruits = ["banana", "apple", "orange", "watermelon", "apple", "orange", "grape", "apple"] 
// 第一种方法  
let uniqueFruits = Array.from(new Set(fruits))  
//第二种方法  
let uniqueFruits2 = [...new Set(fruits)]
```
Array.prototype 在控制台查看数组中所有提供的方 法，可以基于MDN网站去查询方法的用法






