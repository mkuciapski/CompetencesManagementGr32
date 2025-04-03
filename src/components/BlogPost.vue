<script setup lang="ts">
// defineProps(['author', 'text', 'type'])
// defineProps({
//   text: {
//     type: String,
//     required: true,
//     validator: (v: string) => v.length > 4,
//   },
//   author: {
//     type: String,
//     required: true,
//     default: 'unknown',
//   },
//   type: {
//     type: String,
//     required: false,
//   },
// })
withDefaults(
  defineProps<{
    text: string
    author?: string
    type?: string
  }>(),
  { author: 'unknown' },
)
</script>

<template>
  <div :class="type">{{ author }}: {{ text }}</div>
</template>

<style scoped></style>
