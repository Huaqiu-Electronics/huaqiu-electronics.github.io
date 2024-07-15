---
tags:
  - CAD
  - EDA
  - WiKi
  - 技术
---

# CAD 前端介绍及 Canvas 框架对比

## CAD 前后端

[EDA 是计算机辅助设计（CAD）的一个广义形式](https://www.semiconductorreview.com/news/an-overview-of-electronic-design-automation-nwid-558.html)

> 电子设计自动化（EDA）指的是一组计算机软件工具，帮助设计、生产、封装和测试大规模集成电路芯片。EDA 在 20 世纪 60 年代中期从计算机辅助设计（CAD）、计算机辅助制造（CAM）、计算机辅助测试（CAT）和计算机辅助工程（CAE）的理念中发展而来。  
> 工业软件可以根据应用领域分为三个主要方面：研发设计、生产调度和过程控制、以及业务管理。PLM(Product Lifecycle Management)、MES(Manufacturing Execution System) 和 ERP(Enterprise Resource Planning) 是这三个领域中工业软件系统的典型例子，而 EDA 和 PLM 则与研发和工业软件设计相关。EDA 技术集成了电子技术、计算机技术、信息处理技术和智能技术的最新发展，利用计算机作为自动化设计电子产品的平台。集成电路的设计、生产和制造是一个复杂的过程。

在[软件工程](https://en.wikipedia.org/wiki/Software_engineering)中，[前端和后端](https://en.wikipedia.org/wiki/Frontend_and_backend)（有时写作 back end 或 back-end）指的是在软件的[表示层](https://en.wikipedia.org/wiki/Presentation_layer)（前端）和[数据访问层(DAL)](https://en.wikipedia.org/wiki/Data_access_layer)（后端）之间的[关注点分离(Separation of concerns)](https://en.wikipedia.org/wiki/Separation_of_concerns)，或指物理基础设施或[硬件](https://en.wikipedia.org/wiki/Computer_hardware)。在[客户端-服务器模型](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)中，[客户端](<https://en.wikipedia.org/wiki/Client_(computing)>)通常被认为是前端，[服务器](<https://en.wikipedia.org/wiki/Server_(computing)>)通常被认为是后端，即使实际上在服务器上也进行了一些表示层的工作。 <br>

### CAD 前端功能点

| 功能点             | 说明                                                                                        |
| :----------------- | :------------------------------------------------------------------------------------------ |
| 绘图工具和功能     | 提供基本的绘图工具，如线条、矩形、圆形、多边形等 <br>高级功能，如放样、旋转、缩放、测量等   |
| 用户界面（UI）设计 | 友好的用户界面，允许用户轻松访问和使用各种工具和功能 <br>支持拖放操作、快捷键等，以提高效率 |
| 实时渲染和显示     | 3D 模型和图纸的实时渲染，使用户能够实时查看修改效果 <br> 支持不同视角和投影模式的切换       |
| 文件管理           | 支持常见 CAD 文件格式的导入和导出，如 DWG、DXF 等 <br> 提供文件的保存、打开和版本控制功能   |
| 交互和编辑         | 支持对象的选择、移动、缩放、旋转等基本操作 <br>高级编辑功能，如布尔操作、细分、平滑等       |
| 插件和扩展         | 允许用户安装和使用第三方插件以扩展功能 <br> 提供 API 以便开发者创建自定义功能               |
| 协作功能           | 实时协作功能，允许多用户同时编辑和查看同一文件 <br> 注释和标记工具，用于团队讨论和审阅      |

## Canvas 框架对比

| 名称                                                     | 备注               | 示例                                                        |       硬件加速        | Github 星数 |
| :------------------------------------------------------- | :----------------- | ----------------------------------------------------------- | :-------------------: | :---------: |
| [pixijs](https://github.com/pixijs/pixijs)               | 2D WebGL 库        | [示例](https://konvajs.org/docs/sandbox/Canvas_Editor.html) |     WebGL,WebGPU      |    43.1k    |
| [tldraw](https://github.com/tldraw/tldraw)               | 适用于 React       | [示例](https://tldraw.dev/)                                 |           -           |    34.4k    |
| [Konva.js](https://github.com/konvajs/konva)             | 适用于 React、Vue  | [示例](https://konvajs.org/docs/sandbox/Canvas_Editor.html) |           -           |    11.1k    |
| [Three.js](https://github.com/mrdoob/three.js)           | JavaScript 3D 库   | [示例](https://threejs.org/examples)                        |     WebGL,WebGPU      |    101k     |
| [Babylon.js](https://github.com/BabylonJS/Babylon.js)    | 游戏和渲染引擎     | [示例](https://www.babylonjs.com/community/)                |     WebGL,WebGPU      |    22.8k    |
| [excalidraw](https://github.com/excalidraw/excalidraw)   | 创建手绘风格的图表 | [APP](https://excalidraw.com/)                              |           -           |    77.3k    |
| [node-canvas](https://github.com/Automattic/node-canvas) | 基于 Cairo         | [示例](https://codesandbox.io/examples/package/node-canvas) | X Rendering Extension |     10k     |

[再见 Flash，前端现在使用 Canvas](https://github.blog/2010-03-24-bye-bye-flash-network-graph-is-now-canvas/)

> [Flash](https://en.wikipedia.org/wiki/Adobe_Flash) 是由 Adobe（前身为 Macromedia）开发的多媒体平台，支持显示文本、矢量图形和光栅图形，可以创建动画、视频游戏和各种应用程序。F 由于安全问题和 Web 标准的进化，Flash 已经逐步被淘汰，现代技术如 HTML5、CSS 和 JavaScript 正在取代其位置。<br> [Canvas](https://en.wikipedia.org/wiki/Canvas_element) 元素是 HTML5 的一部分，允许动态、可编程地渲染 2D 形状和位图图像。它是一个低级的过程模型，用于更新位图。HTML5 Canvas 也有助于制作 2D 游戏。虽然 HTML5 canvas 提供了自己的 2D 绘图 API，但它也支持 WebGL API，以便使用 OpenGL ES 进行 3D 渲染。

### Konva.js

> Konva 是一个基于 HTML5 Canvas 的 JavaScript 框架，支持高性能的动画、过渡效果、节点嵌套、分层、滤镜、缓存、事件处理等功能，适用于桌面和移动应用程序等多种场景。 <br>
> 可以将数千个形态各异的图形绘制到场景中，并为它们添加事件监听器，对它们进行移动、缩放和旋转，而不影响其他形状，从而支持高性能的动画效果。

**特色**

- 节点嵌套、分组和事件冒泡
- 内置拖拽支持
- 面向对象风格的 API
- 同时支持桌面端和移动
- 高质量导出到数据 URL、图像数据或图像对象
- 开箱即用的过滤器
- 与 React、Vue 和 Svelte 等 Web 框架的原生集成

**基于 Konva.js 开发的项目**

| 名称                                | 说明                            |                                                     示例                                                      |
| :---------------------------------- | :------------------------------ | :-----------------------------------------------------------------------------------------------------------: |
| [画门窗](https://windowcc.com/home) | 门窗设计、拆单算料、3D 模型效果 | [使用教程](http://api.thinkerx.com:8060/web/#/116?page_id=3111) <br>[商城](https://windowcc.com/market/index) |
| [BoardOS](https://boardos.online/)  | 在线多人实时白板协作系统        |         [帮助中心](https://doc.boardos.online/help/) <br>[资源社区](https://boardos.online/community)         |
| [shelly](https://shelly.dev/)       | 用于绘图的编程语言              |                                         [示例](https://shelly.dev/p)                                          |

### Three.js

![Three.js结构](/assets/threejs-structure.svg)

> Three.js 经常与 WebGL 混淆，因为大多数情况下 three.js 使用 WebGL 进行 3D 绘制。WebGL 是一个非常低级的系统，只能绘制点、线和三角形；要在 WebGL 中实现任何有用的功能通常需要大量的代码，而 three.js 能替你处理场景、光照、阴影、材质、纹理、3D 数学等诸多方面，如果直接使用 WebGL 的话，这些都要你自己编写。[Three.js 基础](https://threejs.org/manual/#en/fundamentals)

**基于 Three.js 开发的项目**

| 名称                               | 说明                                                                     |                               示例                               |
| :--------------------------------- | :----------------------------------------------------------------------- | :--------------------------------------------------------------: |
| [JSCAD](https://www.vjmap.com/)    | 使用 JavaScript 代码创建参数化的 2D 和 3D 设计，特别适用于 3D 打印应用。 |               [openjscad](https://openjscad.xyz/)                |
| [唯杰地图](https://www.vjmap.com/) | CAD 图 WebGIS 可视化显示开发提供的一站式解决方案                         | [唯杰地图云端图纸管理平台](https://vjmap.com/demo/#/gallery/map) |

## CPU 渲染和 GPU 渲染对比

### Cairo (CPU 渲染)

[Cairo](https://cairographics.org/) 是一个开源图形库，为软件开发人员提供基于矢量图形、独立于设备的 API，它提供了跨多个不同后端的二维绘图的基元。

**将 Cairo 用于 2D 渲染的项目**

- GTK：前身为 GIMP ToolKit 和 GTK+，是一个自由软件的跨平台小部件工具包，用于创建图形用户界面（GUI）
- Mono：由微软赞助，Mono 是作为 .NET Foundation 的一部分，基于 ECMA 对 C# 和公共语言运行时的标准，是微软 .NET Framework 的开源实现。
- Firefox：由 Mozilla 基金会及其子公司开发的免费开源的网络浏览器。
- WebKit：主要用于苹果 Safari 网页浏览器的浏览器引擎，同时也用于 iOS 和 iPadOS 上的所有网页浏览器
- Poppler：用于渲染可移植文档格式（PDF）文档的免费开源软件库
- KiCad： 开源的电子设计自动化（EDA）工具包，用于电子设计、电子测试和电子制造。
- Inkscape：免费开源的矢量图形编辑器。
- SolveSpace：免费开源的基于约束的参数化计算机辅助设计（CAD）软件

### WebGL (GPU 渲染)

> [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API)（Web Graphics Library）是一种 JavaScript API，通过 HTML 的 canvas 元素用于在任何兼容的 Web 浏览器中渲染高性能的交互式 3D 和 2D 图形，而无需使用插件。WebGL 通过引入符合 OpenGL ES 2.0 的 API 以利用用户设备提供的硬件图形加速。<br> [WebGPU 是 WebGL 的继任者](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) ，提供了更好的现代 GPU 兼容性、支持通用目的 GPU 计算、更快的操作以及访问更高级的 GPU 功能。

### 二者优势和劣势

| 特性 | CPU 渲染                                           | GPU 渲染                                   |
| ---- | -------------------------------------------------- | ------------------------------------------ |
| 优势 | - 简单易用<br>- 广泛支持<br>- 快速开发             | - 高性能<br>- 3D 支持<br>- 可扩展性强      |
| 劣势 | - 性能有限<br>- 缺乏 3D 支持<br>- 无法充分利用 GPU | - 复杂度高<br>- 兼容性问题<br>- 开发成本高 |

## 前端框架对比

![前端框架趋势](/assets/React-Angular-Vue.webp)

| 特性       | React                                                                                                                             | Angular                                                                                                                                                                                                         | Vue                                                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **开发者** | Facebook                                                                                                                          | Google                                                                                                                                                                                                          | 尤雨溪（Evan You）                                                                                                                                    |
| **简介**   | 用于构建用户界面的 JavaScript 库，专注于视图层                                                                                    | 完整的前端框架，提供一整套解决方案                                                                                                                                                                              | 渐进式 JavaScript 框架，适合构建用户界面                                                                                                              |
| **优点**   | - 组件化开发，代码复用性强<br>- 高效的虚拟 DOM，提升性能<br>- 强大的社区支持和生态系统<br>- 支持 React Native，用于开发移动端应用 | - 完整的框架，提供了路由、表单处理、HTTP 客户端等功能<br>- 强类型支持（TypeScript），提高代码可维护性和可读性<br>- 依赖注入（Dependency Injection），提升代码的模块化和测试性<br>- 双向数据绑定，简化数据的同步 | - 易于上手，文档详尽<br>- 轻量级，适合小型项目和单页应用<br>- 双向数据绑定和虚拟 DOM 提升开发体验和性能<br>- 渐进式框架，可以根据需求逐步引入更多功能 |
| **缺点**   | - 学习曲线较陡峭，需要学习 JSX 语法<br>- 只是一个视图层解决方案，需要搭配其他库进行状态管理和路由处理                             | - 学习曲线陡峭，概念和术语较多<br>- 框架较重，可能不适合小型项目                                                                                                                                                | - 社区规模和生态系统相对较小<br>- 对于大型项目，可能需要更多的配置和管理工具                                                                          |

## 总结

| 名称        | 开发效率 | 性能 | 流行程度 |     硬件加速支持      | 前端框架限制 |
| ----------- | -------- | ---- | -------- | :-------------------: | :----------: |
| PixiJS      | 中       | 高   | 43.1k    |     WebGL, WebGPU     |      -       |
| tldraw      | 高       | 中   | 34.4k    |           -           |  React 限定  |
| Konva.js    | 高       | 中   | 11.1k    |           -           |      -       |
| Three.js    | 中       | 高   | 101k     |     WebGL, WebGPU     |      -       |
| Babylon.js  | 中       | 高   | 22.8k    |     WebGL, WebGPU     |      -       |
| Excalidraw  | 高       | 中   | 77.3k    |           -           |      -       |
| Node-canvas | 中       | 中   | 10k      | X Rendering Extension |      -       |
