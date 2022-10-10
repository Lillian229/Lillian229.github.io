# 常用代码块

## 更改图片大小
用html标签替换markdown插入图片的标签
```md
<img src="图片链接" height="50%" width="50%">
```

## 计算代码运行时间
```js
console.time('需要计算的时间')
任意一段算法代码
console.timeEnd('需要计算的时间')
```


## VsCode 如何折叠注释
 #region 与 #endregion
```
// #region 
// 用法
// const {keys, values, entries} = Object
// const res = {id: 001, name: '漂亮', qty: 20}
// for (let item of keys(res)) {
//   console.log('key',item);
// }
// #endregion
```


## md折叠代码
```
<details> 
	<summary>折叠时的提示文字</summary> 
	<pre><code> 
		//代码内容
		//代码内容
		//代码内容
	</code></pre> 
</details>
```

<details> 
	<summary>md代码折叠展示（切换至编辑模式看源代码）</summary> 
	<pre><code> 
		//代码内容
		//代码内容
		//代码内容
	</code></pre> 
</details>


