# Linux常用命令
- 使用工具：阿里云服务器
- 终端连接阿里云服务器
    - 执行`ssh root@47....`，输入服务器密码就可顺利登陆远程服务器，即可在本地电脑操作远程服务器
- shell:`shell`有很多种，只要能给用户提供命令行环境的程序，都可以看作`shell`，`MacOS `中的默认 `Shell`  就是 `Bash` 。
    - 查看正在使用的shell：`echo $SHELL` (SHELL大写)
    - 查看当前系统安装的所有 Shell  种类：`cat /etc/shells` 
- 命令行提示符解析：
	```shell
	[root@iZ2xxxxxxxxqbpZ ~]# pwd
	/root
	```
	- `root`：用户名
	- `iZ2xxxxxxxxqbpZ`：主机名
	- `~`：当前所在目录为家目录（`root` 用户的家目录是 `/root` 普通用户的家目录在 `/home` 下）
	- `#`：所具有的权限（`root` 用户为 `#` ，普通用户为 `$`）
- `root`超级用户，具备操作系统的一切权限
## 常用命令
- 查看-当前-路径：`pwd`
- 查看-当前-用户名：`whoami`
- 查看-当前-主机名：`hostname`