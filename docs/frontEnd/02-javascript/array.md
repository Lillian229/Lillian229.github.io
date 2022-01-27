
# 数组中常用的方法 
- 方法的作用和含义 
- 方法的实参（类型和含义） 
- 方法的返回值 
- 原来的数组是否会发生改变

# 目录
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
-  lastIndexOf 
-   includes

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




## 判断数组
```js
Array.isArray(arr); // true
arr instanceof Array; // true
```

## 数组的增删改查：
### 增
#### 1.push
#### 2.arr[arr.length] = 值
数组[数组长度] = 要添加的内容

```js
push : 向数组末尾增加内容 
@params  多个任意类型 
@return 新增后数组的长度 

let ary = [10, 20]; 
let res = ary.push(30, 'AA'); // 基于原生JS操作键值对的方法，也可以向末尾追加 一项新的内容 
ary[ary.length] = 40; 
console.log(res, ary);
//=>4 [10,20,30, 'AA' ,40] 
```

#### 3. unshift 
返回新增后数组长度
#### 4.扩展符"..."
```js
unshift : 向数组开始位置增加内容  
@params  多个任意类型  
@return  新增后数组的长度

let ary = [10, 20]; 
let res = ary.unshift(30, 'AA');
console.log(res, ary); 
//=>4 [30, 'AA' ,10,20]

// 基于原生ES6展开运算符，把原有的ARY克隆一 份，在新的数组中创建第一项，其余的内容使用原始 ARY中的信息即可，也算实现了向开始追加的效果

ary = [100, ...ary]; 
console.log(ary); 
//=> [100,30, 'AA' ,10,20]
```

#### 5.splice
```js
splice : 实现数组的增加

插入功能，第一个参数（插入位置），第二个参数（0），第三个参数（插入的项）。

用法：array.splice(index,0,insertValue)，返回值为空数组，array值为最终结果值。


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
```js
shift : 删除数组中的第一项 && 提取开头第一项元素
@params  
@return  删除的那一项

let ary = [10, 20, 30, 40]; 
let res = ary.shift(); 
console.log(res, ary); 
//=>10 [20, 30, 40]
```

#### 2.pop
```js
pop : 删除数组中的最后一项&&从结尾提取元素
@params
@return 删除的那一项
let ary = [10, 20, 30, 40]; 
let res = ary.pop(); 
console.log(res, ary); 
//=>40 [10,20,30]
// 基于原生JS让数组数组长度干掉一位，默认干掉的 就是最后一项
ary.length--; 
//=>ary.length = ary.length - 1; 
console.log(ary);
```

#### 3. splice
```js
splice : 实现数组的增加、删除、修改 
@params  
n,m 都是数字 从索引n开始删除m个元素（m 不写，是删除到末尾） 
@return  把删除的部分用新数组存储起来返回

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
用filter删除数组中虚值
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
splice : 实现数组的修改
@params  
n,m,x 从索引n开始删除m个元素，用x占用删 除的部分 
n,0,x 从索引n开始，一个都不删，把x放到 索引n的前面 @return  
把删除的部分用新数组存储起来返回

let ary = [10, 20, 30, 40, 50]; 
let res = ary.splice(1, 2, '啦啦啦' , '哈哈哈');
console.log(res, ary); 
//=> [20,30] [10, '啦啦啦' , '哈哈哈' , 40, 50]


