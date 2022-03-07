# 1.7.盒子模型(padding,margin,border)、其他样式、PS基本操作
## 一、盒子模型
### 1、网页布局的本质
网页布局的核心本质： 就是利用 CSS 摆盒子。
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571492334739.png)

网页布局过程：

1. 先准备好相关的网页元素，网页元素基本都是盒子 Box 。
2. 利用 CSS 设置好盒子样式，然后摆放到相应位置。
3. 往盒子里面装内容

### 2、盒子模型（Box Model）组成

​盒子模型：把 HTML 页面中的布局元素看作是一个矩形的盒子，也就是一个盛装内容的容器。

​CSS 盒子模型本质上是一个盒子，封装周围的 HTML 元素，它包括：**边框**、**外边距**、**内边距**、和 **实际内容**
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571492536942.png)


### 3、边框（border）
#### 3.1、边框的使用

1、border可以设置元素的边框。边框有三部分组成：边框宽度(粗细) 边框样式  边框颜色；
2、语法：
```css
 border : border-width || border-style || border-color;   
```
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571492659260.png)

边框样式 border-style 可以设置如下值：

- none：没有边框即忽略所有边框的宽度（默认值）
- solid：边框为单实线(最为常用的)
- dashed：边框为虚线  
- dotted：边框为点线

3、边框的合写分写

边框简写：

```css
 border: 1px solid red;  
```

边框分开写法：

```css
 border-top: 1px solid red;  /* 只设定上边框， 其余同理 */   
```

#### 3.2、表格的细线边框

1、border-collapse 属性控制浏览器绘制表格边框的方式。它控制相邻单元格的边框。

2、语法：

```css
 border-collapse:collapse; 
```

collapse 单词是合并的意思

border-collapse: collapse; 表示相邻边框合并在一起

#### 3.3、边框会影响盒子实际大小

边框会额外增加盒子的实际大小。因此我们有两种方案解决：

- 测量盒子大小的时候,不量边框。
- 如果测量的时候包含了边框,则需要 width/height 减去边框宽度

### 4、内边距（padding）

#### 4.1、内边距的使用方式

1、padding 属性用于设置内边距，即边框与内容之间的距离。

2、语法：

合写属性：
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571493298248.png)


分写属性：
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571493260536.png)

#### 4.2、内边距会影响盒子实际大小

1、当我们给盒子指定 padding 值之后，发生了 2 件事情：

1. 内容和边框有了距离，添加了内边距。
2. padding影响了盒子实际大小。

2、内边距对盒子大小的影响：

- 如果盒子已经有了宽度和高度，此时再指定内边框，会撑大盒子。
- 如何盒子本身没有指定width/height属性, 则此时padding不会撑开盒子大小。

3、解决方案：

​如果保证盒子跟效果图大小保持一致，则让 width/height 减去多出来的内边距大小即可。

### 5、外边距（margin）

#### 5.1、外边距的使用方式

margin 属性用于设置外边距，即控制盒子和盒子之间的距离。
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571493741272.png)


#### 5.2、外边距典型应用

外边距可以让块级盒子水平居中的两个条件：

- 盒子必须指定了宽度（width）。
- 盒子左右的外边距都设置为 auto 。

常见的写法，以下三种都可以：

```css
margin-left: auto;   
margin-right: auto;

margin: auto;
margin: 0 auto;
```

注意：以上方法是让块级元素水平居中，行内元素或者行内块元素水平居中给其父元素添加 text-align:center 即可。

#### 5.3、外边距合并

使用 margin 定义块元素的垂直外边距时，可能会出现外边距的合并。

主要有两种情况:

1、相邻块元素垂直外边距的合并

​当上下相邻的两个块元素（兄弟关系）相遇时，如果上面的元素有下外边距 margin-bottom，下面的元素有上外边距 margin-top ，则他们之间的垂直间距不是 margin-bottom 与 margin-top 之和。取两个值中的较大者这种现象被称为相邻块元素垂直外边距的合并。

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571494239103.png)

