# 2.1.JS
JS：轻量级的客户端脚本编程语言
## 一个页面的组成
- HTML 搭建基本骨架（包含内容或者图片）
- CSS  完善页面的样式（包含动画和一些特效）
- JavaScript(JS) 实现人机交互 + 页面中数据的动态绑定 ...
    - 操作页面中的元素（获取元素/更改元素样式/增删改元素...）
         DOM（document object modal 文档对象模型）：提供一系列的属性和方法，让我们获取元素以及操作元素
  
    - 操作浏览器browser（利用浏览器的定时器，控制浏览器关闭、跳转...）  
         BOM（browser object modal 浏览器对象模型）：提供一系列的属性和方法，让我们操作浏览器

## 一、JavaScript
### 1.编程语言
HTML + CSS 是标记语言 --- 描述累语言

编程语言是具备一定逻辑的，拥有自己的编程思想（面向对象【oop】、面向过程编程）

- 面向对象
  - C++
  - JAVA
  - PHP
  - C#
  - JS
  - ...
- 面向过程：
  - C

### 2.JS引入方式
1. 行内式：通过向 html 元素行内添加一些 js 代码，如给 div 绑定点击事件
    ```html
    <div onclick="alert('这是js代码')">这是一个div</div>
    ```

2. 内嵌式：在 html 文档中写一个 script 标签，把我们的 js 写在 script 标签内
    ```html
    <script>
    alert('这是内嵌式js代码')
    </script>   
    ```

3. 外链式：在 html 文档中写一个 script 标签，并且设置 src 属性，src 的属性值引用一个 js 文件资源，而 js 代码写在 js 文件中

    使用外链式引入 js 文件时，script 标签里面不能再写 js 代码了，即使写了也不会执行。

    ```html
    <script src="js/1.js"></script>
    ```

### 3.JS的几部分组成
  - ES（ECMAScript）:JS的核心语法
    - 规定了JS的编程语法和基础核心知识，JS 中的**变量、数据类型、语法规范、操作语句，基础API方法，设计模式**等等都是 ES 规定的.
    - 所有浏览器厂商共同遵守的一套JS语法工业标准。
  - DOM: Document Object Model文档对象模型，提供各种API（属性和方法）让 JS 可以获取或者操作页面中的HTML元素（DOM和元素）(大小、位置、颜色)
  - BOM：Browser Object Model 浏览器对象模型，提供各种 API 让 js 可以操作浏览器。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。

### 4.JavaScript的作用

-  表单动态校验（密码强度检测）  （ JS 产生最初的目的 ）
-  网页特效
-  服务端开发(Node.js)
-  桌面程序(Electron)
-  App(Cordova) 
-  控制硬件-物联网(Ruff)
-  游戏开发(cocos2d-js)

### 5.浏览器执行JS

**浏览器分成两部分：渲染引擎和 JS 引擎**

| 渲染引擎 | 用来解析HTML与CSS，俗称内核，比如 chrome 浏览器的 blink ，老版本的 webkit |
| -------- | ------------------------------------------------------------ |
| JS 引擎  | 也称为 JS 解释器。 用来读取网页中的JavaScript代码，对其处理后运行，比如 chrome  <br />浏览器的 V8 |

浏览器本身并不会执行JS代码，而是通过`内置 JavaScript 引擎(解释器) `来执行 JS 代码 。

JS 引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以 JavaScript 语言归为脚本语言，会逐行解释执行。


无论是内嵌式还是外链式，都建议把 script 标签写在 body 结束标签的前面。

### 6.JS可做全栈
目前的 JS 已经不是客户端语言了，基于 NODE 可以做服务器端程序，所以 JS 是全栈编程语言

1. “前端” <= JS运行在客户端浏览器中

    浏览器给JS提供可很多全局的属性和方法，例如：window.xxx（setInterval、setTimeout、eval、alert、JSON...）

    前端（浏览器运行JS）是限制I/O操作的

    input type='file' 这种算是I/O操作，但是需要用户手动选择（而且还仅仅是一个读取不是写入）
  
2. “后台” <= JS运行在服务器端的NODE中

    NODE也给JS提供很多的内置属性和方法，例如：http、fs、url、path...等对象中都提供很多API供JS操作

    NODE中运行JS是不需要限制I/O操作的

