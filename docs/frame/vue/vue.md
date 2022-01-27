# Vue
## Vue是什么
Vue.js 是一门 MVVM 框架，框架的思路是数据映射视图；
它由数据驱动的，有别于过往 DOM 操作的开发思想；
从技术角度讲，Vue.js 专注于 MVVM 模型的 ViewModel 层,它通过双向数据绑定把View 层和 Model 层连接了起来，通过对数据的操作就可以完成对页面视图的渲染。
(当然还有很多其他基于 MVVM 理念的框架如 Angular，React ，都大同小异 )
然而 Vue 以他独特的优势简单，快速，组合，紧凑，强大而迅速崛起。

## MVC 和 MVVM

MVC 和 MVVM 都是设计模式，是框架的开发理念；

● MVC: controller是连接 model 和 view 的；单向数据流，通过 Controller 把数据绑定到 view 中
(M model 数据层 V view 视图层  C controller 控制器层)

● MVVM: 通过view-model把model和view联系起来，可以双向数据绑定，可以单向数据绑定
( M model 数据层 V view 视图层 VM view-model 视图模型层 )

此外，Vue 是响应式的框架；此响应式不是 css 的响应式，而是通过修改数据，视图自动发生变化。当视图发生变化时，数据也会随着改变；这就是双向数据绑定；



## vue基础
### vue的使用
- 插值表达式
目的: 在dom标签中, 直接插入内容
又叫: 声明式渲染/文本插值
语法: {{ 表达式 }}
    Vue 的模板语法，moustache（小胡子）语法；支持 js 表达式，不能写语句，只能写表达式，将来在页面中显示最终表达式的结果
    如果是变量，会从 Vue 的 data 中取到对应的属性值

html代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>

<!--Vue 需要一个根元素-->
<div id="app">
	<div>
		{{1 + 2}}
	</div>
	<div>
		{{1 && 2}}
	</div>
	<div>
		{{0 || 1}}
	</div>
	<div>
		{{true ? 'a' : 'b'}}
	</div>
	<div>
		{{product}}
	</div>
	<div>
		{{user.name}}
		{{user.age}}
		{{user.title}}
	</div>
</div>

<script src="js/vue.js"></script>
<script src="js/2-使用vue.js">

</script>
</body>
</html>
```

JS代码
Vue 是 vue 的构造函数，在执行构造函数时需要传入一个对象；对象的属性都是配置 vue 应用的；
```js
let vm = new Vue({
	el: '#app', // 指定 vue 应用挂载的元素
	data: {
		product: '2021MacPro',
		user: {
			name: 'yaya',
			age: 18,
			title: '2021加油'
		}
	}
});
```


## 双向数据绑定

双向数据绑定：通过 Vue 模板语法，把 Vue 中 data 里面的数据绑定到页面中；如果我们修改这个数据，页面中绑定这个数据的地方的值都会跟着自动更新；
- html代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
<div id="app">
	我的电话：{{phone}} <br>
	<input type="text" v-model="phone">
</div>

<script src="js/vue.js"></script>
<script src="js/3-双向数据绑定.js"></script>
</body>
</html>
```

- JS代码
使用 Vue 的应用，必须设置一个根元素
```js

let vm = new Vue({
	el: '#app',
	data: {
		phone: '1781111111'
	}
});
```
## 双向数据绑定的原理

Vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。

第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter,这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化

第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图

第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:
1、在自身实例化时往属性订阅器(dep)里面添加自己 
2、自身必须有一个 update()方法
3、待属性变动 dep.notice()通知时，能调用自身的 update()方法，并触发 Compile中绑定的回调，则功成身退。

第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher
三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模
板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。

- html
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>

<input type="text" id="input">
<div id="app"></div>
<script src="js/4-双向数据绑定原理.js"></script>
</body>
</html>
```

- JS代码

defineProperty 是一个函数，用来定义对象属性的特性；是 Object 的静态方法

vue 使用的是发布订阅模式，vue 会收集页面中所有绑定数据的元素，这些相当于订阅了 data 里面的数据变更的事件，当数据发生变更时，会触发 set 方法，在 set 方法中会把所有的使用这个属性的元素的值更新成最新的值（发布事件）；

v-model 的原理也是利用了 DOM 事件，当表单元素的值发生变化时，设置对象的属性，然后设置对象的属性的时候，会触发 set 方法，在 set 方法中，会去修改所有依赖这些值的地方
```js
let obj = {
	_name: 1
}

let input = document.getElementById('input');
let app = document.getElementById('app');

// defineProperty 是一个函数，用来定义对象属性的特性；是 Object 的静态方法
Object.defineProperty(obj, 'name', {
	get() {
		return this._name;
	},
	set(val) {
		this._name = val;
		app.innerHTML = this._name;
		// vue 使用的是发布订阅模式，vue 会收集页面中所有绑定数据的元素，这些相当于订阅了 data 里面的数据变更的事件，当数据发生变更时，会触发 set 方法，在 set 方法中会把所有的使用这个属性的元素的值更新成最新的值（发布事件）；
	}
});

// v-model 的原理也是利用了 DOM 事件，当表单元素的值发生变化时，设置对象的属性，然后设置对象的属性的时候，会触发 set 方法，在 set 方法中，会去修改所有依赖这些值的地方
input.oninput = function () {
	obj.name = this.value
};
```

## 向 Vue 的 data 中新增属性
- HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
<div id="app">
	{{user.school}} <br>
	{{user.age}}
</div>
<script src="js/vue.js"></script>
<script src="js/5-向vue中新增属性.js"></script>
</body>
</html>
```

- JS
```js
let vm = new Vue({
	el: '#app',
	data: {
		user: {
			school: 'zf'
		}
	}
});

console.log(vm); // vm 是 Vue 的实例，会把 new Vue 配置对象 data 中的数据代理到 vm 自身上；并且在 Vue 实例初始化时，vm 中的属性都是响应式的（都会映射到视图中，如果修改这些属性，视图中的值也会跟着改变）;

// 修改这些属性的方式：

// 1. 修改 vm 属性上的值
// vm.user.school = '珠峰';

// 2. 使用 $set()
// vm.$set(vm.user, 'school', 'ZF');


// 使用 $set 还可以向 data 对象中动态增加属性
vm.$set(vm.user, 'age', 19);
```

