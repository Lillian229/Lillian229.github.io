
# 1.3.表格、列表、表单
## 表格
### 表格的主要作用

表格不是用来布局页面的,而是用于显示、展示数据，可读性好。

### 表格具体用法

```html
<table>
    <tr>
        <td>单元格内的文字</td>
        ...
    </tr>
    ...
</table>
```
1. `<table>` `</table>` 是用于定义表格的标签。
2. `<tr>` `</tr>` 标签用于定义表格中的行，必须嵌套在 `<table> ` `</table>`标签中。
3. `<td>` `</td>` 用于定义表格中的单元格，必须嵌套在`<tr>` `</tr>`标签中。
4. 字母 td 指表格数据（table data），即数据单元格的内容。

### 表头标签
表头： `<th>` (table head 的缩写)

<thead> 内部必须拥有`<tr>` 标签。

一般表头单元格位于表格的第一行或第一列，表头单元格里面的文本内容**加粗居中**显示.

表头标签的具体实现：
```html
<table>
​   <tr>
​       <th>姓名</th>
​       ...
​   </tr>
​   ...
​</table>
```
### 表格结构标签
表头`<thead>` + 表格主体`<tbody>`

### 表格属性
align, border, cellpadding, cellspacing, width
![](https://gitee.com/leelillian/picgorepo/raw/master/images/表格属性.png)

### 合并单元格方式

1. 跨行合并：rowspan="合并单元格的个数"

​最上侧单元格为目标单元格, 写合并代码

2. 跨列合并：colspan="合并单元格的个数"

​最左侧单元格为目标单元格, 写合并代码

合并单元格三步曲：
1. 先确定是跨行还是跨列合并。
2. 找到目标单元格. 写上合并方式 = 合并的单元格数量。比如：`<td colspan="2"></td>`。 
3. 删除多余的单元格。


## 列表
表格: 显示数据，列表: 布局

分类：无序列表、有序列表和自定义列表

列表最大的特点就是整齐、整洁、有序，它作为布局会更加自由和方便。
​
### 无序列表
`<ul>` 标签表示 HTML 页面中项目的无序列表，一般会以项目符号呈现列表项，而列表项使用 `<li>` 标签定义。无序列表的基本语法格式如下：
```html
<ul> 
  <li>列表项1</li>   
  <li>列表项2</li>  
  <li>列表项3</li>  
   ... 
</ul>
```

1. 无序列表的各个列表项之间没有顺序级别之分，是并列的。
2. `<li>` 与 `</li>` 之间相当于一个容器，可以容纳所有元素。
3. 无序列表会带有自己的样式属性，但在实际会使用 CSS 设置。

### 有序列表
有序列表: 有排列顺序的列表, 列表排序以数字来显示.

`<ol>` 定义有序列表，`<li>` 定义列表项。

有序列表的基本语法格式如下：
```html
<ol>   
	<li>列表项1</li>   
	<li>列表项2</li>  
	<li>列表项3</li>   
	... 
</ol>
```
1. `<ol></ol>`中只能嵌套`<li></li>`，不能在`<ol></ol>`中输入其他标签或者文字。
2. `<li>` 与 `</li>`之间相当于一个容器，可以容纳所有元素。
3. 有序列表会带有自己的样式属性，但在实际会使用 CSS 设置。

### 自定义列表
自定义列表的使用场景:自定义列表常用于对术语或名词进行解释和描述，定义列表的列表项前没有任何项目符号。

`<dl>` 定义描述列表（或定义列表），与` <dt>`（定义项目/名字）和 `<dd>`（描述每一个项目/名字）一起使用。语法如下：

```html
 <dl>   
 <dt>名词1</dt>   
 <dd>名词1解释1</dd>   
 <dd>名词1解释2</dd> 
 </dl>
```
### 列表总结
![](https://gitee.com/leelillian/picgorepo/raw/master/images/列表总结.png)

## 表单
使用表单目的：**收集用户信息**。

​使用场景：在网页中，跟用户**进行交互**，收集**用户资料**。

组成：**表单域**、**表单控件**（也称为表单元素）和 **提示信息**

### 表单域：
表单域是一个包含**表单元素的区域**。
`<form>` 标签用于定义表单域，实现用户信息的收集和传递。

`<form>` 会把它范围内的表单元素信息提交给服务器.
```html
    <form action="url地址" method="提交方式" name="表单域名称">各种表单元素控件</form>
```
表单域常用属性：action、method、name
![](https://gitee.com/leelillian/picgorepo/raw/master/images/表单常用属性.png)

###  表单控件(表单元素)
`<input>` 表单元素，单标签，用于收集用户信息，效果：<input>




`<input type="属性值">`，type 属性设置不同的属性值用来指定不同的控件类型。

type 属性的属性值及其描述如下：

( button、checkbox、image、hidden、password....)
![](https://gitee.com/leelillian/picgorepo/raw/master/images/表单标签.png)


除 type 属性外，`<input>`标签还有其他很多属性，其常用属性如下：
(name、value、checked、maxlength)
![](https://gitee.com/leelillian/picgorepo/raw/master/images/表单其他属性.png)

1. name和value是每个表单元素都有的属性值，主要给后台人员使用
2. name表单元素的名字，要求单选按钮和复选框要有相同的name值
3. checked属性主要针对单选按钮和复选框，主要作用一打开页面，就可以默认选中某个元素
4. maxlength是用户可以在表单输入的最大字符数（正整数），一般少用

### `<label>` 标签——定义标注
`<label>` 为 `<input>`定义标注（标签）。

`<label>` 标签用于绑定一个表单元素, 当点击`<label>`标签内的文本时，浏览器就会自动将焦点(光标)转到或者选择对应的表单元素上,用来增加用户体验.
语法：
```html
<label for="sex">男</label>
<input type="radio" name="sex" id="sex" />
```
核心：`<label>`for 属性应当与相关元素的 id 属性相同。

### `<select>` 表单元素——下拉列表

使用场景: 有多个选项，并且想节约页面空间，用`<select>`标签控件定义下拉列表。

语法： 
`<select>` `<option>`
1. select中至少包含一对`<option>`。
2. 在 option中定义 selected = “selected" 时，当前项即为默认选中项。
```html
<select>
   <option>选项1</option>
   <option>选项2</option>
   <option>选项3</option>
   <!-- ... -->
 </select>
```
效果：
<select>
   <option>选项1</option>
   <option>选项2</option>
   <option>选项3</option>
   <!-- ... -->
 </select>

### `<textarea>` 表单元素

1. 使用场景: 当用户输入内容较多的情况下，我们就不能使用文本框表单了，此时我们可以使用 `<textarea>` 标签。
2. 在表单元素中，`<textarea> `用于定义多行文本输入。
3. 使用多行文本输入控件，可以输入更多的文字，该控件常见于留言板，评论。
4. 通过 `<textarea>` 标签可以轻松地创建多行文本输入框。


语法：
```html
<textarea rows="3" cols="20">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容 </textarea>

<!-- cols=“每行中的字符数”  -->

<!-- rows=“显示的行数” -->

<!-- 我们在实际开发中不会使用，都是用 CSS 来改变大小。 -->
```
显示效果：
<textarea rows="3" cols="20">文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容 </textarea>



input 输入表单元素、select 下拉表单元素 、textarea文本域表单元素。这三组表单元素都应该包含在form表单域里面,并且有 name 属性。

具体代码：
```html
<form>
	<input type="text" name="username">
	<select name="area">  
	    <option>北京</option>
	</select> 
	<textarea name= "message">文本内容 文本内容 文本内容 文本内容 文本内容 文本内容</textarea>

​</form>
```

<!--
 * @Description: 1.3.表格、列表、表单
 * @Author: Lillian
 * @Date: 2022-02-25 14:48:47
 * @LastEditTime: 2022-03-01 16:09:49
 * @Reference: 
-->