# JS
## 对浏览器内核的理解

内核主要分成两部分：渲染引擎(layout engineer 或 Rendering Engine) 和 JS 引擎。

### 渲染引擎

负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。

浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。 

所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

### JS引擎

解析和执行 javascript 来实现网页的动态效果。 

最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。

## 哪些常见操作会造成内存泄漏

内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。 

垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。 

- setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
- 闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）。

## ===和\==的区别？
===：**等同符**，先判断类型，相同之后比较等号的值，值相同返回true; 类型不同直接返回false。需判断**值**和**类型**同时**相等**。

==：**等值符**，只要值相同即可，类型不同会发生类型的自动转换。

## 什么是类数组（伪数组），如何将其转化为真实的数组？
伪数组
1、具有**length属性**
2、按**索引**方式存储数据
3、**不具有数组的push、pop等方法**
伪数组（类数组）：无法直接调用数组方法或期望length属性有什么特殊的行为，不具有数组的push、pop等方法，但仍可以对真正数据遍历方法来遍历它们。
典型的是函数document.childnodes之类的，它们返回的nodeList对象都属于伪数组

伪数组-->真实数组转换：
1.使用**Arrray.from()--ES6**
2.**[].slice.call(eleArr)**或**Array.prototype.slice.call(eleArr)**

```js
// 示例
let eleArr=document.querySelectorAll('li');
Array.from(eleArr).forEach(function(item){
    alert(item);
    });
let eleArr=document.querySelectorAll('li');
    [].slice.call(eleArr).forEach(function(item){
        alert(item);
    })
```

## 如何判断JS的数据类型
基于一些方法检测当前值的类型
+ tyepof [value] 检测数据类型的运算符
+ [example] instanceof [class] 检测某一个实例是否属于这个类
+ [example].constructor === [class] 检测实例和类关系的，而检测数据类型
+ Object.prototype.toString.call([value]) 检测数据类型