### 7.JS注释
- js 的注释方式：注释是一项备注内容，给人看的，代码执行时会忽略注释内容。
- 快捷键：cmd/ctrl + `/`
```
单行注释： // 两个单斜线
多行注释：/*多行注释内容写在两个星号之间*/
```

### 8.JS常用输出方案

#### 浏览器弹窗（alert、confirm、prompt）
1. `alert([content])` 
    - 在浏览器窗口弹出一个提示框，提示框输出指定信息
    - 需要等到alert弹出框，点击确定关闭后，后面的代码才会继续执行，会阻碍主线程的渲染
    - 如果[content]不是“字符串数据类型”的，则会默认转换为字符串，然后再输出
    ```js
        alert([10,20,30]);  //-> 数组转化为字符串，输出”10，20，30“
        alert({name:'lillian'}); //-> 普通对象转化为字符串，输出"[object Object]"
    ```
    ![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220308180045.png)

2. `confirm`
    - 相对于alert，给用户提供了确定和取消两种选择，确认提示框
    - 创建一个变量，用来接收用户选择的结果，点击确定控制台返回true，取消返回flase
    ```js
     let flag = confirm('今天你学习强国了吗？')
     console.log(flag) //-> true确定  false取消
    ```
    ![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220308180201.png)

3. `prompt`
    - 在confirm的基础上给用户提供书写操作的原因等信息
    - 点击的是取消，返回结果是null
    - 点击确定，会把用户输入的原因信息返回到控制台
    ```js
    let reason = prompt('确定要删除此信息吗？')
    console.log(reason);
    ```
    ![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220308180538.png)
    ![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220308180609.png)

- 都是要把输出的内容先转换为字符串，然后再输出
- 都是弹窗模式（都会阻碍GUI渲染线程的渲染）


#### 控制台  (console....)
- 控制台输出:F12/FN+F12
    - `console.log([content])`  一般应用于开发中，开发者自己基于输出来调试代码的
    
        // [content]本身啥类型，在控制台输出的就是啥类型

    - `console.time/timeEnd`    计算代码运行时间
        ```js
        console.time('运行开始的时间')
        任意一段算法代码
        console.timeEnd('运行结束的时间')
        ```
    - `console.dir([value])` 	输出一个对象或者一个值的详细信息

        // console.log一次性可以输出多个值，console.dir不可以

    - `console.table([value])` 把一个JSON对象格式的数据以表格方案输出
    - `console.warn `以警告的方式输出
    - ...
- 原始什么数据类型，我们输出的就是什么类型
- 不阻碍GUI渲染线程的渲染

#### 直接写入页面
- `document.write([value])`
    - 把内容转换为字符串，然后写在页面中,eg. document.write('哈哈哈');
- `element.innerHTML/innerText` 向页面指定的元素中写入内容

    // 区别：innerHTML可以识别和解析出插入内容中的标签和样式，而innerText不能识别，全部都作为字符串插入到页面中
    ```html
     document.body.innerHTML = "中华人民共和国 <strong>70周年诞辰</strong>";
     document.body.innerText = "中华人民共和国 <strong>70周年诞辰</strong>";
     document.getElementById('test').value = "中华人民共和国";
    ```
- `input.value`  专门给表单元素设置内容
- ...



## 二、变量
它不是具体的值，只是一个用来存储具体值的容器或者代名词，因为它存储的值可以改变，所以称为变量。

常量：不可更改，指的是具体的值

### 1.创建变量的方式
+ 传统方案：var / function 
  + 
		- ES3：var
		- ES6：let 、const
		- function 创建函数
		- class 创建一个类
		- import / require 基于ES6Module或者Common.js规范导入模块
基于 ES 语法规范，在 JS 中创建变量有以下方式：
- 传统方案：var / function
    - var（ES3)
    - function （ES3）创建函数（函数名也是变量，只不过存储的值是函数类型而已）
- 新的方案：let / const / import
    - let （ES6）声明变量
    - const （ES6）创建常量（常量就是恒定不变的值，如光速就是常量）
    - import / require 基于ES6Module或者Common.js规范导入模块
    - class （ES6） 基于ES6创建 类

