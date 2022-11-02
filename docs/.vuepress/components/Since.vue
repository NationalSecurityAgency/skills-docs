<template>
    <span class="h6 pl-2" :class="{ 'd-block' : isBlock }">
      <i class="fas fa-history" aria-hidden="true"></i> Since <b-badge variant="warning"><span class="since-value">{{ project }}:{{ version }}</span></b-badge>
    </span>
</template>

<script>
export default {
  name: "Since",
  props: ['version', 'project', 'isBlock']
}
</script>

<style scoped>
.since-value {
  font-size: 1rem;
  font-weight: bold
}
</style>
