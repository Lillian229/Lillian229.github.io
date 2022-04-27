# 一、基本数据类型
## 1.number数字类型
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
		
## isNaN([value])
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

## 2.String字符串类型
- 只要用 <code>``</code>(撇,TAB键上面) `''`(单引号) `""`(双引号) 包起来的都是字符串  'lillian'  '0'  'function sum(){}' ''
- 每一个字符串都是由零到多个字符组成的,每一个字符都有一个自己的位置“索引”，有一个length存储字符串长度

### ⭐️⭐️⭐️字符串方法
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


### 字符串**转义符**
类似HTML里面的特殊字符，转义符都是 \ 开头的，常用的转义符及其说明如下：
| 转义符 | 解释说明                          |
| ------ | --------------------------------- |
| \n     | 换行符，n   是   newline   的意思 |
| \ \    | 斜杠   \                          |
| \'     | '   单引号                        |
| \"     | ”双引号                           |
| \t     | tab  缩进                         |
| \b     | 空格 ，b   是   blank  的意思     |


### eg.字符串长度表示
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


## 3.bool布尔数据类型 
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

## 4.null
一个声明变量给 null 值，里面存的值为空
> null 空对象指针；不占内存，通俗理解就是人为的手动先赋值为 null，后面程序中会再给它赋值为其他值；


```js
var vari = null;
console.log('你好' + vari);  // 你好null
console.log(11 + vari);     // 11
console.log(true + vari);   //  1
```


## 5.undefined
undefined 未定义。多数情况是某些浏览器内置机制设置的默认值.

一个声明后没有被赋值的变量会有一个默认值undefined ( 如果进行相连或者相加时，注意结果）
```js
var variable;
console.log(variable);           // undefined
console.log('你好' + variable);  // 你好undefined
console.log(11 + variable);     // NaN
console.log(true + variable);   //  NaN
```



## 6.Symbol唯一值
[⭐️⭐️⭐️Symbol详解](../08-ES6/07-Symbol.md)
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

## 7.BigInt 大数
- 真实场景：从服务器获取数据，服务器端存储数据的时候，如果用的就是大数存储的，返回到客户端的信息，很可能超过最大安全数字，这样导致后续计算可能不准确
	- Number.MAX_SAFE_INTEGER; //最大安全数 9007199254740991 （16位）
	- Number.MIN_SAFE_INTEGER; //最小安全数 -9007199254740991
	- 超过最大安全数，再进行计算，结果是不准确的

```js
console.log(9007199254740991 + 2); //9007199254740992
console.log(9007199254740992 + 3); //9007199254740996
// 上面的值是不准确的
```

