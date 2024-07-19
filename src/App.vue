<script setup lang="ts">
import { provide } from 'vue'
import StartScreen from './pages/start_screen/StartScreen.vue'

const appName = 'Delayed Viewing'
provide('appName', appName)
</script>

<template>
  <div class="start--wrapper">
    <StartScreen v-if="false" class="start-screen" />
  </div>
</template>

<style scoped>
.start--wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 15vw;
}
</style>
