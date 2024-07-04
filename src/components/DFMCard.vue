<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200" src="../assets/dfm.png" cover>
      <v-card-title>DFM检查</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      国内首款免费PCB+PCBA检测软件
    </v-card-subtitle>

    <v-card-text>
      无缝集成华秋DFM，快速分析潜在的制造问题，可以在 KiCad 中交互查看并直接修改图纸
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" icon="mdi-play" @click="toggleVideo"></v-btn>
      <a href="https://dfm.elecfans.com/" target="_blank">
        <v-btn color="orange" icon="mdi-link"></v-btn>
      </a>
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
      videoSrc: 'http://www.eda.cn/all/video/DFM.mp4' // Video source URL
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
