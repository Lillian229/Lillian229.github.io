(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{541:function(t,i,e){"use strict";e.r(i);var s=e(34),a=Object(s.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git基础概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git基础概念"}},[t._v("#")]),t._v(" Git基础概念")]),t._v(" "),e("ul",[e("li",[t._v("git是C语言开发法的，Linus 花了两周时间自己用 C 写了一个分布式版本控制系统")])]),t._v(" "),e("h2",{attrs:{id:"git-分布式版本控制系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-分布式版本控制系统"}},[t._v("#")]),t._v(" GIT：分布式版本控制系统")]),t._v(" "),e("ul",[e("li",[t._v("Git是一款免费、开源的分布式源代码管理工具,是一种在命令行界面中运行的修订控制系统。")])]),t._v(" "),e("p",[t._v("版本控制\n概念：就代码或文件的重要瞬间形成版本保存一份副本！\n本质：就是将关键功能完成后的整个代码复制一份压缩保存起来，并生成一个唯一的版本号，后期如果需要回退到原有的有个版本或者是用当前的和某一个版本进行比较等，都可以有效的进行管理。")]),t._v(" "),e("h2",{attrs:{id:"git和github的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git和github的区别"}},[t._v("#")]),t._v(" git和github的区别")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("\x3c!-- 可以认为是一个软件，能够帮你更好的写程序 --\x3e\n")])])]),e("ul",[e("li",[e("p",[t._v("Github是用Git做版本控制的代码托管平台。只支持Git作为唯一的版本库格式进行托管。它以各种不同的编程语言托管您的源代码项目，并跟踪每次迭代所做的各种更改。")]),t._v(" "),e("p",[t._v("GitHub于2008年4月10日正式上线，除了Git代码仓库托管及基本的Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能。")])])]),t._v(" "),e("h2",{attrs:{id:"svn-集中式-git-分布式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#svn-集中式-git-分布式"}},[t._v("#")]),t._v(" SVN(集中式)&GIT(分布式)")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("SVN：基于差异的版本控制，存储的是一组基本文件和每个文件随时间逐步积累的差异\n优：节省磁盘空间\n缺：耗时、效率低")])]),t._v(" "),e("li",[e("p",[t._v("GIT：GIT快照在原有文件版本上的基础上重新生成一份新的文件，类似于备份。为了效率，如果文件没有修改，Git将不在存储该文件，只需要保留一个链接指向之前存储的文件。\n优：版本切换时非常快，因为每个版本都是完整的文件快照，切换版本时直接恢复目标版本的快照即可。\n缺：占用磁盘空间大。")])])]),t._v(" "),e("h2",{attrs:{id:"设置忽略文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置忽略文件"}},[t._v("#")]),t._v(" 设置忽略文件")]),t._v(" "),e("p",[t._v("在本地工程常会修改一些配置文件，这些文件不需要被提交， 而又不想每次执行 git status 时都让这些文件显示出来")]),t._v(" "),e("ul",[e("li",[t._v("利用命令"),e("code",[t._v("touch .gitignore")]),t._v("新建文件")]),t._v(" "),e("li",[t._v("然后往文件中添加需要忽略哪些文件夹下的什么类型的文件\n"),e("ul",[e("li",[e("code",[t._v("$ vim .gitignore")])]),t._v(" "),e("li",[e("code",[t._v("$ cat .gitignore")])]),t._v(" "),e("li",[t._v("在.gitignore写入忽略文件名称or类型")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("eg.\n/target/class \n.settings \n.imp \n*.ini \n注意：忽略/target/class 文件夹下所有后缀名为.settings，.imp 的文件，忽略所有后缀名为.ini 的文件。\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])])])]),t._v(" "),e("h2",{attrs:{id:"git-fetch-和-git-merge-和-git-pull-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-fetch-和-git-merge-和-git-pull-的区别"}},[t._v("#")]),t._v(" git fetch 和 git merge 和 git pull 的区别")]),t._v(" "),e("p",[t._v("区别如下 git pull 相当于 git fetch 和 git merge，即更新远程仓库的代码到本地仓库，然后将内容合 并到当前分支。")]),t._v(" "),e("ul",[e("li",[t._v("git merge: 将内容合并到当前分支")]),t._v(" "),e("li",[t._v("git pull 相当于是从远程获取最新版本并 merge 到本地 命令从中央存储库中提取特定分支的新更改或提交，并更新本地存储库中的目标分支。")]),t._v(" "),e("li",[t._v("git fetch 相当于是从远程获取最新版本到本地，不会自动 merge")]),t._v(" "),e("li",[t._v("git pull = git fetch + git merge")])])])}),[],!1,null,null,null);i.default=a.exports}}]);