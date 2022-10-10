# Webstorm中Git的使用
点击`webstorm`左下角的Git打开这套集成工具
![](https://hand-practice.oss-cn-chengdu.aliyuncs.com/images/20220812103350.png)
## 面板结构
-   Local Changes 展示你当前已修改但未提交的文件
-   Log: dev你当前所在的分支
    -   左侧区域展示的是所有分支列表
        -   Local 本地的分支列表
        -   Remote 远程仓库的分支列表
    -   右侧区域展示的是当前选中分支的提交记录
        -   选中一个提交记录，最右侧会展示当前提交记录所修改的文件

## 新建分支/切换分支/将本地分支推到远程
![](https://hand-practice.oss-cn-chengdu.aliyuncs.com/images/20220812111808.png)

## 合并分支
![](https://hand-practice.oss-cn-chengdu.aliyuncs.com/images/20220812112156.png)

## 如果有冲突

## 更新/提交/push代码
- 在Toolbar中
![](https://hand-practice.oss-cn-chengdu.aliyuncs.com/images/20220812112655.png)

- 注意：如果你看不到`Toolbar`，则需要在菜单栏: `view - Appearance - ToolBar`将其开启。

- 除此之外，你还可以在菜单栏的`Git`子菜单中去提交/推送，或者按快捷键`command K / command shift K`。

## 拉取代码
Git -> pull
![](https://hand-practice.oss-cn-chengdu.aliyuncs.com/images/20220812113005.png)

## 暂存代码
- 当我们在某个分支上开发需求时，突然来一个加急需求需要你在别的分支改，此时你的更改又不适宜提交，那么就需要将当前更改暂存起来。
- 只需在项目树上右键，选择`Git - Stash Changes...`即可将更改暂存，
![](https://hand-practice.oss-cn-chengdu.aliyuncs.com/images/20220812113249.png)

在弹出框写入暂存信息
![](https://hand-practice.oss-cn-chengdu.aliyuncs.com/images/20220812113434.png)

## 取出代码
紧急任务开发完成后，切回分支，在项目根目录右键，选择`Git - Unstash Change...`即可
![](https://hand-practice.oss-cn-chengdu.aliyuncs.com/images/20220812113816.png)

![](https://hand-practice.oss-cn-chengdu.aliyuncs.com/images/20220812113625.png)

## 版本回退
![](https://hand-practice.oss-cn-chengdu.aliyuncs.com/images/20220812115004.png)

## 合并部分提交目录
当需要将某个分支的部分提交合并到`dev`分支时，我们需要用到`git cherry-pick`命令。

在webstorm中，我们只需切换分支到dev，然后在`Git`面板中选中需要合并提交的分支，选择需要合并的记录，点击`樱桃`图标即可完成合并。
