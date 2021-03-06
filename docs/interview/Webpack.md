# Webpack

## webpack的几大特色

- code splitting（可以自动完成）(根据代码的分割并对文件进行分块)
- loader 可以处理各种类型的静态文件，并且支持串联操作
- webpack 是以 commonJS 的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移
- webpack 具有 requireJs 和 browserify 的功能，但仍有很多自己的新特性：
- 对 CommonJS 、 AMD 、ES6 的语法做了兼容
- 对 js、css、图片等资源文件都支持打包
- 串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性，例如：提供对 CoffeeScript、ES6 的支持
- 有独立的配置文件 webpack.config.js
- 可以将代码切割成不同的 chunk，实现按需加载，降低了初始化时间
- 支持 SourceUrls 和 SourceMaps，易于调试
- 具有强大的 Plugin 接口，大多是内部插件，使用起来比较灵活
- webpack 使用异步 IO 并具有多级缓存。这使得 webpack 很快且在增量编译上更加快


## 1.什么是webpack

​	webpack是一个打包模块化javascript的工具，在webpack里一切文件皆模块，通过loader转换文件，通过plugin注入钩子，最后输出由多个模块组合成的文件，webpack专注构建模块化项目

## 2.Webpack的优点是什么？

1. 专注于处理模块化的项目，能做到开箱即用，一步到位
2. 通过plugin扩展，完整好用又不失灵活
3. 通过loaders扩展, 可以让webpack把所有类型的文件都解析打包
4. 区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到已有的开源扩展

- 依赖管理：方便引用第三方模块、让模块更容易复用、避免全局注入导致的冲突、避免重复加载或加载不需要的模块。
- 合并代码：把各个分散的模块集中打包成大文件，减少 HTTP 的请求链接数，配合 UglifyJS 可以减少、优化代码的体积。
- 各路插件：babel 把 ES6+ 转译成 ES5 ，eslint 可以检查编译期的错误……


## 3.使用webpack需要做哪些准备工作?
1. 初始化文件夹包环境, 得到package.json文件
2. 下载webpack等模块包
3. 在package.json自定义命令, 为打包做准备

## webpack原理
一切皆为模块，由于 webpack 并不支持除 .js 以外的文件，从而需要使用 loader 转换成 webpack 支持的模块，plugin 用于扩展 webpack 的功能，在 webpack 构建生命周期的过程在合适的时机做了合适的事情。

## 4.webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：
版本一：
1. 初始化参数：从配置文件读取与合并参数，得出最终的参数

2. 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，开始执行编译
3. 确定入口：根据配置中的 entry 找出所有的入口文件
4. 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
5. 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
7. 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果

版本二：
- 解析配置参数，合并从 shell 传入和 webpack.config.js 文件的配置信息，输出最终的配置信息
- 注册配置中的插件，好让插件监听 webpack 构建生命周期中的事件节点，做出对应的反应
- 解析配置文件中 entry 入口文件，并找出每个文件依赖的文件，递归下去
- 在递归每个文件的过程中，根据文件类型和配置文件中 loader 找出相对应的 loader 对文件进行转换
- 递归结束之后得到每个文件最终的结果，根据 entry 配置生成代码 chunk
- 输出所有 chunk 到文件系统

## 5.Webpack 的热更新原理

​	webpack 的热更新又称热替换（Hot Module Replacement），缩写为 HMR。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。

​    HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)，实际上 WDS 与浏览器之间维护了一个 Websocket，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS 发起 Ajax 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 jsonp 请求获取该chunk的增量更新。

​    后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 HotModulePlugin 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像react-hot-loader 和 vue-loader 都是借助这些 API 实现 HMR。

## 6.webpack与grunt、gulp的不同？

### 1)三者之间的区别

- 三者都是前端构建工具，grunt和gulp在早期比较流行，现在webpack相对来说比较主流，不过一些轻量化的任务还是会用gulp来处理，比如单独打包CSS文件等。

- grunt和gulp是基于任务和流（Task、Stream）的。类似jQuery，找到一个（或一类）文件，对其做一系列链式操作，更新流上的数据， 整条链式操作构成了一个任务，多个任务就构成了整个web的构建流程。

- webpack是基于入口的。webpack会自动地递归解析入口所需要加载的所有资源文件，然后用不同的Loader来处理不同的文件，用Plugin来扩展webpack功能。

### 2)从构建思路来说

gulp和grunt需要开发者将整个前端构建过程拆分成多个`Task`，并合理控制所有`Task`的调用关系 webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么Loader做何种解析和加工

### 3)对于知识背景来说

gulp更像后端开发者的思路，需要对于整个流程了如指掌 webpack更倾向于前端开发者的思路

## 7.有哪些常见的Loader？他们是解决什么问题的？

1、  file-loader：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件

2、  url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去

3、  source-map-loader：加载额外的 Source Map 文件，以方便断点调试

4、  image-loader：加载并且压缩图片文件

5、  babel-loader：把 ES6 转换成 ES5

6、  css-loader：加载 CSS，支持模块化、压缩、文件导入等特性

7、  style-loader：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。

8、  eslint-loader：通过 ESLint 检查 JavaScript 代码

## 8.Loader和Plugin的不同？

### 1)不同作用

​       Loader直译为"加载器"。Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件也打包的话，就会用到loader。 所以Loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。

​    Plugin直译为"插件"。Plugin可以扩展webpack的功能，让webpack具有更多的灵活性。 在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

### 2)不同的用法

​    Loader在module.rules中配置，也就是说他作为模块的解析规则而存在。 类型为数组，每一项都是一个Object，里面描述了对于什么类型的文件（test），使用什么加载(loader)和使用的参数（options）

​    Plugin在plugins中单独配置。 类型为数组，每一项是一个plugin的实例，参数都通过构造函数传入。

## 注意的点

1. 把webpack的配置从0开始, 再过一遍

2. (附加)可以调研, 在打包时, 如何把css提取成一个独立的文件

   效果: 打包后的文件夹下多一个独立的css文件里有css代码

   提示: 需要一个加载器

3. 可以调用如何把vue文件让webpack打包使用 (vue-loader官网)

   想要把App.vue的东西显示到index.html

   (1): 在public/index.html 准备id叫app的div

   (2): yarn add vue - 必须下载vue (和其他加载器和插件-具体参考vue-loader官网)

   (3): 需要在main.js中引入App.vue模块对象并加入如下代码

   ```js
   import App from './App.vue' // 根vue文件
   import Vue from 'vue' // 引入vue.js对象
   
   new Vue({ 
     render: h => h(App) // 渲染函数, 渲染App组件里的标签
   }).$mount('#app') // 把vue文件的标签结构 -> 挂载到id为app的标签里
   ```

   (4): 打包后运行dist/index.html, 观察是否把vue文件里的标签渲染到页面了



- [webpack 系列--浅析 webpack 的原理](https://www.cnblogs.com/chengxs/p/11022842.html)
- [一看就懂之 webpack 原理解析与实现一个简单的 webpack](https://segmentfault.com/a/1190000020353337)
