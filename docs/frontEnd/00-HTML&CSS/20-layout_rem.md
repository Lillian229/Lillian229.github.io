# 1.20.rem布局

## 一、rem基础

### 1.1。rem单位

`rem` (root em)是一个相对单位，类似于`em`，em是父元素字体大小。

不同的是rem的基准是相对于html元素的字体大小。

比如，根元素（html）设置font-size=12px; 非根元素设置width:2rem; 则换成px表示就是24px。

css文件里记得都使用rem单位，关键点：字体大小，元素宽高，内外边距都是根据设计稿测量来的。

rem = 需要设置的大小12px ***/***  浏览器默认的html font-size

```
/* 根html 为 12px */
html {
   font-size: 12px;
}
/* 此时 div 的字体大小就是 24px */       
div {
    font-size: 2rem;
}
```

rem的优势：父元素文字大小可能不一致， 但是整个页面只有一个html，可以很好来控制整个页面的元素大小。

> 注意：rem 控制的不仅仅是字体大小，还能控制其他元素的大小。
## 二、媒体查询

### 2.1.什么是媒体查询

媒体查询（Media Query）是CSS3新语法。

+ 使用 @media查询，可以针对不同的媒体类型定义不同的样式
+ `@media 可以针对不同的屏幕尺寸设置不同的样式`
+ 当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面 
+ 目前针对很多苹果手机、Android手机，平板等设备都用得到多媒体查询

### 2.2媒体查询语法规范

+ 用 @media开头 注意@符号
+ mediatype  媒体类型
+ 关键字 and  not  only
+ media feature 媒体特性必须有小括号包含

```css
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
```

1. mediatype 查询类型

> 将不同的终端设备划分成不同的类型，称为媒体类型

|  值 |  解释说明 |
|---|---|
|  all |  用于所有设备 |
| print  | 用于打印机和打印预览  |
|  screen | 用于电脑屏幕、平板电脑、智能手机等  |


2. 关键字
> 关键字将媒体类型或多个媒体特性连接到一起做为媒体查询的条件。

+ and：可以将多个媒体特性连接到一起，相当于“且”的意思。
+ not：排除某个媒体类型，相当于“非”的意思，可以省略。
+ only：指定某个特定的媒体类型，可以省略。    

3. 媒体特性

> 每种媒体类型都具体各自不同的特性，根据不同媒体类型的媒体特性设置不同的展示风格。我们暂且了解三个。

   注意他们要加小括号包含

|  值 |  解释说明 |
|---|---|
|  width | 定义输出设备中页面**可见**区域的宽度 |
| min-width  | 定义输出设备中页面**最小**可见区域的宽度 |
|  max-width | 定义输出设备中页面**最大**可见区域的宽度  |


4. 媒体查询书写规则

> 注意： 为了防止混乱，媒体查询我们要按照从小到大或者从大到小的顺序来写,但是我们最喜欢的还是从小到大来写，这样代码更简洁


eg.根据页面宽度改变背景颜色。

实现思路：
1. 按照 从大到小 的或者 从小到大 的思路
2. 注意有最大值 max-width 和最小值 min-width 都是包含等于的
3. 当屏幕小于 540 像素，背景颜色变为蓝色（x <= 539）
4. 当屏幕大于等于 540 像素并且小于等于 969 像素的时候背景颜色为绿色（540 <= x <= 969）
5. 当屏幕大于等于 970 像素的时候，背景颜色为红色（x >= 970）

> 注意：为了防止混乱，媒体查询我们要按照从小到大或者从大到小的顺序来写，但是我们最喜欢的还是从小到大来写，这样代码更简洁。利用css层叠性。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>媒体查询_根据页面宽度改变背景颜色</title>
    <style>
        /* 1. 媒体查询一般按照从大到小或者从小到大的顺序来 */
        /* 2. 小于 540px 页面的背景颜色变为蓝色 */
        @media screen and (max-width: 539px) {
            body {
                background-color: blue;
            }
        }

        /* 3. 540 ~ 970 我们的页面颜色改为绿色 */
        /* @media screen and (min-width: 540px) and (max-width: 969px) {
            body {
                background-color: green;
            }
        } */
        /* 从小到大（层叠性） */
        @media screen and (min-width: 540px) {
            body {
                background-color: green;
            }
        }

        /* 4. 大于等于 970px 我们页面的颜色改为红色 */
        @media screen and (min-width: 970px) {
            body {
                background-color: red;
            }
        }

        /* 5. screen 还有 and 必须带上不能省略的 */
        /* 6. 数字后面必须跟单位 970px 这个 px 不能省略的 */
    </style>
</head>

<body>

</body>

</html>
```
   

