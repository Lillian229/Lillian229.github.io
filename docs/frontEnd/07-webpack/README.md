# webpack

## 模块&模块化开发规范(CommonJS / ES6)
模块化规范

esModule 浏览器支持的模块化  import export

commonjs 规范  (node)  require exports

### ESModule
```js
 import 自定义名字 from '某个模块'   
//  某个模块（node自带的、三方的(npm 安装的)、自己的）
//  某个模块 一定有 export default 的这种默认导出
 import {名字}  from '某个模块'
//  名字一定模块中定义好的名字 不能随便写；
//  导出的时候一定需要是 export 声明关键字  名字；  声明关键字(var let const function  class)
```

ES6规范:
```js
  // 导出 export 或者 export default {}
  // 导入 import 变量名 from '模块标识'
```

### commonJS
``` js
	require
    module.exports 
    node的模块 都会有5个内置变量     
	module, require, exports, __dirname, __filename
     __dirname 当前文件所在文件夹的绝对目录
     __filename 当前文件的绝对目录
```

commonJS规范:
-  nodejs - commonJS规范-规定了导出和导入方式
-  导出 module.exports = {}
-  导入 const 变量 = require("模块标识")



## 一.webpack基本概念

### What？ 
- 一句话：webpack本身是, node的一个第三方模块包, 用于打包代码（javascript 应用程序的 **静态模块打包器 (module bundler)**）
- 扩展说：webpack 是基于 Node.js 静态资源的模块打包器。当用 webpack 打包时，它会从一个起点开始查找各个模块依赖关系，并且按照这些依赖关系把这些文件打成一个或者多个包；

### 作用
识别代码，翻译，压缩，整合打包

其中功能:
1. 模块化，浏览器端的早期没有模块化，需要 js 文件只能通过 script 标签手动控制依赖管理这些 js 文件的引入顺序；而 webpack 可以通过模块化管理这些依赖；
2. 自动编译 less、sass -> css
3. 可以把基于 JS 的扩展语言编译成 JS；ES6/7/8 -> ES5
4. 开发时配置代理解决开发环境跨域
5. 支持所有类型文件的打包
6. html/css/js -> 压缩合并

