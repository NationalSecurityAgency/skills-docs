<script setup>
import { computed } from 'vue'
import {themeData} from "@vuepress/plugin-theme-data/client";
const props = defineProps({
  url: String,
  label: String,
  boldWhenNoLink: {
    type: Boolean,
    default: true,
  },
})
const noExternalLinks = computed(() => themeData.value.visibility['noExternalLinks'] === true)
</script>

<template>
  <span>
    <span v-if="noExternalLinks" :class="{ 'font-weight-bold': boldWhenNoLink }">{{ label }}</span>
    <a v-else :href="url" target="_blank" rel="noopener noreferrer">{{ label }} <i class="fas fa-external-link-alt" aria-hidden="true" style="font-size: 0.8rem"></i></a>
  </span>
</template>