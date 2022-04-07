# 1.12.HTML5新特性和SEO优化

## 一、什么是 `HTML5`

1.  `HTML5` 的概念与定义 

   - 定义：`HTML5` 定义了 `HTML` 标准的最新版本，是对 `HTML` 的第五次重大修改，号称下一代的 `HTML` 
   - 两个概念：
     - 是一个新版本的 `HTML` 语言，定义了新的标签、特性和属性
     - 拥有一个强大的技术集，这些技术集是指： `HTML5` 、`CSS3` 、`javascript`, 这也是广义上的 `HTML5`

2.  `HTML5` 拓展了哪些内容

   - 语义化标签
   - 本地存储
   - 兼容特性
   - `2D`、`3D` 
   - 动画、过渡
   - `CSS3` 特性
   - 性能与集成

3.  `HTML5 ` 的现状

      绝对多数新的属性，都已经被浏览器所支持，最新版本的浏览器已经开始陆续支持最新的特性，

      总的来说：`HTML5` 已经是大势所趋

这些新特性都有兼容性问题，基本是 **IE9+ 以上版本的浏览器**才支持，如果不考虑兼容性问题，可以大量使用这些新特性。


##  二、语义化标签 （★★）

以前布局，我们基本用 div 来做。div 对于搜索引擎来说，是没有语义的

```html
<div class=“header”> </div>
<div class=“nav”> </div>
<div class=“content”> </div>
<div class=“footer”> </div>
```

发展到了HTML5后，新增了一些语义化标签，这样的话更加有利于浏览器的搜索引擎搜索，也方便了网站的seo（Search Engine Optimization，搜索引擎优化），新增的一些语义化标签

- `<header>` 头部标签
- `<nav>` 导航标签
- `<article>` 内容标签
- `<section>` 定义文档某个区域
- `<aside>` 侧边栏标签
- `<footer>` 尾部标签

