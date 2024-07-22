<script setup lang="ts">
import '../author'
import { provide, onMounted } from 'vue'
import StartPage from './pages/start_page/StartPage.vue'
import HomePage from './pages/home_page/HomePage.vue'

// Добавляю имя приложения в переменную для того, что бы с лучае чего можно было легко поменять
const appName = 'Delayed Viewing'
provide('appName', appName)
</script>

<template>
  <div class="app">
    <header class="header">
      <p class="app-name">{{ appName }}</p>
    </header>
    <StartPage />
    <HomePage v-if="false" />
  </div>
</template>

<style scoped>
.app {
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
}

.header {
  position: sticky;
  padding: 15px 0 10px 15px;
  background-color: var(--color-main-gray);
}
</style>
