# CSS

## [HTML&CSS基础](../frontEnd/00-HTML&CSS/README.md)

## H5C3的新特性

### CSS3[新特性](../frontEnd/00-HTML&CSS/13-css3.md)
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

## css 的基本语句构成
选择器、属性和属性值


## CSS选择符
1. id选择器（ # myid）
2. 类选择器（.myclassname）
3. 标签选择器（div, h1, p）
4. 相邻选择器（h1 + p）
5. 子选择器（ul > li）
6. 后代选择器（li a）
7. 通配符选择器（ * ）
8. 属性选择器（a[rel = "external"]）
9. 伪类选择器（a: hover, li: nth - child）


## CSS新增伪类
- :root 选择文档的根元素，等同于 html 元素
- :empty 选择没有子元素的元素
- :target 选取当前活动的目标元素
- :not(selector) 选择除 selector 元素以外的元素
- :enabled 选择可用的表单元素
- :disabled 选择禁用的表单元素
- :checked 选择被选中的表单元素
- :after 选择器在被选元素的内容后面插入内容
- :before 选择器在被选元素的内容前面插入内容
- :nth-child(n) 匹配父元素下指定子元素，在所有子元素中排序第 n
- :nth-last-child(n) 匹配父元素下指定子元素，在所有子元素中排序第 n，从后向前数
- :nth-child(odd) 奇数
- :nth-child(even) 偶数
- :nth-child(3n+1)
- :first-child
- :last-child
- :only-child
- :nth-of-type(n) 匹配父元素下指定子元素，在同类子元素中排序第 n
- :nth-last-of-type(n) 匹配父元素下指定子元素，在同类子元素中排序第 n，从后向前数
- :nth-of-type(odd)
- :nth-of-type(even)
- :nth-of-type(3n+1)
- :first-of-type
- :last-of-type
- :only-of-type
- ::selection 选择被用户选取的元素部分
- :first-line 选择元素中的第一行
- :first-letter 选择元素中的第一个字符

## ::before 和 :after 中双冒号和单冒号有什么区别 ？解释一下这 2 个伪元素的作用**

- 单冒号 (:) 用于 CSS3 伪类，双冒号 (::) 用于 CSS3 伪元素。
- ::before 就是以一个子元素的存在，定义在元素主体内容之前的一个伪元素。并不存在于 dom 之中，只存在在页面之中。

:before 和 :after 这两个伪元素，是在 CSS2.1 里新出现的。
起初，伪元素的前缀使用的是单冒号语法，但随着 Web 的进化，在 CSS3 的规范里，伪元素的语法被修改成使用双冒号，成为 ::before、 ::after 。
## CSS的盒模型
盒子模型（Box Modle）可以用来对元素进行布局，包括内边距，边框，外边距，和实际
内容这几个部分

盒子模型分为两种: 
- W3C 标准的盒子模型（标准盒模型）
- IE 标准的盒子模型（怪异盒模型）

标准盒模型与怪异盒模型的表现效果的区别之处：
1. 标准盒模型中 width和height都是指内容的高度

标准盒模型下盒子的大小 = content + border + padding + margin
![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220309213839.png)


2. 怪异盒模型中的 width和height指的是内容、边框、内边距总的宽度（content + border + padding）

怪异盒模型下盒子的大小=width（content + border + padding） + margin

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220309213910.png)

除此之外，还可以通过属性 box-sizing 来设置盒子模型的解析模式可以为 box-sizing 赋两个值：

content-box：默认值，border 和 padding 不算到 width 范围内，可以理解为是 W3c 的标准模型(default)。总宽=width+padding+border+margin

border-box：border 和 padding 划归到 width 范围内，可以理解为是 IE 的怪异盒 模型，总宽=width+margin


## 何时应当时用padding和margin

### 何时应当使用 margin

- 需要在 border 外侧添加空白时。
- 空白处不需要背景（色）时。
- 上下相连的两个盒子之间的空白，需要相互抵消时。
如 15px + 20px 的 margin，将得到 20px 的空白。

### 何时应当使用 padding

- 需要在 border 内测添加空白时。
- 空白处需要背景（色）时。
- 上下相连的两个盒子之间的空白，希望等于两者之和时。
如 15px + 20px 的 padding，将得到 35px 的空白。

个人认为：`margin 是用来隔开元素与元素的间距；padding 是用来隔开元素与内容的间隔，让内容（文字）与（包裹）元素之间有一段 呼吸距离`。

## width 和 height 的百分比是相对谁讲的?margin 和 padding 呢?

- width 是相对于直接父元素的 width
- height 是相对于直接父元素的 height
- padding 是相对于直接父元素的 width
- margin 是相对于直接父元素的 margin

```css
<style>
    #wrapper {
        width: 500px;
        height: 800px;
        background-color: #ccc;
    }
    .parent {
        width: 300px;
        height: 400px;
        background-color: yellow;
    }
    .son {
        /* 90*40 */
        width: 30%;
        height: 10%;
        /* 30 30 */
        padding-left: 10%;
        margin-left: 10%;
        background-color: green;
    }
</style>
<div id="wrapper">
    <div class="parent">
        <div class="son">
        </div>
    </div>
</div>
```

相关文章：

