# 2.2.数据类型

## 分类
数据类型是一门语言进行生产的材料，JS 中包含的值有以下这些类型：

- 基本类型：
  - number 数字 
  - string 字符串 
  - boolean 布尔 
  - null
  - undefined
  - Symbol 表示一个唯一值（ES6新增）
    -  static Symbol
	- Symbol.prototype
  - bigInt 大数字
  
-  引用数据类型：
    - 对象object
        - 普通对象
        - 数组对象
        - 正则对象
        - 日期对象
        - ...
    - 函数function

## 区别
基本数据类型

-   按值访问，可操作保存在变量中实际的值
-   值被保存在 `栈内存` 中，占据固定大小的空间

引用数据类型

-   引用类型的值是按引用访问的
-   保存在`堆内存`中的对象，不能直接访问操作对象的内存空间


## 新的数据（存储）结构，而不是数据类型
JSON、 Set 、 Map.....
eg. 在使用时，`let a = new Set/Map();`, `a.`就会出现一些Set/Map的方法
![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220325161619.png)

### Set
```js
   let s = new Set([1,2,3,4,5,4,3,2,1])
    console.log(typeof s); //->object
    // interator 有迭代器接口
    console.log([...s]);    //->[1, 2, 3, 4, 5]
```

- 集合：交集、并集、差集
```js
    let a1 =[1,2,3,4,5];
    let a2 =[34,45,1,1,2,4,4]
// 并集
    function union() {
        let s1 = new Set(a1);
        let s2 = new Set(a2);
        console.log([...new Set([...s1,...s2])]);
    }
    union();


//交集
    function intersection(){
        return [...new Set(a1)].filter(function(item){
            return new Set(a2).has(item);
        })
    }
    console.log(intersection());//-> [1，2，4]

//差集 -> 在a1中a2没有的东西,相比于交集取个反
    
    function diff() {
        // 返回为true的留下
        return [...new Set(a1)].filter(function (item) {
            return !new Set(a2).has(item);
        })
    }
    console.log(diff());  
```
- 集合：交集、并集、差集(箭头函数简化写法)
```js
 let a = new Set([1, 2, 3]);
 let b = new Set([2, 3, 4]);

 // 并集
 let union = new Set([...a, ...b]);

 // 交集
 let intersect = new Set([...a].filter(x => b.has(x)));

 // 差集
 let difference = new Set([...a].filter(x => !b.has(x)));
```

### Map


## 💡JS新增的两个原始数据类型
> （2022.03.10记）

➕ Record & Tuple ：在原先的对象和数组前面加了个 #

写法：
```js
// Records
const myRecord = #{
 name: '01',
  age: 23
}

// Tuple
const myTuple = #['1', '2', '3']
```

### 特性
- 可读性（只读的 Object 和 Array）
    ```js
        const myRecord = #{
            name: '01'
        }

        const myTuple = #['1', '2']

        myRecord['age'] = 23  // error会报错
        myTuple.push('3')  // error
    ```

- 非唯一性
    - 日常开发，数组之间，对象之间都不适合直接用`===`进行比较判断，因为每个生成的对象在内存中的地址都不一样
    ```js
    const obj1 = { name: '01' }
    const obj2 = { name: '01' }
    const objIsSame = obj1 === obj2   // false

    const arr1 = [1]
    const arr2 = [1]
    const arrIsSame = arr1 === arr2   // false
    ```
    - 比较两个数组或对象是否相等，只要内部内容一致，即使是两个分别生成的Record或Tuple比较一下，也是相等的
    ```js
    const record1 = #{ name: '01' }
    const record2 = #{ name: '01' }
    const recordIsSame = record1 === record2   // true

    const tuple1 = #[1]
    const tuple2 = #[1]
    const tupleIsSame = tuple1 === tuple2   // true
    ```

- 普通对象和数组的转换
    - 可以用对象 Record 和 Tuple 将普通的对象和数组转换
    ```js
    const myRecord = Record({ name: '01', age: 23 });   // #{ name: '01', age: 23 }
    const myTuple = Tuple([1, 2, 3, 4, 5]);   // #[1, 2, 3, 4, 5]
    ```
