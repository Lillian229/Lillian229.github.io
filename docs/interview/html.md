# HTML

## [HTML&CSS基础](../frontEnd/00-HTML&CSS/README.md)

## H5C3的新特性
### H5 新特性
1. 拖拽释放(Drap and drop) API ondrop
拖放是一种常见的特性，即抓取对象以后拖到另一个位置
在 HTML5 中，拖放是标准的一部分，任何元素都能够拖放
2. 自定义属性 data-id
3. 语义化更好的内容标签(header,nav,footer ,aside, article, section)
4. 音频 ,视频(audio, video) 如果浏览器不支持自动播放怎么办? 在属性中添加autoplay(谷歌浏览器不支持音频自动播放，但是视频支持静音自动播放)
5. 画布 Canvas
- getContext() 方法返回一个用于在画布上绘图的环境 Canvas.getContext(contextID) 参
数 contextID 指定了您想要在画布上绘制的类型。当前唯一的合法值是 “2d”，它指定了二
维绘图，并且导致这个方法返回一个环境对象，该对象导出一个二维绘图 API
- cxt.stroke() 绘制线条
- canvas 和 image 在处理图片的时候有什么区别?
image 是通过对象的形式描述图片的,canvas 通过专门的 API 将图片绘制在画布上.
6.  地理(Geolocation) API 其实 Geolocation 就是用来获取到当前设备的经纬度（位置）
7.  本地离线存储 localStorage 用于长久保存整个网站的数据，浏览器关闭后数据不丢失; 保存的数据没有过期时间，直到手动去删除
8.  sessionStorage 该数据对象临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。

