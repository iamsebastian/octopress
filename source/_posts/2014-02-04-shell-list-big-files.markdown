---
layout: post
title: "shell: list big nodes"
date: 2014-02-04 17:02
comments: false
categories: zsh, shell
---

Friday in the morning. Robot tests are passed. The project is going to get deployed. You start *grunt* and ... there's no space left on your shiny new SSD. Damn it! It seems the space is gone. But we can localize it. Fast. With scripting.

<!-- more -->

```sh
$ df -h

Filesystem      Size   Used   Avail Capacity  iused  ifree %iused  Mounted on
/dev/disk0s2    120Gi  120Gi  0.0Gi   100% 14734031    975   100%   /
```


