(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{461:function(t,a,s){"use strict";s.r(a);var e=s(34),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_1-19-flex布局-弹性布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-19-flex布局-弹性布局"}},[t._v("#")]),t._v(" 1.19.flex布局（弹性布局）")]),t._v(" "),s("h2",{attrs:{id:"一、传统布局和flex布局对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、传统布局和flex布局对比"}},[t._v("#")]),t._v(" 一、传统布局和flex布局对比")]),t._v(" "),s("h3",{attrs:{id:"_1-1传统布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1传统布局"}},[t._v("#")]),t._v(" 1.1传统布局")]),t._v(" "),s("ul",[s("li",[t._v("兼容性好")]),t._v(" "),s("li",[t._v("布局繁琐")]),t._v(" "),s("li",[t._v("局限性，不能再移动端很好的布局")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-flex布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-flex布局"}},[t._v("#")]),t._v(" 1.2 flex布局")]),t._v(" "),s("ul",[s("li",[t._v("操作方便，布局极其简单，移动端使用比较广泛")]),t._v(" "),s("li",[t._v("pc端浏览器支持情况比较差")]),t._v(" "),s("li",[t._v("IE11或更低版本不支持flex或仅支持部分")])]),t._v(" "),s("h3",{attrs:{id:"_1-3-建议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-建议"}},[t._v("#")]),t._v(" 1.3 建议")]),t._v(" "),s("ul",[s("li",[t._v("如果是pc端页面布局，还是采用传统方式")]),t._v(" "),s("li",[t._v("如果是移动端或者是不考虑兼容的pc则采用flex")])]),t._v(" "),s("h2",{attrs:{id:"二、flex布局原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、flex布局原理"}},[t._v("#")]),t._v(" 二、flex布局原理")]),t._v(" "),s("ul",[s("li",[t._v('flex 是 flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为 flex 布局。')]),t._v(" "),s("li",[t._v("当为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。")]),t._v(" "),s("li",[t._v("flex布局又叫伸缩布局 、弹性布局 、伸缩盒布局 、弹性盒布局")]),t._v(" "),s("li",[t._v('采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex\nitem），简称"项目"。')])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220306193651.png",alt:""}}),t._v(" "),s("strong",[t._v("总结")]),t._v("：就是"),s("strong",[t._v("通过给父盒子添加flex属性，来控制子盒子的位置和排列方式")])]),t._v(" "),s("h2",{attrs:{id:"三、父项常见属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、父项常见属性"}},[t._v("#")]),t._v(" 三、父项常见属性")]),t._v(" "),s("ul",[s("li",[t._v("flex-direction：设置主轴的方向")]),t._v(" "),s("li",[t._v("justify-content：设置主轴上的子元素排列方式")]),t._v(" "),s("li",[t._v("flex-wrap：设置子元素是否换行")]),t._v(" "),s("li",[t._v("align-content：设置侧轴上的子元素的排列方式（多行）")]),t._v(" "),s("li",[t._v("align-items：设置侧轴上的子元素排列方式（单行）")]),t._v(" "),s("li",[t._v("flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap")])]),t._v(" "),s("h3",{attrs:{id:"_3-1-flex-direction设置主轴的方向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-flex-direction设置主轴的方向"}},[t._v("#")]),t._v(" 3.1 flex-direction设置主轴的方向")]),t._v(" "),s("p",[t._v("(1) 主轴与侧轴\n在 flex 布局中，是分为主轴和侧轴两个方向，同样的叫法有 ： 行和列、x 轴和y 轴")]),t._v(" "),s("ul",[s("li",[t._v("默认主轴方向就是 x 轴方向，水平向右")]),t._v(" "),s("li",[t._v("默认侧轴方向就是 y 轴方向，水平向下")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/1.jpg",alt:""}})]),t._v(" "),s("p",[t._v("（2）属性值")]),t._v(" "),s("p",[t._v("flex-direction 属性决定主轴的方向（即：项目的排列方向）")]),t._v(" "),s("ul",[s("li",[t._v("注意： 主轴和侧轴是会变化的，就看 flex-direction 设置谁为主轴，剩下的就是侧轴。而我们的子元素是跟着主轴来排列的")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("row")]),t._v(" "),s("td",[t._v("从左到右（默认值）")])]),t._v(" "),s("tr",[s("td",[t._v("row-reverse")]),t._v(" "),s("td",[t._v("从右到左")])]),t._v(" "),s("tr",[s("td",[t._v("column")]),t._v(" "),s("td",[t._v("从上到下")])]),t._v(" "),s("tr",[s("td",[t._v("column-reverse")]),t._v(" "),s("td",[t._v("从下到上")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-2-justify-content-设置主轴上的子元素排列方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-justify-content-设置主轴上的子元素排列方式"}},[t._v("#")]),t._v(" 3.2 justify-content 设置主轴上的子元素排列方式")]),t._v(" "),s("p",[t._v("justify-content 属性定义了项目在主轴上的对齐方式")]),t._v(" "),s("p",[t._v("注意：使用这个属性之前一定要确定好主轴是哪个！")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("flex-start")]),t._v(" "),s("td",[t._v("从头部开始，如果主轴是 x轴，则从左到右（默认值）")])]),t._v(" "),s("tr",[s("td",[t._v("flex-end")]),t._v(" "),s("td",[t._v("从尾部开始排列")])]),t._v(" "),s("tr",[s("td",[t._v("center")]),t._v(" "),s("td",[t._v("在主轴居中对齐（如果主轴是 x轴 则 水平居中）")])]),t._v(" "),s("tr",[s("td",[t._v("space-around")]),t._v(" "),s("td",[t._v("平分剩余空间")])]),t._v(" "),s("tr",[s("td",[t._v("space-between")]),t._v(" "),s("td",[t._v("先两边贴边再平方剩余空间（重要）")])])])]),t._v(" "),s("p",[t._v("space-around中间盒子的空隙是两份")]),t._v(" "),s("p",[t._v("ps: space-evenly平分多余的间隙")]),t._v(" "),s("h3",{attrs:{id:"_3-3-flex-wrap设置是否换行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-flex-wrap设置是否换行"}},[t._v("#")]),t._v(" 3.3 flex-wrap设置是否换行")]),t._v(" "),s("ul",[s("li",[t._v("默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，flex布局中默认是不换行的。\n"),s("ul",[s("li",[t._v("nowrap 不换行")]),t._v(" "),s("li",[t._v("wrap 换行")]),t._v(" "),s("li",[t._v("wrap-reverse")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-4-align-items-设置侧轴上的子元素排列方式-单行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-align-items-设置侧轴上的子元素排列方式-单行"}},[t._v("#")]),t._v(" 3.4 align-items 设置侧轴上的子元素排列方式（单行 ）")]),t._v(" "),s("ul",[s("li",[t._v("该属性是控制子项在侧轴（默认是y轴）上的排列方式  在子项为单项（单行）的时候使用")]),t._v(" "),s("li",[t._v("flex-start 从头部开始")]),t._v(" "),s("li",[t._v("flex-end 从尾部开始")]),t._v(" "),s("li",[t._v("center 居中显示**(水平垂直居中显示)**")]),t._v(" "),s("li",[t._v("stretch 拉伸 "),s("strong",[t._v("（默认）")])])]),t._v(" "),s("h3",{attrs:{id:"_3-5-align-content-设置侧轴上的子元素的排列方式-多行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-align-content-设置侧轴上的子元素的排列方式-多行"}},[t._v("#")]),t._v(" 3.5 align-content  设置侧轴上的子元素的排列方式（多行）")]),t._v(" "),s("p",[s("strong",[t._v("多行，多行，多行才生效")])]),t._v(" "),s("p",[t._v("设置子项在侧轴上的排列方式 并且只能用于子项出现 "),s("strong",[t._v("换行")]),t._v(" 的情况（多行），在单行下是没有效果的。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("flex-start")]),t._v(" "),s("td",[t._v("在侧轴的头部开始排列")])]),t._v(" "),s("tr",[s("td",[t._v("flex-end")]),t._v(" "),s("td",[t._v("在侧轴的尾部开始排列")])]),t._v(" "),s("tr",[s("td",[t._v("center")]),t._v(" "),s("td",[t._v("在侧轴中间显示")])]),t._v(" "),s("tr",[s("td",[t._v("space-around")]),t._v(" "),s("td",[t._v("子项在侧轴平分剩余空间")])]),t._v(" "),s("tr",[s("td",[t._v("space-between")]),t._v(" "),s("td",[t._v("子项在侧轴先分布在两头，再平分剩余空间")])]),t._v(" "),s("tr",[s("td",[t._v("stretch")]),t._v(" "),s("td",[t._v("行拉伸以占据剩余空间（默认值）")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-6-align-content-和align-items区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-align-content-和align-items区别"}},[t._v("#")]),t._v(" 3.6 align-content 和align-items区别")]),t._v(" "),s("ul",[s("li",[t._v("align-items  适用于单行情况下， 只有上对齐、下对齐、居中和 拉伸")]),t._v(" "),s("li",[t._v("align-content适应于换行（多行）的情况下（单行情况下无效）， 可以设置 上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值。")]),t._v(" "),s("li",[t._v("总结就是单行找align-items  多行找 align-content")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220306195032.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-7-flex-flow-属性是-flex-direction-和-flex-wrap-属性的复合属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-flex-flow-属性是-flex-direction-和-flex-wrap-属性的复合属性"}},[t._v("#")]),t._v(" 3.7 flex-flow 属性是 flex-direction 和 flex-wrap 属性的复合属性")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-flow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("row wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"四、flex布局子项常见属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、flex布局子项常见属性"}},[t._v("#")]),t._v(" 四、flex布局子项常见属性")]),t._v(" "),s("ul",[s("li",[t._v("flex"),s("strong",[t._v("子项目占的份数")])]),t._v(" "),s("li",[t._v("align-self控制子项自己在侧轴的排列方式")]),t._v(" "),s("li",[t._v("order属性定义子项的排列顺序（前后顺序）")])]),t._v(" "),s("h3",{attrs:{id:"_4-1-flex-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-flex-属性"}},[t._v("#")]),t._v(" 4.1  flex 属性")]),t._v(" "),s("p",[t._v("flex 属性定义子项目"),s("strong",[t._v("分配剩余空间")]),t._v("，用flex来表示占多少份数。")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <number>"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 默认值 0 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"_4-2-align-self控制子项自己在侧轴上的排列方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-align-self控制子项自己在侧轴上的排列方式"}},[t._v("#")]),t._v(" 4.2 align-self控制子项自己在侧轴上的排列方式")]),t._v(" "),s("p",[t._v("align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。")]),t._v(" "),s("p",[t._v("默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("span:nth-child(2)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置自己在侧轴上的排列方式 */")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-self")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-end"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"_4-3-order-属性定义项目的排列顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-order-属性定义项目的排列顺序"}},[t._v("#")]),t._v(" 4.3 order 属性定义项目的排列顺序")]),t._v(" "),s("p",[t._v("数值越小，排列越靠前，默认为0。")]),t._v(" "),s("p",[t._v("注意：和 z-index 不一样。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(".item {\n    order: <number>;\n}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"_4-4-背景线性渐变色-实质上是一张图片-不能用background-color"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-背景线性渐变色-实质上是一张图片-不能用background-color"}},[t._v("#")]),t._v(" 4.4  背景线性渐变色（实质上是一张图片，不能用background-color)")]),t._v(" "),s("p",[t._v("语法")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("linear-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("起始方向"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 颜色1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 颜色2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("-webkit-linear-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" red "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("-webkit-linear-gradient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" red "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("更复杂样式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("背景渐变必须添加浏览器私有前缀")])]),t._v(" "),s("li",[s("p",[t._v("起始方向可以是： 方位名词（过时） 或者 "),s("strong",[t._v("度数")]),t._v("（用角度不用加浏览器私有前缀） ， 如果省略默认就是 top")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);