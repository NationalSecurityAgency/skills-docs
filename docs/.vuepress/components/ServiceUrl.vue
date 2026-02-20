<script setup>
import { computed } from 'vue'
import {themeData} from "@vuepress/plugin-theme-data/client";

const serviceUrl = computed(() => themeData.value.skillTreeServiceUrl)
</script>

<template>
    <a :href="serviceUrl" target="_blank">{{ serviceUrl }}</a>
</template>

<style scoped>

</style>