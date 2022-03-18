# obsidian常见问题 & 技巧
## 内容输入——Markdown
[Markdown是什么&如何使用](./markdown.md)

## 图片处理——picGo图床
用于obsidian存储图片，写文章、blog、静态页面的图片导入处理同样适用
这里使用picgo图床<br>
- [下载地址](https://github.com/Molunerfinn/PicGo/releases) <br>
Win: 下载`.exe`文件<br>
Mac: 下载`.dmg`文件，或者执行`brew install picgo --cask`<br>

- 推荐文章：[图床搭配 PicGo：打造高效的图片处理工作流](https://sspai.com/post/65716) &nbsp; by sspai _FavourHong

- 插件

    法一：[PicGo官方插件](https://github.com/PicGo/Awesome-PicGo)，包含「图床上传器」「图片压缩」「图片编辑」「图床迁移」等工具<br>

    法二：2.0 版本以上，在应用「插件设置」页面，搜索安装插件。安装完成后，可以点击插件右下方齿轮图标，进行更新、禁用、卸载、配置及使用等功能。<br>

    注：由于 PicGo 要使用 npm 来安装插件，所以用户必须先安装 Node.js

- eg.具体使用方法，以gitee为例（国内免费，且速度较快）
    1. 下载PicGo
    2. 在PicGo`插件设置`中搜索`gitee`，点击安装
    3. 在gitee中新建仓库，输入仓库名称，设置为公开，勾选使用Readme文件初始化这个仓库
    4. 创建私人令牌，点击头像进入设置 -> 私人令牌 -> 生成新令牌，权限勾选project，点击提交，输入gitee登陆密码验证，获得私人令牌（只会出现一次，可以复制在别处保存）
    5. 在PicGo中配置gitee图床，Gitee图床 -> owner(gitee用户名) -> repo(刚刚创建的仓库名称) -> path(保存图片的文件夹名称) -> token(私人令牌) -> message(提交信息，可随意填写)<br>
  通过以上方法，一个简单的图床就配置好了
   
### PicGo + obsidian
1. 完成[上面](#图片处理——picGo图床)的简单配置
2. 在obsidian安装Image auto Upload插件，打开`pasted auto upload Switch`，picGo server填写`http://127.0.0.1:36677/upload`
3. 将图片放到obsidian中，图片即会自动上传到刚才新建的gitee仓库，图片链接自动转换为图床链接。跨平台图片也可见。

### PicGo + Typora
Typora：也是一款较为常用的markdown编辑器<br>
直接拖拽或直接将剪贴板图片粘贴进 Typora，便可实现自动上传到 PicGo 图床。<br>
1. 打开 Typora，使用快捷键 `Ctrl + ,` 进入偏好设置，找到「图像」修改相应设置选项。

2. 插入图片勾选「对本地图片应用规则」「对网络图片应用规则」「插入图片自动转义」。
3. 上传服务设定：PicGo (app)，PicGo 路径：自己主机中安装的 PicGo.exe 的存放路径。
4. 点击「验证图片上传选项」。
5. 此时，PicGo 里多出两张图片，就说明连接成功了。

### 更新了gitee-uploader插件的报错
picgo图床更新了gitee-uploader插件，
<details> 
	<summary>报错：Error: Error in repo name  </summary> 
	<pre><code> 
	Error: Error in repo name  
	at new Octo (/Users/hechunxia/Library/Application Support/picgo/node_modules/picgo-plugin-gitee-uploader/dist/lib/octokit.js:40:19)  
	at Object.getIns (/Users/hechunxia/Library/Application Support/picgo/node_modules/picgo-plugin-gitee-uploader/dist/lib/octokit.js:230:11)  
	at initOcto (/Users/hechunxia/Library/Application Support/picgo/node_modules/picgo-plugin-gitee-uploader/dist/index.js:11:27)  
	at Object.handle (/Users/hechunxia/Library/Application Support/picgo/node_modules/picgo-plugin-gitee-uploader/dist/index.js:110:21)  
	at Lifecycle.doUpload (/Applications/PicGo.app/Contents/Resources/app.asar/node_modules/picgo/dist/src/core/Lifecycle.js:80:77)  
	at Lifecycle.start (/Applications/PicGo.app/Contents/Resources/app.asar/node_modules/picgo/dist/src/core/Lifecycle.js:26:24)  
	at async PicGo.upload (/Applications/PicGo.app/Contents/Resources/app.asar/node_modules/picgo/dist/src/core/PicGo.js:205:32)  
	at async Object.upload (/Applications/PicGo.app/Contents/Resources/app.asar/background.js:36:29196)  
	at async Pt (/Applications/PicGo.app/Contents/Resources/app.asar/background.js:36:31625)  
	at async /Applications/PicGo.app/Contents/Resources/app.asar/background.js:36:32625
	</code></pre> 
</details>
解决方案：仓库路径应在前面加上gitee用户名 -> `leelillian/picgorepo`


## 图片——批量替换本地图片为图床链接
运行程序后选择文件夹，会自动搜索所有markdown文件，并修改文件内容替换本地图片为对应的图床链接（本动作不包含上传图床的部分）

由于替换过程不可逆，请确保图床链接正确，并备份

本动作只能替换剪贴板粘贴进ob生成的Paste image .* .png文件名的图片

（仅限windows使用），使用Quicker，[工具地址](https://getquicker.net/Sharedaction?code=ee6f083e-6399-4bb4-69e5-08d992b19cae)


## 图片处理——本地存储
先将图片发在obsidian当前库的文件夹中
格式：`![]()`

[]: 图片备注/不填

(): 图片路径/图片名称(如，1.png ，20200104.jpg)

注：此图片插入格式在其他平台不生效；图片名称最好不要有空格。

## 同步备份——官方购买
[官网](https://obsidian.md/sync)

## 同步——obsidian多个库、快捷键、主题等同步的问题
法一：
将现在正在使用的库文件夹中的.obsidian文件整个复制进新建库的文件夹
优点：方便快捷
缺点：不能实时多个库同步，需要手动修改
法二：
origin：知乎_蚕子
[教程](https://zhuanlan.zhihu.com/p/361003138)


## 同步——obsidian库同步到git（多设备查看 & 备份）
[How to sync Obsidian vault for free using Git?](https://desktopofsamuel.com/how-to-sync-obsidian-vault-for-free-using-git/)
1. 下载github desktop
2. 添加obsidian库到github desktop
3. 在obsidian中安装obsidian git插件
4. 根据自己设定的时间间隔，自动pull和在GitHub进行备份，在其他设备登陆GitHub即可查看obsidian内容 & 备份

## 插件——obsidian无法安装插件的问题
可能因素：github联网问题，网络不稳定，过会再试～
[解决obsidian插件与主题无法加载的问题](https://publish.obsidian.md/chinesehelp/01+2021%E6%96%B0%E6%95%99%E7%A8%8B/%E8%A7%A3%E5%86%B3obsidian%E6%8F%92%E4%BB%B6%E4%B8%8E%E4%B8%BB%E9%A2%98%E6%97%A0%E6%B3%95%E5%8A%A0%E8%BD%BD%E7%9A%84%E9%97%AE%E9%A2%98+by+%E8%BD%AF%E9%80%9A%E8%BE%BE)  by 软通达


## obsidian中pdf跳转到指定页
v0.10.8版本Obsidian通过添加#page=number实现了调用指定页的PDF文件，如`[[My file.pdf#page=3]]`。


<!--
 * @Description: 
 * @Author: Lillian
 * @Date: 2022-01-24 23:59:42
 * @LastEditTime: 2022-03-03 23:23:30
 * Copyright (c) 2022 by Lillian, All Rights Reserved. 
-->