[具体操作](../frontEnd/02-javascript/02-datatype.md#四数据类型检测)

## 创建函数的几种方式

第一种（函数声明）：
```js
function sum1(num1,num2){ return num1+num2;
}
```

第二种（函数表达式）
```js
var sum2 = function(num1,num2){ return num1+num2;
}
```

第三种（函数对象方式）
```js
var sum3 = new Function("num1","num2","return num1+num2");
```

## 创建对象的几种方式
1. 简单对象的创建 使用对象字面量的方式{}

创建一个对象（最简单，好理解，推荐使用） 
代码如下
```js
var Cat = {};  //JSON Cat.name="kity";  //添加属性并赋值 Cat.age=2;
Cat.sayHello = function () {
    alert("hello " + Cat.name + ",今年" + Cat["age"] + "岁了");  //可以使用“.”的方式访问属性， 也可以使用 HashMap 的方式访问
}
Cat.sayHello();  //调用对象的（方法）函数
```

2. 用 function(函数)来模拟 class
- 创建一个对象，相当于 new 一个类的实例(无参构造函数) 代码如下
```js
    function Person() {
    }
    var personOne = new Person();  //定义一个 function，如果有 new 关键字去"实例化",那么该 function 可以看作是一个类
    personOne.name = "dylan"; personOne.hobby = "coding"; personOne.work = function () {
        alert(personOne.name + " is coding now...");
    }
    personOne.work();
```

- 可以使用有参构造函数来实现，这样定义更方便，扩展性更强（推荐使用） 代码如下
```js
    function Pet(name, age, hobby) {
        this.name = name;//this 作用域：当前对象 this.age=age;
        this.hobby = hobby; this.eat = function () {
            alert("我叫" + this.name + ",我喜欢" + this.hobby + ",也是个吃货");
        }
    }
    var maidou = new Pet("麦兜", 5, "睡觉");//实例化/创建对象 maidou.eat();//调用 eat 方法(函数)
```

3. 使用工厂方式来创建（Object 关键字）
```js
    var wcDog = new Object(); wcDog.name = "旺财"; wcDog.age = 3; wcDog.work = function () {
        alert("我是" + wcDog.name + ",汪汪汪 	");
    }
    wcDog.work();
```


4. 使用原型对象的方式 prototype 关键字
```js
    function Dog() {
    }
    Dog.prototype.name = "旺财"; Dog.prototype.eat = function () {
        alert(this.name + "是个吃货");
    }
    var wangcai = new Dog(); wangcai.eat();
```

5. 混合模式(原型和构造函数)
```js
    function Car(name, price) {

        this.name = name; this.price = price;
    }
    Car.prototype.sell = function () {
        alert("我是" + this.name + "，我现在卖" + this.price + "万元");
    }
    var camry = new Car("凯美瑞", 27); camry.sell();
```

6. 动态原型的方式(可以看作是混合模式的一种特例) 
```js
    function Car(name, price) {
        this.name = name; this.price = price;
        if (typeof Car.sell == "undefined") {
            Car.prototype.sell = function () {
                alert("我是" + this.name + "，我现在卖" + this.price + "万元");
            }
            Car.sell = true;
        }
    }
    var camry = new Car("凯美瑞", 27); camry.sell();
```

## JavaScript宿主对象和原生对象的区别
- 原生对象

    “独立于宿主环境的 ECMAScript 实现	提供的对象”

    包含：Object、Function、Array、String、Boolean、Number、	Date 、 RegExp 、 Error 、 EvalError、RangeError、ReferenceError、SyntaxError、TypeError、	URIError

- 内置对象

    开发者不必明确实例化内置对象，它已被内部实例化了

    同样是“独立于宿主环境”。而 ECMA-262 只定义了两个内置对象，即 Global 和 Math

- 宿主对象

    BOM 和 DOM 都是宿主对象。因为其对于不同的“宿主”环境所展示的内容不同。其实说白
了就是，ECMAScript 官方未定义的对象都属于宿主对象，因为其未定义的对象大多数是自己通过 ECMAScript 程序创建的对象

## ⭐️常用内置对象&方法
### 对象及方法 
- Arguments 函数参数集合 
- Arguments[ ] 函数参数的数组 
- Arguments 一个函数的参数和其他属性 
- Arguments.callee 当前正在运行的函数 
- Arguments.length 传递给函数的参数的个数 
### Array数组 
增删查改、遍历、排序。。。
[详细用法](../frontEnd/02-javascript/02-01-array.md)
- length 属性 动态获取数组长度
- join() 将一个数组转成字符串。返回一个字符串。reverse() 将数组中各元素颠倒顺序
- delete 运算符 只能删除数组元素的值，而所占空间还在，总长度没变(arr.length)。shift() 删除数组中第一个元素，返回删除的那个值，并将长度减 1。
- pop() 删除数组中最后一个元素，返回删除的那个值，并将长度减 1。
- unshift() 往数组前面添加一个或多个数组元素，长度要改变。arrObj.unshift(“a” ， “b，“c”)
- push() 往数组结尾添加一个或多个数组元素，长度要改变。arrObj.push(“a” ，“b”， “c”)
- concat( ) 连接数组
- slice( ) 返回数组的一部分sort( ) 对数组元素进行排序
- splice( ) 插入、删除或替换数组的元素toLocaleString( ) 把数组转换成局部字符串 toString( ) 将数组转换成一个字符串forEach 遍历所有元素
- toLocaleString( ) 把数组转换成局部字符串 
- toString( ) 将数组转换成一个字符串
- forEach 遍历所有元素
- every 判断所有元素是否都符合条件
- sort 排序
- map 对元素重新组装，生成新数组
- filter 过滤符合条件的元素var 
- ...and more

### 字符串对象
[详细用法](../frontEnd/02-javascript/02-02-string.md)
- Length 获取字符串的长度。如：var len = strObj.length
- toLowerCase() 将字符串中的字母转成全小写。如：strObj.toLowerCase() toUpperCase() 将字符串中的字母转成全大写。如：strObj.toUpperCase() charAt(index) 返回指定下标位置的一个字符。如果没有找到，则返回空字符串 substr() 在原始字符串，返回一个子字符串
- substring() 在原始字符串，返回一个子字符串区别：'''
- charCodeAt( ) 返回字符串中的第 n 个字符的代码 concat( ) 连接字符串
- fromCharCode( ) 从字符编码创建—个字符串
- indexOf( ) 返回一个子字符串在原始字符串中的索引值(查找顺序从左往右查找)。如果没有找到，则返回-1
- lastIndexOf( ) 从后向前检索一个字符串 localeCompare( ) 用本地特定的顺序来比较两个字符串 match( ) 找到一个或多个正则表达式的匹配
- replace( ) 替换一个与正则表达式匹配的子串search( ) 检索与正则表达式相匹配的子串slice( ) 抽取一个子串
- toLocaleLowerCase( ) 把字符串转换小写 toLocaleUpperCase( ) 将字符串转换成大写 toLowerCase( ) 将字符串转换成小写 toString( ) 返回字符串
- toUpperCase( ) 将字符串转换成大写 
- valueOf( )
- ...and more

### Boolean布尔对象
- Boolean.toString( ) 将布尔值转换成字符串
- Boolean.valueOf( ) Boolean 对象的布尔值

### Date日期时间
创建 Date 对象的方法
1. 创建当前(现在)日期对象的实例，不带任何参数var today = new Date()；

2. 创建指定时间戳的日期对象实例，参数是时间戳。

时间戳：是指某一个时间距离 1970 年 1 月 1 日 0 时 0 分 0 秒，过去了多少毫秒值(1 秒
    =1000 毫秒)

```js
    var timer = new Date(10000)； //时间是 1970 年 1 月 1 日 0 时 0 分 10 秒
```

3. 指定一个字符串的日期时间信息，参数是一个日期时间字符串 `var timer = new Date(“2015/5/25 10：00：00”)；`

4. 指定多个数值参数
```js
var timer = new Date(2015+100，4，25，10，20，0)； 
//顺序为：年、月、日、时、分、秒，
//年、月、日是必须的
```
方法：
- Date.getDate( ) 返回一个月中的某一天 
- Date.getDay( ) 返回一周中的某一天 
- Date.getFullYear( ) 返回 Date 对象的年份字段 
- Date.getHours( ) 返回 Date 对象的小时字段 
- Date.getMilliseconds( ) 返回 Date 对象的毫秒字段 
- Date.getMinutes( ) 返回 Date 对象的分钟字段 
- Date.getMonth( ) 返回 Date 对象的月份字段 
- Date.getSeconds( ) 返回 Date 对象的秒字段
- Date.getTime( ) 返回 Date 对象的毫秒表示 

### Error异常对象
- Error.message 可以读取的错误消息
- Error.name 错误的类型
- Error.toString( ) 把 Error 对象转换成字符串 
- EvalError 在不正确使用 eval()时抛出 
- SyntaxError 抛出该错误用来通知语法错误 
- RangeError 在数字超出合法范围时抛出
- ReferenceError 在读取不存在的变量时抛出 
- TypeError 当一个值的类型错误时，抛出该异常
- URIError 由 URl 的编码和解码方法抛出


### Function函数构造器
- Function.apply( ) 将函数作为一个对象的方法调用
- Function.arguments[] 传递给函数的参数 
- Function.call( ) 将函数作为对象的方法调用 
- Function.caller 调用当前函数的函数 
- Function.length 已声明的参数的个数 
- Function.prototype 对象类的原型 
- Function.toString( ) 把函数转换成字符串


### Math数学对象
- Math 对象是一个静态对象
- Math.PI 圆周率 Math.abs() 绝对值
- Math.ceil() 向上取整(整数加 1，小数去掉) 
- Math.floor() 向下取整(直接去掉小数) 
- Math.round() 四舍五入
- Math.pow(x，y) 求 x 的 y 次方 
- Math.sqrt() 求平方根


### Number数值对象
- Number.MAX_VALUE 最大数值
- Number.MIN_VALUE 最小数值 
- Number.NaN 特殊的非数字值 
- Number.NEGATIVE_INFINITY 负无穷大 
- Number.POSITIVE_INFINITY 正无穷大
- Number.toExponential( ) 用指数计数法格式化数字 
- Number.toFixed( ) 采用定点计数法格式化数字 
- Number.toLocaleString( ) 把数字转换成本地格式的字符串 
- Number.toPrecision( ) 格式化数字的有效位 
- Number.toString( ) 将—个数字转换成字符串 
- Number.valueOf( ) 返回原始数值


### Object基础对象
- Object 含有所有 JavaScript 对象的特性的超类
- Object.constructor 对象的构造函数 
- Object.hasOwnProperty( ) 检查属性是否被继承 
- Object.isPrototypeOf( ) 一个对象是否是另一个对象的原型
- Object.propertyIsEnumerable( ) 是否可以通过 for/in 循环看到属性 
- Object.toLocaleString( ) 返回对象的本地字符串表示 
- Object.toString( ) 定义一个对象的字符串表示
- Object.valueOf( ) 指定对象的原始值 


### RegExp 正则表达式对象
- RegExp.exec( ) 通用的匹配模式
- RegExp.global 正则表达式是否全局匹配
- RegExp.ignoreCase 正则表达式是否区分大小写 
- RegExp.lastIndex 下次匹配的起始位置 
- RegExp.source 正则表达式的文本
- RegExp.test( ) 检测一个字符串是否匹配某个模式 
- RegExp.toString( ) 把正则表达式转换成字符串



## mouseenter和mouseover的区别

- 不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件，对应 mouseout。
- 只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件，对应 mouseleave。

## js字符串两边截取空白的trim的原型方法的实现

```js
// 删除左右两端的空格
function trim(str){
 return str.replace(/(^\s*)|(\s*$)/g, "");
}
// 删除左边的空格 /(^\s*)/g
// 删除右边的空格 /(\s*$)/g
```


## eval() 函数有什么用

eval() 函数可计算某个字符串，并执行其中的的 JavaScript 代码。