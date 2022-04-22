# Webpack基本概念

## What？ 
- 一句话：webpack本身是, node的一个第三方模块包, 用于打包代码（javascript 应用程序的 **静态模块打包器 (module bundler)**）
- 扩展说：webpack 是基于 Node.js 静态资源的模块打包器。当用 webpack 打包时，它会从一个起点开始查找各个模块依赖关系，并且按照这些依赖关系把这些文件打成一个或者多个包；

## 作用
识别代码，翻译，压缩，整合打包

其中功能:
1. 模块化，浏览器端的早期没有模块化，需要 js 文件只能通过 script 标签手动控制依赖管理这些 js 文件的引入顺序；而 webpack 可以通过模块化管理这些依赖；
2. 自动编译 less、sass -> css
3. 可以把基于 JS 的扩展语言编译成 JS；ES6/7/8 -> ES5
4. 开发时配置代理解决开发环境跨域
5. 支持所有类型文件的打包
6. html/css/js -> 压缩合并

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/image-20210207234927772.png)



## 目的
提高打开网站的速度
- [webpack官网](https://webpack.docschina.org/)


## 全局安装
安装 webpack-cli
```js
npm install webpack-cli -g
```

安装 webpack
```js
npm install webpack -g
```



