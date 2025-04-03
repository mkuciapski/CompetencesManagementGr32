<script setup lang="ts">
import BlogPost from '@/components/BlogPost.vue'
defineProps(['course', 'opinions'])
</script>

<template>
  <h2 class="font-bold!">{{ course }}</h2>
  <BlogPost
    v-for="opinion in opinions"
    :author="opinion.Author"
    :text="opinion.Text"
    :type="opinion.Type"
    :key="opinion.Author + opinion.Text"
  />
</template>

<style scoped></style>
