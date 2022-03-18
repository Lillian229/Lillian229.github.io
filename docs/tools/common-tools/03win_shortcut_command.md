# 3. Win下常用命令、操作及快捷键

## 使用[Quicker](./qualitySoftware&tools.md/#quicker)
## 打开dos命令窗口的几种方法：

1) `window+ r` 或者在搜索里面 输入cmd

2）在`资源管理器`的当前路径上直接输入cmd

3) 鼠标右键 git bash here


## 关于yarn
### yarn包管理器
- 快速、可靠、安全的依赖管理工具。和 npm 类似, 都是包管理工具, 可以用于下载包, 就是比npm快

中文官网地址: https://yarn.bootcss.com/

### 下载yarn

下载地址:  https://yarn.bootcss.com/docs/install/#windows-stable 

* windows 不要安到带中文的路径下, 建议在C盘/


### 使用yarn

与npm类似, 可以试试, 新建一个空白文件夹, 执行以下命令尝试一下

|      | yarn | npm  |
| ---- | ---- | ---- |
|   初始化   |   yarn init   |   npm init -y   |
|   导入webpack包   |   yarn add webpack webpack-cli -D   |      |

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


## 打开文件
1) 在cmd进入文件
- cd + "路径" (路径用双引号包裹可避免路径中中文和空格的报错)
- 所在盘 + ' : '  (如： `f:`     `d:`) (然后 cd "路径"，一级一级的切换)

2）在powershell进入文件
- 用管理员身份打开powershell：Windows桌面下方的放大镜图标，搜索powershell,即会弹出“管理员身份运行”
- 在文件夹打开powershell，从文件所在文件夹进入powershell，直接就在当前目录，shift+右键

## 常用的dos命令(终端中的快捷键 )
dos 是linxu 写的，用c开发的，在 Windows 的 powershell 或 cmd 终端中，我们可以通过如下快捷键，来提高终端的操作效率： 
- `cd 文件夹 `,打开对应的文件夹（确定当前目录下有改文件夹）
- `cd ../` ，回退到上一级
- ` ↑` ，可以快速定位到上一次执行的命令 
- ` cd + tab` 键，能够快速补全路径 ，查看当前目录下的文件夹
- `cd + /` ,返回到根目录
- `mkdir + 文件名` ，创建一个文件夹
-  `copy con 文件名.txt` ,然后按**回车**，键入想要输入的内容“成功的花儿”，结束后回车按**ctrl+Z**， 创建一个文件。
-  `rename b f` ,重命名一个文件或者文件夹
-  `rd + 文件夹名` ， 删除一个文件夹（只能删除空的文件夹）
-  `rd + /s + 文件夹名` ， 删除一个文件夹（硬删除，即使里面有内容也能删除）
-  `del + 文件名` ，删除一个文件
- 使用 `esc` 键，能够快速清空当前已输入的命令 
- 输入` cls `命令，可以清空终端
  

## 查看电脑软件安装路径
1.进入cmd命令行
2.输入：where+文件名（eg. node）


## 在命令行模式下复制粘贴
- 复制：ctrl+insert
- 粘贴：shift+insert

## 创建多个桌面
新建桌面：ctrl+win+D
返回原来的界面：ctrl+win+左右键
可将当前应用拖拽到另一个桌面：win+tab

## emoji
- `Windows图标 + ;` (半角分号) / `Windows + .` (半角句号)  
- :emoji表情符号名称: （两个英文冒号包裹emoji名称，但要经过特定的markdown渲染器渲染）[emoji表情符号名称](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

## 如何将网页保存在系统文件夹中
在浏览器网页中按 ctrl+s ,即可，且可重命名，操作成功如下
发现缺点：保存在本地，打开时使用的是文件路径，不能很好运用在文章及其他地方


## 批量获得文件目录
```
如何创建文件目录文件：
1. 在当前列表文件夹新建一个txt文件
2. 在txt中输入:
DIR *.*  /B >LIST.TXT
3. 将txt文件换为bat 
```
## 批量更改文件名
```
批量更改文件名

@echo off
set a=1
setlocal EnableDelayedExpansion
for %%n in (*.jpg) do (
set /A a+=1
ren "%%n" "动漫!a!.jpg"
)

动漫替换为你想用的名字，a是序号“1——n",jpg是格式，记得for循环里的也要改
```

## 批量更改文件夹
```
批量更改文件夹

1、当前目录新建一个文本文档打开输入以下代码

set a=1
setlocal EnableDelayedExpansion
FOR /f "tokens=*" %%i IN ('dir /a:d /b') DO (
set /A a+=1
ren "%%i" "壁纸!a!"
)

跟以上操作一致
```


## Chrome快捷键
ctrl + 1-9 切换1-9个标签页
ctrl + tab 下一个标签页
ctrl + shift + tab 上一个标签页
ctrl + pageup 上一个标签页
ctrl + pagedown 下一个标签页

Ctrl + F4	关闭当前标签页  		
Ctrl + t	打开新的标签页，并跳转到该标签页
Ctrl + Shift + t 恢复刚才的标签页
Ctrl + n	打开新窗口(new)	


ctrl+U 快速查看网页源码
f12 打开控制台

回退
Alt+← 回退
Alt+→ 前进