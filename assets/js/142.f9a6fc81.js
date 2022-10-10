(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{551:function(t,v,_){"use strict";_.r(v);var i=_(34),e=Object(i.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"git团队协作开发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git团队协作开发"}},[t._v("#")]),t._v(" git团队协作开发")]),t._v(" "),_("h2",{attrs:{id:"git开发流程图"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git开发流程图"}},[t._v("#")]),t._v(" git开发流程图")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/git_dev_process.jpeg",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"git在开发中的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git在开发中的作用"}},[t._v("#")]),t._v(" git在开发中的作用")]),t._v(" "),_("ol",[_("li",[t._v("在工作目录中修改某些文件")]),t._v(" "),_("li",[t._v("对修改后的文件进行快照，然后保存到暂存区域")]),t._v(" "),_("li",[t._v("提交更新，将保存在暂存区域的文件快照永久转储到 git 目录中")])]),t._v(" "),_("h2",{attrs:{id:"git开发流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git开发流程"}},[t._v("#")]),t._v(" git开发流程")]),t._v(" "),_("p",[t._v("分支：大概三条主分支dev(develop开发分支)，pre-release(预发布分支)，master(发布分支)")]),t._v(" "),_("ol",[_("li",[t._v("根据业务需求，将业务分成多个feature，按照独立模块的形式分配分支任务")]),t._v(" "),_("li",[t._v("开发完成的feature合并到dev分支，测试，有问题不断修复，再次合并到dev，不断重复这个过程")]),t._v(" "),_("li",[t._v("测试通过，需要上线的feature，才会合并到pre-release预发布分支")]),t._v(" "),_("li",[t._v("一个阶段任务完成，到达上线节点，pre-release合并到master发布分支，并打上tag(v1.0, v1.1, v2.0, v3.0....)")]),t._v(" "),_("li",[t._v("hotfix -问题号，线上问题修复，将相应修改完成后，先合并到dev开发分支进行测试，测试通过后将热修复分支合并会master，并发布。")])]),t._v(" "),_("h2",{attrs:{id:"项目执行流程使用的命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#项目执行流程使用的命令"}},[t._v("#")]),t._v(" 项目执行流程使用的命令：")]),t._v(" "),_("p",[t._v("git branch -a (查看所有分支)\n0. 克隆代码 git clone 地址")]),t._v(" "),_("ol",[_("li",[t._v("拉取线上 master 最新代码:  "),_("code",[t._v("git pull origin master")])]),t._v(" "),_("li",[t._v("切换到开发分支: "),_("code",[t._v("git checkout dev")])]),t._v(" "),_("li",[t._v("合并master 本地分支（master）:  "),_("code",[t._v("git merge master")])]),t._v(" "),_("li",[t._v("开始开发")]),t._v(" "),_("li",[t._v("开发结束")]),t._v(" "),_("li",[t._v("查看当前文件更改状态: "),_("code",[t._v("git status")])]),t._v(" "),_("li",[t._v("把所有更改代码放到缓存区: "),_("code",[t._v("git add -A")])]),t._v(" "),_("li",[t._v("查看当前文件更改状态 : "),_("code",[t._v("git status")])]),t._v(" "),_("li",[t._v("缓存区内容添加到仓库中:  "),_("code",[t._v("git commit -m '本次更改注释'")])]),t._v(" "),_("li",[t._v("把代码传到 gitLab 上:  "),_("code",[t._v("git push origin dev")])]),t._v(" "),_("li",[t._v("若代码到达上线标准则合并代码到 master,切换分支到 master:  "),_("code",[t._v("git checkout master")])]),t._v(" "),_("li",[t._v("拉取 master 最新分支:  "),_("code",[t._v("git pull origin master")])]),t._v(" "),_("li",[t._v("合并分支代码到 master(若有冲突则解决冲突):  "),_("code",[t._v("git merge dev")])]),t._v(" "),_("li",[t._v("把当前代码上传到 gitLab:  "),_("code",[t._v("git push origin master")])]),t._v(" "),_("li",[t._v("代码上线后，用 tag 标签标记发布结点(命名规则：prod_+版本_+上线日期) "),_("code",[t._v("git tag -a prod_V2.1.8_20200706")])]),t._v(" "),_("li",[t._v("tag 标签推到 gitLab "),_("code",[t._v("git push origin prod_V2.1.8_20200701")])])]),t._v(" "),_("h3",{attrs:{id:"暂存区命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#暂存区命令"}},[t._v("#")]),t._v(" 暂存区命令")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("需要合并别人代码进来")]),t._v(" "),_("ul",[_("li",[t._v("把自己的代码放入暂存: git stash")]),t._v(" "),_("li",[t._v("如果需要释放出来用: git stash pop#恢复最近一次的暂存")]),t._v(" "),_("li",[t._v("查看有哪些队列: git stash list")]),t._v(" "),_("li",[t._v("删除第一个队列，以此可以类推:  git stash drop stash@{0}")])])]),t._v(" "),_("li",[_("p",[t._v("需要切换分支")]),t._v(" "),_("ul",[_("li",[t._v("git add -A")]),t._v(" "),_("li",[t._v("git stash save 'demo'")]),t._v(" "),_("li",[t._v("git stash list")]),t._v(" "),_("li",[t._v("git stash apply stash@{0}")])])])]),t._v(" "),_("h3",{attrs:{id:"补充指令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#补充指令"}},[t._v("#")]),t._v(" 补充指令")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("git reflog")]),t._v(" 查看提交记录命令：")]),t._v(" "),_("li",[_("code",[t._v("git show")]),t._v(" # 显示某次提交的内容")]),t._v(" "),_("li",[_("code",[t._v("git show $id git rm <file>")]),t._v(" # 从版本库中删除文件")]),t._v(" "),_("li",[_("code",[t._v("git reset <file>")]),t._v(" # 从暂存区恢复到工作文件")]),t._v(" "),_("li",[_("code",[t._v("git reset HEAD^")]),t._v(" # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改")]),t._v(" "),_("li",[_("code",[t._v("git diff <file>")]),t._v(" # 比较当前文件和暂存区文件差异 git diff")]),t._v(" "),_("li",[_("code",[t._v("git log -p <file>")]),t._v(" # 查看每次详细修改内容的 diff")]),t._v(" "),_("li",[_("code",[t._v("git branch -r")]),t._v(" # 查看远程分支")]),t._v(" "),_("li",[_("code",[t._v("git merge <branch>")]),t._v(" # 将 branch 分支合并到当前分支")]),t._v(" "),_("li",[_("code",[t._v("git stash pop git pull")]),t._v(" # 抓取远程仓库所有分支更新并合并到本地")]),t._v(" "),_("li",[_("code",[t._v("git push origin master")]),t._v(" # 将本地主分支推到远程主分支")]),t._v(" "),_("li",[_("code",[t._v("git branch 分支名")]),t._v("#创建分支")]),t._v(" "),_("li",[_("code",[t._v("git checkout 分支名")]),t._v("#切换分支")]),t._v(" "),_("li",[_("code",[t._v("git checkout -b 分支名")]),t._v("#创建并切换分支")]),t._v(" "),_("li",[_("code",[t._v("git branch --merge / git branch --no-merge")]),t._v("#查看已经合并的分支/未合并的分支")]),t._v(" "),_("li",[_("code",[t._v("git branch -d 分支名 / git branch -D")]),t._v(" 分支名#删除的已合并的分支/未合并的分支")])])])}),[],!1,null,null,null);v.default=e.exports}}]);