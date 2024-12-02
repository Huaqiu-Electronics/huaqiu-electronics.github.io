<template>
  <div class="linux-download-page">
    <header class="page-header">
      <h1>Linux 安装说明</h1>
    </header>
    <section class="instructions">
      <h2>安装步骤</h2>
      <ol>
        <li>
          <strong>安装 Flatpak</strong><br />
          <code>sudo apt install flatpak</code>
        </li>
        <li>
          <strong>将域名映射到指定 IP 地址</strong><br />
          <code>sudo vim /etc/hosts</code><br />
          使用 vim 编辑器打开 `/etc/hosts` 并添加以下行：<br />
          <code>175.6.14.183 kicad.huaqiu.com</code><br />
          验证连接是否成功：<br />
          <code>ping kicad.huaqiu.com</code>
        </li>
        <li>
          <strong>添加远程 KiCad 仓库</strong><br />
          <code>flatpak remote-add --user repo https://kicad.huaqiu.com/kicadhuaqiu</code><br />
          验证是否添加成功：<br />
          <code>flatpak remote-ls repo</code><br />
          如果报 GPG 验证错误，请进行下一步操作。
        </li>
        <li>
          <strong>忽略未签名认证并修改配置</strong><br />
          <code>vim ~/.local/share/flatpak/repo/config</code><br />
          在文件中修改：<br />
          <code>gpg-verify=false</code><br />
          然后执行：<br />
          <code>flatpak remote-modify --no-gpg-verify repo</code><br />
          再次检查是否添加成功：<br />
          <code>flatpak remote-ls repo</code>
        </li>
        <li>
          <strong>安装 KiCad</strong><br />
          <code>flatpak install repo org.kicad.KiCad</code><br />
          如果没有依赖问题，继续下一步。
        </li>
        <li>
          <strong>解决缺少 SDK 依赖问题</strong><br />
          使用国内的 Flathub 镜像仓库：<br />
          <code>sudo flatpak remote-modify flathub --url=https://mirror.sjtu.edu.cn/flathub</code><br />
          如果缺少 `org.freedesktop.Sdk/x86_64/23.08`，运行：<br />
          <code>flatpak install flathub org.freedesktop.Sdk/x86_64/23.08</code><br />
          如果缺少 `org.freedesktop.Sdk//23.08`，运行：<br />
          <code>flatpak install flathub org.freedesktop.Sdk//23.08</code>
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: "LinuxDownloadPage",
};
</script>

<style scoped>
.linux-download-page {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  padding: 20px;
  margin-top: 7vh;
  background-color: #f5f8fa;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #005fa9;
}

.instructions {
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.instructions h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #005fa9;
}

ol {
  padding-left: 20px;
}

li {
  margin-bottom: 15px;
}

code {
  display: block;
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  margin-top: 5px;
  color: #005fa9;
  font-family: "Courier New", Courier, monospace;
  word-wrap: break-word;
}

li strong {
  color: #333;
}

.instructions {
  padding: 20px 30px;
}

ol li:not(:last-child) {
  border-bottom: 1px dashed #ddd;
  padding-bottom: 15px;
}
</style>
