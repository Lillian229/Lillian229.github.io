# Markdown的使用
## Markdown是什么？
Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素。Markdown 由 John Gruber 于 2004 年创建，如今已成为世界上最受欢迎的标记语言之一。
1. 专注于文字内容；
2. 纯文本，易读易写，可以方便地纳入版本控制；
3. 语法简单，没有什么学习成本，能轻松在码字的同时做出美观大方的排版。
依赖于你所使用的应用程序，你可能无法实时预览格式化的文档。Markdown 的语法被设计为可读性强且不显眼，因此即使 Markdown 文件中的文本未经过渲染也易于阅读。

## 为什么要使用Markdown?
- Markdown 无处不在。StackOverflow、CSDN、掘金、简书、GitBook、有道云笔记、V2EX、光谷社区等。主流的代码托管平台，如 GitHub、GitLab、BitBucket、Coding、Gitee 等等，都支持 Markdown 语法，很多开源项目的 README、开发文档、帮助文档、Wiki 等都用 Markdown 写作。

- Markdown 是纯文本可移植的。几乎可以使用任何应用程序打开包含 Markdown 格式的文本文件。如果你不喜欢当前使用的 Markdown 应用程序了，则可以将 Markdown 文件导入另一个 Markdown 应用程序中。这与 Microsoft Word 等文字处理应用程序形成了鲜明的对比，Microsoft Word 将你的内容锁定在专有文件格式中。

- Markdown 是独立于平台的。你可以在运行任何操作系统的任何设备上创建 Markdown 格式的文本。

- Markdown 能适应未来的变化。即使你正在使用的应用程序将来会在某个时候不能使用了，你仍然可以使用文本编辑器读取 Markdown 格式的文本。当涉及需要无限期保存的书籍、大学论文和其他里程碑式的文件时，这是一个重要的考虑因素。

