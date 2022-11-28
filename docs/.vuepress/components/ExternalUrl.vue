<template>
  <span>
    <span v-if="noExternalLinks" :class="{ 'font-weight-bold': boldWhenNoLink }">{{ label }}</span>
    <a v-else :href="url" target="_blank" rel="noopener noreferrer">{{ label }} <i class="fas fa-external-link-alt" aria-hidden="true" style="font-size: 0.8rem"></i></a>
  </span>
</template>

<script>
export default {
  name: "ExternalUrl",
  props: {
    url: String,
    label: String,
    boldWhenNoLink: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    noExternalLinks() {
      return this.$themeConfig.visibility['noExternalLinks'] === true;
    },
  }
}
</script>

<style scoped>

</style>