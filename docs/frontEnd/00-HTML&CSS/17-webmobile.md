# 1.17.移动端开发

## 一、移动端基础

### 1.1浏览器现状

 PC端常见浏览器：360浏览器、谷歌浏览器、火狐浏览器、QQ浏览器、百度浏览器、搜狗浏览器、IE浏览器。

移动端常见浏览器：UC浏览器，QQ浏览器，欧朋浏览器，百度手机浏览器，360安全浏览器，谷歌浏览器，搜狗手机浏览器，猎豹浏览器，以及其他杂牌浏览器。

国内的UC和QQ，百度等手机浏览器都是根据Webkit修改过来的内核，国内尚无自主研发的内核，就像国内的手机操作系统都是基于Android修改开发的一样。

**总结：兼容移动端主流浏览器，处理Webkit内核浏览器即可。**

### 1.2 手机屏幕的现状

+ 移动端设备屏幕尺寸非常多，碎片化严重。
+ Android设备有多种分辨率：480x800, 480x854, 540x960, 720x1280，1080x1920等，还有传说中的2K，4k屏。
+ 近年来iPhone的碎片化也加剧了，其设备的主要分辨率有：640x960, 640x1136, 750x1334, 1242x2208等。
+ 作为开发者无需关注这些分辨率，因为我们常用的尺寸单位是 px 。

### 1.3常见移动端屏幕尺寸
![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/16-1(1).png)


### 1.4移动端调试方法

+ Chrome DevTools（谷歌浏览器）的模拟手机调试
+ 搭建本地web服务器，手机和服务器一个局域网内，通过手机访问服务器
+ 使用外网服务器，直接IP或域名访问

## 二、视口

视口（viewport）就是浏览器显示页面内容的屏幕区域。 视口可以分为布局视口、视觉视口和理想视口

### 2.1 布局视口 layout viewport

一般移动设备的浏览器都默认设置了一个布局视口，用于解决早期的PC端页面在手机上显示的问题。

iOS, Android基本都将这个视口分辨率设置为 980px，所以PC上的网页大多都能在手机上呈现，只不过元素看上去很小，一般默认可以通过手动缩放网页。

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/16-2.png)


### 2.2视觉视口 visual viewport

字面意思，它是用户正在看到的网站的区域。注意：是网站的区域。

我们可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/16-3.png)


### 2.3理想视口 ideal viewport

为了使网站在移动端有最理想的浏览和阅读宽度而设定

理想视口，对设备来讲，是最理想的视口尺寸

需要手动添写meta视口标签通知浏览器操作

meta视口标签的主要目的：布局视口的宽度应该与理想视口的宽度一致，简单理解就是设备有多宽，我们布局的视口就多宽

**总结：我们开发最终会用理想视口，而理想视口就是将布局视口的宽度修改为视觉视口**

### 2.4meta标签

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/16-4.png)

最标准的viewport设置

+ 视口宽度和设备保持一致
+ 视口的默认缩放比例1.0
+ 不允许用户自行缩放
+ 最大允许的缩放比例1.0
+ 最小允许的缩放比例1.0

## 三、二倍图

### 3.1 物理像素&物理像素比
- 物理像素点指的是屏幕显示的最小颗粒，是物理真实存在的
- 在PC端页面，1px等于1个物理像素，但是移动端就不尽相同
- 1px能实际显示的物理像素点的个数就称为物理像素比或屏幕像素比

`物理像素比 = 物理像素（分辨率） / 独立像素（CSS像素）`

例如：iPhone X 的物理像素比为 3
|  屏幕尺寸 |  独立像素（CSS像素） | 物理像素（分辨率）  | ppi/dpi（像素密度  |  dpr（倍图） |
|---|---|---|---|---|
|  5.8英寸	 | 812×375  | 2436×1125  | 458  |  3 |

物理像素比提出的原因：

- 在早期，PC及移动端都是：1CSS像素 = 1物理像素
- 随着Retina（视网膜屏幕）显示技术的普及，可以将更多的物理像素点压缩至一块屏幕里，从而达到更高的分辨率，并提高屏幕显示的细腻程度。

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220306185053.png)


### 3.2 多倍图
- 对于一张50px*50px的图片，在手机Retina屏中打开，按照刚才的物理像素比会放大倍数，这样会造成图片模糊
- 在标准的viewport设置中，使用倍图来提高图片质量，解决在高清设备中的模糊问题
- 通常使用二倍体，是因为 iPhone 6\7\8 的影响，但是现在还存在 3倍图4倍图 的情况，这个要看实际开发需求
- 背景图片要注意缩放问题
- 字体不用考虑缩放问题，因为字体是矢量的，不会失真

