<script setup lang="ts">
import { provide, ref } from 'vue'
import StartScreen from './pages/start_screen/StartScreen.vue'
import FormItem from './pages/form_item/FormItem.vue'

const startScreenActive = ref(true)
const formItemActive = ref(false)
const formPage = ref('')

function callForm(page: string) {
  startScreenActive.value = false
  formItemActive.value = true
  formPage.value = page
}

// Добавляю имя приложения в переменную для того, что бы с лучае чего можно было легко поменять
const appName = 'Delayed Viewing'
provide('appName', appName)
</script>

<template>
  <header class="header">
    <p class="app-name">{{ appName }}</p>
  </header>
  <div v-if="startScreenActive" class="start--wrapper">
    <StartScreen @callForm="callForm" class="start-screen" />
  </div>
  <FormItem v-if="formItemActive" :startPage="formPage" />
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
