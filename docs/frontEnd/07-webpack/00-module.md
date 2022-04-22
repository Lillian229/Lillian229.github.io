# 模块化开发
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


