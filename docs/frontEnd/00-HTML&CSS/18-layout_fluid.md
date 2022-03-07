# 1.18.流式布局(百分比布局)
- 流式布局，就是百分比布局，也称非固定像素布局
- 通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限时，内容向两侧填充
- 流式布局方式是移动Web开发使用的比较常见的布局方式
- `max-width`最大宽度（`max-height`最大高度）
- `min-width`最小宽度（`min-height`最小高度）

例子：两个盒子并列，盒子随着屏幕窗口的缩放而缩放
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>流式布局</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        section {
            width: 100%;
            max-width: 980px;
            min-width: 320px;
            margin: 0 auto;
        }

        section div {
            float: left;
            width: 50%;
            height: 400px;
        }

        section div:nth-child(1) {
            background-color: pink;
        }

        section div:nth-child(2) {
            background-color: blue;
        }
    </style>
</head>

<body>
    <section>
        <div></div>
        <div></div>
    </section>
</body>

</html>
```

<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-03-06 18:26:05
 * @LastEditTime: 2022-03-06 19:14:54
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->
