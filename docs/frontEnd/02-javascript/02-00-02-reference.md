# 二、引用数据类型
 
- 普通对象{key:value,...}	 {xxx:'xxx'}
- 数组对象Array [value1,...]	[10,20]
- 正则对象RegExp /^\d+$/
- 日期对象Date Tue Aug 04 2020 10:27:31 GMT+0800 (中国标准时间)
- JSON对象
- Set
- Map
- ...
 

## 1.object普通对象
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


## 操作对象中的每个成员
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

### 新增&修改成员的值
- js 对象中的属性名是不允许重复的，是唯一的,如果出现重复以最后的值为主
- 如给一个对象的属性赋值，有两种情况:
  - 当我们去修改成员值的时候，如果成员存在，则修改值，如果成员不存在，则给这个对象增加一个属性，值是等号右侧的值

### 删除对象的某个成员
  - 假删除(软删除):把成员值修改为null/undefined即可
    - 假删除:利用访问对象不存在的成员，返回undefined的特征，我们把某个成员的值修改为undefined，这样以后再获取这个成员，结果也是undefined，我们则可以认为当前成员是不存在（本质还是存在的）`obj.name = undefined;`
  - 真删除:彻底删掉  => delete 对象[成员]
	- 真删除:彻底从对象中移除这个成员 `delete obj["name"];)`


- 对象[属性名] = 属性值 （属性名是具体的值，如果是对象，会转换为字符串）

- 对象中的属性名不能重复，而且数字和字符串如果相同算同一个属性，例如：obj[0] === obj['0']


### 分析 obj[name] 和 obj['name'] 的区别？
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

### 取对象所有key值和value值
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
	


## 2.⭐️Array数组对象
⭐️⭐️⭐️[内容详见-数组](./02-01-array.md)
- 中括号包起来，逗号分隔数组中每一项的值（每一项的值可以是任意类型）
- 由零到多组键值对组成（也是对象）
- 我们无需写属性名（写的时候，写的是属性值），属性名默认是数字，而且数字以0开始，逐渐递增，把代表当前是数组中第几项的数字属性名称为“索引”：所以数组的结构就是**以数字作为索引，逐级递增的对象结构**
- 默认由一个length的属性，存储的是数组的长度  
`let arr = [10, '字符串', true, null];`


### 特殊对象：数组或者类数组对象(集合)
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


## 3.⭐️function函数
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


## 4.Date类型
[⭐️Date类型详解](./02-04-date.md)



## 5.RegExp正则对象
两个斜杠包起来一大堆你看不懂的符号就是正则 
`let reg = /$[+-]?(\d|([0-9]\d+))(\.\d+)?^/;`

⭐️[内容详见-正则表达式](../../tools/regexp/RegExp_class_notes.md)

