<script setup>
import { computed } from 'vue'
import {useThemeData} from "@vuepress/theme-default/client";

const themeData = useThemeData()
const serviceUrl = computed(() => themeData.value.skillTreeServiceUrl)
</script>

<template>
    <a :href="serviceUrl" target="_blank">{{ serviceUrl }}</a>
</template>

<style scoped>

</style>