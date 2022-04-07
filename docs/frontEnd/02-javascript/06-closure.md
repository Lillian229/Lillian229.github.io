# 2.6.闭包
定义&解释：
- 函数执行时形成一个私有作用域，保护里面的变量不受外界干扰，这种保护机制称为闭包。
- 形成一个不销毁的私有作用域（私有栈内存）才是闭包
- 指有权访问另一个函数作用域中变量的函数。简单理解就是 ，一个作用
域可以访问另外一个函数内部的局部变量。

```js
function fn1() {// fn1就是闭包函数
    var num = 10;
    function fn2() {
        console.log(num); // 10
    }
    fn2()
}
fn1();
```


## 闭包的作用
作用：延伸变量的作用范围。
```js
function fn() {
    var num = 10;
    function fun() {
        console.log(num);
    }
    return fun;
}
var f = fn();
f();
```

## 闭包的应用
### 1.柯里化函数

柯里化函数思想：把多参数的函数变成单参数的函数

```js
function fn(a, b, c) {
	return a + b + c;
}

function fn1(a) {
	return function (b) { // 这种在函数中 return 函数的做法是市面中认为的闭包
		return function (c) {
			return a + b + c;
		}
	}
}
fn1(1)(2)(3);
```

### 2.利用闭包机制隔离全局命名空间
```js
(function () {
	// 自执行函数执行也是闭包
	let a = 100; // a 是一个私有变量，不会影响全局作用域中的变量命名
})();
```

### 3.惰性封装
```js
var utils = (function () {
	var version = '1.0.1';
	function sum(a, b) {
		return a + b
	}
	function minus(a, b) {
		return a - b;
	}
	return {
		sum: sum,
		minus: minus
	}
})();
```


### 4.利用闭包的不销毁作用域保存数据：累加计数、选项卡闭包版本

## 闭包案例
- 利用闭包的方式得到当前li 的索引号
```js
for (var i = 0; i < lis.length; i++) {
    // 利用for循环创建了4个立即执行函数
    // 立即执行函数也成为小闭包因为立即执行函数里面的任何一个函数都可以使用它的i这变量
        (function (i) {
            lis[i].onclick = function () {
                console.log(i);
            }
        })(i);
}
```

- 3秒钟之后,打印所有li元素的内容
```js
for (var i = 0; i < lis.length; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(lis[i].innerHTML);
        }, 3000)
    })(i);
}
```

- 计算打车价格
```js
/*需求分析:打车起步价13(3公里内), 之后每多一公里增加 5块钱. 
用户输入公里数就可以计算打车价格如果有拥堵情况,总价格多收取10块钱拥堵费*/
var car = (function () {
    var start = 13; // 起步价 局部变量
    var total = 0; // 总价 局部变量
    return {
        // 正常的总价
        price: function (n) {
            if (n <= 3) {
                total = start;
            } else {
                total = start + (n - 3) * 5
            }
            return total;
        },
        // 拥堵之后的费用
        yd: function (flag) {
            return flag ? total + 10 : total;
        }
    }
})();
console.log(car.price(5)); // 23
console.log(car.yd(true)); // 33
```


