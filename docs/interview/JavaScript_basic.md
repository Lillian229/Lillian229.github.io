# JS
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