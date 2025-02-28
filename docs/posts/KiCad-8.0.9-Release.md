---
description: KiCad 华秋发行版 8.0.9 正式发布
title: KiCad 华秋发行版 8.0.9 正式发布
readingTime: false
tag:
  - 宣发
  - KiCad
top: 
sticky: 
---

# KiCad 8.0.9 发布

**作者：** KiCad 华秋发行版开发团队  
**发布日期：** 2025-02-24

华秋发行版合并了 KiCad official 8.0.9 的全部更新。并包含额外以下功能：
1. 微软拼音输入法导致 KiCad 卡死
2. Windows支持暗黑模式（与Windows颜色设置一致）
3. 增加云端器件库（参数、符号、封装）
4. 自带DFM插件
5. 自带询价和一键下单插件   
6. 增加了KiCad插件的国内镜像

更多关于华秋发行版的介绍可以参考：[KiCad 华秋发行版](https://kicad.eda.cn/docs/posts/kicad-hq-instruction.html)

KiCad 华秋发行版下载链接：[点击查看](https://kicad.eda.cn/download)

---

以下为 Official KiCad 更新内容


KiCad 8.0.9 版正式发布。8.0.9 稳定版本包含自上一版本以来的关键错误修复和其他小改进。

自 8.0.8 版本发布以来，所有修复的问题列表可以在 [KiCad 8.0.9 里程碑](https://gitlab.com/groups/kicad/-/milestones/43) 页面中找到。此版本包含了多个关键的错误修复，建议尽快升级。

8.0.9 版本是从 [8.0](https://gitlab.com/kicad/code/kicad/-/commits/8.0/) 分支创建的，并包含了一些从开发分支挑选的更改。

## 更新日志

### 通用

- 优化高DPI显示器上的消息面板对齐显示。
- 修复高DPI显示器下属性面板图层选择器的图像尺寸问题。[#13105](https://gitlab.com/kicad/code/kicad/-/issues/13105)
- 限制搜索栏关键词数量以防止界面卡顿。[#19464](https://gitlab.com/kicad/code/kicad/-/issues/19464)
- 修复关闭更新管理器时可能崩溃的问题。[#17103](https://gitlab.com/kicad/code/kicad/-/issues/17103)
- 优化首次启动时的工程管理器窗口大小和位置。
- 修复镜像对象的PDF导出弹窗定位问题。[#19717](https://gitlab.com/kicad/code/kicad/-/issues/19717)
- 禁止自动保存未来版本的工程设置格式。[#19910](https://gitlab.com/kicad/code/kicad/-/issues/19910)
- 修复DXF导入功能异常问题。[#18523](https://gitlab.com/kicad/code/kicad/-/issues/18523)

### 原理图编辑器

- 修复原理图符号模型损坏导致的崩溃问题。
- 修复原理图页面导出时背景区域尺寸错误的问题。[#19611](https://gitlab.com/kicad/code/kicad/-/issues/19611)
- 阻止符号字段自引用导致文本过长的问题。[#19633](https://gitlab.com/kicad/code/kicad/-/issues/19633)
- 修复更新原理图文件链接时取消部分加载导致的崩溃问题。[#19881](https://gitlab.com/kicad/code/kicad/-/issues/19881)
- 删除所有ERC标记时不再显示每条ERC信息的删除过程。[#19531](https://gitlab.com/kicad/code/kicad/-/issues/19531)
- HTTP库字段顺序改为按原始顺序显示，而非字母排序。[#17584](https://gitlab.com/kicad/code/kicad/-/issues/17584)
- 修复使用HTTP库时"ERC警告-符号未找到"的错误提示。[#17569](https://gitlab.com/kicad/code/kicad/-/issues/17569)
- 修复加载2007年前旧版符号缓存库文件的问题。
- 修复PCB编辑器交叉探测时元件位号含前导零失效的问题。[#19724](https://gitlab.com/kicad/code/kicad/-/issues/19724)

###  符号编辑器
- 修复对齐网格时图形形状扭曲的问题。[#18739](https://gitlab.com/kicad/code/kicad/-/issues/18739)
- 修复修改引脚长度或图形样式时的引脚同步模式问题。[#18566](https://gitlab.com/kicad/code/kicad/-/issues/18566)

### PCB编辑器
- 优化查找结果中隐藏文本的缩放显示。[#19636](https://gitlab.com/kicad/code/kicad/-/issues/19636)
- 修复IDF导出时单位（英寸/毫米）混淆的问题。[#19668](https://gitlab.com/kicad/code/kicad/-/issues/19668)
- 自动布局工具的细节优化。[#19451](https://gitlab.com/kicad/code/kicad/-/issues/19451)
- 自动布局工具跳过已锁定的封装。[#19690](https://gitlab.com/kicad/code/kicad/-/issues/19690)
- 修复带铜层规则区域的封装出现意外DRC警告的问题。[#19694](https://gitlab.com/kicad/code/kicad/-/issues/19694)
- 防止封装打包移动时意外跳离原始位置。[#19780](https://gitlab.com/kicad/code/kicad/-/issues/19780)
- 保留从v9.0版本打开工程时的图层可见性设置。[#19540](https://gitlab.com/kicad/code/kicad/-/issues/19540)
- 保持所有层级的铺铜填充显示。[#19775](https://gitlab.com/kicad/code/kicad/-/issues/19775)
- 修复新版KiCad打开工程时可能丢失对象可见性的问题。[#19540](https://gitlab.com/kicad/code/kicad/-/issues/19540)
- 修复STEP导出时圆角板边生成多余线段的问题。[#19901](https://gitlab.com/kicad/code/kicad/-/issues/19901)
- 修复地理标注功能异常问题。[#19927](https://gitlab.com/kicad/code/kicad/-/issues/19927)

### 封装编辑器
- 修复保存封装时可能崩溃的问题。[#19713](https://gitlab.com/kicad/code/kicad/-/issues/19713)
- 修复导入Eagle封装库时可能崩溃的问题。[#19958](https://gitlab.com/kicad/code/kicad/-/issues/19958)

### 3D 查看器
- 修复特定光线追踪角度下渲染空白的问题。[#18207](https://gitlab.com/kicad/code/kicad/-/issues/18207)
- 修复光线追踪预览模式下板卡颜色过暗的问题。[#17354](https://gitlab.com/kicad/code/kicad/-/issues/17354)
- 修复文字镀铜层渲染错误问题。

### Linux
- 改进部分GTK主题下信息栏超链接按钮的可读性。[#19506](https://gitlab.com/kicad/code/kicad/-/issues/19506)


