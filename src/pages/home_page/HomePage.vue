<script setup lang="ts">
import CardList from '../../components/card_list/CardList.vue'

import { onMounted } from 'vue'

// ?_relations=movies

async function mount() {
  console.log('HomePage')
  try {
    const url = `https://73509f220638bf50.mokky.dev/users?userName=${autorizated.useUserName}&_relations=movies`
    const response = await fetch(url)

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  mount()
})
</script>

<template>
  <div class="wrapper container">
    <!-- <CardList /> -->
  </div>
</template>