- 支持扩展运算符
    ```js
    const myTuple = #[1, 2, 3];
    const myRecord = #{ name: '01', age: 23 };

    const newRecord = #{ ...myRecord, money: 0 } // #{ name: '01', age: 23, money: 0 }
    const newTuple = #[ ...myTuple, 4, 5];   // #[1, 2, 3, 4, 5]
    ```

- JSON方法扩展
    - 现在有 JSON.parse 和 JSON.stringfy 两个方法，据说草案中还提到一个不错的想法，就是给 JSON 对象新增一个 parseImmutable 方法，功能应该就是直接将一个 Record字符串或Tuple字符串 解析成对应的Record和Tuple对象


### 应用场景
- 用于保护一些数据，比如函数的返回值、对象内部的静态属性...
- 既然具有只读的特性，即不可变对象，那应该也可以作为对象的 key 值...


### 具体使用（预先体验）
1. 安装babel插件
    ```js
    # babel基本的库
    yarn add @babel/cli @babel/core @babel/preset-env -D

    # Record和Tuple Babel polyfill
    yarn add @babel/plugin-proposal-record-and-tuple @bloomberg/record-tuple-polyfill -D
    ```

1. 目录下创建`.babelrc`
    ```js
    {
    "presets": ["@babel/preset-env"],
    "plugins": [
        [
          "@babel/plugin-proposal-record-and-tuple",
          {
            "importPolyfill": true,
            "syntaxType": "hash"
          }
        ]
      ]
    }
    ```
 
1. 创建一个`index.js`
    ```js
    const tuple1 = #[1,2,3]
    const tuple2 = #[1,2,3]

    const record1 = #{ name: '01' }
    const record2 = #{ name: '02' }

    console.log(tuple1 === tuple2, record1 === record2)
    ```
1. 执行`babel`命令编译
    ```js
    ./node_modules/.bin/babel index.js --out-file compiled.js
    ```
1. 输出得到的`compiled.js`文件内容
    ```js
    "use strict";

    var _recordTuplePolyfill = require("@bloomberg/record-tuple-polyfill");

    var tuple1 = (0, _recordTuplePolyfill.Tuple)(1, 2, 3);
    var tuple2 = (0, _recordTuplePolyfill.Tuple)(1, 2, 3);
    var record1 = (0, _recordTuplePolyfill.Record)({
    name: '01'
    });
    var record2 = (0, _recordTuplePolyfill.Record)({
    name: '02'
    });
    console.log(tuple1 === tuple2, record1 === record2);
    ```
1. 执行`compiled.js`可获得结果
    ```js
    node compiled.js
    # Result: true false
    ```

## 一、基本数据类型
### 1.number数字类型
+ 正数/负数/零/小数
+ Infinity ，代表无穷大，大于任何数值
+ -Infinity ，代表无穷小，小于任何数值
+ NaN ，Not a number，代表一个非数值，不是一个有效的数字，但是它却属于number类型

特点：`=`赋值 `==`比较 `===`完全相等

### ===和\==的区别？
===：**等同符**，先判断类型，相同之后比较等号的值，值相同返回true; 类型不同直接返回false。需判断**值**和**类型**同时**相等**。

==：**等值符**，只要值相同即可，类型不同会发生类型的自动转换。

eg.

    Infinity => Infinity

    - Infinity => - Infinity

    NaN==NaN  false不相等  NaN和任何值都不相等的

    -Infinity === Infinity  false不相等

无法基于 xxx==NaN 来验证xxx是否为有效数字，应该用`isNAN([value])`
		
### isNaN([value])
检测一个值[value]是否为“非有效数字”，如果不是有效数字返回true，反之返回false
- 如果[value]并不是数字类型的值，则浏览器默认会把[value]转换为数字类型  “隐式转换「浏览器默认私下处理的」”，然后再去验证是否为有效数字
- 在“隐式转换”中，浏览器是基于 Number([value]) 实现数据类型转换的
- 如果是有效数字，返回false，如果不是有效数字，返回true



