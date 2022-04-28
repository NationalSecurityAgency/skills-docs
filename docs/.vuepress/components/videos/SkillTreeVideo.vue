<template>
  <div>
    <div class="h2">{{ videoMeta.title }}</div>
    <p class="text-secondary" style="font-size: 1.1rem">
      {{ videoMeta.description }}
    </p>
    <div style="margin-left: 2rem; margin-right: 2rem;">
      <video width="100%" controls>
        <source v-if="videoMeta.urlMp4Src" :src="videoMeta.urlMp4Src" type="video/mp4">
        <source v-if="videoMeta.urlOggSrc" :src="videoMeta.urlOggSrc" type="video/ogg">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillTreeVideo",
  props: {
    videoMeta: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
