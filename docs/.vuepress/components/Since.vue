<script setup>
defineProps(['version', 'project', 'isBlock'])

</script>

<template>
    <span class="since" :class="{ 'd-block' : isBlock }">
      🕓 Since <span class="badge bg-warning text-dark"><span class="since-value">version {{ version }}</span></span>
    </span>
</template>

<style scoped>
.d-block {
  display: block
}
.since {
  font-size: 1rem;
  color: #915930;
  background-color: #faf2da;
  padding: 0.2rem 0.8rem;
  border-radius: 10px;
}
.since-value {
  font-weight: bold
}
[data-theme='dark'] .since {
  color: #87bece;
  background-color: #2e343f;
}

</style>
