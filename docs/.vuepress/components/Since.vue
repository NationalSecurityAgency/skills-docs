<template>
  <div>
    <h6><b-badge>since <b-badge variant="info">{{ project }}:{{ version }}</b-badge></b-badge></h6>
  </div>
</template>

<script>
export default {
  name: "Since",
  props: ['version', 'project']
}
</script>

<style scoped>

</style>