9.  [input表单type属性](../frontEnd/00-HTML&CSS/12-html5&SEO.md#五、新增表单属性) calendar , date , time , email , url , search , tel , file , number
10. 新的技术 webworker, websocket , Geolocation

### 移除的元素
- 纯表现的元素：basefont，big，center，font, s，strike，tt，u;  
- 对可用性产生负面影响的元素：frame，frameset，noframes；

### 支持 HTML5 新标签

- IE8/IE7/IE6 支持通过 document.createElement 方法产生的标签，可以利用这一特性让这些浏览器支持 HTML5 新标签，浏览器支持新标签后，还需要添加标签默认的样式。
- 当然也可以直接使用成熟的框架、比如 html5shim;
```html
<!--[if lt IE 9]>
<script> src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
<![endif]-->
```

### CSS3新特性
[CSS3新特性](./css.md#css3新特性frontend00-htmlcss13-css3md)

## 对HTML语义化的理解
- 用正确的标签做正确的事情。
- html 语义化让页面的内容结构化，结构更清晰，
- 便于对浏览器、搜索引擎解析;
- 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;
- 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;
- 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。


## HTML5的离线储存怎么使用，工作原理

在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。

### 原理

HTML5 的离线存储是基于一个新建的 .appcache 文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像 cookie 一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

### 如何使用

1. 页面头部像下面一样加入一个 manifest 的属性；
2. 在 cache.manifest 文件的编写离线存储的资源；
```json
CACHE MANIFEST
#v0.11
CACHE:
js/app.js
css/style.css
NETWORK:
resourse/logo.png
FALLBACK:
//offline.html
```

3. 在离线状态时，操作 window.applicationCache 进行需求实现。

## 浏览器如何对HTML5的离线储存资源进行管理和加载

在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求 manifest 文件，如果是第一次访问 app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。

如果已经访问过 app 并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。

离线的情况下，浏览器就直接使用离线存储的资源。


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



## 为什么利用多个域名来存储网站资源会更有效？
- 确保用户在不同地区能用最快的速度打开网站，其中某个域名崩溃用户也能通过其他域名访问网站。
- CDN 缓存更方便。简单来说，CDN 主要用来使用户就近获取资源。
- 突破浏览器并发限制。同一时间针对同一域名下的请求有一定数量限制，超过限制数目的请求会被阻塞。大多数浏览器的并发数量都控制在6以内。有些资源的请求时间很长，因而会阻塞其他资源的请求。因此，对于一些静态资源，如果放到不同的域名下面就能实现与其他资源的并发请求。
- Cookieless, 节省带宽，尤其是上行带宽 一般比下行要慢。
- 对于 UGC 的内容和主站隔离，防止不必要的安全问题。
- 数据做了划分，甚至切到了不同的物理集群，通过子域名来分流比较省事. 这个可能被用的不多。


## window常用属性与方法

### window 对象的常用属性

- window.self 返回当前窗口的引用
- window.parent   返回当前窗体的父窗体对象
- window.top 返回当前窗体最顶层的父窗体的引用
- window.outerwidth       返回当前窗口的外部宽
- window.outerheight  返回当前窗口的外部高
- window.innerwidth       返回当前窗口的可显示区域宽
- window.innerheight  返回当前窗口的可显示区域高
 
提示：通过直接在 Chrome 控制台中输入 console.log(window) 可以查看到其所有的被当前浏览器支持的属性及值。

### window 对象的常用方法

- window.prompt()   弹出一个输入提示框，若用户点击了“取消”则返回 null
- window.alert()    弹出一个警告框
- window.confirm()  弹出一个确认框
- window.close()  关闭当前浏览器窗口。 有些浏览器对此方法有限制。
- window.open(uri, [name], [features])  打开一个浏览器窗口，显示指定的网页。name 属性值可以是“_blank”、“_self”、“_parent”、“_top”、任意指定的一个窗口名。
- window.blur( )    指定当前窗口失去焦点
- window.focus( ) 指定当前窗口获得焦点
- window.showModalDialog(uri, [dataFromParent])  打开一个“模态窗口”（打开的子窗口只要不关闭，其父窗口即无法获得焦点；且父子窗口间可以传递数据）


## document常用属性与方法

### document 常见的属性

- body 提供对 <body> 元素的直接访问。对于定义了框架集的文档，该属性引用最外层的 <frameset>。
- cookie 设置或返回与当前文档有关的所有 cookie。
- domain 返回当前文档的域名。
- lastModified 返回文档被最后修改的日期和时间。
- referrer 返回载入当前文档的文档的 URL。
- title 返回当前文档的标题。
- URL 返回当前文档的 URL。

### document常见的方法

- write()：动态向页面写入内容
- createElement(Tag)：创建一个 HTML 标签对象
- getElementById(ID)：获得指定 id 的对象
- getElementsByName(Name)：获得之前 Name 的对象
- body.appendChild(oTag)：向 HTML 中插入元素对象



## 简述src与href的区别

- href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。
- src 是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；
- 在请求 src 资源时会将其指向的资源下载并应用到文档内，例如 js 脚本，img 图片和 frame 等元素。
当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将 js 脚本放在底部而不是头部。



## html中title和alt属性的区别

1. alt
   
```html
<img src="#" alt="alt 信息" />
```

当图片不输出信息的时候，会显示 alt 信息， 鼠标放上去没有信息。
当图片正常读取，不会出现 alt 信息。

2. title

```html
<img src="#" alt="alt 信息" title="title 信息" />
```
 
当图片不输出信息的时候，会显示 alt 信息，鼠标放上去会出现 title 信息。
当图片正常输出的时候，不会出现 alt 信息，鼠标放上去会出现 title 信息。


## Doctype作用，标准模式与兼容模式各有什么区别

- <!DOCTYPE> 声明位于位于 HTML 文档中的第一行，处于 `<html> `标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE 不存在或格式不正确会导致文档以兼容模式呈现。

- 标准模式的排版和 JS 运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作。


## HTML5 为什么只需要写 `< !DOCTYPE HTML>`

HTML5 不基于 SGML(标准通用标记语言（以下简称“通用标言”)，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；

而 HTML4.01 基于 SGML，所以需要对 DTD 进行引用，才能告知浏览器文档所使用的文档类型。

## iframe内嵌框架的缺点

内联框架 iframe一般用来包含别的页面，例如 我们可以在我们自己的网站页面加载别人网站的内容，为了更好的效果，可能需要使 iframe 透明效果；

- iframe 会阻塞主页面的 onload 事件；
- 搜索引擎的检索程序无法解读这种页面，不利于 SEO 搜索引擎优化（Search Engine Optimization）
- iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

如果需要使用 iframe，最好是通过 javascript 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题。

## Label的作用&怎么用

label 标签来定义表单控制间的关系，当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。
```html
<label for="Name">Number:</label>
<input type=“text“ name="Name"  id="Name"/>

<label>Date:<input type="text" name="B"/></label>
```

## HTML5的form如何关闭自动完成功能

给不想要提示的 form 或某个 input 设置为 autocomplete=off。

## 如何实现浏览器内多个标签页之间的通信 ? (阿里)

- WebSocket、SharedWorker；
- 也可以调用 localstorge、cookies 等本地存储方式；
- localstorge 在另一个浏览上下文里被添加、修改或删除时，它都会触发一个事件，我们通过监听事件，控制它的值来进行页面信息通信；
注意 quirks：Safari 在无痕模式下设置 localstorge 值时会抛出 QuotaExceededError 的异常；

## webSocket 如何兼容低浏览器 ？(阿里)

- Adobe Flash Socket 、
- ActiveX HTMLFile (IE) 、
- 基于 multipart 编码发送 XHR 、
- 基于长轮询的 XHR。

## 页面可见性（Page Visibility API） 可以有哪些用途 

- 通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
- 在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；

## 行内元素、块级元素、空(void)元素有那些

CSS 规范规定，每个元素都有 display 属性，确定该元素的类型，每个元素都有默认的 display 值。
如 div 的 display 默认值为 “block”，则为“块级”元素；
span 默认 display 属性值为 “inline”，是“行内”元素。

- 行内元素有：a b span img input select strong（强调的语气）
- 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4  p
- 常见的空元素： img input link meta br hr ，鲜为人知的是：area base col command embed keygen param source track wbr

## title与h1的区别、b与strong的区别、i与em的区别
- title 属性没有明确意义只表示是个标题，H1 则表示层次明确的标题，对页面信息的抓取也有很大的影响；
- strong 是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：`strong 会重读，而 b 是展示强调内容`。
- i 内容展示为斜体，em 表示强调的文本；

- Physical Style Elements -- 自然样式标签：b, i, u, s, pre
- Semantic Style Elements -- 语义样式标签：strong, em, ins, del, code
- 应该准确使用语义样式标签, 但不能滥用, 如果不能确定时，首选使用自然样式标签

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