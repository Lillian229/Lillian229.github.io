# Generator生成器/Iterator迭代器及实战中的运用

## Iterator
Iterator 是 ES6 引入的一种新的遍历机制

- 通过 Symbol.iterator 创建一个迭代器，指向当前数据结构的起始位置

- 随后通过 next 方法进行向下迭代指向下一个位置， next 方法会返回当前位置的对象，对象包含了 value 和 done 两个属性， value 是当前属性的值， done 用于判断是否遍历结束

- 当 done 为 true 时则遍历结束

```js
// 创造Iterator
function createIterator(items) {
    let i = 0;
    return {
        next: function () {
            var done = (i >= items.length);
            var value = !done ? items[i++] : undefined;
            return {
                done: done,
                value: value
            };
        }
    };
}

// 迭代器特点
const arr = [10, 20, 30];
const it = arr[Symbol.iterator]();
console.log(it.next()); //{value: 10, done: false}
console.log(it.next()); //{value: 20, done: false}
console.log(it.next()); //{value: 30, done: false}
console.log(it.next()); //{value: undefined, done: true}
```


## Generator
Generator生成器对象是由一个 generator function 返回的,并且它符合可迭代协议

```js
function* gen() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
let g = gen();
/* console.log(g.next()); //{value:1,done:false}
console.log(g.next()); //{value:2,done:false}
console.log(g.next()); //{value:3,done:false}
console.log(g.next()); //{value:4,done:true}
console.log(g.next()); //{value:undefined,done:true} */

/* let item = g.next(),
    arr = [];
arr.push(item.value);
while (!item.done) {
    item = g.next();
    arr.push(item.value);
}
console.log(arr); */

let arr = [];
for (let item of g) {
    arr.push(item);
}
console.log(arr); //[1,2,3]
console.log(g.next()); //{value:undefined,done:true}
```

```js
function* gen() {
    console.log('OK');
    let x = yield 1;
    console.log(x);
    yield 2;
}
let g = gen();
console.log(g.next());
console.log(g.next(10));

```

yield 委托*
在Generator函数中，我们有时需要将多个迭代器的值合在一起，我们可以使用yield *的形式，将执行委托给另外一个Generator函数

```JS
function* foo1() {
    yield 1;
    yield 2;
}
function* foo2() {
    yield 3;
    yield 4;
}
function* foo() {
    yield* foo1();
    yield* foo2();
    yield 5;
}
const result = foo();
console.log(result.next()); // { value: 1, done: false }
console.log(result.next()); // { value: 2, done: false }
console.log(result.next()); // { value: 3, done: false }
console.log(result.next()); // { value: 4, done: false }
console.log(result.next()); // { value: 5, done: false }
console.log(result.next()); // { value: undefined, done: true }
```


## 手撕async/await源码
```js
// 模拟API请求接口
function API(num) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(num);
        }, 1000);
    });
}

//自动执行器，如果一个Generator函数没有执行完，则递归调用
function asyncFun(generator) {
    let iterator = generator();

    function next(data) {
        let result = iterator.next(data);
        if (result.done) return result.value;
        result.value.then(function (data) {
            next(data);
        });
    }
    next();
}

asyncFun(function* () {
    let res1 = yield API(10);
    console.log(res1);
    let res2 = yield API(res1 + 10);
    console.log(res2);
});
```