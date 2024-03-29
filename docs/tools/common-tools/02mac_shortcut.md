# 2.Mac 下一些常用操作和快捷键

## 2.1.Mac 软件安装
[Mac软件下载网站](https://macwk.com/)


### 2.1.1.Homebrew

1. 官网链接

   - [官网链接](https://link.juejin.cn?target=https%3A%2F%2Fbrew.sh%2Findex_zh-cn.html "https://brew.sh/index_zh-cn.html")

   - [github](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2FHomebrew "https://github.com/Homebrew")

   ```shell
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   复制代码
   ```

- 在终端复制并输入上方命令执行即可

2. 国内镜像安装

[国内镜像码云地址](https://link.juejin.cn/?target=https%3A%2F%2Fgitee.com%2Fcunkai%2FHomebrewCN "https://gitee.com/cunkai/HomebrewCN")

```shell
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

- 输入命令行后可选择序号
- 选择自己需要的一款镜像（目前选择中科大）

### 2.1.2.Git

- 方法一：使用 Xcode
- 方法二：使用 homebrew 进行管理

[git 官网地址](https://git-scm.com/download/mac)

1. 用 `brew install git` 安装 git
2. 配置邮箱和用户名

```
git config --global user.name "your_name"
git config --global user.email "your_email"
```

3. 设置完查看 `git config --list`
4. 生成密钥 `ssh-keygen -t rsa -C "your_email@..."`
   ( 生成密钥后，在本地的`/Users/当前电脑用户/.ssh`目录下会生成两个文件`id_rsa`、`id_rsa.pub`，`id_rsa`文件保存的是私钥，保存于本地，`id_rsa.pub`文件保存的是公钥，需要将里面内容上传到远端仓库。)
5. 如何获取密钥

- 输入`cd`指令，进入当前用户目录

- 输入`ls -a`指令，查看当前用户目录下所有文件，包括隐藏文件
- 输入`cd .ssh`指令，进入`.ssh`目录
- 输入`ls`指令，查看`.ssh`目录下的文件
- 输入`cat id_rsa.pub`指令，查看`id_rsa.pub`文件中内容，**并复制**

6. 远端仓库添加密钥
   进入 GitHub -> 右上角 setting -> SSH and GPG keys -> new
   **粘贴公钥**

[csdn 教程](https://blog.csdn.net/xiaohanluo/article/details/53214933?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164270823616780357274002%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=164270823616780357274002&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-3-53214933.first_rank_v2_pc_rank_v29&utm_term=mac%E5%A6%82%E4%BD%95%E5%AE%89%E8%A3%85git&spm=1018.2226.3001.4187)

### 2.1.3.yarn

- 快速、可靠、安全的依赖管理工具。和 npm 类似, 都是包管理工具, 可以用于下载包, 就是比 npm 快

1. 打开终端
2. brew install yarn
3. yarn --version

如果不成功：
[掘金教程](https://juejin.cn/post/6844903953675583496)

中文官网地址: https://yarn.bootcss.com/

#### 使用 yarn

与 npm 类似, 可以试试, 新建一个空白文件夹, 执行以下命令尝试一下

|                 | yarn                            | npm         |
| --------------- | ------------------------------- | ----------- |
| 初始化          | yarn init                       | npm init -y |
| 导入 webpack 包 | yarn add webpack webpack-cli -D |             |

测试：

```bash
# 1. 初始化, 得到package.json文件(终端路径所在文件夹下)
yarn init

# 2. 添加依赖(下包)
# 命令: yarn add [package]
# 命令: yarn add [package]@[version]
yarn add jquery
yarn add jquery@3.5.1

# 3. 移除包
# 命令: yarn remove [package]
yarn remove jquery

# 4. 安装项目全部依赖(一般拿到别人的项目时, 缺少node_modules)
yarn
# 会根据当前项目package.json记录的包名和版本, 全部下载到当前工程中

# 5. 全局
# 安装: yarn global add [package]
# 卸载: yarn global remove [package]
# 注意: global一定在add左边
yarn global add @vue/cli
```

### 2.1.4.PHP

1. 通过 brew 安装
   `brew install php@版本号`，不写版本号默认安装最新版
2. 刷新 php 连接
   `brew link php`
3. 查看 php 版本
   `php -v`
4. 查看 PHP 的服务
   `brew services list`
   如果有两个版本，停止老的 PHP 版本，启用新的 php 版本

```sh
# 停止老版本
brew services stop php@老的版本号
# 启动新的版本
brew services start php@新的版本号
```

- 报错：Warning: No available formula with the name "php".

  解决：

  ```
  rm -rf $(brew --repo homebrew/core)
  brew tap homebrew/core
  brew update
  ```

- 报错：homebrew 安装软件时因为 permission denied 问题失败

  解决： `sudo chown -R $(whoami) /usr/local` 依旧有错误，如下

- 报错：`chown: /usr/local: Operation not permitted`

  查到的解释是 /usr/local 不再被 chown’d in High Sierra.

  解决：[链接](http://www.guoxiaolong.cn/?id=35)

  `sudo chown -R $(whoami) $(brew --prefix)/*`

### 2.1.5.MySql

### 2.1.6.Navicat

[破解版下载网址](https://macwk.com/soft/navicat-premium)

## 2.2.常见问题

### 2.2.1.`.`后缀的文件不显示

1. 在终端中输入`defaults write com.apple.finder AppleShowAllFiles TRUE`
2. 输入命令`killall Finder`

### 2.2.2.Mac 中的 git bash

Mac 的终端就相当于 win 的 git bash
在文件位置右键 -> 服务 -> 新建位于文件夹位置的终端窗口

### 2.2.3.mac 刘海遮住图标

此应用针对拥有刘海儿的 mac 进行开发.<br>
使用此工具可以在鼠标经过缺口的时候补充内容,不遗漏重要信息.<br>
只有鼠标经过缺口,才会补充内容,占用极低的系统资源.<br>
应用1：[刘海儿补全计划](https://macosgame.com/shownotchcontent/shownotchcontent)<br> 效果如下
![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220223161901.png)

应用2：[Bartender 4_方便的管理菜单栏图标](https://macwk.com/soft/bartender-4)

使用拖拽完成图标管理

![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220801202627.png)


### 2.2.3.1.mac隐藏屏幕刘海
[隐藏新款 MBP 屏幕刘海](https://macwk.com/soft/topnotch)

### 2.2.4.Mac 新建文件夹、txt 文件、其他格式文件

先 cd 到指定的文件路径下：

新建文件夹：mkdir test

新建 txt touch test.txt

新建无后缀格式文件 touch test

如果要删除 test 文件夹及所有子文件内容 rm -rf test

删除空文件夹,只要 rm 就可以了
`rm test`

### 2.2.5.Mac 网络拨号功能

设置 -> 网络 -> 左下角 ➕ -> 选择 PPPoE -> 输入拨号账号密码
<img src="https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220426132419.png" height="70%" width="70%">

### 2.2.6.批量删除文件名空格

法一： 在“访达”选中多个文件，右键重新命名 -> “替换文本” -> "查找中"输入空格 -> "替换成"不填 -> 右下角重新命名
![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220228162752.png)

法二：在文件夹位置打开终端，输入以下代码：

```
find . -name "* *"|
while read name
do
	na=$(echo $name|sed -e 's/^..//g'|tr -d "[:space:]")
	mv "$name" $na
done
```

### 2.2.7.Mac多开微信
1. 首先和常规一样，在「启动台」打开微信，然后登陆一个微信号。
2. 打开「访达」，在左侧的「应用程序」中找到微信
3. 右键「微信」，选择「显示包内容」
4. 进入「Contents」、「MacOS」
5. 「WeChat」点击右键`make Alias`
6. 将文件拖到桌面，点击扫码即可登录另一个微信号

- 注意：多开微信会有终端打开，`终端`窗口不可关闭，点击最小化即可



## 2.3.快捷键查看

1. Mac [官方快捷键](https://support.apple.com/zh-cn/HT201236)地址： https://support.apple.com/zh-cn/HT201236

2. 本机：系统偏好设置 -> 键盘 -> 快捷键

3. VSCode 快捷键：（左下角）设置 -> 键盘快捷方式
4. by:yulilong: [Mac 快捷键](http://yu66.vip)
   ![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220223162208.png)

## 2.4.个人常用快捷键

⇧ ⌘ ⌥ ⌃ ⇥ ↑ ← → ↓

### 1.显示隐藏拓展坞

⌘ + ⌥ + D

### 2.选择更多桌面

⌃ + ↑ / ← / → / ↓

### 3. 按住 ⌥ 可在访达/各种浏览器开启更多选项

### 4. 全屏解屏

⇧ + ⌘ + 3

### 5. 部分截屏

⇧ + ⌘ + 4

### 6.单独捕捉窗口

⇧ + ⌘ + 5

### 7.三指拖移

辅助功能 -> 指针控制 -> 触控板选项 -> 三指拖移

### 8. 最小化窗口

⌘ + m

### 9.切换窗口

⇥ + ⌘ ，松开 ⇥ 按 option

### 10.文件重命名

回车键

### 11.查词

欧路：⌥ + space
Saladict：⌘ + 5 / 6

### 12.emoji

- ⌘ + ⌃ + space
- fn + e
- `:emoji表情符号名称:`，两个英文冒号包裹 emoji 名称，但要经过特定的 markdown 渲染器渲染，[emoji 表情符号简称 1](https://gist.github.com/rxaviers/7360908)，[emoji 表情符号简称 2](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

### 13.光标移到最上方/最下方/左/右

⌘ + ↑ / ← / → / ↓

### 14.选中文本

⇧ + ↑ / ← / → / ↓

### 15.将插入点移至上/下一字词的词首

⌥ + ↑ / ↓

### 16.打开设置

⌘ + ,

### 17.切换一款软件的不同窗口

⌘ + ～

### 18.聚焦搜索
⌘ + space

### 19.上移/下移一行
Control + P / Control + N

### 20.显示/隐藏系统文件
⇧+⌘+。

## 2.5.Chrome常用快捷键
### 1.切换Tab页
1. ⌘  + ⌥ + ← / →
2. Control + tab / Control  + Shift + Tab

## 2.6. Mac自带应用-便签快捷键
1. 新建：com + N 
2. 添加链接： com + K
3. 设置字体：com + T
4. 快速折叠&打开纸条：com + M (最大化+shift)
5. 切换颜色：com + 1-6 (可切换6种颜色)
6. 字体加粗/倾斜/下划线：com + B / I /U
7. 字体大小：com + +/-
8. 字体颜色：com +shift + C
9. 便签半透明：com + option + T