
# 1.8.标准流、浮动、清除浮动、定位

## 一、浮动

### 1、传统网页布局的三种方式

​CSS 提供了三种传统布局方式(简单说,就是盒子如何进行排列顺序)：

- 普通流（标准流）

- 浮动

- 定位

  这三种布局方式都是用来摆放盒子的，盒子摆放到合适位置，布局自然就完成了。

注意：实际开发中，一个页面基本都包含了这三种布局方式 。

### 2、标准流（普通流/文档流）

所谓的标准流:  就是标签按照规定好默认方式排列

1. 块级元素会独占一行，从上向下顺序排列。常用元素：div、hr、p、h1~h6、ul、ol、dl、form、table
2. 行内元素会按照顺序，从左到右顺序排列，碰到父元素边缘则自动换行。常用元素：span、a、i、em 等 

以上都是标准流布局，我们前面学习的就是标准流，标准流是最基本的布局方式。

### 3、为什么需要浮动？

​总结： 有很多的布局效果，标准流没有办法完成，此时就可以利用浮动完成布局。 因为浮动可以改变元素标签默认的排列方式.

​浮动最典型的应用：可以让多个块级元素一行内排列显示。

​网页布局第一准则：**多个块级元素纵向排列找标准流，多个块级元素横向排列找浮动**。

### 4、什么是浮动？

​float 属性用于创建浮动框，**将其移动到一边，直到左边缘或右边缘触及包含块或另一个浮动框的边缘。**

语法：

```css
 选择器 { float: 属性值; }
```
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571543209934.png)

<!-- <cp by csdn> -->

在了解什么是浮动之前先了解一下html元素在普通流排列方式。

在普通流中，元素是按照它在 HTML 中的出现的先后顺序自上而下依次排列布局的，在排列过程中所有的行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为一整行。如果没有特殊样式指定，所有元素默认都是按照普通流方式排列布局，即普通流中元素的位置由该元素在 HTML 文档中的位置决定的。

浮动使元素脱离文档普通流，漂浮在普通流之上的。浮动元素依然按照其在普通流的位置上出现，然后尽可能的根据设置的浮动方向向左或者向右浮动，直到浮动元素的外边缘遇到包含框或者另一个浮动元素为止，且允许文本和内联元素环绕它。浮动会产生块级框（相当于设置了display:block），而不管该元素本身是什么。


为什么需要浮动？

eg.针对于一个花店的导航页，存在许多的图片显示，而有效并且美观的布局样式极为重要，这时float属性就显得尤为重要。



为什么要清楚浮动？

浮动导致元素已不在普通流中，所以在排列布局的时候文档中的普通流表现的和浮动元素不存在一样，当浮动元素的高度超出包含框的时候，会出现包含框不会自动撑高来包裹浮动元素，即所谓的“高度塌陷”。



### 5、浮动特性

加了浮动之后的元素,会具有很多特性,需要我们掌握的.

1、浮动元素会脱离标准流(脱标：浮动的盒子不再保留原先的位置)

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571544664994.png)

2、浮动的元素会一行内显示并且元素顶部对齐

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571544725757.png)

注意： 

浮动的元素是互相贴靠在一起的（不会有缝隙），如果父级宽度装不下这些浮动的盒子，多出的盒子会另起一行对齐。

3、浮动的元素会具有行内块元素的特性

- 浮动元素的大小根据内容来决定

- 浮动的盒子中间是没有缝隙的

### 6、浮动元素经常和标准流父级搭配使用

为了约束浮动元素位置, 网页布局一般采取的策略是:

​先用标准流父元素排列上下位置, 之后内部子元素采取浮动排列左右位置.  符合网页布局第一准则

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571544991989.png)


## 二、常见网页布局

### 浮动布局注意点

1、浮动和标准流的父盒子搭配。

先用标准流的父元素排列上下位置, 之后内部子元素采取浮动排列左右位置

2、一个元素浮动了，理论上其余的兄弟元素也要浮动。

一个盒子里面有多个子盒子，如果其中一个盒子浮动了，其他兄弟也应该浮动，以防止引起问题。

浮动的盒子只会影响浮动盒子后面的标准流,不会影响前面的标准流.

## 三、清除浮动