```

### 查询&拼接
#### slice
```js
slice : 实现数组的查询，截取一段元素
@params  
n,m 都是数字 从索引n开始，找到索引为m的地 方（不包含m这一项） 
@return  
把找到的内容以一个新数组的形式返回，原数组不变

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
```js
concat : 实现数组拼接  
@params  多个任意类型值 
@return  拼接后的新数组（原来数组不变）

let ary1 = [10, 20, 30]; 
let ary2 = [40, 50, 60]; 
let res = ary1.concat('珠峰培训' , ary2); console.log(res);
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


## 包含
检测数组中的是否包含某一项
### indexOf 
检测当前项在数组中第一次出现位置的索引值
### lastIndexOf 
检测当前项在数组中最后一次出现位置的索引值
验证是否包含，包含返回索引，不包含返回-1
### includes
包含：如果存在返回的是TRUE
```js
indexOf / lastIndexOf : 检测当前项在数组 中第一次或者最后一次出现位置的索引值（在IE6~8中 不兼容）
@params 要检索的这一项内容 
@return
这一项出现的位置索引值（数字），如果数组中 没有这一项，返回的结果是-1 
原来数组不变

let ary = [10, 20, 30, 10, 20, 30]; console.log(ary.indexOf(20)); //=>1 console.log(ary.lastIndexOf(20)); //=>4 

// 想验证ARY中是否包含'yaya' 
if (ary.indexOf('yaya') === -1) {
	// 不包含 
} 

// 也可以直接使用ES6新提供的includes方法判断 
if (ary.includes('yaya')) { 
// 包含：如果存在返回的是TRUE 
}
```


## 排序&排列
### reverse
原来数组改变
```js
reverse : 把数组倒过来排列 
@params 
@return  
排列后的新数组  
原来数组改变

let ary = [12, 15, 9, 28, 10, 22]; 
ary.reverse(); 
console.log(ary); 
//=>[22, 10, 28, 9, 15, 12]
```


### sort
- 默认按unicode排序
- SORT方法中如果不传递参数，是无法处理10以上
- (a-b)升序排列，（b-a)降序排列
```js
sort : 实现数组的排序 
@params 可以没有，也可以是个函数 
@return 排序后的新数组

let ary = [7, 8, 5, 2, 4, 6, 9]; 
ary.sort(); 
console.log(ary); 
//=>[2, 4, 5, 6, 7, 8, 9]
// SORT方法中如果不传递参数，是无法处理10以上 数字排序的(它默认按照每一项第一个字符来排，不是 我们想要的效果) 

ary = [12, 15, 9, 28, 10, 22]; 
ary.sort(); 
console.log(ary); 
//=> [10, 12, 15, 22, 28, 9] 


// 想要实现多位数正常排序，需要给SORT传递一个函 数，
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

::: 容器
这是一个容器
:::


## 遍历数组
### foreach
原数组不变
```js
forEach：遍历数组中的每一项内容 
@params  回调函数
@return 原数组不变
let ary = [12, 15, 9, 28, 10, 22]; 
// 基于原生JS中的循环可以实现 
for (let i = 0; i < ary.length; i++) { 
// i:当前循环这一项的索引 
// ary[i]:根据索引获取循环的这一项 
console.log('索引： ' + i + ' 内容： ' + ary[i]); 
}
*/

ary.forEach((item, index) => { 
// 数组中有多少项，函数就会被默认执行多少次 
// 每一次执行函数：item是数组中当前要操作 的这一项，index是当前项的索引 
console.log('索引： ' + index + ' 内 容： ' + item); 
});
```

### map
.map() 映射数组
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
### filter
### find
### reduce
### some
### every
### ....
...使用拓展运算符
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
```js
toString : 把数组转换为字符串 
@params  
@return 转换后的字符串，每一项用逗号分隔（原来数组不变）
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
```js
join : 把数组转换为字符串 
@params  指定的分隔符（字符串格式）
@return 转换后的字符串（原来数组不变）
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
```
var numOne = [0, 2, 4, 6, 8, 8];  
var numTwo = [1, 2, 3, 4, 5, 6];  
var duplicatedValues = [...new Set(numOne)].filter(item=> numTwo.includes(item))  
console.log(duplicatedValues); // returns [2, 4, 6]
```


## 获取随机值
### Math.random()
```
var colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];  
  
var randomColor = colors[(Math.floor(Math.random() * (color.length)))]
```

## 反转数组
### .reverse()
```js
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
