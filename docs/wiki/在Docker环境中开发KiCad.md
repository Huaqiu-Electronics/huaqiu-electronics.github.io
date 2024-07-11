---
tag:
  - EDA
  - WiKi
  - 技术
---

# 在 Docker 环境中开发 KiCad

> [将开发环境容器化有什么意义？](https://www.reddit.com/r/docker/comments/tv7sqs/whats_the_point_of_containerizing_a_development/)

> To reduce "It works on my machine" problems. That's the best reason which I can think about.

## 在 Docker 中开发的优势

[Docker: 为什么以及如何在容器内进行开发](https://medium.com/@mattiagazzola_95479/docker-developing-inside-a-container-why-how-bb0aa9cbe951)

- 一致性：容器封装了整个开发环境
- 隔离性：容器提供进程和文件系统隔离
- 可复现性：定义应用程序运行所需的确切环境
- 可移植性：在任何支持 Docker 的系统上运行
- 资源效率：比传统虚拟机更轻量
- 依赖管理：在容器镜像中指定依赖及其版本
- 快速开发和测试：可以快速启动和停止
- 版本控制：Docker 镜像和 Dockerfile 都可以进行版本控制
- DevOps 集成：无缝集成到 CI/CD 流水线中
- 安全性：将应用程序与主机和其他应用程序隔离

## 使用我们提供的镜像快速开始

### 准备

- [docker](https://www.docker.com/)
- [vscode](https://code.visualstudio.com/) 及其 [ Dev Containers 插件](https://code.visualstudio.com/docs/devcontainers/containers)

### 使用

1. 克隆示例仓库

```bash
git clone -b debian/kicad-cli --depth 1 https://gitlab.com/Liangtie/kicad.git;
```

2. 在 vscode 中打开项目
3. 点击右下角的“在容器中重新打开”按钮
4. 等待容器启动（如果是第一次启动需要拉取镜像）
5. 开始开发

### 项目结构说明

- KiCad 源代码现有文件和目录
- .devcontainer/devcontainer.json

_`.devcontainer/devcontainer.json` 文件的内容::_

```json
{
  "name": "kiCad Debian sid dev",
  "image": "registry.cn-shanghai.aliyuncs.com/kicad/kicad:dev"
}
```

## 使用阿里云容器镜像服务加速

[阿里云容器镜像服务 ](https://cr.console.aliyun.com) 个人免费版本提供了 3 个命名空间和 300 个容器镜像配额
