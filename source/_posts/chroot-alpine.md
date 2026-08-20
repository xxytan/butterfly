---
title: 在安卓上运行 Alpine Linux 于 Chroot
date: 2026-08-20 07:43:42
description: 在安卓设备上使用 Chroot 容器环境运行 Alpine Linux
tags:
  - 教程
  - Linux
  - Chroot
  - AlpineLinux
categories: 教程
---

## 前言

因为我一直偏向于用手机打字，也只习惯用手机键盘打字，所以也一直都是在手机上写博文。往常我都是用 Termux + TMoe 营造Chroot环境，再在容器里用Linux推送代码，但是我受够了TMoe的臃肿，于是便寻求他路
依据[Alpine Linux 百科](https://wiki.alpinelinux.cn/wiki/Installing_Alpine_Linux_in_a_chroot)，便有了此篇文章
Chroot可用于任何Linux、Unix发行版，此篇文章仅局限于安卓设备，包括安装Chroot Alpine Linux都是在安卓内置的Linux中完成

### 要求

- 设备已Root

## 开始

### 准备

先创建文件夹：
```bash
mkdir /data/alpine   # 用作Chroot的根目录
mkdir /data/temp    # 用作临时存放安装工具
```

{% note warning %}
因内部存储`/storage/emulated/0`的局限性，请不要在内部存储创建以上任何文件夹
{% endnote %}

（可选）然后准备环境变量，方便我们后续安装：
```bash
# 指向Chroot根目录
export CHROOT_DIR=/data/alpine

# 填入一个镜像源
export MIRROR=http://mirrors.aliyun.com/alpine

# 填入你的手机处理器（系统）架构
export ARCH=aarch64
```

{% note info no-icon %}
- 镜像源我用的是[阿里云](http://mirrors.aliyun.com/alpine)的，我列举出国内几个常用的镜像源：
  ```
  http://mirrors.tuna.tsinghua.edu.cn/alpine  # 清华
  http://mirrors.ustc.edu.cn/alpine           # 中科大
  http://mirrors.nju.edu.cn/alpine            # 南京大学
  http://mirrors.huaweicloud.com/alpine     # 华为云
  ```
  更多请看[官方列表](https://dl-cdn.alpinelinux.org/alpine/MIRRORS.txt)
- 目前大部分手机都是64位处理器（`aarch64`，系统也是64位的，古早一点的手机可能会是32位处理器/系统
  如果是32位处理器/系统 变量`ARCH`就填`armv7`或者`armhf`
{% endnote %}

然后下载用于初始化 Alpine Linux 的工具包：
```bash
# 转到先前创建的临时目录
cd /data/temp

# 下载包
curl -LO ${MIRROR}/latest-stable/main/{$ARCH}/apk-tools-static-3.0.7-r0.apk

# 解压包
tar -xzf apk-tools-static-*.apk
```
{% note info no-icon %}
- 示例下载的包工具是**最新稳定版**，如果想用测试版，仅需把`latest-stable`替换为`edge`，下文依旧
- `3.0.7-r0`为我更新此篇文章时的最新版本，可直接打开您的镜像源去查看最新版本并自行替换
{% endnote %}

### 初始化

依旧位于临时目录，执行以下命令以初始化系统基本包：
```bash
./sbin/apk.static -X ${MIRROR}/latest-stable/main -U --allow-untrusted -p ${CHROOT_DIR} --initdb add alpine-base
```
便会开始安装包和依赖库

然后挂载容器的`/dev`、`/proc`、`/sys`：
```bash
mount -o bind /dev ${CHROOT_DIR}/dev
mount -t proc none ${CHROOT_DIR}/proc
mount -o bind /sys ${CHROOT_DIR}/sys
```

然后添加DNS解析服务器：
```bash
echo \
"nameserver 223.5.5.5
nameserver 223.6.6.6" \
> ${CHROOT_DIR}/etc/resolv.conf
```
> 此处使用了阿里公共DNS

然后添加软件包源：
```bash
echo \
"${MIRROR}/v3.24/main
${MIRROR}/v3.24/testing
${MIRROR}/v3.24/community" \
> ${CHROOT_DIR}/etc/apk/repositories
```

{% note warning no-icon %}
`v3.24`为我更新此篇文章时的最新正式版本，可直接打开您的镜像源去查看最新正式版本并自行替换
{% endnote %}

然后，<mark>我们便可正式进入我们的容器</mark>：
```bash
chroot ${CHROOT_DIR} /bin/ash -l
```

### 优化

可以更新一下软件包库：
```bash
apk update
```

然后安装一些基本软件：
```bash
apk add \
	bash \
	curl \
	wget \
	vim \
	nano \
	unzip
```

如果你要添加普通用户用于日常使用的话：
```bash
# 安装 doas（类似于 sudo）
apk add doas

# 新增用户
adduser <username>

# 添加新用户到组 wheel
addgroup <username> wheel

# 准许组 wheel 的用户使用 doas
echo "permit persist :wheel" >> /etc/doas.d/doas.conf
```

**至此，就尽情享受你的掌上 Alpine Linux 叭！**

## 结束

- 清理初始化包：
  ```bash
  rm -rf /data/temp
  ```
- Linux的环境变量在终端结束后会被清除，下次如果在用到`${CHROOT_DIR}`，在未设置变量的情况下会报错，建议直接使用容器根目录的绝对路径
- 每次进入Chroot都会丢失变量`HOME`，导致家目录出错，我们可以在进入容器前就先设置好该变量：
  ```bash
  chroot /data/alpine /usr/bin/env HOME=/root /bin/ash -l
  ```
- 每次启动和退出容器都需要挂载和卸载`/dev`、`/proc`、`/sys`
- 如果觉得进入容器麻烦可像AI索要一个启动脚本👀
