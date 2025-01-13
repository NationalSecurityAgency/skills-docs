<script setup>
import {ref} from "vue";
import videoMetaJson from "./videos/skilltree-training-videos.json";
import SkillTreeVideo from "./videos/SkillTreeVideo.vue";

const videoMeta = ref(videoMetaJson)
</script>

<template>
  <div>
    <div v-for="vid in videoMeta"
         :key="vid.title">
      <SkillTreeVideo
          :video-meta="vid"
          class="mt-5"/>
      <hr />
    </div>
  </div>
</template>

<style scoped>
</style>