- [transform，transition，animation，keyframes区别](https://segmentfault.com/a/1190000012698032)
- [width 和 height 的百分比是相对谁讲的 ？margin 和 padding 呢？](https://www.jianshu.com/p/075839c8e2f2)
- [彻底搞懂 CSS 层叠上下文、层叠等级、层叠顺序、z-index](https://juejin.im/post/5b876f86518825431079ddd6)


## CSS选择器优先级和权重
！Important>行内样式>ID 选择器>类选择器>标签>通配符>继承>浏览器默认属性
|  选择器 |  选择器权重 |
|---|---|
|  继承或者* |  0,0,0,0 |
|  元素选择器 |  0,0,0,1 |
|  类选择器，伪类选择器 |  0,0,1,0 |
|  ID选择器 | 0,1,0,0  |
|  行内样式style="" | 1,0,0,0  |
| limportant重要的 |  ∞无穷大  |

- 优先级就近原则，样式定义最近者为准
- 载入样式以最后载入的定位为准
- 优先级为 !important > [ id > class > tag ]
- !mportant 比内联优先级高

优先级注意点: 
1. 权重是有 4 组数字组成,但是不会有进位。
2. 可以理解为类选择器永远大于元素选择器, id 选择器永远大于类选择器,以此类推.. 
3. 等级判断从左向右，如果某一位数值相同，则判断下一位数值。
4. 可以简单记忆法: 通配符和继承权重为 0, 标签选择器为 1,类(伪类)选择器为 10, id 选择器 100, 行内样式表为 1000, !important 无穷大. 
5. 继承的权重是 0， 如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重都是 0。


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

## rem、em、px、vh与vw的区别

### 一、rem的特点

1. rem 的大小是根据 `html` 根目录下的字体大小进行计算的。
2. 当我们改变根目录下的字体大小的时候，下面字体都改变。
3. rem 不仅可以设置字体的大小，也可以设置元素宽、高等属性。
4. rem 是 CSS3 新增的一个相对单位（root em，根em），这个单位与 em 区别在于使用 rem 为元素设定字体大小时，仍然是相对大小，但相对的只是 HTML 根元素。
   
这个单位可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。

目前，除了 IE8 及更早版本外，所有浏览器均已支持 rem。
对于不支持它的浏览器，应对方法也很简单，就是多写一个绝对单位的声明。这些浏览器会忽略用 rem 设定的字体大小。



### 二、px特点

px 像素（Pixel）。相对长度单位。像素 px 是相对于显示器屏幕分辨率而言的。

px 像素（Pixel）—— 绝对单位——相对于显示器屏幕分辨率而言的，是一个虚拟长度单位，是计算机系统的数字化图像长度单位

### 三、em特点 
em —— 相对长度单位，相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸。它会继承父级元素的字体大小因此并不是一个固定的值

1. em 的值并不是固定的；
2. em 会继承父级元素的字体大小。
3. em 是相对长度单位。当前对行内文本的字体尺寸未被人为设置，相对于当前对象内文本的字体尺寸。如则相对于浏览器的默认字体尺寸。
4. 任意浏览器的默认字体高都是 16px。
   
所有未经调整的浏览器一般都符合: 1em = 16px。那么 12px = 0.75em，10px = 0.625em。
为了简化 font-size 的换算，需要在 css 中的 body 选择器中声明 Fontsize = 62.5%，这就使 em 值变为 16px*62.5%=10px, 这样 12px = 1.2em, 10px = 1em, 也就是说只需要将你的原来的 px 数值除以 10，然后换上 em 作为单位就行了。


### 四、vh与vw 

视口 

- 在桌面端，指的是浏览器的可视区域；
- 在移动端，它涉及 3个 视口：Layout Viewport（布局视口），Visual Viewport（视觉视口），Ideal Viewport（理想视口）。
- 视口单位中的 “视口”，桌面端指的是浏览器的可视区域；移动端指的就是 Viewport 中的 Layout Viewport。

vh / vw 与 % 

| 单位 | 解释                       |
| :--- | :------------------------- |
| vw   | 1vw = 视口宽度的 1%        |
| vh   | 1vh = 视口高度的 1%        |
| vmin | 选取 vw 和 vh 中最小的那个 |
| vmax | 选取 vw 和 vh 中最大的那个 |

比如：浏览器视口尺寸为 370px，那么 1vw = 370px * 1% = 6.5px (浏览器会四舍五入向下取 7)

vh / vw 与 % 区别

| 单位    | 解释           |
| :------ | :------------- |
| %       | 元素的祖先元素 |
| vh / vw | 视口的尺寸     |

不过由于 vw 和 vh 是 css3 才支持的长度单位，所以在不支持 css3 的浏览器中是无效的。



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


## 隐藏元素的几种方法
1. display: none
2. visibility: hidden
3. opcity: 0
设置元素透明度opacity属性为0，也可以隐藏页面元素,会占据页面空间。


## display：none与visibility：hidden的区别
元素隐藏和显示最常用的为 display:none 和 visibility:hidden

dispaly:none 设置该属性后，该元素下的元素都会隐藏，占据的空间消失

visibility:hidden 设置该元素后，元素虽然不可见了，但是依然占据空间的位置

区别：
1. visibility 具有继承性，其子元素也会继承此属性，若设置 visibility:visible，则子元素会显示
2. visibility 不会影响计数器的计算，虽然隐藏掉了，但是计数器依然继续运行着。
3. 在 CSS3 的 transition 中支持 visibility 属性，但是不支持 display，因为 transition 可以延迟执行，因此配合 visibility 使用纯 CSS 实现 hover 延时显示效果可以提高用户体验
4. display:none 会引起回流(重排)和重绘 visibility:hidden 会引起重绘


## visibility属性有个collapse属性值，在不同浏览器下有什么区别

collapse

- 当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局，被行或列占据的空间会留给其他内容使用。
- 如果此值被用在其他的元素上，会呈现为 hidden。
- 当一个元素的 visibility 属性被设置成 collapse 值后，对于一般的元素，它的表现跟 hidden 是一样的。

- chrome中，使用 collapse 值和使用 hidden 没有区别。
- firefox，opera 和 IE，使用 collapse 值和使用 display：none 没有什么区别。


## 回流和重绘
repaint 就是重绘，reflow 就是回流。

严重性： 在性能优先的前提下，性能消耗 reflow 大于 repaint。

体现：repaint 是某个 DOM 元素进行重绘；reflow 是整个页面进行重排，也就是页面所有 DOM 元素渲染。

如何触发： style 变动造成 repaint 和 reflow。

1. 不涉及任何 DOM 元素的排版问题的变动为 repaint，例如元素的 color/text-align/text-decoration 等等属性的变动。
2. 除上面所提到的 DOM 元素 style 的修改基本为 reflow。例如元素的任何涉及 长、宽、行高、边框、display 等 style 的修改。

### 常见触发场景

触发 repaint：

- color 的修改，如 color=#ddd；
- text-align 的修改，如 text-align=center；
- a:hover 也会造成重绘。
- :hover 引起的颜色等不导致页面回流的 style 变动。

触发 reflow：

- width/height/border/margin/padding 的修改，如 width=778px；
- 动画，:hover 等伪类引起的元素表现改动，display=none 等造成页面回流；
- appendChild 等 DOM 元素操作；
- font 类 style 的修改；
- background 的修改，注意着字面上可能以为是重绘，但是浏览器确实回流了，经过浏览器厂家的优化，部分 background 的修改只触发 repaint，当然 IE 不用考虑；
- scroll 页面，这个不可避免；
- resize 页面，桌面版本的进行浏览器大小的缩放，移动端的话，还没玩过能拖动程序，resize 程序窗口大小的多窗口操作系统。
- 读取元素的属性（这个无法理解，但是技术达人是这么说的，那就把它当做定理吧）：读取元素的某些属性（offsetLeft、offsetTop、offsetHeight、offsetWidth、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、getComputedStyle()、currentStyle(in IE))；

### 如何避免 

- 尽可能在 DOM 末梢通过改变 class 来修改元素的 style 属性：尽可能的减少受影响的 DOM 元素。
- 避免设置多项内联样式：使用常用的 class 的方式进行设置样式，以避免设置样式时访问 DOM 的低效率。
- 设置动画元素 position 属性为 fixed 或者 absolute：由于当前元素从 DOM 流中独立出来，因此受影响的只有当前元素，元素 repaint。
- 牺牲平滑度满足性能：动画精度太强，会造成更多次的 repaint/reflow，牺牲精度，能满足性能的损耗，获取性能和平滑度的平衡。
- 避免使用 table 进行布局：table 的每个元素的大小以及内容的改动，都会导致整个 table 进行重新计算，造成大幅度的 repaint 或者 reflow。改用 div 则可以进行针对性的 repaint 和避免不必要的 reflow。
- 避免在 CSS 中使用运算式：学习 CSS 的时候就知道，这个应该避免，不应该加深到这一层再去了解，因为这个的后果确实非常严重，一旦存在动画性的 repaint/reflow，那么每一帧动画都会进行计算，性能消耗不容小觑。



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

## position跟display、overflow、float这些特性相互叠加后会怎么样 

- display 属性规定元素应该生成的框的类型；
- position 属性规定元素的定位类型；
- float 属性是一种布局方式，定义元素在哪个方向浮动。
- 类似于优先级机制：position：absolute / fixed 优先级最高，有他们在时，float 不起作用，display 值需要调整。float 或者 absolute 定位的元素，只能是块元素或表格。



## position、float和display的取值和各自的意思和用法

### position

- position 属性取值：static(默认)、relative、absolute、fixed、inherit、sticky。
- postision：static；始终处于文档流给予的位置。看起来好像没有用，但它可以快速取消定位，让 top，right，bottom，left 的值失效。在切换的时候可以尝试这个方法。
- 除了 static 值，在其他三个值的设置下，z-index 才会起作用。确切地说 z-index 只在定位元素上有效。
- position：relative 和 absolute 都可以用于定位，区别在于前者的 div 还属于正常的文档流，后者已经是脱离了正常文档流，不占据空间位置，不会将父类撑开。
定位原点 relative 是相对于它在正常流中的默认位置偏移，它原本占据的空间任然保留；absolute 相对于第一个 position 属性值不为 static 的父类。所以设置了 position：absolute，其父类的该属性值要注意，而且 overflow：hidden 也不能乱设置，因为不属于正常文档流，不会占据父类的高度，也就不会有滚动条。
- fixed 旧版本 IE 不支持，却是很有用，定位原点相对于浏览器窗口，而且不能变。
常用于 header，footer 或者一些固定的悬浮 div，随滚动条滚动又稳定又流畅，比 JS 好多了。fixed 可以有很多创造性的布局和作用，兼容性是问题。
- position：inherit。
规定从父类继承 position 属性的值，所以这个属性也是有继承性的，但需要注意的是 IE8 以及往前的版本都不支持 inherit 属性。
- sticky ：设置了sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。
  
### float

- float：left (或 right)，向左（或右）浮动，直到它的边缘碰到包含框或另一个浮动框为止。
且脱离普通的文档流，会被正常文档流内的块框忽略。不占据空间，无法将父类元素撑开。
- 任何元素都可以浮动，浮动元素会生成一个块级框，不论它本身是何种元素。因此，没有必要为浮动元素设置 display：block。
- 如果浮动非替换元素，则要指定一个明确的 width，否则它们会尽可能的窄。
什么叫替换元素 ？根据元素本身的特点定义的， (X)HTML中的 img、input、textarea、select、object 都是替换元素，这些元素都没有实际的内容。 (X)HTML 的大多数元素是不可替换元素，他们将内容直接告诉浏览器，将其显示出来。

### display

- display 属性取值：none、inline、inline-block、block、table 相关属性值、inherit。
- display 属性规定元素应该生成的框的类型。文档内任何元素都是框，块框或行内框。
- display：none 和 visiability：hidden 都可以隐藏 div，区别有点像 absolute 和 relative，前者不占据文档的空间，后者还是占据文档的位置。
- display：inline 和 block，又叫行内元素和块级元素。
表现出来的区别就是 block 独占一行，在浏览器中通常垂直布局，可以用 margin 来控制块级元素之间的间距（存在 margin 合并的问题，只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。）；
而 inline 以水平方式布局，垂直方向的 margin 和 padding 都是无效的，大小跟内容一样，且无法设置宽高。
inline 就像塑料袋，内容怎么样，就长得怎么样；block 就像盒子，有固定的宽和高。
- inline-block 就介于两者之间。
- table 相关的属性值可以用来垂直居中，效果一般。
- flex

### 定位机制

上面三个属性都属于 CSS 定位属性。CSS 三种基本的定位机制：普通流、浮动、绝对定位

## 用position: absolute跟用float有什么区别

- 都是脱离标准流，只是 position: absolute 定位用的时候，位置可以给的更精确(想放哪就放哪)，而 float 用的更简洁，向右，左，两个方向浮动，用起来就一句代码。
- 还有就是 position: absolute 不管在哪个标签里，都可以定位到任意位置，毕竟 top，left，bottom，right 都可以给正值或负值；
- float 只是向左或向右浮动，不如 position: absolute 灵活，浮动后再想改变位置就要加各种 margin，padding 之类的通过间距的改变来改变位置，我自身觉得这样的话用起来不方便，也不太好。
- 但在菜单栏，或者一些图标的横向排列时，用起来特别方便，一个 float 就解决了，而且每个元素之间不会有任何间距(所以可以用 float 消除元素间的距离)；

## css3动画效果属性

- animation-name：规定需要绑定到选择器的 keyframe 名称。。
- animation-duration：规定完成动画所花费的时间，以秒或毫秒计。
- animation-timing-function：规定动画的速度曲线。
- animation-delay：规定在动画开始之前的延迟。
- animation-iteration-count：规定动画应该播放的次数。
- animation-direction：规定是否应该轮流反向播放动画。

## 如果需要手动写动画，最小时间间隔是多久，为什么

多数显示器默认频率是 60Hz，即 1 秒刷新 60 次，所以理论上最小间隔为：1/60＊1000ms ＝ 16.7ms。
## CSS可以同从父元素继承的属性

继承：(X)HTML 元素可以从其父元素那里继承部分 CSS 属性，即使当前元素并没有定义该属性，比如： color，font-size。

## box-sizing常用的属性&作用

### 常用的属性
box-sizing: content-box border-box inherit;

### 作用

content-box(默认)：宽度和高度分别应用到元素的内容框。在宽度和高度之外绘制元素的内边距和边框(元素默认效果)。
border-box：元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。


## 页面导入样式时，使用link和@import有什么区别

- link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS(是一种描述和同步网站内容的格式，是使用最广泛的 XML 应用), 定义 rel 连接属性等作用；
- 而 @import 是 CSS 提供的，只能用于加载 CSS;
- 页面被加载的时，link 会同时被加载，而 @import 引用的 CSS 会等到页面被加载完再加载;
- import 是 CSS2.1 提出的，只在 IE5 以上才能被识别，而 link 是 XHTML 标签，无兼容问题。
- 总之，link 要优于 @import。


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

1.2）给左右盒子的 width 设置父盒子的 padding 值,然后分别定位到 padding 处. 

1.3）中间盒子自适应
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





## 写一个 div + css 布局，左边图片，右边文字，文字环绕图片，外面容器固定宽度，文字不固定。
直接就一个 img，它 float：left，加文字加 p 标签就好了。



## 满屏品字布局
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>满屏品字布局</title>
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
        }
        html,body{
            height: 100%;/*此设置非常关键，因为默认的 body，HTML 高度为 0，所以后面设置的 div 的高度无法用百分比显示*/
        }       
        .header{
            height:50%; /*此步结合 html,body 高度为 100%，解决元素相对窗口的定位问题*/
            width: 50%;     
            background: #ccc;           
            margin:0 auto;
        }
        .main{
            width: 100%;
            height: 50%;
            background: #ddd;
        }
        .main .left,.main .right{
            float: left;/*采用 float 方式，对元素进行左右定位*/
            width:50%;/*此步解决元素相对窗口的定位问题*/
            height:100%;/*此步解决元素相对窗口的定位问题*/
            background: yellow;
        }
        .main .right{
            background: green;
        }
    </style>
</head>
<body>
<div class="header"></div>
<div class="main">
    <div class="left"></div>
    <div class="right"></div>
</div>
</body>
</html>
```
效果：
满屏三个盒子，上方一个居中，下方左右各一个

## flexbox（弹性盒布局模型)&以及适用场景
[Flex弹性布局](../frontEnd/00-HTML&CSS/19-layout_flex.md)

任何一个容器都可以指定为 Flex 布局，行内元素也可以使用 Flex 布局。

注意：设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。

### flex布局最常用的场景

一般实现垂直居中是一件很麻烦的事，但 flex 布局轻松解决。

```css
.demo {
  display: flex;            
  justify-content: center;                    
  align-items: center;
}
```

## 用纯CSS创建一个三角形的原理

把上、左、右三条边隐藏掉（颜色设为 transparent）

```css
#demo {
 width: 0;
 height: 0;
 border-width: 20px;
 border-style: solid;
 border-color: transparent transparent red transparent;
}
```

## 怎么让Chrome支持小于12px的文字

```css
p {
  font-size: 10px;
  -webkit-transform: scale(0.8);  // 0.8 是缩放比例
} 
```

## 让页面里的字体变清晰，变细用CSS怎么做

-webkit-font-smoothing 在 window 系统下没有起作用，但是在 IOS 设备上起作用 -webkit-font-smoothing：antialiased 是最佳的，灰度平滑。



## 如何在页面上实现一个圆形的可点击区域

1、map+area 或者 svg
2、border-radius
3、纯 js 实现，需要求一个点在不在圆上简单算法、获取鼠标坐标等等


## 实现不使用 border 画出 1px 高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。
```html
<div style="height:1px;overflow:hidden;background:red"></div>
```

---

## 元素竖向的百分比设定是相对于容器的高度吗

当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的。

## 有一个高度自适应的 div，里面有两个div，一个高度 100px，如何让另一个填满剩下的高度

- 外层 div 使用 position：relative；
- 高度要求自适应的 div 使用 position: absolute; top: 100px; bottom: 0; left: 0

## 用 css 实现左侧宽度自适应，右侧固定宽度 ？**

1. 标准浏览器的方法

当然，以不折腾人为标准的 w3c 标准早就为我们提供了制作这种自适应宽度的标准方法。

- 把 container 设为 display: table 并指定宽度 100%；
- 然后把 main + sidebar 设为 display: table-cell; 
- 然后只给 sidebar 指定一个宽度，那么 main 的宽度就变成自适应了。

代码很少，而且不会有额外标签。不过这是 IE7 及以下都无效的方法。

```css
.container {
    display: table;
    width: 100%;
}
.main {
    display: table-cell;
}
.sidebar {
    display: table-cell;
    width: 300px;
}
```

![](https://upload-images.jianshu.io/upload_images/12890819-ce4324bfc2c4f839.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



2. 固定区域浮动，自适应区域不设置宽度但设置 margin

```css
.container {
    overflow: hidden;
    *zoom: 1;
}
.sidebar {
    float: right;
    width: 300px;
    background: #333;
}
.main {
    margin-right: 320px;
    background: #666;
}
.footer {
    margin-top: 20px;
    background: #ccc;
}
```

其中，sidebar 让它浮动，并设置了一个宽度；而 main 没有设置宽度。

大家要注意 html 中必须使用 div 标签，不要妄图使用什么 p 标签来达到目的。因为 div 有个默认属性，即如果不设置宽度，那它会自动填满它的父标签的宽度。这里的 main 就是例子。

当然我们不能让它填满了，填满了它就不能和 sidebar 保持同一行了。我们给它设置一个 margin。由于 sidebar 在右边，所以我们设置 main 的 margin-right 值，值比 sidebar 的宽度大一点点——以便区分它们的范围，例子中是 320。

假设 main 的默认宽度是 100%，那么它设置了 margin 后，它的宽度就变成了 100% - 320，此时 main 发现自己的宽度可以与 sidebar 挤在同一行了，于是它就上来了。 
而宽度 100% 是相对于它的父标签来的，如果我们改变了它父标签的宽度，那 main 的宽度也就会变——比如我们把浏览器窗口缩小，那 container  的宽度就会变小，而 main 的宽度也就变小，但它的实际宽度 100% - 320 始终是不会变的。

这个方法看起来很完美，只要我们记得清除浮动(这里我用了最简单的方法)，那 footer 也不会错位。而且无论 main 和 sidebar 谁更长，都不会对布局造成影响。

但实际上这个方法有个很老火的限制——html 中 sidebar 必须在 main 之前！
但我需要 sidebar 在 main 之后！因为我的 main 里面才是网页的主要内容，我不想主要内容反而排在次要内容后面。
但如果 sidebar 在 main 之后，那上面的一切都会化为泡影。


![](https://upload-images.jianshu.io/upload_images/12890819-47c872107fcc93aa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



3. 固定区域使用定位，自适应区域不设置宽度，但设置 margin

```css
.container {
    position: relative;
}
.sidebar {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    background: #333;
}
.main {
    margin-right: 320px;
    background: #666;
}
```

![](https://upload-images.jianshu.io/upload_images/12890819-767262ae18002121.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


咦，好像不对，footer 怎么还是在那儿呢？怎么没有自动往下走呢？footer 说——我不给绝对主义者让位！

其实这与 footer 无关，而是因为 container 对 sidebar 的无视造成的——你再长，我还是没感觉。

看来这种定位方式只能满足 sidebar 自己，但对它的兄弟们却毫无益处。

4. 左边浮动，右边 overflow: hidden;

```css
*{margin:0; padding: 0;}
html,body{
   height: 100%;/*高度百分百显示*/
}
#left{
    width: 300px;
    height: 100%;
    background-color: #ccc;
    float: left;
}
#right{
    height: 100%;
    overflow: hidden;
    background-color: #eee;
}
```

这个方法，我利用的是创建一个新的 BFC（块级格式化上下文）来防止文字环绕的原理来实现的。

BFC 就是一个相对独立的布局环境，它内部元素的布局不受外面布局的影响。
它可以通过以下任何一种方式来创建： 

- float 的值不为 none 
- position 的值不为 static 或者 relative 
- display 的值为 table-cell , table-caption , inline-block , flex , 或者 inline-flex 中的其中一个 
- overflow 的值不为 visible

关于 BFC，在 w3c 里是这样描述的：在 BFC 中，每个盒子的左外边框紧挨着 包含块 的 左边框 （从右到左的格式化时，则为右边框紧挨）。
即使在浮动里也是这样的（尽管一个包含块的边框会因为浮动而萎缩），除非这个包含块的内部创建了一个新的 BFC。
这样，当我们给右侧的元素单独创建一个 BFC 时，它将不会紧贴在包含块的左边框，而是紧贴在左元素的右边框。

## 常见兼容性问题

- 浏览器默认的 margin 和 padding 不同。解决方案是加一个全局的 *{margin: 0; padding: 0;} 来统一。
- IE下 event 对象有 event.x，event.y 属性，而 Firefox 下没有。Firefox 下有 event.pageX，event.PageY 属性，而 IE 下没有。
解决办法：var mx = event.x?event.x:event.pageX;

- Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决.

- 超链接访问过后 hover 样式就不出现了，被点击访问过的超链接样式不在具有 hover 和 active 了，解决方法是改变 CSS 属性的排列顺序:
L-V-H-A : a:link {} a:visited {} a:hover {} a:active {}


## 浮动的原理和工作方式，会产生什么影响，要怎么处理

工作方式：浮动元素脱离文档流，不占据空间。浮动元素碰到包含它的边框或者浮动元素的边框停留。

### 影响

- 浮动会导致父元素无法被撑开，影响与父元素同级的元素。
- 与该浮动元素同级的非浮动元素，如果是块级元素，会移动到该元素下方，而块级元素内部的行内元素会环绕浮动元素；而如果是内联元素则会环绕该浮动元素。
- 与该元素同级的浮动元素，对于同一方向的浮动元素(同级)，两个元素将会跟在碰到的浮动元素后；而对于不同方向的浮动元素，在宽度足够时，将分别浮动向不同方向，在宽度不同是将导致一方换行(换行与 HTML 书写顺序有关，后边的将会浮动到下一行)。
- 浮动元素将被视作为块元素。
- 而浮动元素对于其父元素之外的元素，如果是非浮动元素，则相当于忽视该浮动元素，如果是浮动元素，则相当于同级的浮动元素。
- 而常用的清除浮动的方法，则如使用空标签，overflow，伪元素等。

在使用基于浮动设计的 CSS 框架时，自会提供清除的方法，个人并不习惯使用浮动进行布局。

## 清除浮动，什么时候需要清除浮动，清除浮动都有哪些方法

一个块级元素如果没有设置 height，那么其高度就是由里面的子元素撑开，如果子元素使用浮动，脱离了标准的文档流，那么父元素的高度会将其忽略，如果不清除浮动，父元素会出现高度不够，那样如果设置 border 或者 background 都得不到正确的解析。

正是因为浮动的这种特性，导致本属于普通流中的元素浮动之后，包含框内部由于不存在其他普通流元素了，也就表现出高度为 0（`高度塌陷`）。在实际布局中，往往这并不是我们所希望的，所以需要闭合浮动元素，使其包含框表现出正常的高度。

### 清除浮动的方式

- 父级 div 定义 height，原理：父级 div 手动定义 height，就解决了父级 div 无法自动获取到高度的问题。 
- 结尾处加空 div 标签 clear: both，原理：添加一个空 div，利用 css 提高的 clear: both 清除浮动，让父级 div 能自动获取到高度。
- 父级 div 定义 overflow: hidden，  原理：必须定义 width 或 zoom: 1，同时不能定义 height，使用 overflow: hidden 时，浏览器会自动检查浮动区域的高度。 
- 父级 div 也一起浮动 。
- 父级 div 定义 display: table 。
- 父级 div 定义 伪类 :after 和 zoom 。
- 结尾处加 br 标签 clear: both， 原理：父级 div 定义 zoom: 1 来解决 IE 浮动问题，结尾处加 br 标签 clear: both。

总结：比较好的是倒数第 2 种方式，简洁方便。


## 如何保持浮层水平垂直居中

### 一、水平居中 

（1）行内元素解决方案

只需要把行内元素包裹在一个属性 display 为 block 的父层元素中，并且把父层元素添加如下属性即可。

```css
.parent {
    text-align: center;
}
```

（2）块状元素解决方案
 
```css
.item {
    /* 这里可以设置顶端外边距 */
    margin: 10px auto;
}
```
（3）多个块状元素解决方案将元素的 display 属性设置为 inline-block，并且把父元素的 text-align 属性设置为 center 即可:
```css
.parent {
    text-align:center;
}
```
（4）多个块状元素解决方案

使用 flexbox 布局，只需要把待处理的块状元素的父元素添加属性 display: flex 及 justify-content: center 即可。

```css
.parent {
    display: flex;
    justify-content: center;
}
```

### 二、垂直居中

（1）单行的行内元素解决方案

```css
.parent {
    background: #222;
    height: 200px;
}

