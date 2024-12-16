---
description: The KiCad project is proud to announce the version 8.0.3 bug fix release. The 8.0.3 stable version contains critical bug fixes and other minor improvements since the previous release.
title: KiCad 8.0.6 正式发布
readingTime: false
tag:
  - 宣发
  - KiCad
top: 2
sticky: 
---

# KiCad 8.0.6 发布

**作者：** KiCad 开发团队  
**发布日期：** 2024-10-14

---

KiCad 项目自豪地宣布发布 8.0.6 版本的错误修复更新。  
8.0.6 稳定版本包含了自上次发布以来的一些重要的错误修复和其他小的改进。

自 8.0.5 版本发布以来，所有修复的问题列表可以在 [KiCad 8.0.6 里程碑](https://gitlab.com/groups/kicad/-/milestones/40) 页面中找到。此版本包含了多个关键的错误修复，建议尽快升级。

8.0.6 版本是从 [8.0](https://gitlab.com/kicad/code/kicad/-/commits/8.0/) 分支创建的，并包含了一些从开发分支挑选的更改。

Windows、macOS 和 Linux 的安装包已经发布或将在不久的将来发布。请参考 [KiCad 下载页面](https://www.kicad.org/download) 获取安装指导。

感谢所有开发人员、打包者、库管理员、文档编写者、翻译人员及所有其他帮助我们实现此版本的人。

---

## 更新日志

### 原理图编辑器

- 当引脚没有名称时，不创建空标签。 [#18535](https://gitlab.com/kicad/code/kicad/-/issues/18535)
- 打印绘图表单时修复自定义字体的输出问题。 [#18579](https://gitlab.com/kicad/code/kicad/-/issues/18579)
- 导入 CADSTAR 原理图时修复符号链接损坏问题。 [#17143](https://gitlab.com/kicad/code/kicad/-/issues/17143)
- 加载旧版原理图时修复注解问题。 [#18779](https://gitlab.com/kicad/code/kicad/-/issues/18779)
- 在回注解析器中解码 UTF-8 组件字段值。 [#18406](https://gitlab.com/kicad/code/kicad/-/issues/18406)

### Spice 仿真器

- 将仿真警告设置为非致命错误。 [#18143](https://gitlab.com/kicad/code/kicad/-/issues/18143)
- 修复仿真光标的对比度和更新问题。 [#18390](https://gitlab.com/kicad/code/kicad/-/issues/18390)
- 使用显示的 E24 调整值。 [#18746](https://gitlab.com/kicad/code/kicad/-/issues/18746)

### 板编辑器

- 启用文本框中填充形状属性时修复崩溃问题。 [#18640](https://gitlab.com/kicad/code/kicad/-/issues/18640)
- [在布线过程中更新轨迹宽度](https://gitlab.com/kicad/code/kicad/-/commit/b48051d52f99e72b4b41a14101c58d0da7b79d0d)。
- 打开版本 3 的旧版板文件时修复崩溃问题。 [#18553](https://gitlab.com/kicad/code/kicad/-/issues/18553)
- 正确镜像放置在背面丝印层上的尺寸。 [#18643](https://gitlab.com/kicad/code/kicad/-/issues/18643)
- 从 EasyEDA/LCEDA Pro v2.2+ 板文件导入 POURED 项目作为区域填充。 [#18664](https://gitlab.com/kicad/code/kicad/-/issues/18664)
- "移动角落到…" 使其使用定义的网格原点。 [#18479](https://gitlab.com/kicad/code/kicad/-/issues/18479)
- 扩展为多边形、规则区域或从选择区域扩展时使用正确的半径。 [#18724](https://gitlab.com/kicad/code/kicad/-/issues/18724)
- 正确显示带有网的图形项目的 Ratsnest 线。 [#18774](https://gitlab.com/kicad/code/kicad/-/issues/18774)
- 防止文本框在连续翻转时移动。 [#18797](https://gitlab.com/kicad/code/kicad/-/issues/18797)
- [将小弧线转换为段，以避免 Altium 导入器中的溢出问题](https://gitlab.com/kicad/code/kicad/-/commit/e6ce4eb73e6b3cee977dfa5741a275056eba283d)。
- [改进 Altium 导入器中的默认文本框对齐](https://gitlab.com/kicad/code/kicad/-/commit/86f122416bbe181e7610972619841d2a2e921064)。

### 封装编辑器

- 允许删除文本项目的默认字段值。 [#18663](https://gitlab.com/kicad/code/kicad/-/issues/18663)

### Gerber 查看器

- 修复加载长行长度的 Gerber 文件问题。 [#18890](https://gitlab.com/kicad/code/kicad/-/issues/18890)

### 命令行接口

- 确保 Gerber 导出中绘制的层仅限于启用的层。 [#18811](https://gitlab.com/kicad/code/kicad/-/issues/18811)

### Windows

- 提升 [wxWidgets](https://www.wxwidgets.org/) 版本至 [3.2.6](https://www.wxwidgets.org/news/2024/09/wxwidgets-3.2.6-released/)。
- 提升 [wxPython](https://github.com/wxWidgets/Phoenix) 版本至 4.2.2。
- 提升 [ngspice](https://ngspice.sourceforge.io/) 版本至 [43](https://ngspice.sourceforge.io/news.html)。

---

## 发布说明类别

- [发布说明](https://www.kicad.org/blog/categories/Release-Notes)

---

## 参见

- [KiCad 8.0.5 发布](https://www.kicad.org/blog/2024/09/KiCad-8.0.5-Release/) - 2024-09-07
- [KiCad 8.0.4 发布](https://www.kicad.org/blog/2024/07/KiCad-8.0.4-Release/) - 2024-07-17
