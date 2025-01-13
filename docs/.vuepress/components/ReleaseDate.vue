<script setup>
defineProps(['date'])
</script>

<template>
<span class="date">
   <span class="badge bg-secondary release-date">📆 {{ date }}</span>
</span>
</template>

<style scoped>
.date {
  font-size: 1rem;
  color: #915930;
  background-color: #faf2da;
  padding: 0.2rem 0.8rem;
  border-radius: 10px;
}
.release-date {
  font-size: 1rem;
}
</style>
