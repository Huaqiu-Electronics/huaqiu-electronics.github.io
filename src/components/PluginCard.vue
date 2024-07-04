<template>
  <v-card class="mx-auto" max-width="344" append-icon="mdi-open-in-new"
    href="https://gitee.com/kicad-mirror/kicad-addons" rel="noopener" target="_blank" title="在Gitee上查看">
    <v-img class="white--text align-end" height="200" src="../assets/plugin.png" cover>
      <v-card-title>使用插件</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      KiCad插件国内镜像源
    </v-card-subtitle>

    <v-card-text>
      <div>自动同步 KiCad 官方插件库</div>
      <div>解决无法下载插件或下载速度慢的问题</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PluginCard',
};
</script>

<style scoped>
.v-card {
  max-width: 344px;
}
</style>
