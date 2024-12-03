---
description: 华秋正式发布了第一个KiCad发行版
title: KiCad 华秋发行版介绍
readingTime: false
tag:
  - 宣发
  - KiCad
top: 1
sticky: 1
---

# 华秋 KiCad 发行版介绍

## 华秋发行版的定位
华秋发行版的定位是为中国用户服务，解决一些因某种原因无法合并到主干但对中国用户来说非常重要的问题；同时通过预装一些插件，打通供应链、设计到制造的壁垒。
<iframe src="https://player.bilibili.com/player.html?bvid=BV143BrYcEAa" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="500"> </iframe>

## 为什么需要华秋发行版？
华秋自 2023 年起成为 KiCad 白金赞助商，同时招募了专职软件工程师为 KiCad 代码做贡献。除了日常的 Bug 修复外，对 KiCad 9 的主要功能的贡献包括：

- 敷铜管理器：允许用户在一个UI中查看 PCB 中所有的敷铜，并修改铜箔的属性、优先级的信息
- 层次原理图引脚/标签同步工具：方便用户同步子原理图中的 Port 与上层 Sheet Pin 引脚
- ODB++输出：之前版本的 KiCad 只支持输出 Gerber，但 ODB++在很多制造或者仿真的场景中需要用到。

## 发行版有哪些新功能？
### 微软拼音输入法导致 KiCad 卡死
这个问题仅出现在 Win 10 中，Linux, MacOS, Win11 不受影响。KiCad 中文社群中大量用户汇报了此问题。由于和 wxWidget 相关，暂时没有办法修复。但禁用微软拼音输入法可以作为一个妥协的方案：
![Compatibility](/assets/compatibility.png)

在发行版中，增加了一个开关。首次运行 KiCad 时，会自动检测操作系统类型，如果是 Win 10，会提示用户是否禁用微软拼音输入法；其他 OS 则不受影响。当然，可以在菜单中随时开启或禁用
![switch](/assets/switch.png)

### KiCad 插件镜像
KiCad 的官方插件库并没有存储所有的插件安装包，而只是提供了各个插件安装包的链接。但由于大部分的安装包都发布在 Github 上，导致国内的用户在插件管理器中安装插件非常不稳定，有时可以装有时又装不了; Gitlab 上的包可以装，Github 上的包经常失败。而 KiCad 的插件生态又比较繁荣，有不少非常好用的插件，这对中国用户来说就非常不友好了。Ethan 是 KiCad 的 Lead Developer，为了解决这个问题，做了一个 KiCad 插件的镜像。思路是是先获取 KiCad 官方库中所有插件的链接，然后通过类似爬虫的方式，将这些安装包到同步到 Gitee 中。目前是每两天和官方库同步一次。
![gitee](/assets/gitee.png)

用户只需要在插件管理其中添加以下的仓库URL，就可以快速地下载插件，不再受网络的影响：
[https://gitee.com/kicad-mirror/kicad-addons/raw/master/repository.json](https://gitee.com/kicad-mirror/kicad-addons/raw/master/repository.json)
![plugin](/assets/plugininstall.png)

### 暗黑模式
Linux 和 Mac 的用户可能体会不到这个痛苦，但 80% 以上的中国用户仍然使用 Windows，但 wxWidget 的稳定版还不支持 Win 下的暗黑功能。华秋发行版中 cherry pick 了 wxWidget master 分支中的功能，现在 Windows 用户也能体验暗黑模式的快乐了。
![dark](/assets/dark.png)
当然，如果未来 wxWidget 的稳定版也支持 Win 的暗黑，这些代码会随时合入到 KiCad 的主干。

### 元器件与云端元器件库
华秋创建了一个数据搜索引擎：[www.eda.cn](http://www.eda.cn) 提供高质量的元器件搜索及查询服务：
![power](/assets/power.png)
同时将大量元器件关联了原理图符号、封装及3D，可以直接在 KiCad 中调用。
![model](/assets/model.png)

### 在 KiCad 中搜索并摆放云端器件库
基于 www.eda.cn 中的数据，发行版魔改了 KiCad 中的符号选择器。现在只要能联网，就可以直接在符号选择器中按分类或者参数进行搜索：
![chooser](/assets/chooser.png)
其中的元器件不仅包含 MPN、厂商、电气参数等信息，还关联了符号和封装，可以直接摆放到原理图中使用。在云端库中摆放的器件，其中的电气参数也会自动添加到符号中，生成 BOM 更精准。参考视频如下；
![hqlib](/assets/HQLib.gif)

### DFM 插件
华秋发行版中预装了一些插件，其中华秋DFM就是其中之一。现在无需离开 KiCad 的设计环境，就可以直接在 PCBnew 中进行 DFM 检查，插件会自动生成 Gerber 并上传到服务器进行分析，并返回检查结果。用户可以直接跳转到出错的位置进行修改，改完后再次检测即可，省去了不同工具间传递信息的时间浪费。
![dfmplugin](/assets/dfmplugin.png)
插件的源码在这里：[https://github.com/Huaqiu-Electronics/kicad-hqdfm-plugin](https://github.com/Huaqiu-Electronics/kicad-hqdfm-plugin)

参考视频如下：
![dfm](/assets/DFM.gif)

### PCB/SMT 实时询价及下单
发行版中预装了 HQPCB 插件：
![hqpcb](/assets/hqpcb.png)
插件可以直接从 PCB 中提取长宽、板厚、最小线宽/线距、最小孔径等信息信息，进行实时价格查询：
![pcbquote](/assets/pcbquote.png)
也会自动分析 PCB 中的物料种类，贴片、直插的点数：
![smtanalyze](/assets/smtanalyze.png)
查询到 SMT 的价格：
![price](/assets/price.png)
确认无误后，直接点击下单，插件会自动生成 Gerber，NCDrill, 坐标文件并自动上传的华秋PCB，完成一键下单。

### KiCad 中的元器件搜索引擎
在 HQPCB 插件中，点击“BOM匹配”，就可以跳转到 BOM 匹配界面，并根据 PCB 中提取出的关键信息，自动匹配到实际可以购买的器件：
![bommatch](/assets/bommatch.png)
并查询器件的详细信息及数据手册：
![detail](/assets/detail.png)
也可以采用手动搜索的方式，在插件中搜索感兴趣的器件，非常方便。
![search](/assets/search.png)

## 源码与下载
发行版遵循 GPL 协议，可以在以下链接查看源码：
[https:![pcbquote](/assets/pcbquote.png)//gitlab.com/kicad-hq/kicad](https://gitlab.com/kicad-hq/kicad/-/tree/release/8.0)

所有插件的源码在这里：
[https://github.com/Huaqiu-Electronics/kicad-hqdfm-plugin](https://github.com/Huaqiu-Electronics/kicad-hqdfm-plugin)

发行版的安装包可以在以下链接下载：
[https://kicad.eda.cn/download](https://kicad.eda.cn/download)

## 结束语
华秋的 KiCad 发行版是一种有意思的尝试，它并不是简单的 Fork，而是在 KiCad 主版本的基础上提供了一种补充的选择，让特定的用户可以使用到一些更高效的解决方案。有兴趣的小伙伴可以自行尝试，有问题在发行版的仓库中直接提问，当然也可以联系华秋的工程师，进行进一步的沟通。
```

