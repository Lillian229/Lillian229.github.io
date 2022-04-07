# 数据可视化
## Echarts
ECharts，一个使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖矢量图形库 [ZRender](https://github.com/ecomfe/zrender)，提供直观，交互丰富，可高度个性化定制的数据可视化图表。

- 是一个JS插件
- 性能好可流畅运行PC与移动设备
- 兼容主流浏览器
- 提供很多常用图表，且可**定制**。
  - [折线图](https://www.echartsjs.com/zh/option.html#series-line)、[柱状图](https://www.echartsjs.com/zh/option.html#series-bar)、[散点图](https://www.echartsjs.com/zh/option.html#series-scatter)、[饼图](https://www.echartsjs.com/zh/option.html#series-pie)、[K线图](https://www.echartsjs.com/zh/option.html#series-candlestick)

## Echarts简单体验
官方教程：[五分钟上手ECharts](https://www.echartsjs.com/zh/tutorial.html#5 分钟上手 ECharts)

动手尝试：
1. 下载echarts  https://github.com/apache/incubator-echarts/tree/4.5.0  
2. 引入echarts  `dist/echarts.min.js`
3. 准备一个具备大小的DOM容器
```html
<div id="main" style="width: 600px;height:400px;"></div>
```
4. 初始化echarts实例对象

```js
var myChart = echarts.init(document.getElementById('main'));
```

5. 指定配置项和数据(option)

```js
var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
```

6. 将配置项设置给echarts实例对象

```js
myChart.setOption(option);
```

## Echarts基本配置
需要了解的主要配置：`series` `xAxis` `yAxis` `grid` `tooltip` `title` `legend` `color` 

- series
  - 系列列表。每个系列通过 `type` 决定自己的图表类型
  - 大白话：图标数据，指定什么类型的图标，可以多个图表重叠。

- xAxis：直角坐标系 grid 中的 x 轴

  -  boundaryGap: 坐标轴两边留白策略 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。

- yAxis：直角坐标系 grid 中的 y 轴

- grid：直角坐标系内绘图网格。 

- title：标题组件

- tooltip：提示框组件

- legend：图例组件

- color：调色盘颜色列表

  数据堆叠，同个类目轴上系列配置相同的`stack`值后 后一个系列的值会在前一个系列的值上相加。


演示代码：

```js
var option = {
            color: ['pink', 'blue', 'green', 'skyblue', 'red'],
            title: {
                text: '我的折线图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['直播营销', '联盟广告', '视频广告', '直接访问']
            },
            grid: {
                left: '3%',
                right: '3%',
                bottom: '3%',
                // 当刻度标签溢出的时候，grid 区域是否包含坐标轴的刻度标签。如果为true，则显示刻度标签
                // 如果left right等设置为 0% 刻度标签就溢出了，此时决定是否显示刻度标签
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                // 坐标轴两边留白策略 true，这时候刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
                boundaryGap: false,
                data: ['星期一', '星期二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '直播营销',
                    // 图表类型是线形图
                    type: 'line',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',

                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',

                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',

                    data: [320, 332, 301, 334, 390, 330, 320]
                }
            ]
        };
```


## REM适配

- 设计稿是1920px  

- PC端适配： 宽度在 1024~1920之间页面元素宽高自适应

  1. flexible.js 把屏幕分为 24 等份

  2. cssrem 插件的基准值是  80px 

     插件-配置按钮---配置扩展设置--Root Font Size 里面 设置。 

     但是别忘记重启vscode软件保证生效

  3. 要把屏幕宽度约束在1024~1920之间有适配，实现代码：

```js
// 实现rem适配
@media screen and (max-width: 1024px) {
     html {
         font-size: 42.66px !important;
     }
 }

 @media screen and (min-width: 1920px) {
     html {
         font-size: 80px !important;
     }
 }
```
