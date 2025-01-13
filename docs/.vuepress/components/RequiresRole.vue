<script setup>
defineProps(['role'])
</script>

<template>
    <span class="role">
      🛡️ Requires <a :href="$withBase('/dashboard/user-guide/users.html#user-roles')" target="_blank"> <span class="">{{ role }}</span> Role</a>
    </span>
</template>


<style scoped>
.role {
  font-size: 1rem;
  color: #915930;
  background-color: #faf2da;
  padding: 0.2rem 0.8rem;
  border-radius: 10px;
}
</style>
