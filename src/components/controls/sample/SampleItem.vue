<script setup lang="ts">
import { componentLogic } from './types'

const { count, increment } = componentLogic()
</script>

<template>
  <button @click="increment">Now: {{ count }}</button>
</template>
