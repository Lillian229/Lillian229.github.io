# Symbol
ES6中新加入的 原始数据类型(基本数据类型/值类型)，代表唯一值

对象的唯一属性：防止同名属性，及被改写或覆盖

消除魔术字符串：指代码中多次出现，强耦合的字符串或数值，应避免，而使用含义清晰的变量代替

```js
const key = Symbol(),
    key2 = Symbol();
let obj = {
    [key]: 'yaya'
};
console.log(obj[key]); //"yaya"
console.log(obj[key2]); //undefined


/*
function reducer(action) {
    let state = {
        count: 0
    };
    switch (action.type) {
        case "vote_plus": //魔术字符串
            state.count++;
            break;
    }
    return state;
}
reducer({
    type: 'vote_plus' //魔术字符串
}); 
*/

const vote_plus = Symbol("vote_plus");
function reducer(action) {
    let state = {
        count: 0
    };
    switch (action.type) {
        case vote_plus:
            state.count++;
            break;
    }
    return state;
}
reducer({
    type: vote_plus
});
```


## 基本语法

- Symbol() 和 Symbol([key])
- Symbol函数不能被new
- Symbol.prototype 与 Object(Symbol())
- Symbol不能与其他类型的值计算
   - 数学计算：不能转换为数字
   - 字符串拼接：隐式转换不可以，但是可以显示转换
   - 模板字符串

- Symbol 属性不参与 for…in/of 遍历
    - Object.getOwnPropertySymbols
    - Object.getOwnPropertyNames
    - JSON.stringify
    - Object.keys
    - ……


## 内置的Symbol值
ES6提供很多内置的Symbol值，指向语言内部使用的方法

- Symbol.hasInstance：对象的Symbol.hasInstance属性，指向一个内部方法，当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法

- Symbol.isConcatSpreadable：值为布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开

- Symbol.iterator：拥有此属性的对象被誉为可被迭代的对象，可以使用for…of循环

- Symbol.toPrimitive: 该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值

- Symbol.toStringTag：在该对象上面调用Object.prototype.toString方法时，如果这个属性存在，它的返回值会出现在toString方法返回的字符串之中，表示对象的类型

- ……

```js
class Person {}
let p1 = new Person;
console.log(p1 instanceof Person); //true
console.log(Person[Symbol.hasInstance](p1)); //true
console.log(Object[Symbol.hasInstance]({})); //true
```

```js
let arr = [4, 5, 6];
console.log(arr[Symbol.isConcatSpreadable]); //undefined
let res = [1, 2, 3].concat(arr);
console.log(res); //[1,2,3,4,5,6]

arr[Symbol.isConcatSpreadable] = false;
res = [1, 2, 3].concat(arr);
console.log(res); //[1,2,3,[4,5,6]]
```

```js
// 让对象变为可迭代的值
let obj = {
    0: 'yaya',
    1: 11,
    length: 2,
    [Symbol.iterator]: Array.prototype[Symbol.iterator]
};
for (let item of obj) {
    console.log(item);
}

// 构造一个类数组
class ArrayLike {
    *[Symbol.iterator]() {
        let i = 0;
        while (this[i] !== undefined) {
            yield this[i];
            ++i;
        }
    }
}
let like1 = new ArrayLike;
like1[0] = 10;
like1[1] = 20;
for (let item of like1) {
    console.log(item);
}
```

```js
 /*
 * 对象数据类型进行转换：
 * 1. 调用obj[Symbol.toPrimitive](hint)，前提是存在
 * 2. 否则，如果 hint 是 "string" —— 尝试 obj.toString() 和 obj.valueOf()
 * 3. 否则，如果 hint 是 "number" 或 "default" —— 尝试 obj.valueOf() 和 obj.toString()
 */
let a = {
    value: 0,
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number': //此时需要转换成数值 例如:数学运算`
                return ++this.value;
            case 'string': // 此时需要转换成字符串 例如:字符串拼接
                return String(this.value);
            case 'default': //此时可以转换成数值或字符串 例如：==比较
                return ++this.value;
        }
    }
};
if (a == 1 && a == 2 && a == 3) {
    console.log('OK');
}
```

```js
class Person {
    get [Symbol.toStringTag]() {
        return 'Person';
    }
}
let p1 = new Person;
console.log(Object.prototype.toString.call(p1)); //"[object Person]"
```