# git常见问题

## Mac配置git环境
[Mac配置git环境](../common-tools/02mac_shortcut.md#212git)

## 服务器配置git
在服务器中生成公钥，添加在github设置中即可
1. 在本机终端连接服务器`ssh root@47.108...`
2. 切换目录`cd ~/.ssh`
3. `ssh-keygen -o`

    ![](https://hcx-blog-images.oss-cn-chengdu.aliyuncs.com/images/20220318135221.png)

4. 查看公钥`cat ~/.ssh/id_rsa.pub`，复制公钥
5. 在github中-> `setting` -> `SSH and GPG keys` -> `new ssh key` -> 粘贴刚刚的复制的公钥即可