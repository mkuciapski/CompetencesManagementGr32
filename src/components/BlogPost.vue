<script setup lang="ts">
defineProps(['author', 'text', 'type'])
</script>

<template>
  <div :class="type">{{ author }}: {{ text }}</div>
</template>

<style scoped></style>
