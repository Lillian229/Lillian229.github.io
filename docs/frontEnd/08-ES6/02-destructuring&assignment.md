# 解构和赋值
ES6中允许从数组中提取值，按照对应位置，对变量赋值，对象也可以实现解构

按照一定模式，从数组中或对象中提取值，将提取出来的值赋值给另外的变量。


## 数组解构
```js
let [a, b, c] = [1, 2, 3];
console.log(a)//1
console.log(b)//2
console.log(c)//3
//如果解构不成功，变量的值为undefined
```


## 对象解构
```js
let person = { name: 'zhangsan', age: 20 };
let { name, age } = person;
console.log(name); // 'zhangsan'
console.log(age); // 20

let {name: myName, age: myAge} = person; // myName myAge 属于别名
console.log(myName); // 'zhangsan'
console.log(myAge); // 20
```

## 小结
- 解构赋值就是把数据结构分解，然后给变量进行赋值
- 如果结构不成功，变量跟数值个数不匹配的时候，变量的值为undefined
- 数组解构用中括号包裹，多个变量用逗号隔开，对象解构用花括号包裹，多个变量用逗号隔开
- 利用解构赋值能够让我们方便的去取对象中的属性跟方法