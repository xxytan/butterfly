---
title: 用Termux部署Hexo
date: 2025-08-16
tags:
  - Termux
  - Hexo
categories: Hexo
description: 轻松使用Termux部署一个属于自己的博客
---

# 前言

此篇文章结合网络上的方法已经我个人的一些经验撰写，可能有些许不足，请谅解
桌面端的同志仅终端不一样，其他过程都大差不差

# 安装Termux

- 可以使用[原版Termux](https://github.com/termux/termux-app/releases/latest)
- 或第三方的类似于[ZeroTermux](https://github.com/hanxinhao000/ZeroTermux/releases/latest)（以此做演示）

打开后跟着向导，授予基本权限，然后我们就可以开始

## 换源

> 目的提高国内网络环境下载速度

运行
```bash
termux-change-repo
```
此时会出现![这样的界面](https://images.oxue.de/file/p/1/rVC9COkg.webp)

再度回车，选`Mirrors in Chinese Mainland`，空格并回车，等待软件包库更新完毕

# 安装 Hexo

首先安装 Node.js

{% tabs install-nodejs %}

<!-- tab 稳定版 -->

```bash
pkg install nodejs -y
```
或者通过`apt`
```bash
apt install nodejs -y
```

<!-- endtab -->

<!-- tab 长期版 -->

```bash
pkg install nodejs-lts -y
```

<!-- endtab -->

{% endtabs %}

然后便可安装 Hexo框架：

{% tabs install-hexo %}

<!-- tab npm -->

```bash
npm i hexo-cli -g
```

<!-- endtab -->

<!-- tab pnpm -->

```bash
pnpm add hexo-cli -g

# 或者
pnpm i hexo-cli -g
```

<!-- endtab -->

<!-- tab yarn -->

```bash
yarn global add hexo-cli
```

<!-- endtab -->

{% endtabs %}

# 站点初始化

运行
```bash
hexo init <folder>
```
> `<folder>` 即 文件夹名，任意但非中文、Emoji等**非法字符**

运行结束后`/data/data/com.termux/files/home/`下就会有一个名为`<folder>`的文件夹，里面储存着站点的配置文件，可根据实际进行配置

{% note warning %}

不要尝试在`/sdcard`初始化，否则后续安装依赖等一系列操作都会因权限不足而无法进行

{% endnote %}

# 结束

给大家列举几个常用的操作命令，均为缩写，具体可以查看官方文档

|命令|注释|
|-|-|
|`hexo s`|映射本地预览网页，端口4000|
|`hexo g`|以当前配置生成文件，生成在`./public`下|
|`hexo d`|部署到远程仓库|
|`hexo cl`|清理先前生成的文件|
|`hexo n post …`|新建文章，`…`即文章名字，生成在`./source/_posts`下|
|`hexo n draft …`|新建草稿，`…`即草稿名字，生成在`./source/_drafts`下|
|`hexo n page …`|生成页面，`…`即页面名字，生成友链和关于等页面会用到|
|`hexo p …`|发布草稿为文章，`…`即要发布的草稿名字|
