<template>
  <div class="container">
    <div
      v-for="browser in browsers"
      :key="browser.name"
      class="browser-container">
      <img
        :src="browser.icon"
        :style="browser.iconHeightOverride ? `height: ${browser.iconHeightOverride}px` : 'height: auto;'"
        style="width: auto;"/>
      <div class="browser-version">{{ browser.version }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        browsers: [
          {
            name: 'Firefox',
            icon: '/img/browser-icons/firefox.png',
            version: 50,
          },
          {
            name: 'Chrome',
            icon: '/img/browser-icons/chrome.png',
            version: 50,
          },
          {
            name: 'Edge',
            icon: '/img/browser-icons/edge.png',
            iconHeightOverride: 64,
            version: 16,
          },
          {
            name: 'Safari',
            icon: '/img/browser-icons/safari.png',
            version: '5.1',
          },
          {
            name: 'Opera',
            icon: '/img/browser-icons/opera.png',
            version: 60,
          },
        ]
      };
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .browser-container {
    display: inline-block;
    border-radius: 5px;
    padding: 0.5rem 0.5rem;
  }

  .browser-container .browser-version {
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    text-align: center;
    background-color: #f3f3f3;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
</style>