解决方案：
		尽量只给一个盒子添加 margin 值。

2、嵌套块元素垂直外边距的塌陷

​		对于两个嵌套关系（父子关系）的块元素，父元素有上外边距同时子元素也有上外边距，此时父元素会塌陷较大的外边距值。

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571494373778.png)


解决方案：

- 可以为父元素定义上边框。
- 可以为父元素定义上内边距。
- 可以为父元素添加 overflow:hidden。

#### 5.4、清除内外边距

​		网页元素很多都带有默认的内外边距，而且不同浏览器默认的也不一致。因此我们在布局前，首先要清除下网页元素的内外边距。

```css
 * {
    padding:0;   /* 清除内边距 */
    margin:0;    /* 清除外边距 */
  }
```

​注意：行内元素为了照顾兼容性，尽量只设置左右内外边距，不要设置上下内外边距。但是转换为块级和行内块元素就可以了




## 二、其他样式 
### 1、圆角边框

在 CSS3 中，新增了圆角边框样式，盒子就可以变圆角了。

`border-radius` 属性用于设置元素的外边框圆角。

语法：

```css
 border-radius:length;    
```

- 参数值可以为数值或百分比的形式
- 如果是正方形，想要设置为一个圆，把数值修改为高度或者宽度的一半即可，或者直接写为 50%
- 该属性是一个简写属性，可以跟四个值，分别代表左上角、右上角、右下角、左下角
- 分开写：border-top-left-radius、border-top-right-radius、border-bottom-right-radius 和border-bottom-left-radius
- 兼容性 ie9+ 浏览器支持, 但是不会影响页面布局,可以放心使用

### 2、盒子阴影

CSS3 中新增了盒子阴影，可以使用 box-shadow 属性为盒子添加阴影。
语法：

```css
 box-shadow: h-shadow v-shadow blur spread color inset; 
```
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571541874805.png)

### 3、文字阴影

在 CSS3 中，可以使用 text-shadow 属性将阴影应用于文本。
语法：

```css
 text-shadow: h-shadow v-shadow blur color;
```
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571541954222.png)


## 三、PS 基本操作
​因为网页美工大部分效果图都是利用 PS（Photoshop）来做的，所以以后我们大部分切图工作都是在 PS 里面完成。

​部分操作：

- 文件→打开 ：可以打开我们要测量的图片
- Ctrl+R：可以打开标尺，或者 视图→标尺
- 右击标尺，把里面的单位改为像素
- Ctrl+ 加号(+)可以放大视图， Ctrl+ 减号(-)可以缩小视图
- 按住空格键，鼠标可以变成小手，拖动 PS 视图
- 用选区拖动  可以测量大小
- Ctrl+ D 可以取消选区，或者在旁边空白处点击一下也可以取消选区

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571494543539.png)

## 四、PS 切图

### 1、图层切图

```html
最简单的切图方式：右击图层 → 导出 → 切片。
```

### 2、切片切图

2.1、利用切片选中图片

```
 利用切片工具手动划出
```

2.2、导出选中的图片

```html
文件菜单 → 存储为 web 设备所用格式 → 选择需要的图片格式 → 存储 。
```

### 3、PS插件切图

​Cutterman 是一款运行在 Photoshop 中的插件，能够自动将需要的图层进行输出，以替代传统的手工 "导出 web 所用格式" 以及使用切片工具进行挨个切图的繁琐流程。

官网：http://www.cutterman.cn/zh/cutterman

注意：Cutterman 插件要求你的 PS 必须是完整版，不能是绿色版，所以需要安装完整版本。


<!--
 * @Description: 1.7.盒子模型(padding,margin,border)、PS基本操作
 * @Author: Lillian
 * @Date: 2022-03-01 15:18:03
 * @LastEditTime: 2022-03-01 19:36:34
 * @Reference: 
-->
