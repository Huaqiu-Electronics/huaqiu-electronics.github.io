---
tag:
  - EDA
  - KiCad
  - 技术
  - 开源
---

# KiCad 华秋发行版概述

华秋 KiCad 是华秋电子与 KiCad 社区共同合作开发的发行版，旨在推动 KiCad 在中国的应用。
华秋 KiCad 发行版聚焦于供应链、设计与制造的协同，让工程师在 KiCad 中高效完成器件选型、生产验证、文档生成等工作，提高设计效率的同时确保产品的可靠性。
作为 KiCad 的白金赞助商，华秋电子招募了全职开发人员，为 KiCad 社区添砖加瓦，目前已贡献了敷铜管理器、层次设计同步、ODB++等多个使用的功能，都将在 KiCad 9 中推出。
我们希望作为 KiCad 社区与中国工程师/开发者的桥梁，让社区听到更多中国的声音，也希望更多的开发者加入 KiCad 社区，让 KiCad 变得 更好！

## 华秋 KiCad 与 KiCad Stabel Release 比较

华秋 KiCad 完全基于最新的稳定版 KiCad 分支构建，在 KiCad 的基础上，增加了以下功能：

- 支持云端元器件库
- 集成华秋 DFM
- 元器件搜索与 BOM 匹配
- PCB/SMT 实时询价、一键下单
- 提供了 KiCad 插件的国内镜像

### 云端器件库

云端器件库增加了“器件”概念。一个完整的元器件包含了基本参数（如 MPN、厂商、描述）和电气参数（如耐压、输出电流等），关联了原理图符号与 PCB 封装。
打开 Symbol Chooser，即可以直接在 HQ LIB 页面使用 API 远程查找元器件，并直接将器件摆放到原理图中。器件的参数也将写入到符号的字段中。

![HQ Lib](/assets/HQLib.gif)

### 集成华秋 DFM

DFM 插件可以帮助您在 KiCad 的 PCB 中一键检查制造工艺相关的问题，比如开路、锐角、最小线宽/线距、孔径等。插件最大的便捷之处是省去了在 EDA 工具和 DFM 工具之间的导入、导出操作，所有的操作都在 KiCad 中进行。得到检测结果后，可以迅速定位到错误并进行修改。
简单说，插件的工作就是将 KiCad PCB 生成 Gerber 发送到服务端，完成检查后返回结果并显示在插件面板中。因此除了插件之外，无需安装任何依赖。

![DFM Integration](/assets/DFM.gif)

### 元器件搜索与 BOM 匹配

基于数据平台“芯灵”，用户可以在 KiCad 中直接查询元器件信息，也可以使用 BOM 匹配功能，通过 PCB 中的参数匹配到实际的器件。

### PCB/SMT 实时询价、一键下单

该插件将帮助您：

- 从您的设计中提取关键制造参数
- 在 KiCad 内获取华秋的实时报价
- 生成 Gerber 文件并将其与您的个人电路板设置一起上传到华秋
- 上传完成后，您可以使用华秋 DFM 仔细检查您的制造文件，调整电路板参数，然后将其直接添加到您的华秋购物车。

![Quotation and BOM Matching](/assets/quotation-bom-matching.gif)

### 提供了 KiCad 插件的国内镜像

发行版中预置了 KiCad 官方插件库的镜像，解决了因网络原因无法下载 KiCad 插件的问题。所有插件官方库中的插件同步至：https://gitee.com/kicad-mirror/kicad-addons，并定期同步更新。

![Mirror Plugin](/assets/plugin.png)

## 安装方式
您可以通过以下链接下载 Windows 安装包：https://dfm.elecfans.com/uploads/software/kicad-huaqiu-8.0.3.1-x86_64.exe

如您使用的是 Linux 系统，需要使用 flatpak 进行安装。请参照以下安装方法：
### 1，安装 flatpak

`sudo apt install flatpak`

### 2，将域名映射为特定的 IP 地址

`sudo vim /etc/hosts`

用 vim 去 etc/host 中，加上这行：
`175.6.14.183 kicad.huaqiu.com`


测试是否连接成功： 
`ping kicad.huaqiu.com`

### 3，添加远程kicad仓库

`flatpak remote-add --user repo https://kicad.huaqiu.com/repo`

查看是否添加成功：
`flatpak remote-ls repo`
如果报错GPG verification,执行步骤 4 ，否则跳过

### 4，忽略包没签名认证,用 nano 编辑器修改配置

`nano ~/.local/share/flatpak/repo/config`

在 nano 中修改: `gpg-verify=false` 

`flatpak remote-modify --no-gpg-verify repo`

查看是否添加成功：
`flatpak remote-ls repo`

### 5，安装kicad

`flatpak install repo org.kicad.KiCad`

如果报错缺少依赖，进行下一步“6”。

### 6，缺少 SDK 依赖，用国内 flathub 镜像仓库，先添加远程仓库，然后安装缺少的依赖：

`sudo flatpak remote-modify flathub --url=https://mirror.sjtu.edu.cn/flathub`

如果缺少org.freedesktop.Sdk/x86_64/23.08：
`flatpak install flathub org.freedesktop.Sdk/x86_64/23.08`

如果缺少org.freedesktop.Sdk//23.08：
`flatpak install flathub org.freedesktop.Sdk//23.08`


### 附：
1，vim使用

`sudo vim /etc/hosts`打开编辑器之后，按 i 编辑，
保存退出按 shift 冒号 wq 。

2，nano使用

`nano ~/.local/share/flatpak/repo/config`nano编辑器进入修改完后，
按 Ctrl + O 保存文件，然后按 Ctrl + X 退出编辑器

## 关于华秋电子

华秋专注于可靠的多层 PCB 制造和组装，与 KiCad 一样，我们的目标是帮助工程师构建未来的电子产品。 华秋 PCB 正在与 KiCad 合作提供智能工具来简化从设计到物理产品的流程。华秋拥有 3 家主要从事原型设计、批量生产和 PCB 组装的工厂，并拥有超过 15 年的工程专业知识。我们致力于打造全球领先的产业数字化智造平台，以 PCB EDA 设计工具为核心，将器件选型、DFM 检查、实时询价/下单等核心流程融为一体，提高设计效率、确保设计可靠性。
