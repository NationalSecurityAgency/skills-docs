<template>
<div class="d-inline-block py-1">
   <span class="badge bg-secondary release-date"><i class="fas fa-calendar mr-2" aria-hidden="true"/> {{ date }}</span>
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
