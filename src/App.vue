<script setup lang="ts">
import '../author'
import { provide, ref, watch } from 'vue'
import StartPage from './pages/start_page/StartPage.vue'
import HomePage from './pages/home_page/HomePage.vue'

import { useCounterStore } from './stores/counter'
const autorizated = useCounterStore() // Получаем хранилище

// Добавляю имя приложения в переменную для того, что бы с лучае чего можно было легко поменять
const appName = 'Delayed Viewing'

const userIsAuthorized = ref(false)

provide('appName', appName)
provide('userIsAuthorized', userIsAuthorized)

watch(userIsAuthorized, () => console.log(userIsAuthorized))
</script>

<template>
  <div class="app">
    <header class="header">
      <p class="app-name">{{ appName }}</p>
    </header>
    <StartPage v-if="!autorizated.userIsAuthorized" />
    <HomePage v-else />
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
