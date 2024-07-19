<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <input @input="model = $event.target" class="text-input" type="text" />
</template>
