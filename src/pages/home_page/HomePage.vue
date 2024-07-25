<script setup lang="ts">
import CardList from '../../components/card_list/CardList.vue'
import GetStart from '../../components/get_start/GetStart.vue'
import AddMovie from '../../components/add_movie/AddMovie.vue'

import { onMounted, ref, watch } from 'vue'

import { useCounterStore } from '../../stores/counter'

const autorizated = useCounterStore() // Получаем хранилище
const list = ref<any>()

async function mount() {
  console.log('HomePage')
  try {
    const url = `https://73509f220638bf50.mokky.dev/users?name=${autorizated.useUserName}&_relations=movies`
    const response = await fetch(url)

    const data = await response.json()

    list.value = data[0].movie.movies
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  mount()
})

watch(list, () => {
  console.log(list.value)
})
</script>

<template>
  <div class="wrapper container">
    <AddMovie />
    <CardList :list="list" v-if="!!list" />
    <GetStart v-else />
  </div>
</template>
