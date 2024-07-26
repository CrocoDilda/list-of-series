<script setup lang="ts">
import CardList from '../../components/card_list/CardList.vue'
import GetStart from '../../components/get_start/GetStart.vue'
import AddMovie from '../../components/add_movie/AddMovie.vue'

import { onMounted, ref, watch } from 'vue'

import { useCounterStore } from '../../stores/counter'

const autorizated = useCounterStore() // Получаем хранилище
const list = ref(<any>[])
const showAddMovie = ref<boolean>(false)

function closeAddMovie() {
  showAddMovie.value = !showAddMovie.value
}

async function mount() {
  try {
    const url = `https://73509f220638bf50.mokky.dev/users?name=${autorizated.useUserName}&_relations=movies`
    const response = await fetch(url)

    const data = await response.json()

    list.value = data[0].movie.movies
  } catch (error) {
    console.log(error)
    list.value = false
  } finally {
    console.log(list.value)
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
    <GetStart @callAddMovie="closeAddMovie" v-if="!list" />
    <CardList :list="list" v-if="!!list" />
    <AddMovie @callAddMovie="closeAddMovie" v-if="showAddMovie" />
  </div>
</template>
