<script setup>
import { computed } from 'vue'
import {themeData} from "@vuepress/plugin-theme-data/client";
const props = defineProps({
  visibilityFlag: String,
  visibilityValue: {
    type: Boolean,
    default: true,
  },
})
const getVisible = computed(() => themeData.value.visibility[props.visibilityFlag] === props.visibilityValue)
</script>

<template>
 <span v-if="getVisible">
        <slot/>
    </span>
</template>

<style scoped>

</style>

<style scoped>

</style>