![](https://gitee.com/leelillian/picgorepo/raw/master/images/语义化标签.png)


### 语义化标签需要注意的点
- 语义化标签主要针对搜索引擎
- 新标签可以使用一次或者多次
- 在 `IE9` 浏览器中，需要把语义化标签都转换为块级元素
- 语义化标签，在移动端支持比较友好

## 三、多媒体标签

多媒体标签分为 音频 **audio** 和视频 **video** 两个标签 使用它们，可以很方便的在页面中嵌入音频和视频，而不再去使用落后的flash和其他浏览器插件了。

因为多媒体标签的 属性、方法、事件比较多，因此需要什么功能的时候，就需要去查找相关的文档进行学习使用。


### 3.1.视频标签- video（★★★）

#### 基本使用

当前 `<video>` 元素支持三种视频格式： 尽量使用 **mp4格式**

**使用语法：**

```html
 <video src="media/mi.mp4"></video>
```
![](https://gitee.com/leelillian/picgorepo/raw/master/images/vedio.png)
![](https://gitee.com/leelillian/picgorepo/raw/master/images/video支持格式.png)

#### 兼容写法

由于各个浏览器的支持情况不同，所以会有一种兼容性的写法，这种写法了解一下即可

```html
<video  controls="controls"  width="300">
    <source src="move.ogg" type="video/ogg" >
    <source src="move.mp4" type="video/mp4" >
    您的浏览器暂不支持 <video> 标签播放视频
</ video >
```
**上面这种写法，浏览器会匹配video标签中的source，如果支持就播放，如果不支持往下匹配，直到没有匹配的格式，就提示文本**

#### video 常用属性

![](https://gitee.com/leelillian/picgorepo/raw/master/images/video常用属性.png)

**属性很多，有一些属性需要重点掌握：**

- `autoplay`  自动播放
  - 注意： 在google浏览器上面，默认禁止了自动播放，如果想要自动播放的效果，需要设置 muted属性
- `width`  宽度
- `height`  高度
- `loop`  循环播放
- `src`  播放源
- `muted` 静音播放

**示例代码：**

```html
<video src="media/mi.mp4" autoplay="autoplay" muted="muted"  loop="loop" poster="media/mi9.jpg"></video>
```

### 3.2.音频标签- audio

#### 基本使用

当前 **<audio>** 元素支持三种视频格式： 尽量使用 **mp3格式**

**使用语法：**

```html
<audio src="media/music.mp3"></audio>
```
![](https://gitee.com/leelillian/picgorepo/raw/master/images/audio支持格式.png)

#### 兼容写法

由于各个浏览器的支持情况不同，所以我们会有一种兼容性的写法，这种写法了解一下即可

```html
< audio controls="controls"  >
    <source src="happy.mp3" type="audio/mpeg" >
    <source src="happy.ogg" type="audio/ogg" >
    您的浏览器暂不支持 <audio> 标签。
</ audio>
```

**上面这种写法，浏览器会匹配audio标签中的source，如果支持就播放，如果不支持往下匹配，直到没有匹配的格式，就提示文本**

#### audio 常用属性

| 属性  |  值 |  描述 |
|---|---|---|
| autoplay  |  autoplay |  如果出现该属性,则音频在就绪后马.上播放。 |
|  controls |  controls |  如果出现该属性，则向用户显示控件，比如播放按钮。 |
| loop  |  loop |  如果出现该属性，则每当音频结束时重新开始播放。 |
|  src |  url |  要播放的音频的URL。 |


**示例代码：**

```html
<audio src="media/music.mp3" autoplay="autoplay" controls="controls"></audio>
```

```html
<body>
  <!-- 注意：在 chrome 浏览器中已经禁用了 autoplay 属性 -->
  <!-- <audio src="./media/snow.mp3" controls autoplay></audio> -->

  <!-- 
    因为不同浏览器支持不同的格式，所以我们采取的方案是这个音频准备多个文件
   -->
  <audio controls>
    <source src="./media/snow.mp3" type="audio/mpeg" />
  </audio>
</body>
```
### 小结

- 音频标签和视频标签使用方式基本一致
- 浏览器支持情况不同
- 谷歌浏览器把音频和视频自动播放禁止了
- 可以给视频标签添加 muted 属性来静音播放视频，音频不可以（可以通过JavaScript解决）
- 视频标签是重点，经常设置自动播放，不使用 controls 控件，循环和设置大小属性

## 四、新增input标签 （★★）

在H5中，新增加了很多类型的表单，方便了开发

 **常见输入类型**
- text 
- password 
- radio 
- checkbox 
- button 
- file 
- hidden 
- submit 
- reset 
- image

**新的输入类型**

email, url, data, time, month, week, number, tel, search, color
![](https://gitee.com/leelillian/picgorepo/raw/master/images/新增input表单.png)

|  属性 |  值 |
|---|---|
|  type="email"  |  限制用户输入必须为Email类型 |
|  type="url"  |  限制用户输入必须为URL类型 |
|  type="date"  |  限制用户输入必须为日期类型 |
|  type="time" |  限制用户输入必须为时间类型 |
|  type="month" | 限制用户输入必须为月类型  |
|  type="week" |  限制用户输入必须为周类型 |
|  type="number" | 限制用户输入必须为数字类型  |
|  type="tel" |   手机号码 |
|  type="search" | 搜索框  |
|  type="color" | 生成一个颜色选择表单  |

**案例：新增表单的用法**

![](https://gitee.com/leelillian/picgorepo/raw/master/images/input案例.png)

**案例代码：**
```html
<!-- 验证的时候必须添加form表单域 -->
<form action="">
    <ul>
        <li>邮箱: <input type="email" /></li>
        <li>网址: <input type="url" /></li>
        <li>日期: <input type="date" /></li>
        <li>时间: <input type="time" /></li>
        <li>数量: <input type="number" /></li>
        <li>手机号码: <input type="tel" /></li>
        <li>搜索: <input type="search" /></li>
        <li>颜色: <input type="color" /></li>
        <!-- 当我们点击提交按钮就可以验证表单了 -->
        <li> <input type="submit" value="提交"></li>
    </ul>
</form>
```

## 五、新增表单属性
required, placeholder， autofocus， autocomplete， multiple
![](https://gitee.com/leelillian/picgorepo/raw/master/images/newinput.png)

## 六、广义H5说法 了解

### 狭隘H5


### 广义H5

- 广义的 HTML5 是 HTML5 本身 + CSS3 + JavaScript 。
- 这个集合有时称为 HTML5 和朋友，通常缩写为 HTML5 。
- 虽然 HTML5 的一些特性仍然不被某些浏览器支持，但是它是一种发展趋势。
- HTML5 MDN 介绍：
  https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML






<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-03-02 23:48:50
 * @LastEditTime: 2022-03-02 23:49:13
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->


## 七、TDK三大标签SEO优化（★★）

### SEO是什么

**SEO（Search Engine Optimization）**汉译为搜索引擎优化，是一种利用搜索引擎的规则提高网站在有关搜索引擎内自然排名的方式。

**SEO** 的目的是对网站进行深度的优化，从而帮助网站获取免费的流量，进而在搜索引擎上提升网站的排名，提高网站的知名度。

页面必须有三个标签用来符合 SEO 优化
三大标签 —— title、 description、keyword

### TDK是什么

#### T -- Title（网站标题）

**title** 具有**不可替代性**，是我们内页的第一个重要标签，是搜索引擎了解网页的入口和对网页主题归属的最佳判断点。

**建议：**网站名（产品名）- 网站的介绍  （尽量不要超过30个汉字）

**例如：**

- 京东(JD.COM)-综合网购首选-正品低价、品质保障、配送及时、轻松购物！
- 小米商城 - 小米5s、红米Note 4、小米MIX、小米笔记本官方网站

#### D -- description（网站描述）

简要说明网站主要是做什么的。

**我们提倡**，description 作为网站的总体业务和主题概括，多采用“我们是…”、“我们提供…”、“×××网作为…”、“电话：010…”之类语句。

**例如：**

`<meta name="description" content="京东JD.COM-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!" />`

#### K -- keywords （关键字）

**keywords 是页面关键词**，是搜索引擎的关注点之一。

keywords 最好限制为 6～8 个关键词，关键词之间用英文逗号隔开，采用 关键词1,关键词2 的形式

**例如：**

`<meta name= " keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东" />`

**对于前端来说，只需要准备好这三个标签，具体里面的内容，有专门的 SEO 人员准备**

**示例代码**

```html
<head>
    ...
    <title>品优购商城-综合网购首选-正品低价、品质保障、配送及时、轻松购物！
    </title>
    <!-- 网站说明 -->
    <meta name="description"
        content="品优购商城-专业的综合网上购物商城,销售家电、数码通讯、电脑、家居百货、服装服饰、母婴、图书、食品等数万个品牌优质商品.便捷、诚信的服务，为您提供愉悦的网上购物体验!" />
    <!-- 关键字 -->
    <meta name="keywords" content="网上购物,网上商城,手机,笔记本,电脑,MP3,CD,VCD,DV,相机,数码,配件,手表,存储卡,京东" />
    ...
</head>
```


<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-03-04 00:41:08
 * @LastEditTime: 2022-03-04 00:41:09
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->