## Markdown练习器
[在线练习地址](https://markdown.com.cn/editor/)

## Markdown工作原理
在使用 Markdown 格式书写时，文本内容存储在带有 `.md` 或 `.markdown` 扩展名的纯文本文件中。那然后呢？你的 Markdown 格式的文件如何转换为 HTML 或可打印的文档呢？

简单来说，你需要一个能够处理 Markdown 文件的 Markdown 应用程序。有许多应用程序可供选择，从简单的脚本到类似于 Microsoft Word 的桌面应用程序。尽管它们在视觉上有所不同，但所有应用程序都执行相同的操作。像 在线 Markdown 编辑器 一样，它们都是将 Markdown 格式的文本转换为 HTML，以便可以在 Web 浏览器中显示。

Markdown 应用程序使用一种称为 Markdown 处理器（也通常称为“解析器”或“实现”）的东西将获取到的 Markdown 格式的文本输出为 HTML 格式。此时，可以在 Web 浏览器中查看你的文档，或者将其与样式表组合并打印。你可以在下图看到此过程的直观表示。

注意： Markdown 应用程序和处理器是两个单独的组件。为了简洁起见，在下图中，我将它们组合为一个元素（即 “Markdown应用程序”）。
![](https://gitee.com/leelillian/picgorepo/raw/master/images/20220225230627.png)
总而言之，这是一个四步的过程：
1. 使用文本编辑器或 Markdown 专用的应用程序创建 Markdown 文件。该文件应带有 `.md` 或 `.markdown` 扩展名。
2. 在 Markdown 应用程序中打开 Markdown 文件。
3. 使用 Markdown 应用程序将 Markdown 文件转换为 HTML 文档。
4. 在 web 浏览器中查看 HTML 文件，或使用 Markdown 应用程序将其转换为其他文件格式，例如 PDF。

## Markdown 有什么用?
Markdown 是做笔记、为网站创建内容以及生成可打印文档的快速、简便的方法。

- 网站

    Markdown 是为 web 而设计的，市面上有很多专门用于创建网站内容的应用程序。

    熟悉 HTML、CSS和版本管理工具，——[Jekyll] -> 一个广受欢迎的静态网站生成器，它能将 Markdown 文件并构建为 HTML 网站。
    这种方法的优势之一是 [GitHub Pages] 为 Jekyll 生成的网站提供免费托管服务。

    WordPress —— 可以使用 `Jetpack`插件实现对 Markdown 的支持。

- 文件资料

    可以使用 Markdown 文档创作工具来创建 Markdown 格式的文档，并将其导出为 PDF 或 HTML 格式。PDF 格式是关键，因为一旦有了 PDF 文档，可以使用它进行任何操作：打印、通过电子邮件发送或将其上传到网站。
    - 现代编辑器
    VSCode / Atom

    - 传统编辑器
    Vim / Emacs / Sublime Text / Notepad++

    - IDE 自带编辑器
    IntelliJ IDEA / Android Studio / WebStorm

    - 专用编辑器
    Ulysses / Mou / Typora / Markpad / Obsidian

    - [在线编辑器](https://markdown.com.cn/editor/)
- 文档

    Markdown 非常适合技术文档。像 [GitHub](https://github.blog/2015-01-06-how-github-uses-github-to-document-github/) 越来越多地转向使用 Markdown 来创建其文档了。
- 邮件

    使用 Markdown 编写电子邮件的简便方法：[Markdown Here] 是一个免费、开源的浏览器扩展程序，可将 Markdown 格式的文本转换为可用于发送的 HTML。

## Markdown基础语法(和HTML对比)
Markdown可以实现HTML标签效果
### 1. 标题（# 和 `<h1></h1>`标签）
---
- `#` (注意：`#`和文字间有空格)
```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```
- `<h1></h1> - <h6></h6>` 
```
<h1>一级标题</h1>
<h2>二级标题</h2>
...
```
### 2.段落
---
Markdown: 要创建段落，请使用**空白行**将一行或多行文本进行分隔。

不要用空格（spaces）或制表符（ tabs）缩进段落。

HTML: `<p></p>`



### 3.换行
---
在一行的末尾添加**两个或多个空格**，然后按回车键,即可创建一个换行(`<br>`)

为了兼容性，请在行尾添加“结尾空格”，HTML 的 `<br> `标签来实现换行。

### 4.强调
---
通过将文本设置为**粗体**或*斜体*来强调其重要性。

粗体(Bold)：`**`加粗内容`**`

HTML: `<strong>加粗内容</strong>`

斜体(Italic)：`*`斜体内容`*` / `_`斜体内容`_`

HTML: `<em>斜体内容</em>`

斜体 + 粗体：

1. `***`粗斜`***`(推)
2. `___`粗斜`___`
3. `__*`粗斜`*__`
4. `**_`粗斜`_**`

HTML: `<strong><em>粗斜</em></strong>`

### 5.引用
---
#### 块引用
要创建块引用，请在段落前添加一个 `>` 符号。

#### 多个段落块引用
块引用可以包含多个段落。为段落之间的空白行添加一个 `>` 符号。
```
> 段落一段落一段落一段落一段落一
>
> 段落二段落二段落二段落二段落二
```

#### 嵌套块引用
块引用可以嵌套。在要嵌套的段落前添加一个 `>>` 符号。
```
> 段落一
>
>> 嵌套段落
```

#### 带有其它元素的块引用
块引用可以包含其他 Markdown 格式的元素。并非所有元素都可以使用，你需要进行实验以查看哪些元素有效.
```
> #### 标题
>
> - 观点一
> - 观点二
>
>  *斜体* 一些内容 **加粗**
```

### 6. 列表
---
#### 有序列表
要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点 + 空格。数字不必按数学顺序排列，但是列表应当以数字 1 起始。缩进一个或多个列表项可创建嵌套列表。
```
写法一：
1. 观点一：
2. 观点二：
3. 观点三：
4. 观点四：
写法二：
1.
1.
1.
1.
写法三：
1.
4.
9.
2.
```

HTML: `<ol>`、`<li>`
```html
<ol>
    <li>观点一</li>
    <li>观点二</li>
    <li>观点三</li>
    ...
</ol>
```
显示出来的列表都是
1. 观点一：
2. 观点二：
3. 观点三：
4. 观点四：

#### 无序列表
要创建无序列表，在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表。
```
- 观点一：
- 观点二：
- 观点三：

+ 观点一：
+ 观点二：
+ 观点三：

* 观点一：
* 观点二：
* 观点三：

```

HTML：`<ul>`、`<li>`
```html
<ul>
    <li>观点一</li>
    <li>观点二</li>
    <li>观点三</li>
</ul>
```
显示效果：
- 观点一：
- 观点二：
- 观点三：

#### 在列表中嵌套其他元素
要在保留列表连续性的同时在列表中添加另一种元素，请将该元素缩进四个空格或一个制表符
- 段落<br>
    一个制表符
- 引用块<br>
    一个制表符 + `>`
- 代码块<br>
    代码块通常采用四个空格或一个制表符缩进。
    
    当它们被放在列表中时，请将它们缩进八个空格或两个制表符。
- 图片<br>
    制表符 + `![]()`
- 列表<br>
    制表符 + `-` / `+` / `*`



#### 定义列表
一些Markdown处理器允许创建术语及其对应定义的定义列表。要创建定义列表，请在第一行上键入术语。在下一行，键入一个冒号，后跟一个空格和定义。

Markdown: 
```
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

```
HTML:
```html
<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term. </dd>
  <dd>This is another definition of the second term.</dd>
</dl>
```
显示效果：

<dl>
  <dt>First Term</dt>
  <dd>This is the definition of the first term.</dd>
  <dt>Second Term</dt>
  <dd>This is one definition of the second term. </dd>
  <dd>This is another definition of the second term.</dd>
</dl>

#### 任务列表
创建带有复选框的任务列表：

选中： `- [] 显示内容`

未选中：`- [X] 显示内容`

```
- [x] Option1
- [ ] Option2
- [ ] Option3
```

### 7. 代码
---
要将单词或短语表示为代码，请将其包裹在反引号 (`) 中。

Markdown：<code>``</code>

HTML：`<code></code>`
#### 代码块
要创建代码块，请将代码块的每一行缩进至少四个空格或一个制表符。

#### 围栏代码块
代码块之前和之后的行上使用三个反引号（(```）或三个波浪号（~~~）

#### 代码块语法高亮
要添加语法突出显示，请在受防护的代码块之前的反引号旁边指定一种语言。
```
    ```html/css/java...
        代码
        代码
        代码
    ```
```

### 8. 分隔线
---
要创建分隔线，请在单独一行上使用三个或多个星号 (***)、破折号 (---) 或下划线 (___) ，并且不能包含其他内容。

### 9. 链接
---

链接文本放在中括号内，链接地址放在后面的括号中，链接title可选。
#### 格式
Markdown：`[超链接显示名](超链接地址 "超链接title")`

HTML：`<a href="超链接地址" title="超链接title">超链接显示名</a>`

#### 链接到标题ID
还可链接到标题id:

`[显示的文字](完整网址#标题)/(文件地址#标题)`

Markdown:
```
[Heading IDs](#heading-ids)
or
[Heading IDs](https://XXXXXX.com.cn/heading-ids.html#第一节)

```
HTML:
```html
<a href="#heading-ids">Heading IDs</a>

```
[用链接跳转到pdf指定页](./FAQ.md#obsidian中pdf跳转到指定页)


#### 网址和Email地址
使用尖括号`<网址url/email>`可以很方便地把URL或者email地址变成可点击的链接。
```
<https://xxxx.com.cn>
<xxxxx@example.com>

```
<https://xxxx.com.cn>

<xxxxx@example.com>

#### 可以带强调格式
强调 链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。

加粗：`**[]()**` **[加粗链接](#)**

斜体： `*[]()*`  *[斜体链接](#)*

将链接表示为代码：`` [`code`](#code) ``    [`code`](#)



不同的 Markdown 应用程序处理URL中间的空格方式不一样。为了兼容性，请尽量使用%20代替空格。

### 10.图片
---
Markdown：`![图片alt](图片链接 / "图片title")`。

HTML：`<img src="图片链接" alt="图片alt" title="图片title">`

### 11. 转义字符
---
要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符 `\` 。

#### 可做转义的字符
以下列出的字符都可以通过使用反斜杠字符从而达到转义目的
`\`
<code>`</code>

`*`
`_`
`{ }`
`[ ]`
`( )`
`#`
`+`
`-`
`.`
`!`
`|`

#### 特殊字符自动转义
在 HTML 文件中，有两个字符需要特殊处理： `<` 和 `&`

`<` 符号用于起始标签，`&` 符号则用于标记 HTML 实体，
 
如果只是想要使用这些符号，必须要使用实体的形式，像是 `&lt;` 和 `&amp;`。

写在网址内的`&`符号，要转换为`&amp;`,才能放到链接标签的 `href` 属性里。

Markdown 允许直接使用这些符号，会自动转义字符。

如果使用 & 符号的作为 HTML 实体的一部分，那么它不会被转换，而在其它情况下，它则会被转换成 &`amp;`。

所以如果要在文件中插入一个著作权的符号：`&copy;` -> &copy;

- 在 Markdown 的块级元素和内联元素中， < 和 & 两个符号都会被自动转换成 HTML 实体，这项特性让你可以很容易地用 Markdown 写 HTML。
- 在 HTML 语法中，你要手动把所有的 < 和 & 都转换为 HTML 实体。


### 12.内嵌 HTML 标签
---
对于 Markdown 涵盖范围之外的标签，都可以直接在文件里面用 HTML 本身。

如需使用 HTML，不需要额外标注这是 HTML 或是 Markdown，只需 HTML 标签添加到 Markdown 文本中即可。

#### 行内标签
HTML 的行级內联标签如 `<span>`、`<cite>`、`<del>` 不受限制，可以在 Markdown 的段落、列表或是标题里任意使用。以及`<a>`、`<img>`

#### 区块标签
对于 HTML 的块级元素 `<div>`、`<table>`、`<pre>` 和 `<p>`，请在其前后使用**空行**（blank lines）与其它内容进行分隔。尽量不要使用制表符（tabs）或空格（spaces）对 HTML 标签做缩进，否则将影响格式。


出于安全原因，并非所有 Markdown 应用程序都支持在 Markdown 文档中添加 HTML。如有疑问，请查看相应 Markdown 应用程序的手册。某些应用程序只支持 HTML 标签的子集。


在 HTML 块级标签内不能使用 Markdown 语法。例如 `<p>italic and **bold**</p>` 将不起作用

### 13.表格
---
要添加表，请使用三个或多个连字符（`---`）创建每列的标题，并使用管道（`|`）分隔每列。您可以选择在表的任一端添加管道。
```
| Num         | Name        |
| ----------- | ----------- |
| 1           | Lillian     |
| 2           | yaya        |

| Num    | Name        |
| ----------- | ----------- |
| 1      | Lillian     |
| 2       | yaya        |
```
单元格宽度可以变化，如下所示。呈现的输出将看起来相同。
| Num         | Name        |
| ----------- | ----------- |
| 1           | Lillian     |
| 2           | yaya        |

Tip: 使用连字符和管道创建表可能很麻烦。为了加快该过程，请尝试使用
1. [Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables)，使用图形界面构建表，然后将生成的Markdown格式的文本复制到文件中
2. [Quicker快捷动作](https://getquicker.net/Sharedaction?code=c2513b67-3c82-4ee3-fab7-08d92451edfb)(限win使用)

#### 对齐
您可以通过在标题行中的连字符的左侧，右侧或两侧添加冒号（:），将列中的文本对齐到左侧，右侧或中心。
```
| Num   | Name        | Gender   |
| :---- | :---------: |   -----: |
| 1     | Lillian     | female   |
| 2     | yaya        | female   |
```
| Num   | Name        | Gender   |
| :---- | :---------: |   -----: |
| 1     | Lillian     | female   |
| 2     | yaya        | female   |

#### 格式化表格中的文字
可以在表格中设置文本格式。例如，可以添加链接，代码（仅反引号（`）中的单词或短语，而不是代码块）和强调。

不能添加标题，块引用，列表，水平规则，图像或HTML标签。

#### 在表中转义管道字符
您可以使用表格的HTML字符代码（`&#124;`）在表中显示竖线（`|`）字符。

### 14. 删除线
删除内容用`~~删除的内容~~`包裹

~~删除的内容~~

### 15. emoji的写入
1. 复制粘贴
2. `:emoji表情符号名称:`，两个英文冒号包裹emoji名称，但要经过特定的markdown渲染器渲染，[emoji表情符号名称](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

    eg. `:100:` 、 `:star_struck:` 、 `:zany_face:`

    显示：💯 、 🤩 、 🤪
3. 系统自带的emoji输入
    - Win：`Windows图标 + ;`  /  `Windows + .`  
    - Mac：`⌘ + ⌃ + space` / `fn + e`

### 16. 在显示页面折叠内容

```
<details> 
	<summary>折叠时的提示文字</summary> 
	<pre><code> 
		//代码内容
		//代码内容
		//代码内容
	</code></pre> 
</details>
```
折叠显示效果：
<details> 
	<summary>折叠时的提示文字（点击左侧小三角）</summary> 
	<pre><code> 
		//代码内容
		//代码内容
		//代码内容
	</code></pre> 
</details>
<br>
注：
1. pre 元素可定义预格式化的文本。被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。

2. `<pre></pre>` 标签常见应用: 表示计算机的源代码。

3. 可以导致段落断开的标签（例如标题、`<p>` 和 `<address>` 标签）绝不能包含在 `<pre>` 所定义的块里。尽管有些浏览器会把段落结束标签解释为简单地换行，但是这种行为在所有浏览器上并不都是一样的。

4. pre 元素中允许的文本可以包括物理样式和基于内容的样式变化，还有链接、图像和水平分隔线。当把其他标签（比如 `<a>` 标签）放到 `<pre>` 块中时，就像放在 HTML/XHTML 文档的其他部分中一样即可。



<!--
 * @Description: Markdown的使用
 * @Author: Lillian
 * @Date: 2022-02-25 23:29:51
 * @LastEditTime: 2022-03-01 16:12:20
 * @Reference: 
-->