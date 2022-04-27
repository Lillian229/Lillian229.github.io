# 三、类型转换
##  转换为数字类型
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

## 转换为字符串类型

* 把其它数据类型转换为字符串类型
  String([value])
  [value].toString()

* 普通对象转换为字符串都是 "[object Object]"，数组对象转换为字符串是 "第一项,第二项..."（逗号分隔数组中的每一项）


## 转换为bool数据类型
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
