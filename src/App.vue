<script setup lang="ts">
import { provide, ref } from 'vue'
import StartScreen from './pages/start_screen/StartScreen.vue'
import FormItem from './pages/form_item/FormItem.vue'

// Добавляю имя приложения в переменную для того, что бы с лучае чего можно было легко поменять
const appName = 'Delayed Viewing'
provide('appName', appName)
</script>

<template>
  <div v-if="false" class="start--wrapper">
    <StartScreen class="start-screen" />
  </div>
  <FormItem />
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