## 三、less 基础

### 3.1.维护css弊端

CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。

+ CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是比较高的。
+ 不方便维护及扩展，不利于复用。
+ CSS 没有很好的计算能力
+ 非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目。 

### 3.2.Less 介绍 

Less（LeanerStyle Sheets 的缩写）是一门 CSS扩展语言，也成为CSS预处理器。

做为 CSS的一种形式的扩展，它并没有减少CSS的功能，而是在现有的CSS语法上，为CSS加入程序式语言的特性。

它在CSS 的语法基础之上，引入了变量，Mixin（混入），运算以及函数等功能，大大简化了 CSS 的编写，并且降低了 CSS的维护成本，就像它的名称所说的那样，Less可以让我们用更少的代码做更多的事情。

Less中文网址：[http://](http://lesscss.cn/)[less](http://lesscss.cn/)[css.cn/](http://lesscss.cn/)

常见的CSS预处理器：Sass、Less、Stylus

一句话：Less是一门 CSS 预处理语言，它扩展了CSS的动态特性。

### 3.3Less安装

①安装nodejs，可选择版本(8.0)，网址：<http://nodejs.cn/download/>

②检查是否安装成功，使用cmd命令（win10是window+r 打开运行输入cmd）  ---输入 `node –v` 查看版本即可

③基于nodejs在线安装Less，使用cmd命令 `npm install -g less` 即可

④检查是否安装成功，使用cmd命令 `less -v` 查看版本即可

### 3.4.Less使用
首先新建一个后缀为 less 的文件，在这个文件里面书写 less 语句
- Less 变量
- Less 编译
- Less 嵌套
- Less 运算

#### less变量
变量是指没有固定的值，可以改变的。因为我们CSS中的一些颜色和数值等经常使用。

```css
@变量名:值;
```

+ 必须有`@`为前缀
+ 不能包含特殊字符
+ 不能以数字开头
+ 大小写敏感

```css
@color: pink;
```

#### Less编译 —— vocode Less 插件

本质上，Less 包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件。

所以，我们需要把我们的 Less 文件，编译生成为 CSS 文件，这样我们的 HTML 页面才能使用。

`Easy LESS` 插件用来把less文件编译为css文件

安装完毕插件，重新加载下 vscode。

只要保存一下Less文件，会自动生成CSS文件。
 

#### Less 嵌套

```css
// 将css改为less
#header .logo {
  width: 300px;
}

#header {
    .logo {
       width: 300px;
    }
}

```
如果遇见（交集|伪类|伪元素选择器）

- 内层选择器的前面没有 & 符号，则它被解析为父选择器的后代
- 如果有 & 符号，它就被解析为父元素自身或父元素的伪类


```css
/* css写法 */
a:hover{
    color:red;
}

/* less写法 */
a{
  &:hover{
      color:red;
  }
}
```

#### Less 运算

**任何数字、颜色或者变量都可以参与运算。就是Less提供了加（+）、减（-）、乘（*）、除（/）算术运算。**

```
/*Less 里面写*/
@witdh: 10px + 5;
div {
    border: @witdh solid red;
}
/*生成的css*/
div {
  border: 15px solid red;
}
/*Less 甚至还可以这样 */
width: (@width + 5) * 2;

```

+ 乘号（*）和除号（/）的写法  
+ 运算符中间左右有个**空格**隔开 1px + 5
+ 对于两个不同的单位的值之间的运算，运算结果的值取第一个值的单位 
+ 如果两个值之间只有一个值有单位，则运算结果就取该单位

## 四、rem适配方案

1.让一些不能等比自适应的元素，达到当**设备尺寸**发生**改变**的时候，等**比例适配**当前设备。

2.使用媒体查询根据不同设备按比例设置html的字体大小，然后页面元素使用rem做尺寸单位，当html字体大小变化元素尺寸也会发生变化，从而达到等比缩放的适配。

技术方案：

1.rem+less+媒体查询

2.（推荐）flexible.js+rem（更简单）

总结： 两种方案现在都存在。

### 4.1.rem适配方案1_rem+less+媒体查询
#### （1）设计稿常见宽度尺寸
| 设备  |  常见宽度 |
|---|---|
| iphone 4 5  |  640px |
| iphone 6 7 8  |  750px |
|  iphone x 11 12 |  1170px |
| 安卓常见  |  320px、360px、375px、384px、400px、414px、500px、720px、1080px |

一般情况下，以一套或两套效果图适应大部分的屏幕，放弃极端屏或对其优雅降级，牺牲一些效果，现在基本以 750px 为准。（目前应该是 1080px 2021年）
	
#### （2）动态设置 html 标签 font-size 大小
①假设设计稿是750px

②假设我们把整个屏幕划分为15等份（划分标准不一可以是20份也可以是10等份）

③每一份作为html字体大小，这里就是50px

④那么在320px设备的时候，字体大小为320/15就是  21.33px

⑤用我们页面元素的大小除以不同的 html字体大小会发现他们比例还是相同的

⑥比如我们以750为标准设计稿

⑦一个100*100像素的页面元素在  750屏幕下，  就是 100/ 50  转换为rem  是  2rem*2rem  比例是1比1

⑧320屏幕下，  html字体大小为21.33   则 2rem=  42.66px  此时宽和高都是 42.66  但是宽和高的比例还是 1比1

⑨但是已经能实现不同屏幕下  页面元素盒子等比例缩放的效果

#### （3）总结：元素大小取值方法

①最后的公式：页面元素的rem值 =  页面元素值（px） /  （屏幕宽度  /  划分的份数）

②屏幕宽度/划分的份数就是 htmlfont-size 的大小

③或者：页面元素的rem值 =  页面元素值（px） /  html font-size 字体大小

#### eg.苏宁首页

苏宁首页地址 ：[苏宁首页](m.suning.com)

1. 技术选型

方案：我们采取单独制作移动页面方案

技术：布局采取rem适配布局（less + rem  + 媒体查询）

设计图： 本设计图采用 750px 设计尺寸

2. 搭建文件结构
- css
    - common.css
    - common.less
    - index.css
    - index.less
    - normalize.css
- images
- upload 
- index.html

3. 设置视口标签以及引入初始化样式

```html
<meta name="viewport" content="width=device-width, user-scalable=no,  initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

<link rel="stylesheet" href="css/normalize.css">
```

4. 设置公共common.less文件

+ 新建common.less    设置好最常见的屏幕尺寸，利用媒体查询设置不同的html字体大小，因为除了首页其他页面也需要

+ 预设的尺寸有 320px、360px、375px、384px、400px、414px、424px、480px、540px、720px、750px

+ 划分的份数定为 15等份

+ 因为pc端也可以打开苏宁移动端首页，默认html字体大小为 50px (注意这句话写到最上面)

<details> 
	<summary>common.less代码（展开可查看）</summary> 
	<pre><code>
        // 设置常见的屏幕尺寸 修改里面的html文字大小
        a {
            text-decoration: none;
        }
        // 一定要写到最上面
        html {
            font-size: 50px;
        }
        // 我们此次定义的划分的份数 为 15
        @no: 15;
        // 320
        @media screen and (min-width: 320px) {
            html {
                font-size: (320px / @no);
            }
        }
        // 360
        @media screen and (min-width: 360px) {
            html {
                font-size: (360px / @no);
            }
        }
        // 375 iphone 678
        @media screen and (min-width: 375px) {
            html {
                font-size: (375px / @no);
            }
        }
        // 384
        @media screen and (min-width: 384px) {
            html {
                font-size: (384px / @no);
            }
        }
        // 400
        @media screen and (min-width: 400px) {
            html {
                font-size: (400px / @no);
            }
        }
        // 414
        @media screen and (min-width: 414px) {
            html {
                font-size: (414px / @no);
            }
        }
        // 424
        @media screen and (min-width: 424px) {
            html {
                font-size: (424px / @no);
            }
        }
        // 480
        @media screen and (min-width: 480px) {
            html {
                font-size: (480px / @no);
            }
        }
        // 540
        @media screen and (min-width: 540px) {
            html {
                font-size: (540px / @no);
            }
        }
        // 720
        @media screen and (min-width: 720px) {
            html {
                font-size: (720px / @no);
            }
        }
        // 750
        @media screen and (min-width: 750px) {
            html {
                font-size: (750px / @no);
            }
        }
	</code></pre> 
</details>

5. 新建 index.less 文件

+ 新建 index.less，这里面写首页的样式

+ 将刚才设置好的 common.less 引入到 index.less 里面，语法如下：

    ```html
    // 在 index.less 中导入 common.less 文件
    @import "common";
    ```

+ 生成 index.css 引入到 index.html 里面

<details> 
	<summary>index.less代码（展开可查看）</summary> 
	<pre><code> 
        // 首页的样式less文件
        @import "common";
        // @import 导入的意思 可以把一个样式文件导入到另外一个样式文件里面
        // link 是把一个 样式文件引入到 html页面里面
        body {
            min-width: 320px;
            width: 15rem;
            margin: 0 auto;
            line-height: 1.5;
            font-family: Arial, Helvetica;
            background: #F2F2F2;
        }
        // 页面元素rem计算公式： 页面元素的px / html 字体大小 50
        // search-content
        @baseFont: 50;
        .search-content {
            display: flex;
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 15rem;
            height: (88rem / @baseFont);
            background-color: #FFC001;
            .classify {
                width: (44rem / @baseFont);
                height: (70rem / @baseFont);
                margin: (11rem / @baseFont) (25rem / @baseFont) (7rem / @baseFont) (24rem / @baseFont);
                background: url(../images/classify.png) no-repeat;
                // 背景缩放
                background-size: (44rem / @baseFont) (70rem / @baseFont);
            }
            .search {
                flex: 1;
                input {
                    outline: none;
                    width: 100%;
                    border: 0;
                    height: (66rem / @baseFont);
                    border-radius: (33rem / @baseFont);
                    background-color: #FFF2CC;
                    margin-top: (12rem / @baseFont);
                    font-size: (25rem / @baseFont);
                    padding-left: (55rem / @baseFont);
                    color: #757575;
                }
            }
            .login {
                width: (75rem / @baseFont);
                height: (70rem / @baseFont);
                line-height: (70rem / @baseFont);
                margin: (10rem / @baseFont);
                font-size: (25rem / @baseFont);
                text-align: center;
                color: #fff;
            }
        }
        // banner
        .banner {
            width: (750rem / @baseFont);
            height: (368rem / @baseFont);
            img {
                width: 100%;
                height: 100%;
            }
        }
        // ad
        .ad {
            display: flex;
            a {
                flex: 1;
                img {
                    width: 100%;
                }
            }
        }
        // nav
        nav {
            width: (750rem / @baseFont);
            a {
                float: left;
                width: (150rem / @baseFont);
                height: (140rem / @baseFont);
                text-align: center;
                img {
                    display: block;
                    width: (82rem / @baseFont);
                    height: (82rem / @baseFont);
                    margin: (10rem / @baseFont) auto 0;
                }
                span {
                    font-size: (25rem / @baseFont);
                    color: #333;
                }
            }
        }
	</code></pre> 
</details>

6. body样式
```html
body {
	min-width: 320px;
	width: 15rem;
	margin: 0 auto;
	line-height: 1.5;
	font-family: Arial, Helvetica;
	background: #F2F2F2;
}
```

7. normalize.css
<details> 
	<summary>normalize.css(展开查看)</summary> 
	<pre><code> 
        /*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */
        /**
        * 1. Change the default font family in all browsers (opinionated).
        * 2. Correct the line height in all browsers.
        * 3. Prevent adjustments of font size after orientation changes in
        *    IE on Windows Phone and in iOS.
        */
        /* Document
        ========================================================================== */
        html {
        font-family: sans-serif;
        /* 1 */
        line-height: 1.15;
        /* 2 */
        -ms-text-size-adjust: 100%;
        /* 3 */
        -webkit-text-size-adjust: 100%;
        /* 3 */
        }
        /* Sections
        ========================================================================== */
        /**
        * Remove the margin in all browsers (opinionated).
        */
        body {
        margin: 0;
        }
        /**
        * Add the correct display in IE 9-.
        */
        article,
        aside,
        footer,
        header,
        nav,
        section {
        display: block;
        }
        /**
        * Correct the font size and margin on `h1` elements within `section` and
        * `article` contexts in Chrome, Firefox, and Safari.
        */
        h1 {
        font-size: 2em;
        margin: 0.67em 0;
        }
        /* Grouping content
        ========================================================================== */
        /**
        * Add the correct display in IE 9-.
        * 1. Add the correct display in IE.
        */
        figcaption,
        figure,
        main {
        /* 1 */
        display: block;
        }
        /**
        * Add the correct margin in IE 8.
        */
        figure {
        margin: 1em 40px;
        }
        /**
        * 1. Add the correct box sizing in Firefox.
        * 2. Show the overflow in Edge and IE.
        */
        hr {
        box-sizing: content-box;
        /* 1 */
        height: 0;
        /* 1 */
        overflow: visible;
        /* 2 */
        }
        /**
        * 1. Correct the inheritance and scaling of font size in all browsers.
        * 2. Correct the odd `em` font sizing in all browsers.
        */
        pre {
        font-family: monospace, monospace;
        /* 1 */
        font-size: 1em;
        /* 2 */
        }
        /* Text-level semantics
        ========================================================================== */
        /**
        * 1. Remove the gray background on active links in IE 10.
        * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
        */
        a {
        background-color: transparent;
        /* 1 */
        -webkit-text-decoration-skip: objects;
        /* 2 */
        }
        /**
        * Remove the outline on focused links when they are also active or hovered
        * in all browsers (opinionated).
        */
        a:active,
        a:hover {
        outline-width: 0;
        }
        /**
        * 1. Remove the bottom border in Firefox 39-.
        * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
        */
        abbr[title] {
        border-bottom: none;
        /* 1 */
        text-decoration: underline;
        /* 2 */
        text-decoration: underline dotted;
        /* 2 */
        }
        /**
        * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
        */
        b,
        strong {
        font-weight: inherit;
        }
        /**
        * Add the correct font weight in Chrome, Edge, and Safari.
        */
        b,
        strong {
        font-weight: bolder;
        }
        /**
        * 1. Correct the inheritance and scaling of font size in all browsers.
        * 2. Correct the odd `em` font sizing in all browsers.
        */
        code,
        kbd,
        samp {
        font-family: monospace, monospace;
        /* 1 */
        font-size: 1em;
        /* 2 */
        }
        /**
        * Add the correct font style in Android 4.3-.
        */
        dfn {
        font-style: italic;
        }
        /**
        * Add the correct background and color in IE 9-.
        */
        mark {
        background-color: #ff0;
        color: #000;
        }
        /**
        * Add the correct font size in all browsers.
        */
        small {
        font-size: 80%;
        }
        /**
        * Prevent `sub` and `sup` elements from affecting the line height in
        * all browsers.
        */
        sub,
        sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
        }
        sub {
        bottom: -0.25em;
        }
        sup {
        top: -0.5em;
        }
        /* Embedded content
        ========================================================================== */
        /**
        * Add the correct display in IE 9-.
        */
        audio,
        video {
        display: inline-block;
        }
        /**
        * Add the correct display in iOS 4-7.
        */
        audio:not([controls]) {
        display: none;
        height: 0;
        }
        /**
        * Remove the border on images inside links in IE 10-.
        */
        img {
        border-style: none;
        }
        /**
        * Hide the overflow in IE.
        */
        svg:not(:root) {
        overflow: hidden;
        }
        /* Forms
        ========================================================================== */
        /**
        * 1. Change the font styles in all browsers (opinionated).
        * 2. Remove the margin in Firefox and Safari.
        */
        button,
        input,
        optgroup,
        select,
        textarea {
        font-family: sans-serif;
        /* 1 */
        font-size: 100%;
        /* 1 */
        line-height: 1.15;
        /* 1 */
        margin: 0;
        /* 2 */
        }
        /**
        * Show the overflow in IE.
        * 1. Show the overflow in Edge.
        */
        button,
        input {
        /* 1 */
        overflow: visible;
        }
        /**
        * Remove the inheritance of text transform in Edge, Firefox, and IE.
        * 1. Remove the inheritance of text transform in Firefox.
        */
        button,
        select {
        /* 1 */
        text-transform: none;
        }
        /**
        * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
        *    controls in Android 4.
        * 2. Correct the inability to style clickable types in iOS and Safari.
        */
        button,
        html [type="button"],
        /* 1 */
        [type="reset"],
        [type="submit"] {
        -webkit-appearance: button;
        /* 2 */
        }
        /**
        * Remove the inner border and padding in Firefox.
        */
        button::-moz-focus-inner,
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
        }
        /**
        * Restore the focus styles unset by the previous rule.
        */
        button:-moz-focusring,
        [type="button"]:-moz-focusring,
        [type="reset"]:-moz-focusring,
        [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
        }
        /**
        * Change the border, margin, and padding in all browsers (opinionated).
        */
        fieldset {
        border: 1px solid #c0c0c0;
        margin: 0 2px;
        padding: 0.35em 0.625em 0.75em;
        }
        /**
        * 1. Correct the text wrapping in Edge and IE.
        * 2. Correct the color inheritance from `fieldset` elements in IE.
        * 3. Remove the padding so developers are not caught out when they zero out
        *    `fieldset` elements in all browsers.
        */
        legend {
        box-sizing: border-box;
        /* 1 */
        color: inherit;
        /* 2 */
        display: table;
        /* 1 */
        max-width: 100%;
        /* 1 */
        padding: 0;
        /* 3 */
        white-space: normal;
        /* 1 */
        }
        /**
        * 1. Add the correct display in IE 9-.
        * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
        */
        progress {
        display: inline-block;
        /* 1 */
        vertical-align: baseline;
        /* 2 */
        }
        /**
        * Remove the default vertical scrollbar in IE.
        */
        textarea {
        overflow: auto;
        }
        /**
        * 1. Add the correct box sizing in IE 10-.
        * 2. Remove the padding in IE 10-.
        */
        [type="checkbox"],
        [type="radio"] {
        box-sizing: border-box;
        /* 1 */
        padding: 0;
        /* 2 */
        }
        /**
        * Correct the cursor style of increment and decrement buttons in Chrome.
        */
        [type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button {
        height: auto;
        }
        /**
        * 1. Correct the odd appearance in Chrome and Safari.
        * 2. Correct the outline style in Safari.
        */
        [type="search"] {
        -webkit-appearance: textfield;
        /* 1 */
        outline-offset: -2px;
        /* 2 */
        }
        /**
        * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
        */
        [type="search"]::-webkit-search-cancel-button,
        [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        }
        /**
        * 1. Correct the inability to style clickable types in iOS and Safari.
        * 2. Change font properties to `inherit` in Safari.
        */
        ::-webkit-file-upload-button {
        -webkit-appearance: button;
        /* 1 */
        font: inherit;
        /* 2 */
        }
        /* Interactive
        ========================================================================== */
        /*
        * Add the correct display in IE 9-.
        * 1. Add the correct display in Edge, IE, and Firefox.
        */
        details,
        /* 1 */
        menu {
        display: block;
        }
        /*
        * Add the correct display in all browsers.
        */
        summary {
        display: list-item;
        }
        /* Scripting
        ========================================================================== */
        /**
        * Add the correct display in IE 9-.
        */
        canvas {
        display: inline-block;
        }
        /**
        * Add the correct display in IE.
        */
        template {
        display: none;
        }
        /* Hidden
        ========================================================================== */
        /**
        * Add the correct display in IE 10-.
        */
        [hidden] {
        display: none;
        }
	</code></pre> 
</details>


8. 效果图
![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220307150508.png)

### 4.2.rem适配方案2_flexble.js

（1）手机淘宝团队出的简洁高效 移动端适配库

再也不需要在写不同屏幕的媒体查询，因为里面js做了处理

它的原理是把当前设备划分为10等份，但是不同设备下，比例还是一致的。

要做的就是确定好当前设备的html文字大小就可以了

比如当前设计稿是 750px， 那么只需要把 html 文字大小设置为 75px(750px / 10) 就可以

里面页面元素rem值： 页面元素的px 值 /  75  

剩余的，让flexible.js来去算

[flexible的github地址](https://link.jianshu.com/?t=https://github.com/amfe/lib-flexible)

（2）总结：

因为flexible是默认将屏幕分为10等分

但是当屏幕大于750的时候希望不要再去重置html字体了

所以要通过媒体查询设置一下，并且要把权重提到最高


（3）VSCode_px转换rem插件_cssrem 

因为cssrem中css自动转化为rem是参照默认插件的16转换的所以需要自己配置

cssrem 插件默认的 html 文字大小（cssroot）为 16px，即：16px = 1rem。

所以，我们需要根据具体情况修改 html 字体大小基准值。

比如：750px 分 10 等份时 750px / 10 = 75px，我们就需要将其基准值设置为 75px。

1. 打开插件的设置按钮
2. 找到基准
3. 修改值
4. 重启 VSCode

![](https://gitee.com/leelillian/picgorepo/raw/master/images/18-6.jpg)

![](https://gitee.com/leelillian/picgorepo/raw/master/images/18-7.jpg)

#### eg.苏宁移动端首页
1. 技术选型
- 方案：单独制作移动端页面
- 技术：flexible.js + rem
- 设计图：750px设计尺寸

2. 搭建相关文件夹结构
- css
    - index.css
    - normalize.css
- images
- js
    - flexible.js
- upload 
- index.html

3. 页面实现

(1)设置视口标签以及引入初始化样式还有 js 文件
```html
<meta name="viewport" content="width=device-width, user-scalable=no,
initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/index.css">
```

(2)页面需要引入这个 js 文件

```html
<!-- 在 index.html 中 引入 flexible.js 这个文件 -->
<script src=“js/flexible.js”> </script>
```

(3)body样式

```css
body {
	min-width: 320px;
    max-width: 750px;
    /* flexible 给我们划分了 10 等份 */
	width: 10rem;
	margin: 0 auto;
	line-height: 1.5;
	font-family: Arial,Helvetica;
	background: #F2F2F2;
}
```

(4)VSCode px 转 rem 插件 cssrem

按上述操作安装插件并设置

比如：750px 分 10 等份时 750px / 10 = 75px，就需要将其基准值设置为 75px。


(5)index.css代码
```css
body {
  min-width: 320px;
  /* flexible 默认以浏览器窗口为 10 等份的划分区域，所以我们要先设置一个最大宽度 */
  max-width: 750px;
  /* flexible 给我们划分了 10 等份 */
  width: 10rem;
  margin: 0 auto;
  line-height: 1.5;
  font-family: Arial, Helvetica;
  background: #f2f2f2;
}

a {
  text-decoration: none;
  font-size: 0.333333rem;
}

/* cssrem 插件默认的 html 文字大小 cssroot 16px */

/* 
img {
    width: 5.125rem;
    height: 4rem;
    width: 1rem;
    width: 1.093333rem;
    height: 1rem;
} */

/* 如果我们的屏幕超过了 750px 那么我们就按照 750 设计稿来走 不会让我们页面超过 750px */

@media screen and (min-width: 750px) {
  html {
    font-size: 75px !important;
  }
}

/* search-content */

.search-content {
  display: flex;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10rem;
  height: 1.173333rem;
  background-color: #ffc001;
}

.classify {
  width: 0.586667rem;
  height: 0.933333rem;
  margin: 0.146667rem 0.333333rem 0.133333rem;
  background: url(../images/classify.png) no-repeat;
  background-size: 0.586667rem 0.933333rem;
}

.search {
  flex: 1;
}

.search input {
  outline: none;
  border: 0;
  width: 100%;
  height: 0.88rem;
  font-size: 0.333333rem;
  background-color: #fff2cc;
  margin-top: 0.133333rem;
  border-radius: 0.44rem;
  color: #757575;
  padding-left: 0.733333rem;
}

.login {
  width: 1rem;
  height: 0.933333rem;
  margin: 0.133333rem;
  color: #fff;
  text-align: center;
  line-height: 0.933333rem;
  font-size: 0.333333rem;
}
```


(6)flexible.js（注意：分为几等份是可以在 js 中修改的）
```js
(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    var rem = docEl.clientWidth / 10;
    docEl.style.fontSize = rem + "px";
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);
```

(7)index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/index.css">
    <!-- 引入我们的 flexible.js 文件 -->
    <script src="js/flexible.js"></script>
    <title>Document</title>
</head>

<body>
    <div class="search-content">
        <a href="#" class="classify"></a>
        <div class="search">
            <form action="">
                <input type="search" value="rem适配方案2很开心哦">
            </form>
        </div>
        <a href="#" class="login">登录</a>
    </div>
</body>

</html>
```

(8)效果图
![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220307160742.png)

<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-03-06 18:26:33
 * @LastEditTime: 2022-03-06 18:39:05
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->
