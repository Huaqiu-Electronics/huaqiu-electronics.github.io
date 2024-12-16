<template>
  <div class="download-container" ref="dropdownContainer">
    <!-- Button to trigger the latest version download or show history versions -->
    <button @click="handleClick" class="download-btn">
      Download
      <span @click.stop="toggleDropdown" v-if="!isDropdownOpen">▼</span>
      <span @click.stop="toggleDropdown" v-else>▲</span>
    </button>

    <!-- Floating dropdown list for historical versions, only visible when isDropdownOpen is true -->
    <VersionHistory :versions="versions" v-if="isDropdownOpen" class="dropdown-list" />
  </div>
</template>

<script>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

export default {
  setup() {
    const versions = ref({
      "8.0.6": {
        download: "https://www.eda.cn/data/kicad-release/kicad-huaqiu-8.0.6-x86_64.exe.zip",
        changelog: "https://kicad.eda.cn/docs/posts/KiCad-8.0.6-Release.html",
      },
      "8.0.7": {
        download: "https://www.eda.cn/data/kicad-release/kicad-huaqiu-8.0.7-x86_64.exe.zip",
        changelog: "https://kicad.eda.cn/docs/posts/KiCad-8.0.7-Release.html",
      },
    });

    const isDropdownOpen = ref(false);
    const dropdownContainer = ref(null);

    const latestVersion = computed(() => {
      const sortedVersions = Object.keys(versions.value).sort((a, b) => {
        return b.localeCompare(a, undefined, { numeric: true });
      });
      return sortedVersions[0];
    });

    const handleClick = () => {
      if (!isDropdownOpen.value) {
        downloadLatestVersion();
      }
    };

    const downloadLatestVersion = () => {
      const latest = latestVersion.value;
      window.location.href = versions.value[latest].download;
    };

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const handleOutsideClick = (event) => {
      if (
        dropdownContainer.value &&
        !dropdownContainer.value.contains(event.target)
      ) {
        isDropdownOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleOutsideClick);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("click", handleOutsideClick);
    });

    return {
      versions,
      latestVersion,
      isDropdownOpen,
      handleClick,
      downloadLatestVersion,
      toggleDropdown,
      dropdownContainer,
    };
  },
};
</script>

<style scoped>
/* Button styles */
.download-container {
  position: relative;
  /* Container for positioning the dropdown */
}

.download-btn {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

/* Floating dropdown styles */
.dropdown-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  /* Position below the button */
  left: 0;
  background-color: #f1f1f1;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 100%;
}

.dropdown-list li {
  padding: 8px 12px;
  background-color: #ffffff;
}

.dropdown-list li a {
  text-decoration: none;
  color: #000;
}

.dropdown-list li:hover {
  background-color: #ddd;
}
</style>
