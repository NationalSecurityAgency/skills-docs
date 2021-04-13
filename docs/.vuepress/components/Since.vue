<template>
    <span class="h6 pl-2" :class="{ 'd-block' : isBlock }">
      <a :href="$withBase('/release-notes/')" target="_blank">
        <i class="fas fa-history"></i> Since <b-badge variant="info">{{ project }}:{{ version }}</b-badge>
      </a>
    </span>
</template>

<script>
export default {
  name: "Since",
  props: ['version', 'project', 'isBlock']
}
</script>

<style scoped>

</style>