[number value].toFixed([N])：保留小数点后面N位
+ toExponential
+ toPrecision
+ ...

* https://developer.mozilla.org/zh-CN/
```js
*/
var num = 10 - 'A'; //NaN
NaN == NaN; //false  NaN和NaN本身都不相等（它和谁都不相等）

// 需求：验证一个值是否为有效数字？
if (num == NaN) {
   // 这样处理不行，因为 num==NaN 永远不会成立
   alert('num不是有效数字!');
} 
if (isNaN(num)) {
   alert('num不是有效数字!');
} 
```

### 2.String字符串类型
- 只要用 <code>``</code>(撇,TAB键上面) `''`(单引号) `""`(双引号) 包起来的都是字符串  'lillian'  '0'  'function sum(){}' ''
- 每一个字符串都是由零到多个字符组成的,每一个字符都有一个自己的位置“索引”，有一个length存储字符串长度

#### ⭐️⭐️⭐️字符串方法
[内容详见-字符串常用方法](./02-02-string.md)

字符串有很多自己能够调用的方法
- charAt 根据索引获取指定位置的字符
- charCodeAt 获取指定字符的ASCII码值
- substr
- substring
- slice
- split
- replace
- indexOf / lastIndexOf
- includes
- trim
- match	匹配
- ...


#### 字符串**转义符**
类似HTML里面的特殊字符，转义符都是 \ 开头的，常用的转义符及其说明如下：
| 转义符 | 解释说明                          |
| ------ | --------------------------------- |
| \n     | 换行符，n   是   newline   的意思 |
| \ \    | 斜杠   \                          |
| \'     | '   单引号                        |
| \"     | ”双引号                           |
| \t     | tab  缩进                         |
| \b     | 空格 ，b   是   blank  的意思     |


#### eg.字符串长度表示
```js
let str = 'lillianfightingeveryday';
// 每一个字符串都是由零到多个字符组成的
str.length //=>字符串长度
str[0] //=>获取索引为零（第一个）字符
str[str.length-1] //=>获取最后一个字符
str.length-1 //最后一项索引
str[10000] //=>undefined 不存在这个索引
//循环输出字符串中的每一个字符
for (let i = 0; i < str.length; i++) {
let char = str[i];
console.log(char);
}
```


### 3.bool布尔数据类型 
- true真 false假
- 把其他数据类型值转换为布尔类型  Boolean([value]) / !![value]
   + 只有 “0、NaN、空字符串、null、undefiend” 变为布尔的false，其余都是true
   + 条件判断
   + ...
   
- ![value]：把[value]转换为布尔类型，然后取反
 
-  ```js
    if (10) {
    // 首先会把10转换为布尔类型，然后验证真假，决定条件是否成立
    } 
    ```

### 4.null
一个声明变量给 null 值，里面存的值为空
> null 空对象指针；不占内存，通俗理解就是人为的手动先赋值为 null，后面程序中会再给它赋值为其他值；


```js
var vari = null;
console.log('你好' + vari);  // 你好null
console.log(11 + vari);     // 11
console.log(true + vari);   //  1
```


### 5.undefined
undefined 未定义。多数情况是某些浏览器内置机制设置的默认值.

