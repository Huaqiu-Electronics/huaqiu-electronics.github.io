---
description: KiCad 华秋发行版 8.0.7 正式发布
title: KiCad 华秋发行版 8.0.7 正式发布
readingTime: false
tag:
  - 宣发
  - KiCad
top: 2
sticky: 2 
---

# KiCad 8.0.7 发布

**作者：** KiCad 华秋发行版开发团队  
**发布日期：** 2024-12-16

合并了 KiCad official 8.0.7 的全部更新。
并修复了以下问题：
1. 分配封装工具中无法预览封装的问题
2. 运行封装向导时无法查看画布的问题

更多关于华秋发行版的介绍可以参考：[KiCad 华秋发行版](https://kicad.eda.cn/docs/posts/kicad-hq-instruction.html)
KiCad 华兴发行版下载链接：[点击查看](https://kicad.eda.cn/download)

以下为 Official KiCad 更新内容
---

KiCad 8.0.7 版正式发布。8.0.7 稳定版本包含自上一版本以来的关键错误修复和其他小改进。

自 8.0.6 版本发布以来，所有修复的问题列表可以在 [KiCad 8.0.7 里程碑](https://gitlab.com/groups/kicad/-/milestones/41) 页面中找到。此版本包含了多个关键的错误修复，建议尽快升级。

8.0.7 版本是从 [8.0](https://gitlab.com/kicad/code/kicad/-/commits/8.0/) 分支创建的，并包含了一些从开发分支挑选的更改。

---

## 更新日志

### 通用

- 修复 URI 环境变量扩展问题。[#18918](https://gitlab.com/kicad/code/kicad/-/issues/18918)
- 修复显示破损字体的问题。[#19010](https://gitlab.com/kicad/code/kicad/-/issues/19010)
- 保存时清除环境变量映射中的未知键。[#18734](https://gitlab.com/kicad/code/kicad/-/issues/18734)
- 将字母热键排除在移位回退之外。[#19093](https://gitlab.com/kicad/code/kicad/-/issues/19093)
- 修复 PDF 绘图中丢失的文本和图形。[#16456](https://gitlab.com/kicad/code/kicad/-/issues/16456)
- 处理带有越界值的 DXF 文件。[#18523](https://gitlab.com/kicad/code/kicad/-/issues/18523)
- 修复无效的贝塞尔曲线 DXF 导入。[#11153](https://gitlab.com/kicad/code/kicad/-/issues/11153)
- 修复因为旋转而渲染错误的字体问题。[#18377](https://gitlab.com/kicad/code/kicad/-/issues/18377)
- 使颜色选择器对话框可在 hidpi 显示器上使用。[#17860](https://gitlab.com/kicad/code/kicad/-/issues/17860)
- 在 DXF 导入时将文字大小缩放至缩放块内部。[#18525](https://gitlab.com/kicad/code/kicad/-/issues/18525)
- 修复带有复选框的网格的复制粘贴问题。[#18985](https://gitlab.com/kicad/code/kicad/-/issues/18985)
- 在改变斜体/粗体时更新字体。[#18592](https://gitlab.com/kicad/code/kicad/-/issues/18592)
- 防止在切换粗体选项时改变文字粗细。[#18975](https://gitlab.com/kicad/code/kicad/-/issues/18975)

### 原理图

- 拖动 Sheet时，使 Sheet 引脚未连接指示器（X）跟随。[#18854](https://gitlab.com/kicad/code/kicad/-/issues/18854)
- 修复与 LCEDA/EasyEDA v2.2.32 的导入兼容性。[#18994](https://gitlab.com/kicad/code/kicad/-/issues/18994)
- 导入 EasyEDA/LCEDA 原理图时，如果符号/端口名称为空，则使用 Sheet Entry 的名字。[#19021](https://gitlab.com/kicad/code/kicad/-/issues/19021)
- 不从 EasyEDA/LCEDA Pro 原理图导入空的可见网络标签。[#19034](https://gitlab.com/kicad/code/kicad/-/issues/19034)
- 从 EasyEDA/LCEDA 原理图导入符号中的贝塞尔曲线。[#19034](https://gitlab.com/kicad/code/kicad/-/issues/19034)
- 在子图（Sheet）对话框属性中测试 Sheet 名称是否有效。[#18981](https://gitlab.com/kicad/code/kicad/-/issues/18981)
- 修复丢失的操作字符串和热键冲突。[#17694](https://gitlab.com/kicad/code/kicad/-/issues/17694)
- 在绘制到 PDF 时遵循背景颜色填充。[#18919](https://gitlab.com/kicad/code/kicad/-/issues/18919)
- 修复总线别名定义中的复制和粘贴问题。[#18558](https://gitlab.com/kicad/code/kicad/-/issues/18558)
- 不允许重复操作导致的子图递归。[#18199](https://gitlab.com/kicad/code/kicad/-/issues/18199)
- 修复在非独立模式下导入 Eagle 原理图时，当电路板文件不存在时崩溃的问题。[#18241](https://gitlab.com/kicad/code/kicad/-/issues/18241)
- 当模板字段名包含尾部/前导空白时警告用户。[#18601](https://gitlab.com/kicad/code/kicad/-/issues/18601)
- 修复全局标签的图纸交叉引用问题。[#18534](https://gitlab.com/kicad/code/kicad/-/issues/18534)
- 在网络导航历史中添加图纸（Sheet）更改。[#18616](https://gitlab.com/kicad/code/kicad/-/issues/18616)

###  符号编辑器
- 复制时保持引脚编号

### Spice 仿真

- 修复交流仿真中丢失的电流坐标轴。[#18313](https://gitlab.com/kicad/code/kicad/-/issues/18313)
- 修复取消选择探针工具时的崩溃。[#18547](https://gitlab.com/kicad/code/kicad/-/issues/18547)

### PCB编辑器

- 防止过孔盖油的焊盘产生阻焊桥 DRC 错误。
- DRC 报告了来自电路板设置的设计规则最小值。[#18642](https://gitlab.com/kicad/code/kicad/-/issues/18642)
- 修复导入自定义设计规则的问题。[#18580](https://gitlab.com/kicad/code/kicad/-/issues/18580)
- 不要两次询问锁定问题。[#18679](https://gitlab.com/kicad/code/kicad/-/issues/18679)
- 孤立的网络也应遵守最小板间隙规则。[#19051](https://gitlab.com/kicad/code/kicad/-/issues/19051)
- 敷铜时如果产生颈线，DRC 显示的间隙值偏小。[#18921](https://gitlab.com/kicad/code/kicad/-/issues/18921)
- 确保无法通过模式对话框执行粘贴操作。[#18912](https://gitlab.com/kicad/code/kicad/-/issues/18912)
- 使折线属性对话框支持 ESC 键。[#18850](https://gitlab.com/kicad/code/kicad/-/issues/18850)
- 修复隐藏搜索面板后父窗口中的焦点问题。[#12613](https://gitlab.com/kicad/code/kicad/-/issues/12613)
- 修复弧线的 DRC 错误。
- 修复在非成对图层上绘制 PCB 文本时的文本位置问题。[#18980](https://gitlab.com/kicad/code/kicad/-/issues/18980)
- 修复 DRC 规则解析器中的错误。[#19012](https://gitlab.com/kicad/code/kicad/-/issues/19012)
- 修复 Eagle 封装库迁移崩溃。[#18702](https://gitlab.com/kicad/code/kicad/-/issues/18702)
- 修复 IPC-2581 导出中丢失未连接焊盘的问题。[#18293](https://gitlab.com/kicad/code/kicad/-/issues/18293)
- 修复多根线走线时的崩溃。[#18328](https://gitlab.com/kicad/code/kicad/-/issues/18328)
- 在旋转 45 度的器件上正确处理热焊盘。[#18329](https://gitlab.com/kicad/code/kicad/-/issues/18329)
- 修复圆形 Courtyard DRC 错误。[#18347](https://gitlab.com/kicad/code/kicad/-/issues/18347)
- 修复随机异形电路板轮廓与弧形 DRC 错误。[#18125](https://gitlab.com/kicad/code/kicad/-/issues/18125)
- 正确分组自动生成的对象。[#18874](https://gitlab.com/kicad/code/kicad/-/issues/18874)
- 修复封装库表中的粘贴问题。[#18732](https://gitlab.com/kicad/code/kicad/-/issues/18732)
- 修复 Courtyard 图层消失的问题。[#18978](https://gitlab.com/kicad/code/kicad/-/issues/18978)
- 在菜单中为线长调整工具时使用适当的线长调整图标。
- 在适用情况下，转换为线条时使用多边形的宽度。[#18713](https://gitlab.com/kicad/code/kicad/-/issues/18713)
- 线长调整工作流程的改进。[#18979](https://gitlab.com/kicad/code/kicad/-/issues/18979)
- 在长度调整属性中为无约束长度显示空字段。[#18979](https://gitlab.com/kicad/code/kicad/-/issues/18979)
- 修复 Fabmaster 导入后的崩溃。[#19174](https://gitlab.com/kicad/code/kicad/-/issues/19174)
- 更新 DRC 对话框中的 DRC 排除。[#19113](https://gitlab.com/kicad/code/kicad/-/issues/19113)

### 封装编辑器
- 修复保存封装时崩溃的问题。[#19018](https://gitlab.com/kicad/code/kicad/-/issues/19018)
- 为 3D 视图添加 3D 鼠标支持。[#14002](https://gitlab.com/kicad/code/kicad/-/issues/14002)

### Gerber 查看器

- 添加 3D 鼠标支持。[#13306](https://gitlab.com/kicad/code/kicad/-/issues/13306)

### 3D 查看器

- 确保在选择菜单后不修改 3D 显示视图。[#17422](https://gitlab.com/kicad/code/kicad/-/issues/17422)
- 修复遗漏带有相对路径分配的 STEP 模型的问题。[#16242](https://gitlab.com/kicad/code/kicad/-/issues/16242)

### 图框编辑器

- 添加 3D 鼠标支持。[#13306](https://gitlab.com/kicad/code/kicad/-/issues/13306)

### PCB 计算器

- 在 E 系列电阻器表格中始终使用黑色文字。[#17033](https://gitlab.com/kicad/code/kicad/-/issues/17033)3

### 命令行(CLI)接口
- 单层绘图时接受多个 Gerber 图层。[#19089](https://gitlab.com/kicad/code/kicad/-/issues/19089)

### macOS

- 修复粘贴到网格时遗漏行的问题。[#18916](https://gitlab.com/kicad/code/kicad/-/issues/18916)

### Python 脚本

- 确保在加载电路板之前加载图像处理程序。[#18959](https://gitlab.com/kicad/code/kicad/-/issues/18959)


