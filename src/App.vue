<script setup lang="ts">
import { provide, ref } from 'vue'
import StartComponent from './pages/start_component/StartComponent.vue'

// Добавляю имя приложения в переменную для того, что бы с лучае чего можно было легко поменять
const appName = 'Delayed Viewing'
provide('appName', appName)
</script>

<template>
  <header class="header">
    <p class="app-name">{{ appName }}</p>
  </header>
  <StartComponent v-if="false" />
</template>

<style scoped>
.header {
  position: absolute;
  padding: 15px 0 0 15px;
}

.start--wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 15vw;
}
</style>