```
  /* 在 iphone8 下面 */
  img {
      /* 原始图片100*100px */
      width: 50px;
      height: 50px;
  }

  .box {
      /* 原始图片100*100px */
      background-size: 50px 50px;
  }
```


案例：
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>03-二倍图做法</title>
    <style>
        /* 需要一个50*50像素（css像素）的图片，直接放到iphone8里面会放大2倍100*100就会模糊 */
        /* 采取的是放一个100*100图片，然后手动的把这个图片缩小为50*50（css像素）*/
        /* 准备的图片比实际需要的大小大2倍，这就方式就是2倍图 */
        img:nth-child(2) {
            width: 50px;
            height: 50px;
        }
    </style>
</head>

<body>
    <!-- 模糊的 -->
    <img src="images/apple50.jpg" alt="">
    <!-- 我们采取2倍图 -->
    <img src="images/apple100.jpg" alt="">
</body>

</html>
```

模拟效果：

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220306185313.png)

### 二倍精灵图做法
- 在PS中将精灵图等比例缩放为原来的一半
- 之后根据大小测量坐标
- 注意代码里面background-size也要写：精灵图原来宽度的一半


### 3.3背景缩放background-size

background-size 属性规定背景图像的尺寸

```css
background-size: 背景图片宽度 背景图片高度;
```

- 单位： 长度|百分比|cover|contain;

- cover把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。

- contain把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域


注意：

- 以长度为单位时，只写其中一个参数，另一个参数会自动适配
- 以百分比为单位时，其参照对象为父盒子，只写其中一个参数，另一个参数会自动适配


## 四、移动开发选择和技术解决方案

### 4.1移动端主流方案

1.单独制作移动端页面（主流）

通常情况下，网址域名前面加 m(mobile)
可以打开移动端。通过判断设备，如果是移动设备打开，则跳到移动端页面。  

也就是说，PC端和移动端为两套网站，pc端是pc端的样式，移动端在写一套，专门针对移动端适配的一套网站

京东pc端：

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/16-4.png)


京东移动端：

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/16-6.jpg)


2.响应式页面兼容移动端（其次）

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/16-7.jpg)

响应式网站：即pc和移动端共用一套网站，只不过在不同屏幕下，样式会自动适配

### 4.2 移动端技术解决方案

1.移动端浏览器兼容问题

移动端浏览器基本以 `webkit` 内核为主，因此就考虑`webkit`兼容性问题。

可以放心使用 H5 标签和 CSS3 样式。

同时我们浏览器的私有前缀只需要考虑添加 `webkit` 即可

2.移动端公共样式

移动端 CSS 初始化推荐使用 normalize.css/

- Normalize.css：保护了有价值的默认值
- Normalize.css：修复了浏览器的bug
- Normalize.css：是模块化的
- Normalize.css：拥有详细的文档

官网地址： <http://necolas.github.io/normalize.css/>

### 4.3 移动端大量使用 CSS3盒子模型box-sizing

- 传统模式宽度计算：盒子的宽度 = CSS中设置的width + border + padding 

- CSS3盒子模型：盒子的宽度=  CSS中设置的宽度width 里面包含了 border 和 padding 

**盒子的width包括content+border+padding**

也就是说，CSS3中的盒子模型， padding 和 border 不会撑大盒子了

```css
/*CSS3盒子模型*/
box-sizing: border-box;

/*传统盒子模型*/
box-sizing: content-box;

```

- 移动端可以全部使用CSS3 盒子模型

- PC端如果完全需要兼容，就用传统模式，如果不考虑兼容性，就选择 CSS3 盒子模型

### 4.4移动端特殊样式

```
    /*CSS3盒子模型*/
    box-sizing: border-box;
    -webkit-box-sizing: border-box;

    /*点击高亮我们需要清除清除  设置为transparent 完成透明*/
    -webkit-tap-highlight-color: transparent;

    /*在移动端浏览器默认的外观在iOS上加上这个属性才能给按钮和输入框自定义样式*/
    -webkit-appearance: none;

    /*禁用长按页面时的弹出菜单*/
    img,a { -webkit-touch-callout: none; }

```

##  五、移动端常见布局

## 1. 移动端单独制作 【主流】
+ 流式布局（百分比布局）
+ flex 弹性布局（强烈推荐）
+ less+rem+媒体查询布局
+ 混合布局

## 2. 响应式 【其次】
+ 媒体查询
+ bootstarp




<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-03-06 18:18:49
 * @LastEditTime: 2022-03-06 18:27:11
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->