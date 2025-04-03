<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import BlogPost from '@/components/BlogPost.vue'
const props = defineProps(['course', 'opinions'])
props.opinions.forEach((opinion: any) => {
  opinion.Author = opinion.Author.toUpperCase()
})
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