一个声明后没有被赋值的变量会有一个默认值undefined ( 如果进行相连或者相加时，注意结果）
```js
var variable;
console.log(variable);           // undefined
console.log('你好' + variable);  // 你好undefined
console.log(11 + variable);     // NaN
console.log(true + variable);   //  NaN
```



### 6.Symbol唯一值
[⭐️⭐️⭐️Symbol详解](../08-ES6/Symbol.md)
- 给对象设置唯一的属性
- 在vuex/redux中做行为派发的时候，统一管理派发的行为标识，标识的值可以是唯一
.....
- symbol的方法（重点）
```
Symbol.hasInstance
Symbol.toPrimitive
Symbol.toStringTag
Symbol.iterator
Symbol.isConcatSpreadable
Symbol.match
```

eg. symbol
```js
var num1 = 1;
console.log(num === num1)	//true
//
console.log(Symbol() == Symbol()); //false  创建了两个唯一值
var n = Symbol();
console.log(n == n); //true
console.log(Symbol('AA') == Symbol('AA')); //false  加标识只是为了方便调试 
```

###  7.BigInt 大数
- 真实场景：从服务器获取数据，服务器端存储数据的时候，如果用的就是大数存储的，返回到客户端的信息，很可能超过最大安全数字，这样导致后续计算可能不准确
	- Number.MAX_SAFE_INTEGER; //最大安全数 9007199254740991 （16位）
	- Number.MIN_SAFE_INTEGER; //最小安全数 -9007199254740991
	- 超过最大安全数，再进行计算，结果是不准确的

```js
console.log(9007199254740991 + 2); //9007199254740992
console.log(9007199254740992 + 3); //9007199254740996
// 上面的值是不准确的
```


## 二、引用数据类型
 
- 普通对象{key:value,...}	 {xxx:'xxx'}
- 数组对象Array [value1,...]	[10,20]
- 正则对象RegExp /^\d+$/
- 日期对象Date Tue Aug 04 2020 10:27:31 GMT+0800 (中国标准时间)
- JSON对象
- Set
- Map
- ...
 

### 1.object普通对象
JS中的普通对象：无序的键值对集合。

- 由大括号包裹起来的{key: value}

- 由零到多组属性名和属性值（键值对）组成。属性名可以是数字、字母、或者下划线等，并且属性名都是字符串类型的。


声明对象：
```js
let obj = {
name: 'UESTC',
age: 10,
teachers: 30,
10:'age'
};
```

```js
// 此处的name是一个变量（名字,变量名）：代表存储的"1"
var name = "1";
// 一个对象是由零到多组属性名和属性值组成的，此处的name是属性名（和变量不是一个东西）
// 对象的属性名可以是字符串或者数字  name属性名其实就是"name"   1属性名其实就是1/"1"
var obj = {
    name: "yaya", //"name":"..."
    age: 11, //"age":11
    1: 100, //"1":100
    11:'age'
};
```


### 操作对象中的每个成员
+ 对象的每个成员(属性名/键)可以是数字/字符串...
+ 获取成员的值
    - 对象.属性名
    - 对象['属性名']

    ```js
        console.log(obj.name);
        console.log(obj.['name']);
        var str = 'age'
        console.log(obj.[str]);
    ```


    - 上述方案不适用于数字成员  person1.1（报错 Uncaught SyntaxError: Unexpected number 语法错误）
    - 如果用. 后面的属性名不用写引号，如果使用[]，属性名需要用字符串包裹
    - 如果属性名是数字，只能使用 []
    - 方括号里面还可以写变量或者表达式
    - 如果获取一个对象不存在的属性，会得到一个 undefined

#### 新增&修改成员的值
- js 对象中的属性名是不允许重复的，是唯一的,如果出现重复以最后的值为主
- 如给一个对象的属性赋值，有两种情况:
  - 当我们去修改成员值的时候，如果成员存在，则修改值，如果成员不存在，则给这个对象增加一个属性，值是等号右侧的值

#### 删除对象的某个成员
  - 假删除(软删除):把成员值修改为null/undefined即可
    - 假删除:利用访问对象不存在的成员，返回undefined的特征，我们把某个成员的值修改为undefined，这样以后再获取这个成员，结果也是undefined，我们则可以认为当前成员是不存在（本质还是存在的）`obj.name = undefined;`
  - 真删除:彻底删掉  => delete 对象[成员]
	- 真删除:彻底从对象中移除这个成员 `delete obj["name"];)`


- 对象[属性名] = 属性值 （属性名是具体的值，如果是对象，会转换为字符串）

- 对象中的属性名不能重复，而且数字和字符串如果相同算同一个属性，例如：obj[0] === obj['0']


#### 分析 obj[name] 和 obj['name'] 的区别？
```js
	// 全局变量name
	var name = 10;
	var obj = {
		// obj对象的属性name（数字/字符串/Symbol）
		name: 'UESTC'
	};
	console.log(obj.name); //对象的成员访问，访问"name"属性的值  =>"UESTC"
	console.log(obj['name']); //访问当前对象中，成员为"name"属性的值 =>"UESTC"
	console.log(obj[name]); //此处的name是一个变量，代表的是10，我们是把10放到[]中 ->obj[10] ->访问对象中成员为10的属性值，如果该成员不存在，获取的结果是undefined（不会报错）
```

```js
// 获取对象的某个成员值：
// + obj.成员   obj.name
// + obj[成员]  obj["name"]
// obj["name"]  //=>"UESTC"  在获取其属性名为"name"的成员值
// 输出name这个变量的值
 console.log(name);

// 把name变量存储的值获取到，获取到之后作为一个成员，到对象中获取成员的值
 obj[name] => obj["1"] => 100
// 第一个是一个字符串的值（对象的每个成员其实就是字符串的值）
// 第二个是一个叫做name的变量，代表的是它存储的值 “1”
// "name"
// name
```

#### 取对象所有key值和value值
```js
 var person1 = {
     name: 'yaya',
     age: 21,
     1: 100		
 };
 person1.name = 'yaya'; //修改成员值   person1['name']='yaya'
 person1.teacher = '老师'; //新增成员  person1['teacher']=xxx
 person1.age = null;
 delete person1.name;
//
 console.log(person1);
//
 var person2 = {
     name: '刘颖',
     age: 12,
     1: 80
 };
//
 console.log(person1.name);
 console.log(person2[1]);
 console.log(person2['age']);
 console.log(person2['friend']);
//
//
var name = "yaya";
var age = 21;
var height = '160cm';
var hobby = '跑步';
//
var name = '刘颖';
var age = 12;
var height = '178cm';
var hobby = '读书';
console.log(name); 
*/
```
	


### 2.⭐️Array数组对象
⭐️⭐️⭐️[内容详见-数组](./02-01-array.md)
- 中括号包起来，逗号分隔数组中每一项的值（每一项的值可以是任意类型）
- 由零到多组键值对组成（也是对象）
- 我们无需写属性名（写的时候，写的是属性值），属性名默认是数字，而且数字以0开始，逐渐递增，把代表当前是数组中第几项的数字属性名称为“索引”：所以数组的结构就是**以数字作为索引，逐级递增的对象结构**
- 默认由一个length的属性，存储的是数组的长度  
`let arr = [10, '字符串', true, null];`


#### 特殊对象：数组或者类数组对象(集合)
- 属性名(成员/键)是数字，而且数字从零开始，逐级递增  =>有顺序和规律的数字属性名被称为“索引”：记录每一项的位置信息的
- 有一个length成员，存储集合的长度
- “数组/类数组[索引]” 进行成员访问以及相关的操作
-  数组 =>它是Array类的实例
- 类数组（类似于数组，但是不是数组） =>不是Array的实例,虽然结构类似,但是不能直接使用数组的办法
- HTMLCollection元素集合：类数组
- NodeList节点集合：类数组


```js
var arr = [10, 20, 30];
console.log(arr[0]); //基于索引获取数组中的指定项信息，获取第一项的值
console.log(arr[arr.length - 1]); //获取最后一项值
console.log(arr); 
	
var obj = {
	0: 10,
	1: 20,
	2: 30,
	length: 3
};
console.log(obj);


// HTMLCollection元素集合：类数组
console.log(document.getElementsByTagName('*'));
		
	
//  NodeList节点集合：类数组
console.log(document.querySelectorAll('*'));
```


### 3.⭐️function函数
函数：封装可用来复用的代码块
就是封装了一段可被重复调用执行的代码块。通过此代码块可以实现大量代码的重复使用

⭐️⭐️⭐️[内容详见-函数](./02-03-function.md)


1. 过程型函数
2. 结果性函数（当作值来用，也可以执行任务）
3. 构造函数（当做对象来用）

- 函数类型
    - 普通函数
    - 构造
    - 箭头
    - 生成器

- 声明函数
```js
// 函数: 函数名+形参+函数体+执行+实参...

// 函数声明：
function 函数名 (arg1,arg2) {
// 
// to do
// 函数作用域
}	
```


### ES6中的 Arrow Function 箭头函数
`let fn = () => {
};`


### 4.Date类型
[⭐️Date类型详解](./02-04-date.md)



### 5.RegExp正则对象
两个斜杠包起来一大堆你看不懂的符号就是正则 
`let reg = /$[+-]?(\d|([0-9]\d+))(\.\d+)?^/;`

⭐️[内容详见-正则表达式](../../tools/regexp/RegExp_class_notes.md)


## 三、类型转换
###  转换为数字类型
1. Number([value]) 把其他数据类型转换为number数字类型

   + 字符串转换为数字 ：空字符串是0  如果字符串中出现任意一个非有效数字字符，结果都是NaN
   + 布尔转换为数字 ： true->1  false->0
   + null->0   undefined->NaN
   + symbol 值不能转换为数字（Uncaught TypeError: Cannot convert a Symbol value to a number）
   + bigint 可以转换为数字
 
 
   + 引用数据类型（对象或者函数）转换为数字
     + 首先获取它的 [Symbol.toPrimitive] 属性值
     + 如果没有这个属性，其次获取它的 valueOf (原始值)
     + 如果还是没有原始值，最后把其转换为字符串 toString ，然后再转换为数字 Number
 
2.  把其他数据类型转换为数字类型
	parseInt/parseFloat([value]) 
	[value].toString() / String([value])
   + 需要保证[value]是一个字符串，如果不是则首先“隐式”的把其转换为字符串 [value].toString()
   + 从字符串左侧第一个字符开始向右查找，把找到的有效数字字符，最后转换为数字（遇到一个非有效数字字符则停止查找，不论后面是否还有有效数字字符，都不再找了）
   + 如果一个有效数字字符都没有找到，结果是NaN

### 转换为字符串类型

* 把其它数据类型转换为字符串类型
  String([value])
  [value].toString()

* 普通对象转换为字符串都是 "[object Object]"，数组对象转换为字符串是 "第一项,第二项..."（逗号分隔数组中的每一项）


### 转换为bool数据类型
**规则：只有 “0/NaN/null/undefined/空字符串” 最后是false，其余的都是true**

* 如何把其它数据类型转换为布尔类型
    -  Boolean([value])
    - ![value] 把指定的值转换为布尔类型后取反
    - !![value] 取反再取反，相当于没有取反，只是把它转换为布尔类型值
    - 规则：只有 “0/NaN/null/undefined/空字符串” 最后是false，其余的都是true

eg.
```js
console.log(!!1); //=>true
console.log(!1); //=>false
console.log(!!-1); //=>true
console.log(!!0); //=>false
console.log(!!undefined); //=>false
console.log(!!Number('12px')); //=>Number('12px')->NaN false
console.log(!![]); //=>true		这是空数组
console.log(!!''); //=>false
console.log(!!{}); //=>true  这是空对象
/* 条件判断中，每一个条件最后一定是true/false */
if (1 == 1) {}
if (1) {
 //=>写一个值，也是要把这个值转换为布尔，然后校验程序的真假
 }
if (3 + '3px') {} //=>3 + '3px' =>'33px' 拼接字符串————真
if (3 - '3px') {} //=>3 - '3px' =>NaN 假
```

## 四、数据类型检测
### 检测当前值的类型的方法
+ tyepof [value] 检测数据类型的运算符
+ [example] instanceof [class] 检测某一个实例是否属于这个类
+ [example].constructor === [class] 检测实例和类关系的，而检测数据类型
+ Object.prototype.toString.call([value]) 检测数据类型

### ⭐️检测数据类型的方法封装
```js
(function () {
    var class2type = {};
    var toString = class2type.toString;

    [
        "Boolean",
        "Number",
        "String",
        "Symbol",
        "Function",
        "Array",
        "Date",
        "RegExp",
        "Object",
        "Error"
    ].forEach(function (name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });

    function toType(obj) {
        if (obj == null) {
            return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ?
            class2type[toString.call(obj)] || "object" :
            typeof obj;
    }
    window.toType = toType;
})();
```



### 基于typeof检测数据类型
typeof的原理 : 
+ 所有的数据类型值在计算机中存储的都是按照“二进制”存储的
+ null -> 000000
+ 只要是对象都是以 000 开始的
+ typeof检测的时候，是按照计算机存储的二进制的值来检测的

### typeof的细节点

- typeof 检测的结果首先是一个字符串，字符串中包含了对应的数据类型（例如："number"、"string"、"boolean"、"undefined"、"object"、"function"、"symbol"、"bigint"）

- 特殊的检测结果：

- NaN / Infinity 都是数字类型的，检测出来的结果是 "number"

- typeof null 的结果是 "object"（这个是浏览器的BUG：所有的值在计算中都按照2进制数据存储的(0/1)，浏览器中把前三位是000的当做对象，null存储的是000，而typeof底层检测机制也是按照2进制值来检测的，所以null被识别为对象，但是它不是对象，它是空对象指针，是基本类型值）
    - ⭐️如何判断/检测基本数据类型(排除null的写法): `if (typeof value === 'object' && value !== null)`

    - 
    ```js
        // 已知有一个变量x，但是我们无法确认其数据类型，我们需要有一个判断操作：当x的类型是对象的时候（什么对象都可以），则处理对应的事情
        // if (typeof x == "object") { //=>null检测结果也会是"object"，所以结果是"object"不一定是对象，还可能是null
        // // ...
        // }

        if (x != null && typeof x == "object") {
        // ...
        }
    ```
- 判断对象的局限性 —— typeof 普通对象/数组对象/正则对象... 结果都是"object"，这样就无法基于typeof区分是普通对象还是数组对象等了

- 由于typeof返回的结果永远是一个字符串（字符串中包含了对应的类型），⭐️所以**连续出现两个及两个以上typeof检测**的时候，最后结果都是 "string"
    ```js
    var result = typeof typeof typeof [10, 20];
    // typeof检测数据类型，返回结果是一个字符串，字符串中包含了对应的数据类型
    // => typeof [10, 20]   "object"
    // => typeof "object"   "string"
    // ...
    // 因为typeof检测的结果首先是字符串，所以第二次检测，不论什么情况，再检测出来的结果都是 "string"...出现两个及两个以上typeof检测，结果都是"string"
    console.log(result); //=>"string" 
    ```

### instanceof(非万能)
通过 `instanceof` 操作符也可以对对象类型进行判定，其原理就是测试构造函数的 `prototype` 是否出现在被检测对象的原型链上。
```js
[] instanceof Array            // true
({}) instanceof Object         // true
(()=>{}) instanceof Function   // true
```
`instanceof` 也不是万能的。
```js
let arr = []
let obj = {}
arr instanceof Array    // true
arr instanceof Object   // true
obj instanceof Object   // true
obj instanceof Array   // false
```

在这个例子中，`arr` 数组相当于 `new Array()` 出的一个实例，
所以 `arr.__proto__ === Array.prototype`,
又因为 `Array` 属于 `Object` 子类型，
即 `Array.prototype.__proto__ === Object.prototype`，
因此 `Object` 构造函数在 `arr` 的原型链上。
所以 `instanceof` 仍然无法优雅的判断一个值到底属于数组还是普通对象。

还有一点需要说明下，有些开发者会说 `Object.prototype.__proto__ === null`，
岂不是说 `arr instanceof null` 也应该为 `true`，
这个语句其实会报错提示右侧参数应该为对象，
这也印证 `typeof null` 的结果为 `object` 真的只是`javascript`中的一个 `bug` 。


