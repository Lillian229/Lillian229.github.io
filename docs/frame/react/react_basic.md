# 1.React_basic

## 一、简介

- Origin：React 最初是 FaceBook 用于架构 Instagram，2013 年开源。

- 官网介绍：React——用于构建用户界面的 JavaScript 库。

- 核心：其只负责 MVC 中的视图层渲染，不直接提供数据模型和控制器功能。

- 目的：实现组件化开发

- React 本身是一个构建 UI 的库，如果需要开发一个完整的 web 应用需要配合 react-router 实现路由，redux 实现状态管理，...等。

## 二、特点

### 1.声明式

React 以声明式编写 UI，代码简洁可靠，当数据变动时能高效更新并渲染合适的组件，方便调试。

### 2.组件化

- 组件化的概念

可以将有一个复杂的页面分割成若干个独立的组件，每个组件包含自己的 html 结构、样式和 js 逻辑，然后再将这些组件组合，即可完成一个复杂的页面。这样既减少了逻辑的复杂度，又实现了代码的重用；

组件逻辑使用 JavaScript 编写而非模版，因此你可以轻松地在应用中传递数据，并使得状态与 DOM 分离。

- 组件化的优势：

1. 可组合：一个组件可以和其他组件一起使用或者可以直接嵌套在另一个组件内部
2. 可重用：每个组件都具有独立的功能，他可以被使用在多个场景中
3. 可维护：每个小的组件仅仅包含自身的逻辑，更容易被理解和维护

### 3.一次学习，跨平台编写

无论现在正在使用什么技术栈，都可以随时引入 React 来开发新特性，而不需要重写现有代码。 React 还可以使用 Node 进行服务器渲染，或使用 React Native 开发原生移动应用。

## 三、脚手架

创建项目：

- 全局安装脚手架再使用命令创建项目
- 使用 npx 远程调用脚手架创建项目

### 方式 1\_全局安装

```bash
# 全局安装脚手架
npm i create-react-app -g
```

创建项目

```bash
create-react-app 项目名称
```

### 方式 2_npx 安装

- npx 安装，npm5.2+支持
- npx——每次使用的最新脚手架创建项目

```bash
# project-name 项目名称
npx create-react-app 项目名称
```

依赖安装完成之后，执行

```bash
cd 项目名称
npm start
```

## 四、代码格式规范

1. 安装 vscode\_拓展`Prettier - Code formatter`(v9.5.0)
2. 将其他代码校验拓展关闭，只使用一个

## 五、React 组成部分

react 由两部分组成：

1. react.js 是 React 的核心库
2. react-dom.js 是提供与 DOM 相关的功能，会在 window 下增加 ReactDOM 属性；其中常用的是 render 方法，render 可以将 react 元素或者组件插入到页面中；

## 六、React 的基本使用

使用 react 创建元素，使用 react-dom 渲染元素。

步骤：

1. 导包：导入 `react` `react-dom` 两个包
2. 声明式创建元素：使用 `react` 创建 `react` 元素（虚拟 DOM）
3. 渲染元素：使用 `react-dom` 渲染 `react` 元素

代码：`src/index.js`

### 1.导包

⚠️⚠️⚠️ 注意：React v_18.x 以上的版本，导入`react-dom`为`react-dom/client`

```js
import React from "react";
// import ReactDom from "react-dom" // react 17.x
import ReactDom from "react-dom/client"; // react 17.x => react 18.x 的变化
```

### 2.创建元素\_虚拟 dom

- react 声明式 or 命令式
- 参数内容：
  - 参数 1：参数名称
  - 参数 2：属性集合 （特殊：class==>className for==>htmlFor）（class 在 React 中为关键字不能用于定义属性）
  - 参数 3：子节点内容(可以是一个数组，多个子节点)

```js
const element = React.createElement(
  "div",
  { id: "abc", className: "test" },
  "hello yaya"
); // 虚拟dom

// document.createElement() // 真实dom
```

### 3.渲染元素

```js
// #root在public/index.html上
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
```

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220426140628.png)

### 原生 REACT 写多个子节点

```js
// <div class="list">
//   <h1>水果</h1>
//   <ul>
//     <li>苹果</li>
//     <li>橘子</li>
//   </ul>
// </div>
import React from "react";
import ReactDom from "react-dom/client";

// 创建元素
// 参数3 可以是一个数组 多个子节点
const element = React.createElement("div", { className: "list" }, [
  React.createElement("h1", null, "水果"),
  React.createElement("ul", null, [
    React.createElement("li", null, "苹果"),
    React.createElement("li", null, "橘子"),
  ]),
]);
// 创建一个待渲染节点
const root = ReactDom.createRoot(document.querySelector("#root"));

// 渲染元素
root.render(element);
```

## 七、克隆元素 cloneElement

- createElement 创建一个虚拟 dom 1.标签名称 2.属性集合 2. 子节点
- cloneElement 两个参数 1. 要克隆的对象 2. 属性集合(-子节点也包含在内)

```js
import React from "react";
import ReactDom from "react-dom/client";

// 先创建一个对象

const element = React.createElement(
  "a",
  { href: "hechunxia.top" },
  "Lillian's blog"
);
// 克隆元素
// 1. 参数是克隆的对象 2. 要覆盖原有的属性集合
const cloneElement = React.cloneElement(element, {
  href: "https://www.google.com",
  children: "Google",
});

const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(cloneElement);
```
