# 0、数据类型-基本概念
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
