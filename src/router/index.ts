import { createRouter, createWebHistory } from 'vue-router';
import DownloadPage from '@/pages/DownloadPage.vue';
import HomePage from '@/pages/HomePage.vue';
import LinuxDownloadPage from '@/pages/LinuxDownloadPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/download',
    name: 'Download',
    component: DownloadPage,
  },
  {
    path: "/download/linux",
    name: 'LinuxDownloadPage',
    component: LinuxDownloadPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
