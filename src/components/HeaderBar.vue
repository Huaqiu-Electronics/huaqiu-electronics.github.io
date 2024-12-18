<template>
  <header>
    <div class="logo-container">
      <a href="/"><img src="../assets/kicad_x_huaqiu.png" alt="Logo" class="logo"></a>
    </div>
    <nav>
      <ul>
        <li><a href="/docs/index.html" target="_blank">博客专栏</a></li>
        <li><a href="https://www.eda.cn/ecadViewer/" target="_blank">KiCad 查看器</a></li>
        <li><a href="https://www.eda.cn/ecadViewer/top100" target="_blank">KiCad设计</a></li>
        <li><a href="https://www.eda.cn/" target="_blank">器件搜索</a></li>
        <li><a href="https://www.eda.cn/bom/" target="_blank">BOM匹配</a></li>
        <li><router-link to="/download">软件下载</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Reset some default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* Style the header */
header {
  width: 100%;
  background-color: rgba(207, 227, 250, 0.4) !important;
  color: #1a1414;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7vh;
}

/* Logo container */
.logo-container {
  position: absolute;
  left: 1rem;
}

.logo {
  height: 40px;
}

/* Navigation styling */
header nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

header nav ul li {
  margin: 0;
  padding: 0;
}

header nav ul li a {
  color: #000000;
  text-decoration: none;
  padding: 1rem;
  display: block;
  cursor: pointer;
}

header nav ul li a:hover {
  color: #585757;
}

/* Add some padding to the top of the main content to prevent it from being hidden under the fixed header */
main {
  padding-top: 70px;
  /* Adjust this value based on the header's height */
}

/* Add some basic styling for sections */
section {
  padding: 2rem;
  margin: 2rem 0;
}

section h2 {
  margin-bottom: 1rem;
}

section p {
  margin-bottom: 1rem;
}

.construction-image {
  width: 100%;
  height: auto;
}

.styled-card {
  background-color: rgba(0, 0, 0, 0.1) !important;
  color: white;
}

.rounded-card {
  border-radius: 16px;
}

header nav ul li a,
header nav ul li router-link {
  color: #000000;
  text-decoration: none;
  padding: 1rem;
  margin-left: 1rem;
  display: block;
  cursor: pointer;
}

header nav ul li a:hover,
header nav ul li router-link:hover {
  color: #585757;
}
</style>
