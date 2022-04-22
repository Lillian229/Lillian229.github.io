# 2.2.3.函数
## 函数底层运行机制
[⭐️函数运行机制](./00-basicconcepts.md#函数执行步骤-垃圾回收机制)

[⭐️函数闭包](./00-basicconcepts.md#函数执行例子闭包)
## 一、函数
封装可用来复用的代码块

(虽然 for循环语句也能实现一些简单的重复操作，但是比较具有局限性，此时我们就可以使用 JS 中的函数。)

函数： 在计算机语言中，函数是拥有固定功能和逻辑的代码块。它只需要声明一次，然后就可以无限次执行。在面向对象（OOP，Object-Oriented-Programming）的语言也叫做方法。

就是**封装了一段可被重复调用执行的代码块**。通过此代码块可以**实现大量代码的重复使用**。  
<!-- ![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/函数（描述详细）.png) -->
![](../../pic/function(detail).png)

## 二、函数的使用
标准函数语法：

函数能发挥作用，是由两部分组成：

### 1.函数声明

```js
// 声明函数
function 函数名() {
    //函数体代码
}
```

- 使用 function 关键字声明函数变量，fn 也是变量，函数变量叫做函数名； function fn，必须小写
- 书写形参入口的小括号 function fn ()
- 书写函数体的花括号 function fn () {}
- 把具体的逻辑写在花括号里面，花括号叫做函数体
- 由于函数一般是为了实现某个功能才定义的， 所以通常我们将函数名命名为动词，比如 getSum

### 函数执行(调用)

```js
// 调用函数
函数名();  // 通过调用函数名来执行函数体代码
```
```js
/* 1. 普通函数 */
function fn() {
console.log('yaya');
}
fn();

/* 2. 对象的方法 */
var o = {
sayHi: function() {
console.log('yaya');
}
}
o.sayHi();

/* 3. 构造函数*/
function Star() {};
new Star();

/* 4. 绑定事件函数*/
btn.onclick = function() {}; // 点击了按钮就可以调用这个函数
/* 5. 定时器函数*/
setInterval(function() {}, 1000); //这个函数是定时器自动1秒钟调用一次


/* 6. 立即执行函数(自调用函数)*/
(function() {
console.log('yaya');
})();
```

- 函数执行就是函数名后面紧跟着一个小括号，形如 fn()；

函数执行除了表示让函数执行，还代表着得到函数执行的结果，这个结果叫做函数的【返回值】。例如isNaN('abc')，就是函数名和小括号的组合的意思是：isNaN 这个函数执行，同时获取了 isNaN 这个函数执行的结果，这个结果就是 判断 字符串 'abc' 转换成数字后是不是 NaN 的结果，这个结果是 true，就是说 isNaN('abc') 也表示 这个结果 true，及 isNaN('abc') 的返回值是 true。

- 口诀：函数不调用，自己不执行

  注意：声明函数本身并不会执行代码，只有调用函数时才会执行函数体代码。


### 函数的封装

- 函数的封装是把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口

- 简单理解：封装类似于将电脑配件整合组装到机箱中 ( 类似快递打包）  
![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/23-2.png)

例子：封装计算1-100累加和

  ```js
  
  /* 
     计算1-100之间值的函数
  */
  // 声明函数
  function getSum(){
    var sumNum = 0;// 准备一个变量，保存数字和
    for (var i = 1; i <= 100; i++) {
      sumNum += i;// 把每个数值 都累加 到变量中
    }
    alert(sumNum);
  }
  // 调用函数
  getSum();
  ```

## 三、函数的参数

### 函数参数语法

参数就是函数的入口，当我们在函数中封装一个功能，我们希望我们给他什么，它帮我们处理啥。配合函数的定义和执行两部分；参数对应这两个部分，也有两部分构成:

- 函数声明阶段: 形参，形参是函数内部的变量，它也是用来代表和存储值的；

- 函数执行阶段：实参，实参是给形参赋值的具体值。就是说函数执行时，形参所代表的具体的值。

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/23-3.png)

- 参数的作用 : 在函数内部某些值不能固定，我们可以通过参数在调用函数时传递不同的值进去。

- 函数参数的运用：

  ```js
  // 带参数的函数声明
  function 函数名(形参1, 形参2 , 形参3...) { // 可以定义任意多的参数，用逗号分隔
    // 函数体
  }
  // 带参数的函数调用
  函数名(实参1, 实参2, 实参3...); 
  ```

  ```js
  // 求和函数
  function sum(a, b) {
    // a, b都是形参
    console.log(a, b);
    var total = 0;
    total = a + b;
    console.log(total);
  }

  sum(10, 20); // 10 和 20 是实参，当函数执行时，函数的形参 a 本次拿到的值是10，b 本次拿到20；实参的位置和形参是一一对应的。
  sum(1); // 1是实参，a 本次拿到的是1，另一个没传，如果没传是 b 获取到时默认值 undefined
  sum(); // 没有实参，此时 a，b 都是 undefined
  sum(4, 5, 6); // 4, 4, 6都是实参，a 是 4， b 是 5，没有人接收 6
  ```

  1. 调用的时候实参值是传递给形参的
  2. 形参简单理解为：不用声明的变量
  3. 实参和形参的多个参数之间用逗号（,）分隔

### 函数形参和实参数量不匹配时
<!-- ![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/23-4.png) -->
| 参数个数 | 说明 |
| --- | ----|
| 实参个等于形参个数 | 输出正确结果 |
| 实参个数多于形参个数| 只取到形参的个数 |
| 实参个数小于形参个数| 多的形参定义为undefined,结果为NaN|

注意：在JavaScript中，形参的默认值是undefined。

小结：

-  函数可以带参数也可以不带参数
-  声明函数的时候，函数名括号里面的是形参，形参的默认值为 undefined
-  调用函数的时候，函数名括号里面的是实参
-  多个参数中间用逗号分隔
-  形参的个数可以和实参个数不匹配，但是结果不可预计，我们尽量要匹配

## 四、函数的返回值
函数除了我们给他啥，它帮我们处理啥，还有一个重要的事情就是，把处理结果给我们。例如 isNaN()，会把函数执行的结果返回给我们。我们写的函数也该有这样的功能。

函数的返回值机制：把函数的运行结果（或者函数中某些信息）指定为函数的返回结果给到函数外部。在函数中使用 return 关键字指定函数返回值。

eg.求和函数，希望求和之后得两数之和
```js
function sum(a, b) {
	var total = 0;
	total = a + b;
	console.log(total)
}
var result = sum(1, 2);
console.log(result) // undefined
console.log(total); // Uncaught ReferenceError: ...
```
引发报错的原因：total 是在函数体内部声明的变量，这种声明在函数体内部的变量称为私有变量，而私有变量在函数外部是无法访问的，这是由于闭包机制导致的。

> 闭包(closure)：函数会保护函数体内部的变量不被外界所干扰的机制成为闭包；

这个时候怎么拿到total?
=> 需要函数的返回值机制：把函数的运行结果（或者函数中某些信息）指定为函数的返回结果给到函数外部。在函数中使用 return 关键字指定函数返回值。

eg.修改后求和代码：
```js
function sum(a, b) {
	var total = 0;
	total = a + b;
	return total;
}

var result = sum(1, 2);
console.log(result); // 3
console.log(sum(1, 2));
```

### return语句

返回值：函数调用整体代表的数据；函数执行完成后可以通过return语句将指定数据返回 。

```js
// 声明函数
function 函数名（）{
    ...
    return  需要返回的值；
}
// 调用函数
函数名();    // 此时调用函数就可以得到函数体内return 后面的值
```

函数返回值的细节问题：

1. return 用于指定函数返回值，那么 return 啥函数返回值是啥
2. 如果函数内部没有 return 或者 return 后面啥也没写，那么函数的返回值是 undefined
3. return 关键字还有一个重要作用————强制结束 return 后面的代码，并返回指定的值。（return后面的代码不执行）
4. return 永远返回一个值，如果是一个表达式，return 会等着表达式求值完成，然后再把值返回。


### break ,continue ,return 的区别

- break ：结束当前的循环体（如 for、while）
- continue ：跳出本次循环，继续执行下次循环（如 for、while）
- return ：不仅可以退出循环，还能够返回 return 语句中的值，同时还可以结束当前的函数体内的代码

## 五、arguments_实参集合
- 需求一：eg.写一个方法，求10数的和
```js
function sum(a, b, c, d, e, f, g, h, i, j) {
  var total = a + b + c + d + e + f + g + h + i + j;
  return total;
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```
### 函数形参的局限性
1. 因为形参和实参是一一对应的，如果想要多少传递多少实参，就要设置多少形参，这很不方便，现在是10个，如果是100个，就要设置100个形参。
2. 如果实参个数不固定，可能10个可能2个，还可能100个，所以此时形参无法设置。

- 需求2：需要写一个方法，实现可以求任意多个数字之和；

任意多个实参，此时形参不固定了。怎么办？

> 为了解决上面的形参的种种限制，浏览器为函数内置一个 arguments 对象；
> arguments：arguments 叫做内置的实参集合，这个对象里面包含了函数执行时传递进来的所有实参（内置：函数天生自带的机制，不管是否设置了形参，也不管你是否传递了实参，arguments 一直都存在）。

### arguments对象中存储了传递的所有实参

当不确定有多少个参数传递的时候，可以用 arguments 来获取。在 JavaScript 中，arguments实际上它是当前函数的一个内置对象。所有函数都内置了一个 arguments 对象，arguments 对象中存储了传递的所有实参。
	
arguments展示形式是一个伪数组，因此可以进行遍历。伪数组具有以下特点：

- 具有 length 属性

- 按索引方式储存数据

- 不具有数组的 push , pop 等方法

注意：在函数内部使用该对象，用此对象获取函数调用时传的实参。
  
只有函数才有arguments对象，而且每个函数都内置好了arguments
  
什么时候用？当不知道有几个参数时，有了arguments可以不用写形参
```js
function sum2(n, m) {
  console.log(n, m);
  console.log(arguments);
  
   arguments 它是一个类数组（不是数组，不能直接使用数组中的方法）
   即使设置形参变量，形参该是什么还是什么，但是 arguments 存储的是所有传进来的实参，所以 arguments 被称为 实参集合
  它有索引，有 length，可以用 for 循环遍历
   {
     0: 1,
     1: 2,
     2: 5,
     3: 7,
     4: 8
     length: 5,
     callee: arguments.callee == sum2 -> true   //存储的当前函数本身 
    }
}

sum2(1, 2, 5, 7, 8);
```
### ES6不定参数
- ES6中提供了一个功能和 arguments 的功能相似的功能———— 不定参数
```js
function sum(...arg) {
  // ...叫做展开运算符
  // arg 是一个形参变量
  console.log(arg);  arg 是一个数组
}
sum(1, 2, 4, 5, 7);
```



## 六、函数案例
函数内部可以调用另一个函数，在同一作用域代码中，函数名即代表封装的操作，使用函数名加括号即可以将封装的操作执行。

## 七、函数的三种声明方式

1. 自定义函数方式(命名函数)

利用函数关键字 function 自定义函数方式

  ```js
  // 声明定义方式
  function fn() {...}
  // 调用  
  fn();  
  ```

  - 因为有名字，所以也被称为命名函数
  - 调用函数的代码既可以放到声明函数的前面，也可以放在声明函数的后面

2. 函数表达式方式(匿名函数）

利用函数表达式方式的写法如下： 

  ```js
  // 这是函数表达式写法，匿名函数后面跟分号结束
  var fn = function(){...}；
  // 调用的方式，函数调用必须写到函数体下面
  fn();
  ```

  - 因为函数没有名字，所以也被称为匿名函数
  - 这个fn 里面存储的是一个函数  
  - 函数表达式方式原理跟声明变量方式是一致的
  - 函数调用的代码必须写到函数体后面



3. new Function()
```js
var f = new Function('a', 'b', 'console.log(a + b)');
f(1, 2);
var fn = new Function('参数1','参数2'..., '函数体')
注意
/*Function 里面参数都必须是字符串格式
第三种方式执行效率低，也不方便书写，因此较少使用
所有函数都是 Function 的实例(对象)
函数也属于对象
*/
```

## 七、Function类：函数类
所有的函数（类、普通函数）都是 Function 的一个实例
### 内置类
```js
// Array Number String Boolean Object Date Function 等

console.log(typeof Array);  // function
console.log(typeof Number);  // function
```

### 内置类和Function类
内置类都是 Function 类实例，而实例都有一个 `__proto__` 指向所属类的原型对象

js 中所有的函数都是 Function 的实例，那么内置类，如 Array 是函数，所以 Array 也是 Function 的实例；
```js
console.log(Array instanceof Function);
```

既然是实例，那么一定也会有原型关系
```js
console.dir(Array); // 通过打印发现 Array 也是一个对象，它也有 __proto__，根据原型关系，Array 的 __proto__ 应该指向的是 Function 的 prototype

Array.__proto__ === Function.prototype;  true

console.log(Date instanceof Function);  true
console.log(Date.__proto__ === Function.prototype);  true
console.log(RegExp instanceof Function);  true
console.log(RegExp.__proto__ === Function.prototype);  true
console.log(Object instanceof Function);  true
console.log(Object.__proto__ === Function.prototype);  true

console.log(Function.prototype.__proto__ === Object.prototype);  true
```
- 因为 Object 也是一个类，所以也是一个函数，所以也是 Function 的实例.所以 `Object.__proto__` 指向Function.prototype

- 而 Function 本身也是一个类，也是一个函数，所以 Function 也有 prototype，而 prototype 也是一个对象，所以 `Function.prototype.__proto__ `又指向了 Object.prototype


### Function和Object的关系
1. `Object.__proto__ `指向 Function.prototype
```js
console.log(Object.__proto__ === Function.prototype);
```

2. `Function.prototype.__proto__` 指向 Object.prototype
```js
console.log(Function.prototype.__proto__ === Object.prototype);
```

3. 所有的函数都是 Function 的实例
```js
console.log(Array instanceof Function);
```


4. 所有的引用数类型（普通对象、实例对象、函数、类、数组、Date）的都是 Object 这个基类的实例，所以函数也是对象；
```js
console.log(Function instanceof Object);
console.log(Array instanceof Object);
console.log(Date instanceof Object);
let obj = {
	id: 1
};
console.log(obj instanceof Object);

function fn() {
	console.log('fn')
}
fn.name = 'yaya';
fn.age = 10;
console.log(fn.age);
console.log(fn.age);
```

### 总结
- 所有的函数数据类型都是 Function 的实例
```js
function Fn() {}
console.log(Fn instanceof Function); // true
```


- Function 函数类 本身也是一个函数
```js
console.log(typeof Function); // function
console.log(Function instanceof Function); // true 所以 Function 也是自己的的一个实例
```


- 因为 Function 是自己的实例，所以 `Function.__proto__ `指向自己的 prototype
```js
console.log(Function.__proto__ === Function.prototype);
```


- Function 也是 Object 基类的实例：所以函数也是对象，可以有自己的私有属性
```js
console.log(Function instanceof Object); // true
```

- js 的内置引用类型都是 Function 的实例
```js
console.log(Object instanceof Function);
console.log(Object.__proto__ === Function.prototype)
```

## 八、函数的三种角色
函数的三种角色：

1. 作为一个普通函数执行（形参、实参、返回值）
2. 作为一个类（new Fn 构造函数执行）
3. 函数也是一个普通对象（通过 .属性名 或者 ['属性名'] 获取私有属性）；
### 1.普通函数
#### 普通函数的执行过程

1. 开辟一个新的作用域
2. 形参赋值
3. 变量提升
4. 函数体从上到下执行
5. 销毁作用域

```js
function sum(a, b) {
	var x = 1;
	var y = 12;
	var z = 123;
	return a + b + x + y + z;
}
var result = sum(1, 3);
console.log(result);
```

### 2.构造函数(类)
- 每个构造函数都有一个 prototype 属性，它的值是一个对象，用来存放当前类型的公有的属性和方法
- 必须通过 new 操作符调用函数才能返回一个实例对象；
```js
function Teacher(n, a, s, f) {
	// 通过 this.xxx = xxx 给实例对象添加私有属性
	this.name = n;
	this.age = a;
	this.subject = s;
	this.from = f;
}
```
- 在原型上增加的方法都是这个类型公有的属性和方法
```js
Teacher.prototype.teach = function () {
	console.log(`${this.name} 老师讲 ${this.subject} 课程`)
};
let t = new Teacher('hx', 18, '操作系统', 'UESTC');
```

#### new执行构造函数

1. 新开辟一个作用域
2. 形参赋值
3. 变量提升
4. 隐式创建一个当前类的实例对象，并且把构造函数中的 this 指向当前实例
5. 执行构造函数中的代码
6. 隐式返回实例对象，相当于 return this
7. 销毁作用域

```js
console.log(t.name);
console.log(t.age);
t.teach(); // 调用 Teacher 的公有方法
```

### 作为一个普通对象（所有引用数据类型的都是 Object 的一个实例）
```js
function ll(a, b) {
	console.log('yaya fighting everyday');
}
ll(1, 2);

console.dir(ll); //  ƒ ll(a, b)

console.log(ll.length); // 2 形参个数
console.log(ll.name); // 函数名ll
```

- 把函数当做普通对象使用，就像操作普通对象一样操作对象；通过这样的方式添加给函数（普通函数、构造函数）的属性或者方法称为静态属性或方法
```js
ll.age = 10;
ll.title = 'hello';
ll.greeting = function () {
	console.log('hello world')
};
console.log(ll.age); //10
console.log(ll.title); //hello

let f1 = new ll();
console.log(f1.age); // undefined
console.log(f1.title); // undefined
console.log(f1);  //ll {}
console.log(ll.prototype);  //{constructor: ƒ}
console.dir(ll);  //ƒ ll(a, b)
```
- 注意：通过 函数名.xxx = xxx 添加的属性都是这个函数的私有属性。如果这个函数被当做构造函数使用（用 new 调用）时，这些属性既不是实例的属性也不是实例的公有属性，只能通过 函数名.xxx 的方式获取；


<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-03-11 15:19:48
 * @LastEditTime: 2022-03-11 15:21:53
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->