eg.1

```JS
/*
* 语法：
* var 变量名 = 值
* let 变量名 = 值
* const 变量名 = 值
* function 函数名 () {
*  // 函数体
* }
*/
var n = 13;
n = 15;
alert(n + 10); // => 弹出来25 此时的 N 代表15

const m = 100;
m = 200; // Uncaught TypeError: Assignment to constant variable (常量存储的值不能被修改，能够被修改的就是变量了)
```

eg.2
```js
// 1. 基于VAR创建一个叫做N的变量，让其指向具体的值10
var n = 10;

// 创建一个叫做M的变量，但是此时没有让其指向任何的值
var m;

// 在控制台输出n/m变量所代表的值
console.log(n, m); //=>10 undefined

// 2.基于ES6中的LET创建一个变量,让其指向100；但是后期让其重新指向了200；
let a = 100;
a = 200;
console.log(a); //=>200

// 3.基于ES6中的CONST创建一个变量，让其指向1000，此后B就不能再指向其它的值了，一旦去修改指向，则会报错；所以基于CONST定义的变量一般也被成为常量；
const b = 1000;
b = 2000;
console.log(b); //=>Uncaught TypeError: Assignment to constant variable.

// 4.创建一个函数：也可以理解为创建一个变量func，让其指向这个函数
function func() {
}
console.log(func);

//  声明一个变量叫做fn，只不过存储的数据值是一个函数
function fn(){}; 


// 5.创建一个类：也可以理解为创建一个变量Parent，让其指向这个类
class Parent {
}
console.log(Parent);

// 6.基于模块规范来导入具体的某个模块：定义一个叫做axios的变量，用来指向导入的这个模块
import axios from './axios';
let axios = require('./axios'); */

//  ES6Module中的模块导入，把导入的模块存储到z变量中
import z from './xx'; 

```

### 2.变量命名规则
创建变量，命名的时候要遵循一些规范
- 基于 数字/字母/下划线/$ 命名
	- `$`xxx 开始的变量一般用来存储JQ获取的值,`$`一般会作为名字的开始，很少会放到中间
	-  `_`xxx 下划线开始的变量一般认为是全局或者公共的变量(或者是仅供内部使用的)
	- 以上只是大部分情况是这样的，但是也有一些情况和上述没关系
 	- 数字不可以是名字的开始，否则报错

- 基于驼峰命名法
    - 复杂名称由多个单词拼接成（单词的简拼）
    - 第一个单词首字母小写
    - 其余每一个有意义单词的首字母大写
 	- 语意化要明显，少使用 a/b/c/x/y/z/n/m... 等无意义的字母

- 不能使用关键字和保留字
    - 关键字：JS中有已经使用了的，带有特殊含义的（例如：包括：break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with...）
    - 保留字：实际上就是预留的“关键字”，未来会成为关键字，现在保留下来的保留字。（包括：boolean、byte、char、class、const、debugger、double、enum、export、extends、fimal、float、goto、implements、import、int、interface、long、mative、package、private、protected、public、short、static、super、synchronized、throws、transient、volatile...)
	
注意：如果将保留字用作变量名或函数名，那么除非将来的浏览器实现了该保留字，否则很可能收不到任何错误消息。当浏览器将其实现后，该单词将被看做关键字，如此将出现关键字错误。

```js
var n = 12;
var N = 12; // 变量 n 和变量 N 不是同一个变量
var studentInfo = 'hcx'; // 驼峰命名法

// 变量要具有语义化
add / create / insert
del (delete) / update / remove(rm)
info / detail
log
```

```js
// 基于$开头：一般代表使用JQ或者其它使用$的类库获取的内容
let $box;

// 基于_开头：一般代表是全局或者公共的变量
let _box = {};

// 基于数字区分相似名称的变量
let box1 = 10;
let box2 = 20;

// 数字不能作为开头
// let 2box = 10;

// 想要分隔单词，可以使用_或者驼峰，但是不能是-
// let box-list;
let box_list;
let boxList;

// 虽然不会报错，但是强烈不推荐
let 盒子 = 100;
console.log(盒子);
```






<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-03-07 18:46:54
 * @LastEditTime: 2022-03-07 20:11:50
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->