![](https://gitee.com/leelillian/picgorepo/raw/master/images/image-20210207234927772.png)



### 目的
提高打开网站的速度
- [webpack官网](https://webpack.docschina.org/)


### 全局安装
安装 webpack-cli
```js
npm install webpack-cli -g
```

安装 webpack
```js
npm install webpack -g
```




## 二.webpack的使用步骤

### 2.0.webpack基础使用
#### 示例：基本使用
1. 新建文件夹 webpack-sample
2. 在 webpack-sample 下新建文件夹 app、public
3. 在 app 目录下新建 Greeter.js、main.js、config.json
4. 在 public 目录下新建 index.html
5. 写入代码

- Greeter.js
```js
let config = require('./config.json');
module.exports = function () {
	var greet = document.createElement('div');
	greet.textContent = config.greetText;
	return greet;
};
```

- config.json
```js
{
	"greetText":"Hi there and greetings from JSON!"
}
```

- main.js
```js
const greeter = require('./Greeter.js');
document.querySelector('#root').appendChild(greeter());
console.log(12334)
```

- /public/index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Title</title>
</head>
<body>
<div id="root"></div>
<p class="paragraph">12333</p>
<div>xxxxxx</div>

<script src="bundle.js"></script>
</body>
</html>
```

6. 在 webpack-sample 目录下打开命令行，输入以下打包命令
```shell
webpack-cli --entry ./app/main.js --output ./public/bundle.js
```

7. 运行 index.html 页面，可以看到已经成功；



#### 示例二：eg.把src下的2个js文件, 打包到1个js中, 并输出到默认dist目录下

默认入口: ./src/index.js

默认出口: ./dist/main.js

注意:路径上, 文件夹, 文件名不能叫webpack/其他已知的模块名

1. 初始化包环境

   ```bash
   yarn init
   ```

2. 安装依赖包

   ```bash
   yarn add webpack webpack-cli -D
   ```

3. 配置scripts(自定义命令)

   ```bash
   scripts: {
   	"build": "webpack"
   }
   ```

4. 新建目录src

5. 新建src/add/add.js - 定义求和函数导出

   ```js
   export const addFn = (a, b) => a + b
   ```

6. 新建src/index.js导入使用

   ```js
   import {addFn} from './add/add'
   
   console.log(addFn(10, 20));
   ```

7. 运行打包命令

   ```bash
   yarn build
   #或者 npm run build
   ```

> 总结: src并列处, 生成默认dist目录和打包后默认main.js文件

### 2.1.webpack 更新打包

> 目标: 以后代码变更, 如何重新打包呢

1. 新建src/tool/tool.js - 定义导出数组求和方法

   ```js
   export const getArrSum = arr => arr.reduce((sum, val) => sum += val, 0)
   ```
   
2. src/index.js - 导入使用

   ```js
   import {addFn} from './add/add'
   import {getArrSum} from './tool/tool'
   
   console.log(addFn(10, 20));
   console.log(getArrSum([1, 2, 3]));
   ```
   
3. 重新打包

   ```bash
   yarn build
   ```

> 总结1: src下开发环境, dist是打包后, 分别独立
>
> 总结2: 打包后格式压缩, 变量压缩等

## 三.webpack的配置

### 3.0.webpack-入口和出口
webpack从哪开始打包, 打包后输出到哪里

默认入口: ./src/index.js

默认出口: ./dist/main.js

webpack配置 - webpack.config.js(默认)

1. 新建src并列处, webpack.config.js
2. 填入配置项

```js
const path = require("path")

module.exports = {
    entry: "./src/main.js", // 入口
    output: { 
        path: path.join(__dirname, "dist"), // 出口路径
        filename: "bundle.js" // 出口文件名
    }
}
```

3. 修改package.json, 自定义打包命令 - 让webpack使用配置文件

```json
"scripts": {
    "build": "webpack"
},
```

4. 打包观察效果

### 3.1.打包流程图

![](https://gitee.com/leelillian/picgorepo/raw/master/images/image-20210421125257233.png)
==重点: 所有要被打包的资源都要跟入口产生直接/间接的引用关系==

### 3.2_案例-webpack隔行变色

> eg. 工程化模块化开发前端项目, webpack会对ES6模块化处理

1. 从0准备环境

   * 初始化包环境

   * 下载依赖包
   * 配置自定义打包命令

2. 下载jquery, 新建public/index.html

   ```bash
   yarn add jquery

3. index.html 准备一些li

4. 结构
- public
    - index.html
-src
    - main.js



* 因为import语法浏览器支持性不好, 需要被webpack转换后, 再使用JS代码

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <title>Document</title>
   </head>
   <body>
   
   <div id="app">
     <!-- ul>li{我是第$个li}*10 -->
     <ul>
       <li>我是第1个li</li>
       <li>我是第2个li</li>
       <li>我是第3个li</li>
       <li>我是第4个li</li>
       <li>我是第5个li</li>
       <li>我是第6个li</li>
       <li>我是第7个li</li>
       <li>我是第8个li</li>
       <li>我是第9个li</li>
     </ul>
   </div>
   
   </body>
   </html>
   ```
   
4. 在src/main.js引入jquery

   ```bash
   yarn add jquery
   ```

5. src/main.js中编写隔行变色代码

   ```js
   // 引入jquery
   import $ from 'jquery'
   $(function() {
     $('#app li:nth-child(odd)').css('color', 'red')
     $('#app li:nth-child(even)').css('color', 'green')
   })
   ```

6. 执行打包命令观察效果

7. 可以在dist下把public/index.html引入过来

- dist
    - bundle.js
    - bundle.js.LICENSE.txt
    - index.html

    在index.html中手动引入js

   ```html
   <script src="../dist/bundle.js"></script>
   ```

> 总结: 前端工程化模块化, 需要的包yarn下, 被webpack打包后引入到html中使用

### 3.3_插件-自动生成html文件
要使用某个插件，需要通过 npm 安装它，然后要做的就是在 webpack 配置中的 plugins 关键字部分添加该插件的一个实例；


> 目标: html-webpack-plugin插件, 让webpack打包后生成html文件并自动引入打包后的js

[html-webpack-plugin插件地址](https://www.webpackjs.com/plugins/html-webpack-plugin/)

  1. 下载插件

     ```
     yarn add html-webpack-plugin  -D
     //or
     npm install html-webpack-plugin --save-dev
     ```

  2. 引入插件  
    ```js
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    ```

  3. webpack.config.js配置
  在 webpack 中增加一个 plugins 字段，它的值是一个数组，使用插件就是创建一个插件的实例，然后作为数组项放到 plugins 中；


     ```js
     // 引入自动生成 html 的插件
     const HtmlWebpackPlugin = require('html-webpack-plugin')
     
     module.exports = {
         // ...省略其他代码
         plugins: [
             new HtmlWebpackPlugin({
                 template: './public/index.html' // 以此为基准生成打包后html文件
             })
         ]
     }
     ```

3. 重新打包后观察dist下是否多出html并运行看效果

   打包后的index.html自动引入打包后的js文件

> 总结: webpack就像一个人, webpack.config.js是人物属性, 给它穿什么装备它就干什么活

### 3.4.加载器-处理css文件问题

> 目标: 自己准备css文件, 引入到webpack入口, 测试webpack是否能打包css文件

1.新建 - src/css/index.css

2.编写去除li圆点样式代码

3.(重要) 一定要引入到入口才会被webpack打包

4.执行打包命令观察效果

> 总结: 保存原因, 因为webpack默认只能处理js类型文件

### 3.5.css-loader-处理css文件

> 目标: loaders加载器, 可让webpack处理其他类型的文件, 打包到js中

原因: webpack默认只认识 js 文件和 json文件

[style-loader文档](https://webpack.docschina.org/loaders/style-loader/)

[css-loader文档](https://webpack.docschina.org/loaders/css-loader/)

1. 安装依赖

   ```
   yarn add style-loader css-loader -D
   ```

2. webpack.config.js 配置

   ```js
   const HtmlWebpackPlugin = require('html-webpack-plugin')
   
   module.exports = {
       // ...其他代码
       module: { 
           rules: [ // loader的规则
             {
               test: /\.css$/, // 匹配所有的css文件
               // use数组里从右向左运行
               // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
               // 再用 style-loader 将样式, 把css插入到dom中
               use: [ "style-loader", "css-loader"]
             }
           ]
       }
   }
   ```

3. 新建src/css/li.css - 去掉li默认样式

   ```css
   ul, li{
       list-style: none;
   }
   ```

4. 引入到main.js (因为这里是入口需要产生关系, 才会被webpack找到打包起来)

   ```js
   import "./css/index.css"
   ```

5. 运行打包后dist/index.html观察效果和css引入情况

> 总结: 万物皆模块, 引到入口, 才会被webpack打包, css打包进js中, 然后被嵌入在style标签插入dom上

### 3.6.less-loader-加载器-处理less文件

less-loader让webpack处理less文件, less模块翻译less代码

[less-loader文档](https://webpack.docschina.org/loaders/less-loader/)

1. 下载依赖包

   ```bash
   yarn add less less-loader -D
   //or
   npm install less less-loader --save-dev
   ```
2. webpack.config.js 配置

   ```js
   module: {
     rules: [ // loader的规则
       // ...省略其他
       {
       	test: /\.less$/,
       	// 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
           use: [ "style-loader", "css-loader", 'less-loader']
       }
     ]
   }
   ```
   
3. src/less/index.less  - 设置li字体大小24px

   ```less
   @size:24px;
   
   ul, li{
       font-size: @size
   }
   ```

4. 引入到main.js中

   ```js
   import "./less/index.less"
   ```

5. 打包运行dist/index.html 观察效果

> 总结: 只要找到对应的loader加载器, 就能让webpack处理不同类型文件

### 3.7.url-loader-加载器-处理图片文件

配置 url-loader 后，可以导入图片；
> 目标: 用asset module方式(webpack5版本新增)

[asset module文档](https://webpack.docschina.org/guides/asset-modules/)

如果使用的是webpack5版本的, 直接配置在webpack.config.js - 的 rules里即可

```js
{
    test: /\.(png|jpg|gif|jpeg)$/i,
    type: 'asset'
}
```

如果用的是webpack4及以前的, 请使用者里的配置

[url-loader文档](https://webpack.docschina.org/loaders/url-loader/)

[file-loader文档](https://webpack.docschina.org/loaders/file-loader/)

1. 下载依赖包

   ```bash
   yarn add url-loader file-loader -D
   ```

2. webpack.config.js 配置

   ```js
   {
     test: /\.(png|jpg|gif|jpeg)$/i,
     use: [
       {
         loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
         // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
         options: {
           limit: 8 * 1024,
         },
       },
     ],
   }
   ```

   图片转成 base64 字符串

   - 好处就是浏览器不用发请求了，直接可以读取
   - 坏处就是如果图片太大，再转`base64`就会让图片的体积增大 30% 左右

3. src/assets/准备老师发的2个图文件

4. 在css/less/index.less - 把小图片用做背景图

   ```less
   body{
       background: url(../assets/logo_small.png) no-repeat center;
   }
   ```

5. 在src/main.js - 把大图插入到创建的img标签上, 添加body上显示

   ```js
   // 引入图片-使用
   import imgUrl from './assets/1.gif'
   const theImg = document.createElement("img")
   theImg.src = imgUrl
   document.body.appendChild(theImg)
   ```

6. 打包运行dist/index.html观察2个图片区别

> 总结:  url-loader 把文件转base64 打包进js中, 会有30%的增大, file-loader 把文件直接复制输出

### 3.8.webpack加载文件优缺点

图片转成 base64 字符串

- 好处就是浏览器不用发请求了，直接可以读取
- 坏处就是如果图片太大，再转`base64`就会让图片的体积增大 30% 左右

### 3.9.加载器-处理字体文件

> 目标: 用asset module技术, asset/resource直接输出到dist目录下

webpack5使用这个配置

```js
{ // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    type: 'asset/resource',
    generator: {
    	filename: 'font/[name].[hash:6][ext]'
    }
}
```

- webpack4及以前使用下面的配置

1. webpack.config.js - 准备配置

   ```js
    { // 处理字体图标的解析
        test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 2 * 1024,
                        // 配置输出的文件名
                        name: '[name].[ext]',
                        // 配置输出的文件目录
                        outputPath: "fonts/"
                    }
                }
            ]
    }
   ```

2. src/assets/ - 放入字体库fonts文件夹

3. 在main.js引入iconfont.css

   ```js
   // 引入字体图标文件
   import './assets/fonts/iconfont.css'
   ```

4. 在public/index.html使用字体图标样式

   ```html
   <i class="iconfont icon-weixin"></i>
   ```

5. 执行打包命令-观察打包后网页效果

> 总结: url-loader和file-loader 可以打包静态资源文件



### 3.10.babel-加载器-处理高版本js语法

> 目标: 让webpack对高版本的js代码, 降级处理后打包

写代码演示: 高版本的js代码(箭头函数), 打包后, 直接原封不动打入了js文件中, 遇到一些低版本的浏览器就会报错

原因: **webpack 默认仅内置了 模块化的 兼容性处理**   `import  export`

babel 的介绍 => 用于处理高版本 js语法 的兼容性  [babel官网](https://www.babeljs.cn/)

(Babel 其实是一个编译 JavaScript 的平台，让你能使用最新的 JavaScript 代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；让你能使用基于 JavaScript 进行了拓展的语言，比如 React 的 JSX；)

解决: 让webpack配合babel-loader 对js语法做处理


[babel-loader文档](https://webpack.docschina.org/loaders/babel-loader/)

  1. 安装包
    安装Babel，需要安装
        - babel-core babel 的核心
        - babel-loader babel的 loader （安装7.x.x 版本，如7.1.5）
        - babel-preset-env 把 ES5/6/7 转成当前能使用的版本
        - babel-preset-react 解析 React 的 JSX 语法

     ```bash
     // npm一次性安装多个依赖模块，模块之间用空格隔开
        npm install babel-core babel-loader@7.1.5 babel-preset-env babel-preset-react --save-dev
     ```

  2. 配置规则

     ```js
     module: {
       rules: [
         {
             test: /\.js$/,
             exclude: /(node_modules|bower_components)/,
             use: {
                 loader: 'babel-loader',
                 options: {
                     presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                 }
             }
         }
       ]
     }
     ```

3. 在main.js中使用箭头函数(高版本js)

   ```js
   // 高级语法
   const fn = () => {
     console.log("你好babel");
   }
   console.log(fn) // 这里必须打印不能调用/不使用, 不然webpack会精简成一句打印不要函数了/不会编译未使用的代码
   // 没有babel集成时, 原样直接打包进lib/bundle.js
   // 有babel集成时, 会翻译成普通函数打包进lib/bundle.js
   ```

4. 打包后观察lib/bundle.js - 被转成成普通函数使用了 - 这就是babel降级翻译的功能

> 总结: babel-loader 可以让webpack 对高版本js语法做降级处理后打包

## 四、webpack 开发服务器

### 4.0.webpack开发服务器

文档地址: https://webpack.docschina.org/configuration/dev-server/

抛出问题: 每次修改代码, 都需要重新 yarn build 打包, 才能看到最新的效果, 实际工作中, 打包 yarn build 非常费时 (30s - 60s) 之间

为什么费时? 

1. 构建依赖
2. 磁盘读取对应的文件到内存, 才能加载  
3. 用对应的 loader 进行处理  
4. 将处理完的内容, 输出到磁盘指定目录  

解决问题: 起一个开发服务器,  在电脑内存中打包, 缓存一些已经打包过的内容, 只重新打包修改的文件, 最终运行加载在内存中给浏览器使用

### 4.1.webpack-dev-server自动刷新

> 目标: 启动本地服务, 可实时更新修改的代码, 打包**变化代码**到内存中, 然后直接提供端口和网页访问

1. 下载包

   ```bash
   yarn add webpack-dev-server -D
   ```

2. 配置自定义命令

   ```js
   scripts: {
   	"build": "webpack",
   	"serve": "webpack serve"
   }
   ```

3. 运行命令-启动webpack开发服务器

   ```bash
   yarn serve
   #或者 npm run serve
   ```
   

> 总结: 以后改了src下的资源代码, 就会直接更新到内存打包, 然后反馈到浏览器上了

### 4.2.webpack-dev-server配置

1. 在webpack.config.js中添加服务器配置

   更多配置参考这里: https://webpack.docschina.org/configuration/dev-server/#devserverafter

   ```js
   module.exports = {
       // ...其他配置
       devServer: {
         port: 3000 // 端口号
       }
   }
   ```







<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-03-09 17:13:40
 * @LastEditTime: 2022-03-09 17:13:41
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->
