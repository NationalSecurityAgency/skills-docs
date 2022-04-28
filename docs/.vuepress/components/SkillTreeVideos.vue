<template>
  <div>
    <div v-for="vid in videoMeta"
         :key="vid.title">
      <skill-tree-video
          :video-meta="vid"
          class="mt-5"/>
      <hr />
    </div>
  </div>
</template>

<script>
import videoMeta from "./videos/skilltree-training-videos.json";
import SkillTreeVideo from "./videos/SkillTreeVideo";

export default {
  name: "SkillTreeVideos",
  components: {SkillTreeVideo},
  data() {
    return {
      videoMeta: videoMeta,
    };
  },
};
</script>

<style scoped>

</style>
