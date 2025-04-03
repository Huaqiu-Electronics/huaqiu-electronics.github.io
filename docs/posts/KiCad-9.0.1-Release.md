---
description: KiCad 华秋发行版 9.0.1 正式发布
title: KiCad 华秋发行版 9.0.1 正式发布
readingTime: false
tag:
  - 宣发
  - KiCad
top: 2
sticky: 2
---

# KiCad 9.0.1 发布

**作者：** KiCad 华秋发行版开发团队  
**发布日期：** 2025-04-3

华秋发行版合并了 KiCad official 9.0.1 的全部更新。并包含额外以下功能：

1. 预装了元器件搜索插件，快速查找器件的数据手册、资料及价格信息
2. 解决了 9.0.1 中 HQPCB 插件、DFM 插件不可用的问题。
3. 微软拼音输入法导致 KiCad 卡死
4. Windows 支持暗黑模式（与 Windows 颜色设置一致）
5. 增加云端器件库（参数、符号、封装）
6. 自带 DFM 插件
7. 自带询价和一键下单插件
8. 增加了 KiCad 插件的国内镜像

新增的搜索插件专为工程师和设计人员打造，通过整合多维搜索功能与实时供应链数据洞察，实现电子元件的高效定位。系统支持多种检索方式：

- ​ 原厂型号(MPN)精准匹配：如直接输入"STM32F407VGT6"等完整型号
- 参数智能解析：支持如 5k1,2R7 等常用术语及单位换算
- ​ 电气参数组合筛选：如 0.1uf 0805 10V 等参数联合搜索

可准确、快速地查找元器件的电气参数、数据手册并关联华秋商城的器件详情页。

![Componennt](/assets/componentsearch.png)

