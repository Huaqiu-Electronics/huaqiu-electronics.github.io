<template>
  <v-app>
    <v-main class="d-flex flex-column min-height-full bg-grey-lighten-5">
      <HeaderBar />
      <router-view />

    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-wechat', 'mdi-twitter', 'mdi-youtube', 'mdi-github'],
  }),
};
</script>




<style scoped>
content-begin {
  margin-top: 7vh;
  padding-bottom: 7vh;
}
</style>
