<template>
<div class="mb-2">
  <b-badge variant="secondary" class="release-date"><i class="fas fa-calendar mr-2"/>{{ date }}</b-badge>
</div>
</template>

<script>
export default {
  name: "ReleaseDate",
  props: ['date']
}
</script>

<style scoped>
.release-date {
  font-size: 1rem;
}
</style>
