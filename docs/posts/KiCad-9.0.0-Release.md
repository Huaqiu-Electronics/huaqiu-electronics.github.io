---
description: KiCad 华秋发行版 9.0.0 正式发布
title: KiCad 华秋发行版 9.0.0 正式发布
readingTime: false
tag:
  - 宣发
  - KiCad
top: 2
sticky: 2 
---

# KiCad 9.0.0 发布

**作者：** KiCad 华秋发行版开发团队  
**发布日期：** 2025-02-25

华秋发行版合并了 KiCad official 9.0.0 的全部更新。并包含额外以下功能：
1. 微软拼音输入法导致 KiCad 卡死
2. Windows支持暗黑模式（与Windows颜色设置一致）
3. 增加云端器件库（参数、符号、封装）
4. 自带DFM插件
5. 自带询价和一键下单插件   
6. 增加了KiCad插件的国内镜像

不久的未来，华秋发行版会为大家带来更多惊喜，敬请期待。

更多关于华秋发行版的介绍可以参考：[KiCad 华秋发行版](https://kicad.eda.cn/docs/posts/kicad-hq-instruction.html)

KiCad 华秋发行版下载链接：[点击查看](https://kicad.eda.cn/download)

## 版本 9 的变化

KiCad 用户论坛的持续更新帖中记录了 KiCad 9的绝大多数新功能与可用性改进。本文精选部分重大更新（非完整列表），此外还包括数百项错误修复、性能优化及其他改进。完整更新清单请访问 GitLab 里程碑页面查看：
https://gitlab.com/groups/kicad/-/milestones/31#tab-issues

### 数据统计

#### 代码仓库贡献情况

KiCad 9 的开发凝聚了数百位开发者、翻译人员、库文件贡献者和文档编写者的智慧结晶。代码与翻译相关的独立提交达 4,870 次，与版本 8 基本持平。年度开发周期持续为用户提供定期大版本更新，同时吸引着新贡献者与赞助商的加入。

#### 官方库文件改进

2024年对 KiCad 库团队来说又是一个重要年份。在六位新加入的库管理员协助下，官方库新增近 1,500 个原理图符号、750 个封装和 132 个3D 模型，并对现有元件进行了数千项优化改进。团队处理了超过 2,309 个合并请求，随着更多成员的加入，问题响应速度显著提升，待处理请求积压量持续减少。我们欣喜地看到众多贡献者加入库团队，共同推动库资源的快速发展。

## 通用改进

### Jobset（预定义 output jobs）

Mark Roszko贡献了一项新功能，可在原理图与PCB设计中应用预定义的"任务"集合（例如绘图、导出及运行DRC检查）。独立的任务集文件具有可复用性，用户可创建跨项目通用的输出流程以保持设计一致性。该任务集既可通过命令行执行，也可在KiCad图形界面中直接运行。

<video width="600" controls>
  <source src="/assets/k9/jobs-manager.webm" type="video/webm">
</video>

### 文件内嵌

Seth Hillbrand实现了一项功能，可将原理图、PCB布局、封装及符号中原本链接至外部文件的各种元素进行内嵌。这一改进使得用户能够创建完全自包含的KiCad文件，无需依赖任何外部资源（如字体或3D模型）。

![图框](/assets/k9/embed-worksheet.png)

<p style="text-align: center"><em>图1 图框</em></p>

![数据手册](/assets/k9/embed-datasheet.png)

<p style="text-align: center"><em>图2 数据手册</em></p>

![3D模型](/assets/k9/embed-3d-model.png)

<p style="text-align: center"><em>图3 3D模型</em></p>

![字体](/assets/k9/embed-font.png)

<p style="text-align: center"><em>图4 字体</em></p>

### 贝塞尔曲线工具
John Beard 在原理图与PCB编辑器中新增了贝塞尔曲线绘制工具。与圆弧工具类似，PCB编辑器会显示辅助引导线，默认情况下曲线段之间会保持相切关系（退格键操作逻辑与圆弧工具一致）。目前原理图编辑器暂未支持交互式编辑辅助线（圆弧工具也存在相同限制）。此前版本已支持贝塞尔曲线的导入与编辑功能，现在用户可直接在编辑器中创建贝塞尔曲线。

<video controls>
  <source src="/assets/k9/bezier-tool.mp4" type="video/mp4">
</video>

### 支持多通道设计
Tomasz Wlostowski 贡献了多通道设计支持功能。该功能允许用户通过重复某一通道的PCB布局元素，快速生成完全相同的副本设计。

<video controls>
  <source src="/assets/k9/mcTool.webm" type="video/webm">
</video>

### 器件类（Component Class）
James Jackson 新增了器件类功能，允许将不同符号与封装分组至特定类，并为这些类别应用专属设计规则。器件类可在原理图编辑器中通过符号设置，并自动关联至对应符号的封装。规则区域关联的指令标签现可设置"元件类"字段，位于该规则区域内的符号将自动归属至指定元件类。用户也可直接在符号属性中设置元件类别：

![符号规则区域分配器件类](/assets/k9/comp-class-1.png)

<p style="text-align: center"><em>图5 为符号规则区域分配器件类</em></p>

符号可同时归属多个器件类，其类别来源包括：符号自身直接定义、所属子单元定义、或所在规则区域指令标签定义。

![单个符号的多重类别归属](/assets/k9/comp-class-2.png)

<p style="text-align: center"><em>图6 单个符号的多重类别归属</em></p>

在PCB编辑器中，器件类将关联至符号对应的封装：

![带元件类别的封装](/assets/k9/comp-class-3.png)

<p style="text-align: center"><em>图7 带元件类别的封装</em></p>

新增两个 DRC 表达式/函数用于查询元件类别：
```
(condition "A.ComponentClass == 'CLASS_1,CLASS_2'")
```
检测元件类别完整列表，复合类别以逗号分隔并按字母顺序排列
```
(condition "A.hasComponentClass('CLASS_1')")
```
检测是否包含特定器件类
```
(condition "A.memberOfFootprint('${Class:CLASS_1}')")
```
检测某个元件是否属于特定组件类中的一个封装

### 原理图、符号及封装编辑器支持表格

得益于Jeff Young的贡献，原理图、符号库及封装库编辑器现已支持表格编辑功能，使其功能与PCB编辑器保持一致。同时新增多项表格编辑特性。

![原理图编辑器中的表格](/assets/k9/table-sch.png)

<p style="text-align: center"><em>图8 原理图编辑器中的表格</em></p>

### 自定义 ERC/DRC 错误、警告和排除注释。
Jeff Young 添加了一项功能，让您可以使用以下文本变量从文本框和字段中创建 ERC/DRC 错误和警告：
```
${ERC_WARNING <custom title>}
${ERC_ERROR <custom title>}
${DRC_WARNING <custom title>}
${DRC_ERROR <custom title>}
```

![符号中的ERC字段](/assets/k9/custom-erc-1.png)

<p style="text-align: center"><em>图9 符号中的ERC字段</em></p>

![自定义ERC错误的符号](/assets/k9/custom-erc-2.png)

<p style="text-align: center"><em>图10 自定义ERC错误的符号</em></p>

### 鼠标滚轮操作
John Beard在PCB、原理图、封装及符号编辑器中新增了鼠标滚轮操作功能。主要功能通过Shift+Alt+滚轮触发，次要功能通过Ctrl+Alt+滚轮触发。

当前功能绑定为文本递增操作：滚轮控制最右侧"分段"（主要功能）与次右侧分段（次要功能）。例如，在"B2"上使用Shift+Alt+滚轮可切换至"B1"或"B3"，Ctrl+Alt+滚轮则切换至"A2"或"C2"。该机制采用启发式算法，在常规场景中表现良好。得益于鼠标悬停位置检测能力的提升，符号编辑器的"编辑引脚"对话框现可根据双击或按'E'快捷键时鼠标的位置（悬停在编号或名称区域），自动将输入焦点定位至对应字段。

- 各编辑器应用场景：
- 封装编辑器：焊盘编号与文本编辑
- PCB编辑器：文本编辑
- 符号编辑器：引脚编号/名称（根据鼠标位置）及文本编辑
- 原理图编辑器：标签与文本编辑

<video controls>
  <source src="/assets/k9/scroll-action.webm" type="video/webm">
</video>

### 持续完善的文档体系

Graham Keeth 为 KiCad 9 的文档更新付出了巨大努力。得益于他的工作，KiCad 9 的绝大多数新功能与变更已形成完整文档。除新增内容外，Graham 还通过更新截图、优化文本及修正错误全面提升文档质量。与此同时，文档翻译团队也在积极更新多语言版本，确保更多语言的用户能获取最新文档资源。

### 其他全局性改进

- 命令行功能增强，包括新增光线追踪3D图像生成等多项能力。
- 鼠标滚轮缩放方向反转选项
- 图像参考点支持
- 库编辑器树形面板新增"全部展开/折叠"右键菜单项
- 支持为单一网络分配多个网络类别
- 检查器报告面板支持右键复制内容
- 新增可映射快捷键的文本对齐操作
- ERC/DRC排除项可添加注释说明
- ERC/DRC对话框右键菜单支持移除已忽略的检测项
- 检查器窗口内容支持右键复制
- 原理图/PCB/工作表编辑器支持从剪贴板粘贴图像作为参考图


## 原理图及符号编辑器
### 选择过滤器
得益于Jon Evans的贡献，原理图与符号库编辑器现已支持对象选择过滤功能，该功能此前已在PCB及封装库编辑器中实现。

![原理图及符号库编辑器中的选择过滤器](/assets/k9/sch-selection-filter.png)

<p style="text-align: center"><em>图11 原理图及符号库编辑器中的选择过滤器</em></p>

### 图纸引脚/层次标签同步工具

核心开发团队新成员Ethan Chien贡献了图纸引脚/层次标签同步管理工具。该工具可同步管理图纸引脚及其关联的层次标签，无需在图纸与原理图之间反复切换。

<video width="600" controls>
  <source src="/assets/k9/sch-hierarchy-sync.webm" type="video/webm">
</video>

### 网络类规则区域

James Jackson 新增了对原理图网络类规则区域的支持。该功能允许用户绘制特定形状，并将网络类标识自动附加至该形状所定义的所有网络。

![原理图规则区域](/assets/k9/netclass-rule-area.png)

<p style="text-align: center"><em>图12 原理图规则区域</em></p>


### 设计模块（Design Reuse）

Mike Williams 贡献了原理图设计模块功能的实现。该功能支持用户创建可复用的原理图模块库，未来KiCad版本还将扩展该功能，新增可复用的PCB布局模块支持。

![原理图设计模块](/assets/k9/sch-design-blocks.png)

<p style="text-align: center"><em>图13. 原理图设计模块</em></p>


### 网络类颜色高亮

James Jackson 贡献了一项便捷的易用性改进：新增"网络类颜色标识"显示模式选项。该选项可将网络类颜色以"高亮边框"形式显示在导线外围，而非仅改变导线本身的颜色。

![原理图网络类颜色高亮](/assets/k9/sch-highlight-netclass-color.png)

<p style="text-align: center"><em>图14. 原理图网络类颜色高亮</em></p>

### 原理图编辑器的其他改进

- 在符号编辑器中将符号保存到其他库时,现在会保存其所有派生的符号。
- 符号编辑器中的"另存为"和"复制另存为"命令。
- 尝试编辑只读库时发出警告,并提供创建可编辑副本的选项。
- 在符号编辑器中可选择不显示隐藏字段。
- 网络导航器现在显示原理图中的所有网络。
- 可选择将符号排除在仿真之外。
- 导入带模块的Eagle原理图。
- 符号编辑器引脚拖动功能。
- 符号备用引脚模式指示器。
- 将派生符号保存到不同的库。
- 对具有相同名称的局部和全局标签进行ERC检查。
- 对未连接端点进行ERC检查。
- 支持导入Altium ASCII原理图文件格式。
- 可以从层次导航器重命名页面。
- 可选择将符号排除在仿真之外。
- 可选择在具有备用定义的符号引脚上显示指示器。
- 能够将整个页面标记为"不装配"、"从电路板/BOM中排除"或"从仿真中排除"。
- 可选择绘制"不装配"指示器。
- 允许在"编辑参考字段"对话框中更改符号单位。
- 允许为单一网络分配多个网络类。
- 引入网络类排序。
    - 允许网络类具有空属性(默认网络类除外)。
    - 有效网络类由网络类优先级顺序中的非空网络类字段构建,始终使用默认网络类参数作为后备。
    - DRC检查网络类等效性,要求两个项目具有相同的组成网络类集。
    - DRC测试网络类名称(A.netclass == 'my_netclass')与按优先级排序的组成网络类的逗号分隔列表。
    - 添加DRC函数A.hasNetclass('my_netclass')以测试给定网络类是否分配给某个项目。
    - 原理图和PCB网络类着色采用网络的有效聚合网络类。

## PCB及封装编辑器

### IPC API

Jon Evans为 PCB 编辑器创建了基于进程间通信（IPC）的全新接口，该接口将逐步取代现有的 Python 封装接口。相较于旧方案，新接口在稳定性与接口规范一致性方面均有显著提升，并计划在版本10开发期间扩展支持原理图编辑器。有关新接口的详细信息，请参阅开发者文档：
https://dev-docs.kicad.org/en/apis-and-binding/ipc-api/index.html

### 敷铜管理器

Ethan Chien 提供了一个新的敷铜管理器功能，可以轻松预览和调整敷铜优先级和其他设置，而无需逐个编辑每个敷铜来验证更改的结果。

![敷铜管理器](/assets/k9/pcb-zone-manager.png)

<p style="text-align: center"><em>图15. 敷铜管理器</em></p>

###  优化的过孔盖油控制

Jon Evans新增了板级顶层与底层过孔盖油控制功能，并支持单个过孔自定义设置。相较于KiCad旧版本，该改进实现了对过孔盖油的全面控制。

![板级过孔盖油](/assets/k9/via-tent-1.png)

<p style="text-align: center"><em>图16. 板级过孔盖油</em></p>

![单个过孔盖油](/assets/k9/via-tent-2.png)

<p style="text-align: center"><em>图17. 单个过孔盖油</em></p>

### 预设层对

John Beard 新增了多项层对操作辅助功能：预设配置与快速切换列表。用户可通过"Shift+V"快捷键循环切换已启用的层对组合，以及当前自定义的非预设层对配置。

![层对分配对话框](/assets/k9/pcb-layer-pair-1.png)

<p style="text-align: center"><em>图18. 层对分配对话框</em></p>

![层对列表](/assets/k9/pcb-layer-pair-2.png)

<p style="text-align: center"><em>图19. 层对列表</em></p>

### 形状修改工具

John Beard 开发了一项形状修正工具。由于电路板内部开槽通常无法加工出锐角，他专门创建了名为"Dog bone"（狗骨）的工具，可根据开槽刀具的直径自动生成符合制造要求的圆角过渡形状。

![形状修改](/assets/k9/pcb-cutout-tool.png)

<p style="text-align: center"><em>图20. 形状修改</em></p>

### Padstacks

Jon Evans的贡献使KiCad新增了焊盘堆叠功能。该功能支持通孔焊盘在各铜层实现差异化设计：用户可为顶层/内层/底层分别定义不同几何形态的铜箔形状，甚至实现各铜层独立造型的焊盘堆叠结构。

![焊盘属性对话框](/assets/k9/pad-stacks-1.png)

<p style="text-align: center"><em>图21. 显示自定义 pad stack 的焊盘属性对话框</em></p>

![3D查看器中的自定义 pad stacks](/assets/k9/pad-stacks-2.png)

<p style="text-align: center"><em>图22. 3D查看器中的自定义 pad stacks</em></p>

### 交互式定位工具

John Beard 开发的另一实用工具支持用户通过绘制参考线并定义其属性参数，实现对象的精确定位。该功能允许先绘制基准线，再通过设定线条的具体规格（如长度、角度等）来调整目标对象的放置位置。

<video controls>
  <source src="/assets/k9/pcb-interactive-tool-1.webm" type="video/webm">
</video>

另一个用途是以更直接的方式操作对象，首先将对象移动到已知位置，然后使用 "精确移动"。它还可以用于在一个轴或另一个轴上设置对齐。

<video controls>
  <source src="/assets/k9/pcb-interactive-tool-2.webm" type="video/webm">
</video>

矢量不一定要在任一对象上，这样就可以直接使用其他对象的尺寸作为选区的移动量。

<video controls>
  <source src="/assets/k9/pcb-interactive-tool-3.webm" type="video/webm">
</video>

### 多走线拖拽

Tomasz Wlostowski 更新了推挤布线工具，新增多走线同步拖动功能。尽管与同时布线多条走线存在差异，但这一改进将显著提升含复杂总线结构PCB的布线效率。

<video controls>
  <source src="/assets/k9/pcb-multi-drag.webm" type="video/webm">
</video>

### 爬电距离规则

Fabien Corona 针对电气爬电间隙实施了设计规则检查。新规则语法和由此产生的 DRC 错误如下所示。

```
(rule HV_HV
   (constraint creepage (min 20mm))
   (condition "A.hasNetclass('A') && B.hasNetclass('B')")
)
```

![爬电距离 DRC 错误信息](/assets/k9/pcb-creepage-drc.png)

<p style="text-align: center"><em>图23. 爬电距离 DRC 错误信息</em></p>

### 3D 模型导出改进

在 Aleksandr Shvartzkop 的努力下，三维模型现在可以导出为 XAO、STL、BREP 和 PLY 文件格式，包括丝印和阻焊层。

![新的3D模型导出格式](/assets/k9/pcb-3d-model-export.png)

<p style="text-align: center"><em>图24. 新的3D模型导出格式</em></p>

![3D模型导出后的阻焊及丝印层](/assets/k9/pcb-3d-model-ss-sm-layers.png)

<p style="text-align: center"><em>图25. 3D模型导出后的阻焊及丝印层</em></p>

### PCB 编辑器的其他改进

- 网络检查面板
- 光标对齐指示器
- ODB++导出
- 在制造层上绘制焊盘轮廓和编号的选项
- 允许直接将文本粘贴为文本项
- 在3D导出中包含丝印层和阻焊层  
- 筛选要包含/排除在3D导出中的模型
- 将所有层绘制到单个PDF文档中,每层单独成页,而不是每层导出单独的PDF文件
- 差分对偏斜和锐角设计规则检查
- 用于独立检查差分对偏斜规则的可选偏斜DRC标志
- 设计规则失败间隙指示器
- 走线阻焊层移除
- 相对位置工具的任意参考点
- 光标对齐指示器
- 外部尺寸引线
- 区域角落倒角
- 在相对位置工具中使用可以对齐到对象的任意参考点的选项
- 外轮廓创建工具
- 多边形简化工具
- 单独设置过孔每层的环形尺寸
- 从原理图更新PCB时覆盖锁定的封装
- 允许将用户定义层分组为顶层/底层对
- 现在支持从命令行界面导出带光线追踪的3D模型
- 扩展physical_clearance规则以应用于敷铜和封装 courtyard
- 改进通孔的渲染
- 内向尺寸箭头
- 3D模型导出改进
    - 铜几何体融合选项
    - 导出内层铜的选项
    - 排除电路板主体或封装模型的选项
    - 网络过滤器(可用于导出单个网络)
    - 使用圆弧近似区域几何以加快处理速度并减小文件大小

## 其它工具
- 计算器工具调节器面板中增加了公差计算。


