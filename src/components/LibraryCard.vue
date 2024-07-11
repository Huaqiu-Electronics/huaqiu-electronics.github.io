<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200" src="../assets/library.jfif" cover>
      <v-card-title>元器件库</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      百万级元器件库
    </v-card-subtitle>

    <v-card-text>
      <div>直接在KiCad中查询、摆放，器件库包含了MPN、厂商、电气参数等完整属性</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" icon="mdi-play" @click="toggleVideo"></v-btn>
      <a href="https://www.eda.cn/" target="_blank">
        <v-btn color="orange" icon="mdi-link"></v-btn>
      </a>
    </v-card-actions>

    <video-player-dialog :dialog="dialog" :video-src="videoSrc" @close="dialog = false" />

  </v-card>
</template>

<script>
import VideoPlayerDialog from './VideoPlayerDialog.vue';

export default {

  name: 'ComponentLibraryCard', data() {
    return {
      dialog: false, // Dialog control state
      videoSrc: 'http://www.eda.cn/all/video/HQLib.mp4' // Video source URL
    };
  },
  components: {
    VideoPlayerDialog
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
