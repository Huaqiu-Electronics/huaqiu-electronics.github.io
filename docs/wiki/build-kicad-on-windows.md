---
tag:
  - EDA
  - WiKi
  - 技术
---

# Windows 下 KiCad 编译调试环境配置

## 准备工作

建议把 ninja、swig 都放在统一文件夹 e.g. C:/toolChain 文件夹下，再把 C:/toolChain 加入 PATH 环境变量中，使用 vcpkg 时候需要

1. 安装 VS2022

https://visualstudio.microsoft.com/vs/community/

2. 安装 Git

https://git-scm.com/download/win

3. 安装 CMake

https://cmake.org/download/

4. 安装 Ninja

https://github.com/ninja-build/ninja/releases

5. 安装 SWIG

https://sourceforge.net/projects/swig/

6. 安装 VSCODE

在 Extensions 中搜索安装微软官方的 CMake 和 C++插件

7. 安装 vcpkg

   > git clone https://github.com/microsoft/vcpkg
   > .\vcpkg\bootstrap-vcpkg.bat
   > 在环境变量中添加 VCPKG_ROOT 变量、变量值为 vcpkg 的安装目录，如 C:/vcpkg

8. 拉取 KiCad 代码

   > git clone https://gitlab.com/kicad/code/kicad.git
   > 在 KiCad 根目录添加 CMakePresets.json,内容如下

   ```json
   {
     "version": 2,
     "cmakeMinimumRequired": {
       "major": 3,
       "minor": 14,
       "patch": 0
     },
     "configurePresets": [
       {
         "name": "dev-mode",
         "hidden": true,
         "cacheVariables": {
           "tst-fool_DEVELOPER_MODE": "ON",
           "VCPKG_MANIFEST_FEATURES": "test"
         }
       },
       {
         "name": "vcpkg",
         "hidden": true,
         "cacheVariables": {
           "CMAKE_TOOLCHAIN_FILE": "$env{VCPKG_ROOT}/scripts/buildsystems/vcpkg.cmake"
         }
       },
       {
         "name": "vcpkg-win64",
         "hidden": true,
         "cacheVariables": {
           "VCPKG_TARGET_TRIPLET": "x64-windows"
         }
       },
       {
         "name": "cppcheck",
         "hidden": true,
         "cacheVariables": {
           "CMAKE_CXX_CPPCHECK": "cppcheck;--inline-suppr"
         }
       },
       {
         "name": "clang-tidy",
         "hidden": true,
         "cacheVariables": {
           "CMAKE_CXX_CLANG_TIDY": "clang-tidy;--header-filter=^${sourceDir}/"
         }
       },
       {
         "name": "KiCad",
         "description": "This preset is var settings for KiCad",
         "hidden": true,
         "cacheVariables": {
           "KICAD_SCRIPTING_WXPYTHON": "OFF",
           "KICAD_USE_OCC": "ON",
           "KICAD_BUILD_PNS_DEBUG_TOOL": "ON",
           "KICAD_USE_3DCONNEXION": "ON"
         }
       },
       {
         "name": "ci-std",
         "description": "This preset makes sure the project actually builds with at least the specified standard",
         "hidden": true,
         "inherits": ["KiCad"],
         "cacheVariables": {
           "CMAKE_CXX_EXTENSIONS": "OFF",
           "CMAKE_CXX_STANDARD": "17",
           "CMAKE_CXX_STANDARD_REQUIRED": "ON",
           "CMAKE_EXPORT_COMPILE_COMMANDS": "ON"
         }
       },
       {
         "name": "flags-gcc-clang",
         "description": "These flags are supported by both GCC and Clang",
         "hidden": true,
         "cacheVariables": {
           "CMAKE_SHARED_LINKER_FLAGS": "-Wl,--allow-shlib-undefined,--as-needed,-z,noexecstack,-z,relro,-z,now"
         }
       },
       {
         "name": "flags-appleclang",
         "hidden": true,
         "cacheVariables": {
           "CMAKE_CXX_FLAGS": "-fstack-protector-strong -fcf-protection=full -Wall -Wextra -Wpedantic -Wconversion -Wsign-conversion -Wcast-qual -Wformat=2 -Wundef -Werror=float-equal -Wshadow -Wcast-align -Wunused -Wnull-dereference -Wdouble-promotion -Wimplicit-fallthrough -Wextra-semi -Woverloaded-virtual -Wnon-virtual-dtor -Wold-style-cast"
         }
       },
       {
         "name": "flags-msvc",
         "description": "Note that all the flags after /W4 are required for MSVC to conform to the language standard",
         "hidden": true,
         "cacheVariables": {
           "CMAKE_EXE_LINKER_FLAGS": "/machine:x64 /guard:cf"
         }
       },
       {
         "name": "ci-linux",
         "generator": "Ninja",
         "hidden": true,
         "inherits": ["flags-gcc-clang", "ci-std"],
         "cacheVariables": {
           "CMAKE_BUILD_TYPE": "Release"
         }
       },
       {
         "name": "ci-darwin",
         "generator": "Ninja",
         "hidden": true,
         "inherits": ["flags-appleclang", "ci-std"],
         "cacheVariables": {
           "CMAKE_BUILD_TYPE": "Release"
         }
       },
       {
         "name": "ci-win64",
         "inherits": ["flags-msvc", "ci-std"],
         "generator": "Ninja",
         "hidden": true
       },
       {
         "name": "coverage-linux",
         "binaryDir": "${sourceDir}/build/coverage",
         "inherits": "ci-linux",
         "hidden": true,
         "cacheVariables": {
           "ENABLE_COVERAGE": "ON",
           "CMAKE_BUILD_TYPE": "Coverage",
           "CMAKE_EXE_LINKER_FLAGS_COVERAGE": "--coverage",
           "CMAKE_SHARED_LINKER_FLAGS_COVERAGE": "--coverage",
           "CMAKE_MAP_IMPORTED_CONFIG_COVERAGE": "Coverage;RelWithDebInfo;Release;Debug;"
         }
       },
       {
         "name": "ci-coverage",
         "inherits": ["coverage-linux", "dev-mode", "vcpkg"],
         "cacheVariables": {
           "COVERAGE_HTML_COMMAND": ""
         }
       },
       {
         "name": "ci-sanitize",
         "binaryDir": "${sourceDir}/build/sanitize",
         "inherits": ["ci-linux", "dev-mode", "vcpkg"],
         "cacheVariables": {
           "CMAKE_BUILD_TYPE": "Sanitize",
           "CMAKE_MAP_IMPORTED_CONFIG_SANITIZE": "Sanitize;RelWithDebInfo;Release;Debug;"
         }
       },
       {
         "name": "ci-build",
         "binaryDir": "${sourceDir}/build",
         "hidden": true
       },
       {
         "name": "ci-macos",
         "inherits": ["ci-build", "ci-darwin", "dev-mode", "vcpkg"]
       },
       {
         "name": "ci-ubuntu",
         "inherits": ["ci-build", "ci-linux", "dev-mode"]
       },
       {
         "name": "ci-windows",
         "inherits": [
           "ci-build",
           "ci-win64",
           "dev-mode",
           "vcpkg",
           "vcpkg-win64"
         ]
       }
     ]
   }
   ```

