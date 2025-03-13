<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'

//Model
const headerTitle = ref('<i>Competences</i>') //Data z Options API

setTimeout(() => {
  headerTitle.value = '<b>Reactive</b>'
}, 3000)
// Metody
</script>

<template>
  <h1><span v-html="headerTitle"></span></h1>
</template>

<style scoped></style>
