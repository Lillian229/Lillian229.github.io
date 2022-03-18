# HTML&CSS

## [HTML&CSS基础](../frontEnd/00-HTML&CSS/README.md)

## H5C3的新特性
### H5 新特性
1. 拖拽释放(Drap and drop) API ondrop
拖放是一种常见的特性，即抓取对象以后拖到另一个位置
在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放
2. 自定义属性 data-id
3. 语义化更好的内容标签(header,nav,footer ,aside, article, section)
4. 音频 ,视频(audio, video) 如果浏览器不支持自动播放怎么办? 在属性中添加
autoplay(谷歌浏览器不支持音频自动播放，但是视频支持静音自动播放)
5. 画布 Canvas
- getContext() 方法返回一个用于在画布上绘图的环境 Canvas.getContext(contextID) 参
数 contextID 指定了您想要在画布上绘制的类型。当前唯一的合法值是 “2d”，它指定了二
维绘图，并且导致这个方法返回一个环境对象，该对象导出一个二维绘图 API
- cxt.stroke() 绘制线条
- canvas 和 image 在处理图片的时候有什么区别?
image 是通过对象的形式描述图片的,canvas 通过专门的 API 将图片绘制在画布上.
6.  地理(Geolocation) API 其实 Geolocation 就是用来获取到当前设备的经纬度（位置）
7.  本地离线存储 localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，
直到手动去删除
8.  sessionStorage 该数据对象临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页
之后将会删除这些数据。
9.  [input表单type属性](../frontEnd/00-HTML&CSS/12-html5&SEO.md#五、新增表单属性) calendar , date , time , email , url , search , tel , file , number
10. 新的技术 webworker, websocket , Geolocation


### CSS3 [新特性](../frontEnd/00-HTML&CSS/13-css3.md)
1. 颜色: 新增 RGBA , HSLA 模式
2. 文字阴影([text-shadow](../frontEnd/00-HTML&CSS/07-boxmodel&border&shadow&PS.md#_3、文字阴影))
3. 边框: 圆角([border-radius](../frontEnd/00-HTML&CSS/07-boxmodel&border&shadow&PS.md#_1、圆角边框)) 边框阴影 : [box-shadow](../frontEnd/00-HTML&CSS/07-boxmodel&border&shadow&PS.md#_2、盒子阴影)
4. 盒子模型: [box-sizing](../frontEnd/00-HTML&CSS/13-css3.md#三、盒子模型box-sizing-content-border-box)
5. 背景:[background-size](../frontEnd/00-HTML&CSS/17-webmobile.md#_3-3背景缩放background-size) background-origin background-clip
6. 渐变: [linear-gradient](../frontEnd/00-HTML&CSS/19-layout_flex.md#_4-4-背景线性渐变色-实质上是一张图片-不能用background-color) , radial-gradient
7. 过渡 : [transition](../frontEnd/00-HTML&CSS/13-css3.md#五、css3-过渡) 可实现属性的渐变
8. 自定义[动画](../frontEnd/00-HTML&CSS/16-animation.md#一、-动画-animation) animation @keyframes
9. [媒体查询](../frontEnd/00-HTML&CSS/20-layout_rem.md#21什么是媒体查询) 多栏布局 @media screen and (width:800px) {…}
10. border-image 图片边框
11. [2D转换](../frontEnd/00-HTML&CSS/14-2D.md)、[3D转换](../frontEnd/00-HTML&CSS/15-3D.md);transform: translate(x,y) rotate(x,y) skew(x,y) scale(x,y)
12. [字体图标](../frontEnd/00-HTML&CSS/13-css3.md#应用场景一-字体图标) iconfont/icomoon
13. 弹性布局 [flex](../frontEnd/00-HTML&CSS/19-layout_flex.md)

## 使一个盒子水平垂直居中
### 方法一：利用定位（常用方法,推荐）
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .parent {
            width: 500px;
            height: 500px;
            border: 1px solid #000;
            position: relative;
        }

        .child {
            width: 100px;
            height: 100px;
            border: 1px solid #999;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -50px;
            margin-left: -50px;
        }
    </style>
</head>

<body>
    <div class="parent">
        <div class="child">我是子元素</div>
    </div>
</body>

</html>
```


方法二：利用 margin:auto; 
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .parent {
            width: 500px;
            height: 500px;
            border: 1px solid #000;
            position: relative;
        }

        .child {
            width: 100px;
            height: 100px;
            border: 1px solid #999;
            position: absolute;
            margin: auto;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    </style>
</head>

<body>
    <div class="parent">
        <div class="child">我是子元素</div>
    </div>
</body>

</html>
```

### 方法三：利用 display:table-cell 
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .parent {
            width: 500px;
            height: 500px;
            border: 1px solid #000;
            display: table-cell;
            vertical-align: middle;
            text-align: center;
        }

        .child {
            width: 100px;
            height: 100px;
            border: 1px solid #999;
            display: inline-block;
        }
    </style>
</head>

<body>
    <div class="parent">
        <div class="child">我是子元素</div>
    </div>
</body>

</html>
```

### 方法四：利用 display：flex;设置垂直水平都居中
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .parent {
            width: 500px;
            height: 500px;
            border: 1px solid #000;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .child {
            width: 100px;
            height: 100px;
            border: 1px solid #999;
        }
    </style>
</head>

<body>
    <div class="parent">
        <div class="child">我是子元素</div>
    </div>
</body>

</html>
```

### 方法五：计算父盒子与子盒子的空间距离(这跟方法一是一个道理) 
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .parent {
            width: 500px;
            height: 500px;
            border: 1px solid #000;
        }

        .child {
            width: 100px;
            height: 100px;
            border: 1px solid #999;
            margin-top: 200px;
            margin-left: 200px;
        }
    </style>
</head>

<body>

    <div class="parent">
        <div class="child">我是子元素</div>
    </div>
</body>

</html>
```

### 方法六：利用 transform
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .parent {
            width: 500px;
            height: 500px;
            border: 1px solid #000;
            position: relative;
        }

        .child {
            width: 100px;
            height: 100px;
            border: 1px solid #999;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    </style>
</head>

<body>
    <div class="parent">
        <div class="child">我是子元素</div>
    </div>
</body>

</html>
```

## 双飞翼（圣杯）布局
### 1.利用定位实现两侧固定中间自适应
1.1）父盒子设置左右 padding 值
1.2）给左右盒子的 width 设置父盒子的 padding 值,然后分别定位到 padding 处. 1.3）中间盒子自适应
```html
<style>
    .father {
        height: 400px;
        background-color: pink;
        position: relative;
        padding: 0 200px;
    }

    .left,
    .right {
        width: 200px;
        height: 300px;
        background-color: yellow;
        position: absolute;
        top: 0;
    }

    .left {
        left: 0;
    }

    .right {
        right: 0;
    }

    .center {
        background-color: blue;
        height: 350px;
    }
</style>
<!-- html 结构 -->
<div class="father">
    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
</div>
```

### 2.利用 flex 布局实现两侧固定中间自适应
2.1）父盒子设置 display:flex; 2.2）左右盒子设置固定宽高
2.3）中间盒子设置 flex:1 ; 
```html
<style>
    .father {
        height: 400px;
        background-color: pink;
        display: flex;
    }

    .left {
        width: 200px;
        height: 300px;
        background-color: yellow;
    }

    .right {
        width: 200px;
        height: 300px;
        background-color: yellow;
    }

    .center {
        flex: 1;
        background-color: blue;
    }
</style>

<div class="father">

    <div class="left"></div>
    <div class="center"></div>
    <div class="right"></div>
</div>
```

### 3.利用 bfc 块级格式化上下文, 实现两侧固定中间自适应
3.1）左右固定宽高，进行浮动
3.2）中间 overflow: hidden; 
```html
<style>
    .father {
        height: 500px;
        background-color: pink;
    }

    .left {
        float: left;
        width: 200px;
        height: 400px;
        background-color: blue;
    }

    .right {
        float: right;
        width: 200px;
        height: 400px;
        background-color: blue;
    }

    .center {
        height: 450px;
        background-color: green;
        overflow: hidden;
    }
</style>
<!-- 注意:left 和 right 必须放在 center 前面 -->
<div class="father">
    <div class="left"></div>
    <div class="right"></div>
    <div class="center"></div>
</div>
```



## CSS的盒模型
盒子模型（Box Modle）可以用来对元素进行布局，包括内边距，边框，外边距，和实际
内容这几个部分

盒子模型分为两种: 
- W3C 标准的盒子模型（标准盒模型）
- IE 标准的盒子模型（怪异盒模型）

标准盒模型与怪异盒模型的表现效果的区别之处：
1. 标准盒模型中 width和height都是指内容的高度

标准盒模型下盒子的大小 = content + border + padding + margin
![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220309213839.png)


2. 怪异盒模型中的 width和height指的是内容、边框、内边距总的宽度（content + border + padding）

怪异盒模型下盒子的大小=width（content + border + padding） + margin

![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220309213910.png)

除此之外，还可以通过属性 box-sizing 来设置盒子模型的解析模式可以为 box-sizing 赋两个值：

content-box：默认值，border 和 padding 不算到 width 范围内，可以理解为是 W3c 的标准模型(default)。总宽=width+padding+border+margin

border-box：border 和 padding 划归到 width 范围内，可以理解为是 IE 的怪异盒 模型，总宽=width+margin


## CSS选择器优先级和权重
！Important>行内样式>ID 选择器>类选择器>标签>通配符>继承>浏览器默认属性
![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220309214950.png)
优先级注意点: 
1. 权重是有 4 组数字组成,但是不会有进位。
2. 可以理解为类选择器永远大于元素选择器, id 选择器永远大于类选择器,以此类推.. 
3. 等级判断从左向右，如果某一位数值相同，则判断下一位数值。
4. 可以简单记忆法: 通配符和继承权重为 0, 标签选择器为 1,类(伪类)选择器为 10, id 选择器 100, 行内样式表为 1000, !important 无穷大. 
5. 继承的权重是 0， 如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重
都是 0。


权重叠加：如果是复合选择器，则会有权重叠加，需要计算权重。
- div ul li ------> 0,0,0,3 
- .nav ul li ------> 0,0,1,2 
- a:hover ------> 0,0,1,1 
- .nav a ------> 0,0,1,1

## CSS的可继承&不可继承属性
### 能继承的属性
1. 字体系列属性:font、font-family、font-weight、font-size、font-style;
2. 文本系列属性: 
    - 内联元素：color、line-height、word-spacing、letter-spacing、
text-transform; 
    - 块级元素：text-indent、text-align; 
3. 元素可见性：visibility
4. 表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、
table-layout; 
5. 列表布局属性：list-style

### 不能继承的属性
1. display：规定元素应该生成的框的类型；
2. 文本属性：vertical-align、text-decoration; 
3. 盒子模型的属性：width、height、margin 、border、padding; 
4. 背景属性：background、background-color、background-image; 
5. 定位属性：float、clear、position、top、right、bottom、left、min-width、
min-height、max-width、max-height、overflow、clip;

## CSS 单位中px、em和rem 的区别
1. px 像素（Pixel）—— 绝对单位——相对于显示器屏幕分辨率而言的，是一
个虚拟长度单位，是计算机系统的数字化图像长度单位
2. em —— 相对长度单位，相对于当前对象内文本的字体尺寸。如当前对行内文本的字 体尺
寸未被人为设置，则相对于浏览器的默认字体尺寸。它会继承父级元素的字体大小因此并不是一
个固定的值
3. rem 是 CSS3 新增的一个相对单位（root em，根 em），使用 rem 为元素设定字体大小
时，仍然是相对大小，但相对的只是 HTML 根元素
4. 区别：
IE 无法调整那些使用 px 作为单位的字体大小，而 em 和 rem 可以缩放，rem 相对的只
是 HTML 根元素。这个单位可谓集相对大小和绝对大小的优点于一身，通 过它 既可 以做到
只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐 层复合的连锁反应。目
前，除了 IE8 及更早版本外，所有浏览器均已支持 rem

## rem适配方法&如何计算HTML根字号及适配方案
通用方案
1. 设置根 font-size：625%（或其它自定的值，但换算规则 1rem 不能小于 12px）
2. 通过媒体查询分别设置每个屏幕的根 font-size
3. CSS 直接除以 2 再除以 100 即可换算为 rem

    优：有一定适用性，换算也较为简单

    缺：有兼容性的坑，对不同手机适配不是非常精准；需要设置多个媒体查询来适应不同
    手机，单某款手机尺寸不在设置范围之内，会导致无法适配

eg.网易方案

1. 拿到设计稿除以 100，得到宽度 rem 值
2. 通过给 html 的 style 设置 font-size，把 1 里面得到的宽度 rem 值代入 x
document.documentElement.style.fontSize = document.documentElement.clientWidth / x + ‘px‘; 
3. 设计稿 px/100 即可换算为 rem

    优：通过动态根 font-size 来做适配，基本无兼容性问题，适配较为精准，换算简
    便

    缺：无 viewport 缩放，且针对 iPhone 的 Retina 屏没有做适配，导致对一些手机的适配不是很到位


eg.手淘方案
1. 拿到设计稿除以 10，得到 font-size 基准值
2. 引入 flexible
3. 不要设置 meta 的 viewport 缩放值
4. 设计稿 px/ font-size 基准值，即可换算为 rem

    优：通过动态根 font-size、viewpor、dpr 来做适配，无兼容性问题，适配精准。

    缺：需要根据设计稿进行基准值换算，在不使用 sublime text 编辑器插件开发时，
    单 位计算复杂


## display：none与visibility：hidden的区别
元素隐藏和显示最常用的为 display:none 和 visibility:hidden

dispaly:none 设置该属性后，该元素下的元素都会隐藏，占据的空间消失

visibility:hidden 设置该元素后，元素虽然不可见了，但是依然占据空间的位置

区别：
1. visibility 具有继承性，其子元素也会继承此属性，若设置 visibility:visible，则子元素会显示
2. visibility 不会影响计数器的计算，虽然隐藏掉了，但是计数器依然继续运行着。
3. 在 CSS3 的 transition 中支持 visibility 属性，但是不支持 display，因为 transition 可以延迟执行，因此配合 visibility 使用纯 CSS 实现 hover 延时显示效果可以提高用户体验
4. display:none 会引起回流(重排)和重绘 visibility:hidden 会引起重绘

## (未)回流和重绘


## position的值有哪些&作用
- 静态定位：static 默认值不脱离文档流，top，right，bottom，left等属性不生效
- 绝对定位：absolute

绝对定位的关键是找对参照物：找到最近的一级带有带定位的父级元素进行位置移动
如果找不到，那么相对于浏览器窗口进行定位

注：设置了 position:absolute;属性后，元素会脱离正常文档流，不在占据空间；左右 margin为 auto 将会失效；我们通过 left、top、bottom、right 来决定元素位置

- 相对定位：relative

参照物：元素偏移前位置
注：设置了相对定位，左右 margin 为 auto 仍然有效、并且不会脱离文档流。
固定定位：fixed
参照物：浏览器窗口；
注：固定定位会脱离文档流；
当绝对定位和固定定位参照物都是浏览器窗口时的区别： 当出现滚动条时，固定定位
的元素不会跟随滚动条滚动，绝对定位会跟随滚动条滚动