## 编译步骤

1. 开始菜单搜索并启动"x64 Native Tools Command Prompt for VS 2022"

2. 在上述启动的命令行中执行`code "本地KiCad代码路径"`

3. 打开 CMake 插件、点击"Build"

## 发布步骤

1. 将所有动态库拷贝至 build/kicad 目录下: find build -iname \*.dll -exec cp '{}' build/kicad

2. 将 build\vcpkg_installed\x64-windows\tools\python3 下所有文件及文件夹拷贝至 build/kicad

3. mkdir -p ./build/share/kicad/resources/ && cp ./build/resources/images.tar.gz ./build/share/kicad/resources/images.tar.gz

4. mkdir -p ./build/share/kicad/schemas/ && cp ./build/schemas/pcm.v1.schema.json ./build/share/kicad/schemas/pcm.v1.schema.json

## 调试步骤

在.vscode 中添加 launch.json，内容如下：

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "(Windows) Attach",
      "type": "cppvsdbg",
      "request": "attach"
    },
    {
      "name": "(Windows) Launch",
      "type": "cppvsdbg",
      "request": "launch",
      "program": "${workspaceFolder}/build/kicad/kicad.exe",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${fileDirname}",
      "environment": [],
      "console": "externalTerminal"
    }
  ]
}
```

点击调试按钮、选择"(Windows) Launch"即可开始调试
