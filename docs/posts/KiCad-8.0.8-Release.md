---
description: KiCad 华秋发行版 8.0.8 正式发布
title: KiCad 华秋发行版 8.0.8 正式发布
readingTime: false
tag:
  - 宣发
  - KiCad
---

# KiCad 8.0.8 发布

**作者：** KiCad 华秋发行版开发团队  
**发布日期：** 2025-01-15

合并了 KiCad official 8.0.8 的全部更新。
并修复了以下问题：
1. wxWidget 导致的图标闪烁、内存泄漏问题

更多关于华秋发行版的介绍可以参考：[KiCad 华秋发行版](https://kicad.eda.cn/docs/posts/kicad-hq-instruction.html)

KiCad 华秋发行版下载链接：[点击查看](https://kicad.eda.cn/download)

---

以下为 Official KiCad 更新内容


KiCad 8.0.8 版正式发布。8.0.8 稳定版本包含自上一版本以来的关键错误修复和其他小改进。

自 8.0.7 版本发布以来，所有修复的问题列表可以在 [KiCad 8.0.8 里程碑](https://gitlab.com/groups/kicad/-/milestones/42) 页面中找到。此版本包含了多个关键的错误修复，建议尽快升级。

8.0.8 版本是从 [8.0](https://gitlab.com/kicad/code/kicad/-/commits/8.0/) 分支创建的，并包含了一些从开发分支挑选的更改。

## 更新日志

### 通用

- 为新版本的 wxWidgets 移除 KiCad 启动器中的补偿填充。[#24550](https://gitlab.com/kicad/code/kicad/-/issues/24550)
- 使迁移对话框可调整大小。[#19347](https://gitlab.com/kicad/code/kicad/-/issues/19347)
- 修复 Altium 上划线符号解析。[#19080](https://gitlab.com/kicad/code/kicad/-/issues/19080)
- 模型更改时更新引脚表。[#19253](https://gitlab.com/kicad/code/kicad/-/issues/19253)
- 识别 ${KICAD7_3DMODEL_DIR} 并应用于未来主要版本。[#18809](https://gitlab.com/kicad/code/kicad/-/issues/18809)
- 制作备份时跳过隐藏文件。[#18341](https://gitlab.com/kicad/code/kicad/-/issues/18341)
- 修复在关闭原理图编辑器时打开 PCB 编辑器导致的崩溃。[#19341](https://gitlab.com/kicad/code/kicad/-/issues/19341)
- 修复损坏的 Eagle 电路板和原理图文件导入。[#19528](https://gitlab.com/kicad/code/kicad/-/issues/19528)

### 原理图编辑器

- 使用 Plot 绘制时支持彩色标签。[#19040](https://gitlab.com/kicad/code/kicad/-/issues/19040)
- 修复一些可能导致编辑器关闭时崩溃的问题。
- 在选择"查找下一个"匹配项后不改变选择状态。[#19233](https://gitlab.com/kicad/code/kicad/-/issues/19233)
- 在封装分配工具中显示封装。[#18685](https://gitlab.com/kicad/code/kicad/-/issues/18685)
- 避免在保存空多段线时发生崩溃。
- 切换语言时不重命名根页面。[#19262](https://gitlab.com/kicad/code/kicad/-/issues/19262)
- 对于没有字段的文本不保存自动放置标志。[#19159](https://gitlab.com/kicad/code/kicad/-/issues/19159)
- 修复全局标签与电源符号连接的连通性问题。[#18092](https://gitlab.com/kicad/code/kicad/-/issues/18092)
- 在加载缺少实例数据的原理图时保留符号单元。[#19073](https://gitlab.com/kicad/code/kicad/-/issues/19073)
- 修复在原理图编辑器中完成导线时的崩溃问题。[#18136](https://gitlab.com/kicad/code/kicad/-/issues/18136)
- 修复从原理图符号属性打开封装浏览器时的崩溃问题。[#19318](https://gitlab.com/kicad/code/kicad/-/issues/19318)
- 修复 orcadpcb2 网表导出器中的 QA 测试失败。[#18822](https://gitlab.com/kicad/code/kicad/-/issues/18822)
- 修复库符号丢失时的崩溃问题。[#17146](https://gitlab.com/kicad/code/kicad/-/issues/17146)
- 修复在网表错误找不到符号后保存并重新打开项目时的崩溃问题。[#17146](https://gitlab.com/kicad/code/kicad/-/issues/17146)
- 改进打开大型 Database Library 时的符号加载时间。[#18826](https://gitlab.com/kicad/code/kicad/-/issues/18826)
- 修复从页面内撤销新建页面操作时的崩溃问题。[#19358](https://gitlab.com/kicad/code/kicad/-/issues/19358)
- 使 PDF 导出时尊重背景色填充。[#18919](https://gitlab.com/kicad/code/kicad/-/issues/18919)
- 导入第三方原理图时不丢失参考位号。[#19490](https://gitlab.com/kicad/code/kicad/-/issues/19490)
- 防止在搜索栏中粘贴长字符串时发生冻结现象。[#19464](https://gitlab.com/kicad/code/kicad/-/issues/19464)

###  符号编辑器
- 修复损坏的符号库表导致的崩溃问题。[#19236](https://gitlab.com/kicad/code/kicad/-/issues/19236)
- 尝试将图像粘贴为文本时不会卡住。[#19079](https://gitlab.com/kicad/code/kicad/-/issues/19079)
- 允许从多边形形状属性面板打开颜色选择器对话框。[#19254](https://gitlab.com/kicad/code/kicad/-/issues/19254)

### Spice 仿真
- 仅在仿真对话框代码字段中填充 spice 代码。[#18771](https://gitlab.com/kicad/code/kicad/-/issues/18771)
- 修复探测并更改信号颜色后的崩溃问题。[#17841](https://gitlab.com/kicad/code/kicad/-/issues/17841)
- 修复存在名为 VT 的网络时的崩溃问题。[#18648](https://gitlab.com/kicad/code/kicad/-/issues/18648)

### PCB编辑器
- 处理 Fabmaster 导入中的圆形区域切口。
- Fabmaster 导入时不添加零半径孔。
- Fabmaster 导入时不导入未放置的封装。
- 处理 Fabmaster 导入中的圆形。
- Fabmaster 导入时将未知层映射到 KiCad 用户层。
- 处理 Fabmaster 导入中的矩形。
- 改进 Fabmaster 导入时开放与闭合多边形的检测。
- 修复 Fabmaster 导入时的文本导入。
- 处理 Fabmaster 导入中的方形、长圆形和规则多边形。
- 保持 DRC 标记排除项更新。[#17429](https://gitlab.com/kicad/code/kicad/-/issues/17429)
- 确保粘贴时后代获得新的 UUID。[#19052](https://gitlab.com/kicad/code/kicad/-/issues/19052)
- 修复运行 DRC 时的崩溃问题。[#18600](https://gitlab.com/kicad/code/kicad/-/issues/18600)
- 允许绘图选项覆盖电路板阻焊设置。#18991
- 为 silk_board_edge_clearance 自定义规则添加示例。[#19260](https://gitlab.com/kicad/code/kicad/-/issues/19260)
- 修复将盲孔视为通孔处的 ratsnet 问题。[#18982](https://gitlab.com/kicad/code/kicad/-/issues/18982)
- 当描述和关键词不匹配时不触发 DRC 封装库警告。[#19259](https://gitlab.com/kicad/code/kicad/-/issues/19259)
- 允许在非活动层上选择 PCB DRC 标记。[#19258](https://gitlab.com/kicad/code/kicad/-/issues/19258)
- 允许通过区域选择选中 DRC 标记。[#19258](https://gitlab.com/kicad/code/kicad/-/issues/19258)
- 语言更改时重建层预设列表。[#19181](https://gitlab.com/kicad/code/kicad/-/issues/19181)
- 修复导线起点属性显示。[#19215](https://gitlab.com/kicad/code/kicad/-/issues/19215)
- 修复关闭封装选择器对话框时的线程死锁。[#18107](https://gitlab.com/kicad/code/kicad/-/issues/18107)
- 防止使用自定义焊盘形状的封装时 DRC 冻结。[#19325](https://gitlab.com/kicad/code/kicad/-/issues/19325)
- 如果字体未嵌入则从渲染缓存中绘制。[#18672](https://gitlab.com/kicad/code/kicad/-/issues/18672)
- 在属性面板中添加矩形高度和宽度。#17181
- 修复"孤铜"内的焊盘未标记为未连接的问题。[#17288](https://gitlab.com/kicad/code/kicad/-/issues/17288)
- 允许自定义规则明确允许一个封装的孔与另一个封装的外框重叠。
- 修复传统符号库插件中的引脚旋转解析。
- 调整网络连接的 DRC 间距。[#14008](https://gitlab.com/kicad/code/kicad/-/issues/14008)
- 正确取消 3D 导出。#19279
- 修复使用英寸单位导出 IPC-2581 时的比例问题。
- 修复与使用 Specctra 会话的 Allegro PCB Router 的兼容性。
- 修复从 TopoR 导入 Specctra 会话的问题。
- 在自定义规则引脚类型比较中处理通配符和大小写不敏感。[#19513](https://gitlab.com/kicad/code/kicad/-/issues/19513)

### 封装编辑器
- 正确处理组复制。[#19245](https://gitlab.com/kicad/code/kicad/-/issues/19245)
- 在编号工具中忽略不可见焊盘。[#18750](https://gitlab.com/kicad/code/kicad/-/issues/18750)
- 重置默认字段属性首选项时不添加额外的网格行。[#19369](https://gitlab.com/kicad/code/kicad/-/issues/19369)
- 更新 QR 码封装向导。

### Gerber 查看器

- 修复特定 Gerber 文件导致的崩溃问题。[#19394](https://gitlab.com/kicad/code/kicad/-/issues/19394)

### 3D 查看器

- 在可用时使用字体渲染缓存。[#18672](https://gitlab.com/kicad/code/kicad/-/issues/18672)

### PCB计算器

- 在传输线选项卡中为 Rho 常数添加测量单位。[#19312](https://gitlab.com/kicad/code/kicad/-/issues/19312)

### Windows
- 修复从项目管理器树中打开 zip 档案的问题。[#19399](https://gitlab.com/kicad/code/kicad/-/issues/19399)

### macOS

- 修复对话框焦点问题。[#3765](https://gitlab.com/kicad/code/kicad/-/issues/3765) [#17460](https://gitlab.com/kicad/code/kicad/-/issues/17460)


