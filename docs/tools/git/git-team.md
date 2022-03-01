# git团队协作开发

## git开发流程图

![](https://gitee.com/leelillian/picgorepo/raw/master/images/git_dev_process.jpg)

## git开发流程
分支：大概三条主分支dev(develop开发分支)，pre-release(预发布分支)，master(发布分支)

1. 根据业务需求，将业务分成多个feature，按照独立模块的形式分配分支任务
2. 开发完成的feature合并到dev分支，测试，有问题不断修复，再次合并到dev，不断重复这个过程
3. 测试通过，需要上线的feature，才会合并到pre-release预发布分支
4. 一个阶段任务完成，到达上线节点，pre-release合并到master发布分支，并打上tag(v1.0, v1.1, v2.0, v3.0....)
5. hotfix -问题号，线上问题修复，将相应修改完成后，先合并到dev开发分支进行测试，测试通过后将热修复分支合并会master，并发布。