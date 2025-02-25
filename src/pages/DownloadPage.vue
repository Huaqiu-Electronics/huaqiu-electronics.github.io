<template>
  <div class="download-page">
    <header class="page-header">
      <h1>下载 KiCad 华秋发行版</h1>
      <!-- Repo Badges -->
      <div class="repo-badges">
        <a href="https://github.com/Huaqiu-Electronics/kicad-win-builder">
          <img src="https://img.shields.io/github/release-date/Huaqiu-Electronics/kicad-win-builder" alt="Update Date">
        </a>

        <a href="https://github.com/Huaqiu-Electronics/kicad-win-builder/releases">
          <img src="https://img.shields.io/github/v/release/Huaqiu-Electronics/kicad-win-builder?logo=github"
            alt="Packaging status">
        </a>

        <a href="https://repology.org/project/kicad-hq/versions">
          <img src="https://img.shields.io/aur/version/kicad-hq" alt="AUR package">
        </a>
      </div>
    </header>

    <section class="download-section">
      <h2>选择您的操作系统</h2>
      <div class="platforms">
        <div v-for="platform in platforms" :key="platform.name" class="platform-card">
          <img :src="platform.logo" :alt="platform.name" class="platform-logo" />
          <h3>{{ platform.name }}</h3>
          <button v-if="platform.downloadUrl" @click="data_buried_pont(platform.downloadUrl)"
            class="download-button">下载</button>
          <button v-else @click="handlePlatformClick(platform.name)" class="download-button">
            详情
          </button>
        </div>
      </div>
    </section>

    <VersionHistory :versions="versions" />

    <section class="faq-section">
      <h2>常见问题</h2>
      <div class="accordion-container">
        <div v-for="item in faq" :key="item.title" class="accordion">
          <div class="accordion-header" @click="toggleAccordion(item.title)">
            {{ item.title }}
            <span>{{ item.open ? '-' : '+' }}</span>
          </div>
          <div v-if="item.open" class="accordion-body">
            <p v-html="item.content"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import windowsLogo from "@/assets/Windows.svg";
import macosLogo from "@/assets/macos.svg";
import linuxLogo from "@/assets/linux.svg";
import { useRouter } from "vue-router";
import { data_buried_pont , gen_version_info_list , VERSIONS} from "@/common";

