<template>
  <v-dialog v-model="internalDialog" max-width="800" @input="updateDialog">
    <v-card>
      <v-btn icon color="grey darken-1" @click="closeDialog" style="position: absolute; top: 10px; right: 0px;">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card-text>
        <video ref="videoPlayer" width="100%" controls>
          <source :src="videoSrc" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean, // Dialog control state
    videoSrc: String  // Video source URL
  },
  data() {
    return {
      internalDialog: false
    };
  },
  watch: {
    dialog(value) {
      if (value) {
        this.internalDialog = true; // Ensure internal state matches prop
        this.$nextTick(() => {
          this.playVideo(); // Start playing the video
        });
      } else {
        this.internalDialog = false;
      }
    }
  },
  methods: {
    updateDialog(value) {
      if (!value) {
        this.$emit('close'); // Emit close event when dialog is closed
      }
    },
    closeDialog() {
      this.internalDialog = false; // Close dialog internally
      this.$emit('close'); // Emit close event to parent
    },
    playVideo() {
      this.$refs.videoPlayer.play(); // Play the video programmatically
    }
  }
};
</script>

<style scoped>
/* Center the dialog */
.v-dialog__content {
  text-align: center;
}
</style>
