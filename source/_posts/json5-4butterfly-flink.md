---
title: 为 Butterfly 的友链页增加 json5 支持
date: 2026-07-29 14:51:56
tags:
  - Hexo
  - Butterfly
  - 教程
categories: 教程
description: 让你的 Butterfly 友链页支持从 json5 抓取友链信息
---

## 前言

由于我的友链页数据是爬自外部链接，刚好我又有对特定友链信息注释的需求，也让我这个没有深度接触json的人发现：~~json不能注释~~
也不能说完全不能注释，只是json的注释满足不了我的需求。寻找了一些小伙伴，发现还有json5这个东西，相较于json，可以直接使用`//`、`/* … */`来注释
借助万能的AI，于是便有了此文章

## 开始

编辑主题文件夹下的`layout/includes/page/flink.pug`：
1. 原第七行后新增一行，用于引入 json5 支持：
   ```diff
     if flink_url || random
       - const linkData = flink_url ? false : site.data.link || false
   +   script(src="https://registry.npmmirror.com/json5/latest/files/dist/index.min.js")   // 我是第八行
       script.
       // 省略…
   ```
   > 此处使用了阿里的cdn，其他像`unpkg`、`jsdelivr`也可以哦

2. 修改原48到50行，以启用 json5：
   ```diff
     fetch("!{url_for(flink_url)}")
   -   .then(response => response.json())
   +   .then(response => response.text())
   +   .then(text => JSON5.parse(text))
       .then(add)
   ```

> [点我](https://raw.githubusercontent.com/xxytan/butterfly/main/themes/butterfly/layout/includes/page/flink.pug)去看修改后的示例

## 结束

这样以后你写友链信息就可以使用`//`、`/* … */`等来注释啦！比如说你的某个友链信息要暂时在页面上移除，但是又不想把整个友链信息从json中删掉，那么把它注释掉是个很好的选择，也方便以后恢复友链显示

如果想要在说说页也用上json5，方法应该大差不差，但因为我没有这个需求，所以不再过多介绍🌚
