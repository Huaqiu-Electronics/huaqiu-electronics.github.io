<template>
  <v-footer class="bg-grey-darken-3 text-center d-flex flex-column">
    <div>
      <v-btn v-for="icon in icons" :key="icon" :icon="icon" class="mx-4" variant="text"></v-btn>
    </div>

    <div class="pt-0">
    </div>

    <v-divider></v-divider>

    <div>
      版权所有© {{ new Date().getFullYear() }} 深圳华秋电子有限公司
    </div>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'mdi-wechat',
      'mdi-twitter',
      'mdi-youtube',
      'mdi-github',
    ],
  }),
}
</script>
<style scoped>
.v-footer {
  margin-top: -8vh;
}
</style>
