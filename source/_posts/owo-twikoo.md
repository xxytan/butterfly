---
title: Twikoo 表情包制作
date: 2026-06-22
description: 制作属于你自己的表情包
tags:
  - 教程
  - Twikoo
categories: 教程
---

# 前言

Twikoo官方文档好像没有将做表情包，当然Twikoo默认也内置了一个**OwO**。但如果你觉得不够用的话，跟着此篇文章，教会你制作Twikoo（OwO）表情包

# 开始

```json
{
  "self-owo": {
    "type": "image",
    "container": [
      {
        "icon": "<img src='<emojiUrl>'>",
        "text": "<emojiId>"
      },
      // 此处省略
      …
    ]
  },
  // （可选）多个OwO并在一个json
  "2nd": {
    "type": "image",
    "container": [
      // 依旧
      …
    ]
  }
}
```

{% note default %}

`emojiUrl`：表情包图片链接
`emojiId`：表情包唯一标识
`,`：多个`{}`、量**之间**要加，否则不用

{% endnote %}

{% note primary %}

如果表情包有很多个，手动编辑会很累人，可以询问万能的AI哦

{% endnote %}

# 结束

站长自己做了几个预设（⚠️仅供学习），大伙也可以直接抄作业🌚：

|类型|*json*链接|
|-|-|
|QQ|[点我](https://ftp.oxue.de/json/owo_qq.json)|
|酷安|[点我](https://ftp.oxue.de/json/owo_coolapk.json)|
|抖音|[点我](https://ftp.oxue.de/json/owo_douyin.json)|