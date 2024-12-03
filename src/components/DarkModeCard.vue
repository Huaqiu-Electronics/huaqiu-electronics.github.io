<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200" src="../assets/DarkMode.webp" cover>
      <v-card-title>暗黑模式</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      凌晨3点工作时要重视视网膜
    </v-card-subtitle>

    <v-card-text>
      华秋发行版中 cherry pick 了 wxWidget master 分支中的功能，现在 Windows 用户也能体验暗黑模式的快乐了
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" icon="mdi-play" @click="toggleVideo"></v-btn>
    </v-card-actions>
    <VideoPlayerDialog :dialog="dialog" :video-src="videoSrc" @close="dialog = false" />
  </v-card>
</template>

<script>

export default {
  name: 'DFMCard',
  data() {
    return {
      dialog: false, // Dialog control state
      videoSrc: 'https://www.eda.cn/all/video/DarkMode.mp4' // Video source URL
    };
  },

  methods: {
    toggleVideo() {
      this.dialog = true; // Open dialog on button click
    }
  }
};
</script>

<style scoped>
.v-card {
  max-width: 400px;
}
</style>
