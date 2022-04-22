# Vue指令
## vue 中的常用指令

指令: 在 Vue 中，以 v- 开头的行内属性；Vue 赋予了这些属性一些特殊功能；

常用的指令：

- v-model 把表单元素的 value 和 data 中的某个属性绑定在一起
- v-text 把数据绑定到 DOM 元素中，且具有响应式，会把之前的覆盖掉，v-text 不识别标签
- v-html 可以识别标签
- v-if 当属性值是  true，则显示当前元素，如果为 false 当前元素不显示，但是会显示 v-else 中的内容
- v-show 当属性值是 true，显示元素，为 false 隐藏元素；
- v-if 是控制的 DOM 元素，如果为 false 页面中没有这个元素；而 v-show 是设置的元素的 display 
- v-bind: 用于绑定动态属性，并且可以简写成一个 : ，v-bind 后，这个属性就可以使用 data 中该属性的值

- v-cloak解决小胡子的显示问题
- v-pre告诉vue这块不用编译，直接使用

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

## v-bind

> 目标: 给标签属性设置vue变量的值

- 语法：`v-bind:属性名="vue变量"`
- 简写：`:属性名="vue变量"`

```html
<!-- vue指令-v-bind属性动态赋值 -->
<a v-bind:href="url">我是a标签</a>
<img :src="imgSrc">
```

> 总结: 把vue变量的值, 赋予给dom属性上, 影响标签显示效果

## v-for 指令 —— 列表渲染
> 目标: 列表渲染, 所在标签结构, 按照数据数量, 循环生成
- 要循环谁，就把v-for写在谁身上

* 语法
  * v-for="(值, 索引) in 目标结构"
  * v-for="值 in 目标结构"
  
* 目标结构:
  
  * 可以遍历数组 / 对象 / 数字 / 字符串 (可遍历结构)
  
* 注意:

  v-for的临时变量名不能用到v-for范围外


这些方法会触发数组改变, v-for会监测到并更新页面

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

这些方法不会触发v-for更新

* `slice()`
* `filter()`
* `concat()` 

> 注意: vue不能监测到数组里赋值的动作而更新, 如果需要请使用Vue.set() 或者this.$set(), 或者覆盖整个数组

> 总结:  改变原数组的方法才能让v-for更新

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


示例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
<div id="app">
	<ul>
		v-for Array 数组有多少项就要生成多少个 li
		<li v-for="(a, index) in arr">{{a.name}} {{a.age}} </li>

		v-for Object 对象有多少个 key 就生成多少 li
		<li v-for="(a, b) in obj">{{a}} {{b}}</li>

		v-for num 生成 num 个 li
		<li v-for="(a, b) in num">{{a}} {{b}}</li>

		v-for str 生成 str.length 个 li
		<li v-for="(a, b) in str">{{a}} {{b}}</li>
	</ul>
</div>

<script src="js/vue.js"></script>
<script>
	let vm = new Vue({
		el: '#app',
		data: {
			arr: [
				{name: '张三', age: 15},
				{name: '李四', age: 18}
			],
			num: 5,
			str: 'zfpex',
			obj: {
				goods: 'iPhone',
				manufacture: '富土康',
				price: '$1000'
			}
		}
	})
	// v-for 用于列表渲染
</script>
</body>
</html>
```

## diff算法
vue用diff算法, 新虚拟dom, 和旧的虚拟dom比较

### 情况1: 根元素变了, 删除重建 

旧虚拟DOM

```html
<div id="box">
    <p class="my_p">123</p>
</div>
```

新虚拟DOM

```html
<ul id="box">
    <li class="my_p">123</li>
</ul>
```

### 情况2: 根元素没变, 属性改变, ==元素复用==, 更新属性

旧虚拟DOM

```html
<div id="box">
    <p class="my_p">123</p>
</div>
```

新虚拟DOM

```html
<div id="myBox" title="标题">
    <p class="my_p">123</p>
</div>
```

### 情况3: 根元素没变, 子元素没变, 元素内容改变(diff key)

#### 无key - 就地更新

v-for不会移动DOM, 而是尝试复用, 就地更新，如果需要v-for移动DOM, 你需要用特殊 attribute `key` 来提供一个排序提示

```vue
<ul id="myUL">
    <li v-for="str in arr">
        {{ str }} 
        <input type="text">
    </li>
</ul>
<button @click="addFn">下标为1的位置新增一个</button>
```

```js
export default {
    data(){
        return {
            arr: ["老大", "新来的", "老二", "老三"]
        }
    },
    methods: {
        addFn(){
            this.arr.splice(1, 0, '新来的')
        }
    }
};
```

旧 - 虚拟DOM结构  和  新 - 虚拟DOM结构 对比过程

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/image-20210414215502653.png)



## v-model

> 目标: 把value属性和vue数据变量, 双向绑定到一起

* 语法: v-model="vue数据变量"
* 双向数据绑定
  * 数据变化 -> 视图自动同步
  * 视图变化 -> 数据自动同步
* 演示: （在表单元素上）用户名绑定 - vue内部是MVVM设计模式

```vue
<template>
  <div>
    <!-- 
    	v-model:是实现vuejs变量和表单标签value属性, 双向绑定的指令
    -->
    <div>
      <span>用户名:</span>
      <input type="text" v-model="username" />
    </div>
    <div>
      <span>密码:</span>
      <input type="password" v-model="pass" />
    </div>
    <div>
      <span>来自于: </span>
      <!-- 下拉菜单要绑定在select上 -->
      <select v-model="from">
        <option value="北京市">北京</option>
        <option value="南京市">南京</option>
        <option value="天津市">天津</option>
      </select>
    </div>
    <div>
      <!-- (重要)
      遇到复选框, v-model的变量值
      非数组 - 关联的是复选框的checked属性
      数组   - 关联的是复选框的value属性
       -->
      <span>爱好: </span>
      <input type="checkbox" v-model="hobby" value="抽烟">抽烟
      <input type="checkbox" v-model="hobby" value="喝酒">喝酒
      <input type="checkbox" v-model="hobby" value="写代码">写代码
    </div>
    <div>
      <span>性别: </span>
      <input type="radio" value="男" name="sex" v-model="gender">男
      <input type="radio" value="女" name="sex" v-model="gender">女
    </div>
    <div>
      <span>自我介绍</span>
      <textarea v-model="intro"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pass: "",
      from: "",
      hobby: [], 
      sex: "",
      intro: "",
    };
    // 总结:
    // 特别注意: v-model, 在input[checkbox]的多选框状态
    // 变量为非数组, 则绑定的是checked的属性(true/false) - 常用于: 单个绑定使用
    // 变量为数组, 则绑定的是他们的value属性里的值 - 常用于: 收集勾选了哪些值
  }
};
</script>
```


##  v-text和v-html
> 目的: 更新DOM对象的innerText/innerHTML

- v-text <=> innerText
- v-html <=> innnerHTML
	- 在可信的页面使用

* 语法:
  * v-text="vue数据变量"  =>  v-text把值当成普通字符串显示
  * v-html="vue数据变量"   =>  v-html把值当做html解析
* 注意: 会覆盖插值表达式

## v-show和v-if

> 目标: 控制标签的隐藏或出现

* 语法:
  * v-show="vue变量"            
  * v-if="vue变量" 


* 原理
  * v-show —— css层面 —— 用的display:none隐藏   (频繁切换使用)
  * v-if  —— dom层面 —— 直接从DOM树上移除




















<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2021-12-15 20:29:56
 * @LastEditTime: 2022-03-03 16:58:05
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->