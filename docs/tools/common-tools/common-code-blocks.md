# 常用代码块
### 计算代码运行时间
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

## 批量获得文章目录
```
如何创建文件目录文件：
1. 在当前列表文件夹新建一个txt文件
2. 在txt中输入:
DIR *.*  /B >LIST.TXT
3. 将txt文件换为bat 
```

## 批量更改文件名
```
批量更改文件名

@echo off
set a=1
setlocal EnableDelayedExpansion
for %%n in (*.jpg) do (
set /A a+=1
ren "%%n" "动漫!a!.jpg"
)

动漫替换为你想用的名字，a是序号“1——n",jpg是格式，记得for循环里的也要改
```

## 批量更改文件夹
```
批量更改文件夹

1、当前目录新建一个文本文档打开输入以下代码

set a=1
setlocal EnableDelayedExpansion
FOR /f "tokens=*" %%i IN ('dir /a:d /b') DO (
set /A a+=1
ren "%%i" "壁纸!a!"
)

跟以上操作一致
```