# 5.VScode使用&快捷键
## VScode快捷键
VSCode快捷键：（左下角）设置 -> 键盘快捷方式

## emmet的使用
设置(command+, ) -> 工作区 -> 扩展 -> Emmet -> Include Language -> 添加项
```
"editor.formatOnType": true,
"editor.formatOnSave": true
```
![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220301013123.png)


## VScode自动生成文件头部注释
### 安装
在 Vscode 扩展商店中搜索`koroFileHeader`, 点击安装即可。
### 快速上手
**必须的基础配置: 头部注释模板与函数注释模板**
1. 复制：复制下面给出的模板
1. 插入：插入模板到全局设置(setting.json)中。
1. 简单的更改：比如把名字换成自己的，不需要的字段可以删掉。
1. 重启编辑器，使用快捷键体验它。
```json
// 头部注释
"fileheader.customMade": {
    "Author": "OBKoro1", // 创建文件的作者
    "Date": "Do not edit", // 文件创建时间(不变)
    "LastEditors": "OBKoro1", // 文件最后编辑者
    // 由于编辑文件就会变更最后编辑时间，多人协作中合并的时候会导致merge
    // 可以将时间颗粒度改为周、或者月，这样冲突就减少很多。搜索变更时间格式: dateFormat
    "LastEditTime": "Do not edit", // 文件最后编辑时间
    // 输出相对路径，类似: /文件夹名称/src/index.js
    "FilePath": "Do not edit", // 文件在项目中的相对路径 自动更新
    // 插件会自动将光标移动到Description选项中 方便输入 Description字段可以在specialOptions更改
    "Description": "", // 介绍文件的作用、文件的入参、出参。
    // custom_string_obkoro1~custom_string_obkoro100都可以输出自定义信息
    // 可以设置多条自定义信息 设置个性签名、留下QQ、微信联系方式、输入空行等
    "custom_string_obkoro1": "", 
    // 版权声明 保留文件所有权利 自动替换年份
    "custom_string_obkoro1_copyright": "Copyright (c) ${now_year} by 用户/公司名, All Rights Reserved. "
},
// 函数注释
"fileheader.cursorMode": {
    "description": "", // 函数注释生成之后，光标移动到这里
    "param": "", // param 开启函数参数自动提取 需要将光标放在函数行或者函数上方的空白行
    "return": "",
}
```


**如何找到setting.json设置模板**
1. 简单的输入命令
打开VSCode命令面板: mac: `command + p` window: `ctrl + p`
输入`> Open Settings`(注意>后面有一个空格)
![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220301162025.png)

2. 从设置中打开
首选项 > 设置 > 搜索fileheader > 在右侧中贴上配置 > 做简单的更改
![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220301162123.png)

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220301162941.png)

**快捷键使用**
**文件头部注释快捷键**
- 记录文件信息/文件的传参/出参，设置个性签名、留下QQ、微信联系方式、输入空行等等
- 支持用户高度自定义注释选项, 适配各种需求的注释形式。
- 保存文件的时候，自动更新最后的编辑时间和编辑人
- window：`ctrl+win+i`, mac：`ctrl+cmd+i`, linux: `ctrl+meta+i`, Ubuntu: `ctrl+super+i`

**函数注释注释快捷键**

