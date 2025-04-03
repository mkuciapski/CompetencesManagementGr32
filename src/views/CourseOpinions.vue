<script setup lang="ts">
import BlogPosts from '@/components/BlogPosts.vue'

const _opinions = [
  {
    Author: 'Aleksander',
    Text: 'Fatalne',
    Type: 'text-red-500',
  },
  {
    Author: 'Patryk',
    Text: 'Nieobeceny',
    Type: 'text-orange-500',
  },
  {
    Author: 'Amelia',
    Text: 'Nigdy w terminie',
  },
]
</script>

<template>
  <BlogPosts course="Pension sytems around the world" :opinions="_opinions" />
</template>

<style scoped></style>
