---
title: "Ubuntu 22.04 使用指南"
description: "Ubuntu 22.04 系统配置、网络设置、Docker 安装等常用操作记录"
publishDate: 2024-01-01
tags: ["Linux", "Ubuntu", "Docker"]
language: "zh-CN"
---

# Ubuntu（22.04）

## 查看主机端口

```
//终端输入
ifconfig
```

```
//找到类似于以下的行
ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    inet 192.168.1.100/24 brd 192.168.1.255 scope global dynamic noprefixroute ens33
       valid_lft 1745sec preferred_lft 1745sec
    inet6 fe80::a00:27ff:fe4e:5c9/64 scope link
       valid_lft forever preferred_lft forever
//找到标记为 "inet" 的行，后面的数字即为你的 IP 地址
//在这个例子中即为：192.168.1.100
```

ubuntu_RZQ的主机端口为：

```
192.168.40.128
```



## 发现vmtools不行了

```
sudo apt autoremove open-vm-tools
sudo apt-get update
sudo apt-get install open-vm-tools-desktop 或 sudo apt-get install open-vm-tools-desktop fuse
reboot
```

如果无法主机与虚拟机之间拖拽文件，那造成问题的原因可能是，虚拟机中的**Wayland**存在不完备性，影响了拖拽和复制操作。为了解决这个问题，你可以尝试：

​    修改你的**自定义配置文件**，它的位置应该在

```bash
/etc/gdm3/custom.conf
```

​    或者

```awk
/etc/gdm/custom.conf
```

​    进入该文件，你应该会找到一句被注释的语句

```text
#WaylandEnable=false
```

​    **把注释符号 ‘#’ 删除，保存文件并重启虚拟机**。如果问题就出在这，你就会发现现在已经**可以在虚拟机和物理机之间拖拽文件了**，大大提高了工作效率。



## 网络没了

```
sudo service NetworkManager  stop 
sudo rm /var/lib/NetworkManager/NetworkManager.state 
sudo service NetworkManager start
```



## 关闭unattended-upgrade

-   打开终端（Ctrl+Alt+T）。
-   edit

```bash
sudo vim /etc/apt/apt.conf.d/20auto-upgrades
APT::Periodic::Update-Package-Lists "0";
APT::Periodic::Unattended-Upgrade "0";
```

 

-   运行以下命令以停止和禁用自动升级服务：

```bash
sudo systemctl stop apt-daily.service
sudo systemctl disable apt-daily.service
sudo systemctl kill --kill-who=main apt-daily.service
sudo systemctl disable apt-daily.timer
sudo systemctl mask apt-daily.timer
sudo systemctl daemon-reload
```



## 命令行

```c
//root 模式
su root
//退出root 模式
ctrl+d
//切换目录（以切换到usr为例）
cd /usr
```



## 更换源

[ubuntu22.04 更换国内源 - Jacob-Chen - 博客园](https://www.cnblogs.com/jacobsblog/articles/18494207)



## 安装Docker

在 Ubuntu 22.04 上安装 Docker，你可以按照以下步骤进行：

更新软件包

```
sudo apt update
sudo apt upgrade -y
```

安装必要的依赖包

```
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

添加 Docker 的官方 GPG 密钥

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

设置 Docker 的稳定仓库

```
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

更新 apt 包索引

```
sudo apt update
```

安装 Docker

```
sudo apt install docker-ce docker-ce-cli containerd.io -y
```

启动 Docker 并设置开机启动

```
sudo systemctl start docker
sudo systemctl enable docker
```



## 使用docker开启题目环境

[如何搭建《从0到1：CTFer 成长之路》docker 做题环境 | Chang (cs-cshi.github.io)](https://cs-cshi.github.io/cybersecurity/如何搭建《从0到1：CTFer 成长之路》docker 做题环境/)

[如何搭建《从0到1：CTFer 成长之路》docker 做题环境 - 锦瑟，无端 - 博客园 (cnblogs.com)](https://www.cnblogs.com/cscshi/p/15705040.html)

1.在 home/usr 下 创建一个测试目录 compose

```
mkdir compose
```

2.配置 docker-compose.yml，若不存在此文件，直接新建

```
vim  docker-compose.yml
```

按``dd``删除一行

按i插入修改，再按Esc退出编辑；输入``:wq``退出保存文件

3.启动

```
sudo docker-compose up -d
```

4.停止

```
sudo docker-compose down
```

开启后：打开浏览器输入你的主机的ip地址就可以自动跳转到开启的题目环境啦



## .git泄露

### 使用scrabble

1. 终端下打开含scrabble的文件夹

2. 终端输入

   ```
   ./scrabble url（此处要修改为需要获取flag的目的网址）
   ```

   ```c
   //再输入ls看目录内容，找到获取到的新文件
   ls
   //再cat 显示获取到的内容（以index.html为例）
   cat index.html
   //找到里面的flag就可以啦
   ```



## 远程ssh

win（powershell）

```
 notepad $env:USERPROFILE\.ssh\id_rsa.pub
 
 全选复制
```

linux

```
mkdir -p ~/.ssh
nano ~/.ssh/authorized_keys

粘贴进去

chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

linux 安装ssh服务

```
## 检查是否安装了ssh服务
sudo systemctl status ssh

## 安装
sudo apt install openssh-server
sudo systemctl start ssh
sudo systemctl enable ssh
```



vscode

```
Host my-vm
    HostName 你的虚拟机IP或域名
    User 你的虚拟机用户名
    IdentityFile "C:\Users\quzir\.ssh\id_rsa"
```



## openvpn

```
## 开启
sudo openvpn --config ./openvpn20241111.ovpn

## 关闭
sudo killall openvpn
```



## 修改word里面的字体

```
sudo apt install ttf-mscorefonts-installer
```



鼠标dpi

```
## 罗技驱动
sudo apt install piper
```


## 命令行代理

```
export http_proxy="http://127.0.0.1:7890"
export https_proxy="http://127.0.0.1:7890"
```

```
export http_proxy="http://127.0.0.1:10809"
export https_proxy="http://127.0.0.1:10809"
```
