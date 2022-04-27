# 四、数据类型检测
## 检测当前值的类型的方法
+ tyepof [value] 检测数据类型的运算符
+ [example] instanceof [class] 检测某一个实例是否属于这个类
+ [example].constructor === [class] 检测实例和类关系的，而检测数据类型
+ Object.prototype.toString.call([value]) 检测数据类型

## ⭐️检测数据类型的方法封装
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



## 基于typeof检测数据类型
typeof的原理 : 
+ 所有的数据类型值在计算机中存储的都是按照“二进制”存储的
+ null -> 000000
+ 只要是对象都是以 000 开始的
+ typeof检测的时候，是按照计算机存储的二进制的值来检测的

## typeof的细节点

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

## instanceof(非万能)
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


