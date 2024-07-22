<script setup lang="ts">
import { provide, ref } from 'vue'
import StartPage from './pages/start_page/StartPage.vue'

// Добавляю имя приложения в переменную для того, что бы с лучае чего можно было легко поменять
const appName = 'Delayed Viewing'
provide('appName', appName)
</script>

<template>
  <header class="header">
    <p class="app-name">{{ appName }}</p>
  </header>
  <StartPage v-if="false" />
</template>

<style scoped>
.header {
  position: absolute;
  padding: 15px 0 0 15px;
}
</style>
