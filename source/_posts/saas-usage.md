---
title: 正确使用 Cloudflare SaaS
date: 2026-06-06
description: 正确使用 Cloudflare SaaS 折腾你的 cf 站点
tags:
  - Cloudflare
  - 优选
  - 教程
categories: 教程
---

# 前言

最近用虚拟卡号薅了个r2存储桶，正好想尝试尝试从来没接触过的cf saas，但可谓道阻且跻  
看了二叉大佬的教程，不知道我是有阅读障碍吗，我看到眼睛花都没搞懂（好在最后还是搞懂了🥴）

在阅读此篇博文前你需要先了解文中提到的**区域内/外**：
- **区域内**：*你在Cloudflare绑定的域名下*
- **区域外**：*非区域内*

## 简述 SaaS

SaaS初衷是让托管在非Cloudflare的域名也用上cf的cdn，当然它也是一种很不错的优选方案  

# 开始

{% note primary no-icon modern %}

一切的一切都需要您首先拥有一张银行卡（Visa，万事达，银联…），或者 PayPal，并在 Cloudflare 中验证<br>
虚拟卡也行，因为启用SaaS**不需要任何开支**（免费）

{% endnote %}

登录 [Cloudflare 仪表盘](https://dash.cloudflare.com)，转到 **example.com（你的域名）-- SSL/TLS -- 自定义主机名**
> 首次打开需要验证付款方式

**回退源** 输入`1.example.com`，并点击`添加回退源`，待回退源状态为**生效**

{% note warning no-icon %}

必须要添加回退源，否则无法添加自定义主机名<br>
回退源任意，但必须为区域内**开启代理了**的域名<br>
e.g. *1.example.com，添加了**A**、**AAAA**或**CNAME**解析并且开启了小黄云代理*

{% endnote %}

然后点`添加自定义主机名`：
- **自定义主机名**：example.org
  > 范例为区域外域名，使用区域内域名也可行

  {% note warning no-icon %}
  需预先将你填入的自定义主机名添加**CNAME**解析到区域内任意一个域名（2.example.com），且你解析到的域名（2.example.com）添加了
  - **A**、**AAAA**或**CNAME**解析且**开启了小黄云代理**
  - Cloudflare 泛播IP（优选域名）且**关闭了小黄云代理**
  {% endnote %}

- **自定义源服务器**：
  1. 默认源服务器：  
     访问 `example.org` 会得到与刚刚设置的**回退源**相同的内容
  2. 自定义源服务器：  
     访问 `example.org` 会得到与**你填写的自定义源服务器**相同的内容
做完必要的验证后，待**证书状态**为**有效**，就可以尽情享受啦！

## 使用场景

- 让 `example.org` 做 `1.example.com` 的“镜像站”
- 让 `example.org` 享受 Cloudflare CDN 的同时还能使用 `1.example.com` 解析的（服务器）IP地址
  {% note success no-icon %}
  你可以在您的服务器为不同的域名做不同的配置
  e.g. *用Nginx为 `1.example.com` 做一个配置，又为 `example.org`做另一个不同的配置*
  {% endnote %}

- 绑定您的Workers项目到区域外域名
  {% note info %}
  正常添加自定义主机名，然后到您的Workers项目，到**域**，点`添加域名`或`添加路由`，域名区域选择你**添加自定义主机名的区域**（e.g. 我是在 `example.com` 区域下的 **SSL/TLS -- 自定义主机名** 添加的 `example.org`，所以我的域名区域就选择 **example.com**）<br>
  域名就填刚才添加的自定义主机名（example.org）
  {% endnote %}

# 结束

很难解释清楚这个SaaS的用法，网上教程也并非寡人这一则，相信你一定会理解并熟练使用的！

## 其他

SaaS生效后，你也可以在Cloudflare为你的自定义主机名写规则（页面规则、Cloud Connector…）
