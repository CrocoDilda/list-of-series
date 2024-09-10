<script setup lang="ts">
import { provide } from "vue"
import StartPage from "./pages/StartPage/StartPage.vue"
import HomePage from "./pages/HomePage/HomePage.vue"

import { useCounterStore } from "./stores/counter"
const autorizated = useCounterStore() // Получаем хранилище

// Добавляю имя приложения в переменную для того, что бы в случае чего можно было легко поменять
const appName = "Delayed Viewing"

provide("appName", appName)
</script>

<template>
  <div class="app">
    <header class="header">
      <p class="app-name">{{ appName }}</p>
    </header>
    <StartPage v-if="!autorizated.useUserName" />
    <HomePage v-else />
  </div>
</template>

<style scoped>
.app {
  position: relative;
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
