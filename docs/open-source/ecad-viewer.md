---
tag:
  - EDA
  - KiCad
  - 技术
  - 开源
---

# ECAD-Viewer

在浏览器中以交互地方式查看您的电子设计。

在线演示：https://www.eda.cn/ecad-viewer

特色：

- 支持 KiCad 和 Altium 设计
- 检查所有组件及其属性
- 检查 PCB 中的网络并检查原理图中的标签参考
- 从 PCB 生成 3D 模型
- 从原理图生成 BOM

![ECAD Viewer](/assets/ecad-viewer-preview.gif)

## 快速开始

我们准备了完整版（包含所有 kicad 官方 3D 模型，镜像尺寸要大得多）和精简版 docker 镜像供您尝试，可以通过以下命令下载 docker 镜像：

```bash
# 取消下面的注释以拉取完整版本
# docker pull registry.cn-shanghai.aliyuncs.com/kicad/ecad-viewer:full
# 精简版
docker pull registry.cn-shanghai.aliyuncs.com/kicad/ecad-viewer:lite
```

然后启动容器:

```bash

# 取消注释下面的以运行完整版本
# docker run --rm -p 7676:7676 -p 8989:8989 -p 8012:8012  registry.cn-shanghai.aliyuncs.com/kicad/ecad-viewer:full
# 运行精简版
docker run --rm -p 7676:7676 -p 8989:8989 -p 8012:8012 registry.cn-shanghai.aliyuncs.com/kicad/ecad-viewer:lite

```

打开 localhost:8012 查看项目运行效果
![Quick start](/assets/ecad-viewer-quick-start.gif)

## 本地开发

从 https://nodejs.org/en/download/ 下载并安装 NodeJS（版本 >= 18）

```bash
git https://github.com/Huaqiu-Electronics/ecad-viewer.git
cd ecad-viewer
npm install
npm run serve
```

修改代码并打开 localhost:8080 验证修改

## 使用

### 单独使用

```html
<ecad-viewer cli_server_addr="http://localhost:8989/convert_ad_to_kicad">
  <ecad-source src="video/video.kicad_pcb"></ecad-source>
  <ecad-source src="video/video.kicad_sch"></ecad-source>
  <ecad-3d-source src="video/video.glb"></ecad-3d-source>
</ecad-viewer>
<script type="module" src="./ecad_viewer/ecad-viewer.js"></script>
<script>
  window.addEventListener("pcb:board_content:ready", function (event) {
    // URL of the API endpoint
    const convert_pcb_to_glb_url = "http://localhost:8989/convert_pcb_to_glb";
    fetch(convert_pcb_to_glb_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pcb_content: event.detail,
      }),
    })
      .then((response) => {
        return response.json(); // Parse response JSON
      })
      .then((data) => {
        window.dispatchEvent(new CustomEvent("3d:url:ready", { detail: url }));
      });
  });
</script>
```

参数说明：

- `cli_server_addr`：用于将 AD 设计转换为 KiCad 的服务 URL
- `ecad-source`：HTML 自定义标签，`src`为 Kicad 或 AD 设计的 URL
- `ecad-3d-source`：HTML 自定义标签，`src`为 3D 模型的 URL
- `convert_pcb_to_glb_url`：用于将 KiCad PCB 转换为 3D 模型的服务 URL

### 内嵌模式

```html
<body>
  <ecad-viewer-embedded url="video/video.kicad_pcb"> </ecad-viewer-embedded>
  <ecad-viewer-embedded url="video/video.glb"> </ecad-viewer-embedded>
  <ecad-viewer-embedded
    url="video/video.kicad_sch;
      video/bus_pci.kicad_sch"
  >
  </ecad-viewer-embedded>
  <ecad-viewer-embedded
    is-bom="true"
    url="video/video.kicad_sch;
      video/bus_pci.kicad_sch"
  >
  </ecad-viewer-embedded>
</body>
<script type="module" src="./ecad_viewer/ecad-viewer.js"></script>
```

参数说明：

- `url`：KiCad 或 AD 的设计的 URL（多个 URL 以分号分隔）
- `is-bom`：如果设置为 true，嵌入式查看器将显示 BOM 而不是原理图

### kicad-cli server

将 AD 设计转换为 KiCad，以及从 PCB 生成 3D 模型都需要 kicad-cli。

#### kicad-cli docker image

基于华秋开发维护的 [Kicad 分支](https://github.com/Huaqiu-Electronics/kicad) 制作的 [docker 镜像](https://github.com/orgs/Huaqiu-Electronics/packages/container/package/kicad)

```bash
# 打包了所有kicad官方3D模型的镜像
docker pull registry.cn-shanghai.aliyuncs.com/kicad/kicad:full

# 不包含3D模型的镜像
docker pull registry.cn-shanghai.aliyuncs.com/kicad/kicad:lite
```

#### kicad-cli-python

[kicad-cli-python](https://github.com/Huaqiu-Electronics/kicad-cli-python) 是打包了 kicad-cli 命令行工具并对外提供服务的 python 项目，拉取了上述 kicad-cli docker 镜像之后，您可以执行以下命令启动文件服务和 kicad-cli 服务：

```bash
git clone https://github.com/Huaqiu-Electronics/kicad-cli-python.git
cd kicad-cli-python
pip install -r ./requirements.txt
# 开启文件服务和kicad-cli服务
python file_srv.py
python cli_srv.py
```

## Credits

该项目包含副本或使用其他作品。这些作品及其各自的许可和条款是：

- [kicanvas](https://github.com/theacodes/kicanvas) 基于 [MIT license](https://github.com/theacodes/kicanvas/blob/main/LICENSE.md)
- [three-gltf-viewer](https://github.com/donmccurdy/three-gltf-viewer) 基于 [MIT license](https://github.com/donmccurdy/three-gltf-viewer/blob/main/LICENSE)