更多关于华秋发行版的介绍可以参考：[KiCad 华秋发行版](https://kicad.eda.cn/docs/posts/kicad-hq-instruction.html)

KiCad 华秋发行版下载链接：[点击查看](https://kicad.eda.cn/download)

---

以下为 Official KiCad 更新内容

KiCad 9.0.1 版正式发布。9.0.0 稳定版本包含自上一版本以来的关键错误修复和其他小改进。

自 9.0.0 版本发布以来，所有修复的问题列表可以在 [KiCad 9.0.1 里程碑](https://gitlab.com/groups/kicad/-/milestones/45) 页面中找到。此版本包含了多个关键的错误修复，建议尽快升级。

9.0.1 版本是从 [9.0](https://gitlab.com/kicad/code/kicad/-/commits/9.0/) 分支创建的，并包含了一些从开发分支挑选的更改。

## 更新日志

### 通用

- 在任务集表格中垂直居中文本。
- 在符号和封装属性格中自动识别 URL。 [#17066](https://gitlab.com/kicad/code/kicad/-/issues/17066)
- 在字段属性格中悬停时显示 URL 按钮。 [#17745](https://gitlab.com/kicad/code/kicad/-/issues/17745)
- 在表格单元格和文本框中支持裸超链接。 [#18832](https://gitlab.com/kicad/code/kicad/-/issues/18832)
- 修复"添加新任务"对话框中不一致的大小写。 [#19770](https://gitlab.com/kicad/code/kicad/-/issues/19770)
- 修复某些原理图输出任务中误导性的"输出文件"标签。 [#19868](https://gitlab.com/kicad/code/kicad/-/issues/19868)
- 确保项目管理器快捷键出现在快捷键列表中。 [#19989](https://gitlab.com/kicad/code/kicad/-/issues/19989)
- 修复更改任务集时的描述列命名。 [#20030](https://gitlab.com/kicad/code/kicad/-/issues/20030)
- 支持在库编辑器中固定/取消固定多个库。 [#19726](https://gitlab.com/kicad/code/kicad/-/issues/19726)
- 由于 OpenGL 失败，不保留回退画布类型。
- 在插件需要时提示启用 IPC API。 [#20062](https://gitlab.com/kicad/code/kicad/-/issues/20062)
- 修复使用 Git 跟踪的项目的项目管理器性能。 [#20078](https://gitlab.com/kicad/code/kicad/-/issues/20078)
- 修复访问导入的 Altium \*.IntLib 文件的封装时崩溃。 [#20099](https://gitlab.com/kicad/code/kicad/-/issues/20099)
- 在快捷键列表中显示项目管理器快捷键。 [#19989](https://gitlab.com/kicad/code/kicad/-/issues/19989)
- 修复 git 克隆项目对话框布局问题。 [#20045](https://gitlab.com/kicad/code/kicad/-/issues/20045)
- 正确恢复所有编辑器的面板。 [#20066](https://gitlab.com/kicad/code/kicad/-/issues/20066)
- 修复在没有 git 仓库时启动时崩溃。 [#20152](https://gitlab.com/kicad/code/kicad/-/issues/20152)
- 保留生成 gerber 任务文件设置。 [#20158](https://gitlab.com/kicad/code/kicad/-/issues/20158)
- 防止导入某些 SVG 文件时出现额外的曲线。 [#20138](https://gitlab.com/kicad/code/kicad/-/issues/20138)
- 保留一些缺失的任务集参数。 [#20116](https://gitlab.com/kicad/code/kicad/-/issues/20116)
- 使用不在任务集中的 Gerber 任务设置。 [#20214](https://gitlab.com/kicad/code/kicad/-/issues/20214)
- 修复任务集的原理图 PDF 输出。 [#19522](https://gitlab.com/kicad/code/kicad/-/issues/19522)
- 修复任务集运行日志对话框中的按钮对齐。 [#20207](https://gitlab.com/kicad/code/kicad/-/issues/20207)
- 支持 ctrl-delete 向前删除单词。 [#20248](https://gitlab.com/kicad/code/kicad/-/issues/20248)
- 修复打开嵌入式 PDF 文件。 [#20006](https://gitlab.com/kicad/code/kicad/-/issues/20006)
- 修复打开配置了 GitHub SSH 密钥的 git 仓库项目时的段错误。 [#20204](https://gitlab.com/kicad/code/kicad/-/issues/20204)
- 修复关闭 KiCad 时与 git2 相关的崩溃。 [#20202](https://gitlab.com/kicad/code/kicad/-/issues/20202)

### 原理图编辑器

- 从剪贴板粘贴时防止图像重复。[#19973](https://gitlab.com/kicad/code/kicad/-/issues/19973)
- 正确处理导入 Altium 线束。[#16852](https://gitlab.com/kicad/code/kicad/-/issues/16852)
- 修复符号文本项中的位号的引用问题。[#19983](https://gitlab.com/kicad/code/kicad/-/issues/19983)
- 从属性检查器更新实例引用。[#19932](https://gitlab.com/kicad/code/kicad/-/issues/19932)
- 在"符号字段表"对话框中美化交叉引用显示。[#19941](https://gitlab.com/kicad/code/kicad/-/issues/19941)
- 移除符号字段表对话框中清除值字段的限制。[#19745](https://gitlab.com/kicad/code/kicad/-/issues/19745)
- 不加载所有字段都设为可见的旧符号。[#20017](https://gitlab.com/kicad/code/kicad/-/issues/20017)
- 防止在现有项目上导入时崩溃。[#20004](https://gitlab.com/kicad/code/kicad/-/issues/20004)
- 使仿真排除指示器更加隐晦。
- 允许仿真模型引用嵌入文件。[#20024](https://gitlab.com/kicad/code/kicad/-/issues/20024)
- 修正文本框的镜像位置。[#20021](https://gitlab.com/kicad/code/kicad/-/issues/20021)
- 修复在 9.0.0 中导致文件加载失败的字段文件格式问题。[#20166](https://gitlab.com/kicad/code/kicad/-/issues/20166)
- 确保遵循原理图文件名颜色设置。[#20128](https://gitlab.com/kicad/code/kicad/-/issues/20128)
- 当 No ERC 标记连接到不连接对象时不触发 ERC 错误。[#20222](https://gitlab.com/kicad/code/kicad/-/issues/20222)
- 修复导入 Altium 原理图时的多单元符号问题。
- 确保导入的 Altium 原理图页名称唯一。[#19281](https://gitlab.com/kicad/code/kicad/-/issues/19281)
- 当不连接引脚连接到不连接标记时防止 ERC 错误。[#20222](https://gitlab.com/kicad/code/kicad/-/issues/20222)
- 不翻译文件对话框"所有文件"过滤器字符串。
- 修复带嵌入文件的原理图加载。[#20301](https://gitlab.com/kicad/code/kicad/-/issues/20301)
- 不等待鼠标移动就绘制选择阴影。[#20309](https://gitlab.com/kicad/code/kicad/-/issues/20309)
- 不使用第一页的边框和标题栏打印所有页面。[#20318](https://gitlab.com/kicad/code/kicad/-/issues/20318)
- 在导出 PDF 时保持书签层次结构的完整深度。[#12154](https://gitlab.com/kicad/code/kicad/-/issues/12154)
- 在 ERC 报告中使用稳定的排序顺序。[#20333](https://gitlab.com/kicad/code/kicad/-/issues/20333)
- 正确处理 BOM 预设中的重复条目。[#20342](https://gitlab.com/kicad/code/kicad/-/issues/20342)
- 修复原理图加载失败。[#20301](https://gitlab.com/kicad/code/kicad/-/issues/20301)

### 符号编辑器

- 恢复导出符号功能。[#20070](https://gitlab.com/kicad/code/kicad/-/issues/20070)
- 处理将符号导出到现有库中。[#17840](https://gitlab.com/kicad/code/kicad/-/issues/17840)
- 修复由于写入权限问题导致的新建符号库失败。[#20228](https://gitlab.com/kicad/code/kicad/-/issues/20228)
- 修复删除未选择的封装过滤器时崩溃。[#20320](https://gitlab.com/kicad/code/kicad/-/issues/20320)
- 仿真
- 修复用户自定义信号的网络名称引用问题。[#18598](https://gitlab.com/kicad/code/kicad/-/issues/18598)
- 解决快捷键冲突。[#18201](https://gitlab.com/kicad/code/kicad/-/issues/18201)
- 修复尝试运行 IBIS 仿真时崩溃的问题。[#20268](https://gitlab.com/kicad/code/kicad/-/issues/20268)

### PCB 编辑器

- 改进爬电距离 DRC 性能。
- 在编辑上下文菜单中添加"从另一端布线选中项"操作。[#19911](https://gitlab.com/kicad/code/kicad/-/issues/19911)
- 不禁用填充形状的线型。[#19946](https://gitlab.com/kicad/code/kicad/-/issues/19946)
- 在属性面板中添加"名称"字段属性。[#19706](https://gitlab.com/kicad/code/kicad/-/issues/19706)
- 改进泪滴生成性能。
- 当过孔没有网络时不抛出 DRC 错误"未连接端点"。[#19737](https://gitlab.com/kicad/code/kicad/-/issues/19737)
- 正确保存"镜像查看 PCB"预设设置。[#19852](https://gitlab.com/kicad/code/kicad/-/issues/19852)
- 修复旋转 ±90 度的表格绘制错误。[#19985](https://gitlab.com/kicad/code/kicad/-/issues/19985)
- 确保在 ODB++ 中创建钻孔层对。[#20039](https://gitlab.com/kicad/code/kicad/-/issues/20039)
- 修复损坏的报告文件堆叠关系。[#20069](https://gitlab.com/kicad/code/kicad/-/issues/20069)
- 减小 PCB 设置对话框高度。[#20106](https://gitlab.com/kicad/code/kicad/-/issues/20106)
- 防止辅助层中不活动层视图模式下的过孔不可见。[#20093](https://gitlab.com/kicad/code/kicad/-/issues/20093)
- 修复敷铜管理器对话框布局问题。[#20046](https://gitlab.com/kicad/code/kicad/-/issues/20046)
- 防止被忽略的违规"背面层上的非镜像文本"在 DRC 后显示红色箭头。[#20049](https://gitlab.com/kicad/code/kicad/-/issues/20049)
- 禁止设置特定层的阻焊覆盖，因为不支持此功能。[#20053](https://gitlab.com/kicad/code/kicad/-/issues/20053)
- 防止线性标注箭头在 Gerber 输出中重复。[#20076](https://gitlab.com/kicad/code/kicad/-/issues/20076)
- 修复 SVG 导出模式逻辑。[#20089](https://gitlab.com/kicad/code/kicad/-/issues/20089)
- 修复与 git 支持相关的崩溃。[#20133](https://gitlab.com/kicad/code/kicad/-/issues/20133)
- 使用长度匹配工具时不移除阻焊层开窗。[#20085](https://gitlab.com/kicad/code/kicad/-/issues/20085)
- 修改单个走线宽度时不对所有连接的焊盘发出警告。[#20084](https://gitlab.com/kicad/code/kicad/-/issues/20084)
- 不在丝印层 Gerber 输出中包含制造层值。[#20144](https://gitlab.com/kicad/code/kicad/-/issues/20144)
- 防止连接到敷铜网络的走线在连接到新的敷铜时仍保持原来的网络。[#20090](https://gitlab.com/kicad/code/kicad/-/issues/20090)
- 确保焊盘间距线条始终绘制，而不仅在选中封装时绘制。[#19896](https://gitlab.com/kicad/code/kicad/-/issues/19896)
- 禁用拖动多个过孔。[#20150](https://gitlab.com/kicad/code/kicad/-/issues/20150)
- 修复非 90 度旋转角度表格的绘制。
- 改进外观面板的默认尺寸。[#19965](https://gitlab.com/kicad/code/kicad/-/issues/19965)
- 用户自定义层 bug 修复。[#20022](https://gitlab.com/kicad/code/kicad/-/issues/20022)
- 防止封装翻转时焊盘丢失层。[#20169](https://gitlab.com/kicad/code/kicad/-/issues/20169)
- 将箭头方向移至标注属性对话框更合适的部分。[#20208](https://gitlab.com/kicad/code/kicad/-/issues/20208)
- 打印时不应隐藏小元素。[#20226](https://gitlab.com/kicad/code/kicad/-/issues/20226)
- 修复多网络类的 Specctra 导出。
- 修复放置某些封装时崩溃。[#20235](https://gitlab.com/kicad/code/kicad/-/issues/20235)
- 修复 DRC 内存泄漏。[#20272](https://gitlab.com/kicad/code/kicad/-/issues/20272)
- 为表格添加 DRC。
- 防止 PNS 布线器推挤后留下过孔。[#19045](https://gitlab.com/kicad/code/kicad/-/issues/19045)
- 修复多拖动 PNS 推挤中的崩溃。[#20075](https://gitlab.com/kicad/code/kicad/-/issues/20075)
- 允许 DRC 规则减少辐条数量。[#20281](https://gitlab.com/kicad/code/kicad/-/issues/20281)
- 使用 PNS 布线器时不忽略铜层上的表格。[#20295](https://gitlab.com/kicad/code/kicad/-/issues/20295)
- 修复带旋转表格的区域的 DRC 误报。[#20143](https://gitlab.com/kicad/code/kicad/-/issues/20143)
- 修复卡顿的缩放性能。[#20060](https://gitlab.com/kicad/code/kicad/-/issues/20060)
- 修复 DRC 重新运行后层图例中 Edge.Cuts 的 DRC 排除。[#20308](https://gitlab.com/kicad/code/kicad/-/issues/20308)
- 防止爬电距离 DRC 违规指示器在重复运行时消失。[#20048](https://gitlab.com/kicad/code/kicad/-/issues/20048)
- 防止爬电距离 DRC 仅检查顶层铜箔。[#20317](https://gitlab.com/kicad/code/kicad/-/issues/20317)
- 导出 ODB++ 时在 misc/info 文件中使用正确的日期格式。[#20103](https://gitlab.com/kicad/code/kicad/-/issues/20103)
- 即使无法更新封装也更新封装属性。[#18249](https://gitlab.com/kicad/code/kicad/-/issues/18249)
- 修复将弧线用作走线时的 DRC 误报。[#20336](https://gitlab.com/kicad/code/kicad/-/issues/20336)
- 在钻孔报告堆叠中使用用户界面顺序。[#20069](https://gitlab.com/kicad/code/kicad/-/issues/20069)
- 修复差分布线时在焊盘对面放置过孔导致的崩溃。[#20440](https://gitlab.com/kicad/code/kicad/-/issues/20440)
- 正确绘制"在制造层上标注 DNP"。[#20458](https://gitlab.com/kicad/code/kicad/-/issues/20458)
- 在属性面板中设置网格原点后使用正确的矩形高度和宽度。[#20468](https://gitlab.com/kicad/code/kicad/-/issues/20468)

### 封装编辑器

- 不允许重命名封装时静默覆盖现有封装。[#19857](https://gitlab.com/kicad/code/kicad/-/issues/19857)
- 修复第二次"编辑焊盘为图形形状"操作时的崩溃。[#20129](https://gitlab.com/kicad/code/kicad/-/issues/20129)
- 不能禁用第一个内电层。[#20246](https://gitlab.com/kicad/code/kicad/-/issues/20246)
- 防止创建倒角线时出现误报错误消息。[#20326](https://gitlab.com/kicad/code/kicad/-/issues/20326)
- 修复当电路板包含自定义焊盘堆叠时增加铜层数量导致的崩溃。[#20435](https://gitlab.com/kicad/code/kicad/-/issues/20435)

### Gerber 查看器

- 导出 Gerber 到 PCB 时忽略负片层。[#16871](https://gitlab.com/kicad/code/kicad/-/issues/16871)

### 3D 查看器

- 不渲染未绘制文本的厚度墙。[#20200](https://gitlab.com/kicad/code/kicad/-/issues/20200)
- 将未定义板面的层放置在电路板正面。[#20201](https://gitlab.com/kicad/code/kicad/-/issues/20201)
- 允许重置默认颜色设置。[#18709](https://gitlab.com/kicad/code/kicad/-/issues/18709)
- 正确渲染表格。[#19981](https://gitlab.com/kicad/code/kicad/-/issues/19981)

### PCB 计算器

- 修复带状线导体损耗计算公式错误。

### CLI 命令行界面

- 修复损坏的 PCB SVG 输出。[#20023](https://gitlab.com/kicad/code/kicad/-/issues/20023)
- 添加 IPC-D-356 导出。[#13951](https://gitlab.com/kicad/code/kicad/-/issues/13951)
- 弃用而不是移除 PCB 导出器中的 plot-invisible-text 选项。[#20171](https://gitlab.com/kicad/code/kicad/-/issues/20171)
- 恢复页面大小模式行为。[#20014](https://gitlab.com/kicad/code/kicad/-/issues/20014)

### 库文件

- 新增 200 个符号和 252 个封装
- 以版本 9 格式重新生成超过 10000 个封装
- 库中 72%的封装现在都是自动生成的

### API

- 添加封装安装方式的序列化。[kicad-python#19](https://gitlab.com/kicad/code/kicad-python/-/issues/19)
- 变更选择后刷新 PCB 编辑器。[#20008](https://gitlab.com/kicad/code/kicad/-/issues/20008)
- 添加电路板原点设置和获取方法。[kicad-python#20](https://gitlab.com/kicad/code/kicad-python/-/issues/20)
- 修复通过 API 更新位号时崩溃。[#20206](https://gitlab.com/kicad/code/kicad/-/issues/20206)
- 修复使用 protobuf 30 构建。[#20300](https://gitlab.com/kicad/code/kicad/-/issues/20300)
