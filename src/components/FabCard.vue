<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200" src="../assets/fab.png" cover>
      <v-card-title>生产制造</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      在KiCad中一键下单
    </v-card-subtitle>

    <v-card-text>
      <div>根据 PCB 信息，实时查询 PCB/SMT 价格</div>
      <div>自动匹配 BOM，一键生成 Gerber、钻孔、坐标文件并生成订单</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" icon="mdi-play" @click="toggleVideo"></v-btn>
      <a href="https://smt.hqchip.com/online" target="_blank">
        <v-btn color="orange" icon="mdi-link"></v-btn>
      </a>
    </v-card-actions>

    <!-- Video Player Dialog Component -->
    <video-player-dialog :dialog="dialog" :video-src="videoSrc" @close="dialog = false" />

  </v-card>
</template>

<script>
import VideoPlayerDialog from './VideoPlayerDialog.vue';

export default {
  name: 'ManufacturingCard',
  data() {
    return {
      dialog: false, // Dialog control state
      videoSrc: 'http://www.eda.cn/all/video/BOM-match-plugin.mp4' // Video source URL
    };
  },
  components: {
    VideoPlayerDialog
  },
  methods: {
    toggleVideo() {
      this.dialog = true; // Open dialog on button click
      this.$nextTick(() => {
        this.$refs.videoPlayer.play(); // Start playing the video
      });
    }
  }
};
</script>

<style scoped>
.v-card {
  max-width: 400px;
}
</style>
