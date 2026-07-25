---
title: 部署Hexo到各静态资源上线平台（Pages）
date: 2025-12-21
tags:
  - Hexo
  - Termux
  - Pages
categories: Hexo
description: 轻松让你的Hexo在互联网永生
---

# 前言
- 如何部署Hexo请移步[上篇文章](/posts/hexo-d-termux)
- 也是以Termux为终端，桌面端的宝子除了终端不同，其他步骤大差不差

# 准备工作

运行以安装Git和OpenSSH：
```bash
pkg install git openssh -y
```

## 配置 Git

> 以[GitHub](https://github.com)做演示

逐条运行
```bash
git config --global user.name '<username>'
git config --global user.email '<useremail>'
```

{% note default %}

`<username>` → *GitHub用户名*  
`<useremail>` → *GitHub绑定邮箱*  
**下文出现依旧**

{% endnote %}

以做 Git 全局配置

## 配置 OpenSSH

运行
```bash
ssh-keygen -t rsa -C "<useremail>"
```
以生成公钥

然后再运行
```bash
cat ~/.ssh/id_rsa.pub
```
以查看公钥，将它复制下来，

然后打开[SSH and GPG Keys](https://github.com/settings/keys)，点`New SSH Key`，然后点 `Add SSH Key`，填写信息：
- **Title**：随便
- **Key type**：**Authentication type**
- **Key**：刚刚复制的公钥

然后点 `Add SSH key`

# 托管代码到远程仓库

[新建](https://github.com/new)一个 GitHub 新仓库，仓库名称随便，然后点`Create Repository`

## 初始化仓库

`cd`到博客文件夹，然后逐条运行
```bash
# 初始化仓库
git init

# 添加代码到暂存区
git add .

# 提交更改
git commit -m "<commitment>"

# 创建默认主分支 main
git branch -M main

# 连接远程仓库
git remote add origin git@github.com:<username>/<repo>.git
```
> `<commitment>`随便

然后运行
```bash
# 设置 main 为默认推送分支并推送
git push -u origin main
```
以托管博客代码到远程仓库

# 部署到各Pages

## GitHub Pages

> 利用GitHub Actions部署，大陆容易被墙

在博客文件夹下创建`.github/workflows/pages.yml`，并填入以下内容：
```yaml
name: Pages

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          submodules: recursive
      - name: Use Node.js 24 # 填自己的大版本号
        uses: actions/setup-node@v4
        with:
          node-version: "24.13.0" # 填自己的详细版本号
      - name: Cache NPM dependencies
        uses: actions/cache@v4
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

{% note warning %}

代码16、19行的版本号（高亮部分填**本地的Node.js版本号**，运行以下命令以查看：
```bash
node -v
```

{% endnote %}

打开仓库设置里的**Pages**，把**Bulid and deployment**下的**Source**从**Deploy from a branch**改为`GitHub Actions`，![](https://images.oxue.de/file/p/2/vP0LKZ1w.webp)

返回终端，运行
```bash
git add .
git commit -m "<commitment>"
git push
```
以推送变更，此时我们打开仓库的**Actions**，当一切皆绿时，我们点击**deploy**下面给的类似于 *xxytan.github.io* 地址，就能访问我们的博客啦🎉!![](https://images.oxue.de/file/p/2/iC7N8yvN.webp)

### 绑定域名

在博客文件夹内创建一个`CNAME`文件，填入自定义域，然后推送变更（此处省略）
再到你的DNS服务商添加一个值为 `<username>.github.io`的**CNAME**记录

继续到仓库设置的**Pages**，在右侧**Custom domain**下填入前面输入的自定义域，点`Save`，等待下方成**DNS check successful**，能成功访问自定义域就成功啦🎉![](https://images.oxue.de/file/p/2/W8pfjbCk.webp)

## Cloudflare Pages

> **站长最推荐**，后续可参照[此文章](/posts/better-cerlify/#cloudflare-pages)优选而提高在大陆地区访问速度

登录[Cloudflare 仪表盘](https://dash.cloudflare.com)，

打开**计算 -- Workers and Pages**，点`创建应用程序`，再点下面的`Get started`![](https://images.oxue.de/file/p/2/ihjQdvUT.webp)
选择 `导入现有的 Git 存储库`，授权一下你的 GitHub，然后选择博客仓库，并填构建信息：
- **构建命令**：`npx run build`
- **构建输出目录**：`public`

点`保存并部署`

待部署完成后，会给一个 *xxxxx.pages.dev* 的域名，点进去也是能够访问的

### 绑定域名

打开项目，点 **自定义域** → `设置自定义域`，跟着引导走，等到呈现**活动**状态就能够通过自定义域访问了![](https://images.oxue.de/file/p/2/veYi6W3l.webp)

## EdgeOne Pages

> 腾讯的玩意儿，**已备案的域名**访问速度极佳，未备案域名堪比CF

登录[EdgeOne](https://console.tencentcloud.com/edgeone)，

点**Makers** → `创建项目` → `导入 Git 仓库`，授权一下 GitHub，选择项目仓库，会自动匹配**框架预设**，我们直接点`开始部署`就好了

部署完毕后会有一个 `xxxxx.edgeone.xxx` 域名，三个小时后过期，打开后也是能够访问的

### 绑定域名

到**项目设置**，点`添加自定义域`，跟着引导走就行了，待`DNS记录`&`证书`呈现已部署状态就能通过自定义域名访问了![](https://images.oxue.de/file/p/2/2PzTlz3O.webp)

## Vercel

> 大陆访问速度还行，后续也可以通过优选提高访问速度，具体方法参考[此文章](/posts/better-cerlify/#vercel--netlify)

登录[Vercel](https://vercel.com)，*新账号会引导创建团队*，

点右上角的**Add New -- Project**，授权一下你的GitHub，选择项目仓库，会**自动匹配预设**，否则请自行选择![](https://images.oxue.de/file/p/2/hYfCirH7.webp)

然后点`Deploy`，等待一会就部署好啦，点**Go to Dashboard**，就能看到一个 *xxxxx.vercel.app* 的域名，打开也是能够访问的

### 绑定域名

点**Domains**旁的"➕"，![](https://images.oxue.de/file/p/2/MQFu8gHZ.webp)然后点`Add Domain`，输入你想绑定的域名，点`Save`或回车，再把给出的**CNAME**记录添加到域名管理商，耐心等待一会，直至呈现可用（**Valid Configuration**）就行啦![](https://images.oxue.de/file/p/2/WrjuvCUN.webp)

## Netlify

> 同Vercel，**但其IP容易被GFW阻断**

登录[Netlify](https://app.netlify.com)，*新账号会引导创建团队*，

点右上角的**Add new project**，选`Import an existing project`，授权一下你的GitHub，  
选择前面创建的仓库，项目名称（**Project name**）随便。会自动识别并填写关键信息，否则请自行填写（省略图片因为太长了）  
部署完成后，打开 *\<name>.netlify.app* 也是可以访问的

{% note default %}

`<name>` 即 **先前设置的项目名称**  
**下文出现依旧**

{% endnote %}

### 绑定域名

切到**Domain management**，右边点**Add a domain**下的`Add a domain you already own`，![](https://images.oxue.de/file/p/2/Rm2R0IMZ.webp)
填入你的域名，然后点`Verify`，会要求进行**TXT域名所有权验证**，我们可以直接点击下方的`Add subdomain`跳过验证![](https://images.oxue.de/file/p/2/bbhoQG5G.webp)
此时到域名管理商添加值为`<name>.netlify.app`的**CNAME**记录，解析成功后会自动申请并部署SSL证书

# 结束

其实也可以直接用**hexo-deployer-git**插件一键生成静态资源并部署到仓库，具体请看[官方文档](https://hexo.io/zh-cn/docs/one-command-deployment#Git)，但是我个人不推荐

有考虑专门出一篇文章介绍**如何部署到cf workers**