[可参考文章](https://blog.csdn.net/asfcyg/article/details/109248984?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162729822216780262561695%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=162729822216780262561695&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-5-109248984.pc_search_result_control_group&utm_term=CSS%E5%A1%8C%E9%99%B7%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D&spm=1018.2226.3001.4187)

### 1、为什么需要清除浮动？

​由于父级盒子很多情况下，不方便给高度，但是子盒子浮动又不占有位置，最后父级盒子高度为 0 时，就会影响下面的标准流盒子。

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571555883628.png)


浮动导致元素已不在普通流中，所以在排列布局的时候文档中的普通流表现的和浮动元素不存在一样，当浮动元素的高度超出包含框的时候，会出现包含框不会自动撑高来包裹浮动元素，即所谓的“高度塌陷”。



### 2、清除浮动本质

清除浮动的本质是清除浮动元素造成的影响：**浮动的子标签无法撑开父盒子的高度**

注意：

- 如果父盒子本身有高度，则不需要清除浮动
- 清除浮动之后，父级就会根据浮动的子盒子自动检测高度。
- 父级有了高度，就不会影响下面的标准流了

### 3、清除浮动样式

语法：

```css
 选择器{clear:属性值;} 
```
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571555980419.png)

我们实际工作中， 几乎只用 clear: both;

清除浮动的策略是:  闭合浮动. 

### 4、清除浮动的多种方式

#### 4.1、额外标签法

额外标签法也称为隔墙法，是 W3C 推荐的做法。

使用方式：

​		额外标签法会在浮动元素末尾添加一个空的标签。

```html
例如 <div style="clear:both"></div>，或者其他标签（如<br />等）。
```

​		优点： 通俗易懂，书写方便

​		缺点： 添加许多无意义的标签，结构化较差

​		注意： 要求这个新的空标签必须是块级元素。

总结:

​	1、清除浮动本质是?

​			清除浮动的本质是清除浮动元素脱离标准流造成的影响

​	2、清除浮动策略是?

​			闭合浮动.  只让浮动在父盒子内部影响,不影响父盒子外面的其他盒子.

​	3、额外标签法?

​			隔墙法, 就是在最后一个浮动的子元素后面添加一个额外标签`<div style="clear:both"></div>`, 添加 清除浮动样式.

​			实际工作可能会遇到,但是不常用

#### 4.2、父级添加 overflow 属性

可以给父级添加 overflow 属性，将其属性值设置为 hidden、 auto 或 scroll 。

例如：

```css
overflow:hidden | auto | scroll;
```

优点：代码简洁

缺点：无法显示溢出的部分

注意：是给父元素添加代码

#### 4.3、父级添加after伪元素

:after 方式是额外标签法的升级版。给父元素添加：

```css
 .clearfix:after {  
   content: ""; 
   display: block; 
   height: 0; 
   clear: both; 
   visibility: hidden;  
 } 
 .clearfix {  /* IE6、7 专有 */ 
   *zoom: 1;
 }   
```

优点：没有增加标签，结构更简单

缺点：照顾低版本浏览器

代表网站： 百度、淘宝网、网易等

#### 4.4、父级添加双伪元素

给父元素添加

```css
 .clearfix:before,.clearfix:after {
   content:"";
   display:table; 
 }
 .clearfix:after {
   clear:both;
 }
 .clearfix {
    *zoom:1;
 }   
```

优点：代码更简洁

缺点：照顾低版本浏览器

代表网站：小米、腾讯等

### 总结

为什么需要清除浮动？

1. 父级没高度。
2. 子盒子浮动了。
3. 影响下面布局了，就应该清除浮动了。

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571556500074.png)

## 四、定位(position)

### 为什么使用定位

> 我们先来看一个效果，同时思考一下**用标准流或浮动能否实现类似的效果**？

**场景1**： 某个元素可以自由的在一个盒子内移动位置，并且压住其他盒子.


