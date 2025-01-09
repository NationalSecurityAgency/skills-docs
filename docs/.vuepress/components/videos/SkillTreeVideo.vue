<script setup>
const props = defineProps({
  videoMeta: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div>
    <div class="h2">{{ videoMeta.title }}</div>
    <p class="text-secondary" style="font-size: 1.1rem">
      {{ videoMeta.description }}
    </p>
    <div style="margin-left: 2rem; margin-right: 2rem;">
      <a :href="videoMeta.url" target="_blank"> <i class="fas fa-camera-retro border p-2 text-secondary border-secondary rounded" style="font-size: 1.5rem"></i> Watch the Video <i class="fas fa-external-link-alt"></i></a>
    </div>
  </div>
</template>

<style scoped>

</style>