/* 以下代码中，将 a 元素的 height 和 line-height 设置的和父元素一样高度即可实现垂直居中 */
a {
    height: 200px;
    line-height:200px; 
    color: #FFF;
}
```

（2）多行的行内元素解决方案组合

使用 display: table-cell 和 vertical-align: middle 属性来定义需要居中的元素的父容器元素生成效果，如下：
```
.parent {
    background: #222;
    width: 300px;
    height: 300px;
    /* 以下属性垂直居中 */
    display: table-cell;
    vertical-align: middle;
}
```
（3）已知高度的块状元素解决方案

```css 
.item{
    position: absolute;
    top: 50%;
    margin-top: -50px;  /* margin-top值为自身高度的一半 */
    padding:0;
}
```

### 三、水平垂直居中

（1）已知高度和宽度的元素解决方案 1

这是一种不常见的居中方法，可自适应，比方案 2 更智能，如下：
```css
.item{
    position: absolute;
    margin:auto;
    left:0;
    top:0;
    right:0;
    bottom:0;
}
```
（2）已知高度和宽度的元素解决方案 2

```css
.item{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -75px;  /* 设置margin-left / margin-top 为自身高度的一半 */
    margin-left: -75px;
}
```

（3）未知高度和宽度元素解决方案

```css
.item{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  /* 使用 css3 的 transform 来实现 */
}
```

（4）使用 flex 布局实现

```css
.parent{
    display: flex;
    justify-content: center;
    align-items: center;
    /* 注意这里需要设置高度来查看垂直居中效果 */
    background: #AAA;
    height: 300px;
}
```






## jpg、png、gif区别
### JPG的特性
- 支持摄影图像或写实图像的高级压缩，并且可利用压缩比例控制图像文件大小。
- 有损压缩会使图像数据质量下降，并且在编辑和重新保存 JPG 格式图像时，这种下降损失会累积。
- JPG 不适用于所含颜色很少、具有大块颜色相近的区域或亮度差异十分明显的较简单的图片。

### PNG的特性

- 能在保证最不失真的情况下尽可能压缩图像文件的大小。
- PNG 用来存储灰度图像时，灰度图像的深度可多到 16 位，存储彩色图像时，彩色图像的深度可多到 48 位，并且还可存储多到 16 位的 α 通道数据。
- 对于需要高保真的较复杂的图像，PNG 虽然能无损压缩，但图片文件较大，不适合应用在 Web 页面上。
- 另外还有一个原则就是用于页面结构的基本视觉元素，**如容器的背景、按钮、导航的背景等应该尽量用 PNG 格式进行存储，这样才能更好的保证设计品质**。而其他一些内容元素，**如广告 Banner、商品图片 等对质量要求不是特别苛刻的，则可以用 JPG 去进行存储从而降低文件大小**。

### GIF格式特点
 
- 透明性: Gif 是一种布尔透明类型，既它可以是全透明，也可以是全不透明，但是它并没有半透明（alpha 透明）。 
- 动画：Gif 这种格式支持动画。 
- 无损耗性：Gif 是一种无损耗的图像格式，这也意味着你可以对 gif 图片做任何操作也不会使得图像质量产生损耗。 
- 水平扫描：Gif 是使用了一种叫作 LZW 的算法进行压缩的，当压缩 gif 的过程中，像素是由上到下水平压缩的，这也意味着同等条件下，横向的 gif 图片比竖向的 gif 图片更加小。
例如 500*10 的图片比 10*500 的图片更加小。
间隔渐进显示：Gif 支持可选择性的间隔渐进显示。 

由以上特点看出只有 256 种颜色的 gif 图片不适合作为照片，它适合做对颜色要求不高的图形。


## 外链引入CSS文件，方式&性能区别

CSS 的引入方式最常用的有三种

### 第一：外链式

这种方法可以说是现在占统治地位的引入方法。

如同 IE 与浏览器。这也是最能体现 CSS 特点的方法；

最能体现 DIV+CSS 中的内容离的思想，也最易改版维护，代码看起来也是最美观的一种。

### 第二：内部样式表

这种方法的使用情况要少的多，最长见得就是访问量大的门户网站。或者访问量较大的企业网站的首页。

与第一种方法比起来，优弊端也明显。

优点：速度快，所有的 CSS 控制都是针对本页面标签的，没有多余的 CSS 命令；再者不用外链 CSS 文件。直接在文档中读取样式。

缺点：就是改版麻烦些，单个页面显得臃肿，CSS 不能被其他 HTML 引用造成代码量相对较多，维护也麻烦些采用这种方法的公司大多有钱，对他们来说用户量是关键，他们不缺人进行复杂的维护工作。

### 第三：行内样式

认为 HTML 里不能出现 CSS 命令。其实有时候没有什么大不了。比如通用性差，效果特殊，使用 CSS 命令较少，并且不常改动的地方，使用这种方法反而是很好的选择。

### 第四：@import 引入方式

```css
<style type="text/css">
@import url(my.css);
</style>
```


## 雪碧图&优缺点
将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 CSS 的 background-image，background-repeat，background-position 的组合进行背景定位。


加速的关键，不是降低重量，而是减少个数。传统切图讲究精细，图片规格越小越好，重量越小越好，其实规格大小无计算机统一都按 byte 计算。客户端每显示一张图片都会向服务器发送请求。所以，图片越多请求次数越多，造成延迟的可越大。

### 优点
- 利用 CSS Sprites 能很好地减少了网页的 http 请求，从而大大的提高了页面的性能，这也是CSS Sprites 的优点，也是其被广泛传播和应用的主要原因；
- CSS Sprites 能减少图片的字节，曾经比较过多次 3 张图片合并成 1 张图片的字节总是小于这 3 张图片的和。
- 解决了网页设计师在图片命名上的困扰，只需对一张集合的图片上命名就可以了，不需要对每一个小元素名，从而提高了网页的制作效率。
- 更换风格方便，只需要在一张或少张图片上修改图片的颜色或样式，整个网页的风格就可以改变。维护起方便。


### 缺点
诚然 CSS Sprites 是如此的强大，但是也存在一些不可忽视的缺点，如下：

- 在图片合并的时候，你要把多张图片有序的合理的合并成一张图片，还要留好足够的空间，防止板块内不不必要的背景；这些还好，最痛苦的是在宽屏，高分辨率的屏幕下的自适应页面，你的图片如果不够宽，很容背景断裂；
- CSS Sprites 在开发的时候比较麻烦，你要通过 photoshop 或其他工具测量计算每一个背景单元的精确位是针线活，没什么难度，但是很繁琐；
- CSS Sprites 在维护的时候比较麻烦，如果页面背景有少许改动，一般就要改这张合并的图片，无需改的好不要动，这样避免改动更多的 css，如果在原来的地方放不下，又只能（最好）往下加图片，这样图片的字加了，还要改动 css。

CSS Sprites 非常值得学习和应用，特别是页面有一堆 ico（图标）。总之很多时候大家要权衡一下再决定是不是应用 CSS Sprites。


## 以 CSS3 标准定义一个 webkit 内核浏览器识别的圆角（尺寸随意）

```css
-moz-border-radius: 10px; 
-webkit-border-radius: 10px;
border-radius: 10px;
```



## 如果让你来制作一个访问量很高的大型网站，你会如何来管理所有 CSS 文件、JS 与图片？

回答：涉及到人手、分工、同步；

- 先期团队必须确定好全局样式（globe.css），编码模式 (utf-8) 等
- 编写习惯必须一致（例如都是采用继承式的写法，单样式都写成一行）；
- 标注样式编写人，各模块都及时标注（标注关键样式调用的地方）；
- 页面进行标注（例如页面模块开始和结束）；
- CSS 跟 HTML 分文件夹并行存放，命名都得统一（例如 style.css）
- JS 分文件夹存放，命名以该 JS 功能为准
- 图片采用整合的 png8 格式文件使用，尽量整合在一起使用，方便将来的管理

## 为什么要初始化CSS样式

因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异。
初始化样式会对 SEO 有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。

初始化 CSS 样式例子

```css
html,
body {
  padding: 0; 
  margin: 0;
} 
...
```

## absolute的containing block(容器块)计算方式跟正常流有什么不同

无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：

- 若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box (除 margin, border 外的区域) 的最小矩形；
- 否则，则由这个祖先元素的 padding box 构成。
- 如果都找不到，则为 initial containing block。

补充：

1. static / relative：简单说就是它的父元素的内容框（即去掉 padding 的部分）
2. absolute: 向上找最近的定位为 absolute / relative 的元素
3. fixed: 它的 containing block 一律为根元素(html / body)，根元素也是 initialcontaining block


## 对BFC规范(块级格式化上下文：blockformatting context)的理解

BFC 规定了内部的 Block Box 如何布局。

W3C CSS 2.1 规范中的一个概念，它是一个独立容器，决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。

- 一个页面是由很多个 Box 组成的，元素的类型和 display 属性，决定了这个 Box 的类型。
- 不同类型的 Box，会参与不同的 Formatting Context（决定如何渲染文档的容器），因此 Box 内的元素会以不同的方式渲染，也就是说 BFC 内部的元素和外部的元素不会互相影响。

定位方案：

- 内部的 Box 会在垂直方向上一个接一个放置。
- Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
- 每个元素的 margin box 的左边，与包含块 border box 的左边相接触。
- BFC 的区域不会与 float box 重叠。
- BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。

计算 BFC 的高度时，浮动元素也会参与计算。

满足下列条件之一就可触发 BFC：

- 1、根元素，即 html
- 2、float 的值不为 none（默认）
- 3、overflow 的值不为 visible（默认）
- 4、display 的值为 inline-block、table-cell、table-caption
- 5、position 的值为 absolute 或 fixed

## canvas与svg的区别

- Canvas 是基于像素的即时模式图形系统，最适合较小的表面或较大数量的对象，Canvas 不支持鼠标键盘等事件。
- SVG 是基于形状的保留模式图形系统，更加适合较大的表面或较小数量的对象。
- Canvas 和 SVG 在修改方式上还存在着不同。绘制 Canvas 对象后，不能使用脚本和 CSS 对它进行修改。因为 SVG 对象是文档对象模型的一部分，所以可以随时使用脚本和 CSS 修改它们。

现在对两种技术做对比归纳如下：

### Canvas

1) 依赖分辨率
2) 不支持事件处理器
3) 弱的文本渲染能力
4) 能够以 .png 或 .jpg 格式保存结果图像
5) 最适合图像密集型的游戏，其中的许多对象会被频繁重绘

### SVG

1) 不依赖分辨率
2) 支持事件处理器
3) 最适合带有大型渲染区域的应用程序（比如谷歌地图）
4) 复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）
5) 不适合游戏应用


### svg与canvas的区别

- svg 绘制出来的每一个图形的元素都是独立的 DOM 节点，能够方便的绑定事件或用来修改，而 canvas 输出的是一整幅画布；
- svg 输出的图形是矢量图形，后期可以修改参数来自由放大缩小，不会是真和锯齿。而 canvas 输出标量画布，就像一张图片一样，放大会失真或者锯齿。


## 浏览器是怎样解析CSS选择器的

- CSS 选择器的解析是从右向左解析的。
- 若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。
- 若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。
- 两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。
- 而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。
- 在建立 Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。

## 全屏滚动的原理，用到了CSS哪些属性

### 原理

- 有点类似于轮播，整体的元素一直排列下去，假设有 5  个需要展示的全屏页面，那么高度是 500%，只是展示 100%，剩下的可以通过 transform 进行 y 轴定位，也可以通过 margin-top 实现。
- overflow：hidden；transition：all 1000ms ease；

## 响应式设计&基本原理&如何兼容低版本的IE

- 响应式网站设计( Responsive Web design ) 是一个网站能够兼容多个终端，而不是为每一个终端做一个特定的版本。
- 基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理。
- 页面头部必须有 meta 声明的 viewport。

```html
<meta name="viewport" content="" width="device-width" initial-scale="1" maximum-scale="1" user-scalable="no"/>
```

## 视差滚动效果

视差滚动（Parallax Scrolling）通过在网页向下滚动的时候，`控制背景的移动速度比前景的移动速度慢`来创建出令人惊叹的 3D 效果。

- CSS3 实现。
优点：开发时间短、性能和开发效率比较好，缺点是不能兼容到低版本的浏览器

- jQuery 实现。
通过控制不同层滚动速度，计算每一层的时间，控制滚动效果。优点：能兼容到各个版本的，效果可控性好。缺点：开发起来对制作者要求高。

- 插件实现方式。
例如：parallax-scrolling，兼容性十分好。

## style标签写在body前后的区别
页面加载自上而下，当然是先加载样式。

写在 body 标签后，由于浏览器以逐行方式对 HTML 文档进行解析，当解析到写在尾部的样式表（外联或写在style标签）会导致浏览器停止之前的渲染，等待加载且解析样式表完成之后重新渲染，在 windows 的 IE 下可能会出现 FOUC 现象（即样式失效导致的页面闪烁问题）


## 什么叫优雅降级和渐进增强

- 渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。
- 优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

区别

- 优雅降级是从复杂的现状开始，并试图减少用户体验的供给；
- 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要；
- 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。