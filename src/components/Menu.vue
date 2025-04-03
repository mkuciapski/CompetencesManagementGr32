<script setup lang="ts">
const menuItems = [
  {
    Address: '/',
    Title: 'home',
  },
  {
    Address: '/lecture',
    Title: 'lecture',
  },
  {
    Address: '/computed',
    Title: 'computed',
  },
  {
    Address: '/watchEffect',
    Title: 'watchEffect',
  },
  {
    Address: '/courseOpinions',
    Title: 'Course opinions',
  },
]
</script>

<template>
  <div>
    <RouterLink
      v-for="menuItem in menuItems"
      :to="menuItem.Address"
      :key="menuItem.Address"
      class="p-2 text-blue-400 hover:text-blue-800"
    >
      {{ menuItem.Title }}
    </RouterLink>
  </div>
</template>

<style scoped></style>
