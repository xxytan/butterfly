---
title: CF、Vercel、Netlify优选
date: 2026-02-23
description: 提升部署在CF、Vercel及Netlify站点在大陆的访问速度
tags:
  - Cloudflare
  - Vercel
  - Netlify
  - 优选
  - 教程
categories: 教程
---

# 前言

{% note warning }

如果您正在使用`zeas.top`（包括`vercel.zeas.top`、`netlify.zeas.top`）优选域名，请先暂时使用其他优选域名，该优选域名将计划转移，后续可能会删除其解析记录
与2026/07/31通知

{% endnote %}

因某些神秘力量、及默认泛播节点境内表现较差，部署在Cloudflare、Vercel、Netlify（*cerlify*）的站点在大陆内访问速度一言难尽，但架不住人家的免费、免实名  
在这篇文章中，我将介绍如何优选部署在cerlify上的站点，让其**本土化**😎

# 开始

## Cloudflare Workers

到你要优选的Workers项目，点 **域 -- `添加路由`**，选择你要绑定到的区域（域名），**路由模式**填入你要绑定的子域，再加上`/*`，并点`添加路由`
![e.g.](https://images.oxue.de/file/p/5/7DY5gfUe.webp)

到域名区域的 **DNS 记录**，添加一个**CNAME**记录：
- **名称**：刚才路由的子域
- **目标**：`zeas.top`
- **代理状态**：关闭

![e.g.](https://images.oxue.de/file/p/5/g8IhXXnv.webp)并保存，然后静静等待记录生效

## Cloudflare Pages

> ~~按理来说**没有办法**~~  

### 方法一

先将您的Pages项目转换到Workers项目，然后参照[Workers的优选方法](#cloudflare-workers)

### 方法二

> 首先都应正常到您的Pages项目绑定域名

{% tabs 2nd-method-4pages, -1 %}

<!-- tab 域名托管在Cloudflare -->

将您要优选的子域托管到其他能*地域解析*的DNS服务商（NS1、华为云、DNSPod…），然后为您的子域添加一条记录为`xxxx.pages.dev`的**CNAME**，然后再添加一条记录为`zeas.top`的**CNAME**，并设置地域解析为**中国大陆**

<!-- endtab -->

<!-- tab 域名托管在非Cloudflare -->

大部分DNS服务商都能*地域解析*，如上，添加不同解析记录的**CNAME**即可

<!-- endtab -->

{% endtabs %}

## Vercel & Netlify

### 方法一

1. 到你的DNS服务商添加一个值为[优选域名](#优选域名)的**CNAME**记录
2. 在项目自定义域页面填加你要绑定的自定义域
3. 等待SSL证书部署完毕

### 方法二

1. 正常绑定你要优选的项目的域名
2. 等待SSL证书部署完毕后，到你的域名服务商把原来的**A**或**CNAME**记录改为值为[优选域名](#优选域名)的**CNAME**记录
3. 等待记录生效

# 结束

## 效果

{% note info %}
测速站：[Tcptest](https://www.tcptest.cn)  
测速模式：网站测速  
测速效果仅供参考，最后更新于**26/6/22**
{% endnote %}

![www.oxue.de → zeas.top](https://images.oxue.de/file/p/5/z8qDirUP.webp)
![www.zeas.top → zeas.top](https://images.oxue.de/file/p/5/dBRKLnAJ.webp)
![ltsc.os.kg → vercel.zeas.top](https://images.oxue.de/file/p/5/1zGt0uSH.webp)
![blog.zdsr.cn → apex-loadbalancer.netlify.com](https://images.oxue.de/file/p/5/RyIYPTOu.webp)

## 其他

如果你要优选的Vercel项目是需要**记录访问者IP**（评论系统、统计系统…）的，使用`vercel-cname.xingpingcn.top`和站长维护的优选域名会导致IP全跑到CDN节点，解决方法就是使用[官方默认的泛播域名](#优选域名)

自Cloudflare更新使用条款，**优选IP为违规行为**，后果包括但不限于封禁账号

Netlify的IP在部分地区会被阻断，所以尽管效果优选效果看起来很好，加载速度还是会有些慢

Netlify可以选择使用已有的SSL证书，只需在 **域名管理（Domain management）- HTTPS** 点`Set custom certificate`，然后粘贴你的证书并`Install certificate`就行了![](https://images.oxue.de/file/p/5/mUvF8zku.webp)

### 优选域名

{% note success no-icon %}

致谢个人维护者
[邢平cn](https://xingpingcn.top)、[CMLiu](https://blog.cmliussss.com)、ktff

{% endnote %}

CF Workers & Pages:
- ~~`zeas.top`~~
- `www.shopify.com`
- `*.bilibiliapp.cn`
- `*.cf.090227.xyz`

Vercel:
- ~~`vercel.zeas.top`~~
- `vercel-cname.xingpingcn.top`
- `cname.vercel-dns.com` *官方；仅必要时*

Netlify
- ~~`netlify.zeas.top`~~
- `netlify-cname.xingpingcn.top`
- `apex-loadbalancer.netlify.com` *官方*

{% hideToggle 'Deprecated: 关于站长维护的优选域名' %}

|优选域名|关于|
|-|-|
|`zeas.top`|抓自[WeTest.Vip](https://www.wetest.vip/page/cloudflare/address_v4.html)，三网优选|
|`vercel.zeas.top`|境内：地域解析 → 反代SNI节点、泛播节点，否则：泛播节点|
|`netlify.zeas.top`|优选泛播节点➕新加坡节点|

![zeas.top实时TCPing](https://vps789.com/public/view4/42750)

{% endhideToggle %}