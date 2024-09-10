<script setup lang="ts">
import { ref } from "vue"

import WelcomeScrin from "../WelcomeScreen/WelcomeScreen.vue"
import FormComponent from "../../components/FormComponent/FormComponent.vue"

const startScreenActive = ref(true)
const formItemActive = ref(false)
const formPage = ref("")

function callForm(page: string) {
  startScreenActive.value = false
  formItemActive.value = true
  formPage.value = page
}
</script>

<template>
  <div v-if="startScreenActive" class="start--wrapper">
    <WelcomeScrin @callForm="callForm" class="start-screen" />
  </div>
  <FormComponent v-if="formItemActive" :startPage="formPage" />
</template>

<style scoped>
.start--wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
