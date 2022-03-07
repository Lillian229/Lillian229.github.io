# 1.6.CSS的显示模式(块、行内、行内块)、背景

## 一、CSS的显示模式

### 1、什么是元素的显示模式

**定义：** 元素显示模式就是元素（标签）以什么方式进行显示，比如`<div>`自己占一行，比如一行可以放多个`<span>`。

**作用：** 网页的标签非常多，在不同地方会用到不同类型的标签，了解其特点可以更好的布局网页。

### 2、元素显示模式的分类

#### 2.1、块元素

**常见的块元素**：
```
<h1>~<h6>、<p>、<div>、<ul>、<ol>、<li>
```
`<div>` 标签是最典型的块元素。

**块级元素的特点**：
- 比较霸道，自己独占一行。
- 高度，宽度、外边距以及内边距都可以控制。
- 宽度默认是容器（父级宽度）的100%。
- 是一个容器及盒子，里面可以放行内或者块级元素。



**注意：** 文字类的元素内不能放块级元素
1. `<p>` 标签主要用于存放文字，因此 `<p>` 里面不能放块级元素，特别是不能放`<div>` 
2. 同理， `<h1>~<h6>`等都是文字类块级标签，里面也不能放其他块级元素

#### 2.2、行内元素

**常见的行内元素：**

```
<a>、<strong>、<b>、<em>、<i>、<del>、<s>、<ins>、<u>、<span>
```
`<span>` 标签是最典型的行内元素。有的地方也将行内元素称为内联元素。

**行内元素的特点：**

- 相邻行内元素在一行上，一行可以显示多个。
- 高、宽直接设置是无效的。
- 默认宽度就是它本身内容的宽度。
- 行内元素只能容纳文本或其他行内元素。

**注意：**
1. 链接里面不能再放链接
2. 特殊情况链接 `<a>` 里面可以放块级元素，但是给 `<a>` 转换一下块级模式最安全

#### 2.3、行内块元素

**常见的行内块标签**：

```
<img />、<input />、<td>
```
它们同时具有块元素和行内元素的特点。有些资料称它们为行内块元素。

**行内块元素的特点**：

- 和相邻行内元素（行内块）在一行上，但是他们之间会有空白缝隙。
- 一行可以显示多个（行内元素特点）。
- 默认宽度就是它本身内容的宽度（行内元素特点）。
- 高度，行高、外边距以及内边距都可以控制（块级元素特点）。

#### 2.4、元素显示模式总结
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1570870718415.png)
学习元素显示模式的主要目的: 分清它们各自的特点，当网页布局的时候，在合适的地方用合适的标签元素。

### 3、元素显示模式的转换

**简单理解**: 一个模式的元素需要另外一种模式的特性，比如想要增加链接 `<a>` 的触发范围。   

**转换方式**
- 转换为块元素：display: block;
- 转换为行内元素：display: inline;
- 转换为行内块：display: inline-block;

### 4、单行文字垂直居中的代码

**解决方案**:    
​让文字的行高等于盒子的高度  就可以让文字在当前盒子内垂直居中


![](https://gitee.com/leelillian/picgorepo/raw/master/images/1570870368253.png)

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1570870387089.png)

**简单理解**: 

行高的上空隙和下空隙把文字挤到中间了，

​如果行高小于盒子高度,文字会偏上，

如果行高大于盒子高度,则文字偏下。



## 二、CSS的背景

通过 CSS 背景属性，可以给页面元素添加背景样式。

背景属性可以设置背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定等。

### 1、背景颜色
**样式名称**：

​background-color 定义元素的背景颜色

**使用方式**：
```css
    background-color: #eee;
    background-color: white;
```

**其他说明**：

​元素背景颜色默认值是 transparent（透明）
```css
    background-color: transparent;

```

### 2、背景图片

**样式名称**：

​background-image 定义元素的背景图片

**使用方式**：
```css
background-image: none  /  url
/* none: 无背景图 */
/* url: 使用绝对或者相对地址指定背景图像 */
```


**其他说明**：

​实际开发常见于 logo 或者一些装饰性的小图片或者是超大的背景图片, 优点是非常便于控制位置. (精灵图也是一种运用场景)

注意：背景图片后面的地址，千万不要忘记加 URL， 同时里面的路径**不要加引号**。


