<template>
  <aside class="version-list-panel">
    <h3>版本历史</h3>
    <ul>
      <li v-for="(version, key) in sortedVersions" :key="key" :class="{ latest: version.latest }">
        <span class="version-name">{{ key }}</span>
        <a :href="version['changelog']" target="_blank" class="version-link docs-link">更新日志</a>
        <button @click="download_hq_dist(version['download'])" class="version-link download-link">
          下载
        </button>
        <span v-if="version.latest" class="badge">最新</span>
      </li>
    </ul>
    <!-- <a
      href="https://kicad.eda.cn/docs/?tag=%E5%AE%A3%E5%8F%91&type="
      target="_blank"
      class="more-link"
    >
      更多版本
    </a> -->
  </aside>
</template>

<script>
import { computed } from "vue";
import { download_hq_dist } from "@/common";


export default {
  name: "VersionHistory",
  props: {
    versions: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const sortedVersions = computed(() => {
      return Object.entries(props.versions)
        .sort(([a], [b]) => b.localeCompare(a, undefined, { numeric: true })) // Numeric descending order
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    });

    return {
      sortedVersions,
      download_hq_dist
    };
  },
};
</script>

<style scoped>
.version-list-panel {
  position: fixed;
  top: 8vh;
  right: 20px;
  z-index: 1000;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
  max-width: 250px;
  /* Adjusted width for extra links */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.version-list-panel h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.version-list-panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.version-list-panel li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.version-list-panel .version-name {
  flex: 1;
  font-weight: bold;
  color: #333;
}

.version-list-panel .version-link {
  text-decoration: none;
  font-size: 0.9rem;
  margin-left: 5px;
}

.version-list-panel .version-link.docs-link {
  color: #007bff;
  /* Blue for docs */
}

.version-list-panel .version-link.download-link {
  color: #28a745;
  /* Green for download */
}

.version-list-panel .version-link:hover {
  text-decoration: underline;
}

.version-list-panel .more-link {
  display: block;
  text-align: center;
  margin-top: 15px;
  font-size: 0.9rem;
  text-decoration: none;
  color: #005fa9;
}

.version-list-panel .more-link:hover {
  text-decoration: underline;
}

.badge {
  background-color: #005fa9;
  color: #fff;
  border-radius: 4px;
  font-size: 0.8rem;
  padding: 2px 6px;
  margin-left: 8px;
}
</style>