export default {
  name: "DownloadPage",
  setup() {
    const router = useRouter();

    const versions = ref(gen_version_info_list(VERSIONS));
    // Sort versions by semantic versioning and get the latest version
    const latestVersion = computed(() => {
      const sortedVersions = Object.keys(versions.value).sort((a, b) => {
        return b.localeCompare(a, undefined, { numeric: true });
      });
      return sortedVersions[0];
    });

    // Platform setup
    const platforms = ref([
      {
        name: "Windows",
        logo: windowsLogo,
        downloadUrl: versions.value[latestVersion.value]?.download, // Dynamically set latest version URL
      },
      {
        name: "macOS",
        logo: macosLogo,
        downloadUrl: null,
      },
      {
        name: "Linux",
        logo: linuxLogo,
        downloadUrl: null,
        instructionUrl: "/download/linux",
      }
    ]);




    const faq = ref([
      {
        title: "华秋版是开源的吗？",
        content: `是的，华秋版完全开源，遵循 GPL 3.0 许可。源代码可在 GitLab 上获取，预装的插件托管在 GitHub 上，确保透明性与协作性。`,
        open: false,
      },
      {
        title: "KiCad 华秋发行版的源代码在哪里？",
        content: `源代码可以在 <a href="https://gitlab.com/kicad-hq/kicad" target="_blank">GitLab</a> 上获取。
                  您可以通过 <a href="https://gitlab.com/kicad-hq/kicad/-/issues" target="_blank">GitLab Issues</a> 提交问题。`,
        open: false,
      },
      {
        title: "什么是 KiCad 华秋版？",
        content: `华秋版是为中国用户量身定制的 KiCad 发行版。它解决了特定的本地需求，如与供应链的集成，并添加了一些尚未合并到主分支的功能。`,
        open: false,
      },
      {
        title: "为什么需要华秋发行版？",
        content: `华秋自 2023 年起成为 KiCad 白金赞助商，同时招募了专职软件工程师为 KiCad 代码做贡献。除了日常的 Bug 修复外，对 KiCad 9 的主要功能的贡献包括:<br></br>

        <ul>
          <li>敷铜管理器：允许用户在一个UI中查看 PCB 中所有的敷铜，并修改铜箔的属性、优先级的信息</li>
          <li>层次原理图引脚/标签同步工具：方便用户同步子原理图中的 Port 与上层 Sheet Pin 引脚</li>
          <li>ODB++输出：支持 ODB++ 输出，方便在制造或仿真场景中使用</li>
        </ul>

<br>在贡献代码的过程中，发现除了这些通用功能之外，有些对中国用户来讲非常重要的功能但因为各种原因可能无法合并到主干（比如微软拼音输入法导致卡死的问题）；某些新功能因为 KiCad 本身的限制也无法短期内实现（比如原理图中支持插件、元器件的概念等）；当然也希望通过发行版，预装一些插件，方便用户打通供应链、设计和制造（比如DFM插件，询价和一键下单插件）。</br>
<br>通过和 KiCad 社区的核心开发者充分交流沟通后，萌生了制作华秋发行版的念头。发行版完全遵循 GPL 3.0 协议，且跟随 KiCad 最新的分支同步更新。<br>原则是通用功能还是贡献给 KiCad 主干，主干无法合并的功能才添加到发行版中，一旦主干可以支持，即刻合并到主干。</br>
<br>因此发行版完全兼容 KiCad 的所有原理图、PCB文件格式，功能上也只是新增而不会缺失主干中的任何功能。`,
        open: false,
      },
      {
        title: "华秋版有哪些关键新功能？",
        content: `<ul>
                  <li>修复 Windows 10 上微软拼音输入法卡死问题。</li>
                  <li>基于 Gitee 托管的插件镜像服务，稳定下载。</li>
                  <li>支持 Windows 的暗黑模式。</li>
                  <li>集成云端组件库，方便选择元件。</li>
                  <li>预装 DFM 插件用于高效的错误检查，以及 HQPCB 插件实现实时报价和下单。</li>
                </ul>`,
        open: false,
      },
      {
        title: "插件镜像服务是如何工作的？",
        content: `该服务每两天将所有官方 KiCad 插件链接与 Gitee 仓库同步。用户可以快速下载插件，不受网络不稳定的影响。华秋版已预配置镜像 URL，方便使用。`,
        open: false,
      },
    ]);
    const toggleAccordion = (title) => {
      faq.value.forEach((item) => {
        if (item.title === title) {
          item.open = !item.open;
        } else {
          item.open = false;
        }
      });
    };

    const handlePlatformClick = (platform) => {
      if (platform === "macOS") {
        alert("macOS 版本仍在开发中。");
      } else if (platform === "Linux") {
        console.log("Navigating to Linux download page");
        router.push("/download/linux");
      }
    };

    return {
      data_buried_pont,
      platforms,
      versions,
      faq,
      toggleAccordion,
      handlePlatformClick,
    };
  },
};
</script>

<style scoped>
.download-page {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  padding: 20px;
  margin-top: 7vh;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #005fa9;
}

.download-section {
  text-align: center;
}

.platforms {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.platform-card {
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  max-width: 150px;
}

.platform-logo {
  max-width: 100px;
  margin-bottom: 10px;
}

.download-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  color: #fff;
  background-color: #005fa9;
  border-radius: 5px;
  text-decoration: none;
  min-width: 120px;
}

.download-button:hover {
  background-color: #00417c;
}

.faq-section {
  margin-top: 40px;
  text-align: center;
}

.accordion-container {
  margin: 20px auto;
  max-width: 600px;
  /* Optional: Limit width for better alignment */
}

.accordion {
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  text-align: left;
  /* Ensure content remains left-aligned */
}

.accordion-header {
  background-color: #f7f7f7;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-body {
  padding: 15px;
  background-color: #fff;
}

.repo-badges {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}
</style>