为什么url里面的值有人用引号包起来，有人不用引号包起来呢？
其实w3c对uri值的编码 ：http://www.w3.org/TR/2011/PR-CSS2-20110412/syndata.html#uri

<details> 
	<summary>规范原文是这么说的：</summary> 
	<pre><code> 
    The format of a URI value is 'url(' followed by optional white space followed by an optional single quote (') or double quote (") character followed by the URI itself, followed by an optional single quote (') or double quote (") character followed by optional white space followed by ')'. The two quote characters must be the same.
    Some characters appearing in an unquoted URI, such as parentheses, white space characters, single quotes (') and double quotes ("), must be escaped with a backslash so that the resulting URI value is a URI token: '\(', '\)'.
	</code></pre> 
</details>
<details> 
	<summary>翻译成中文就是：</summary> 
	<pre><code> 
    url()可以用可选的空格包住可选的单引号或双引号，接着包住url本身。当url()没有用引号包住uri时，如果uri中包含括号、空格、单引号、或者双引号，必须通过'\'进行转码，例如，如果url包含'()'，那么要转码成这样：'\(', '\)'。
    也就是url(a.png) 等价于url( a.png )，等价于url('a.png)，等价于url("a.png"),等价于url( "a.png" )。
    所以不加引号是符合规范的，并且可以减少css文件大小，虽然作用微乎其微。浏览器们对此的实现是符合规范，（ie9下的ie7模式有点怪胎，不管他）
    有观点认为不加引号会有安全问题，这个主要是由于xss攻击，但是既然css文件是开发者自己编写的，也就是不会在url中插入不可信数据，那么当然可以放心的省略引号
	</code></pre> 
</details>

所以加不加对你的影响非常小, 练习的时候加上会有提示效果, 可以省去很多麻烦




### 3、背景平铺

**样式名称：**

​background-repeat: 设置元素背景图像的平铺 

**使用方式：**
```css
background-repeat: repeat / no-repeat / repeat-x / repeat-y
```

**参数值&作用：**
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1570886688306.png)

### 4、背景图片位置

**样式名称：**

​background-position: 属性可以改变图片在背景中的位置

**使用方式：**
```css
​background-position: x y;
```

​参数代表的意思是：x 坐标和 y 坐标。 可以使用 方位名词 或者 精确单位
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1570887034135.png)

**其他说明：**

1、参数是方位名词

​		如果指定的两个值都是方位名词，则两个值前后顺序无关，比如 left  top 和 top  left 效果一致

​		如果只指定了一个方位名词，另一个值省略，则第二个值默认居中对齐

2、参数是精确单位

​		如果参数值是精确坐标，那么第一个肯定是 x 坐标，第二个一定是 y 坐标

​		如果只指定一个数值，那该数值一定是 x 坐标，另一个默认垂直居中

3、参数是混合单位

​		如果指定的两个值是精确单位和方位名词混合使用，则第一个值是 x 坐标，第二个值是 y 坐标


### 5、背景图片固定

**样式名称：**

​background-attachment: 属性设置背景图像是否固定或者随着页面的其余部分滚动。

**使用方式：**
```css
​background-attachment:scroll / fixed
```

**其他说明：**

​background-attachment 后期可以制作视差滚动的效果。


### 6、背景样式合写

**背景合写样式：**

​background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置;

**使用方式：**
```css
background:transparent url(imag.png) repeat-y fixed top;
```

### 7、背景色半透明

CSS3 提供了背景颜色半透明的效果。 

**使用方式：**
background: rgba(0, 0, 0, 0.3)

- 最后一个参数是 alpha 透明度，取值范围在 0~1之间
- 我们习惯把 0.3 的 0 省略掉，写为 background: rgba(0, 0, 0, .3);

**注意**：

- 背景半透明是指盒子背景半透明，盒子里面的内容不受影响
- CSS3 新增属性，是 IE9+ 版本浏览器才支持的，但是现在实际开发,我们不太关注兼容性写法了,可以放心使用

### 8、背景总结

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1570888283511.png)


<!--
 * @Description: 1.6.CSS的显示模式(块、行内、行内块)、背景
 * @Author: Lillian
 * @Date: 2022-03-01 00:52:20
 * @LastEditTime: 2022-03-01 19:46:02
-->