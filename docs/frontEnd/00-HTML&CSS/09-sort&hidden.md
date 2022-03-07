# 1.9.CSS的书写顺序、显示隐藏
## 一、CSS的书写顺序

建议遵循以下顺序：

1. **布局定位属性**：display / position / float / clear / visibility / overflow（建议 display 第一个写，毕竟关系到模式）
2. **自身属性**：width / height / margin / padding / border / background
3. **文本属性**：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. **其他属性（CSS3）**：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

**举例：**

```css
 .new {
    display: block;
    position: relative;
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px;
    padding: 20px 0;
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    color: #333;
    background: rgba(0,0,0,.5);
    border-radius: 10px;
 } 
```

## 二、元素的显示与隐藏

- 目的（本质）

  ​	让一个元素在页面中消失或者显示出来

- 场景

  ​	类似网站广告，当我们点击关闭就不见了，但是我们重新刷新页面，会重新出现！

### display 显示（重点）

- display 设置或检索对象是否及如何显示。

  ```
  display: none 隐藏对象
  
  display：block 除了转换为块级元素之外，同时还有显示元素的意思。
  ```

- 特点： display 隐藏元素后，**不再占**有原来的位置。

- 后面应用及其广泛，搭配 JS 可以做很多的网页特效。实际开发场景：

> 配合后面js做特效，比如下拉菜单，原先没有，鼠标经过，显示下拉菜单， 应用极为广泛

![](https://gitee.com/leelillian/picgorepo/raw/master/images/29none.png)

### visibility 可见性 （了解）

- visibility 属性用于指定一个元素应可见还是隐藏。

  ```
  visibility：visible ; 　元素可视
  
  visibility：hidden; 　  元素隐藏
  ```

- 特点：**visibility 隐藏元素后，继续占有原来的位置**。（停职留薪）

  
- 如果隐藏元素想要原来位置， 就用 visibility：hidden

- 如果隐藏元素不想要原来位置， 就用 display：none  (用处更多 重点）

![](https://gitee.com/leelillian/picgorepo/raw/master/images/30visibility.png)

### overflow 溢出（重点）

- overflow 属性指定了如果内容溢出一个元素的框（超过其指定高度及宽度） 时，会发生什么。

| 属性值      | 描述                                       |
| ----------- | ------------------------------------------ |
| **visible** | 不剪切内容也不添加滚动条                   |
| **hidden**  | 不显示超过对象尺寸的内容，超出的部分隐藏掉 |
| **scroll**  | 不管超出内容否，总是显示滚动条             |
| **auto**    | 超出自动显示滚动条，不超出不显示滚动条     |

-  一般情况下，我们都不想让溢出的内容显示出来，因为溢出的部分会影响布局。
- 但是如果有定位的盒子， 请慎用overflow:hidden  因为它会隐藏多余的部分。

![](https://gitee.com/leelillian/picgorepo/raw/master/images/33overflow.png)


- 实际开发场景：

1. 清除浮动
2. 隐藏超出内容，隐藏掉,  不允许内容超过父盒子。

### 显示与隐藏总结

| 属性                           | 区别                   | 用途                                                         |
| ------------------------------ | ---------------------- | ------------------------------------------------------------ |
| **display 显示     （重点）**  | 隐藏对象，不保留位置   | 配合后面js做特效，比如下拉菜单，原先没有，鼠标经过，显示下拉菜单， 应用极为广泛 |
| **visibility 可见性 （了解）** | 隐藏对象，保留位置     | 使用较少                                                     |
| **overflow 溢出（重点）**      | 只是隐藏超出大小的部分 | 1. 可以清除浮动  2. 保证盒子里面的内容不会超出该盒子范围     |

<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-03-01 17:06:04
 * @LastEditTime: 2022-03-01 19:26:59
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->