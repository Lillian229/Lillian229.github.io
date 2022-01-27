# Vue指令
## vue 中的常用指令

指令: 在 Vue 中，以 v- 开头的行内属性；Vue 赋予了这些属性一些特殊功能；

常用的指令：

● v-model 把表单元素的 value 和 data 中的某个属性绑定在一起
● v-text 把数据绑定到 DOM 元素中，且具有响应式，会把之前的覆盖掉，v-text 不识别标签
● v-html 可以识别标签
● v-if 当属性值是  true，则显示当前元素，如果为 false 当前元素不显示，但是会显示 v-else 中的内容
● v-show 当属性值是 true，显示元素，为 false 隐藏元素；
● v-if 是控制的 DOM 元素，如果为 false 页面中没有这个元素；而 v-show 是设置的元素的 display 
● v-bind: 用于绑定动态属性，并且可以简写成一个 : ，v-bind 后，这个属性就可以使用 data 中该属性的值

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
<div id="app">
	<input type="text" v-model="flag">
	<div v-text="title"></div>
	<div v-html="title"></div>
	<div v-if="tt">v-if</div>
	<div v-else>v-else</div>
	<div v-show="hh">v-show</div>
	<img v-bind:src="img" alt="">
</div>

<script src="js/vue.js"></script>
<script src="js/6-vue中的常用指令.js"></script>
</body>
</html>
```

```js
let vm = new Vue({
	el: '#app',
	data: {
		flag: 'abc',
		title: `<h2>这是一个h2</h2>`,
		tt: false,
		hh: false,
		yy: false,
		img: 'clock.png',
		names: ['张三', '李四']
	}
});
```

## v-for 指令 —— 列表渲染
作用：列表渲染，根据给定的值生成多个相同元素；
用法：
1.  v-for Array 数组有多少项就要生成多少个 li
```html
<li v-for="(a, index) in arr">{{a.name}} {{a.age}}</li>
```

2.  v-for Object 对象有多少个 key 就生成多少 li
```html
<li v-for="(a, b) in obj">{{a}} {{b}}</li>
```

3.  v-for num 生成 num 个 li
```html
<li v-for="(a, b) in num">{{a}} {{b}}</li>
```

4.  v-for str 生成 str.length 个 li
```html
<li v-for="(a, b) in str">{{a}} {{b}}</li>

```
