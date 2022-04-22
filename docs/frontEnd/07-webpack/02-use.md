# Webpack使用步骤

## 2.0.webpack基础使用
### 示例1：基本使用
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



### 示例二：eg.把src下的2个js文件, 打包到1个js中, 并输出到默认dist目录下

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

## 2.1.webpack 更新打包

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
