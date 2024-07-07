---
tag:
  - EDA
  - WiKi
  - 技术
---

# Getting started developing KiCad in Docker

> [What's the point of containerizing a development environment with Docker?](https://www.reddit.com/r/docker/comments/tv7sqs/whats_the_point_of_containerizing_a_development/)

> To reduce "It works on my machine" problems. That's the best reason which I can think about.

## Advantages developing in Docker

[Docker: developing inside a container, WHY & HOW](https://medium.com/@mattiagazzola_95479/docker-developing-inside-a-container-why-how-bb0aa9cbe951)

- Consistency: Containers encapsulate an entire development environment
- Isolation: Containers provide process and file system isolation
- Reproducibility: Define the exact environment your application needs to run
- Portability: Run on any system that supports Docker
- Resource Efficiency: Lightweight compared to traditional virtual machines
- Dependency Management: Specify dependencies and their versions in the container image
- Rapid Development and Testing: Started and stopped quickly
- Version Control: Both Docker images and Dockerfiles can be version-controlled
- DevOps Integration: Seamlessly integrated into CI/CD pipelines
- Security: Isolating applications from the host and from each other

## Quick start with our existing image

### Prepare

- [docker](https://www.docker.com/)
- [vscode](https://code.visualstudio.com/) and its [Dev Containers extension](https://code.visualstudio.com/docs/devcontainers/containers)

### Usage

1. clone the demo repository

```bash
git clone -b debian/kicad-cli --depth 1 https://gitlab.com/Liangtie/kicad.git;
```

2. open the project in vscode
3. click the "Reopen in Container" button in the bottom right corner
4. wait for the container to start (pulling image is required if first time)
5. start developing

### Project structure explanation

- KiCad source existing files and dirs
- .devcontainer/devcontainer.json

_The content of `.devcontainer/devcontainer.json` file:_

```json
{
  "name": "kiCad Debian sid dev",
  "image": "registry.cn-shanghai.aliyuncs.com/kicad/kicad:dev"
}
```

## Speed up with Alibaba Cloud Container Registry

[Alibaba Cloud Container Registry](https://cr.console.aliyun.com) provides 3 namespaces and 300 container images quota for free.
