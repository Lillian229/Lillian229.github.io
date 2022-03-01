# 1.11.CSS 用户界面样式、vertical-align、省略号、常见布局技巧
## 1.CSS 用户界面样式

**什么是界面样式**

所谓的界面样式，就是更改一些用户操作样式，以便提高更好的用户体验。

- 更改用户的鼠标样式 
- 表单轮廓
- 防止表单域拖拽

### 1.1 鼠标样式 cursor

```css
 li {
 	cursor: pointer; 
 }
```

**设置或检索在对象上移动的鼠标指针采用何种系统预定义的光标形状。**
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571521805183.png)

### 1.2 轮廓线 outline
给表单添加 outline: 0;   或者  outline: none; 样式之后，就可以去掉默认的蓝色边框。

```css
 input {
 	outline: none; 
 }
```

### 1.3 防止拖拽文本域 resize

 实际开发中，我们文本域右下角是不可以拖拽的。

```css
 textarea{ 
 	resize: none;
 }
```



## 2. vertical-align 属性应用

CSS 的 属性使用场景： 经常用于设置图片或者表单(行内块元素）和文字垂直对齐。

官方解释： 用于设置一个元素的**垂直对齐方式**，但是它只针对于行内元素或者行内块元素有效。

语法：

```css
vertical-align : baseline | top | middle | bottom 
```
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571522023413.png)

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571522040645.png)

###  图片、表单和文字对齐

图片、表单都属于行内块元素，默认的 vertical-align 是基线对齐。
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571522093729.png)

此时可以给图片、表单这些行内块元素的 **vertical-align 属性设置为 middle** 就可以让文字和图片垂直居中对齐了。

### 解决图片底部默认空白缝隙问题

bug：图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。

主要解决方法有两种：

1.**给图片**添加 **vertical-align:middle | top| bottom** 等。 （提倡使用的）

2.把图片转换为块级元素  **display: block**; 


## 3. 溢出的文字省略号显示

### 单行文本溢出显示省略号
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571522317809.png)

单行文本溢出显示省略号--必须满足三个条件：

```css
  /*1. 先强制一行内显示文本*/
   white-space: nowrap;  （ 默认 normal 自动换行）
   
  /*2. 超出的部分隐藏*/
   overflow: hidden;
   
  /*3. 文字用省略号替代超出的部分*/
   text-overflow: ellipsis;
```



### 多行文本溢出显示省略号（了解）
多行文本溢出显示省略号，**有较大兼容性问题**，适合于webKit浏览器或移动端（移动端大部分是webkit内核）

```css
/*1. 超出的部分隐藏 */
overflow: hidden;

/*2. 文字用省略号替代超出的部分 */
text-overflow: ellipsis;

/* 3. 弹性伸缩盒子模型显示 */
display: -webkit-box;

/* 4. 限制在一个块元素显示的文本的行数 */
-webkit-line-clamp: 2;

/* 5. 设置或检索伸缩盒对象的子元素的排列方式 */
-webkit-box-orient: vertical;
```

**更推荐让后台人员来做这个效果，因为后台人员可以设置显示多少个字，操作更简单。**



## 4. 常见布局技巧

**巧妙利用一个技术更快更好的布局：**

1. margin负值的运用
2. 文字围绕浮动元素
3. 行内块的巧妙运用
4. CSS三角强化

### 1. margin负值运用
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571522666082.png)

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571522683897.png)

1.让每个盒子margin 往左侧移动 -1px 正好压住相邻盒子边框

2.鼠标经过某个盒子的时候，提高当前盒子的层级即可（如果没有有定位，则加相对定位（保留位置），如果有定位，则加z-index）

### 文字围绕浮动元素

**效果**
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571522777745.png)

**布局示意图**

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571522761996.png)

**巧妙运用浮动元素不会压住文字的特性**

### 行内块巧妙运用

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571522898744.png)

页码在页面中间显示:

1. 把这些链接盒子转换为行内块， 之后给父级指定  text-align:center;
2. 利用行内块元素中间有缝隙，并且给父级添加 text-align:center; 行内块元素会水平会居中

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571522910580.png)

### CSS 三角强化 案例

#### 原理

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571550959181.png)

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571551000391.png)

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571548058053.png)

代码部分：
```html
<style>
    .box1 {
        width: 0;
        height: 0;
        
        /* 把上边框宽度调大 */
        /* border-top: 100px solid transparent;
        border-right: 50px solid skyblue; */
        /* 左边和下边的边框宽度设置为0 */
        /* border-bottom: 0 solid blue;
        border-left: 0 solid green; */
        
        /* 1.只保留右边的边框有颜色 */
        border-color: transparent red transparent transparent;
        /* 2. 样式都是solid */
        border-style: solid;
        /* 3. 上边框宽度要大， 右边框 宽度稍小， 其余的边框该为 0 */
        border-width: 100px 50px 0 0 ;
    }

</style>
</head>
<body>
    <div class="box1"></div>
</body>
```

#### 秒杀价格-案例效果

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571548099631.png)

#### 代码参考

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>CSS三角强化的巧妙运用</title>
        <style>
            .price {
                width: 160px;
                height: 24px;
                line-height: 24px;
                border: 1px solid red;
                margin: 0 auto;
            }
            .miaosha {
                position: relative;
                float: left;
                width: 90px;
                height: 100%;
                background-color:red;
                text-align: center;
                color: #fff;
                font-weight: 700;
                margin-right: 8px;

            }
            .miaosha i {
                position: absolute;
                right: 0;
                top: 0;
                width: 0;
                height: 0;
                border-color: transparent #fff transparent transparent;
                border-style: solid;
                border-width: 24px 10px 0 0;
            }
            .origin {
                font-size: 12px;
                color: gray;
                text-decoration: line-through;
            }
        </style>
    </head>
    <body>
        <div class="price">
            <span class="miaosha">
                ¥1650
                <i></i>
            </span>
            <span class="origin">¥5650</span>
        </div>
    </body>
</html>
```


<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-03-01 20:57:03
 * @LastEditTime: 2022-03-01 20:57:03
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->
