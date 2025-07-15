<script setup>
defineProps(['date'])
</script>

<template>
  <div class="badge bg-secondary release-date"><i>Release Month:</i> <span class="date">📆 {{ date }}</span></div>
</template>

<style scoped>
.date {
  font-size: 1rem;
  color: #c2410c;
  background-color: #ffedd5;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  margin-top: 0.5rem;
}
.release-date {
  font-size: 1rem;
  margin-top: 0.5rem;
}
</style>
