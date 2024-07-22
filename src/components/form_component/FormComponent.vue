<script setup lang="ts">
import { ref } from 'vue'
import RegistrationItem from './/registration/RegistrationItem.vue'
import AuthorizationItem from './/authorization/AuthorizationItem.vue'

type Props = {
  startPage: string
}
const props = defineProps<Props>()

const activePage = ref(props.startPage)
function changeActiveForm(page: string) {
  page === 'registration'
    ? (activePage.value = 'registration')
    : (activePage.value = 'authorization')
}
</script>

<template>
  <div class="wrapper">
    <form class="wrapp">
      <RegistrationItem @changeActiveForm="changeActiveForm" v-if="activePage === 'registration'" />
      <AuthorizationItem
        @changeActiveForm="changeActiveForm"
        v-if="activePage === 'authorization'"
      />
    </form>
  </div>
</template>

<style scoped>
.wrapp {
  display: grid;
  align-content: center;
  height: 100vh;
}
</style>
