<template>
  <v-app>
    <v-main class="d-flex flex-column min-height-full bg-grey-lighten-5">
      <HeaderBar />
      <router-view />

    </v-main>
  </v-app>
</template>

<script>

import { on_enter_page } from '@/common';

on_enter_page()

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9f7e4ca2aea2a0c4434bef192de9e498";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

export default {
  data: () => ({
    icons: ['mdi-wechat', 'mdi-twitter', 'mdi-youtube', 'mdi-github'],
  }),
};
</script>
<style scoped></style>
