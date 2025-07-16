<script setup>
import { computed } from 'vue'
import {useData} from "@vuepress/theme-default/client";
const props = defineProps({
  visibilityFlag: String,
  visibilityValue: {
    type: Boolean,
    default: true,
  },
})
const themeData = useData()
const getVisible = computed(() => themeData.theme.value.visibility[props.visibilityFlag] === props.visibilityValue)
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