**场景2**：当我们滚动窗口的时候，盒子是固定屏幕某个位置的。
![](https://gitee.com/leelillian/picgorepo/raw/master/images/ding.png)

> 结论**：要实现以上效果，**标准流 或 浮动都无法快速实现

所以：

1.浮动可以让多个块级盒子一行没有缝隙排列显示， 经常用于横向排列盒子。

2.定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。



### 定位组成

**定位**：将盒子**定**在某一个位置，所以**定位也是在摆放盒子， 按照定位的方式移动盒子**

定位也是用来布局的，它有两部分组成：

> **定位 = 定位模式 + 边偏移**  

**定位模式** 用于指定一个元素在文档中的定位方式。**边偏移**则决定了该元素的最终位置。



#### 边偏移（方位名词）

**边偏移** 就是定位的盒子移动到最终位置。有 top、bottom、left 和 right  4 个属性。

| 边偏移属性    | 示例             | 描述                               |
| -------- | :------------- | -------------------------------- |
| `top`    | `top: 80px`    | **顶端**偏移量，定义元素相对于其父元素**上边线的距离**。 |
| `bottom` | `bottom: 80px` | **底部**偏移量，定义元素相对于其父元素**下边线的距离**。 |
| `left`   | `left: 80px`   | **左侧**偏移量，定义元素相对于其父元素**左边线的距离**。 |
| `right`  | `right: 80px`  | **右侧**偏移量，定义元素相对于其父元素**右边线的距离**  |

定位的盒子有了边偏移才有价值。 一般情况下，凡是有定位地方必定有边偏移。

#### 定位模式 (position)

在 CSS 中，通过 `position` 属性定义元素的**定位模式**，语法如下：

```css
选择器 { 
    position: 属性值; 
}
```
定位模式是有不同分类的，在不同情况下，我们用到不同的定位模式。

定位模式决定元素的定位方式 ，它通过 CSS 的 position 属性来设置，其值可以分为四个：

| 值          |    语义    |
| ---------- | :------: |
| `static`   | **静态**定位 |
| `relative` | **相对**定位 |
| `absolute` | **绝对**定位 |
| `fixed`    | **固定**定位 |

![](https://gitee.com/leelillian/picgorepo/raw/master/images/26定位的概念.png)

### 定位模式介绍

#### 静态定位(static) - 了解

- **静态定位**是元素的**默认**定位方式，**无定位的意思**。它相当于 border 里面的none，静态定位static，不要定位的时候用。

- 语法：

  ```
  选择器 { 
      position: static; 
  }
  ```

- 静态定位 按照标准流特性摆放位置，它没有边偏移。

- 静态定位在布局时我们几乎不用的 

#### 相对定位(relative) - 重要

- **相对定位**是元素在移动位置的时候，是相对于它自己**原来的位置**来说的（自恋型）。
- 语法：

```css
选择器 { 
	position: relative; 
}
```

- 相对定位的特点：（务必记住）

  - 1.它是相对于自己原来的位置来移动的（移动位置的时候参照点是自己原来的位置）。

  - 2.**原来**在标准流的**位置**继续占有，后面的盒子仍然以标准流的方式对待它。

    因此，**相对定位并没有脱标**。它最典型的应用是给绝对定位当爹的。。。

- 效果图：

![](https://gitee.com/leelillian/picgorepo/raw/master/images/04_相对定位案例.png)



#### 绝对定位(absolute) - 重要  

##### 绝对定位的介绍

- **绝对定位**是元素在移动位置的时候，是相对于它**祖先元素**来说的（拼爹型）。

- 语法：
```css
   选择器 { 
   	position: absolute; 
   }
```


1. **完全脱标** —— 完全不占位置；  

2. **父元素没有定位**，则以**浏览器**为准定位（Document 文档）。
![](https://gitee.com/leelillian/picgorepo/raw/master/images/05_绝对定位_父级无定位.png)


3. **父元素要有定位**

   * 元素将依据最近的已经定位（绝对、固定或相对定位）的父元素（祖先）进行定位。
![](https://gitee.com/leelillian/picgorepo/raw/master/images/06_绝对定位_父级有定位.png)





- **绝对定位的特点总结**：（务必记住）

  1.如果**没有祖先元素**或者**祖先元素没有定位**，则以浏览器为基准定位（Document 文档）。

  2.如果祖先元素有定位（相对、绝对、固定定位），则以最近一级的有定位祖先元素为参考点移动位置。

  3.绝对定位**不再占有原先的位置**。所以绝对定位是脱离标准流的。（脱标）





##### 定位口诀 —— 子绝父相

弄清楚这个口诀，就明白了绝对定位和相对定位的使用场景。

这个**“子绝父相”**太重要了，是我们学习定位的**口诀**，是定位中最常用的一种方式这句话的意思是：**子级是绝对定位的话，父级要用相对定位。**

因为绝对定位的盒子是拼爹的，所以要和父级搭配一起来使用。

①子级绝对定位，不会占有位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子。

②父盒子需要加定位限制子盒子在父盒子内显示。

③父盒子布局时，需要占有位置，因此父亲只能是相对定位。



这就是子绝父相的由来，所以**相对定位经常用来作为绝对定位的父级**。

总结： **因为父级需要占有位置，因此是相对定位， 子盒子不需要占有位置，则是绝对定位**

当然，子绝父相不是永远不变的，如果父元素不需要占有位置，**子绝父绝**也会遇到。

---


**疑问**：为什么在布局时，**子级元素**使用**绝对定位**时，**父级元素**就要用**相对定位**呢？

观察下图，思考一下在布局时，**左右两个方向的箭头图片**以及**父级盒子**的定位方式。
![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220301184713.png)

**分析**：

1. **方向箭头**叠加在其他图片上方，应该使用**绝对定位**，因为**绝对定位完全脱标**，完全不占位置。
2. **父级盒子**应该使用**相对定位**，因为**相对定位不脱标**，后续盒子仍然以标准流的方式对待它。
   * 如果父级盒子也使用**绝对定位**，会完全脱标，那么下方的**广告盒子**会上移，这显然不是我们想要的。

**结论**：**父级要占有位置，子级要任意摆放**，这就是**子绝父相**的由来。



#### 固定定位(fixed) - 重要

- **固定定位**是元素**固定于浏览器可视区的位置**。（认死理型）   主要使用场景： 可以在浏览器页面滚动时元素的位置不会改变。

- 语法：
```css
   选择器 { 
   	position: fixed; 
   }
```

- 固定定位的特点：（务必记住）：

  1.以浏览器的可视窗口为参照点移动元素。

  - 跟父元素没有任何关系
  - 不随滚动条滚动。

  2.固定定位**不在占有原先的位置**。

- 固定定位也是**脱标**的，其实**固定定位也可以看做是一种特殊的绝对定位**。（认死理型） 
  - **完全脱标**—— 完全不占位置；
  - 只认**浏览器的可视窗口** —— `浏览器可视窗口 + 边偏移属性` 来设置元素的位置；
    - 跟父元素没有任何关系；单独使用的
    - 不随滚动条滚动。

> 固定定位举例：

![](https://gitee.com/leelillian/picgorepo/raw/master/images/08_固定定位案例.png)

**提示**：IE 6 等低版本浏览器不支持固定定位。



#### 粘性定位(sticky) - 了解

- **粘性定位**可以被认为是相对定位和固定定位的混合。 Sticky  粘性的 

- 语法：
```css
   选择器 { 
       position: sticky; 
       top: 10px; 
   }
  
```

- 粘性定位的特点：

  1.以浏览器的可视窗口为参照点移动元素（固定定位特点）

  2.粘性定位占有原先的位置（相对定位特点）

  3.必须添加 top 、left、right、bottom **其中一个**才有效

  跟页面滚动搭配使用。 兼容性较差，IE 不支持。

  

#### 1定位总结

| **定位模式**          | **是否脱标**         | **移动位置**           | **是否常用**                 |
| --------------------- | -------------------- | ---------------------- | ---------------------------- |
| static   静态定位     | 否                   | 不能使用边偏移         | 很少                         |
| **relative 相对定位** | **否 (占有位置)**    | **相对于自身位置移动** | **基本单独使用**             |
| **absolute绝对定位**  | **是（不占有位置）** | **带有定位的父级**     | **要和定位父级元素搭配使用** |
| **fixed 固定定位**    | **是（不占有位置）** | **浏览器可视区**       | **单独使用，不需要父级**     |
| sticky 粘性定位       | 否   (占有位置)      | 浏览器可视区           | 当前阶段少                   |

- 一定记住 相对定位、固定定位、绝对定位 两个大的特点： 1. 是否占有位置（脱标否） 2. 以谁为基准点移动位置。

- 学习定位重点: 子绝父相。

- **注意：**

1. **边偏移**需要和**定位模式**联合使用，**单独使用无效**；
2. `top` 和 `bottom` 不要同时使用；
3. `left` 和 `right` 不要同时使用。



## 五、定位(position)的应用

### 固定定位小技巧： 固定在版心左侧位置。

小算法：

1.让固定定位的盒子 left: 50%.  走到浏览器可视区（也可以看做版心） 的一半位置。

2.让固定定位的盒子 margin-left: 版心宽度的一半距离。  多走 版心宽度的一半位置

就可以让固定定位的盒子**贴着版心右侧对齐**了。
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571388901848.png)

![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571389108805.png)



案例效果：
![](https://gitee.com/leelillian/picgorepo/raw/master/images/1571389241926.png)

```html
<style>
        .w {
            width: 800px;
            height: 1400px;
            background-color: pink;
            margin: 0 auto;
        }
        .fixed {
            position: fixed;
            /* 1. 走浏览器宽度的一半 */
            left: 50%;
            /* 2. 利用margin 走版心盒子宽度的一半距离 */
            margin-left: 405px;
            width: 50px;
            height: 150px;
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <div class="fixed"></div>
    <div class="w">版心盒子 800像素</div>
  
</body>
```



### 堆叠顺序（z-index）

- 在使用**定位**布局时，可能会**出现盒子重叠的情况**。此时，可以使用 **z-index** 来控制盒子的前后次序 (z轴)

- 语法：
```css
  选择器 { 
  	z-index: 1; 
  }
```

  

- `z-index` 的特性如下：
1. **属性值**：**正整数**、**负整数**或 **0**，默认值是 0，数值越大，盒子越靠上；	
2. 如果**属性值相同**，则按照书写顺序，**后来居上**；
3. 数字后面**不能加单位**。

**注意**：`z-index` 只能应用于**相对定位**、**绝对定位**和**固定定位**的元素，其他**标准流**、**浮动**和**静态定位**无效。



- 应用 `z-index` 层叠等级属性可以**调整盒子的堆叠顺序**。如下图所示：
![](https://gitee.com/leelillian/picgorepo/raw/master/images/12_zindex示意图.png)




## 六、定位(position)的拓展

### 绝对定位的盒子居中

> **注意**：加了**绝对定位/固定定位的盒子**不能通过设置 `margin: auto` 设置**水平居中**。
>
> 相对定位可以auto
>
> 但是可以通过以下计算方法实现水平和垂直居中，可以按照下图的方法：
![](https://gitee.com/leelillian/picgorepo/raw/master/images/10_绝对定位水平居中.png)


1. `left: 50%;`：让**盒子的左侧**移动到**父级元素的水平中心位置**；
2. `margin-left: -100px;`：让盒子**向左**移动**自身宽度的一半**。

**盒子居中定位示意图**
![](https://gitee.com/leelillian/picgorepo/raw/master/images/11_绝对定位居中示意图.png)

### 定位特殊特性

绝对定位和固定定位也和浮动类似。

1.行内元素添加绝对或者固定定位，可以直接设置高度和宽度。

2.块级元素添加绝对或者固定定位，如果不给宽度或者高度，默认大小是内容的大小。



display 是 显示模式， 可以改变显示模式有以下方式:

- 可以用inline-block  转换为行内块
- 可以用浮动 float 默认转换为行内块（类似，并不完全一样，因为浮动是脱标的）
- 绝对定位和固定定位也和浮动类似， 默认转换的特性 转换为行内块。

所以说， 一个行内的盒子，如果加了**浮动**、**固定定位**和**绝对定位**，不用转换，就可以给这个盒子直接设置宽度和高度等。

### 脱标的盒子不会触发外边距塌陷

浮动元素、**绝对定位(固定定位）**元素的都不会触发外边距合并的问题。 （以前是用padding border overflow解决的）

也就是说，我们给盒子改为了浮动或者定位，就不会有垂直**外边距合并的问题**了。



### 绝对定位（固定定位）会完全压住盒子

浮动元素不同，只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片）

但是绝对定位（固定定位） 会压住下面标准流所有的内容。

浮动之所以不会压住文字，因为浮动产生的目的**最初是为了做文字环绕效果的。 文字会围绕浮动元素**


## 七、网页布局总结

通过盒子模型，清楚知道大部分html标签是一个盒子。

通过CSS浮动、定位 可以让每个盒子排列成为网页。

一个完整的网页，是标准流、浮动、定位一起完成布局的，每个都有自己的专门用法。

### 标准流 

可以让盒子上下排列或者左右排列，**垂直的块级盒子显示就用标准流布局**。

### 浮动

可以让多个块级元素一行显示或者左右对齐盒子，**多个块级盒子水平显示就用浮动布局**

### 定位

定位最大的特点是有层叠的概念，就是可以让多个盒子前后叠压来显示。**如果元素自由在某个盒子内移动就用定位布局。**

<!--
 * @Description: 1.8.边框、阴影、浮动、清除浮动
 * @Author: Lillian
 * @Date: 2022-03-01 15:26:34
 * @LastEditTime: 2022-03-01 20:04:05
 * @Reference: 
-->