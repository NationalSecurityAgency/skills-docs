<template>
    <span class="h6">
      <a :href="$withBase('/dashboard/user-guide/users.html#user-roles')" target="_blank">
        <i class="fas fa-user-shield"></i> Requires <span class="badge rounded-pill bg-warning text-dark role">{{ role }}</span> role <i
          class="fas fa-external-link-alt" style="font-size: 0.8rem;"></i>
      </a>
    </span>
</template>

<script>
export default {
  name: "Since",
  props: ['role']
}
</script>

<style scoped>
.role {
  font-size: 1rem;
  font-weight: bold
}
</style>