更多关于函数参数自动请查阅[配置-函数注释自动提取函数的参数](https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE#%E5%87%BD%E6%95%B0%E6%B3%A8%E9%87%8A%E8%87%AA%E5%8A%A8%E6%8F%90%E5%8F%96%E5%87%BD%E6%95%B0%E7%9A%84%E5%8F%82%E6%95%B0)文档

- 将光标放在函数行或者将光标放在函数上方的空白行。
- 自动解析函数参数，生成函数参数注释。
- 快捷键：window：`ctrl+win+t`,mac：`ctrl+cmd+t`,linux: `ctrl+meta+t`, Ubuntu: `ctrl+super+t`

**多行函数参数鼠标选中后函数声明后按快捷键自动提取**
1. 鼠标左键选择多行函数声明区域，函数声明区域尽量精准
2. 按函数注释快捷键

**函数注释光标移动到下一行，快速添加函数参数描述**
window: win+y, mac: cmd+y, linux: meta+y

生成函数注释之后，使用快捷键移动鼠标到下一行，快速为函数参数添加描述。

可能有很多参数，需要移动鼠标一个一个添加的话，操作起来有点麻烦。

**快捷键不可用的问题**

很有可能快捷键被占用，自行设置


**关闭自动添加头部注释**

插件默认打开自动添加头部注释: [关闭自动添加头部注释](https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE#2-%E8%87%AA%E5%8A%A8%E6%B7%BB%E5%8A%A0%E6%96%87%E4%BB%B6%E5%A4%B4%E9%83%A8%E6%B3%A8%E9%87%8A)

或许你可以对自动添加头部注释做一些限制：

- 代码行数：文件多少行以内允许自动添加
- 白名单与黑名单：比如只禁止.json，只允许.js文件添加
- 项目的黑名单：添加公司的项目名，禁止公司项目自动添加头部注释。
- 文件夹的黑名单，比如node_modules文件夹禁止、README.md文件禁止



(点击左侧小三角可展开) 以下是插件的所有配置段，在配置文档中搜索对应字段了解详细用法：
<details> 
	<summary>插件的所有配置段</summary> 
	<pre><code>
// 头部注释
"fileheader.customMade": {
    // 头部注释默认字段
    "Author": "your name",
    "Date": "Do not edit", // 设置后默认设置文件生成时间
    "LastEditTime": "Do not edit", // 设置后，保存文件更改默认更新最后编辑时间
    "LastEditors": "your name", // 设置后，保存文件更改默认更新最后编辑人
    "Description": "",
    "FilePath": "Do not edit", // 设置后，默认生成文件相对于项目的路径
    "custom_string_obkoro1": "可以输入预定的版权声明、个性签名、空行等"
},
// 函数注释
"fileheader.cursorMode": {
  // 默认字段
  "description":"",
  "param":"",
  "return":""
},
// 插件配置项
"fileheader.configObj": {
    "autoAdd": true, // 检测文件没有头部注释，自动添加文件头部注释
    "autoAddLine": 100, // 文件超过多少行数 不再自动添加头部注释
    "autoAlready": true, // 只添加插件支持的语言以及用户通过`language`选项自定义的注释
    "supportAutoLanguage": [], // 设置之后，在数组内的文件才支持自动添加
   // 自动添加头部注释黑名单
   "prohibitAutoAdd": [
      "json"
    ],
   "prohibitItemAutoAdd": [ "项目的全称禁止项目自动添加头部注释, 使用快捷键自行添加" ],
   "folderBlacklist": [ "node_modules" ], // 文件夹或文件名禁止自动添加头部注释
   "wideSame": false, // 头部注释等宽设置
   "wideNum": 13,  // 头部注释字段长度 默认为13
    "functionWideNum": 0, // 函数注释等宽设置 设为0 即为关闭
   // 头部注释第几行插入
    "headInsertLine": {
      "php": 2 // php文件 插入到第二行
    },
    "beforeAnnotation": {}, // 头部注释之前插入内容
    "afterAnnotation": {}, // 头部注释之后插入内容
    "specialOptions": {}, // 特殊字段自定义
    "switch": {
      "newlineAddAnnotation": true // 默认遇到换行符(\r\n \n \r)添加注释符号
    },
    "moveCursor": true, // 自动移动光标到Description所在行
    "dateFormat": "YYYY-MM-DD HH:mm:ss",
    "atSymbol": ["@", "@"], // 更改所有文件的自定义注释中的@符号
    "atSymbolObj": {}, //  更改单独语言/文件的@
    "colon": [": ", ": "], // 更改所有文件的注释冒号
    "colonObj": {}, //  更改单独语言/文件的冒号
    "filePathColon": "路径分隔符替换", // 默认值： mac: / window是: \
    "showErrorMessage": false, // 是否显示插件错误通知 用于debugger
    "writeLog": false, // 错误日志生成
    "CheckFileChange": false, // 单个文件保存时进行diff检查
    "createHeader": true, // 新建文件自动添加头部注释
    "useWorker": false, // 是否使用工作区设置
    "designAddHead": false, // 添加注释图案时添加头部注释
    "headDesignName": "random", // 图案注释使用哪个图案 
    "headDesign": false, // 是否使用图案注释替换头部注释
    // 自定义配置是否在函数内生成注释 不同文件类型和语言类型
    "cursorModeInternalAll": {}, // 默认为false 在函数外生成函数注释
    "openFunctionParamsCheck": true, // 开启关闭自动提取添加函数参数
    "functionParamsShape": ["{", "}"], // 函数参数外形自定义 
    // "functionParamsShape": "no type" 函数参数不需要类型
    "functionBlankSpaceAll": {}, // 函数注释空格缩进 默认为空对象 默认值为0 不缩进
    "functionTypeSymbol": "*", // 参数没有类型时的默认值
    "typeParamOrder": "type param", // 参数类型 和 参数的位置自定义
    // 自定义语言注释，自定义取消 head、end 部分
    // 不设置自定义配置language无效 默认都有head、end
    "customHasHeadEnd": {}, // "cancel head and function" | "cancel head" | "cancel function" 
    "throttleTime": 60000, // 对同一个文件 需要过1分钟再次修改文件并保存才会更新注释
     // 自定义语言注释符号，覆盖插件的注释格式
    "language": {
        // js后缀文件
        "js": {
            "head": "/$$",
            "middle": " $ @",
            "end": " $/",
            // 函数自定义注释符号：如果有此配置 会默认使用
            "functionSymbol": {
              "head": "/******* ", // 统一增加几个*号
              "middle": " * @",
              "end": " */"
            },
            "functionParams": "typescript" // 函数注释使用ts语言的解析逻辑
        },
       // 一次匹配多种文件后缀文件 不用重复设置
       "h/hpp/cpp": {
          "head": "/*** ", // 统一增加几个*号
          "middle": " * @",
          "end": " */"
        },
        // 针对有特殊要求的文件如：test.blade.php
        "blade.php":{
          "head": "<!--",
          "middle": " * @",
          "end": "-->",
        }
    },
 // 默认注释  没有匹配到注释符号的时候使用。
 "annotationStr": { 
      "head": "/*",
      "middle": " * @",
      "end": " */",
      "use": false
    },
}
	</code></pre> 
</details>

[配置文档](https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE)


⚠️注意：如果markdown中要使用，请把注释内容放在内容中部或者末尾。

注释放在头部，识别不到一级标题，会导致标题缺乏，侧边栏显示为文件路径。
如下图：
![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220301200942.png)