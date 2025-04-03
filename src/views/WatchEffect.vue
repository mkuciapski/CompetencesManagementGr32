<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const _todoID = ref(1)
const _todoDetails = ref()

watchEffect(async () => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${_todoID.value}`)
    .then((response) => response.json())
    .then((json) => (_todoDetails.value = json))
})
</script>

<template>
  <div><input type="number" v-model="_todoID" /></div>
  <div>{{ _todoDetails }}</div>
</template>

<style scoped></style>
