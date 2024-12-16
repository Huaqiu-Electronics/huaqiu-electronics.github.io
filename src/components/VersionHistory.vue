<template>
  <aside class="version-list-panel">
    <ul>
      <li
        v-for="(version, key) in sortedVersions"
        :key="key"
      >
        <a
          :href="version['download']"
          target="_blank"
          class="version-link download-link"
          >{{ key }}</a
        >
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
    };
  },
};
</script>

<style scoped>
.version-list-panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.version-list-panel li {
  display: flex;
  justify-content: center; /* Aligns content in the center */
  align-items: center;
  margin-bottom: 10px;
}

.version-list-panel .version-link {
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;
  color: #28a745; /* Green for download */
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
