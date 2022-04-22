# Set&Map

## Set
ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set本身是一个构造函数，用来生成 Set 数据结构
```js
const s = new Set();
```

Set函数可以接受一个数组作为参数，用来初始化。
```js
const set = new Set([1, 2, 3, 4, 4]);//{1, 2, 3, 4}
```

eg. 在使用时，`let a = new Set/Map();`, `a.`就会出现一些Set/Map的方法

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220325161633.png)

### 实例方法
- add(value)：添加某个值，返回 Set 结构本身
- delete(value)：删除某个值，返回一个布尔值，表示删除是否成功
- has(value)：返回一个布尔值，表示该值是否为 Set 的成员
- clear()：清除所有成员，没有返回值
```js
const s = new Set();
s.add(1).add(2).add(3); // 向 set 结构中添加值
s.delete(2) // 删除 set 结构中的2值
s.has(1) // 表示 set 结构中是否有1这个值 返回布尔值
s.clear() // 清除 set 结构中的所有值
//注意：删除的是元素的值，不是代表的索引
```

- 遍历
Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有
返回值。
```js
s.forEach(value => console.log(value))
```

### 基础语法

- Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality [iˈkwɒləti] ”，它类似于 ===，主要的区别是它认为NaN和NaN相等的

WeakSet 结构与 Set 类似，也是不重复的值的集合，但是，它与 Set 有两个区别：

- 首先，WeakSet 的成员只能是对象，而不能是其他类型的值

- 其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中

```js
   let s = new Set([1,2,3,4,5,4,3,2,1])
    console.log(typeof s); //->object
    // interator 有迭代器接口
    console.log([...s]);    //->[1, 2, 3, 4, 5]
```



### 集合：交集、并集、差集的实现
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


### 集合：交集、并集、差集(箭头函数简化写法)
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


## Map
ES6 提供了 Map 数据结构，它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键

## 区别
应用场景 Set 用于数据重组，Map 用于数据储存 
- Set： 成员不能重复 只有键值没有键名，类似数组 可以遍历，方法有 add, delete,has 
- Map: 本质上是健值对的集合，类似集合 可以遍历，可以跟各种数据格式转换

